'use strict';

// ============================================================
// لیست زبان‌ها
// ============================================================
const LANGUAGES = [
  { code: 'fa', name: 'فارسی', native: 'فارسی' },
  { code: 'en', name: 'انگلیسی', native: 'English' },
  { code: 'ar', name: 'عربی', native: 'العربية' },
  { code: 'fr', name: 'فرانسوی', native: 'Français' },
  { code: 'de', name: 'آلمانی', native: 'Deutsch' },
  { code: 'es', name: 'اسپانیایی', native: 'Español' },
  { code: 'it', name: 'ایتالیایی', native: 'Italiano' },
  { code: 'pt', name: 'پرتغالی', native: 'Português' },
  { code: 'ru', name: 'روسی', native: 'Русский' },
  { code: 'zh-CN', name: 'چینی ساده', native: '简体中文' },
  { code: 'zh-TW', name: 'چینی سنتی', native: '繁體中文' },
  { code: 'ja', name: 'ژاپنی', native: '日本語' },
  { code: 'ko', name: 'کره‌ای', native: '한국어' },
  { code: 'tr', name: 'ترکی', native: 'Türkçe' },
  { code: 'ur', name: 'اردو', native: 'اردو' },
  { code: 'hi', name: 'هندی', native: 'हिन्दी' },
  { code: 'bn', name: 'بنگالی', native: 'বাংলা' },
  { code: 'pa', name: 'پنجابی', native: 'ਪੰਜਾਬੀ' },
  { code: 'te', name: 'تلوگو', native: 'తెలుగు' },
  { code: 'ta', name: 'تامیلی', native: 'தமிழ்' },
  { code: 'ml', name: 'مالایالام', native: 'മലയാളം' },
  { code: 'kn', name: 'کانادا', native: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'گجراتی', native: 'ગુજરાતી' },
  { code: 'mr', name: 'مراتی', native: 'मराठी' },
  { code: 'or', name: 'اودیا', native: 'ଓଡ଼ିଆ' },
  { code: 'si', name: 'سینهالی', native: 'සිංහල' },
  { code: 'th', name: 'تایلندی', native: 'ไทย' },
  { code: 'km', name: 'خمری', native: 'ខ្មែរ' },
  { code: 'lo', name: 'لائوسی', native: 'ລາວ' },
  { code: 'my', name: 'برمه‌ای', native: 'မြန်မာ' },
  { code: 'ms', name: 'مالایی', native: 'Bahasa Melayu' },
  { code: 'id', name: 'اندونزیایی', native: 'Bahasa Indonesia' },
  { code: 'tl', name: 'فیلیپینی', native: 'Tagalog' },
  { code: 'vi', name: 'ویتنامی', native: 'Tiếng Việt' },
  { code: 'af', name: 'آفریکانس', native: 'Afrikaans' },
  { code: 'sq', name: 'آلبانیایی', native: 'Shqip' },
  { code: 'am', name: 'امهری', native: 'አማርኛ' },
  { code: 'hy', name: 'ارمنی', native: 'Հայերեն' },
  { code: 'az', name: 'آذربایجانی', native: 'Azərbaycanca' },
  { code: 'eu', name: 'باسکی', native: 'Euskara' },
  { code: 'be', name: 'بلاروسی', native: 'Беларуская' },
  { code: 'bs', name: 'بوسنیایی', native: 'Bosanski' },
  { code: 'bg', name: 'بلغاری', native: 'Български' },
  { code: 'ca', name: 'کاتالان', native: 'Català' },
  { code: 'ceb', name: 'سبوانو', native: 'Cebuano' },
  { code: 'ny', name: 'چیچوا', native: 'Chichewa' },
  { code: 'co', name: 'کورسی', native: 'Corsu' },
  { code: 'hr', name: 'کرواتی', native: 'Hrvatski' },
  { code: 'cs', name: 'چکی', native: 'Čeština' },
  { code: 'da', name: 'دانمارکی', native: 'Dansk' },
  { code: 'nl', name: 'هلندی', native: 'Nederlands' },
  { code: 'eo', name: 'اسپرانتو', native: 'Esperanto' },
  { code: 'et', name: 'استونیایی', native: 'Eesti' },
  { code: 'fi', name: 'فنلاندی', native: 'Suomi' },
  { code: 'fy', name: 'فریزی', native: 'Frysk' },
  { code: 'gl', name: 'گالیسی', native: 'Galego' },
  { code: 'ka', name: 'گرجی', native: 'ქართული' },
  { code: 'el', name: 'یونانی', native: 'Ελληνικά' },
  { code: 'ht', name: 'کریول هائیتی', native: 'Kreyòl Ayisyen' },
  { code: 'ha', name: 'هاوسا', native: 'Hausa' },
  { code: 'haw', name: 'هاوایی', native: 'ʻŌlelo Hawaiʻi' },
  { code: 'he', name: 'عبری', native: 'עברית' },
  { code: 'hmn', name: 'همونگ', native: 'Hmong' },
  { code: 'hu', name: 'مجاری', native: 'Magyar' },
  { code: 'is', name: 'ایسلندی', native: 'Íslenska' },
  { code: 'ig', name: 'ایگبو', native: 'Igbo' },
  { code: 'ga', name: 'ایرلندی', native: 'Gaeilge' },
  { code: 'jw', name: 'جاوه‌ای', native: 'Jawa' },
  { code: 'kk', name: 'قزاقی', native: 'Қазақша' },
  { code: 'rw', name: 'کینیارواندایی', native: 'Kinyarwanda' },
  { code: 'ku', name: 'کردی', native: 'Kurdî' },
  { code: 'ky', name: 'قرقیزی', native: 'Кыргызча' },
  { code: 'la', name: 'لاتین', native: 'Latina' },
  { code: 'lv', name: 'لتونیایی', native: 'Latviešu' },
  { code: 'lt', name: 'لیتوانیایی', native: 'Lietuvių' },
  { code: 'lb', name: 'لوکزامبورگی', native: 'Lëtzebuergesch' },
  { code: 'mk', name: 'مقدونی', native: 'Македонски' },
  { code: 'mg', name: 'مالاگاسی', native: 'Malagasy' },
  { code: 'mt', name: 'مالتی', native: 'Malti' },
  { code: 'mi', name: 'مائوری', native: 'Māori' },
  { code: 'mn', name: 'مغولی', native: 'Монгол' },
  { code: 'ne', name: 'نپالی', native: 'नेपाली' },
  { code: 'no', name: 'نروژی', native: 'Norsk' },
  { code: 'ps', name: 'پشتو', native: 'پښتو' },
  { code: 'pl', name: 'لهستانی', native: 'Polski' },
  { code: 'ro', name: 'رومانیایی', native: 'Română' },
  { code: 'sm', name: 'ساموآیی', native: 'Gagana Sāmoa' },
  { code: 'gd', name: 'گالیک اسکاتلندی', native: 'Gàidhlig' },
  { code: 'sr', name: 'صربی', native: 'Српски' },
  { code: 'st', name: 'سسوتو', native: 'Sesotho' },
  { code: 'sn', name: 'شونا', native: 'Shona' },
  { code: 'sd', name: 'سندی', native: 'سنڌي' },
  { code: 'sk', name: 'اسلواکی', native: 'Slovenčina' },
  { code: 'sl', name: 'اسلوونیایی', native: 'Slovenščina' },
  { code: 'so', name: 'سومالیایی', native: 'Soomaali' },
  { code: 'su', name: 'سوندانی', native: 'Sunda' },
  { code: 'sw', name: 'سواحیلی', native: 'Kiswahili' },
  { code: 'sv', name: 'سوئدی', native: 'Svenska' },
  { code: 'tg', name: 'تاجیکی', native: 'Тоҷикӣ' },
  { code: 'tt', name: 'تاتاری', native: 'Татарча' },
  { code: 'tk', name: 'ترکمنی', native: 'Türkmençe' },
  { code: 'uk', name: 'اوکراینی', native: 'Українська' },
  { code: 'ug', name: 'اویغوری', native: 'ئۇيغۇرچە' },
  { code: 'uz', name: 'ازبکی', native: 'Oʻzbekcha' },
  { code: 'cy', name: 'ولزی', native: 'Cymraeg' },
  { code: 'xh', name: 'خوسایی', native: 'isiXhosa' },
  { code: 'yi', name: 'یدیش', native: 'ייִדיש' },
  { code: 'yo', name: 'یوروبایی', native: 'Yorùbá' },
  { code: 'zu', name: 'زولو', native: 'isiZulu' }
];

