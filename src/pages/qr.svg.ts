import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { absoluteUrl } from '../lib/url';
import { qrSvg } from '../lib/qr';

/** QR que apunta a la URL pública del sitio (vectorial, ideal para imprimir). */
export const GET: APIRoute = ({ site: astroSite }) =>
  new Response(qrSvg(absoluteUrl('/', astroSite ?? site.url), site.colors), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
