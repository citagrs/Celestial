/** Halo suave que sigue al cursor y parallax de los blobs del hero (solo escritorio). */
export function initCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const halo = document.createElement('div');
  halo.className = 'cursor-halo';
  halo.setAttribute('aria-hidden', 'true');
  document.body.append(halo);

  let tx = 0;
  let ty = 0;
  let x = 0;
  let y = 0;
  let running = false;
  const loop = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    halo.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    if (Math.abs(tx - x) + Math.abs(ty - y) > 0.4) requestAnimationFrame(loop);
    else running = false;
  };
  addEventListener(
    'pointermove',
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      halo.classList.add('is-on');
      if (!running) {
        running = true;
        requestAnimationFrame(loop);
      }
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', () => halo.classList.remove('is-on'));

  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  const blobs = [...hero.querySelectorAll<SVGElement>('.blob')];
  let frame = 0;
  hero.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const px = e.clientX / innerWidth - 0.5;
      const py = e.clientY / innerHeight - 0.5;
      blobs.forEach((b, i) => {
        const d = (i + 1) * 16;
        b.style.setProperty('--px', `${(-px * d).toFixed(1)}px`);
        b.style.setProperty('--py', `${(-py * d).toFixed(1)}px`);
      });
    });
  });
}
