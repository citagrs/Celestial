import type { SiteConfig } from './types';

/**
 * ÚNICA fuente de contenido del sitio.
 * Fuente de verdad: docs/Portafolio_Empresarial_CELESTIAL.pdf
 * Los campos marcados con TODO deben completarse antes de publicar.
 */
export const site: SiteConfig = {
  url: 'https://celestial-salud.com', // TODO: dominio definitivo
  lang: 'es-CO',
  locale: 'es_CO',

  brand: {
    name: 'CELESTIAL',
    fullName: 'CELESTIAL – Servicios Integrales de Salud',
    descriptor: 'Servicios Integrales de Salud',
    slogan: 'Cuidamos la vida, acompañamos cada etapa',
    description:
      'Terapia física y bienestar, servicios de enfermería y asesoramiento materno perinatal en Bogotá y Fusagasugá. Atención cálida, cercana y responsable.',
    logoLabel: 'Logotipo de CELESTIAL: manos que sostienen un corazón con una cruz de salud',
  },

  colors: {
    primary: '#239AA4',
    deep: '#174B5A',
    accent: '#C8A45D',
    white: '#FFFFFF',
    soft: '#EAF0F1',
  },

  whatsapp: {
    number: '573024446047',
    display: '+57 302 444 6047',
    generalMessage: 'Hola CELESTIAL, quiero información sobre sus servicios.',
    floatTooltip: '¿Hablamos?',
  },

  coverage: {
    inPerson: ['Bogotá', 'Fusagasugá'],
    summary: 'Presencial en Bogotá y Fusagasugá · A distancia en todo el país',
    detail:
      'Atendemos de forma presencial en Bogotá y Fusagasugá. Para el resto del país ofrecemos orientación a distancia o atención presencial con cita previa.',
  },

  contact: {
    email: '', // TODO: correo de contacto
    city: 'Bogotá y Fusagasugá, Colombia',
    address: '', // TODO: dirección (si aplica)
    hours: '', // TODO: horario de atención
  },

  hero: {
    eyebrow: 'Terapia física · Enfermería · Acompañamiento materno',
    title: 'Cuidamos la vida, acompañamos cada etapa',
    subtitle:
      'Cuando tu cuerpo necesita recuperarse, cuando alguien que amas requiere cuidados o cuando te preparas para recibir a tu bebé, mereces un acompañamiento cercano, humano y responsable.',
    primaryCta: 'Escríbenos por WhatsApp',
    secondaryCta: 'Conoce nuestros servicios',
    reassurance: ['Un toque para escribirnos', 'Sin formularios', 'Te escuchamos sin juzgar'],
  },

  needs: {
    eyebrow: 'Empecemos por ti',
    title: '¿Qué necesitas hoy?',
    subtitle: 'Elige la opción que más se parece a lo que estás viviendo y te contamos cómo podemos ayudarte.',
    items: [
      {
        id: 'mover',
        label: 'Quiero moverme mejor',
        icon: 'move',
        empathy:
          'Recuperar el movimiento es recuperar tu día a día. Te escuchamos, entendemos lo que estás viviendo y te orientamos sobre cómo la terapia física y el ejercicio terapéutico pueden acompañarte, siempre a partir de una valoración profesional.',
        waMessage: 'Hola CELESTIAL, quiero moverme mejor y me interesa la terapia física y bienestar. ¿Me pueden orientar?',
        ctaLabel: 'Quiero orientación sobre terapia',
      },
      {
        id: 'enfermeria',
        label: 'Necesito cuidado de enfermería',
        icon: 'care',
        empathy:
          'Cuidar a alguien que amas también cansa, y está bien pedir apoyo. Te contamos cómo podemos acompañar a tu familiar —o a ti— con cuidados de enfermería seguros, individualizados y humanos.',
        waMessage: 'Hola CELESTIAL, necesito información sobre cuidados de enfermería para mí o para un familiar.',
        ctaLabel: 'Quiero hablar sobre enfermería',
      },
      {
        id: 'maternidad',
        label: 'Acompañamiento en mi maternidad',
        icon: 'mom',
        empathy:
          'Cada embarazo, cada nacimiento y cada posparto son únicos, y es normal tener preguntas. Te acompañamos con orientación clara y cálida sobre preparación para el parto, lactancia, posparto y cuidados de tu bebé.',
        waMessage: 'Hola CELESTIAL, quiero información sobre el acompañamiento materno perinatal (embarazo, lactancia o posparto).',
        ctaLabel: 'Quiero acompañamiento',
      },
    ],
  },

  services: {
    eyebrow: 'Nuestros servicios',
    title: 'Tres formas de cuidarte, un mismo corazón',
    subtitle:
      'Integramos el movimiento, el cuidado de enfermería y la orientación materno perinatal en una atención centrada en ti y en tu familia.',
    items: [
      {
        id: 'terapia',
        kicker: 'Movimiento y funcionalidad',
        title: 'Terapia física y bienestar corporal',
        intro:
          'Para cuando el dolor, una lesión o el paso de los años te quitan libertad. Te acompañamos a moverte de forma segura y a volver a tus actividades de cada día.',
        includes: [
          'Valoración funcional y definición de objetivos por un profesional competente.',
          'Ejercicio terapéutico para movilidad, fuerza, equilibrio y flexibilidad.',
          'Educación postural y recomendaciones para las actividades de la vida diaria.',
          'Acompañamiento en procesos de recuperación funcional y prevención de limitaciones.',
          'Técnicas manuales o complementarias de bienestar, cuando estén indicadas y las realice personal habilitado y competente.',
        ],
        visibleItems: 4,
        note: 'Las técnicas alternativas o complementarias no sustituyen diagnósticos, tratamientos médicos ni rehabilitación basada en indicación profesional.',
        illustration: 'physio',
        illustrationAlt: 'Ilustración: una fisioterapeuta guía a una persona que estira el brazo.',
        waMessage: 'Hola, me interesa el servicio de terapia física y bienestar.',
        ctaLabel: 'Pregunta por terapia física',
      },
      {
        id: 'enfermeria',
        kicker: 'Cuidado cercano y seguro',
        title: 'Servicios de enfermería',
        intro:
          'Para cuando un adulto mayor, una persona en recuperación o con dependencia necesita cuidados cercanos y seguros, y su familia necesita tranquilidad.',
        includes: [
          'Control de signos vitales y observación de cambios relevantes.',
          'Apoyo en el cuidado de personas mayores, con dependencia o en recuperación, según plan de cuidado.',
          'Valoración y seguimiento de necesidades de cuidado dentro del ámbito profesional.',
          'Educación al paciente y a su familia para el autocuidado.',
          'Curaciones y cuidado de heridas, según competencias, protocolos y condiciones del servicio.',
          'Administración de medicamentos únicamente cuando corresponda, con la orden o el soporte requerido y por personal autorizado.',
          'Orientación sobre adherencia a recomendaciones y consulta oportuna ante signos de alarma.',
        ],
        visibleItems: 4,
        note: 'Los cuidados se prestan dentro del alcance profesional y, cuando corresponde, de acuerdo con la prescripción médica.',
        illustration: 'nurse',
        illustrationAlt: 'Ilustración: una enfermera toma los signos vitales a un adulto mayor sentado en su sillón, en casa.',
        waMessage: 'Hola, necesito información sobre cuidados de enfermería.',
        ctaLabel: 'Pregunta por enfermería',
      },
      {
        id: 'materno',
        kicker: 'Embarazo, nacimiento y posparto',
        title: 'Asesoramiento materno perinatal',
        intro:
          'Para vivir tu embarazo, la llegada de tu bebé y el posparto con información clara, calma y compañía, junto a tu pareja y tu familia.',
        includes: [
          'Educación prenatal y preparación para el nacimiento.',
          'Información y apoyo educativo sobre lactancia materna.',
          'Educación sobre recuperación y autocuidado en el posparto.',
          'Orientación sobre higiene, sueño seguro, alimentación y cuidados básicos del recién nacido.',
          'Orientación sobre los cambios habituales del embarazo y hábitos de autocuidado.',
          'Acompañamiento educativo a la pareja y a la red familiar.',
          'Reconocimiento de signos de alarma maternos y neonatales, y orientación para buscar atención inmediata.',
        ],
        visibleItems: 4,
        note: 'El asesoramiento es educativo y complementario. No reemplaza controles prenatales, valoración obstétrica, atención del parto, diagnóstico ni atención de urgencias.',
        illustration: 'maternal',
        illustrationAlt: 'Ilustración: una madre en una mecedora sostiene a su bebé en brazos, de noche y en calma.',
        waMessage: 'Hola, quiero información sobre el acompañamiento materno perinatal.',
        ctaLabel: 'Pregunta por acompañamiento materno',
      },
    ],
  },

  audience: {
    eyebrow: 'Para quién es',
    title: 'Si te reconoces aquí, estamos para ti',
    subtitle: 'Acompañamos a personas y familias en distintos momentos de la vida.',
    items: [
      {
        icon: 'walk',
        title: 'Quieres moverte con libertad',
        text: 'Personas que necesitan mejorar o mantener su movilidad, fuerza, equilibrio y funcionalidad.',
      },
      {
        icon: 'recovery',
        title: 'Estás en recuperación',
        text: 'Personas en procesos de recuperación o que necesitan educación para el cuidado físico.',
      },
      {
        icon: 'stethoscope',
        title: 'Necesitas cuidados de enfermería',
        text: 'Pacientes que requieren cuidados de enfermería dentro del alcance habilitado.',
      },
      {
        icon: 'pregnant',
        title: 'Esperas a tu bebé o acabas de tenerlo',
        text: 'Mujeres gestantes y madres en la etapa del posparto.',
      },
      {
        icon: 'baby',
        title: 'Tu familia está creciendo',
        text: 'Familias que buscan orientación en lactancia y cuidados básicos del recién nacido.',
      },
      {
        icon: 'elder',
        title: 'Cuidas a una persona mayor',
        text: 'Personas mayores y cuidadores que necesitan educación y apoyo en el cuidado cotidiano.',
      },
    ],
  },

  steps: {
    eyebrow: 'Cómo te acompañamos',
    title: 'Un camino claro, paso a paso',
    subtitle: 'Desde el primer mensaje sabrás qué podemos hacer por ti, cómo y con qué límites.',
    items: [
      {
        icon: 'chat',
        title: 'Nos escribes',
        text: 'Escuchamos tu necesidad y te explicamos los servicios disponibles, sus alcances, límites y condiciones.',
      },
      {
        icon: 'compass',
        title: 'Te orientamos',
        text: 'Revisamos si tu solicitud corresponde a nuestro portafolio o si es mejor orientarte hacia otro servicio.',
      },
      {
        icon: 'clipboard',
        title: 'Valoramos',
        text: 'Un profesional competente realiza la valoración cuando el tipo de servicio lo requiere.',
      },
      {
        icon: 'plan',
        title: 'Acordamos tu plan',
        text: 'Definimos juntos objetivos, actividades, frecuencia y recomendaciones, y lo llevamos a cabo con seguridad, higiene y privacidad.',
      },
      {
        icon: 'follow',
        title: 'Seguimos contigo',
        text: 'Revisamos tu evolución, resolvemos dudas, ajustamos el plan y te orientamos en los pasos siguientes.',
      },
    ],
  },

  values: {
    eyebrow: 'Nuestros valores',
    title: 'Lo que nos mueve',
    subtitle: 'Cuidar es acompañar. Estos principios guían cada atención.',
    items: [
      { icon: 'heart-hand', title: 'Humanización', text: 'Reconocemos la dignidad, la historia y las necesidades de cada persona.' },
      { icon: 'respect', title: 'Respeto', text: 'Escuchamos sin juzgar y respetamos tu autonomía, intimidad y diversidad.' },
      { icon: 'balance', title: 'Ética y responsabilidad', text: 'Actuamos con honestidad, prudencia y dentro de las competencias profesionales.' },
      { icon: 'shield-check', title: 'Calidad y seguridad', text: 'Trabajamos con protocolos, evidencia disponible, registros y mejora continua.' },
      { icon: 'two-hearts', title: 'Empatía', text: 'Acompañamos con sensibilidad a pacientes y familias.' },
      { icon: 'promise', title: 'Compromiso', text: 'Cumplimos lo ofrecido y te orientamos a tiempo cuando necesitas otro nivel de atención.' },
    ],
  },

  founder: {
    eyebrow: 'Quién está detrás',
    name: 'Geraldinne Romero Salamanca',
    role: 'Fundadora de CELESTIAL',
    photo: null, // TODO: foto real de la fundadora (mientras tanto se muestra una ilustración)
    illustrationAlt: 'Ilustración de una profesional de la salud con bata y fonendoscopio, sonriendo.',
    paragraphs: [
      'CELESTIAL nace del deseo de Geraldinne de acercar el cuidado, la recuperación y el acompañamiento a las personas y a sus familias.',
      'Su propósito es que cada persona sea escuchada, reciba una orientación clara sobre lo que podemos hacer por ella y sienta que no está sola en ninguna etapa del camino.',
    ],
    quote:
      'Creemos que cuidar es acompañar. Cada etapa de la vida trae necesidades distintas y merece una atención respetuosa, cercana y responsable.',
  },

  testimonials: {
    eyebrow: 'Historias',
    title: 'Lo que dicen las familias',
    subtitle: 'Pronto compartiremos aquí las experiencias de quienes hemos acompañado.',
    items: [
      { quote: '[TESTIMONIO REAL PENDIENTE]', name: '[Nombre o iniciales]', context: '[Servicio recibido]', pending: true },
      { quote: '[TESTIMONIO REAL PENDIENTE]', name: '[Nombre o iniciales]', context: '[Servicio recibido]', pending: true },
      { quote: '[TESTIMONIO REAL PENDIENTE]', name: '[Nombre o iniciales]', context: '[Servicio recibido]', pending: true },
    ],
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvamos tus dudas',
    items: [
      {
        q: '¿En qué ciudades atienden?',
        a: 'Atendemos de forma presencial en Bogotá y Fusagasugá, incluida la atención en casa cuando el servicio lo permite. Para el resto del país ofrecemos orientación a distancia o atención presencial con cita previa. Escríbenos y revisamos tu caso.',
      },
      {
        q: '¿Cómo es la primera conversación?',
        a: 'Nos escribes por WhatsApp, te escuchamos y te explicamos qué servicio se ajusta a lo que necesitas, cómo funciona, sus límites y sus condiciones. No tienes que llenar formularios.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Depende del servicio, la frecuencia y la modalidad de atención. Escríbenos y te damos la información de forma clara antes de empezar.',
      },
      {
        q: '¿El acompañamiento materno reemplaza mis controles prenatales?',
        a: 'No. El asesoramiento materno perinatal es educativo y complementario. No reemplaza los controles prenatales, la valoración obstétrica, la atención del parto, el diagnóstico ni la atención de urgencias.',
      },
      {
        q: '¿La terapia física reemplaza el tratamiento de mi médico?',
        a: 'No. La terapia física se basa en una valoración profesional y las técnicas alternativas o complementarias no sustituyen diagnósticos, tratamientos médicos ni rehabilitación basada en indicación profesional.',
      },
      {
        q: '¿Pueden administrar medicamentos?',
        a: 'Solo cuando corresponde, con la orden o el soporte requerido y por personal autorizado, dentro del alcance profesional de enfermería.',
      },
      {
        q: '¿Qué pasa si lo que necesito está fuera de lo que ofrecen?',
        a: 'Te lo diremos con honestidad desde el primer contacto y te orientaremos hacia el profesional o la institución adecuada para tu caso.',
      },
      {
        q: '¿Qué hago si se trata de una urgencia?',
        a: 'Comunícate con la línea 123 o acude al servicio de urgencias más cercano. WhatsApp no es un canal para atender urgencias.',
      },
      {
        q: '¿Cómo cuidan mi información?',
        a: 'Tratamos tus datos personales conforme a la Ley 1581 de 2012 y a nuestra política de tratamiento de datos. Te recomendamos no enviar resultados, historias clínicas ni documentos médicos por WhatsApp hasta que te indiquemos el canal adecuado.',
      },
    ],
  },

  finalCta: {
    title: 'Cada etapa de la vida merece ser acompañada',
    text: 'Cuéntanos qué estás viviendo. Te escuchamos con calma y te orientamos con honestidad sobre cómo podemos ayudarte.',
    cta: 'Escríbenos por WhatsApp',
  },

  stats: [],

  legal: {
    habilitacionREPS: false,
    repsCode: '', // TODO: código de habilitación REPS cuando exista
    pendingHabilitationNote: 'Los servicios de salud se prestarán conforme a la habilitación vigente.',
    emergencyNote: 'Ante una urgencia, comunícate con la línea 123 o acude al servicio de urgencias más cercano.',
    emergencyPhone: '123',
    disclaimer:
      'La información de este sitio es orientativa y educativa. No reemplaza la consulta, el diagnóstico ni el tratamiento por parte de un profesional de la salud.',
    privacyPolicyPath: '/politica-de-datos/',
    privacyPolicyCompleted: false,
    company: {
      legalName: '[RAZÓN SOCIAL POR DEFINIR]',
      nit: '[NIT POR DEFINIR]',
      address: '[DIRECCIÓN POR DEFINIR]',
      email: '[CORREO POR DEFINIR]',
      phone: '+57 302 444 6047',
      legalRepresentative: '[REPRESENTANTE LEGAL POR DEFINIR]',
      policyDate: '[FECHA DE ENTRADA EN VIGENCIA]',
    },
  },

  analytics: {
    provider: 'none',
    id: '',
  },
};
