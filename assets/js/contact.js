// One contact action: copy with JavaScript; open email normally without it.
document.querySelectorAll('[data-copy-email]').forEach((button) => {
  const contact = button.closest('.home-contact__actions');
  const status = contact.querySelector('.home-contact__status');
  const address = contact.querySelector('.home-contact__email');
  let copying = false;
  button.setAttribute('role', 'button');
  button.setAttribute('aria-label', 'Copy my email address');
  button.title = 'Copy my email address';
  button.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      button.click();
    }
  });
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    if (copying) return;
    copying = true;
    button.setAttribute('aria-busy', 'true');
    address.hidden = true;
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent = 'Email copied to clipboard.';
    } catch {
      address.hidden = false;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(address);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = 'Copy is unavailable here. Select and copy the address above.';
    } finally {
      copying = false;
      button.removeAttribute('aria-busy');
    }
  });
});