// ============================================================
// متغیرهای اصلی
// ============================================================
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
let abortController = null;
let speechWatchdog = null;
let recognition = null;
let isRecording = false;

// ============================================================
// توابع کمکی
// ============================================================
function toFaDigits(num) {
  const fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, d => fa[d]);
}

function getLangName(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  return lang ? lang.name : code;
}

function showToast(msg, isError = false) {
  toastText.textContent = msg;
  toast.classList.toggle('error', isError);
  toast.querySelector('svg').style.color = isError ? 'var(--md-error)' : 'var(--md-success)';
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function showError(msg) {
  errorText.textContent = msg;
  errorBanner.classList.add('show');
}

function hideError() {
  errorBanner.classList.remove('show');
}

// ============================================================
// پر کردن لیست زبان‌ها
// ============================================================
function populateLangSelect(select) {
  select.innerHTML = '';
  LANGUAGES.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = `${lang.name} (${lang.native})`;
    select.appendChild(opt);
  });
}
populateLangSelect(sourceLangSel);
populateLangSelect(targetLangSel);
sourceLangSel.value = 'fa';
targetLangSel.value = 'en';

// ============================================================
// شمارش کاراکترها
// ============================================================
function updateCharCount() {
  const len = sourceText.value.length;
  sourceCharCount.textContent = `${toFaDigits(len)} / ${toFaDigits(MAX_CHARS)}`;
  targetCharCount.textContent = targetText.value ? `${toFaDigits(targetText.value.length)} کاراکتر` : '';
}

