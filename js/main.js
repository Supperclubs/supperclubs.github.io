(function () {
  'use strict';
  const select = document.getElementById('design-select');
  if (select) {
    window.SUPPER_DESIGNS.forEach(design => select.add(new Option(design.name, design.id)));
    select.value = document.documentElement.dataset.design;
    select.addEventListener('change', () => {
      document.documentElement.dataset.design = select.value;
      try { localStorage.setItem('supper-design', select.value); } catch (_) { /* Storage may be disabled. */ }
      const url = new URL(location.href);
      url.searchParams.set('design', select.value);
      history.replaceState(null, '', url);
      updateLinks();
    });
  }
  // Keep the choice across pages even when browser storage is unavailable.
  function updateLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin && url.pathname.endsWith('.html')) {
        url.searchParams.set('design', document.documentElement.dataset.design);
        link.href = url.href;
      }
    });
  }
  updateLinks();
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') !== 'true';
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      navLinks.classList.toggle('open', open);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu(); hamburger.focus();
      }
    });
    const mobile = matchMedia('(max-width: 640px)');
    mobile.addEventListener('change', closeMenu);
  }
  // Provide an outline for long session readings.
  const body = document.querySelector('.session-body');
  if (body) {
    const outline = document.createElement('details');
    outline.className = 'reading-outline';
    const summary = document.createElement('summary');
    summary.textContent = 'On this page';
    outline.append(summary);
    const list = document.createElement('ul');
    body.querySelectorAll('h2').forEach((heading, index) => {
      heading.id = 'reading-section-' + (index + 1);
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + heading.id; link.textContent = heading.textContent;
      item.append(link); list.append(item);
    });
    outline.append(list); body.prepend(outline);
  }
})();
