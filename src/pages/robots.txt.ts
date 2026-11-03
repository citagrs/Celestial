import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { absoluteUrl } from '../lib/url';

export const GET: APIRoute = ({ site: astroSite }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap-index.xml', astroSite ?? site.url)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
