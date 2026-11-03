import QRCode from 'qrcode';
import type { BrandColors } from '../config/types';
import { logoSvg } from './logoSvg';

/**
 * Código QR en SVG con los colores de la marca y el logo al centro.
 * Usa corrección de errores alta (H, 30 %), por eso el logo no impide escanearlo.
 */
export function qrSvg(text: string, c: BrandColors, size = 1024): string {
  const qr = QRCode.create(text, { errorCorrectionLevel: 'H' });
  const n = qr.modules.size;
  const quiet = 4;
  const total = n + quiet * 2;
  const isFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);

  // Zona central reservada para el logo (≈ 22 % del ancho).
  const hole = Math.round(n * 0.22) | 1;
  const h0 = Math.floor((n - hole) / 2);
  const inHole = (x: number, y: number) => x >= h0 && x < h0 + hole && y >= h0 && y < h0 + hole;

  let dots = '';
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!qr.modules.get(y, x) || isFinder(x, y) || inHole(x, y)) continue;
      dots += `<rect x="${x + quiet}" y="${y + quiet}" width="1.02" height="1.02"/>`;
    }
  }
  const finder = (fx: number, fy: number) => {
    const x = fx + quiet;
    const y = fy + quiet;
    return `<rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" rx="1.8" fill="none" stroke="${c.deep}" stroke-width="1"/>
<rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx=".9" fill="${c.deep}"/>`;
  };
  const logoBox = hole + 1;
  const lx = quiet + h0 - 0.5;
  const logo = `data:image/svg+xml;base64,${Buffer.from(logoSvg(c, 64)).toString('base64')}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${total} ${total}" shape-rendering="geometricPrecision">
<rect width="${total}" height="${total}" fill="#fff"/>
<g fill="${c.deep}">${dots}</g>
${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}
<rect x="${lx}" y="${lx}" width="${logoBox}" height="${logoBox}" rx="${logoBox * 0.28}" fill="#fff"/>
<image href="${logo}" x="${lx + 0.6}" y="${lx + 0.6}" width="${logoBox - 1.2}" height="${logoBox - 1.2}"/>
</svg>`;
}
