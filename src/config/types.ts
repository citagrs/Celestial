/**
 * Tipos de la configuración del sitio.
 * Si creas un sitio para una nueva clienta, solo edita `site.ts`:
 * TypeScript te avisará si falta algún campo obligatorio.
 */

export type IllustrationId = 'physio' | 'nurse' | 'maternal' | 'generic';

export type IconId =
  | 'move'
  | 'care'
  | 'mom'
  | 'walk'
  | 'recovery'
  | 'stethoscope'
  | 'pregnant'
  | 'baby'
  | 'elder'
  | 'heart-hand'
  | 'respect'
  | 'balance'
  | 'shield-check'
  | 'two-hearts'
  | 'promise'
  | 'chat'
  | 'compass'
  | 'clipboard'
  | 'plan'
  | 'follow';

export interface BrandColors {
  /** Color principal de la marca (botones, acentos grandes). */
  primary: string;
  /** Color oscuro para texto y contraste. */
  deep: string;
  /** Color de acento (detalles, destellos). */
  accent: string;
  /** Blanco o color de fondo principal. */
  white: string;
  /** Fondo suave de secciones alternas. */
  soft: string;
}

export interface Need {
  id: string;
  /** Texto del botón en el selector "¿Qué necesitas hoy?". */
  label: string;
  icon: IconId;
  /** Mensaje empático que aparece al elegir la opción. */
  empathy: string;
  /** Mensaje prellenado de WhatsApp. */
  waMessage: string;
  ctaLabel: string;
}

export interface Service {
  id: string;
  kicker: string;
  title: string;
  /** Introducción que empieza por la necesidad de la persona. */
  intro: string;
  /** Lo que incluye (tomado del portafolio). Los primeros `visibleItems` se muestran siempre. */
  includes: string[];
  visibleItems?: number;
  /** Aviso de alcance del servicio (se muestra siempre). */
  note?: string;
  illustration: IllustrationId;
  /** Texto alternativo de la ilustración. */
  illustrationAlt: string;
  waMessage: string;
  ctaLabel: string;
}

export interface Audience {
  icon: IconId;
  title: string;
  text: string;
}

export interface Step {
  icon: IconId;
  title: string;
  text: string;
}

export interface Value {
  icon: IconId;
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  /** true = placeholder. Nunca se publica en producción. */
  pending?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface SiteConfig {
  /** URL pública definitiva (para sitemap, canonical y Open Graph). */
  url: string;
  lang: string;
  locale: string;

  brand: {
    name: string;
    fullName: string;
    descriptor: string;
    slogan: string;
    /** Meta description (≈150 caracteres). */
    description: string;
    /** Palabras para el ícono de la pestaña y el logo. */
    logoLabel: string;
  };

  colors: BrandColors;

  whatsapp: {
    /** Solo dígitos, con indicativo de país. Ej: 573001234567 */
    number: string;
    display: string;
    generalMessage: string;
    floatTooltip: string;
  };

  coverage: {
    inPerson: string[];
    summary: string;
    detail: string;
  };

  contact: {
    email: string;
    city: string;
    address: string;
    hours: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    reassurance: string[];
  };

  needs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Need[];
  };

  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Service[];
  };

  audience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Audience[];
  };

  steps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Step[];
  };

  values: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Value[];
  };

  founder: {
    eyebrow: string;
    name: string;
    role: string;
    /** Ruta a la foto en /public (null = se muestra una ilustración). */
    photo: string | null;
    /** Texto alternativo de la ilustración que reemplaza la foto. */
    illustrationAlt: string;
    paragraphs: string[];
    quote: string;
  };

  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
  };

  faq: {
    eyebrow: string;
    title: string;
    items: Faq[];
  };

  finalCta: {
    title: string;
    text: string;
    cta: string;
  };

  /** Cifras reales verificables. Si está vacío, no se muestran contadores. */
  stats: Stat[];

  legal: {
    /** true solo cuando la empresa tenga habilitación vigente en el REPS. */
    habilitacionREPS: boolean;
    repsCode: string;
    pendingHabilitationNote: string;
    emergencyNote: string;
    emergencyPhone: string;
    disclaimer: string;
    privacyPolicyPath: string;
    /** false = la política es plantilla y la página lleva noindex. */
    privacyPolicyCompleted: boolean;
    company: {
      legalName: string;
      nit: string;
      address: string;
      email: string;
      phone: string;
      legalRepresentative: string;
      policyDate: string;
    };
  };

  analytics: {
    /** 'none' = no carga ningún script ni cookie. */
    provider: 'none' | 'ga4' | 'plausible';
    /** GA4: G-XXXXXXX · Plausible: dominio registrado. */
    id: string;
  };
}
