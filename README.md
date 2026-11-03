# CELESTIAL – Landing page (plantilla replicable)

Landing de una sola página para **CELESTIAL – Servicios Integrales de Salud**, construida como plantilla base para
emprendedoras de salud y bienestar. Muy animada, accesible y extremadamente liviana (≈3 KB de JS gzip).

- **Stack:** Astro 6 (salida estática) + Tailwind CSS 4. Animaciones con CSS, SVG e IntersectionObserver (JS vanilla).
  Sin librerías de animación, sin frameworks de UI en el cliente.
- **Fuentes:** Nunito (títulos) e Inter (texto), self-hosted vía `@fontsource`, subset latin.
- **Contenido:** todo vive en [`src/config/site.ts`](src/config/site.ts). Fuente de verdad: `docs/Portafolio_Empresarial_CELESTIAL.pdf`.

## Requisitos

- Node.js 22 (≥ 22.12). Para subir a Astro 7 se necesita Node ≥ 22.23.4 (ver "Actualizar Astro").

## Cómo correrlo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
npm run size       # mide el JS del cliente (falla si supera 60 KB gzip)
```

> En `npm run dev` se muestran los testimonios marcados como pendientes (para ver la estructura).
> En el build de producción se ocultan automáticamente.

## Despliegue

El sitio es 100 % estático (`dist/`). Ya incluye configuración para:

| Plataforma | Cómo |
|---|---|
| **Vercel** | Importa el repo. Detecta Astro solo. `vercel.json` añade caché y cabeceras de seguridad. |
| **Netlify** | Importa el repo. `netlify.toml` define build y Node 22. `public/_headers` añade caché y cabeceras. |
| **Cloudflare Pages** | Build command `npm run build`, output `dist`, variable `NODE_VERSION=22`. Usa `public/_headers`. |

Antes de publicar: cambia `url` en `site.ts` por el dominio real (afecta canonical, sitemap, robots y Open Graph).

## Estructura

```
src/
  config/site.ts        ← ÚNICO archivo de contenido: marca, colores, WhatsApp, servicios, FAQ, legal, analítica
  config/types.ts       ← tipos: TypeScript avisa si falta un campo
  lib/theme.ts          ← genera las variables CSS desde los colores (y versiones con contraste AA)
  lib/whatsapp.ts       ← enlaces wa.me con mensaje prellenado
  components/           ← HeartbeatHero, NeedSelector, ServiceCard, Timeline, WhatsAppButton, ...
  illustrations/        ← escenas SVG recoloreables (physio, nurse, maternal, generic)
  scripts/              ← reveal, tilt, timeline, cursor, sparkles, track (JS vanilla)
  pages/                ← index, politica-de-datos, 404, og.png, favicon.svg, robots.txt
