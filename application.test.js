import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {once} from 'node:events';
import {createApplication} from '../server/index.js';
import {createGemini, validatePlan} from '../server/ai.js';

export const plan = {
    documentType:'College notice', summary:'Submit your form by 18 October 2026.',
    sourceText:'Submit your form by 18 October 2026. Include a signed ID copy.',
    requiredDocuments:['Signed ID copy'], uncertainties:[], deadline:'18 October 2026',
    safety:{level:'normal',reason:'Verify details with the college.'},
    steps:[{id:'step-1',title:'Submit your form',explanation:'Include your signed ID copy.',sourceQuote:'Include a signed ID copy.',kind:'document'}]
};
// Deterministic provider only inside tests; production never substitutes samples for uploads.
const fakeAnalyzer = {
    available:true,
    async analyze({language}) {return {...structuredClone(plan), language};},
    async translate({analysis,language}) {return {...structuredClone(analysis), language,summary:'అక్టోబర్ 18 లోపు ఫారం ఇవ్వండి.'};},
    async answer() {return 'Include a signed ID copy.';}
};
async function listen(config) {
    const app = await createApplication(config);
    app.server.listen(0,'127.0.0.1'); await once(app.server,'listening');
    return {...app, base:`http://127.0.0.1:${app.server.address().port}`};
}
async function close(app) { await new Promise(resolve => app.server.close(resolve)); }
async function request(app,path,{method='GET',body,cookie,headers={}}={}) {
    const r = await fetch(app.base+path,{method,headers:{'X-Samjhao-Request':'1',...(body && !(body instanceof FormData) ? {'Content-Type':'application/json'} : {}),...(cookie ? {Cookie:cookie} : {}),...headers},
        body:body ? body instanceof FormData ? body : JSON.stringify(body) : undefined});
    return {status:r.status, data:await r.json(), cookie:r.headers.get('set-cookie')?.split(';')[0], headers:r.headers};
}
function upload(consent='true', content='%PDF-1.4\ntest fixture') {
    const data = new FormData();
    data.set('file',new Blob([content],{type:'application/pdf'}),'notice.pdf');
    data.set('language','en'); data.set('level','simple'); data.set('consent',consent);
    return data;
}

test('accounts, private plans, persistence, progress, translation and deletion', async t => {
    const directory = mkdtempSync(join(tmpdir(),'samjhao-test-'));
    const config = {databasePath:join(directory,'db.sqlite'),analyzer:fakeAnalyzer};
    let app = await listen(config);
    t.after(async () => {await close(app); rmSync(directory,{recursive:true,force:true});});
    const credentials={name:'A', email:'a@example.test', password:'a-long-password'};
    const a=await request(app,'/api/register',{method:'POST',body:credentials});
    assert.equal(a.status,201); assert.ok(a.cookie); assert.equal(a.data.user.password,undefined);
    assert.match(a.headers.get('set-cookie'),/HttpOnly/); assert.match(a.headers.get('set-cookie'),/SameSite=Lax/);
    assert.notEqual(app.db.prepare('SELECT password FROM users').get().password,credentials.password);
    assert.equal((await request(app,'/api/register',{method:'POST',body:credentials})).status,409);
    assert.equal((await request(app,'/api/login',{method:'POST',body:{...credentials,password:'incorrect'}})).status,401);
    assert.equal((await request(app,'/api/me',{cookie:a.cookie})).data.user.email,credentials.email);
    assert.equal((await request(app,'/api/analyses')).status,401);
    assert.equal((await request(app,'/api/analyses',{method:'POST',cookie:a.cookie,body:upload('false')})).status,400);
    assert.equal((await request(app,'/api/analyses',{method:'POST',cookie:a.cookie,body:upload('true','not a pdf')})).status,415);
    const result=await request(app,'/api/analyses',{method:'POST',cookie:a.cookie,body:upload()});
    assert.equal(result.status,201);
    const id=result.data.analysis._id;
    const b=await request(app,'/api/register',{method:'POST',body:{...credentials,email:'b@example.test'}});
    for(const [method,suffix,body] of [['GET','',undefined],['DELETE','',undefined],['PATCH','/progress',{completedStepIds:['step-1']}],['POST','/questions',{question:'What?'}],['PATCH','/language',{language:'te'}]]) {
        assert.equal((await request(app,`/api/analyses/${id}${suffix}`,{method,body,cookie:b.cookie})).status,404);
    }
    assert.equal((await request(app,`/api/analyses/${id}/progress`,{method:'PATCH',cookie:a.cookie,body:{completedStepIds:['step-99']}})).status,400);
    assert.equal((await request(app,`/api/analyses/${id}/progress`,{method:'PATCH',cookie:a.cookie,body:{completedStepIds:['step-1']}})).status,200);
    const translated=await request(app,`/api/analyses/${id}/language`,{method:'PATCH',cookie:a.cookie,body:{language:'te'}});
    assert.equal(translated.data.analysis.language,'te'); assert.deepEqual(translated.data.analysis.completedStepIds,['step-1']);
    assert.equal(translated.data.analysis.sourceText,plan.sourceText);
    assert.equal((await request(app,`/api/analyses/${id}/questions`,{method:'POST',cookie:a.cookie,body:{question:'What must I include?'}})).data.answer,'Include a signed ID copy.');
    const history=await request(app,'/api/analyses',{cookie:a.cookie});
    assert.equal(history.data.analyses.length,1); assert.equal(history.data.analyses[0].sourceText,undefined);
    await close(app); app=await listen(config);
    assert.equal((await request(app,'/api/me',{cookie:a.cookie})).data.user.email,credentials.email);
    assert.deepEqual((await request(app,`/api/analyses/${id}`,{cookie:a.cookie})).data.analysis.completedStepIds,['step-1']);
    assert.equal((await request(app,'/api/logout',{method:'POST',cookie:a.cookie})).status,200);
    assert.equal((await request(app,'/api/me',{cookie:a.cookie})).data.user,null);
    const login=await request(app,'/api/login',{method:'POST',body:credentials});
    assert.equal(login.status,200); assert.notEqual(login.cookie,a.cookie);
    assert.equal((await request(app,`/api/analyses/${id}`,{method:'DELETE',cookie:login.cookie})).status,200);
    assert.equal((await request(app,`/api/analyses/${id}`,{cookie:login.cookie})).status,404);
    await request(app,'/api/analyses',{method:'POST',cookie:login.cookie,body:upload()});
    assert.equal((await request(app,'/api/me',{method:'DELETE',cookie:login.cookie,body:{password:'incorrect'}})).status,401);
    assert.equal((await request(app,'/api/me',{method:'DELETE',cookie:login.cookie,body:{password:credentials.password}})).status,200);
    assert.equal(app.db.prepare('SELECT count(*) n FROM analyses WHERE user_id=?').get(a.data.user.id).n,0);
    assert.equal((await request(app,'/api/me',{cookie:login.cookie})).data.user,null);
    assert.equal((await request(app,'/api/me',{cookie:b.cookie})).data.user.email,'b@example.test');
});

