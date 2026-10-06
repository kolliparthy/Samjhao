// Recovered application source. Dependencies are isolated in vendor/runtime.js.
const E0 = [{
    code: "en",
    label: "English",
    locale: "en-IN"
}, {
    code: "te",
    label: "తెలుగు",
    locale: "te-IN"
}, {
    code: "hi",
    label: "हिन्दी",
    locale: "hi-IN"
}]
  , Jo = {
    home: "New document",
    history: "My documents",
    signin: "Sign in",
    signout: "Sign out",
    settings: "Reading settings",
    tag: "PAPERWORK INTO ACTION",
    eyebrow: "A LITTLE CLARITY. A LOT OF CONFIDENCE.",
    title: "Big words.",
    title2: "Simple next steps.",
    intro: "A form, a bill, a confusing notice. Understand what it says — and what to do next, in your language.",
    uploadTitle: "Let’s make sense of your document",
    uploadHint: "Drop a file here, or choose how to add it",
    photo: "Take a photo",
    upload: "Upload document",
    formats: "PDF, JPG, PNG or WebP · up to 10 MB",
    language: "Explain it in",
    level: "Explanation style",
    simple: "Simple & clear",
    detailed: "More detail",
    privacyLine: "You decide what to upload. You can delete saved analyses anytime.",
    trySample: "Just looking around?",
    sampleDesc: "Try Ravi’s scholarship form. No account needed.",
    sample: "Try a sample",
    warning: "Explore a warning example",
    how1: "Add your document",
    how1d: "A clear photo or a file.",
    how2: "Understand it",
    how2d: "Everyday words, your language.",
    how3: "Take the next step",
    how3d: "One thing at a time, at your pace.",
    footer: "A little understanding goes a long way.",
    privacy: "Privacy & your data",
    help: "How it works",
    sampleBanner: "Sample experience — fictional documents, prepared explanations. No live AI call.",
    sampleLabel: "SAMPLE DOCUMENT",
    selected: "Ready when you are",
    consent: "I agree to send this document to Google Gemini for analysis and save its extracted text and action plan in my account.",
    analyze: "Explain my document",
    remove: "Remove",
    reading: "Reading your document…",
    readingHint: "Finding the important details and next steps. This can take a moment.",
    cancel: "Cancel",
    back: "Back",
    overview: "Your action plan",
    deadline: "Deadline",
    noDeadline: "No clear deadline found",
    done: "Done, next step",
    complete: "All steps complete",
    completeDesc: "You’ve worked through the plan. Keep your documents and any acknowledgement safe.",
    listen: "Listen",
    stop: "Stop audio",
    previous: "Previous",
    step: "Step",
    of: "of",
    source: "See the original wording",
    required: "What you’ll need",
    risk: "A moment of caution",
    riskDisclaimer: "Warning signals are not proof of fraud. Always verify important requests through an official channel.",
    question: "Something unclear?",
    questionHint: "Ask about a word or instruction in this document.",
    questionPlaceholder: "What does “self-attested” mean?",
    ask: "Ask",
    asking: "Thinking…",
    share: "Share your plan",
    shareHint: "Review this text before sharing. It may include personal information.",
    whatsapp: "Share on WhatsApp",
    copy: "Copy text",
    copied: "Copied",
    close: "Close",
    progress: "Your progress",
    completed: "completed",
    saved: "Progress saved",
    allSteps: "All steps",
    review: "Review your steps",
    reset: "Start again",
    historyTitle: "A little more organised.",
    historyIntro: "Your documents and next steps, all in one place.",
    empty: "A fresh start",
    emptyDesc: "Your saved documents will appear here. Start with a document or try a sample.",
    delete: "Delete",
    deleteConfirm: "Delete this analysis and its extracted text? This cannot be undone.",
    continue: "Continue",
    loginTitle: "Welcome back.",
    registerTitle: "A simpler way forward.",
    loginIntro: "Sign in to keep your documents and your progress together.",
    registerIntro: "Create an account to save your action plans.",
    name: "Your name",
    email: "Email address",
    password: "Password",
    create: "Create account",
    newHere: "New here?",
    haveAccount: "Already have an account?",
    passwordHint: "At least 10 characters; long Unicode passwords may reach the 72-byte limit.",
    loading: "Please wait…",
    large: "Larger text",
    contrast: "Higher contrast",
    speechRate: "Listening speed",
    voiceUnavailable: "No matching voice is installed on this device. You can still read every step. Add a voice for this language in your device settings.",
    speechUnavailable: "Audio is not available in this browser. Your instructions are still available as text.",
    sampleQuestion: "This example explains “self-attested”. Upload your own document to ask questions about its contents.",
    uncertain: "Check these details",
    deleteAccount: "Delete my account",
    accountDeleteHint: "Enter your password to permanently delete your account and all saved analyses.",
    notFound: "We couldn’t find that page.",
    goHome: "Back to home",
    saveFailed: "Your change could not be saved. Please try again.",
    text: "Text size",
    standard: "Standard",
    largeOption: "Large",
    privacyTitle: "Your paperwork. Your choice.",
    privacyBody: "When you analyze a real document, it is sent to Google Gemini through our server. Your account stores the extracted text, explanation, filename and progress; the uploaded file itself is not retained. You can delete an analysis or your entire account. Provider processing and retention are governed by your operator’s Google Gemini terms. Sample progress stays in this browser. Sharing only happens when you choose to send your plan. Avoid uploading passwords, OTPs or unnecessary financial details.",
    helpBody: "Add one clear document, choose your language, and review the action plan. Use Listen to hear a step and Done to save progress. Check the original wording and verify dates, payment requests and important requirements with the issuing organisation.",
    verify: "AI explanations can make mistakes. Check important details against the original document.",
    returnHome: "Start another document",
    authSave: "Sign in to analyze and save your document",
}
  , i2 = {
    home: "కొత్త పత్రం",
    history: "నా పత్రాలు",
    signin: "సైన్ ఇన్",
    signout: "సైన్ అవుట్",
    settings: "చదివే సెట్టింగ్‌లు",
    tag: "పత్రం నుంచి పని వరకు",
    eyebrow: "అర్థం చేసుకోండి. ధైర్యంగా ముందుకు వెళ్ళండి.",
    title: "పెద్ద పదాలు.",
    title2: "సులభమైన పనులు.",
    intro: "ఫారమ్, బిల్లు లేదా అర్థం కాని నోటీసు. అందులో ఏముందో, తర్వాత ఏం చేయాలో మీ భాషలో తెలుసుకోండి.",
    uploadTitle: "మీ పత్రాన్ని అర్థం చేసుకుందాం",
    uploadHint: "ఫైల్‌ను ఇక్కడ వేయండి లేదా కింద ఎంచుకోండి",
    photo: "ఫోటో తీయండి",
    upload: "పత్రం అప్‌లోడ్ చేయండి",
    language: "ఈ భాషలో వివరించండి",
    level: "వివరణ విధానం",
    simple: "సులభంగా",
    detailed: "మరింత వివరంగా",
    trySample: "ఒకసారి చూడాలనుకుంటున్నారా?",
    sampleDesc: "రవి స్కాలర్‌షిప్ నమూనాను చూడండి. ఖాతా అవసరం లేదు.",
    sample: "నమూనా చూడండి",
    warning: "హెచ్చరిక నమూనా చూడండి",
    how1: "పత్రం ఇవ్వండి",
    how1d: "స్పష్టమైన ఫోటో లేదా ఫైల్.",
    how2: "అర్థం చేసుకోండి",
    how2d: "సులభమైన మాటల్లో, మీ భాషలో.",
    how3: "తర్వాతి పని చేయండి",
    how3d: "ఒక్కో పని, మీ వేగంతో.",
    footer: "కొంచెం అవగాహనతో ముందుకు.",
    privacy: "గోప్యత & మీ సమాచారం",
    help: "ఇది ఎలా పనిచేస్తుంది",
    sampleBanner: "ఇది నమూనా మాత్రమే — కల్పిత పత్రం, ముందుగా సిద్ధం చేసిన వివరణ. ప్రత్యక్ష AI విశ్లేషణ కాదు.",
    sampleLabel: "నమూనా పత్రం",
    selected: "మీ పత్రం సిద్ధంగా ఉంది",
    consent: "ఈ పత్రాన్ని Google Geminiకి పంపడానికి, సేకరించిన వచనం మరియు పనుల జాబితాను నా ఖాతాలో సేవ్ చేయడానికి అంగీకరిస్తున్నాను.",
    analyze: "నా పత్రాన్ని వివరించండి",
    remove: "తొలగించండి",
    reading: "మీ పత్రాన్ని చదువుతోంది…",
    readingHint: "ముఖ్యమైన వివరాలు, చేయాల్సిన పనులు తెలుసుకుంటోంది. కొంత సమయం పట్టవచ్చు.",
    cancel: "రద్దు",
    back: "వెనక్కి",
    overview: "మీ పనుల ప్రణాళిక",
    deadline: "చివరి తేదీ",
    noDeadline: "స్పష్టమైన చివరి తేదీ లేదు",
    done: "అయింది, తర్వాతి పని",
    complete: "అన్ని పనులు పూర్తయ్యాయి",
    completeDesc: "పనులన్నీ పూర్తి చేశారు. మీ పత్రాలు, రసీదులను భద్రంగా ఉంచండి.",
    listen: "వినండి",
    stop: "ఆపండి",
    previous: "మునుపటి",
    step: "పని",
    of: "/",
    source: "అసలు వాక్యం చూడండి",
    required: "మీకు కావాల్సినవి",
    risk: "ఒక్కసారి జాగ్రత్తగా చూడండి",
    riskDisclaimer: "హెచ్చరికలు మోసానికి రుజువు కావు. అధికారికంగా నిర్ధారించుకోండి.",
    question: "ఏదైనా అర్థం కాలేదా?",
    questionHint: "ఈ పత్రంలోని పదం లేదా సూచన గురించి అడగండి.",
    questionPlaceholder: "“సెల్ఫ్ అటెస్టెడ్” అంటే ఏమిటి?",
    ask: "అడగండి",
    asking: "ఆలోచిస్తోంది…",
    share: "ప్రణాళిక పంచుకోండి",
    shareHint: "పంచుకునే ముందు చదవండి. వ్యక్తిగత సమాచారం ఉండవచ్చు.",
    whatsapp: "WhatsAppలో పంచుకోండి",
    copy: "వచనం కాపీ చేయండి",
    copied: "కాపీ అయింది",
    close: "మూసివేయండి",
    progress: "మీ పురోగతి",
    completed: "పూర్తయ్యాయి",
    saved: "పురోగతి సేవ్ అయింది",
    allSteps: "అన్ని పనులు",
    review: "పనులు చూడండి",
    reset: "మళ్లీ ప్రారంభించండి",
    historyTitle: "మీ పత్రాలు ఒకే చోట.",
    historyIntro: "మీ పత్రాలు, తర్వాత చేయాల్సిన పనులు ఇక్కడ చూడండి.",
    empty: "ఇంకా పత్రాలు లేవు",
    emptyDesc: "మీ పత్రం ఇవ్వండి లేదా నమూనా చూడండి.",
    delete: "తొలగించండి",
    deleteConfirm: "ఈ విశ్లేషణను తొలగించాలా? తిరిగి పొందలేరు.",
    continue: "కొనసాగించండి",
    loginTitle: "మళ్లీ స్వాగతం.",
    registerTitle: "సులభంగా ముందుకు.",
    loginIntro: "మీ పత్రాలు, పురోగతిని సేవ్ చేయడానికి సైన్ ఇన్ చేయండి.",
    registerIntro: "మీ పనుల ప్రణాళికలను సేవ్ చేయడానికి ఖాతా తెరవండి.",
    name: "మీ పేరు",
    email: "ఈమెయిల్",
    password: "పాస్‌వర్డ్",
    create: "ఖాతా తెరవండి",
    newHere: "కొత్తగా వచ్చారా?",
    haveAccount: "ఇప్పటికే ఖాతా ఉందా?",
    loading: "దయచేసి వేచి ఉండండి…",
    contrast: "ఎక్కువ కాంట్రాస్ట్",
    speechRate: "వినిపించే వేగం",
    voiceUnavailable: "మీ పరికరంలో ఈ భాష వాయిస్ లేదు. సూచనలు చదవవచ్చు. సెట్టింగ్‌లలో ఈ భాష వాయిస్ జోడించండి.",
    speechUnavailable: "ఈ బ్రౌజర్‌లో ఆడియో లేదు. సూచనలు చదవవచ్చు.",
    sampleQuestion: "ఈ నమూనాలో “సెల్ఫ్ అటెస్టెడ్” గురించి తెలుసుకోవచ్చు. మీ పత్రంపై ప్రశ్నలు అడగడానికి దాన్ని అప్‌లోడ్ చేయండి.",
    uncertain: "ఈ వివరాలు నిర్ధారించుకోండి",
    text: "అక్షరాల పరిమాణం",
    standard: "సాధారణం",
    largeOption: "పెద్దవి",
    verify: "AI వివరణలో పొరపాట్లు ఉండవచ్చు. ముఖ్యమైన వివరాలను అసలు పత్రంతో పోల్చండి.",
    returnHome: "మరో పత్రం ఇవ్వండి",
    authSave: "మీ పత్రాన్ని విశ్లేషించి సేవ్ చేయడానికి సైన్ ఇన్ చేయండి"
}
  , r2 = {
    home: "नया दस्तावेज़",
    history: "मेरे दस्तावेज़",
    signin: "साइन इन",
    signout: "साइन आउट",
    settings: "पढ़ने की सेटिंग",
    tag: "कागज़ से काम तक",
    eyebrow: "थोड़ी समझ। बहुत सारा भरोसा।",
    title: "बड़े शब्द।",
    title2: "आसान अगले कदम।",
    intro: "फॉर्म, बिल या कोई उलझी हुई सूचना। समझें कि उसमें क्या लिखा है और अब क्या करना है — अपनी भाषा में।",
    uploadTitle: "आइए, आपका दस्तावेज़ समझें",
    uploadHint: "फ़ाइल यहाँ छोड़ें या नीचे एक विकल्प चुनें",
    photo: "फ़ोटो लें",
    upload: "दस्तावेज़ अपलोड करें",
    language: "इस भाषा में समझाएँ",
    level: "समझाने का तरीका",
    simple: "सरल और स्पष्ट",
    detailed: "अधिक जानकारी",
    trySample: "पहले आज़माना चाहते हैं?",
    sampleDesc: "रवि का छात्रवृत्ति फॉर्म देखें। खाते की ज़रूरत नहीं।",
    sample: "नमूना आज़माएँ",
    warning: "चेतावनी का उदाहरण देखें",
    how1: "दस्तावेज़ जोड़ें",
    how1d: "एक साफ़ फ़ोटो या फ़ाइल।",
    how2: "इसे समझें",
    how2d: "आसान शब्द, आपकी भाषा।",
    how3: "अगला कदम उठाएँ",
    how3d: "एक समय में एक काम, अपनी गति से।",
    footer: "थोड़ी समझ, एक बड़ी शुरुआत।",
    privacy: "गोपनीयता और आपका डेटा",
    help: "यह कैसे काम करता है",
    sampleBanner: "यह नमूना है — काल्पनिक दस्तावेज़ और तैयार व्याख्या। लाइव AI विश्लेषण नहीं।",
    sampleLabel: "नमूना दस्तावेज़",
    selected: "आपका दस्तावेज़ तैयार है",
    consent: "मैं इस दस्तावेज़ को Google Gemini को भेजने और निकाला गया पाठ तथा कार्य योजना अपने खाते में सेव करने के लिए सहमत हूँ।",
    analyze: "मेरा दस्तावेज़ समझाएँ",
    remove: "हटाएँ",
    reading: "आपका दस्तावेज़ पढ़ रहे हैं…",
    readingHint: "ज़रूरी जानकारी और अगले कदम ढूँढ रहे हैं। थोड़ा समय लग सकता है।",
    cancel: "रद्द करें",
    back: "वापस",
    overview: "आपकी कार्य योजना",
    deadline: "आखिरी तारीख",
    noDeadline: "स्पष्ट आखिरी तारीख नहीं मिली",
    done: "हो गया, अगला कदम",
    complete: "सभी कदम पूरे हुए",
    completeDesc: "आपने योजना पूरी कर ली। अपने दस्तावेज़ और रसीद सुरक्षित रखें।",
    listen: "सुनें",
    stop: "आवाज़ रोकें",
    previous: "पिछला",
    step: "कदम",
    of: "/",
    source: "मूल शब्द देखें",
    required: "आपको क्या चाहिए",
    risk: "एक बार ध्यान दें",
    riskDisclaimer: "चेतावनी के संकेत धोखाधड़ी का प्रमाण नहीं हैं। आधिकारिक संपर्क से पुष्टि करें।",
    question: "कुछ समझ नहीं आया?",
    questionHint: "इस दस्तावेज़ के किसी शब्द या निर्देश के बारे में पूछें।",
    questionPlaceholder: "“स्व-प्रमाणित” का क्या मतलब है?",
    ask: "पूछें",
    asking: "सोच रहे हैं…",
    share: "योजना साझा करें",
    shareHint: "साझा करने से पहले पढ़ लें। इसमें निजी जानकारी हो सकती है।",
    whatsapp: "WhatsApp पर साझा करें",
    copy: "पाठ कॉपी करें",
    copied: "कॉपी हो गया",
    close: "बंद करें",
    progress: "आपकी प्रगति",
    completed: "पूरे हुए",
    saved: "प्रगति सेव हो गई",
    allSteps: "सभी कदम",
    review: "कदम देखें",
    reset: "फिर से शुरू करें",
    historyTitle: "सब कुछ एक जगह।",
    historyIntro: "आपके दस्तावेज़ और अगले कदम, साथ में।",
    empty: "एक नई शुरुआत",
    emptyDesc: "यहाँ आपके सेव किए दस्तावेज़ दिखेंगे। दस्तावेज़ जोड़ें या नमूना देखें।",
    delete: "हटाएँ",
    deleteConfirm: "यह विश्लेषण हटाएँ? इसे वापस नहीं लाया जा सकेगा।",
    continue: "जारी रखें",
    loginTitle: "फिर से स्वागत है।",
    registerTitle: "एक आसान शुरुआत।",
    loginIntro: "अपने दस्तावेज़ और प्रगति सेव रखने के लिए साइन इन करें।",
    registerIntro: "कार्य योजनाएँ सेव करने के लिए खाता बनाएँ।",
    name: "आपका नाम",
    email: "ईमेल पता",
    password: "पासवर्ड",
    create: "खाता बनाएँ",
    newHere: "पहली बार आए हैं?",
    haveAccount: "पहले से खाता है?",
    loading: "कृपया प्रतीक्षा करें…",
    contrast: "अधिक कंट्रास्ट",
    speechRate: "सुनने की गति",
    voiceUnavailable: "आपके डिवाइस पर इस भाषा की आवाज़ उपलब्ध नहीं है। सभी कदम पढ़ सकते हैं। सेटिंग में इस भाषा की आवाज़ जोड़ें।",
    speechUnavailable: "इस ब्राउज़र में ऑडियो उपलब्ध नहीं है। निर्देश पढ़ सकते हैं।",
    sampleQuestion: "इस नमूने में “स्व-प्रमाणित” के बारे में जानें। अपने दस्तावेज़ पर सवाल पूछने के लिए उसे अपलोड करें।",
    uncertain: "इन बातों की पुष्टि करें",
    text: "अक्षरों का आकार",
    standard: "सामान्य",
    largeOption: "बड़ा",
    verify: "AI से गलती हो सकती है। ज़रूरी जानकारी मूल दस्तावेज़ से मिलाएँ।",
    returnHome: "दूसरा दस्तावेज़ शुरू करें",
    authSave: "दस्तावेज़ समझने और सेव करने के लिए साइन इन करें"
}
  , Fu = {
    en: Jo,
    te: {
        ...Jo,
        ...i2
    },
    hi: {
        ...Jo,
        ...r2
    }
};
Fu.en.adviceLabel = "Suggested verification step";
Object.assign(Fu.te, {
    adviceLabel: "నిర్ధారించుకోవడానికి సూచన",
    privacyLine: "ఏ పత్రం ఇవ్వాలో మీరే నిర్ణయించండి. సేవ్ చేసిన వివరాలను ఎప్పుడైనా తొలగించవచ్చు.",
    passwordHint: "కనీసం 10 అక్షరాలు. గరిష్ఠంగా 72 UTF-8 బైట్లు.",
    privacyTitle: "మీ పత్రాలు. మీ నిర్ణయం.",
    privacyBody: "నిజమైన పత్రాన్ని విశ్లేషించేటప్పుడు మా సర్వర్ ద్వారా Google Geminiకి పంపుతాము. పత్రం నుంచి సేకరించిన వచనం, వివరణ, ఫైల్ పేరు, పురోగతి మీ ఖాతాలో సేవ్ అవుతాయి. అసలు ఫైల్‌ను ఉంచము. విశ్లేషణను లేదా మీ ఖాతా మొత్తాన్ని తొలగించవచ్చు. Google Gemini డేటా నిబంధనలు వర్తిస్తాయి. నమూనా పురోగతి ఈ బ్రౌజర్‌లోనే ఉంటుంది. మీరు ఎంచుకున్నప్పుడే ప్రణాళిక పంచుకోవచ్చు. పాస్‌వర్డ్‌లు, ఓటీపీలు లేదా అవసరం లేని ఆర్థిక వివరాలు అప్‌లోడ్ చేయవద్దు.",
    helpBody: "స్పష్టమైన పత్రం ఇచ్చి, భాష ఎంచుకుని, పనుల జాబితా చూడండి. వినండి బటన్‌తో సూచన వినవచ్చు. అయింది బటన్‌తో పురోగతి సేవ్ అవుతుంది. తేదీలు, చెల్లింపులు, ముఖ్యమైన సూచనలను అసలు పత్రంతో లేదా అధికారిక ఆఫీసుతో నిర్ధారించుకోండి.",
    deleteAccount: "నా ఖాతా తొలగించండి",
    accountDeleteHint: "ఖాతా, సేవ్ చేసిన విశ్లేషణలను శాశ్వతంగా తొలగించడానికి పాస్‌వర్డ్ ఇవ్వండి.",
    notFound: "ఈ పేజీ కనబడలేదు.",
    goHome: "మొదటి పేజీకి",
    saveFailed: "సేవ్ కాలేదు. మళ్లీ ప్రయత్నించండి."
});
Object.assign(Fu.hi, {
    adviceLabel: "पुष्टि के लिए सुझाया कदम",
    privacyLine: "क्या अपलोड करना है, आप चुनें। सेव किया विश्लेषण कभी भी हटा सकते हैं।",
    passwordHint: "कम से कम 10 अक्षर। अधिकतम 72 UTF-8 बाइट।",
    privacyTitle: "आपके दस्तावेज़। आपका फैसला।",
    privacyBody: "असली दस्तावेज़ का विश्लेषण करते समय उसे हमारे सर्वर से Google Gemini को भेजा जाता है। आपके खाते में निकाला गया पाठ, व्याख्या, फ़ाइल का नाम और प्रगति सेव होती है। मूल फ़ाइल नहीं रखी जाती। आप विश्लेषण या पूरा खाता हटा सकते हैं। Google Gemini की डेटा शर्तें लागू होती हैं। नमूने की प्रगति इस ब्राउज़र में रहती है। योजना तभी साझा होती है जब आप भेजने का विकल्प चुनते हैं। पासवर्ड, ओटीपी या गैरज़रूरी वित्तीय जानकारी अपलोड न करें।",
    helpBody: "एक साफ़ दस्तावेज़ जोड़ें, भाषा चुनें और कार्य योजना देखें। सुनें बटन से निर्देश सुनें और हो गया बटन से प्रगति सेव करें। मूल शब्द पढ़ें। तारीख, भुगतान और ज़रूरी शर्तों की पुष्टि आधिकारिक कार्यालय से करें।",
    deleteAccount: "मेरा खाता हटाएँ",
    accountDeleteHint: "खाता और सभी सेव किए विश्लेषण हमेशा के लिए हटाने हेतु अपना पासवर्ड डालें।",
    notFound: "यह पेज नहीं मिला।",
    goHome: "होम पर लौटें",
    saveFailed: "बदलाव सेव नहीं हुआ। फिर से कोशिश करें।"
});
function s2() {
    return m.jsxs("span", {
        className: "logo",
        children: [m.jsxs("span", {
            className: "logo-mark",
            children: [m.jsx(g0, {
                size: 24,
                strokeWidth: 1.8
            }), m.jsx("i", {})]
        }), "samjhao", m.jsx("span", {
            className: "logo-dot",
            children: "."
        })]
    })
}
function Xr({title: u, children: r, onClose: c}) {
    const s = O.useRef();
    return O.useEffect( () => {
        const o = s.current;
        return o.showModal(),
        () => o.close()
    }
    , []),
    m.jsxs("dialog", {
        ref: s,
        onCancel: c,
        onClick: o => {
            o.target === s.current && c()
        }
        ,
        "aria-labelledby": "dialog-title",
        children: [m.jsxs("div", {
            className: "modal-head",
            children: [m.jsx("h2", {
                id: "dialog-title",
                children: u
            }), m.jsx("button", {
                className: "icon-button",
                "aria-label": "Close",
                onClick: c,
                children: m.jsx(b0, {})
            })]
        }), r]
    })
}
function Kn({children: u}) {
    return u ? m.jsx("div", {
        className: "error",
        role: "alert",
        children: u
    }) : null
}
function x0({value: u, onChange: r, label: c, disabled: s=!1}) {
    return m.jsxs("label", {
        className: "language-select",
        children: [m.jsx("span", {
            children: c
        }), m.jsx("select", {
            value: u,
            disabled: s,
            onChange: o => r(o.target.value),
            children: E0.map(o => m.jsx("option", {
                value: o.code,
                children: o.label
            }, o.code))
        })]
    })
}
function Tp({text: u, lang: r, rate: c, t: s}) {
    const [o,d] = O.useState(!1)
      , [h,g] = O.useState("")
      , v = O.useRef(0);
    function E() {
        var p;
        v.current++,
        (p = window.speechSynthesis) == null || p.cancel(),
        d(!1)
    }
    O.useEffect( () => (E(),
    g(""),
    E), [u, r]);
    function S() {
        if (o) {
            E();
            return
        }
        if (!("speechSynthesis" in window)) {
            g(s.speechUnavailable);
            return
        }
        const p = window.speechSynthesis.getVoices()
          , N = p.find(Y => Y.lang.toLowerCase() === E0.find(B => B.code === r).locale.toLowerCase()) || p.find(Y => Y.lang.toLowerCase().startsWith(r));
        if (!N) {
            g(s.voiceUnavailable);
            return
        }
        E();
        const L = v.current
          , q = new SpeechSynthesisUtterance(u);
        q.lang = N.lang,
        q.voice = N,
        q.rate = c,
        q.onend = () => {
            v.current === L && d(!1)
        }
        ,
        q.onerror = () => {
            v.current === L && (d(!1),
            g(s.speechUnavailable))
        }
        ,
        g(""),
        d(!0),
        window.speechSynthesis.speak(q)
    }
    return O.useEffect( () => {
        var p;
        (p = window.speechSynthesis) == null || p.getVoices()
    }
    , []),
    m.jsxs("div", {
        children: [m.jsxs("button", {
            className: "button listen " + (o ? "active" : ""),
            onClick: S,
            children: [o ? m.jsx(n2, {
                size: 17
            }) : m.jsx(u2, {
                size: 19
            }), " ", o ? s.stop : s.listen]
        }), h && m.jsx("p", {
            className: "voice-note",
            role: "status",
            children: h
        })]
    })
}
function c2() {
    return m.jsxs("div", {
        className: "paper-art",
        "aria-hidden": "true",
        children: [m.jsx("div", {
            className: "art-orbit"
        }), m.jsx("span", {
            className: "little-star star-one",
            children: "✳"
        }), m.jsx("span", {
            className: "little-star star-two",
            children: "✧"
        }), m.jsxs("div", {
            className: "paper-sheet",
            children: [m.jsx("div", {
                className: "paper-fold"
            }), m.jsx("div", {
                className: "paper-symbol",
                children: m.jsx(Za, {
                    size: 25
                })
            }), m.jsxs("div", {
                className: "paper-lines",
                children: [m.jsx("i", {}), m.jsx("i", {}), m.jsx("i", {}), m.jsx("i", {}), m.jsx("i", {})]
            }), m.jsx("div", {
                className: "paper-signature",
                children: "Aa"
            })]
        }), m.jsx("div", {
            className: "art-arrow",
            children: m.jsx(xl, {
                size: 36
            })
        }), m.jsxs("div", {
            className: "action-slip",
            children: [m.jsxs("div", {
                className: "slip-header",
                children: [m.jsx(l2, {
                    size: 16
                }), m.jsx("span", {
                    children: "A little clearer."
                })]
            }), m.jsxs("div", {
                children: [m.jsx("b", {
                    children: m.jsx(Vr, {
                        size: 15
                    })
                }), m.jsx("i", {})]
            }), m.jsxs("div", {
                children: [m.jsx("b", {
                    children: "2"
                }), m.jsx("i", {})]
            }), m.jsxs("div", {
                children: [m.jsx("b", {
                    children: "3"
                }), m.jsx("i", {})]
            })]
        }), m.jsx("span", {
            className: "art-note",
            children: "One step at a time."
        })]
    })
}
const bx = false
  , Ga = Ie.create({
    baseURL: "/api",
    timeout: 1e5,
    withCredentials: !0,
    headers: {
        "X-Samjhao-Request": "1"
    }
});
function Va(u) {
    var r, c;
    return ((c = (r = u.response) == null ? void 0 : r.data) == null ? void 0 : c.error) || (u.code === "ECONNABORTED" ? "This took longer than expected. Please try again." : "We could not connect. Check your connection and try again.")
}
const tf = "samjhao-sample-progress-v1"
  , Kr = {
    read() {
        try {
            const u = JSON.parse(localStorage.getItem(tf) || "{}");
            return Object.fromEntries(Object.entries(u || {}).filter( ([r,c]) => ["sample-scholarship", "sample-warning"].includes(r) && c && Array.isArray(c.completedStepIds)).map( ([r,c]) => [r, {
                ...c,
                completedStepIds: [...new Set(c.completedStepIds.filter(s => /^step-[1-4]$/.test(s) && (r !== "sample-warning" || s === "step-1")))]
            }]))
        } catch {
            return {}
        }
    },
    save(u) {
        const r = this.read();
        r[u._id] = {
            completedStepIds: u.completedStepIds,
            language: u.language,
            createdAt: u.createdAt
        },
        localStorage.setItem(tf, JSON.stringify(r))
    },
    remove(u) {
        const r = this.read();
        delete r[u],
        localStorage.setItem(tf, JSON.stringify(r))
    }
};
function HomePage() {
    const {t: u, lang: r, setLang: c, file: s, setFile: o, level: d, setLevel: h, user: g, authReady: v} = es();
    const navigate = pf();
    const E = O.useRef()
      , S = O.useRef()
      , p = O.useRef()
      , [N,L] = O.useState("")
      , [q,Y] = O.useState(!1)
      , [B,A] = O.useState(!1)
      , [H,X] = O.useState(!1)
      , [V,le] = O.useState("");
    O.useEffect( () => {
        if (s != null && s.type.startsWith("image/")) {
            const Q = URL.createObjectURL(s);
            return le(Q),
            () => URL.revokeObjectURL(Q)
        }
        le("")
    }
    , [s]),
    O.useEffect( () => () => {
        var Q;
        return (Q = p.current) == null ? void 0 : Q.abort()
    }
    , []);
    function se(Q) {
        if (L(""),
        Y(!1),
        !!Q) {
            if (!["application/pdf", "image/jpeg", "image/png", "image/webp"].includes(Q.type)) {
                L("Choose a PDF, JPG, PNG or WebP file.");
                return
            }
            if (Q.size > 10 * 1024 * 1024 || Q.size === 0) {
                L("Choose a non-empty file smaller than 10 MB.");
                return
            }
            o(Q)
        }
    }
    async function F() {
        L("");
        if (!g) { navigate("/login"); return; }
        if (!s || !q || H) return;
        const controller = new AbortController();
        p.current = controller;
        const form = new FormData();
        form.append("file", s);
        form.append("language", r);
        form.append("level", d);
        form.append("consent", "true");
        X(true);
        try {
            const {data} = await Ga.post("/analyses", form, {signal: controller.signal});
            o(null);
            navigate(`/plan/${data.analysis._id}`);
        } catch (error) {
            if (!Ie.isCancel(error)) L(Va(error));
        } finally { X(false); p.current = null; }
    }
    return m.jsxs("div", {
        className: "home-page",
        children: [m.jsxs("section", {
            className: "hero",
            children: [m.jsxs("div", {
                className: "hero-copy",
                children: [m.jsxs("div", {
                    className: "eyebrow",
                    children: [m.jsx("span", {}), u.eyebrow]
                }), m.jsxs("h1", {
                    children: [u.title, m.jsx("br", {}), m.jsx("em", {
                        children: u.title2
                    })]
                }), m.jsx("p", {
                    children: u.intro
                }), m.jsxs("div", {
                    className: "hero-languages",
                    children: [m.jsx("span", {
                        children: "English"
                    }), m.jsx("i", {}), m.jsx("span", {
                        children: "తెలుగు"
                    }), m.jsx("i", {}), m.jsx("span", {
                        children: "हिन्दी"
                    }), m.jsxs("span", {
                        className: "language-caption",
                        children: [m.jsx(gp, {
                            size: 15
                        }), " Made for understanding"]
                    })]
                })]
            }), m.jsx(c2, {})]
        }), m.jsxs("section", {
            className: "upload-card",
            "aria-labelledby": "upload-title",
            children: [m.jsxs("div", {
                className: "upload-heading",
                children: [m.jsxs("div", {
                    children: [m.jsxs("span", {
                        className: "section-kicker",
                        children: ["01 / ", u.home]
                    }), m.jsx("h2", {
                        id: "upload-title",
                        children: u.uploadTitle
                    })]
                }), m.jsx("div", {
                    className: "supported-icon",
                    children: m.jsx(Sp, {
                        size: 26
                    })
                })]
            }), H ? m.jsxs("div", {
                className: "processing",
                role: "status",
                "aria-live": "polite",
                children: [m.jsx(rf, {
                    className: "spin",
                    size: 36
                }), m.jsx("h2", {
                    children: u.reading
                }), m.jsx("p", {
                    children: u.readingHint
                }), m.jsx("div", {
                    className: "indeterminate",
                    children: m.jsx("i", {})
                }), m.jsx("button", {
                    className: "text-button",
                    onClick: () => {
                        var Q;
                        return (Q = p.current) == null ? void 0 : Q.abort()
                    }
                    ,
                    children: u.cancel
                })]
            }) : m.jsxs(m.Fragment, {
                children: [m.jsx("div", {
                    className: "drop-zone " + (B ? "dragging" : "") + (s ? " has-file" : ""),
                    onDragOver: Q => {
                        Q.preventDefault(),
                        A(!0)
                    }
                    ,
                    onDragLeave: () => A(!1),
                    onDrop: Q => {
                        Q.preventDefault(),
                        A(!1),
                        se(Q.dataTransfer.files[0])
                    }
                    ,
                    children: s ? m.jsxs("div", {
                        className: "selected-file",
                        children: [V ? m.jsx("img", {
                            src: V,
                            alt: "Selected document"
                        }) : m.jsx("span", {
                            className: "file-icon",
                            children: m.jsx(Za, {
                                size: 34
                            })
                        }), m.jsxs("div", {
                            children: [m.jsx("span", {
                                className: "section-kicker",
                                children: u.selected
                            }), m.jsx("h3", {
                                children: s.name
                            }), m.jsxs("p", {
                                children: [(s.size / 1024 / 1024).toFixed(2), " MB"]
                            })]
                        }), m.jsx("button", {
                            className: "icon-button",
                            "aria-label": u.remove,
                            onClick: () => {
                                o(null),
                                Y(!1)
                            }
                            ,
                            children: m.jsx(b0, {})
                        })]
                    }) : m.jsxs(m.Fragment, {
                        children: [m.jsx("span", {
                            className: "upload-orb",
                            children: m.jsx(xp, {
                                size: 28,
                                strokeWidth: 1.4
                            })
                        }), m.jsx("p", {
                            children: u.uploadHint
                        }), m.jsxs("div", {
                            className: "upload-actions",
                            children: [m.jsxs("button", {
                                className: "button primary",
                                onClick: () => S.current.click(),
                                children: [m.jsx(Kb, {
                                    size: 19
                                }), u.photo]
                            }), m.jsxs("button", {
                                className: "button outline",
                                onClick: () => E.current.click(),
                                children: [m.jsx(xp, {
                                    size: 18
                                }), u.upload]
                            })]
                        }), m.jsx("small", {
                            children: u.formats
                        })]
                    })
                }), m.jsx("input", {
                    ref: E,
                    hidden: !0,
                    type: "file",
                    accept: "application/pdf,image/jpeg,image/png,image/webp",
                    onChange: Q => {
                        se(Q.target.files[0]),
                        Q.target.value = ""
                    }
                }), m.jsx("input", {
                    ref: S,
                    hidden: !0,
                    type: "file",
                    accept: "image/jpeg,image/png,image/webp",
                    capture: "environment",
                    onChange: Q => {
                        se(Q.target.files[0]),
                        Q.target.value = ""
                    }
                }), m.jsxs("div", {
                    className: "upload-options",
                    children: [m.jsx(x0, {
                        label: u.language,
                        value: r,
                        onChange: c
                    }), m.jsxs("label", {
                        className: "language-select",
                        children: [m.jsx("span", {
                            children: u.level
                        }), m.jsxs("select", {
                            value: d,
                            onChange: Q => h(Q.target.value),
                            children: [m.jsx("option", {
                                value: "simple",
                                children: u.simple
                            }), m.jsx("option", {
                                value: "detailed",
                                children: u.detailed
                            })]
                        })]
                    })]
                }), s && m.jsxs("div", {
                    className: "analyze-panel",
                    children: [m.jsxs("label", {
                        className: "check-label",
                        children: [m.jsx("input", {
                            type: "checkbox",
                            checked: q,
                            onChange: Q => Y(Q.target.checked)
                        }), m.jsx("span", {
                            children: u.consent
                        })]
                    }), m.jsxs("button", {
                        className: "button primary",
                        disabled: !q || !v,
                        onClick: F,
                        children: [u.analyze, m.jsx(xl, {
                            size: 18
                        })]
                    })]
                }), m.jsx(Kn, {
                    children: N
                })]
            }), m.jsxs("div", {
                className: "privacy-line",
                children: [m.jsx(Ep, {
                    size: 16
                }), m.jsx("span", {
                    children: u.privacyLine
                })]
            })]
        }), m.jsxs("section", {
            className: "sample-card",
            children: [m.jsx("div", {
                className: "sample-icon",
                children: m.jsx(Za, {
                    size: 24
                })
            }), m.jsxs("div", {
                children: [m.jsx("h3", {
                    children: u.trySample
                }), m.jsx("p", {
                    children: u.sampleDesc
                })]
            }), m.jsxs(St, {
                className: "button sample-button",
                to: "/plan/sample-scholarship",
                children: [u.sample, m.jsx(xl, {
                    size: 17
                })]
            })]
        }), m.jsx("div", {
            className: "how-row",
            children: [[Sp, "how1", "how1d"], [gp, "how2", "how2d"], [Vr, "how3", "how3d"]].map( ([Q,ee,Ae], je) => m.jsxs("div", {
                children: [m.jsx("span", {
                    className: "how-icon",
                    children: m.jsx(Q, {
                        size: 21
                    })
                }), m.jsxs("div", {
                    children: [m.jsxs("h3", {
                        children: [m.jsxs("small", {
                            children: ["0", je + 1]
                        }), " ", u[ee]]
                    }), m.jsx("p", {
                        children: u[Ae]
                    })]
                })]
            }, ee))
        }), m.jsxs(St, {
            className: "warning-link",
            to: "/plan/sample-warning",
            children: [m.jsx(Ep, {
                size: 16
            }), u.warning, m.jsx(p0, {
                size: 14
            })]
        })]
    })
}
const xx = `DEMONSTRATION DOCUMENT — NOT AN OFFICIAL SCHOLARSHIP
RAVI'S COLLEGE SCHOLARSHIP APPLICATION, 2026
Applications must be submitted to the college scholarship office on or before 18 October 2026. Applicants are required to furnish their full name, student ID, course and contact details in the prescribed form. Enclose a self-attested photocopy of your income certificate and student identity card. Self-attested means the applicant must sign the photocopy. Submit the completed application and enclosures in person to the college scholarship office. Retain the acknowledgement receipt. No payment, password or OTP is required.`
  , Tx = `FICTIONAL NOTICE FOR A SAFETY DEMONSTRATION
URGENT: Your student benefit will be cancelled in 30 minutes. Send your bank OTP and password to the number in this message. Pay a verification fee using the link https://benefit-verify.example/claim. Do not contact your college.
This fictional notice was created to demonstrate warning signals.`
  , Jr = {
    en: {
        type: "Scholarship application",
        summary: "Apply for your college scholarship. Fill in your details, prepare two signed copies, and submit them at your college office.",
        deadline: "18 October 2026",
        docs: ["Income certificate — signed photocopy", "Student identity card — signed photocopy"],
        steps: [["Fill in your details", "Write your full name, student ID, course and contact details in the application form. Check that they match your college records.", "Applicants are required to furnish their full name, student ID, course and contact details."], ["Prepare your documents", "Make a photocopy of your income certificate and student ID card. Sign each photocopy yourself. That is what “self-attested” means.", "Enclose a self-attested photocopy of your income certificate and student identity card."], ["Submit at your college office", "Take your completed form and the signed copies to the college scholarship office by 18 October 2026.", "Applications must be submitted to the college scholarship office on or before 18 October 2026."], ["Keep your acknowledgement", "Ask for your acknowledgement receipt and keep it somewhere safe. It is your proof that you submitted the application.", "Retain the acknowledgement receipt."]],
        safe: "The sample requests personal documents. Share them only with the college scholarship office. This is not a verification of authenticity.",
        warnType: "Suspicious benefit notice",
        warnSummary: "This fictional notice pressures you to share banking secrets and pay through an unverified link.",
        warnTitle: "Verify through an official channel",
        warnStep: "Do not send an OTP or password or pay through the message. Contact your college using contact details you already trust.",
        warnReason: "Urgent threats, requests for a bank OTP and password, an unverified payment link, and instructions not to contact your college are warning signals.",
        glossary: "Self-attested means you sign a photocopy yourself to confirm it is a copy of your document. In this sample, sign the photocopies of your income certificate and student ID card."
    },
    te: {
        type: "స్కాలర్‌షిప్ దరఖాస్తు",
        summary: "మీ కాలేజీ స్కాలర్‌షిప్‌కు దరఖాస్తు చేయండి. మీ వివరాలు రాసి, రెండు పత్రాల కాపీలపై సంతకం చేసి, కాలేజీ ఆఫీసులో ఇవ్వండి.",
        deadline: "18 అక్టోబర్ 2026",
        docs: ["ఆదాయ ధ్రువీకరణ పత్రం — సంతకం చేసిన కాపీ", "విద్యార్థి గుర్తింపు కార్డు — సంతకం చేసిన కాపీ"],
        steps: [["మీ వివరాలు రాయండి", "దరఖాస్తులో మీ పూర్తి పేరు, విద్యార్థి ఐడీ, కోర్సు, సంప్రదింపు వివరాలు రాయండి. కాలేజీ రికార్డులతో సరిపోతున్నాయో చూడండి.", "Applicants are required to furnish their full name, student ID, course and contact details."], ["పత్రాల కాపీలు సిద్ధం చేయండి", "మీ ఆదాయ ధ్రువీకరణ పత్రం, విద్యార్థి ఐడీ కార్డు జిరాక్స్ కాపీలు తీసుకోండి. ప్రతి కాపీ మీద మీరే సంతకం చేయండి. దీన్నే “సెల్ఫ్ అటెస్టెడ్” అంటారు.", "Enclose a self-attested photocopy of your income certificate and student identity card."], ["కాలేజీ ఆఫీసులో ఇవ్వండి", "పూర్తి చేసిన ఫారమ్, సంతకం చేసిన కాపీలను 18 అక్టోబర్ 2026 లోపు కాలేజీ స్కాలర్‌షిప్ ఆఫీసులో ఇవ్వండి.", "Applications must be submitted to the college scholarship office on or before 18 October 2026."], ["రసీదును భద్రపరచండి", "దరఖాస్తు ఇచ్చినట్లు రసీదు అడిగి తీసుకోండి. దాన్ని జాగ్రత్తగా ఉంచండి. మీరు దరఖాస్తు ఇచ్చారనడానికి అదే ఆధారం.", "Retain the acknowledgement receipt."]],
        safe: "ఈ నమూనాలో వ్యక్తిగత పత్రాలు అడిగారు. వాటిని కాలేజీ స్కాలర్‌షిప్ ఆఫీసులో మాత్రమే ఇవ్వండి. పత్రం నిజమైనదని మేము నిర్ధారించడం లేదు.",
        warnType: "అనుమానాస్పద ప్రయోజన నోటీసు",
        warnSummary: "ఈ కల్పిత నోటీసు బ్యాంకు రహస్యాలు చెప్పమని, తెలియని లింక్ ద్వారా డబ్బు కట్టమని ఒత్తిడి చేస్తోంది.",
        warnTitle: "అధికారికంగా నిర్ధారించుకోండి",
        warnStep: "ఓటీపీ, పాస్‌వర్డ్ ఇవ్వకండి. సందేశంలోని లింక్ ద్వారా డబ్బు కట్టకండి. మీకు తెలిసిన కాలేజీ నంబరుకు ఫోన్ చేసి అడగండి.",
        warnReason: "తొందరపెట్టడం, బ్యాంకు ఓటీపీ లేదా పాస్‌వర్డ్ అడగడం, తెలియని చెల్లింపు లింక్, కాలేజీని అడగవద్దని చెప్పడం ప్రమాద సూచనలు.",
        glossary: "సెల్ఫ్ అటెస్టెడ్ అంటే మీ పత్రం జిరాక్స్ కాపీ మీద మీరే సంతకం చేయడం. ఈ నమూనాలో ఆదాయ ధ్రువీకరణ పత్రం, విద్యార్థి ఐడీ కార్డు కాపీలపై సంతకం చేయాలి."
    },
    hi: {
        type: "छात्रवृत्ति आवेदन",
        summary: "कॉलेज की छात्रवृत्ति के लिए आवेदन करें। अपनी जानकारी भरें, दो दस्तावेज़ों की कॉपी पर हस्ताक्षर करें और कॉलेज के कार्यालय में जमा करें।",
        deadline: "18 अक्टूबर 2026",
        docs: ["आय प्रमाण पत्र — हस्ताक्षर की हुई कॉपी", "छात्र पहचान पत्र — हस्ताक्षर की हुई कॉपी"],
        steps: [["अपनी जानकारी भरें", "फॉर्म में अपना पूरा नाम, छात्र आईडी, कोर्स और संपर्क की जानकारी लिखें। जाँच लें कि ये कॉलेज के रिकॉर्ड से मिलती हैं।", "Applicants are required to furnish their full name, student ID, course and contact details."], ["दस्तावेज़ तैयार करें", "आय प्रमाण पत्र और छात्र पहचान पत्र की फोटोकॉपी लें। हर कॉपी पर खुद हस्ताक्षर करें। इसे “स्व-प्रमाणित” कहते हैं।", "Enclose a self-attested photocopy of your income certificate and student identity card."], ["कॉलेज में जमा करें", "भरा हुआ फॉर्म और हस्ताक्षर की हुई कॉपियाँ 18 अक्टूबर 2026 तक कॉलेज के छात्रवृत्ति कार्यालय में जमा करें।", "Applications must be submitted to the college scholarship office on or before 18 October 2026."], ["रसीद सँभालकर रखें", "आवेदन जमा करने की रसीद माँगें और उसे सुरक्षित रखें। यह आपके आवेदन जमा करने का प्रमाण है।", "Retain the acknowledgement receipt."]],
        safe: "इस नमूने में निजी दस्तावेज़ माँगे गए हैं। इन्हें सिर्फ कॉलेज के छात्रवृत्ति कार्यालय में दें। यह दस्तावेज़ के असली होने की पुष्टि नहीं है।",
        warnType: "संदिग्ध लाभ सूचना",
        warnSummary: "यह काल्पनिक सूचना बैंक की गोपनीय जानकारी देने और अनजान लिंक से भुगतान करने का दबाव डालती है।",
        warnTitle: "आधिकारिक संपर्क से पुष्टि करें",
        warnStep: "ओटीपी या पासवर्ड न दें और संदेश के लिंक से भुगतान न करें। कॉलेज के भरोसेमंद नंबर पर संपर्क करें।",
        warnReason: "तुरंत कार्रवाई की धमकी, बैंक ओटीपी या पासवर्ड की माँग, अनजान भुगतान लिंक और कॉलेज से संपर्क न करने का निर्देश चेतावनी के संकेत हैं।",
        glossary: "स्व-प्रमाणित का मतलब है अपने दस्तावेज़ की फोटोकॉपी पर खुद हस्ताक्षर करना। इस नमूने में आय प्रमाण पत्र और छात्र पहचान पत्र की कॉपी पर हस्ताक्षर करें।"
    }
};
function ff(u="scholarship", r="en") {
    const c = Jr[r] || Jr.en
      , s = u === "warning";
    return {
        _id: `sample-${u}`,
        isSample: !0,
        language: r,
        level: "simple",
        fileName: s ? "suspicious-notice-sample.txt" : "ravi-scholarship-sample.txt",
        createdAt: new Date().toISOString(),
        documentType: s ? c.warnType : c.type,
        summary: s ? c.warnSummary : c.summary,
        deadline: s ? null : c.deadline,
        deadlineISO: s ? null : "2026-10-18",
        requiredDocuments: s ? [] : c.docs,
        steps: s ? [{
            id: "step-1",
            title: c.warnTitle,
            explanation: c.warnStep,
            sourceQuote: "Send your bank OTP and password",
            kind: "verify"
        }] : c.steps.map( (o, d) => ({
            id: `step-${d + 1}`,
            title: o[0],
            explanation: o[1],
            sourceQuote: o[2],
            kind: "document"
        })),
        completedStepIds: [],
        safety: {
            level: "caution",
            reason: s ? c.warnReason : c.safe
        },
        uncertainties: [],
        sourceText: s ? Tx : xx
    }
}
function Qp(u) {
    return (Jr[u] || Jr.en).glossary
}
function ActionPlanPage() {
    const {id: u} = kS()
      , {t: r, lang: c, setLang: s, rate: o} = es()
      , d = ["sample-scholarship", "sample-warning"].includes(u)
      , [h,g] = O.useState(null)
      , [v,E] = O.useState("")
      , [S,p] = O.useState(0)
      , [N,L] = O.useState(!1)
      , [q,Y] = O.useState("")
      , [B,A] = O.useState("")
      , [H,X] = O.useState(!1)
      , [V,le] = O.useState(!1)
      , [se,F] = O.useState("")
      , [Q,ee] = O.useState(!1)
      , [Ae,je] = O.useState(!1)
      , [ye,Je] = O.useState(!1)
      , Ge = O.useRef(u);
    Ge.current = u,
    O.useEffect(() => {
        const controller = new AbortController();
        g(null); E(""); A(""); Y(""); p(0); Je(false);
        if(d) {
            const plan = ff(u.replace("sample-", ""), c);
            plan.completedStepIds = Kr.read()[u]?.completedStepIds || [];
            g(plan);
            p(Math.max(0, plan.steps.findIndex(step => !plan.completedStepIds.includes(step.id))));
        } else {
            Ga.get(`/analyses/${u}`, {signal: controller.signal}).then(({data}) => {
                g(data.analysis); s(data.analysis.language);
                p(Math.max(0, data.analysis.steps.findIndex(step => !data.analysis.completedStepIds.includes(step.id))));
            }).catch(error => { if(!Ie.isCancel(error)) E(Va(error)); });
        }
        return () => controller.abort();
    }, [u]),
    O.useEffect( () => {
        if (h != null && h.isSample && h.language !== c) {
            const P = ff(u.replace("sample-", ""), c);
            g({
                ...P,
                completedStepIds: h.completedStepIds,
                createdAt: h.createdAt
            }),
            A("")
        }
    }
    , [c]);
    async function Te(P) {
        if (d) {
            s(P);
            return
        }
        L(!0),
        E("");
        try {
            const de = await Ga.patch(`/analyses/${u}/language`, {
                language: P
            });
            g(de.data.analysis),
            s(P),
            A("")
        } catch (de) {
            E(Va(de))
        } finally {
            L(!1)
        }
    }
    async function J(P, de) {
        L(!0),
        E("");
        try {
            let x;
            d ? (x = {
                ...h,
                completedStepIds: P
            },
            Kr.save(x)) : x = (await Ga.patch(`/analyses/${u}/progress`, {
                completedStepIds: P
            })).data.analysis,
            g(x),
            de !== void 0 && p(de),
            Je(!1)
        } catch (x) {
            E(Va(x))
        } finally {
            L(!1)
        }
    }
    function ie() {
        const P = [...new Set([...h.completedStepIds, h.steps[S].id])]
          , de = h.steps.findIndex(x => !P.includes(x.id));
        J(P, de >= 0 ? de : S)
    }
    async function re(P) {
        if (P.preventDefault(),
        !q.trim())
            return;
        X(!0),
        A(""),
        E("");
        const de = u;
        try {
            let x;
            d ? x = /self|attest|సెల్ఫ్|అటెస్ట్|సంతకం|स्व|प्रमाण|हस्ताक्षर/i.test(q) ? Qp(c) : r.sampleQuestion : x = (await Ga.post(`/analyses/${u}/questions`, {
                question: q.trim()
            })).data.answer,
            Ge.current === de && A(x)
        } catch (x) {
            Ge.current === de && E(Va(x))
        } finally {
            Ge.current === de && X(!1)
        }
    }
    function _e() {
        F(`${h.isSample ? "SAMPLE — " : ""}${h.documentType}
${h.summary}
${h.deadline ? `${r.deadline}: ${h.deadline}
` : ""}
${h.steps.map( (P, de) => `${h.completedStepIds.includes(P.id) ? "✓" : "○"} ${de + 1}. ${P.title}
${P.explanation}`).join(`

`)}

${h.safety.reason}

Samjhao · ${r.verify}`),
        ee(!1),
        le(!0)
    }
    if (!h)
        return m.jsxs("div", {
            className: "narrow-page",
            children: [m.jsxs(St, {
                className: "back-link",
                to: "/",
                children: [m.jsx(Ko, {
                    size: 16
                }), r.back]
            }), v ? m.jsx(Kn, {
                children: v
            }) : m.jsx("p", {
                role: "status",
                children: r.loading
            })]
        });
    const xe = h.completedStepIds.length === h.steps.length
      , He = h.steps[S];
    return m.jsxs("div", {
        className: "plan-page",
        children: [m.jsxs("div", {
            className: "page-toolbar",
            children: [m.jsxs(St, {
                to: "/",
                className: "back-link",
                children: [m.jsx(Ko, {
                    size: 17
                }), r.home]
            }), m.jsx(x0, {
                label: r.language,
                value: h.language,
                onChange: Te,
                disabled: N
            })]
        }), h.isSample && m.jsxs("div", {
            className: "sample-banner",
            children: [m.jsx(g0, {
                size: 17
            }), r.sampleBanner]
        }), m.jsxs("div", {
            className: "plan-header",
            children: [m.jsxs("div", {
                children: [m.jsx("span", {
                    className: "section-kicker",
                    children: r.overview
                }), m.jsx("h1", {
                    children: h.documentType
                }), m.jsx("p", {
                    children: h.summary
                })]
            }), m.jsxs("button", {
                className: "button outline",
                onClick: _e,
                children: [m.jsx(e2, {
                    size: 17
                }), r.share]
            })]
        }), m.jsxs("div", {
            className: "deadline",
            children: [m.jsx(Zb, {
                size: 17
            }), m.jsxs("span", {
                children: [h.deadline ? `${r.deadline}: ` : r.noDeadline, m.jsx("strong", {
                    children: h.deadline || ""
                })]
            })]
        }), m.jsx(Kn, {
            children: v
        }), m.jsxs("div", {
            className: "plan-grid",
            children: [m.jsxs("div", {
                className: "plan-main",
                children: [m.jsxs("section", {
                    className: "step-card",
                    "aria-live": "polite",
                    children: [m.jsxs("div", {
                        className: "step-top",
                        children: [m.jsxs("span", {
                            className: "section-kicker",
                            children: [r.step, " ", S + 1, " ", r.of, " ", h.steps.length]
                        }), m.jsxs("span", {
                            className: "progress-count",
                            children: [h.completedStepIds.length, "/", h.steps.length, " ", r.completed]
                        })]
                    }), m.jsx("div", {
                        className: "progress-bars",
                        children: h.steps.map(P => m.jsx("i", {
                            className: h.completedStepIds.includes(P.id) ? "finished" : ""
                        }, P.id))
                    }), xe && !ye ? m.jsxs("div", {
                        className: "completion",
                        children: [m.jsx("span", {
                            children: m.jsx(Jb, {
                                size: 40
                            })
                        }), m.jsx("h2", {
                            children: r.complete
                        }), m.jsx("p", {
                            children: r.completeDesc
                        }), m.jsxs("div", {
                            className: "button-row",
                            children: [m.jsx("button", {
                                className: "button outline",
                                onClick: () => {
                                    Je(!0),
                                    p(0)
                                }
                                ,
                                children: r.review
                            }), m.jsxs(St, {
                                to: "/",
                                className: "button primary",
                                children: [r.returnHome, m.jsx(xl, {
                                    size: 18
                                })]
                            })]
                        })]
                    }) : m.jsxs(m.Fragment, {
                        children: [m.jsxs("div", {
                            className: "step-number",
                            children: [String(S + 1).padStart(2, "0"), m.jsx("span", {
                                children: "—"
                            })]
                        }), m.jsx("h2", {
                            children: He.title
                        }), He.kind === "verify" && m.jsx("span", {
                            className: "advice-label",
                            children: r.adviceLabel
                        }), m.jsx("p", {
                            className: "step-explanation",
                            children: He.explanation
                        }), m.jsx(Tp, {
                            text: `${He.title}. ${He.explanation}`,
                            lang: h.language,
                            rate: o,
                            t: r
                        }), He.sourceQuote && m.jsxs("details", {
                            className: "source-quote",
                            children: [m.jsx("summary", {
                                children: r.source
                            }), m.jsx("blockquote", {
                                children: He.sourceQuote
                            })]
                        }), m.jsxs("div", {
                            className: "step-bottom",
                            children: [m.jsxs("button", {
                                className: "text-button",
                                disabled: S === 0 || N,
                                onClick: () => p(S - 1),
                                children: [m.jsx(Ko, {
                                    size: 16
                                }), r.previous]
                            }), m.jsxs("button", {
                                className: "button primary",
                                disabled: N,
                                onClick: ie,
                                children: [N ? m.jsx(rf, {
                                    className: "spin",
                                    size: 17
                                }) : m.jsx(Vr, {
                                    size: 18
                                }), " ", r.done, m.jsx(xl, {
                                    size: 18
                                })]
                            })]
                        })]
                    })]
                }), m.jsxs("section", {
                    className: "question-card",
                    children: [m.jsxs("div", {
                        className: "question-title",
                        children: [m.jsx(vp, {
                            size: 22
                        }), m.jsxs("div", {
                            children: [m.jsx("h3", {
                                children: r.question
                            }), m.jsx("p", {
                                children: r.questionHint
                            })]
                        })]
                    }), m.jsxs("form", {
                        onSubmit: re,
                        children: [m.jsx("label", {
                            className: "sr-only",
                            htmlFor: "question",
                            children: r.question
                        }), m.jsx("input", {
                            id: "question",
                            maxLength: 500,
                            placeholder: r.questionPlaceholder,
                            value: q,
                            onChange: P => Y(P.target.value),
                            required: !0
                        }), m.jsxs("button", {
                            className: "button primary",
                            disabled: H || N || !q.trim(),
                            children: [H ? m.jsx(rf, {
                                className: "spin",
                                size: 17
                            }) : m.jsx(Wb, {
                                size: 17
                            }), " ", H ? r.asking : r.ask]
                        })]
                    }), u === "sample-scholarship" && !B && m.jsxs("button", {
                        className: "question-chip",
                        onClick: () => {
                            Y(r.questionPlaceholder),
                            A(Qp(c))
                        }
                        ,
                        children: [r.questionPlaceholder, m.jsx(kb, {
                            size: 14
                        })]
                    }), B && m.jsxs("div", {
                        className: "answer",
                        role: "status",
                        children: [m.jsx("p", {
                            children: B
                        }), m.jsx(Tp, {
                            text: B,
                            lang: h.language,
                            rate: o,
                            t: r
                        })]
                    })]
                })]
            }), m.jsxs("aside", {
                children: [m.jsxs("section", {
                    className: "side-card",
                    children: [m.jsx("h3", {
                        children: r.allSteps
                    }), m.jsx("ol", {
                        className: "step-list",
                        children: h.steps.map( (P, de) => m.jsx("li", {
                            children: m.jsxs("button", {
                                className: de === S ? "current" : "",
                                disabled: N,
                                onClick: () => {
                                    p(de),
                                    Je(!0)
                                }
                                ,
                                children: [m.jsx("span", {
                                    className: h.completedStepIds.includes(P.id) ? "checked" : "",
                                    children: h.completedStepIds.includes(P.id) ? m.jsx(Vr, {
                                        size: 14
                                    }) : de + 1
                                }), P.title]
                            })
                        }, P.id))
                    }), h.completedStepIds.length > 0 && m.jsxs("button", {
                        className: "text-button reset-button",
                        disabled: N,
                        onClick: () => J([], 0),
                        children: [m.jsx(Pb, {
                            size: 14
                        }), r.reset]
                    })]
                }), h.requiredDocuments.length > 0 && m.jsxs("section", {
                    className: "side-card",
                    children: [m.jsxs("h3", {
                        children: [m.jsx(Za, {
                            size: 17
                        }), r.required]
                    }), m.jsx("ul", {
                        className: "documents-list",
                        children: h.requiredDocuments.map( (P, de) => m.jsxs("li", {
                            children: [m.jsx("span", {}), P]
                        }, de))
                    })]
                }), m.jsxs("section", {
                    className: "risk-card " + (h.safety.level === "caution" ? "caution" : ""),
                    children: [m.jsxs("h3", {
                        children: [m.jsx(bp, {
                            size: 19
                        }), r.risk]
                    }), m.jsx("p", {
                        children: h.safety.reason
                    }), m.jsx("small", {
                        children: r.riskDisclaimer
                    })]
                }), h.uncertainties.length > 0 && m.jsxs("section", {
                    className: "side-card",
                    children: [m.jsx("h3", {
                        children: r.uncertain
                    }), m.jsx("ul", {
                        children: h.uncertainties.map( (P, de) => m.jsx("li", {
                            children: P
                        }, de))
                    })]
                }), m.jsxs("button", {
                    className: "text-button full-source",
                    onClick: () => je(!0),
                    children: [m.jsx(Za, {
                        size: 15
                    }), r.source, m.jsx(xl, {
                        size: 14
                    })]
                })]
            })]
        }), m.jsxs("p", {
            className: "verify-note",
            children: [m.jsx(bp, {
                size: 15
            }), r.verify]
        }), V && m.jsxs(Xr, {
            title: r.share,
            onClose: () => le(!1),
            children: [m.jsx("p", {
                children: r.shareHint
            }), m.jsx("textarea", {
                className: "share-text",
                "aria-label": r.share,
                value: se,
                maxLength: 16e3,
                onChange: P => {
                    F(P.target.value),
                    ee(!1)
                }
            }), m.jsxs("div", {
                className: "button-row",
                children: [m.jsxs("button", {
                    className: "button outline",
                    onClick: async () => {
                        try {
                            await navigator.clipboard.writeText(se),
                            ee(!0)
                        } catch {
                            E("Copy is unavailable. Select and copy the text manually.")
                        }
                    }
                    ,
                    children: [m.jsx(Fb, {
                        size: 16
                    }), Q ? r.copied : r.copy]
                }), m.jsxs("a", {
                    className: "button primary",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: `https://wa.me/?text=${encodeURIComponent(se)}`,
                    children: [m.jsx(vp, {
                        size: 17
                    }), r.whatsapp]
                })]
            })]
        }), Ae && m.jsxs(Xr, {
            title: r.source,
            onClose: () => je(!1),
            children: [m.jsx("pre", {
                className: "source-text",
                children: h.sourceText
            }), m.jsx("p", {
                className: "muted",
                children: r.verify
            })]
        })]
    })
}
function HistoryPage() {
    const {t: u, lang: r, user: c, authReady: s} = es()
      , [o,d] = O.useState([])
      , [h,g] = O.useState(!0)
      , [v,E] = O.useState("")
      , [S,p] = O.useState(null)
      , [N,L] = O.useState(!1)
      , [q,Y] = O.useState(1)
      , [B,A] = O.useState(!1);
    function H() {
        return Object.entries(Kr.read()).filter( ([V]) => ["sample-scholarship", "sample-warning"].includes(V)).map( ([V,le]) => ({
            ...ff(V.replace("sample-", ""), r),
            ...le
        }))
    }
    O.useEffect(() => {
        if(!s) return;
        const controller = new AbortController();
        g(true); E(""); d([]);
        if(!c) { d(H()); A(false); g(false); return; }
        Ga.get(`/analyses?page=${q}`, {signal: controller.signal}).then(({data}) => {
            d(q === 1 ? [...data.analyses, ...H()] : data.analyses);
            A(data.hasMore);
        }).catch(error => { if(!Ie.isCancel(error)) E(Va(error)); })
          .finally(() => { if(!controller.signal.aborted) g(false); });
        return () => controller.abort();
    }, [c, s, r, q]);
    async function X() {
        L(!0),
        E("");
        try {
            S.isSample ? Kr.remove(S._id) : await Ga.delete(`/analyses/${S._id}`),
            d(o.filter(V => V._id !== S._id)),
            p(null)
        } catch (V) {
            E(Va(V))
        } finally {
            L(!1)
        }
    }
    return m.jsxs("div", {
        className: "history-page",
        children: [m.jsxs("div", {
            className: "plan-header",
            children: [m.jsxs("div", {
                children: [m.jsx("span", {
                    className: "section-kicker",
                    children: u.history
                }), m.jsx("h1", {
                    children: u.historyTitle
                }), m.jsx("p", {
                    children: u.historyIntro
                })]
            }), m.jsxs(St, {
                className: "button primary",
                to: "/",
                children: [m.jsx(S0, {
                    size: 18
                }), u.home]
            })]
        }), m.jsx(Kn, {
            children: v
        }), h ? m.jsx("p", {
            role: "status",
            children: u.loading
        }) : o.length === 0 ? m.jsxs("div", {
            className: "empty",
            children: [m.jsx("span", {
                className: "upload-orb",
                children: m.jsx(v0, {
                    size: 32
                })
            }), m.jsx("h2", {
                children: u.empty
            }), m.jsx("p", {
                children: u.emptyDesc
            }), m.jsxs(St, {
                className: "button primary",
                to: "/plan/sample-scholarship",
                children: [u.sample, m.jsx(xl, {
                    size: 17
                })]
            }), !c && m.jsx(St, {
                className: "text-button",
                to: "/login",
                children: u.signin
            })]
        }) : m.jsx("div", {
            className: "history-list",
            children: o.map(V => m.jsxs("article", {
                className: "history-item",
                children: [m.jsx("span", {
                    className: "sample-icon",
                    children: m.jsx(Za, {
                        size: 25
                    })
                }), m.jsxs("div", {
                    children: [m.jsx("small", {
                        children: V.isSample ? u.sampleLabel : new Date(V.createdAt).toLocaleDateString(r)
                    }), m.jsx("h2", {
                        children: V.documentType
                    }), m.jsxs("p", {
                        children: [V.completedStepIds.length, "/", V.stepCount ?? V.steps.length, " ", u.completed, V.deadline ? ` · ${V.deadline}` : ""]
                    })]
                }), m.jsxs(St, {
                    className: "button outline",
                    to: `/plan/${V._id}`,
                    children: [u.continue, m.jsx(xl, {
                        size: 17
                    })]
                }), m.jsx("button", {
                    className: "icon-button",
                    "aria-label": `${u.delete} ${V.documentType}`,
                    onClick: () => p(V),
                    children: m.jsx(a2, {
                        size: 18
                    })
                })]
            }, V._id))
        }), m.jsxs("div", {
            className: "button-row",
            children: [q > 1 && m.jsx("button", {
                className: "button outline",
                onClick: () => Y(q - 1),
                children: u.previous
            }), B && m.jsxs("button", {
                className: "button outline",
                onClick: () => Y(q + 1),
                children: [u.continue, m.jsx(xl, {
                    size: 16
                })]
            })]
        }), S && m.jsxs(Xr, {
            title: u.delete,
            onClose: () => !N && p(null),
            children: [m.jsx("p", {
                children: u.deleteConfirm
            }), m.jsx(Kn, {
                children: v
            }), m.jsxs("div", {
                className: "button-row",
                children: [m.jsx("button", {
                    className: "button outline",
                    onClick: () => p(null),
                    disabled: N,
                    children: u.cancel
                }), m.jsx("button", {
                    className: "button danger-button",
                    onClick: X,
                    disabled: N,
                    children: N ? u.loading : u.delete
                })]
            })]
        })]
    })
}
function AuthPage({register = false}) {
    const {t, user, setUser, authReady} = es();
    const navigate = pf();
    const [name, setName] = O.useState("");
    const [email, setEmail] = O.useState("");
    const [password, setPassword] = O.useState("");
    const [busy, setBusy] = O.useState(false);
    const [error, setError] = O.useState("");
    O.useEffect(() => { setError(""); setPassword(""); }, [register]);
    O.useEffect(() => { if(user) navigate("/", {replace: true}); }, [user]);
    async function submit(event) {
        event.preventDefault();
        if(busy || !authReady) return;
        setBusy(true); setError("");
        try {
            const {data} = await Ga.post(register ? "/register" : "/login", {name, email, password});
            setUser(data.user);
            navigate("/", {replace: true});
        } catch(error) { setError(Va(error)); }
        finally { setBusy(false); }
    }
    const input = (label, type, value, onChange, extra = {}) => m.jsxs("label", {
        children: [label, m.jsx("input", {type, value, required: true, disabled: busy,
            onChange: event => onChange(event.target.value), ...extra})]
    });
    return m.jsxs("div", {className: "auth-page", children: [
        m.jsx("span", {className: "section-kicker", children: t.tag}),
        m.jsx("h1", {children: register ? t.registerTitle : t.loginTitle}),
        m.jsx("p", {children: register ? t.registerIntro : t.loginIntro}),
        m.jsxs("form", {onSubmit: submit, className: "auth-form", children: [
            register && input(t.name, "text", name, setName, {autoComplete: "name", maxLength: 100}),
            input(t.email, "email", email, setEmail, {autoComplete: "email", maxLength: 254}),
            input(t.password, "password", password, setPassword, {
                autoComplete: register ? "new-password" : "current-password", minLength: register ? 10 : undefined}),
            register && m.jsx("small", {children: t.passwordHint}),
            m.jsx(Kn, {children: error}),
            m.jsx("button", {className: "button primary", type: "submit", disabled: busy || !authReady,
                children: busy ? t.loading : register ? t.create : t.signin})
        ]}),
        m.jsxs("p", {className: "auth-switch", children: [register ? t.haveAccount : t.newHere, " ",
            m.jsx(St, {to: register ? "/login" : "/register", children: register ? t.signin : t.create})]})
    ]});
}
const eg = O.createContext()
  , es = () => O.useContext(eg);
