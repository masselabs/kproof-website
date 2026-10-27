"use strict";
const status = document.querySelector('#copy-status');
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const hex = button.dataset.copy;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(hex);
      status.textContent = `${hex} 코드를 복사했습니다.`;
    } catch {
      status.textContent = `자동 복사가 지원되지 않습니다. 이 코드를 선택해 복사하세요: ${hex}`;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(button.querySelector('b'));
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});
