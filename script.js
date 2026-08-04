// تابع translateText را با این کد جایگزین کنید
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
      const translated = data.responseData.translatedText;
      targetText.value = translated;
      updateCharCount();
      saveToHistory({ 
        source: text, 
        translated, 
        srcCode, 
        tgtCode, 
        time: Date.now() 
      });
    } else if (data && data.translatedText) {
      // برای LibreTranslate
      targetText.value = data.translatedText;
      updateCharCount();
      saveToHistory({ 
        source: text, 
        translated: data.translatedText, 
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
      showError('ترجمه‌ای برای این متن پیدا نشد. متن دیگری را امتحان کنید.');
    } else {
      showError('خطا در ترجمه. لطفاً دوباره تلاش کنید.');
    }
  } finally {
    setLoading(false);
  }
}
