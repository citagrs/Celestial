/** Aparición al hacer scroll y pausa de animaciones fuera de pantalla. */
export function initReveal() {
  const reveal = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-visible');
        reveal.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

  const play = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.target.classList.toggle('is-playing', e.isIntersecting);
    },
    { rootMargin: '80px 0px' },
  );
  document.querySelectorAll('[data-animate]').forEach((el) => play.observe(el));
}