```

## Animaciones

| Efecto | Técnica |
|---|---|
| Corazón "lub-dub" a 72 lpm, ondas y ECG sincronizados | CSS keyframes (ciclo de 0,833 s); ECG con `stroke-dashoffset` |
| Destellos dorados | `<canvas>` cargado en `requestIdleCallback`; se pausa fuera de pantalla y con la pestaña oculta |
| Blobs orgánicos | SVG con `transform` (rotación, escala, traslación) — sin `border-radius` animado |
| Tilt 3D en tarjetas | `pointermove` + `rAF` en escritorio; leve rotación por scroll en táctil |
| Ilustraciones vivas | Respiración, parpadeo, hojas, corazones que laten (CSS) |
| Aparición al scroll, timeline | IntersectionObserver + `transform/opacity` |
| WhatsApp flotante | Pulso CSS; tooltip "¿Hablamos?" a los 6 s, sin JS |
| Halo de cursor y parallax | Solo con puntero fino (escritorio) |

- Todas respetan `prefers-reduced-motion` (quedan en su estado estático).
- Las animaciones de cada bloque se pausan cuando no está en pantalla (`data-animate`).
- Se anima solo `transform` y `opacity` (el ECG usa `stroke-dashoffset`, que solo repinta un SVG pequeño, sin reflow).

## Analítica (desactivada por defecto)

En `site.ts → analytics`:

```ts
analytics: { provider: 'none' }                       // no carga nada
analytics: { provider: 'plausible', id: 'midominio.com' }
analytics: { provider: 'ga4', id: 'G-XXXXXXXXXX' }
```

Eventos: `whatsapp_click` (con `source`: hero, header, selector-*, servicio-*, cta-final, flotante, footer) y
`need_selected`. También se emite `window` → `analytics` (CustomEvent) para otras integraciones.
Si activas GA4, añade un mecanismo de consentimiento de cookies y actualiza la sección 10 de la política de datos.

## Cumplimiento (salud, Colombia)

- `legal.habilitacionREPS: false` → muestra "Los servicios de salud se prestarán conforme a la habilitación vigente".
  Cuando exista habilitación, cambia a `true` y completa `repsCode`.
- Avisos del portafolio en cada servicio y en la FAQ. Bloque de urgencias (línea 123) visible.
- Sin formularios: el contacto es solo por WhatsApp.
- `/politica-de-datos/` es una **plantilla** (Ley 1581 de 2012) con campos `[POR DEFINIR]`; lleva `noindex` hasta que
  `legal.privacyPolicyCompleted` sea `true`. Debe revisarla un asesor jurídico.

---

## Cómo crear un sitio para un nuevo cliente en 30 minutos

1. **Duplica el proyecto (2 min).** Copia la carpeta o usa el repo como plantilla. Borra `dist/` y `docs/`, y pon el
   portafolio del nuevo cliente en `docs/`.
2. **Marca y colores (5 min).** En `src/config/site.ts` edita `brand` y `colors`. Solo necesitas 5 colores:
   `primary`, `deep` (texto), `accent`, `white`, `soft`. El sistema calcula versiones con contraste AA para textos y
   botones; el logo, las ilustraciones, el favicon y la imagen Open Graph se recolorean solos.
3. **WhatsApp (2 min).** `whatsapp.number` solo con dígitos e indicativo (ej. `573001234567`), `display` y
   `generalMessage`. Cada servicio y cada opción del selector tienen su propio `waMessage`.
4. **Contenido (12 min).** Reemplaza `hero`, `needs`, `services`, `audience`, `steps`, `values`, `founder`, `faq` y
   `finalCta`. Reglas:
   - Copia los servicios del portafolio real. No inventes servicios, cifras ni sellos.
   - Escribe empezando por la necesidad de la persona ("Para cuando…"), no por la empresa.
   - Para las ilustraciones usa `illustration: 'physio' | 'nurse' | 'maternal' | 'generic'` y escribe su `illustrationAlt`.
   - Los íconos disponibles están en `src/config/types.ts → IconId`.
5. **Legal (5 min).** Completa `legal.company`, ajusta `habilitacionREPS`, `disclaimer` y `emergencyNote`. Deja
   `privacyPolicyCompleted: false` hasta que un abogado revise la política.
6. **Testimonios.** Solo reales y con autorización. Quita `pending: true` al publicarlos.
7. **Foto de la fundadora.** Guarda la foto en `public/` (por ejemplo `public/fundadora.webp`, 960×1120 px, en WebP o
   AVIF) y pon `photo: '/fundadora.webp'`.
8. **Dominio y build (4 min).** Cambia `url`, ejecuta `npm run build && npm run size` y despliega.

### Personalización avanzada

- **Nueva ilustración:** crea `src/illustrations/MiEscena.astro` usando las variables `--ill-*`, regístrala en
  `Illustration.astro` y añade su id a `IllustrationId`.
- **Recolorear una ilustración puntual:** `<Illustration id="nurse" colors={{ primary: '#8E6BBF', skin: '#8d5a3b' }} />`.
- **Cifras:** si hay datos reales verificables, añádelos a `stats` en `site.ts`.

## Actualizar Astro

Este proyecto usa Astro 6 porque Astro 7 exige Node ≥ 22.23.4. Tras actualizar Node:

```bash
npm install astro@latest @astrojs/sitemap@latest @astrojs/check@latest
npm run build
```
