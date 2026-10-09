import type { UiStrings } from './en';

/**
 * Spanish UI strings. Typed against the English file, so a missing key is a
 * build error. Write these natively for Spanish speakers, not word for word.
 */
export const es: UiStrings = {
  site: {
    tagline: 'Especialista SEO Senior',
  },
  a11y: {
    skipToContent: 'Saltar al contenido principal',
    mainNav: 'Navegación principal',
    openMenu: 'Menú',
    breadcrumb: 'Ruta de navegación',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    blog: 'Blog',
    tools: 'Herramientas SEO',
    contact: 'Contacto',
  },
  langSwitch: {
    label: 'English',
  },
  footer: {
    builtWith: 'Hecho con Astro y alojado en Cloudflare.',
    sourceCode: 'Código fuente',
    rights: 'Todos los derechos reservados.',
  },
  placeholder: {
    comingSoon: 'Esta página está en construcción.',
  },
  blog: {
    publishedOn: 'Publicado el',
    updatedOn: 'Actualizado el',
  },
  home: {
    eyebrow: 'Diego Navarro · Costa Rica',
    headline: 'Especialista SEO Senior con mentalidad de ingeniero',
    summary:
      'Más de 6 años liderando el SEO y GEO de marcas competitivas en EE. UU. y Reino Unido, como RotoWire.com y Bookies.com: desde auditorías técnicas y datos estructurados hasta link building, outreach digital y visibilidad en buscadores con IA.',
    openToWork: 'Disponible para nuevos retos',
    actions: {
      downloadCv: 'Descargar CV',
      viewExperience: 'Ver mi experiencia',
      contact: 'Contactarme',
    },
    profile: {
      label: 'Resumen del perfil',
      role: 'rol',
      roleValue: 'Especialista SEO Senior, especialista en backlinks',
      focus: 'enfoque',
      focusValue: 'SEO, SEO técnico, link building, outreach digital, AEO/GEO',
      markets: 'mercados',
      marketsValue: 'EE. UU., Reino Unido, Latinoamérica',
      languages: 'idiomas',
      languagesValue: 'español (nativo), inglés (C1)',
      education: 'formación',
      educationValue: 'Ingeniería Informática',
    },
    results: {
      eyebrow: 'Trayectoria',
      title: 'Resultados que se acumulan',
      description:
        'La mayor parte de mi impacto viene de construir autoridad: enlaces conseguidos con outreach a escala, cada uno revisado por calidad.',
      metrics: [
        { value: '6+', label: 'Años en estrategia y ejecución SEO' },
        { value: '120+', label: 'Backlinks conseguidos al mes' },
        { value: 'DR 45', label: 'Domain Rating promedio de los enlaces' },
        { value: '5000+', label: 'Medios en mi red de outreach' },
        { value: '8–12', label: 'Dominios estatales lanzados en EE. UU.' },
        { value: '7', label: 'Personas a cargo: contratación y mentoría' },
      ],
    },
    pillars: {
      eyebrow: 'Qué hago',
      title: 'Cuatro formas en que hago crecer la visibilidad en buscadores',
      items: [
        {
          title: 'Link building y outreach',
          description:
            'Mi mayor fortaleza: estrategia de backlinks y outreach digital con una red de más de 5000 medios, revisando cada enlace por autoridad, tráfico y relevancia temática.',
        },
        {
          title: 'SEO técnico',
          description:
            'Arquitectura web, rastreo, indexación, datos estructurados y Core Web Vitals, implementados de la mano con desarrollo.',
        },
        {
          title: 'Contenido y SEO on-page',
          description:
            'Investigación de palabras clave según la intención de búsqueda, análisis de brechas frente a la competencia, enlazado interno y optimización de contenido que posiciona.',
        },
        {
          title: 'Búsqueda con IA: GEO y AEO',
          description:
            'Estrategias GEO, datos estructurados y arquitectura de contenido para ganar visibilidad y citas en Google AI Overviews, ChatGPT, Gemini y Perplexity.',
        },
      ],
    },
    brands: {
      eyebrow: 'Marcas',
      title: 'Sitios que he ayudado a crecer',
      note: 'Mercados competitivos de deportes e iGaming en EE. UU. y Reino Unido, incluidos 8–12 lanzamientos estatales.',
      more: '+ más sitios estatales',
    },
    caseStudies: {
      eyebrow: 'Casos de estudio',
      title: 'Trabajo destacado',
      viewAll: 'Todos los casos',
    },
    tools: {
      eyebrow: 'Herramientas gratuitas',
      title: 'Herramientas SEO que he creado',
      viewAll: 'Todas las herramientas',
    },
    posts: {
      eyebrow: 'Blog',
      title: 'Artículos recientes',
      viewAll: 'Todos los artículos',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Ingeniero de formación, SEO de profesión',
      text: 'Estudié Ingeniería Informática y eso define cómo trabajo: veo el SEO como un sistema que se mide, se prueba y se mejora. Trabajo en español e inglés, desde Costa Rica, con equipos de EE. UU. y Reino Unido.',
      link: 'Más sobre mí',
    },
  },
  llms: {
    language: 'Español',
    kinds: {
      page: 'Páginas',
      experience: 'Casos de estudio',
      blog: 'Artículos',
      tool: 'Herramientas SEO gratuitas',
    },
    profile: 'Perfil',
    expertise: 'Especialidades',
    profiles: 'Perfiles públicos',
  },
  pages: {
    home: {
      title: 'Diego Navarro | Especialista SEO Senior, SEO Técnico y GEO',
      description:
        'Especialista SEO Senior y en backlinks: más de 6 años impulsando marcas de EE. UU. y Reino Unido con link building, SEO técnico y GEO.',
    },
    about: {
      title: 'Sobre mí',
      description: 'Trayectoria, habilidades y enfoque SEO de Diego Navarro.',
    },
    experience: {
      title: 'Experiencia',
      description: 'Casos de estudio SEO: retos, estrategia y resultados medibles.',
    },
    blog: {
      title: 'Blog',
      description: 'Artículos sobre SEO técnico, estrategia de contenidos y búsqueda con IA.',
    },
    tools: {
      title: 'Herramientas SEO gratuitas',
      description:
        'Herramientas SEO gratuitas que funcionan en el navegador, creadas por Diego Navarro.',
    },
    contact: {
      title: 'Contacto',
      description: 'Contacta a Diego Navarro para puestos o proyectos de SEO.',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe.',
      backHome: 'Volver al inicio',
    },
  },
};
