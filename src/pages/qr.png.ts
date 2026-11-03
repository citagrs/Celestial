import type { APIRoute } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../config/site';
import { absoluteUrl } from '../lib/url';
import { qrSvg } from '../lib/qr';

/** QR en PNG de 1024 px (para WhatsApp, redes o documentos). */
export const GET: APIRoute = ({ site: astroSite }) => {
  const svg = qrSvg(absoluteUrl('/', astroSite ?? site.url), site.colors);
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1024 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
