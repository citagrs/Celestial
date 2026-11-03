import type { BrandColors } from '../config/types';

type Rgb = [number, number, number];

const hexToRgb = (hex: string): Rgb => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const rgbToHex = (rgb: Rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

const luminance = ([r, g, b]: Rgb) => {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
};

export const contrast = (a: string, b: string) => {
  const [l1, l2] = [luminance(hexToRgb(a)), luminance(hexToRgb(b))].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const mix = (a: string, b: string, t: number) => {
  const [x, y] = [hexToRgb(a), hexToRgb(b)];
  return rgbToHex(x.map((v, i) => v + (y[i] - v) * t) as Rgb);
};

/**
 * Oscurece un color hacia `toward` hasta lograr contraste AA (4.5:1) sobre `bg`.
 * Así cualquier paleta de cliente produce textos y botones accesibles.
 */
export function ink(color: string, bg: string, toward = '#0b1f26', target = 4.6): string {
  if (contrast(color, bg) >= target) return color;
  for (let t = 0.05; t <= 1; t += 0.05) {
    const c = mix(color, toward, t);
    if (contrast(c, bg) >= target) return c;
  }
  return toward;
}

const rgbList = (hex: string) => hexToRgb(hex).join(' ');

/** Variables CSS de la marca, generadas desde site.ts. */
export function themeCss(c: BrandColors): string {
  const vars: Record<string, string> = {
    '--c-primary': c.primary,
    '--c-primary-rgb': rgbList(c.primary),
    '--c-primary-ink': ink(c.primary, c.white),
    '--c-primary-tint': mix(c.primary, c.white, 0.86),
    '--c-deep': c.deep,
    '--c-deep-rgb': rgbList(c.deep),
    '--c-accent': c.accent,
    '--c-accent-rgb': rgbList(c.accent),
    '--c-accent-ink': ink(c.accent, c.white, '#3a2a08'),
    '--c-accent-tint': mix(c.accent, c.white, 0.82),
    '--c-white': c.white,
    '--c-soft': c.soft,
    '--c-muted': ink(mix(c.deep, c.white, 0.25), c.soft),
  };
  return `:root{${Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')}}`;
}
