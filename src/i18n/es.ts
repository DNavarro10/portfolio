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
  experience: {
    eyebrow: 'Experiencia',
    title: 'Experiencia y casos de estudio',
    intro:
      'Más de 6 años en SEO en tres roles: desde el SEO integral de un solo sitio hasta liderar link building, SEO técnico y GEO para marcas principales. Empieza por los casos de estudio o ve directo a mi trayectoria.',
    caseStudies: {
      eyebrow: 'Casos de estudio',
      title: 'Trabajo destacado',
    },
    history: {
      eyebrow: 'Carrera',
      title: 'Trayectoria profesional',
      roles: [
        {
          role: 'Especialista SEO Senior',
          company: 'Gambling.com Group',
          period: '2023 – 2026',
          location: 'Costa Rica',
          points: [
            'Lideré el link building y el outreach digital: más de 120 backlinks al mes con un DR promedio de 45.',
            'Lideré la implementación de SEO técnico y las hojas de ruta de SEO y GEO de RotoWire.com y Bookies.com.',
            'Dirigí un equipo de 7 personas: contratación, formación, control de calidad y evaluaciones de desempeño.',
          ],
        },
        {
          role: 'Analista SEO (contratista remoto)',
          company: 'Gambling.com Group',
          period: '2021 – 2023',
          location: 'Remoto, Estados Unidos',
          points: [
            'Apoyé el SEO de 8 a 12 dominios estatales en lanzamientos de mercado a ritmo acelerado.',
            'Investigación de palabras clave, análisis de brechas frente a la competencia y optimización on-page.',
            'Ascenso a un rol de liderazgo de equipo.',
          ],
        },
        {
          role: 'Analista SEO',
          company: 'Advision Development',
          period: '2019 – 2021',
          location: 'Costa Rica',
          points: [
            'Llevé el SEO integral de SportsbookReview.com en WordPress.',
            'Auditorías técnicas, Google Tag Manager, optimización on-page y outreach.',
          ],
        },
      ],
    },
    education: {
      title: 'Formación',
      degree: 'Bachillerato en Ingeniería Informática',
      school: 'Universidad Metropolitana Castro Carazo',
    },
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Sobre Diego Navarro',
    intro:
      'Soy Diego Navarro, especialista SEO senior y especialista en backlinks, desde Costa Rica. Desde hace más de 6 años ayudo a marcas competitivas de EE. UU. y Reino Unido a crecer en Google y, cada vez más, en los buscadores con IA.',
    story: {
      title: 'De la ingeniería al SEO',
      paragraphs: [
        'Estudié Ingeniería Informática en la Universidad Metropolitana Castro Carazo. Me dejó una forma de pensar que uso todos los días: dividir un problema en sistemas, medirlos y mejorarlos paso a paso.',
        'Empecé en SEO en 2019 en Advision Development, llevando el SEO integral de SportsbookReview.com. En 2021 entré a Gambling.com Group como analista SEO remoto, apoyando de 8 a 12 lanzamientos de mercados estatales, y ascendí a un rol de liderazgo de equipo.',
        'De 2023 a 2026, como especialista SEO senior, lideré el link building, el SEO técnico y las hojas de ruta de SEO y GEO de RotoWire.com y Bookies.com, y dirigí un equipo de 7 personas.',
      ],
    },
    principles: {
      title: 'Cómo trabajo',
      items: [
        {
          title: 'Calidad antes que volumen',
          text: 'Cada enlace, página y corrección se revisa contra estándares claros antes de salir. El volumen solo importa si se sostiene.',
        },
        {
          title: 'Medir y después decidir',
          text: 'Mis recomendaciones salen de los datos, como Search Console, la analítica y las herramientas SEO, y se priorizan por impacto y esfuerzo.',
        },
        {
          title: 'Trabajar con desarrollo',
          text: 'El SEO técnico solo cuenta cuando se implementa. Trabajo de la mano con los equipos de desarrollo e integro el SEO en su flujo de trabajo.',
        },
        {
          title: 'Documentar y enseñar',
          text: 'Convierto los procesos en estándares escritos y formo al equipo con ellos, para que la calidad no dependa de una sola persona.',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      levels: [
        {
          label: 'Trabajo diario',
          items: [
            'Link building y outreach digital',
            'Auditorías e implementación de SEO técnico',
            'Investigación de palabras clave e intención de búsqueda',
            'SEO on-page y de contenido',
            'Datos estructurados (Schema.org, JSON-LD)',
            'Estrategia GEO y AEO',
            'Reportes SEO y KPI',
            'Liderazgo de equipo y control de calidad',
          ],
        },
        {
          label: 'Conocimiento práctico',
          items: [
            'Apoyo en pruebas A/B y CRO',
            'Scripts en Python (nivel básico a intermedio)',
            'HTML, CSS y JavaScript',
            'WordPress y Google Tag Manager',
            'Configuración de Cloudflare',
            'SQL básico',
          ],
        },
        {
          label: 'Aprendiendo ahora',
          items: [
            'Grafos de conocimiento',
            'Generación aumentada por recuperación (RAG)',
            'IA agéntica',
            'Looker Studio',
          ],
        },
      ],
    },
    tools: {
      title: 'Herramientas',
    },
    languages: {
      title: 'Idiomas',
      items: ['Español: nativo', 'Inglés: C1, nivel profesional avanzado'],
    },
    faq: {
      title: 'Preguntas y respuestas',
      items: [
        {
          question: '¿En qué se especializa Diego Navarro?',
          answer:
            'En link building y outreach digital, SEO técnico y GEO (optimización para motores generativos). Diego ha conseguido más de 120 backlinks al mes con un Domain Rating promedio de 45, y lideró el SEO técnico y las hojas de ruta de búsqueda con IA de RotoWire.com y Bookies.com.',
        },
        {
          question: '¿Dónde vive Diego y en qué mercados ha trabajado?',
          answer:
            'Diego vive en Costa Rica y trabaja de forma remota con equipos de EE. UU., incluso en horario de la costa este. Su experiencia abarca los mercados de EE. UU. y Reino Unido, y Latinoamérica como enfoque adicional.',
        },
        {
          question: '¿En qué idiomas trabaja Diego?',
          answer:
            'En español (nativo) e inglés (C1, nivel profesional avanzado). Este sitio es completamente bilingüe.',
        },
        {
          question: '¿Qué herramientas usa Diego?',
          answer:
            'Ahrefs, SEMrush, Screaming Frog, Google Search Console y Google Analytics 4 en el día a día, además de Majestic, Moz, SurferSEO, Google Tag Manager, Salesforce y Jira. También usa herramientas de IA como ChatGPT, Gemini y Claude para agilizar auditorías, investigación y análisis.',
        },
      ],
    },
    links: {
      experience: 'Ver mis casos de estudio',
      contact: 'Contactarme',
    },
  },
  caseStudy: {
    inShort: 'En resumen',
    keyResults: 'Resultados clave',
    tools: 'Herramientas usadas',
    topics: 'Temas',
    faq: 'Preguntas y respuestas',
    draft: 'Borrador: solo visible en desarrollo, aún no publicado.',
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
      title: 'Sobre Diego Navarro, especialista SEO senior',
      description:
        'Diego Navarro es especialista SEO senior y en backlinks desde Costa Rica, con más de 6 años en link building, SEO técnico y GEO para EE. UU. y Reino Unido.',
    },
    experience: {
      title: 'Experiencia y casos de estudio SEO',
      description:
        'Casos de estudio SEO de Diego Navarro: link building a escala, 8 a 12 lanzamientos estatales, SEO técnico y GEO, y SEO integral.',
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
