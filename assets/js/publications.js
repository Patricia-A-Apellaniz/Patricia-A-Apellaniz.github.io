(() => {
  const list = document.getElementById('publications-list');
  if (!list) return;
  const search = document.getElementById('pub-search');
  const type = document.getElementById('pub-type');
  const year = document.getElementById('pub-year');
  const topics = [...document.querySelectorAll('.pub-topic-checkbox')];
  const rows = [...list.querySelectorAll('.pub-item')];
  const groups = [...list.querySelectorAll('.year-group')];
  const topicLabel = document.getElementById('pub-topic-selection');
  const topicDetails = document.querySelector('.topic-details');
  const count = document.getElementById('pub-count');
  const empty = document.getElementById('pubs-empty');
  const normalize = value => (value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  function filter() {
    const query = normalize(search.value);
    const selected = topics.filter(t => t.checked);
    let visible = 0;
    for (const row of rows) {
      const rowTopics = row.dataset.topics.split('|').map(normalize);
      const show = (!query || normalize(row.dataset.search).includes(query)) &&
        (!type.value || row.dataset.type === type.value) &&
        (!year.value || row.dataset.year === year.value) &&
        (!selected.length || selected.some(t => rowTopics.includes(normalize(t.value))));
      row.hidden = !show;
      if (show) visible++;
    }
    for (const group of groups) group.hidden = ![...group.querySelectorAll('.pub-item')].some(row => !row.hidden);
    topicLabel.textContent = selected.length === 0 ? 'All topics' : selected.length === 1 ? selected[0].nextElementSibling.textContent : `${selected.length} topics selected`;
    count.textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
    empty.hidden = visible !== 0;
  }
  for (const field of [search, type, year, ...topics]) field.addEventListener('input', filter);
  search.form.addEventListener('reset', () => {
    requestAnimationFrame(() => { topicDetails.open = false; filter(); });
  });
  for (const button of list.querySelectorAll('.abstract-toggle')) {
    button.addEventListener('click', () => {
      const abstract = document.getElementById(button.getAttribute('aria-controls'));
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Close' : 'Abstract';
      button.setAttribute('aria-label', open ? 'Close abstract' : 'Show abstract');
      abstract.hidden = !open;
    });
  }
  document.addEventListener('click', event => { if (!topicDetails.contains(event.target)) topicDetails.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') topicDetails.open = false; });
  filter();
})();
