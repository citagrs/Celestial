import type { BrandColors } from '../config/types';

/** Logo como cadena SVG (para favicon e imagen Open Graph), con los colores de la marca. */
export function logoSvg(c: BrandColors, size = 64): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
<path d="M32 44.5C20.5 37.4 14 30.6 14 23.4 14 18.2 17.9 14.5 22.6 14.5c3.8 0 6.9 2.2 9.4 5.6 2.5-3.4 5.6-5.6 9.4-5.6 4.7 0 8.6 3.7 8.6 8.9 0 7.2-6.5 14-18 21.1z" fill="${c.primary}"/>
<path d="M29.6 20.5h4.8v5h5v4.8h-5v5h-4.8v-5h-5v-4.8h5z" fill="#fff"/>
<g fill="none" stroke="${c.deep}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 31.5c-.6 5 1.3 9.6 5.5 13.3 5.3 4.6 12.2 7 19.3 7.4M6 31.5c1.5-1.7 3.9-1.4 4.9.6l3.2 6.4M58 31.5c.6 5-1.3 9.6-5.5 13.3-5.3 4.6-12.2 7-19.3 7.4M58 31.5c-1.5-1.7-3.9-1.4-4.9.6l-3.2 6.4"/>
</g>
<path d="M51 6l1.3 3.7L56 11l-3.7 1.3L51 16l-1.3-3.7L46 11l3.7-1.3z" fill="${c.accent}"/>
</svg>`;
}
