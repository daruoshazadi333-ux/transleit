'use strict';

/* ===========================================================
   ۱) فهرست زبان‌ها (بیش از ۱۰۰ زبان)
   =========================================================== */
const LANGUAGES = [
    { code: 'fa', fa: 'فارسی' },
    { code: 'en', fa: 'انگلیسی' },
    { code: 'af', fa: 'آفریکانس' },
    { code: 'sq', fa: 'آلبانیایی' },
    { code: 'am', fa: 'امهری' },
    { code: 'ar', fa: 'عربی' },
    { code: 'hy', fa: 'ارمنی' },
    { code: 'az', fa: 'آذربایجانی' },
    { code: 'eu', fa: 'باسکی' },
    { code: 'be', fa: 'بلاروسی' },
    { code: 'bn', fa: 'بنگالی' },
    { code: 'bs', fa: 'بوسنیایی' },
    { code: 'bg', fa: 'بلغاری' },
    { code: 'ca', fa: 'کاتالان' },
    { code: 'ceb', fa: 'سبوانو' },
    { code: 'ny', fa: 'چیچوا' },
    { code: 'zh-CN', fa: 'چینی (ساده)' },
    { code: 'zh-TW', fa: 'چینی (سنتی)' },
    { code: 'co', fa: 'کورسی' },
    { code: 'hr', fa: 'کرواتی' },
    { code: 'cs', fa: 'چکی' },
    { code: 'da', fa: 'دانمارکی' },
    { code: 'nl', fa: 'هلندی' },
    { code: 'eo', fa: 'اسپرانتو' },
    { code: 'et', fa: 'استونیایی' },
    { code: 'tl', fa: 'فیلیپینی' },
    { code: 'fi', fa: 'فنلاندی' },
    { code: 'fr', fa: 'فرانسوی' },
    { code: 'fy', fa: 'فریزی' },
    { code: 'gl', fa: 'گالیسی' },
    { code: 'ka', fa: 'گرجی' },
    { code: 'de', fa: 'آلمانی' },
    { code: 'el', fa: 'یونانی' },
    { code: 'gu', fa: 'گجراتی' },
    { code: 'ht', fa: 'کریول هائیتی' },
    { code: 'ha', fa: 'هاوسا' },
    { code: 'haw', fa: 'هاوایی' },
    { code: 'he', fa: 'عبری' },
    { code: 'hi', fa: 'هندی' },
    { code: 'hmn', fa: 'همونگ' },
    { code: 'hu', fa: 'مجاری' },
    { code: 'is', fa: 'ایسلندی' },
    { code: 'ig', fa: 'ایگبو' },
    { code: 'id', fa: 'اندونزیایی' },
    { code: 'ga', fa: 'ایرلندی' },
    { code: 'it', fa: 'ایتالیایی' },
    { code: 'ja', fa: 'ژاپنی' },
    { code: 'jw', fa: 'جاوه‌ای' },
    { code: 'kn', fa: 'کانادایی' },
    { code: 'kk', fa: 'قزاقی' },
    { code: 'km', fa: 'خمری' },
    { code: 'rw', fa: 'کینیارواندایی' },
    { code: 'ko', fa: 'کره‌ای' },
    { code: 'ku', fa: 'کردی' },
    { code: 'ky', fa: 'قرقیزی' },
    { code: 'lo', fa: 'لائوسی' },
    { code: 'la', fa: 'لاتین' },
    { code: 'lv', fa: 'لتونیایی' },
    { code: 'lt', fa: 'لیتوانیایی' },
    { code: 'lb', fa: 'لوکزامبورگی' },
    { code: 'mk', fa: 'مقدونی' },
    { code: 'mg', fa: 'مالاگاسی' },
    { code: 'ms', fa: 'مالایی' },
    { code: 'ml', fa: 'مالایالام' },
    { code: 'mt', fa: 'مالتی' },
    { code: 'mi', fa: 'مائوری' },
    { code: 'mr', fa: 'مراتی' },
    { code: 'mn', fa: 'مغولی' },
    { code: 'my', fa: 'برمه‌ای' },
    { code: 'ne', fa: 'نپالی' },
    { code: 'no', fa: 'نروژی' },
    { code: 'or', fa: 'اودیا' },
    { code: 'ps', fa: 'پشتو' },
    { code: 'pl', fa: 'لهستانی' },
    { code: 'pt', fa: 'پرتغالی' },
    { code: 'pa', fa: 'پنجابی' },
    { code: 'ro', fa: 'رومانیایی' },
    { code: 'ru', fa: 'روسی' },
    { code: 'sm', fa: 'ساموآیی' },
    { code: 'gd', fa: 'گالیک اسکاتلندی' },
    { code: 'sr', fa: 'صربی' },
    { code: 'st', fa: 'سسوتو' },
    { code: 'sn', fa: 'شونا' },
    { code: 'sd', fa: 'سندی' },
    { code: 'si', fa: 'سینهالی' },
    { code: 'sk', fa: 'اسلواکی' },
    { code: 'sl', fa: 'اسلوونیایی' },
    { code: 'so', fa: 'سومالیایی' },
    { code: 'es', fa: 'اسپانیایی' },
    { code: 'su', fa: 'سوندانی' },
    { code: 'sw', fa: 'سواحیلی' },
    { code: 'sv', fa: 'سوئدی' },
    { code: 'tg', fa: 'تاجیکی' },
    { code: 'ta', fa: 'تامیلی' },
    { code: 'tt', fa: 'تاتاری' },
    { code: 'te', fa: 'تلوگو' },
    { code: 'th', fa: 'تایلندی' },
    { code: 'tr', fa: 'ترکی' },
    { code: 'tk', fa: 'ترکمنی' },
    { code: 'uk', fa: 'اوکراینی' },
    { code: 'ur', fa: 'اردو' },
    { code: 'ug', fa: 'اویغوری' },
    { code: 'uz', fa: 'ازبکی' },
    { code: 'vi', fa: 'ویتنامی' },
    { code: 'cy', fa: 'ولزی' },
    { code: 'xh', fa: 'خوسایی' },
    { code: 'yi', fa: 'یدیش' },
    { code: 'yo', fa: 'یوروبایی' },
    { code: 'zu', fa: 'زولو' }
];

