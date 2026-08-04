// جایگزین تابع translateText
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

  setLoading(true);

  try {
    // استفاده از Worker API
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, source: srcCode, target: tgtCode })
    });
    
    if (!response.ok) throw new Error('network');
    
    const data = await response.json();
    // بقیه کد مثل قبل
    // ...
  } catch (err) {
    // مدیریت خطاها
  } finally {
    setLoading(false);
  }
}
