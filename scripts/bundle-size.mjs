// Mide el JavaScript que descarga el cliente (archivos .js + scripts en línea), en gzip.
import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { gzipSync } from 'node:zlib';

const DIST = 'dist';
const LIMIT_KB = 60;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);
const kb = (n) => (n / 1024).toFixed(2);
let totalJs = 0;
const rows = [];
for (const f of files.filter((f) => extname(f) === '.js')) {
  const buf = await readFile(f);
  const gz = gzipSync(buf, { level: 9 }).length;
  totalJs += gz;
  rows.push([f, buf.length, gz]);
}
const html = await readFile(join(DIST, 'index.html'), 'utf8');
const inline = [...html.matchAll(/<script(?![^>]*(?:src=|application\/ld\+json))[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n');
const inlineGz = gzipSync(inline, { level: 9 }).length;
const htmlGz = gzipSync(html, { level: 9 }).length;

console.log('\nJS del cliente');
for (const [f, raw, gz] of rows) console.log(`  ${f.padEnd(48)} ${kb(raw).padStart(8)} KB  →  ${kb(gz).padStart(6)} KB gzip`);
console.log(`  ${'scripts en línea (index.html)'.padEnd(48)} ${kb(inline.length).padStart(8)} KB  →  ${kb(inlineGz).padStart(6)} KB gzip`);
const total = totalJs + inlineGz;
console.log(`\n  TOTAL JS: ${kb(total)} KB gzip (límite ${LIMIT_KB} KB) ${total / 1024 <= LIMIT_KB ? '✓' : '✗'}`);
console.log(`  index.html (con CSS en línea): ${kb(html.length)} KB  →  ${kb(htmlGz)} KB gzip\n`);
if (total / 1024 > LIMIT_KB) process.exit(1);
