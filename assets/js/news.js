(() => {
  if (typeof HTMLDialogElement === 'undefined') return;
  document.querySelectorAll('[data-news-dialog]').forEach(link => {
    const dialog = document.getElementById(link.dataset.newsDialog);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', dialog.id);
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.showModal();
    });
    dialog.querySelector('.news-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => link.focus());
  });
})();