/* ===========================================================
   ۲) المنت‌ها
   =========================================================== */
const $ = (id) => document.getElementById(id);

const sourceLangSel = $('sourceLang');
const targetLangSel = $('targetLang');
const swapBtn = $('swapBtn');
const sourceText = $('sourceText');
const targetText = $('targetText');
const translateBtn = $('translateBtn');
const translateFab = $('translateFab');
const errorBanner = $('errorBanner');
const errorText = $('errorText');
const sourceCharCount = $('sourceCharCount');
const targetCharCount = $('targetCharCount');
const clearBtn = $('clearBtn');
const copyBtn = $('copyBtn');
const favBtn = $('favBtn');
const micBtn = $('micBtn');
const speakSourceBtn = $('speakSourceBtn');
const speakTargetBtn = $('speakTargetBtn');
const themeToggle = $('themeToggle');
const menuBtn = $('menuBtn');
const drawer = $('drawer');
const drawerScrim = $('drawerScrim');
const themeIcon = $('themeIcon');
const toast = $('toast');
const toastText = $('toastText');
const appContent = $('appContent');

const historyList = $('historyList');
const historyEmpty = $('historyEmpty');
const favList = $('favList');
const favEmpty = $('favEmpty');
const clearHistoryBtn = $('clearHistoryBtn');

const MAX_CHARS = 5000;

/* ===========================================================
   ۳) افکت ریپل
   =========================================================== */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ripple');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const circle = document.createElement('span');
    circle.className = 'ripple-el';
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
    circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
    const prevPos = getComputedStyle(btn).position;
    if (prevPos === 'static') btn.style.position = 'relative';
    btn.style.overflow = btn.style.overflow || 'hidden';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 560);
});

