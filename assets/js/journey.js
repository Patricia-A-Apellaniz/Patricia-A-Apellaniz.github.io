(() => {
  const rail = document.querySelector('.horizontal-timeline');
  if (!rail) return;
  const items = [...rail.querySelectorAll('.horizontal-moment')];
  const hover = matchMedia('(hover:hover) and (pointer:fine)');
  const narrow = matchMedia('(max-width:650px)');
  const canHover = () => hover.matches && !narrow.matches;
  let timer;
  function open(item, reveal = false) {
    clearTimeout(timer);
    for (const other of items) {
      const selected = other === item;
      other.classList.toggle('is-open', selected);
      other.querySelector('button').setAttribute('aria-expanded', String(selected));
      other.querySelector('.milestone-detail').hidden = !selected;
    }
    if (reveal && item) {
      const scroller = rail.parentElement;
      const left = item.offsetLeft - rail.offsetLeft;
      scroller.scrollTo({left: Math.max(0, left - 15), behavior: 'auto'});
    }
  }
  items.forEach((item, index) => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      if (!canHover()) open(item.classList.contains('is-open') ? null : item, true);
    });
    item.addEventListener('pointerenter', () => {
      if (!canHover()) return;
      clearTimeout(timer);
      timer = setTimeout(() => open(item), 120);
    });
    item.addEventListener('pointerleave', () => {
      clearTimeout(timer);
      if (canHover()) timer = setTimeout(() => open(null), 120);
    });
    button.addEventListener('focus', () => {
      if (button.matches(':focus-visible')) open(item, true);
    });
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'Escape') { open(null); return; }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(item.classList.contains('is-open') ? null : item, true);
        return;
      }
      if (event.key === 'ArrowRight') next = (index + 1) % items.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = items.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      open(items[next], true);
      items[next].querySelector('button').focus({preventScroll:true});
    });
  });
  rail.addEventListener('pointerleave', () => { if (canHover()) open(null); });
  rail.addEventListener('focusout', event => {
    if (!rail.contains(event.relatedTarget)) open(null);
  });
  open(null);
})();
