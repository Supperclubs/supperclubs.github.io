/* Add a design here and a matching [data-design] rule in css/designs.css. */
window.SUPPER_DESIGNS = [
  { id: 'living-room', name: '04 · The Living Room' },
  { id: 'journal', name: '01 · The Journal' },
  { id: 'candlelight', name: '02 · Candlelight — B&W' },
  { id: 'salon', name: '03 · The Salon' }
];
window.SUPPER_DEFAULT_DESIGN = 'living-room';
(function () {
  let design = window.SUPPER_DEFAULT_DESIGN;
  const requested = new URLSearchParams(location.search).get('design');
  try { design = requested || localStorage.getItem('supper-design') || design; } catch (_) { design = requested || design; }
  if (!window.SUPPER_DESIGNS.some(item => item.id === design)) design = window.SUPPER_DEFAULT_DESIGN;
  document.documentElement.dataset.design = design;
})();
