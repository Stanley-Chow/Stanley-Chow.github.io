// Email remains visible and usable even when clipboard access is unavailable.
document.querySelectorAll('[data-copy-email]').forEach((button) => {
  const contact = button.closest('.home-contact__actions');
  const status = contact.querySelector('.home-contact__status');
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent = 'Email copied. Paste it into your email app.';
    } catch {
      const address = contact.querySelector('.home-contact__email');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(address);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = 'Copy is unavailable here. Select and copy the address above.';
    } finally {
      button.disabled = false;
    }
  });
});