test('CSRF, rate limits, malformed input, missing provider and static isolation', async t => {
    const app=await listen({databasePath:':memory:',authLimit:3}); t.after(()=>close(app));
    const credentials={name:'User',email:'user@example.test',password:'a-long-password'};
    assert.equal((await request(app,'/api/register',{method:'POST',body:credentials,headers:{Origin:'https://evil.example'}})).status,403);
    assert.equal((await request(app,'/api/register',{method:'POST',body:credentials,headers:{'X-Samjhao-Request':''}})).status,403);
    const account=await request(app,'/api/register',{method:'POST',body:credentials});
    assert.equal((await request(app,'/api/analyses',{method:'POST',body:upload(),cookie:account.cookie})).status,503);
    for(const path of ['/.env','/server/index.js','/data/samjhao.sqlite','/assets/missing.js']) assert.equal((await fetch(app.base+path)).status,404);
    assert.equal((await fetch(app.base+'/login')).status,200);
    for(let i=0;i<2;i++) await request(app,'/api/login',{method:'POST',body:{...credentials,password:'bad'}});
    assert.equal((await request(app,'/api/login',{method:'POST',body:credentials})).status,429);
    assert.equal((await request(app,'/api/analyses?page=-1',{cookie:account.cookie})).status,400);
});

test('model output validation rejects bad structure and unsupported source quotes', () => {
    assert.throws(()=>validatePlan({}),/could not be read/);
    const unsupported=structuredClone(plan); unsupported.steps[0].sourceQuote='Pay a made-up fee'; unsupported.deadline='tomorrow';
    const result=validatePlan(unsupported,{language:'en'});
    assert.equal(result.steps[0].kind,'verify'); assert.equal(result.steps[0].sourceQuote,''); assert.equal(result.deadline,null);
    assert.throws(()=>validatePlan(plan,{language:'te',originalSteps:[{},{}]}),/structure/);
});

test('Gemini request and response contract, and provider failures', async () => {
    let called;
    const adapter=createGemini({apiKey:'test-only-key',model:'test-model',fetchImpl:async (url,request) => {
        called={url,request};
        return new Response(JSON.stringify({candidates:[{finishReason:'STOP',content:{parts:[{text:JSON.stringify(plan)}]}}]}),{status:200});
    }});
    const result=await adapter.analyze({bytes:Buffer.from('%PDF-1.4'),mimeType:'application/pdf',language:'en',level:'simple'});
    assert.equal(result.summary,plan.summary); assert.equal(called.request.headers['x-goog-api-key'],'test-only-key');
    assert.ok(!called.url.includes('test-only-key'));
    const payload=JSON.parse(called.request.body);
    assert.equal(payload.contents[0].parts[1].inlineData.mimeType,'application/pdf');
    assert.equal(payload.generationConfig.responseMimeType,'application/json');
    assert.match(payload.systemInstruction.parts[0].text,/untrusted/);
    await assert.rejects(()=>createGemini().analyze({bytes:Buffer.alloc(1)}),{status:503});
    await assert.rejects(()=>createGemini({apiKey:'k',model:'test',fetchImpl:async()=>new Response('{}',{status:429})}).analyze({bytes:Buffer.alloc(1),language:'en'}),{status:429});
    await assert.rejects(()=>createGemini({apiKey:'k',model:'test',fetchImpl:async()=>new Response('{bad json')}).analyze({bytes:Buffer.alloc(1),language:'en'}),{status:502});
});
