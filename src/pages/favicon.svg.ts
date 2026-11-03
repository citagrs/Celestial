import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { logoSvg } from '../lib/logoSvg';

export const GET: APIRoute = () =>
  new Response(logoSvg(site.colors), { headers: { 'Content-Type': 'image/svg+xml' } });
