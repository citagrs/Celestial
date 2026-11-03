/**
 * Registro de eventos (clics en WhatsApp, opción elegida en el selector).
 * El proveedor se define en site.ts → analytics. Por defecto 'none': no carga nada.
 */
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  plausible?: ((event: string, options?: { props?: Record<string, string> }) => void) & { q?: unknown[] };
};

const w = window as AnalyticsWindow;

function loadScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement('script');
  s.src = src;
  s.defer = true;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.append(s);
}

function loadGa4(id: string) {
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag exige el objeto `arguments`, no un array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', id, { anonymize_ip: true });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function loadPlausible(domain: string) {
  const queue: unknown[] = [];
  w.plausible = w.plausible || Object.assign((...args: unknown[]) => queue.push(args), { q: queue });
  loadScript('https://plausible.io/js/script.js', { 'data-domain': domain });
}

export function track(name: string, props: Record<string, string>) {
  w.gtag?.('event', name, props);
  w.plausible?.(name, { props });
  window.dispatchEvent(new CustomEvent('analytics', { detail: { name, props } }));
  if (import.meta.env.DEV) console.info('[analytics]', name, props);
}

export function initTracking() {
  const { analytics: provider, analyticsId: id } = document.documentElement.dataset;
  if (id && provider === 'ga4') loadGa4(id);
  if (id && provider === 'plausible') loadPlausible(id);

  document.addEventListener('click', (ev) => {
    const link = (ev.target as Element | null)?.closest<HTMLAnchorElement>('a[data-wa]');
    if (link) track('whatsapp_click', { source: link.dataset.wa || 'desconocido' });
  });
  document.addEventListener('change', (ev) => {
    const input = ev.target as HTMLInputElement;
    if (input.name === 'need') track('need_selected', { need: input.value });
  });
}
