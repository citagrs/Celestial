import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../config/site';
import { logoSvg } from '../lib/logoSvg';

/** Imagen Open Graph 1200×630 generada en el build con la paleta y el lema de site.ts. */
const require = createRequire(import.meta.url);
const font = (file: string) => readFile(require.resolve(`@fontsource/${file}`));

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export const GET: APIRoute = async () => {
  const { colors: c, brand, coverage } = site;
  const [nunito, inter] = await Promise.all([
    font('nunito/files/nunito-latin-800-normal.woff'),
    font('inter/files/inter-latin-600-normal.woff'),
  ]);
  const logo = `data:image/svg+xml;base64,${Buffer.from(logoSvg(c, 200)).toString('base64')}`;
  const sparkle = (top: number, left: number, size: number) =>
    h('div', { position: 'absolute', top, left, width: size, height: size, background: c.accent, transform: 'rotate(45deg)', borderRadius: size / 5, opacity: 0.85 });

  const tree = h(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      position: 'relative',
      background: `linear-gradient(135deg, ${c.white} 0%, ${c.soft} 55%, ${c.primary}55 100%)`,
      fontFamily: 'Inter',
      color: c.deep,
    },
    [
      h('div', { position: 'absolute', right: -160, top: -160, width: 620, height: 620, borderRadius: 620, background: `${c.primary}22` }),
      h('div', { position: 'absolute', left: -120, bottom: -200, width: 460, height: 460, borderRadius: 460, background: `${c.accent}26` }),
      sparkle(80, 1040, 22),
      sparkle(500, 980, 14),
      sparkle(120, 640, 12),
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px', width: 820 }, [
        h('div', { display: 'flex', fontSize: 30, letterSpacing: 6, color: c.primary, fontFamily: 'Nunito' }, brand.name),
        h('div', { display: 'flex', fontSize: 72, lineHeight: 1.05, marginTop: 20, fontFamily: 'Nunito' }, brand.slogan),
        h('div', { display: 'flex', fontSize: 28, marginTop: 28, opacity: 0.8 }, brand.descriptor),
        h('div', { display: 'flex', fontSize: 21, marginTop: 12, opacity: 0.7 }, coverage.summary),
      ]),
      h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 380 }, [
        h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 300, height: 300, borderRadius: 300, background: c.white, boxShadow: `0 30px 60px ${c.deep}33` }, [
          h('img', { width: 210, height: 210 }, undefined, { src: logo, width: 210, height: 210 }),
        ]),
      ]),
    ],
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Nunito', data: nunito, weight: 800, style: 'normal' },
      { name: 'Inter', data: inter, weight: 600, style: 'normal' },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