// ============================================================
// ترجمه
// ============================================================
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
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, source: srcCode, target: tgtCode }),
      signal: abortController.signal
    });

    if (!response.ok) throw new Error('network');

    const data = await response.json();

    if (data && data.responseData && data.responseData.translatedText) {
      targetText.value = data.responseData.translatedText;
      updateCharCount();
      saveToHistory({
        source: text,
        translated: data.responseData.translatedText,
        srcCode,
        tgtCode,
        time: Date.now()
      });
    } else {
      throw new Error('empty-result');
    }

  } catch (err) {
    if (err.name === 'AbortError') return;
    if (!navigator.onLine) {
      showError('اتصال اینترنت برقرار نیست.');
    } else if (err.message === 'empty-result') {
      showError('ترجمه‌ای برای این متن پیدا نشد.');
    } else {
      showError('خطا در ترجمه. لطفاً دوباره تلاش کنید.');
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

// ============================================================
// جابه‌جایی زبان‌ها
// ============================================================
swapBtn.addEventListener('click', () => {
  swapBtn.classList.add('spin');
  setTimeout(() => swapBtn.classList.remove('spin'), 400);

  const tmpLang = sourceLangSel.value;
  sourceLangSel.value = targetLangSel.value;
  targetLangSel.value = tmpLang;

  const tmpText = sourceText.value;
  sourceText.value = targetText.value;
  targetText.value = tmpText;

  updateCharCount();
  if (sourceText.value.trim()) translateText();
});

// ============================================================
// پاک کردن متن
// ============================================================
clearBtn.addEventListener('click', () => {
  sourceText.value = '';
  targetText.value = '';
  hideError();
  updateCharCount();
  sourceText.focus();
});

// ============================================================
// کپی
// ============================================================
copyBtn.addEventListener('click', async () => {
  if (!targetText.value) {
    showToast('متنی برای کپی وجود ندارد', true);
    return;
  }
  try {
    await navigator.clipboard.writeText(targetText.value);
    showToast('✅ ترجمه کپی شد');
  } catch (e) {
    targetText.removeAttribute('readonly');
    targetText.select();
    document.execCommand('copy');
    targetText.setAttribute('readonly', true);
    showToast('✅ ترجمه کپی شد');
  }
});

// ============================================================
// تبدیل متن به گفتار
// ============================================================
function speak(text, langCode) {
  if (!text || !text.trim()) {
    showToast('متنی برای خواندن وجود ندارد', true);
    return;
  }
  if (!('speechSynthesis' in window)) {
    showToast('این مرورگر از خواندن متن پشتیبانی نمی‌کند', true);
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
        showToast('خواندن متن با خطا مواجه شد', true);
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
      showToast('خواندن متن با خطا مواجه شد', true);
    }
  }, 80);
}