function lf(u, r) {
    try {
        return localStorage.getItem(u) || r
    } catch {
        return r
    }
}
function SamjhaoApp() {
    const navigate = pf();
    const [u,r] = O.useState( () => {
        const ye = lf("samjhao-language", "en");
        return ["en", "te", "hi"].includes(ye) ? ye : "en"
    }
    )
      , [c,s] = O.useState(null)
      , [o,d] = O.useState(bx)
      , [h,g] = O.useState(null)
      , [v,E] = O.useState("simple")
      , [S,p] = O.useState(null)
      , [N,L] = O.useState( () => lf("samjhao-large", "false") === "true")
      , [q,Y] = O.useState( () => lf("samjhao-contrast", "false") === "true")
      , [B,A] = O.useState(.9)
      , [H,X] = O.useState("")
      , [V,le] = O.useState("")
      , [se,F] = O.useState(!1)
      , Q = Ol()
      , ee = Fu[u] || Fu.en;
    O.useEffect(() => {
        let active = true;
        Ga.get("/me").then(({data}) => { if(active) s(data.user); })
            .catch(error => { if(active && error.response?.status !== 401) X(Va(error)); })
            .finally(() => { if(active) d(true); });
        return () => { active = false; };
    }, []),
    O.useEffect( () => {
        document.documentElement.lang = u,
        document.documentElement.classList.toggle("large-text", N),
        document.documentElement.classList.toggle("high-contrast", q);
        try {
            localStorage.setItem("samjhao-language", u),
            localStorage.setItem("samjhao-large", N),
            localStorage.setItem("samjhao-contrast", q)
        } catch {}
    }
    , [u, N, q]),
    O.useEffect( () => {
        var ye;
        (ye = window.speechSynthesis) == null || ye.cancel(),
        window.scrollTo(0, 0),
        X("")
    }
    , [Q.pathname]);
    async function Ae() {
        try {
            await Ga.post("/logout"),
            s(null),
            g(null),
            navigate("/")
        } catch (ye) {
            X(Va(ye))
        }
    }
    async function je(ye) {
        ye.preventDefault(),
        F(!0);
        try {
            await Ga.delete("/me", {
                data: {
                    password: V
                }
            }),
            s(null),
            p(null),
            le(""),
            g(null),
            navigate("/")
        } catch (Je) {
            X(Va(Je))
        } finally {
            F(!1)
        }
    }
    return m.jsxs(eg.Provider, {
        value: {
            t: ee,
            lang: u,
            setLang: r,
            user: c,
            setUser: s,
            authReady: o,
            file: h,
            setFile: g,
            level: v,
            setLevel: E,
            rate: B
        },
        children: [m.jsx("a", {
            className: "skip-link",
            href: "#main",
            children: "Skip to content"
        }), m.jsx("header", {
            className: "site-header",
            children: m.jsxs("div", {
                className: "nav-wrap",
                children: [m.jsx(St, {
                    to: "/",
                    "aria-label": "Samjhao home",
                    children: m.jsx(s2, {})
                }), m.jsxs("nav", {
                    "aria-label": "Main navigation",
                    children: [m.jsxs(uf, {
                        to: "/",
                        end: !0,
                        "aria-label": ee.home,
                        children: [m.jsx(S0, {
                            size: 17
                        }), m.jsx("span", {
                            children: ee.home
                        })]
                    }), m.jsxs(uf, {
                        to: "/history",
                        "aria-label": ee.history,
                        children: [m.jsx(v0, {
                            size: 17
                        }), m.jsx("span", {
                            children: ee.history
                        })]
                    })]
                }), m.jsxs("div", {
                    className: "nav-tools",
                    children: [m.jsx("button", {
                        className: "icon-button",
                        title: ee.settings,
                        "aria-label": ee.settings,
                        onClick: () => p("settings"),
                        children: m.jsx(t2, {
                            size: 20
                        })
                    }), c ? m.jsxs("button", {
                        className: "button small",
                        onClick: Ae,
                        children: [m.jsx(Ib, {
                            size: 15
                        }), ee.signout]
                    }) : m.jsxs(St, {
                        className: "button small outline",
                        to: "/login",
                        children: [ee.signin, m.jsx(p0, {
                            size: 15
                        })]
                    })]
                })]
            })
        }), m.jsxs("main", {
            id: "main",
            children: [m.jsx(Kn, {
                children: H
            }), m.jsxs(cb, {
                children: [m.jsx(Xn, {
                    path: "/",
                    element: m.jsx(HomePage, {})
                }), m.jsx(Xn, {
                    path: "/plan/:id",
                    element: m.jsx(ActionPlanPage, {})
                }), m.jsx(Xn, {
                    path: "/history",
                    element: m.jsx(HistoryPage, {})
                }), m.jsx(Xn, {
                    path: "/login",
                    element: m.jsx(AuthPage, {})
                }), m.jsx(Xn, {
                    path: "/register",
                    element: m.jsx(AuthPage, {
                        register: !0
                    })
                }), m.jsx(Xn, {
                    path: "*",
                    element: m.jsxs("div", {
                        className: "empty",
                        children: [m.jsx("h1", {
                            children: ee.notFound
                        }), m.jsx(St, {
                            className: "button primary",
                            to: "/",
                            children: ee.goHome
                        })]
                    })
                })]
            })]
        }), m.jsxs("footer", {
            children: [m.jsxs("div", {
                children: [m.jsx("span", {
                    className: "footer-spark",
                    children: "✳"
                }), " ", ee.footer]
            }), m.jsxs("div", {
                children: [m.jsx("button", {
                    onClick: () => p("privacy"),
                    children: ee.privacy
                }), m.jsx("button", {
                    onClick: () => p("help"),
                    children: ee.help
                })]
            })]
        }), S && m.jsx(Xr, {
            title: S === "settings" ? ee.settings : S === "privacy" ? ee.privacyTitle : S === "delete" ? ee.deleteAccount : ee.help,
            onClose: () => {
                p(null),
                X("")
            }
            ,
            children: S === "settings" ? m.jsxs("div", {
                className: "settings",
                children: [m.jsxs("label", {
                    children: [ee.text, m.jsxs("select", {
                        value: N ? "large" : "standard",
                        onChange: ye => L(ye.target.value === "large"),
                        children: [m.jsx("option", {
                            value: "standard",
                            children: ee.standard
                        }), m.jsx("option", {
                            value: "large",
                            children: ee.largeOption
                        })]
                    })]
                }), m.jsxs("label", {
                    className: "check-label",
                    children: [m.jsx("input", {
                        type: "checkbox",
                        checked: q,
                        onChange: ye => Y(ye.target.checked)
                    }), ee.contrast]
                }), m.jsxs("label", {
                    children: [ee.speechRate, m.jsx("input", {
                        type: "range",
                        min: "0.6",
                        max: "1.2",
                        step: "0.1",
                        value: B,
                        onChange: ye => A(Number(ye.target.value))
                    }), m.jsxs("span", {
                        children: [B, "×"]
                    })]
                }), c && m.jsx("button", {
                    className: "text-button danger",
                    onClick: () => p("delete"),
                    children: ee.deleteAccount
                })]
            }) : S === "delete" ? m.jsxs("form", {
                onSubmit: je,
                children: [m.jsx("p", {
                    children: ee.accountDeleteHint
                }), m.jsxs("label", {
                    children: [ee.password, m.jsx("input", {
                        type: "password",
                        required: !0,
                        value: V,
                        onChange: ye => le(ye.target.value),
                        autoComplete: "current-password"
                    })]
                }), m.jsx(Kn, {
                    children: H
                }), m.jsx("button", {
                    className: "button danger-button",
                    disabled: se,
                    children: se ? ee.loading : ee.deleteAccount
                })]
            }) : m.jsx("p", {
                className: "modal-copy",
                children: S === "privacy" ? ee.privacyBody : ee.helpBody
            })
        })]
    })
}
sS.createRoot(document.getElementById("root")).render(m.jsx(tS.StrictMode, {
    children: m.jsx(Db, {
        children: m.jsx(SamjhaoApp, {})
    })
}));
