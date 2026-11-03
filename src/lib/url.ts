/**
 * Rutas internas compatibles con despliegues en subcarpeta (p. ej. GitHub Pages: /Celestial/).
 * `base` se define en astro.config.mjs (variable BASE_PATH).
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${base}${path}`;

export const absoluteUrl = (path: string, site: URL | string) => new URL(withBase(path), site).href;
