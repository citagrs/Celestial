/** Destellos dorados en canvas. Se pausan fuera de pantalla y con la pestaña oculta. */
interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  s: number;
  star: boolean;
}

export function initSparkles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const rgb = getComputedStyle(document.documentElement)
    .getPropertyValue('--c-accent-rgb')
    .trim()
    .split(/\s+/)
    .join(',');
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let w = 0;
  let h = 0;
  let raf = 0;
  let inView = true;
  let parts: Particle[] = [];

  const make = (): Particle => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 0.7 + Math.random() * 1.8,
    vx: (Math.random() - 0.5) * 0.12,
    vy: -(0.06 + Math.random() * 0.22),
    a: Math.random() * Math.PI * 2,
    s: 0.008 + Math.random() * 0.02,
    star: Math.random() < 0.3,
  });

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    parts = Array.from({ length: Math.round(Math.min(46, (w * h) / 16000)) }, make);
  };

  const star = (x: number, y: number, r: number) => {
    const k = r * 2.6;
    ctx.beginPath();
    ctx.moveTo(x, y - k);
    ctx.quadraticCurveTo(x, y, x + k, y);
    ctx.quadraticCurveTo(x, y, x, y + k);
    ctx.quadraticCurveTo(x, y, x - k, y);
    ctx.quadraticCurveTo(x, y, x, y - k);
    ctx.fill();
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx;
      p.y += p.vy;
      p.a += p.s;
      if (p.y < -12) {
        p.y = h + 12;
        p.x = Math.random() * w;
      }
      ctx.fillStyle = `rgba(${rgb},${(0.2 + 0.6 * (0.5 + 0.5 * Math.sin(p.a))).toFixed(3)})`;
      if (p.star) star(p.x, p.y, p.r);
      else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    raf = requestAnimationFrame(draw);
  };
  const start = () => {
    if (!raf && inView && !document.hidden) raf = requestAnimationFrame(draw);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  new ResizeObserver(resize).observe(canvas);
  resize();
  new IntersectionObserver(([e]) => {
    inView = e.isIntersecting;
    if (inView) start();
    else stop();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
}