/* ===========================================================
   ۴) ساعت نوار وضعیت
   =========================================================== */
function updateClock() {
    const now = new Date();
    $('clock').textContent = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);

/* ===========================================================
   ۵) توابع کمکی
   =========================================================== */
function toFaDigits(num) {
    const fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/\d/g, d => fa[d]);
}

function getLangName(code) {
    const l = LANGUAGES.find(l => l.code === code);
    return l ? l.fa : code;
}

function showToast(msg, ok = true) {
    toastText.textContent = msg;
    toast.querySelector('svg').style.color = ok ? 'var(--md-success)' : 'var(--md-error)';
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}

function showError(msg) {
    errorText.textContent = msg;
    errorBanner.classList.add('show');
}

function hideError() {
    errorBanner.classList.remove('show');
}

/* ===========================================================
   ۶) پر کردن لیست زبان‌ها
   =========================================================== */
function populateLangSelect(select) {
    select.innerHTML = '';
    LANGUAGES.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.code;
        opt.textContent = l.fa;
        select.appendChild(opt);
    });
}
populateLangSelect(sourceLangSel);
populateLangSelect(targetLangSel);
sourceLangSel.value = 'fa';
targetLangSel.value = 'en';

/* ===========================================================
   ۷) شمارش کاراکتر
   =========================================================== */
function updateCharCount() {
    const len = sourceText.value.length;
    sourceCharCount.textContent = `${toFaDigits(len)} / ${toFaDigits(MAX_CHARS)}`;
    targetCharCount.textContent = targetText.value ? `${toFaDigits(targetText.value.length)} کاراکتر` : '';
}

/* ===========================================================
   ۸) ترجمه
   =========================================================== */
let abortController = null;

function cleanTranslation(raw, isSingleWord) {
    if (!raw) return raw;
    let text = raw.trim();
    text = text.replace(/\s*[\(\[][^\)\]]*[\)\]]\s*/g, ' ').trim();
    if (isSingleWord) {
        const firstPart = text.split(/[,،;\/]| or /i)[0].trim();
        if (firstPart) text = firstPart;
    }
    return text.replace(/\s+/g, ' ').trim();
}

function setLoading(isLoading) {
    translateBtn.classList.toggle('loading', isLoading);
    translateBtn.disabled = isLoading;
    translateFab.classList.toggle('loading', isLoading);
    translateFab.disabled = isLoading;
}

