import {createServer} from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {randomBytes, randomUUID, scrypt, timingSafeEqual, createHash} from 'node:crypto';
import {promisify} from 'node:util';
import {mkdirSync, readFileSync} from 'node:fs';
import {dirname, resolve, extname, basename} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {AppError, createGemini} from './ai.js';

const derive = promisify(scrypt);
const publicPath = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const SESSION_AGE = 7 * 24 * 60 * 60;
const sha = value => createHash('sha256').update(value).digest('hex');
const safeUser = row => row ? {id: row.id, name: row.name, email: row.email} : null;
const fail = (status, message) => { throw new AppError(status, message); };
const requireText = (value, name, max = 100) => {
    if (typeof value !== 'string' || !value.trim() || value.length > max) fail(400, `Enter a valid ${name}.`);
    return value.trim();
};
async function passwordHash(password, salt = randomBytes(16).toString('hex')) {
    const derived = await derive(password, salt, 64, {N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024});
    return `${salt}:${derived.toString('hex')}`;
}
async function matches(password, stored) {
    const candidate = await passwordHash(password, stored.split(':')[0]);
    return timingSafeEqual(Buffer.from(candidate), Buffer.from(stored));
}
function passwordValue(body, registering = false) {
    if (typeof body.password !== 'string' || Buffer.byteLength(body.password) > 72
        || body.password.length < (registering ? 10 : 1)) fail(400, 'Use a password with at least 10 characters and no more than 72 UTF-8 bytes.');
    return body.password;
}
function languageValue(language) {
    if (!['en', 'te', 'hi'].includes(language)) fail(400, 'Choose English, Telugu or Hindi.');
    return language;
}
function detectMime(bytes) {
    if (bytes.subarray(0, 5).toString() === '%PDF-') return 'application/pdf';
    if (bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return 'image/png';
    if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return 'image/jpeg';
    if (bytes.subarray(0,4).toString() === 'RIFF' && bytes.subarray(8,12).toString() === 'WEBP') return 'image/webp';
    fail(415, 'Choose a valid PDF, JPG, PNG or WebP document.');
}
async function readBody(req, max) {
    if (Number(req.headers['content-length']) > max) fail(413, 'This file is too large. The limit is 10 MB.');
    let size = 0;
    const chunks = [];
    for await (const chunk of req) {
        size += chunk.length;
        if (size > max) fail(413, 'This request is too large.');
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
}
async function readJSON(req) {
    if (!(req.headers['content-type'] || '').startsWith('application/json')) fail(415, 'Send a JSON request.');
    try {
        const value = JSON.parse((await readBody(req, 32768)).toString());
        if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error();
        return value;
    } catch(error) { if(error instanceof AppError) throw error; fail(400, 'The request was not valid JSON.'); }
}

export async function createApplication({
    databasePath = process.env.DATABASE_PATH || './data/samjhao.sqlite',
    production = process.env.NODE_ENV === 'production',
    origin = process.env.APP_ORIGIN,
    analyzer = createGemini({apiKey: process.env.GEMINI_API_KEY, model: process.env.GEMINI_MODEL}),
    authLimit = 20
} = {}) {
    if (production && (!origin || !origin.startsWith('https://') || new URL(origin).origin !== origin)) {
        throw new Error('Production requires APP_ORIGIN to be the exact HTTPS origin.');
    }
    if (databasePath !== ':memory:') mkdirSync(dirname(resolve(databasePath)), {recursive: true, mode: 0o700});
    const db = new DatabaseSync(databasePath);
    db.exec(`PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
        CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL, password TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS analyses (id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            created_at TEXT NOT NULL, body TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 1);
        CREATE INDEX IF NOT EXISTS analyses_owner ON analyses(user_id, created_at DESC);
        CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, reset INTEGER NOT NULL);`);
    const dummyPassword = await passwordHash(randomBytes(20).toString('hex'));
    function rate(key, limit, window = 600000) {
        const now = Date.now();
        db.prepare('DELETE FROM rate_limits WHERE reset < ?').run(now);
        const entry = db.prepare('SELECT * FROM rate_limits WHERE key=?').get(key);
        if (entry && entry.count >= limit) fail(429, 'Too many attempts. Please try again in a few minutes.');
        db.prepare('INSERT INTO rate_limits(key,count,reset) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1').run(key, now + window);
    }
    function session(req) {
        const token = /(?:^|;\s*)samjhao_session=([a-f0-9]{64})(?:;|$)/.exec(req.headers.cookie || '')?.[1];
        if (!token) return null;
        return db.prepare('SELECT users.* FROM sessions JOIN users ON users.id=sessions.user_id WHERE sessions.token=? AND sessions.expires>?').get(sha(token), Date.now());
    }
    function auth(req) { const user = session(req); if (!user) fail(401, 'Please sign in to continue.'); return user; }
    function clearCookie(res) {
        res.setHeader('Set-Cookie', `samjhao_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${production ? '; Secure' : ''}`);
    }
    function establishSession(req, res, user) {
        const previous = /(?:^|;\s*)samjhao_session=([a-f0-9]{64})(?:;|$)/.exec(req.headers.cookie || '')?.[1];
        if (previous) db.prepare('DELETE FROM sessions WHERE token=?').run(sha(previous));
        db.prepare('DELETE FROM sessions WHERE expires<?').run(Date.now());
        const token = randomBytes(32).toString('hex');
        db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(sha(token), user.id, Date.now() + SESSION_AGE * 1000);
        res.setHeader('Set-Cookie', `samjhao_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_AGE}${production ? '; Secure' : ''}`);
    }
    function getPlan(id, user) {
        const row = db.prepare('SELECT * FROM analyses WHERE id=? AND user_id=?').get(id, user.id);
        if (!row) fail(404, 'This document was not found.');
        return {row, analysis: JSON.parse(row.body)};
    }
    const server = createServer(async (req, res) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'same-origin');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; connect-src 'self'; font-src 'self' data:; object-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
        res.setHeader('Cache-Control', 'no-store');
        if (production) res.setHeader('Strict-Transport-Security', 'max-age=31536000');
        const abort = new AbortController();
        res.on('close', () => { if(!res.writableEnded) abort.abort(); });
        const send = (status, value) => { if (!res.destroyed) { res.writeHead(status, {'Content-Type': 'application/json; charset=utf-8'}); res.end(JSON.stringify(value)); } };
        try {
            const url = new URL(req.url, 'http://localhost');
            const path = url.pathname;
            const method = req.method;
            if (!path.startsWith('/api/')) {
                if (!['GET','HEAD'].includes(method)) fail(405, 'Method not allowed.');
                // A fixed allowlist prevents traversal and never exposes server code, .env or the database.
                const files = {'/app.js':'app.js','/vendor/runtime.js':'vendor/runtime.js','/styles.css':'styles.css','/favicon.svg':'favicon.svg'};
                const isRoute = /^\/(?:login|register|history|plan\/[a-zA-Z0-9-]+)?\/?$/.test(path);
                const relative = files[path] || (isRoute ? 'index.html' : null);
                if (!relative) fail(404, 'Page not found.');
                const types = {'.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.html':'text/html'};
                const body = readFileSync(resolve(publicPath, relative));
                res.writeHead(200, {'Content-Type': `${types[extname(relative)]}; charset=utf-8`});
                res.end(method === 'HEAD' ? undefined : body); return;
            }
            if (!['GET', 'HEAD'].includes(method)) {
                if (req.headers['x-samjhao-request'] !== '1') fail(403, 'Request verification failed. Refresh the page and try again.');
                const requestOrigin = req.headers.origin;
                if (requestOrigin && requestOrigin !== (origin || `http://${req.headers.host}`)) fail(403, 'This request is from a different site.');
                if (req.headers['sec-fetch-site'] === 'cross-site') fail(403, 'This request is from a different site.');
            }
            if (method === 'GET' && path === '/api/health') return send(200, {ok: true, analysisAvailable: analyzer.available});
            if (method === 'GET' && path === '/api/me') return send(200, {user: safeUser(session(req))});
            if (method === 'POST' && ['/api/register','/api/login'].includes(path)) {
                rate(`auth-ip:${sha(req.socket.remoteAddress || 'unknown')}`, authLimit);
                const body = await readJSON(req);
                const email = requireText(body.email, 'email address', 254).toLowerCase();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(400, 'Enter a valid email address.');
                rate(`auth-account:${sha(email)}`, 10);
                const registering = path.endsWith('/register');
                const password = passwordValue(body, registering);
                let user = db.prepare('SELECT * FROM users WHERE email=?').get(email);
                if (registering) {
                    const name = requireText(body.name, 'name');
                    if (user) fail(409, 'An account already uses this email. Please sign in.');
                    user = {id: randomUUID(), email, name, password: await passwordHash(password)};
                    try { db.prepare('INSERT INTO users VALUES(?,?,?,?)').run(user.id, email, name, user.password); }
                    catch (error) { if(error.code?.startsWith('ERR_SQLITE')) fail(409, 'An account already uses this email. Please sign in.'); throw error; }
                } else {
                    const valid = await matches(password, user?.password || dummyPassword);
                    if (!user || !valid) fail(401, 'Email or password is incorrect.');
                }
                establishSession(req, res, user);
                return send(registering ? 201 : 200, {user: safeUser(user)});
            }
            if (method === 'POST' && path === '/api/logout') {
                const token = /(?:^|;\s*)samjhao_session=([a-f0-9]{64})(?:;|$)/.exec(req.headers.cookie || '')?.[1];
                if(token) db.prepare('DELETE FROM sessions WHERE token=?').run(sha(token));
                clearCookie(res); return send(200, {ok: true});
            }
            const user = auth(req);
            if (method === 'DELETE' && path === '/api/me') {
                rate(`delete:${user.id}`, 5);
                const body = await readJSON(req);
                if (!await matches(passwordValue(body), user.password)) fail(401, 'Password is incorrect.');
                db.prepare('DELETE FROM users WHERE id=?').run(user.id);
                clearCookie(res); return send(200, {ok: true});
            }
            if (method === 'GET' && path === '/api/analyses') {
                const page = Number(url.searchParams.get('page') || 1);
                if (!Number.isSafeInteger(page) || page < 1 || page > 100000) fail(400, 'Invalid page.');
                const rows = db.prepare('SELECT body FROM analyses WHERE user_id=? ORDER BY created_at DESC, id DESC LIMIT 21 OFFSET ?').all(user.id, (page - 1) * 20);
                return send(200, {analyses: rows.slice(0,20).map(r => {
                    const p = JSON.parse(r.body); delete p.sourceText; return p;
                }), hasMore: rows.length > 20});
            }
            if (method === 'POST' && path === '/api/analyses') {
                rate(`ai:${user.id}`, 10);
                if(!analyzer.available) fail(503, 'Document analysis is not available yet. Please try again later.');
                if(db.prepare('SELECT count(*) AS n FROM analyses WHERE user_id=?').get(user.id).n >= 250) fail(409, 'Your account has 250 documents. Delete an older analysis to add another.');
                if (!(req.headers['content-type'] || '').startsWith('multipart/form-data;')) fail(415, 'Upload a document using the file picker.');
                const bytes = await readBody(req, 11 * 1024 * 1024);
                let form;
                try { form = await new Request('http://localhost', {method:'POST', headers:{'Content-Type': req.headers['content-type']}, body: bytes}).formData(); }
                catch { fail(400, 'The upload could not be read. Select the file again.'); }
                const file = form.get('file');
                if (!file || typeof file.arrayBuffer !== 'function' || !file.size || file.size > 10 * 1024 * 1024) fail(400, 'Choose a non-empty document up to 10 MB.');
                if(form.get('consent') !== 'true') fail(400, 'Confirm that you agree to send the document for analysis.');
                const language = languageValue(form.get('language'));
                const level = form.get('level');
                if(!['simple','detailed'].includes(level)) fail(400, 'Choose an explanation style.');
                const document = Buffer.from(await file.arrayBuffer());
                const mimeType = detectMime(document);
                if(mimeType !== file.type) fail(415, 'The file contents do not match its type. Choose the original document.');
                const plan = await analyzer.analyze({bytes: document, mimeType, language, level, signal: abort.signal});
                if(abort.signal.aborted) return;
                auth(req); // Reject a deleted account or a session revoked while analysis was in flight.
                const analysis = {...plan, _id:randomUUID(), isSample:false, language, level,
                    fileName: basename(file.name.replaceAll('\\','/')).slice(0,255),
                    createdAt:new Date().toISOString(), completedStepIds:[]};
                db.prepare('INSERT INTO analyses(id,user_id,created_at,body) VALUES(?,?,?,?)').run(analysis._id, user.id, analysis.createdAt, JSON.stringify(analysis));
                return send(201, {analysis});
            }
            const match = /^\/api\/analyses\/([a-f0-9-]{36})(?:\/(progress|language|questions))?$/.exec(path);
            if (!match) fail(404, 'Endpoint not found.');
            const [,id,operation] = match;
            const {row, analysis} = getPlan(id, user);
            if (method === 'GET' && !operation) return send(200, {analysis});
            if (method === 'DELETE' && !operation) {
                db.prepare('DELETE FROM analyses WHERE id=? AND user_id=?').run(id, user.id);
                return send(200, {ok:true});
            }
            if (method === 'PATCH' && operation === 'progress') {
                const body = await readJSON(req);
                auth(req);
                const current = getPlan(id, user).analysis;
                const ids = body.completedStepIds;
                if(!Array.isArray(ids) || ids.length > current.steps.length || ids.some(id => !current.steps.some(s => s.id === id))) fail(400, 'The selected steps do not belong to this plan.');
                current.completedStepIds = [...new Set(ids)];
                db.prepare('UPDATE analyses SET body=?, revision=revision+1 WHERE id=? AND user_id=?').run(JSON.stringify(current), id, user.id);
                return send(200, {analysis:current});
            }
            if (method === 'PATCH' && operation === 'language') {
                const body = await readJSON(req);
                const language = languageValue(body.language);
                if(language === analysis.language) return send(200, {analysis});
                rate(`ai:${user.id}`, 10);
                const translation = await analyzer.translate({analysis, language, signal: abort.signal});
                if(abort.signal.aborted) return;
                auth(req);
                const latest = getPlan(id, user);
                if(latest.analysis.language !== analysis.language) fail(409, 'The plan was changed in another tab. Refresh and try again.');
                const updated = {...latest.analysis, ...translation, sourceText: analysis.sourceText,
                    steps: translation.steps.map((step,index) => ({...step, id: analysis.steps[index].id})),
                    completedStepIds: latest.analysis.completedStepIds};
                const result = db.prepare('UPDATE analyses SET body=?, revision=revision+1 WHERE id=? AND user_id=? AND revision=?').run(JSON.stringify(updated), id, user.id, latest.row.revision);
                if(!result.changes) fail(409, 'The plan changed. Refresh and try again.');
                return send(200, {analysis:updated});
            }
            if (method === 'POST' && operation === 'questions') {
                const body = await readJSON(req);
                const question = requireText(body.question, 'question', 2000);
                rate(`ai:${user.id}`, 10);
                const answer = await analyzer.answer({analysis, question, signal: abort.signal});
                if(abort.signal.aborted) return;
                auth(req); getPlan(id,user);
                return send(200, {answer});
            }
            fail(405, 'Method not allowed.');
        } catch(error) {
            // Never log request bodies, credentials, filenames or provider payloads.
            if (!(error instanceof AppError)) console.error('Request failed:', error.code || error.name);
            send(error.status || 500, {error: error instanceof AppError ? error.message : 'Something went wrong. Please try again.'});
        }
    });
    server.requestTimeout = 120000;
    server.headersTimeout = 15000;
    server.on('close', () => db.close());
    return {server, db};
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    const {server} = await createApplication();
    const port = Number(process.env.PORT || 3000);
    server.listen(port, process.env.HOST || '127.0.0.1', () => console.log(`Samjhao listening on port ${port}`));
    for(const signal of ['SIGTERM','SIGINT']) process.on(signal, () => {
        server.close(() => process.exit(0));
        setTimeout(() => process.exit(1), 10000).unref();
    });
}
