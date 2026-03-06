export type NavLink = {
  href: string;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type PainPoint = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionStep = {
  title: string;
  description: string;
};

export type PlatformApp = {
  id: string;
  icon: string;
  label: string;
  name: string;
  hook: string;
  bullets: string[];
  tags: string[];
  featured?: boolean;
};

export type TimelineStep = {
  week: string;
  title: string;
  apps: string[];
  done?: boolean;
};

export type DataStat = {
  value: string;
  title: string;
  description: string;
  source: string;
  tone: "violet" | "amber" | "emerald" | "blue" | "cyan";
};

export type PricingPlan = {
  type: string;
  name: string;
  was: string;
  now: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "#problema", label: "El problema" },
  { href: "#datos", label: "Datos" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#implementacion", label: "Implementación" },
  { href: "#precios", label: "Precios" },
];

export const heroStats: HeroStat[] = [
  { value: "3 clientes", label: "Empresas activas" },
  { value: "90s", label: "Para calificar un lead" },
  { value: "80%", label: "Reducción operativa" },
];

export const metrics: Metric[] = [
  { value: "3", label: "Empresas implementadas" },
  { value: "90s", label: "Calificación de lead con IA" },
  { value: "80%", label: "Ahorro en horas operativas" },
  { value: "3-4 sem", label: "Para estar 100% operativo" },
];

export const painPoints: PainPoint[] = [
  {
    icon: "⏳",
    title: "Tiempo de respuesta letal para la conversión",
    description:
      "Un lead que espera más de 5 minutos tiene 21 veces menos probabilidad de convertir. Tu equipo no puede responder 5 canales simultáneamente.",
  },
  {
    icon: "🔀",
    title: "Conversaciones dispersas sin trazabilidad",
    description:
      "WhatsApp, Instagram, Facebook, email. Sin historial unificado no hay contexto, no hay seguimiento y no hay datos para tomar decisiones.",
  },
  {
    icon: "📉",
    title: "Inversión publicitaria sin atribución real",
    description:
      "Cada peso en Meta Ads genera leads, pero no sabes cuáles campañas, conjuntos o anuncios generan ventas reales. El CPL real es invisible.",
  },
  {
    icon: "🔄",
    title: "Recompra y reactivación sin automatizar",
    description:
      "Clientes que compraron hace 3 semanas se convierten en clientes de la competencia porque nadie los contactó en el momento correcto.",
  },
];

export const solutionSteps: SolutionStep[] = [
  {
    title: "Un inbox. Todos los canales.",
    description:
      "WhatsApp, Instagram, Facebook, Telegram y LinkedIn en tiempo real.",
  },
  {
    title: "IA califica en 60-90 segundos.",
    description:
      "Zona, tipo de cliente, volumen, urgencia y segmento A/B/C de forma automática.",
  },
  {
    title: "Asesor recibe resumen accionable.",
    description:
      "3 a 6 líneas con contexto exacto y próximos pasos sugeridos.",
  },
  {
    title: "Pipeline avanza automáticamente.",
    description: "MQL → SQL → Cotización → Won/Lost → Reorden sin trabajo manual.",
  },
  {
    title: "Datos en tiempo real para decidir.",
    description:
      "KPIs de conversión, atribución de campañas y alertas críticas en un dashboard ejecutivo.",
  },
];

export const platformApps: PlatformApp[] = [
  {
    id: "APP 01",
    icon: "📥",
    label: "Centro de comunicación",
    name: "Inbox Omnicanal",
    hook: "Tu equipo responde en 5 apps distintas y nadie sabe qué le dijeron al cliente antes. Eso termina aquí.",
    bullets: [
      "Un solo lugar para WhatsApp, Instagram, Facebook, Telegram y LinkedIn.",
      "Timeline completo por lead: mensajes, notas, archivos y eventos en orden.",
      "Asignación y traspaso entre asesores con contexto visible.",
      "Cola de prioridad A-B-C para atender primero lo que más importa.",
    ],
    tags: [
      "WhatsApp · Instagram · Facebook · Telegram",
      "SLA por prioridad",
      "Historial unificado",
    ],
    featured: true,
  },
  {
    id: "APP 02",
    icon: "🎯",
    label: "Calificación automática",
    name: "IA Calificadora de Leads",
    hook: "Tu asesor no debería perder 20 minutos en una conversación que no va a cerrar.",
    bullets: [
      "Califica cada lead en 60-90 segundos con guion conversacional estructurado.",
      "Captura zona, volumen, frecuencia y urgencia, y clasifica en segmento A/B/C.",
      "Entrega resumen de 3 a 6 líneas con contexto exacto y próximo paso.",
    ],
    tags: ["Segmenta A-B-C", "Handoff a asesor", "Reglas de no-califica"],
  },
  {
    id: "APP 03",
    icon: "🏆",
    label: "Pipeline de ventas",
    name: "Embudos de Venta Inteligentes",
    hook: "Un CRM que se mueve solo, sin arrastrar tarjetas manualmente.",
    bullets: [
      "Pipeline automático: Nuevo → MQL → SQL → Cotización → Won/Lost → Reorder.",
      "El lead avanza por señales reales, no por opinión.",
      "Asignación automática por zona, prioridad y carga de asesor.",
    ],
    tags: ["Pipeline automático", "Tareas por etapa", "Asignación por zona"],
  },
  {
    id: "APP 04",
    icon: "⚙️",
    label: "Seguimiento automático",
    name: "Automatizaciones de Conversión",
    hook: "El 70% de las ventas requiere más de 5 seguimientos. Nadie los hace manualmente.",
    bullets: [
      "Secuencias de nurturing por WA y email: 24h, 3d, 7d, 14d.",
      "Reenganche por evento: no respondió, pidió precio, dijo después.",
      "Plantillas preaprobadas por Meta para salir de la ventana de 24h.",
    ],
    tags: ["Secuencias WA + email", "Reenganche por evento", "Plantillas Meta"],
  },
  {
    id: "APP 05",
    icon: "📊",
    label: "Atribución de campañas",
    name: "Inteligencia de Marketing",
    hook: "Sin atribución real, optimizas campañas a ciegas.",
    bullets: [
      "Conecta cada lead con campaña, adset y anuncio exacto por UTM.",
      "Calcula CPL real, CAC estimado y tiempo a cierre.",
      "Reportes por ciudad, tipo de cliente, volumen y anuncio.",
    ],
    tags: ["UTM tracking", "CPL · CAC · %SQL", "Reporte por canal"],
  },
  {
    id: "APP 06",
    icon: "🤖",
    label: "Creación de campañas",
    name: "Generador de Campañas con IA",
    hook: "Producir variaciones de copy por segmento consume tiempo que tu equipo no tiene.",
    bullets: [
      "Genera copies, hooks y headlines en 3 longitudes por segmento.",
      "Sugiere ángulos de persuasión por zona, tipo de cliente y etapa.",
      "Biblioteca versionada de campañas ganadoras con métricas e historial.",
    ],
    tags: ["Copies por segmento", "Hooks y ángulos", "Biblioteca de campañas"],
  },
  {
    id: "APP 07",
    icon: "💼",
    label: "Cierre y pedidos",
    name: "Cotizaciones y Ventas",
    hook: "El asesor no debería salir de WhatsApp para cotizar y registrar pedidos.",
    bullets: [
      "Cotización desde la conversación con condiciones, entrega y vigencia.",
      "Estados de pedido en tiempo real: cotizado, confirmado, despacho, entregado.",
      "La IA sugiere el script de cierre según historial y contexto.",
    ],
    tags: ["Cotización desde WA", "PDF / imagen", "Scripts IA"],
  },
  {
    id: "APP 08",
    icon: "🛒",
    label: "Retención y recompra",
    name: "Reorden Inteligente",
    hook: "Un cliente que ya compró es 5x más fácil de cerrar, si lo contactas en el momento correcto.",
    bullets: [
      "Aprende frecuencia de recompra y dispara contacto en momento exacto.",
      "Segmenta automáticamente recurrentes, en riesgo y dormidos.",
      "Genera ofertas personalizadas por historial de volumen.",
    ],
    tags: ["Momento de reorden", "Segmenta por riesgo", "Oferta por historial"],
  },
  {
    id: "APP 09",
    icon: "📈",
    label: "Visibilidad ejecutiva",
    name: "Dashboard Ejecutivo",
    hook: "No puedes tomar decisiones comerciales con datos de ayer o reportes en Excel del viernes.",
    bullets: [
      "KPIs en tiempo real: leads, MQL/SQL, cierre, ticket y tiempos de respuesta.",
      "Embudo completo por canal, campaña, ciudad y asesor.",
      "Alertas proactivas: SLA roto, caída de MQL, CPL alto o asesor saturado.",
    ],
    tags: ["Tiempo real", "Por canal y asesor", "Alertas proactivas"],
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    week: "Semana 1",
    title: "Base de comunicación",
    apps: ["Inbox Omnicanal", "IA Calificadora de Leads", "Embudo de Ventas Inteligente"],
  },
  {
    week: "Semana 2",
    title: "Marketing que convierte",
    apps: [
      "Automatizaciones de Conversión",
      "Inteligencia de Marketing",
      "Generador de Campañas IA",
    ],
  },
  {
    week: "Semana 3",
    title: "Cierre y fidelización",
    apps: ["Cotizaciones y Ventas", "Reorden Inteligente", "Ajustes y pruebas de flujo"],
  },
  {
    week: "Semana 3-4",
    title: "Sistema operativo",
    apps: ["Dashboard Ejecutivo", "Entrega y revisión final", "Tu equipo opera solo"],
    done: true,
  },
];

export const topDataStats: DataStat[] = [
  {
    value: "47h",
    title: "Tiempo promedio de respuesta a un lead B2B",
    description:
      "La mayoría de empresas tarda casi 2 días en contactar un lead que acaba de levantar la mano.",
    source: "InsideSales / Harvard Business Review",
    tone: "violet",
  },
  {
    value: "21x",
    title: "Más probable cerrar si respondes en los primeros 5 minutos",
    description:
      "vs. responder 30 minutos después. La velocidad de respuesta es el factor #1 de conversión.",
    source: "MIT / LeadResponseManagement.org",
    tone: "amber",
  },
  {
    value: "80%",
    title: "De los leads nunca reciben un segundo seguimiento",
    description:
      "Y la mayoría de ventas se cierran entre el 5° y el 12° contacto. El seguimiento manual no escala.",
    source: "Sirius Decisions / HubSpot Research",
    tone: "emerald",
  },
];

export const bottomDataStats: DataStat[] = [
  {
    value: "79%",
    title: "De los leads de marketing no se convierten por falta de seguimiento estructurado",
    description:
      "El problema no es la cantidad de leads. Sin un sistema que los califica y nutre, la mayoría se pierde.",
    source: "MarketingSherpa",
    tone: "blue",
  },
  {
    value: "5x",
    title: "Más fácil venderle a un cliente existente que adquirir uno nuevo",
    description:
      "Sin automatizaciones de reactivación o reorden, se pierde ingreso ya pagado con inversión en adquisición.",
    source: "Bain & Company / Invesp",
    tone: "cyan",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    type: "Implementación · Pago único",
    name: "Starter",
    was: "COP $4.800.000",
    now: "COP 3.9M",
    badge: "Ahorras COP $900K — lanzamiento",
    description:
      "Todo lo que necesitas para arrancar y dejar las 9 aplicaciones funcionando en tu negocio.",
    features: [
      "9 aplicaciones configuradas y personalizadas",
      "10 sesiones de onboarding presencial o remoto",
      "Implementación en 3 a 4 semanas",
      "Pago diferido hasta 12 meses",
      "Guiones de IA y flujos configurados para tu industria",
    ],
    ctaLabel: "Solicitar cotización",
    ctaHref: "mailto:hello@channexai.com",
  },
  {
    type: "Suscripción mensual",
    name: "Professional",
    was: "COP $3.200.000 / mes",
    now: "COP 2.4M /mes",
    badge: "Precio especial de lanzamiento",
    description:
      "Las 9 aplicaciones activas con soporte prioritario y actualizaciones continuas para escalar tu conversión sin escalar tu equipo.",
    features: [
      "9 apps activas y mantenimiento continuo",
      "2 usuarios incluidos (adicionales COP $10.000 / usuario / mes)",
      "Soporte prioritario por WhatsApp y email",
      "Actualizaciones y nuevas funcionalidades",
      "Acceso anticipado a apps en desarrollo",
    ],
    ctaLabel: "Comenzar ahora",
    ctaHref: "https://wa.me/5210000000000",
    highlighted: true,
  },
  {
    type: "Suscripción mensual",
    name: "Enterprise",
    was: "COP $6.000.000 / mes",
    now: "COP 4.8M /mes",
    badge: "Para operaciones con escala",
    description:
      "Para operaciones con múltiples sedes, equipos comerciales grandes y flujos de integración con sistemas propios.",
    features: [
      "Todo lo de Professional incluido",
      "Usuarios ilimitados",
      "Manager de cuenta dedicado",
      "Integraciones a medida (ERP, POS, WMS)",
      "SLA garantizado por contrato",
    ],
    ctaLabel: "Hablar con el equipo",
    ctaHref: "mailto:hello@channexai.com",
  },
];

export const footerPlatformLinks = [
  { href: "#plataforma", label: "9 Aplicaciones" },
  { href: "#implementacion", label: "Implementación" },
  { href: "#precios", label: "Planes y precios" },
  { href: "https://docs.channexai.com", label: "Documentación" },
];

export const footerCompanyLinks = [
  { href: "https://www.channexai.com", label: "www.channexai.com" },
  { href: "mailto:hello@channexai.com", label: "hello@channexai.com" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
];
