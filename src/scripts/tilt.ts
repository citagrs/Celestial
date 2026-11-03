/** Tilt 3D sutil: sigue el cursor en escritorio y reacciona al scroll en pantallas táctiles. */
export function initTilt() {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-tilt]')];
  if (!cards.length) return;
  const set = (el: HTMLElement, rx: number, ry: number) => {
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  };

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    for (const card of cards) {
      let frame = 0;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => set(card, -y * 7, x * 9));
      });
      card.addEventListener('pointerleave', () => {
        cancelAnimationFrame(frame);
        set(card, 0, 0);
      });
    }
    return;
  }

  const visible = new Set<HTMLElement>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const el = e.target as HTMLElement;
      if (e.isIntersecting) visible.add(el);
      else visible.delete(el);
    }
  });
  cards.forEach((c) => io.observe(c));
  let ticking = false;
  addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = innerHeight;
        for (const c of visible) {
          const r = c.getBoundingClientRect();
          const p = (r.top + r.height / 2) / vh - 0.5;
          set(c, Math.max(-5, Math.min(5, p * 8)), 0);
        }
        ticking = false;
      });
    },
    { passive: true },
  );
}