async function translateText() {
    const text = sourceText.value.trim();
    hideError();

    if (!text) {
        targetText.value = '';
        updateCharCount();
        return;
    }

    const srcCode = sourceLangSel.value;
    const tgtCode = targetLangSel.value;

    if (srcCode === tgtCode) {
        targetText.value = text;
        updateCharCount();
        return;
    }

    if (abortController) abortController.abort();
    abortController = new AbortController();

    setLoading(true);

    try {
        const langpair = `${srcCode}|${tgtCode}`;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langpair)}`;

        const res = await fetch(url, { signal: abortController.signal });
        if (!res.ok) throw new Error('network');

        const data = await res.json();
        if (!data || !data.responseData || typeof data.responseData.translatedText !== 'string') {
            throw new Error('bad-response');
        }

        const rawResult = data.responseData.translatedText;
        const detailsText = (data.responseDetails ? String(data.responseDetails) : '') + ' ' + rawResult;

        const looksLikeServiceWarning =
            /MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID (SOURCE|TARGET)|AMBIGUOUS LANGUAGE|IS AN INVALID (SOURCE|TARGET) LANGUAGE|MISSING (SOURCE|TARGET)/i.test(detailsText);

        if (looksLikeServiceWarning || (data.responseStatus && Number(data.responseStatus) >= 400)) {
            throw new Error('quota-or-service');
        }

        const isSingleWord = text.trim().split(/\s+/).length === 1;
        const translated = cleanTranslation(rawResult, isSingleWord);

        if (!translated) {
            throw new Error('empty-result');
        }

        targetText.value = translated;
        updateCharCount();

        saveToHistory({ source: text, translated, srcCode, tgtCode, time: Date.now() });

    } catch (err) {
        if (err.name === 'AbortError') return;
        if (!navigator.onLine) {
            showError('اتصال اینترنت برقرار نیست. لطفاً اتصال خود را بررسی کنید.');
        } else if (err.message === 'quota-or-service') {
            showError('سهمیهٔ رایگان سرویس ترجمه برای امروز تمام شده یا زبان انتخابی پشتیبانی نمی‌شود. کمی بعد دوباره تلاش کنید.');
        } else if (err.message === 'empty-result') {
            showError('ترجمه‌ای برای این متن پیدا نشد. متن دیگری را امتحان کنید.');
        } else {
            showError('خطا در برقراری ارتباط با سرویس ترجمه. لطفاً دوباره تلاش کنید.');
        }
    } finally {
        setLoading(false);
    }
}

sourceText.addEventListener('input', updateCharCount);

translateBtn.addEventListener('click', translateText);
translateFab.addEventListener('click', translateText);

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        translateText();
    }
});

/* ===========================================================
   ۹) جابه‌جایی زبان
   =========================================================== */
swapBtn.addEventListener('click', () => {
    swapBtn.classList.add('spin');
    setTimeout(() => swapBtn.classList.remove('spin'), 350);

    const tmpLang = sourceLangSel.value;
    sourceLangSel.value = targetLangSel.value;
    targetLangSel.value = tmpLang;

    const tmpText = sourceText.value;
    sourceText.value = targetText.value;
    targetText.value = tmpText;

    updateCharCount();
    if (sourceText.value.trim()) translateText();
});

/* ===========================================================
   ۱۰) پاک کردن
   =========================================================== */
clearBtn.addEventListener('click', () => {
    sourceText.value = '';
    targetText.value = '';
    hideError();
    updateCharCount();
    sourceText.focus();
});

/* ===========================================================
   ۱۱) کپی
   =========================================================== */
copyBtn.addEventListener('click', async () => {
    if (!targetText.value) {
        showToast('متنی برای کپی وجود ندارد', false);
        return;
    }
    try {
        await navigator.clipboard.writeText(targetText.value);
        showToast('ترجمه کپی شد');
    } catch (e) {
        targetText.removeAttribute('readonly');
        targetText.select();
        document.execCommand('copy');
        targetText.setAttribute('readonly', true);
        showToast('ترجمه کپی شد');
    }
});

/* ===========================================================
   ۱۲) تبدیل متن به گفتار (TTS)
   =========================================================== */
let speechWatchdog = null;

function speak(text, langCode) {
    if (!text || !text.trim()) {
        showToast('متنی برای خواندن وجود ندارد', false);
        return;
    }
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        showToast('این مرورگر از خواندن متن پشتیبانی نمی‌کند', false);
        return;
    }

    clearInterval(speechWatchdog);
    window.speechSynthesis.cancel();

    setTimeout(() => {
        try {
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = langCode === 'fa' ? 'fa-IR' : (langCode || 'en');
            utter.rate = 0.95;

            utter.onerror = () => {
                clearInterval(speechWatchdog);
                showToast('خواندن متن با خطا مواجه شد', false);
            };
            utter.onend = () => clearInterval(speechWatchdog);

            utter.onstart = () => {
                clearInterval(speechWatchdog);
                speechWatchdog = setInterval(() => {
                    if (!window.speechSynthesis.speaking) {
                        clearInterval(speechWatchdog);
                        return;
                    }
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                }, 5000);
            };

            window.speechSynthesis.speak(utter);
        } catch (e) {
            showToast('خواندن متن با خطا مواجه شد', false);
        }
    }, 60);
}

speakSourceBtn.addEventListener('click', () => speak(sourceText.value, sourceLangSel.value));
speakTargetBtn.addEventListener('click', () => speak(targetText.value, targetLangSel.value));

/* ===========================================================
   ۱۳) تبدیل گفتار به متن (STT)
   =========================================================== */
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isRecording = false;

if (SpeechRecognitionAPI) {
    recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        sourceText.value += (sourceText.value ? ' ' : '') + transcript;
        updateCharCount();
    };

    recognition.onerror = (e) => {
        const messages = {
            'not-allowed': 'دسترسی به میکروفون رد شد. لطفاً از تنظیمات مرورگر اجازه دهید.',
            'no-speech': 'صدایی شنیده نشد. دوباره امتحان کنید.',
            'audio-capture': 'میکروفونی پیدا نشد.',
            'network': 'خطای شبکه در تشخیص گفتار.'
        };
        showToast(messages[e.error] || 'خطا در تشخیص گفتار', false);
        stopRecording();
    };

    recognition.onend = () => stopRecording();

    micBtn.addEventListener('click', () => {
        if (isRecording) {
            try { recognition.stop(); } catch (e) { /* از قبل متوقف شده */ }
            return;
        }
        try {
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            const code = sourceLangSel.value;
            recognition.lang = code === 'fa' ? 'fa-IR' : code;
            recognition.start();
            isRecording = true;
            micBtn.classList.add('recording');
        } catch (e) {
            showToast('امکان شروع ضبط صدا وجود ندارد', false);
            stopRecording();
        }
    });
} else {
    micBtn.disabled = true;
    micBtn.title = 'مرورگر شما از تشخیص گفتار پشتیبانی نمی‌کند';
}

function stopRecording() {
    isRecording = false;
    micBtn.classList.remove('recording');
}

/* ===========================================================
   ۱۴) تم روشن/تاریک
   =========================================================== */
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('translator_theme', theme);
    themeIcon.innerHTML = theme === 'dark'
        ? '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'
        : '<circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>';
}

themeToggle.addEventListener('click', () => {
    const cur = document.body.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
});

setTheme(localStorage.getItem('translator_theme') || 'dark');

/* ===========================================================
   ۱۵) منوی همبرگری
   =========================================================== */
function openDrawer() {
    drawer.classList.add('open');
    drawerScrim.classList.add('show');
    drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
    drawer.classList.remove('open');
    drawerScrim.classList.remove('show');
    drawer.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', openDrawer);
drawerScrim.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
});

/* ===========================================================
   ۱۶) تاریخچه و علاقه‌مندی‌ها
   =========================================================== */
const HISTORY_KEY = 'translator_history';
const FAV_KEY = 'translator_favorites';
const HISTORY_LIMIT = 50;

function loadList(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveList(key, list) {
    try {
        localStorage.setItem(key, JSON.stringify(list));
    } catch (e) { /* حافظه در دسترس نیست */ }
}

function saveToHistory(entry) {
    const list = loadList(HISTORY_KEY);
    if (list[0] && list[0].source === entry.source && list[0].translated === entry.translated) {
        renderHistory();
        return;
    }
    list.unshift({ ...entry, id: `h_${entry.time}_${Math.random().toString(36).slice(2, 7)}` });
    if (list.length > HISTORY_LIMIT) list.length = HISTORY_LIMIT;
    saveList(HISTORY_KEY, list);
    renderHistory();
}

function removeFromHistory(id) {
    saveList(HISTORY_KEY, loadList(HISTORY_KEY).filter(i => i.id !== id));
    renderHistory();
}

function isFavorited(source, translated) {
    return loadList(FAV_KEY).some(f => f.source === source && f.translated === translated);
}

function toggleFavorite(entry) {
    let list = loadList(FAV_KEY);
    const exists = list.find(f => f.source === entry.source && f.translated === entry.translated);
    if (exists) {
        list = list.filter(f => f !== exists);
        showToast('از علاقه‌مندی‌ها حذف شد');
    } else {
        list.unshift({ ...entry, id: `f_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` });
        showToast('به علاقه‌مندی‌ها اضافه شد');
    }
    saveList(FAV_KEY, list);
    renderFavorites();
    updateFavButtonState();
}

function removeFavorite(id) {
    saveList(FAV_KEY, loadList(FAV_KEY).filter(i => i.id !== id));
    renderFavorites();
    updateFavButtonState();
}

function updateFavButtonState() {
    favBtn.classList.toggle('favorited', isFavorited(sourceText.value.trim(), targetText.value.trim()));
}

function buildEntryItem(entry, kind) {
    const item = document.createElement('div');
    item.className = 'entry-item';

    const meta = document.createElement('div');
    meta.className = 'entry-meta';
    const langTag = document.createElement('span');
    langTag.className = 'lang-tag';
    langTag.textContent = `${getLangName(entry.srcCode)} ← ${getLangName(entry.tgtCode)}`;

    const actions = document.createElement('div');
    actions.className = 'entry-actions';

    const useBtn = document.createElement('button');
    useBtn.title = 'استفاده مجدد';
    useBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 7 8M12 5c-.6 3-2.7 5.4-5.5 6.8M13 21l4-9 4 9M14.5 18h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    useBtn.addEventListener('click', () => {
        sourceLangSel.value = entry.srcCode;
        targetLangSel.value = entry.tgtCode;
        sourceText.value = entry.source;
        targetText.value = entry.translated;
        updateCharCount();
        updateFavButtonState();
        switchView('translate');
    });

    const delBtn = document.createElement('button');
    delBtn.title = 'حذف';
    delBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m2 0l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (kind === 'history') removeFromHistory(entry.id);
        else removeFavorite(entry.id);
    });

    actions.appendChild(useBtn);
    actions.appendChild(delBtn);
    meta.appendChild(langTag);
    meta.appendChild(actions);

    const textWrap = document.createElement('div');
    textWrap.className = 'entry-text';
    const src = document.createElement('div');
    src.textContent = entry.source;
    const tgt = document.createElement('div');
    tgt.className = 'translated';
    tgt.textContent = entry.translated;
    textWrap.appendChild(src);
    textWrap.appendChild(tgt);

    item.appendChild(meta);
    item.appendChild(textWrap);
    return item;
}

function renderHistory() {
    const list = loadList(HISTORY_KEY);
    historyList.innerHTML = '';
    if (!list.length) {
        historyEmpty.style.display = 'flex';
        clearHistoryBtn.style.display = 'none';
        return;
    }
    historyEmpty.style.display = 'none';
    clearHistoryBtn.style.display = 'flex';
    list.forEach(entry => historyList.appendChild(buildEntryItem(entry, 'history')));
}

function renderFavorites() {
    const list = loadList(FAV_KEY);
    favList.innerHTML = '';
    if (!list.length) {
        favEmpty.style.display = 'flex';
        return;
    }
    favEmpty.style.display = 'none';
    list.forEach(entry => favList.appendChild(buildEntryItem(entry, 'favorite')));
}

clearHistoryBtn.addEventListener('click', () => {
    if (!confirm('آیا از پاک کردن کل تاریخچه مطمئن هستید؟')) return;
    saveList(HISTORY_KEY, []);
    renderHistory();
});

favBtn.addEventListener('click', () => {
    const src = sourceText.value.trim();
    const tgt = targetText.value.trim();
    if (!src || !tgt) {
        showToast('ابتدا متنی را ترجمه کنید', false);
        return;
    }
    toggleFavorite({ source: src, translated: tgt, srcCode: sourceLangSel.value, tgtCode: targetLangSel.value, time: Date.now() });
});

targetText.addEventListener('input', updateFavButtonState);

/* ===========================================================
   ۱۷) ناوبری
   =========================================================== */
function switchView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    $(`view-${view}`).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
    translateFab.classList.toggle('hidden', view !== 'translate');
    appContent.scrollTop = 0;
}

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
});

/* ===========================================================
   ۱۸) مقداردهی اولیه
   =========================================================== */
updateCharCount();
renderHistory();
renderFavorites();
updateFavButtonState();

window.addEventListener('offline', () => showError('اتصال اینترنت قطع شد.'));
window.addEventListener('online', () => hideError());
