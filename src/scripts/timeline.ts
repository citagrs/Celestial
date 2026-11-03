/** Línea de tiempo: la línea se "llena" con el scroll y activa cada paso. */
export function initTimeline() {
  const root = document.querySelector<HTMLElement>('[data-timeline]');
  if (!root) return;
  const fill = root.querySelector<HTMLElement>('[data-timeline-fill]');
  const steps = [...root.querySelectorAll<HTMLElement>('[data-step]')];
  let active = false;
  let ticking = false;

  const update = () => {
    ticking = false;
    const line = innerHeight * 0.62;
    const r = root.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (line - r.top) / r.height));
    const tops = steps.map((s) => s.getBoundingClientRect().top);
    if (fill) fill.style.transform = `scaleY(${p.toFixed(3)})`;
    steps.forEach((s, i) => s.classList.toggle('is-active', tops[i] < line));
  };
  const onScroll = () => {
    if (!active || ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  new IntersectionObserver(([e]) => {
    active = e.isIntersecting;
    if (active) onScroll();
  }).observe(root);
  addEventListener('scroll', onScroll, { passive: true });
  root.classList.add('is-enhanced');
}
