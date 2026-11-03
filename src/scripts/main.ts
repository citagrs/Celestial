import { initReveal } from './reveal';
import { initTracking } from './track';
import { initTilt } from './tilt';
import { initTimeline } from './timeline';
import { initCursor } from './cursor';
import { initCounters } from './counters';

initReveal();
initTracking();

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  initTilt();
  initTimeline();
  initCursor();
  initCounters();

  // Los destellos no son críticos: se cargan cuando el navegador está libre.
  const canvas = document.querySelector<HTMLCanvasElement>('[data-sparkles]');
  if (canvas) {
    const idle = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1200));
    idle(() => import('./sparkles').then((m) => m.initSparkles(canvas)));
  }
}