speakSourceBtn.addEventListener('click', () => speak(sourceText.value, sourceLangSel.value));
speakTargetBtn.addEventListener('click', () => speak(targetText.value, targetLangSel.value));

// ============================================================
// تشخیص گفتار
// ============================================================
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognitionAPI) {
  recognition = new SpeechRecognitionAPI();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 5;

  recognition.onresult = (e) => {
    let transcript = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        transcript += e.results[i][0].transcript;
      }
    }
    if (transcript) {
      sourceText.value += (sourceText.value ? ' ' : '') + transcript;
      updateCharCount();
    }
  };

  recognition.onerror = (e) => {
    const messages = {
      'not-allowed': 'دسترسی به میکروفون رد شد.',
      'no-speech': 'صدایی شنیده نشد.',
      'audio-capture': 'میکروفونی پیدا نشد.',
      'network': 'خطای شبکه در تشخیص گفتار.'
    };
    showToast(messages[e.error] || 'خطا در تشخیص گفتار', true);
    stopRecording();
  };

  recognition.onend = () => stopRecording();

  micBtn.addEventListener('click', () => {
    if (isRecording) {
      try { recognition.stop(); } catch (e) { /* ignored */ }
      return;
    }
    try {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      const code = sourceLangSel.value;
      recognition.lang = code === 'fa' ? 'fa-IR' : code;
      recognition.start();
      isRecording = true;
      micBtn.classList.add('recording');
      showToast('🎤 در حال گوش دادن...');
    } catch (e) {
      showToast('امکان شروع ضبط صدا وجود ندارد', true);
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

// ============================================================
// تم
// ============================================================
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

// ============================================================
// منوی کشویی
// ============================================================
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

// ============================================================
// تاریخچه و علاقه‌مندی‌ها
// ============================================================
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
  } catch (e) { /* ignored */ }
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
    showToast('⭐ از علاقه‌مندی‌ها حذف شد');
  } else {
    list.unshift({ ...entry, id: `f_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` });
    showToast('⭐ به علاقه‌مندی‌ها اضافه شد');
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
  const src = sourceText.value.trim();
  const tgt = targetText.value.trim();
  favBtn.classList.toggle('favorited', src && tgt && isFavorited(src, tgt));
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
  useBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 7 8M12 5c-.6 3-2.7 5.4-5.5 6.8M13 21l4-9 4 9M14.5 18h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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
  delBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m2 0l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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
    showToast('ابتدا متنی را ترجمه کنید', true);
    return;
  }
  toggleFavorite({
    source: src,
    translated: tgt,
    srcCode: sourceLangSel.value,
    tgtCode: targetLangSel.value,
    time: Date.now()
  });
});

targetText.addEventListener('input', updateFavButtonState);

// ============================================================
// پیمایش بین نماها
// ============================================================
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

// ============================================================
// ریپل
// ============================================================
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

  if (getComputedStyle(btn).position === 'static') {
    btn.style.position = 'relative';
  }
  btn.style.overflow = 'hidden';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
});

// ============================================================
// ساعت
// ============================================================
function updateClock() {
  const now = new Date();
  $('clock').textContent = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);

// ============================================================
// مقداردهی اولیه
// ============================================================
updateCharCount();
renderHistory();
renderFavorites();
updateFavButtonState();

window.addEventListener('offline', () => showError('اتصال اینترنت قطع شد.'));
window.addEventListener('online', () => hideError());

console.log('🚀 ترجمیار با موفقیت بارگذاری شد!');
