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
        { value: '8–12', label: 'Dominios estatales y provinciales lanzados' },
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
  contact: {
    eyebrow: 'Contacto',
    title: 'Contactar a Diego Navarro',
    intro:
      'Usa el formulario o escríbeme por LinkedIn. Con gusto converso sobre puestos de SEO senior, link building, SEO técnico y GEO con equipos de EE. UU., Reino Unido y Latinoamérica.',
    form: {
      title: 'Envíame un mensaje',
      text: 'Cuéntame sobre el puesto o el proyecto.',
      name: 'Nombre',
      email: 'Correo electrónico',
      company: 'Empresa (opcional)',
      topic: '¿Sobre qué es?',
      topics: [
        { value: 'role', label: 'Una oportunidad laboral' },
        { value: 'project', label: 'Un proyecto SEO para mi negocio' },
        { value: 'other', label: 'Otro tema' },
      ],
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      soon: 'El formulario estará activo pronto. Mientras tanto, LinkedIn es la forma más rápida de contactarme.',
      privacy:
        'Tus datos solo se usan para responderte. Nunca se comparten ni se agregan a una lista de correo.',
    },
    other: {
      title: 'Otras formas de contactarme',
    },
    linkedin: {
      title: 'Escríbeme en LinkedIn',
      text: 'Envía un mensaje o una solicitud de conexión con una nota breve sobre el puesto o el proyecto.',
      button: 'Abrir LinkedIn',
    },
    details: {
      title: 'Cómo trabajo',
      items: [
        { label: 'Ubicación', value: 'Costa Rica (UTC−6)' },
        { label: 'Horario', value: 'Acostumbrado a trabajar en horario del este de EE. UU. (EST)' },
        { label: 'Idiomas', value: 'Español (nativo), inglés (C1)' },
        { label: 'Enfoque', value: 'SEO senior, link building, SEO técnico, GEO' },
      ],
    },
    cv: {
      title: 'CV',
      text: '¿Prefieres un documento? Descarga mi CV en PDF.',
    },
    services: {
      eyebrow: 'Para empresas',
      title: '¿Necesitas ayuda con el SEO de tu negocio?',
      text: 'Estoy preparando una oferta de servicios de link building, SEO técnico y GEO. Mientras tanto, escríbeme y cuéntame sobre tu proyecto.',
    },
  },
  toolsIndex: {
    eyebrow: 'Herramientas gratuitas',
    title: 'Herramientas SEO gratuitas',
    intro:
      'Herramientas pequeñas y rápidas para el trabajo SEO del día a día: revisar snippets, escribir datos estructurados y evaluar prospectos de link building. Funcionan por completo en tu navegador, así que nada de lo que escribes se envía ni se guarda.',
    open: 'Abrir herramienta',
    more: 'Vienen más herramientas, como verificadores de acceso de rastreadores de IA, backlinks en vivo e indexabilidad.',
  },
  toolPage: {
    eyebrow: 'Herramienta SEO gratuita',
    privacy: 'Funciona en tu navegador. Nada de lo que escribes se envía ni se guarda.',
    howTo: 'Cómo usarla',
    faq: 'Preguntas frecuentes',
    noscript: 'Esta herramienta necesita JavaScript. Actívalo en tu navegador para usarla.',
    related: 'Más herramientas gratuitas',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  toolContent: {
    contentAnalyzer: {
      steps: [
        'Pega tu borrador como texto, o pega el código HTML de la página para revisar también las etiquetas.',
        'Agrega la palabra clave para la que quieres posicionar la página (opcional).',
        'Revisa los datos: extensión, legibilidad, uso de la palabra clave y las palabras y frases más repetidas.',
        'Corrige las advertencias y pega la nueva versión para comparar.',
      ],
      faq: [
        {
          question: '¿Cuál es la densidad de palabra clave ideal para SEO?',
          answer:
            'No existe un número ideal y Google no usa uno. Como referencia, una palabra clave principal entre 0,5% y 2,5% suele leerse natural. Por encima de 3%, o cuando una frase se repite en todos los encabezados, el texto suele parecer relleno de palabras clave.',
        },
        {
          question: '¿Qué es el keyword stuffing?',
          answer:
            'Es repetir una palabra o frase de forma poco natural para intentar posicionar. Las políticas de spam de Google lo mencionan directamente y además hace el texto más difícil de leer. Usa sinónimos y términos relacionados, y escribe primero para el lector.',
        },
        {
          question: '¿Qué tan largo debe ser un artículo SEO?',
          answer:
            'Tan largo como haga falta para responder bien la pregunta. La cantidad de palabras no es un factor de posicionamiento por sí sola. Compara tu borrador con las páginas que ya posicionan para esa búsqueda y elimina lo que no ayude al lector.',
        },
        {
          question: '¿Cómo se calcula la legibilidad?',
          answer:
            'En inglés se usa la fórmula Flesch Reading Ease y en español la de Fernández Huerta. Ambas combinan el largo de las oraciones y las sílabas por palabra. Las sílabas se cuentan de forma automática, así que toma la puntuación como una estimación.',
        },
      ],
      ui: {
        input: 'Contenido (HTML o texto)',
        inputPlaceholder: 'Pega aquí tu artículo o el código fuente de la página',
        keyword: 'Palabra clave objetivo (opcional)',
        keywordPlaceholder: 'link building',
        language: 'Idioma del contenido',
        languages: { en: 'Inglés', es: 'Español' },
        empty: 'Pega contenido para ver el análisis.',
        overview: 'Resumen',
        stats: {
          words: 'Palabras',
          characters: 'Caracteres',
          sentences: 'Oraciones',
          paragraphs: 'Párrafos',
          readingTime: 'Tiempo de lectura',
          avgSentence: 'Oración promedio',
          readability: 'Legibilidad',
        },
        minutes: '{n} min',
        wordsPerSentence: '{n} palabras',
        readabilityLevels: {
          easy: 'Fácil',
          standard: 'Normal',
          difficult: 'Difícil',
          veryDifficult: 'Muy difícil',
        },
        keywordTitle: 'Palabra clave objetivo',
        keywordChecks: {
          density: 'Aparece {count} veces ({density}% de densidad).',
          low: 'Aparece {count} veces ({density}%): puede no quedar claro de qué trata la página.',
          high: 'Aparece {count} veces ({density}%): puede parecer relleno de palabras clave. Usa sinónimos y términos relacionados.',
          inTitle: 'Está en el title.',
          notInTitle: 'No está en el title.',
          inH1: 'Está en el H1.',
          notInH1: 'No está en el H1.',
          inIntro: 'Está en las primeras 100 palabras.',
          notInIntro: 'No está en las primeras 100 palabras.',
          inHeadings: 'Está en {count} de {total} subtítulos.',
          headingsStuffed: 'Está en {count} de {total} subtítulos: varía la redacción.',
          notInHeadings: 'No está en ningún subtítulo.',
          inMeta: 'Está en la meta description.',
          notInMeta: 'No está en la meta description.',
        },
        topWords: 'Palabras más repetidas',
        topPhrases: 'Frases más repetidas',
        term: 'Término',
        count: 'Veces',
        density: 'Densidad',
        stuffingFlag: 'Alta',
        sentencesTitle: 'Oraciones',
        longSentences: 'Oraciones de más de 25 palabras: {count}. Divide algunas.',
        longSentencesOk: 'Ninguna oración supera las 25 palabras.',
        htmlTitle: 'Revisión HTML',
        htmlOnly:
          'Pega el código HTML para revisar las etiquetas (title, meta description, encabezados, imágenes, enlaces).',
        html: {
          title: 'Title: {length} caracteres.',
          titleMissing: 'No hay etiqueta title.',
          titleLong: 'Title: {length} caracteres (puede cortarse; apunta a 50–60).',
          meta: 'Meta description: {length} caracteres.',
          metaMissing: 'No hay meta description.',
          metaLength: 'Meta description: {length} caracteres (apunta a unos 120–160).',
          h1One: 'Un solo H1.',
          h1None: 'No hay H1.',
          h1Many: '{count} encabezados H1 (usa uno).',
          headingSkip: 'Se salta un nivel de encabezado: {from} → {to}.',
          headingEmpty: '{count} encabezados vacíos.',
          imagesOk: 'Las {count} imágenes tienen texto alternativo.',
          imagesAlt: '{missing} de {count} imágenes no tienen atributo alt.',
          imagesNone: 'No hay imágenes.',
          links: 'Enlaces: {internal} internos, {external} externos, {nofollow} nofollow.',
        },
        outline: 'Estructura de encabezados',
      },
    },
    anchorAnalyzer: {
      steps: [
        'Exporta tus anclas desde Ahrefs (informe Backlinks o Anchors), Semrush u otra herramienta en CSV, o copia la tabla desde una hoja de cálculo.',
        'Pega el export. La herramienta detecta la columna de anclas y, si existe, la de dominios de referencia o backlinks para ponderar cada ancla.',
        'Agrega tu marca, tu dominio y tus palabras clave para clasificar las anclas.',
        'Revisa la distribución y las advertencias, y copia el resumen en tu reporte de link building.',
      ],
      faq: [
        {
          question: '¿Qué distribución de anchor text es saludable?',
          answer:
            'No hay una proporción oficial y varía según el nicho. Los perfiles naturales suelen estar liderados por anclas de marca y de URL, seguidas de anclas genéricas y de coincidencia parcial, con una parte pequeña de coincidencia exacta. Compárate con los sitios que posicionan en tu nicho.',
        },
        {
          question: '¿Por qué es riesgoso tener muchas anclas exactas?',
          answer:
            'Que muchos enlaces usen exactamente la palabra clave que quieres posicionar casi nunca pasa de forma natural. Las políticas de spam de Google incluyen los esquemas de enlaces, y un perfil de anclas sobreoptimizado es una señal común. Como referencia, revisa con más cuidado cuando las anclas exactas superan el 10%.',
        },
        {
          question: '¿Cómo se clasifican las anclas?',
          answer:
            'De marca: contienen tu marca. URL: contienen tu dominio o una dirección web. Exacta: igual a una palabra clave objetivo. Parcial: contiene la mayoría de las palabras de una palabra clave. Genérica: frases como “haz clic aquí” o “sitio web”. Vacía: enlaces de imagen sin texto alternativo. El resto es “Otra”.',
        },
        {
          question: '¿Qué formatos de export funcionan?',
          answer:
            'Exports separados por comas, punto y coma o tabulaciones con una fila de encabezado que incluya “Anchor”. Si hay una columna de dominios de referencia, dominios o backlinks, se usa como peso; si no, cada fila cuenta una vez. También funciona una lista simple con un ancla por línea.',
        },
      ],
      ui: {
        input: 'Export de anclas (CSV, tabla de hoja de cálculo o un ancla por línea)',
        inputPlaceholder:
          'Anchor,Referring domains\nAgencia Ejemplo,42\nejemplo.com,30\nhaz clic aquí,12\nservicios de link building,9',
        brand: 'Nombres de marca (separados por coma)',
        brandPlaceholder: 'Agencia Ejemplo, Ejemplo',
        domain: 'Tu dominio',
        domainPlaceholder: 'ejemplo.com',
        keywords: 'Palabras clave objetivo (separadas por coma)',
        keywordsPlaceholder: 'servicios de link building, agencia seo',
        empty: 'Pega un export de anclas para ver la distribución.',
        distribution: 'Distribución',
        weighting: 'Se cuenta por: {column}.',
        weightingRows: 'Se cuenta por: una vez por fila.',
        total: '{anchors} anclas únicas, {total} en total.',
        categories: {
          brand: 'De marca',
          url: 'URL',
          exact: 'Coincidencia exacta',
          partial: 'Coincidencia parcial',
          generic: 'Genérica',
          empty: 'Vacía o imagen',
          other: 'Otra',
        },
        warnings: {
          exactHigh:
            'Las anclas exactas son el {percent}%: alto para la mayoría de nichos. Diversifica los nuevos enlaces con anclas de marca y naturales.',
          exactOk: 'Las anclas exactas son el {percent}%: dentro de un rango natural común.',
          brandLow:
            'Las anclas de marca y URL son solo el {percent}%: la mayoría de perfiles naturales están liderados por ellas.',
          brandOk: 'Las anclas de marca y URL son el {percent}%.',
          setup: 'Agrega tu marca, dominio y palabras clave para una clasificación más precisa.',
        },
        topAnchors: 'Anclas principales',
        anchor: 'Ancla',
        category: 'Tipo',
        share: 'Porcentaje',
        emptyAnchor: '(vacía)',
        copySummary: 'Copiar resumen',
      },
    },
    aiLogs: {
      steps: [
        'Descarga los logs de acceso de tu hosting, CDN o servidor (el formato “combined” de Apache y Nginx funciona mejor).',
        'Sube el archivo o pega las líneas. Todo se procesa en tu navegador.',
        'Mira qué rastreadores de IA te visitaron, con qué frecuencia, qué páginas pidieron y qué códigos de estado recibieron.',
        'Compáralo con tus reglas de robots.txt y corrige los errores en las páginas que los bots de IA piden con frecuencia.',
      ],
      faq: [
        {
          question: '¿Por qué revisar los logs del servidor para ver bots de IA?',
          answer:
            'Los logs muestran lo que los rastreadores de IA realmente hacen en tu sitio, no lo que esperas. Puedes ver si los bots de búsqueda como OAI-SearchBot llegan a tus páginas clave, si los de entrenamiento siguen visitando después de bloquearlos y qué páginas devuelven errores.',
        },
        {
          question: '¿Un bot puede falsificar su user agent?',
          answer:
            'Sí. Cualquiera puede enviar una petición diciendo que es GPTBot. Las principales empresas de IA publican los rangos de IP de sus rastreadores, así que verifica las IP antes de actuar ante un patrón sospechoso.',
        },
        {
          question: '¿Por qué no veo Google-Extended ni Applebot-Extended?',
          answer:
            'Son tokens de control de robots.txt, no rastreadores. Google y Apple rastrean con Googlebot y Applebot, así que esos son los nombres que verás en los logs.',
        },
        {
          question: '¿Qué formatos de log funcionan?',
          answer:
            'Cualquier log de texto con una petición por línea que incluya el user agent, como los logs combined de Apache o Nginx. Las rutas y los códigos de estado se leen del patrón habitual "GET /ruta HTTP/1.1" 200 cuando está presente.',
        },
      ],
      ui: {
        file: 'Sube un archivo de log',
        input: 'O pega líneas del log',
        inputPlaceholder:
          '66.249.66.1 - - [10/Oct/2026:13:55:36 +0000] "GET /blog/ HTTP/1.1" 200 5123 "-" "Mozilla/5.0 ... GPTBot/1.2; +https://openai.com/gptbot"',
        empty: 'Sube o pega logs para ver la actividad de los bots de IA.',
        summary: 'Resumen',
        lines:
          '{lines} líneas leídas, {ai} peticiones de bots de IA y {search} de Googlebot y Bingbot.',
        noAi: 'No se encontraron peticiones de bots de IA en estas líneas.',
        bots: 'Bots de IA',
        bot: 'Bot',
        hits: 'Peticiones',
        purpose: 'Propósito',
        errors: 'Errores (4xx/5xx)',
        purposes: {
          training: 'Entrenamiento',
          search: 'Búsqueda con IA',
          user: 'Petición del usuario',
          control: 'Control de uso en IA',
        },
        topPaths: 'Páginas que más pidieron los bots de IA',
        path: 'Ruta',
        errorWarning:
          'El {percent}% de las peticiones de bots de IA devolvió un error. Revisa las rutas de abajo.',
        robotsFetched: 'Los bots de IA pidieron el robots.txt {count} veces.',
        reading: 'Leyendo el archivo…',
        tooLarge:
          'Este archivo pesa más de 50 MB. Sube una muestra más pequeña (por ejemplo, un día de logs).',
      },
    },
    aiRobots: {
      steps: [
        'Elige un punto de partida: permitir todos los rastreadores de IA, permitir la búsqueda con IA pero bloquear el entrenamiento, o bloquearlos todos.',
        'Ajusta cada rastreador con su casilla. Los buscadores normales como Googlebot y Bingbot siguen permitidos.',
        'Agrega la URL de tu sitemap y copia las reglas en el archivo robots.txt de la raíz de tu dominio.',
        'Revisa los logs del servidor después de unas semanas para ver qué bots te visitan de verdad.',
      ],
      faq: [
        {
          question:
            '¿Qué diferencia hay entre los rastreadores de entrenamiento y los de búsqueda con IA?',
          answer:
            'Los de entrenamiento, como GPTBot y ClaudeBot, recopilan contenido para entrenar modelos futuros. Los de búsqueda, como OAI-SearchBot y PerplexityBot, crean un índice para que el asistente encuentre y cite tus páginas en sus respuestas. Puedes bloquear un grupo y permitir el otro.',
        },
        {
          question: '¿Bloquear rastreadores de IA afecta mi posicionamiento en Google?',
          answer:
            'No. Google Search usa Googlebot, que esta herramienta nunca bloquea. Google-Extended es otro token que controla si Google puede usar tu contenido para Gemini, y bloquearlo no cambia cómo te posiciona Google Search.',
        },
        {
          question: '¿Qué son Google-Extended y Applebot-Extended?',
          answer:
            'Son tokens de control, no rastreadores. Google y Apple rastrean con sus bots principales; estos tokens les indican si pueden usar ese contenido para sus modelos y funciones de IA.',
        },
        {
          question: '¿Todos los bots de IA respetan el robots.txt?',
          answer:
            'Los principales dicen que sí, pero el robots.txt es una petición, no un candado. Algunos agentes y navegadores con IA no se identifican, así que revisa tus logs si necesitas forzar un bloqueo desde el firewall.',
        },
      ],
      ui: {
        presets: 'Punto de partida',
        presetList: {
          allowAll: 'Permitir todos los rastreadores de IA',
          searchOnly: 'Permitir búsqueda con IA, bloquear entrenamiento',
          blockAll: 'Bloquear todos los rastreadores de IA',
        },
        crawlers: 'Rastreadores de IA',
        block: 'Bloquear',
        purposes: {
          training: 'Entrenamiento',
          search: 'Búsqueda con IA',
          user: 'Petición del usuario',
          control: 'Control de uso en IA',
        },
        purposeTitle: 'Propósito',
        sitemap: 'URL del sitemap (opcional)',
        sitemapPlaceholder: 'https://ejemplo.com/sitemap.xml',
        output: 'Tus reglas de robots.txt',
        commentAll: 'Buscadores y todos los demás rastreadores',
        commentAllowed: 'Rastreadores de IA: permitidos',
        commentBlocked: 'Rastreadores de IA: bloqueados',
        summary: '{blocked} bloqueados, {allowed} permitidos.',
      },
    },
    llmsTxt: {
      steps: [
        'Escribe el nombre de tu sitio y un resumen de una o dos frases sobre lo que ofrece.',
        'Agrega secciones (por ejemplo Servicios, Guías, Acerca de) y lista tus páginas más útiles, una por línea.',
        'Copia o descarga el archivo y publícalo en la raíz de tu dominio como /llms.txt.',
        'Mantenlo breve y actualízalo cuando publiques páginas importantes.',
      ],
      faq: [
        {
          question: '¿Qué es llms.txt?',
          answer:
            'llms.txt es un estándar propuesto (llmstxt.org): un archivo Markdown en la raíz del sitio que da a las herramientas de IA un resumen breve y una lista seleccionada de las páginas más útiles, para que no tengan que deducirlo del menú y la publicidad.',
        },
        {
          question: '¿Google o ChatGPT usan llms.txt?',
          answer:
            'Ningún buscador importante ha dicho que use llms.txt para posicionar o citar. Algunas herramientas de IA y asistentes de programación sí lo leen, y mantenerlo cuesta poco, así que tómalo como un extra de bajo esfuerzo, no como un factor de posicionamiento.',
        },
        {
          question: '¿Qué debo incluir?',
          answer:
            'Tus páginas más importantes y duraderas: lo que ofreces, guías o documentación clave, precios o contacto, y una página Acerca de. Cada enlace lleva una descripción breve y objetiva. Omite páginas pobres y duplicadas.',
        },
        {
          question: '¿Qué es la sección "Optional"?',
          answer:
            'Según la convención, los enlaces de una sección titulada "Optional" son secundarios y una herramienta de IA puede omitirlos cuando necesita un contexto más corto.',
        },
      ],
      ui: {
        siteName: 'Nombre del sitio o empresa',
        siteNamePlaceholder: 'Agencia Ejemplo',
        summary: 'Resumen breve',
        summaryPlaceholder:
          'Agencia Ejemplo ayuda a tiendas en línea a crecer su tráfico orgánico con SEO técnico y link building.',
        details: 'Más detalles (opcional)',
        detailsPlaceholder:
          'Fundada en 2020. Trabaja con marcas de comercio electrónico en EE. UU. y Latinoamérica.',
        sections: 'Secciones',
        sectionTitle: 'Título de la sección',
        sectionTitlePlaceholder: 'Servicios',
        links: 'Enlaces (uno por línea: Título | URL | descripción)',
        linksPlaceholder:
          'Auditoría SEO técnica | https://ejemplo.com/servicios/auditoria/ | Qué incluye la auditoría y cuánto tarda',
        addSection: 'Agregar sección',
        remove: 'Quitar',
        section: 'Sección',
        output: 'Tu llms.txt',
        download: 'Descargar llms.txt',
        invalid: 'Líneas omitidas (necesitan al menos un título y una URL):',
      },
    },
    answerReady: {
      steps: [
        'Abre la página en tu navegador, mira su código fuente (Ctrl+U o Cmd+Opción+U) y cópialo completo. También puedes pegar texto plano.',
        'Pégalo en el recuadro. La revisión se hace al instante en tu navegador.',
        'Corrige los puntos marcados con ✕ o !, empezando por arriba.',
        'Vuelve a pegar la página actualizada para confirmar que la puntuación subió.',
      ],
      faq: [
        {
          question: '¿Qué hace que un contenido esté "listo para respuestas" de IA?',
          answer:
            'Las respuestas de IA citan pasajes breves y autosuficientes. Las páginas que dan la respuesta principal al inicio, usan encabezados claros en forma de pregunta, mantienen párrafos cortos, incluyen datos concretos y se describen con datos estructurados son más fáciles de extraer y citar.',
        },
        {
          question: '¿Una puntuación alta garantiza citas en IA?',
          answer:
            'No. Que te citen también depende de la autoridad, de la relevancia para la pregunta y de que el rastreador de IA pueda acceder a la página. Esta herramienta revisa lo que está en la página: es una revisión de estructura, no una predicción.',
        },
        {
          question: '¿Por qué pegar el HTML en lugar de escribir una URL?',
          answer:
            'Descargar otro sitio web requiere un servidor, y esta herramienta funciona por completo en tu navegador para que nada se envíe. Pegar el código también te permite revisar borradores y páginas de prueba que aún no son públicas.',
        },
        {
          question: '¿Qué revisa?',
          answer:
            'Un solo H1; un resumen breve justo después; encabezados en forma de pregunta; orden de encabezados; largo de los párrafos; listas o tablas; números concretos; datos estructurados JSON-LD; meta description; y señales de autor y fecha.',
        },
      ],
      ui: {
        input: 'HTML o texto de la página',
        inputPlaceholder:
          'Pega el código fuente de la página (empieza con <!doctype html>) o el texto del artículo',
        result: 'Resultado',
        score: 'Puntuación',
        empty: 'Pega una página para ver la revisión.',
        modeHtml: 'Revisado como HTML.',
        modeText: 'Revisado como texto plano: pega el código HTML para la revisión completa.',
        levels: {
          high: 'Lista para respuestas',
          medium: 'Parcialmente lista',
          low: 'Necesita trabajo',
        },
        checks: {
          h1Ok: 'Un solo H1: "{text}"',
          h1None: 'No hay H1. Agrega un encabezado principal claro.',
          h1Many: 'Hay {count} encabezados H1. Deja solo uno.',
          summaryOk: 'Resumen al inicio ({words} palabras).',
          summaryLong:
            'El primer párrafo tiene {words} palabras. Empieza con una respuesta de 1 o 2 frases (menos de 60 palabras).',
          summaryMissing:
            'No hay párrafo de introducción. Empieza con un resumen breve de la respuesta.',
          questionsOk: '{count} de {total} subtítulos son preguntas.',
          questionsNone:
            'Ningún subtítulo está escrito como pregunta. Usa las preguntas que la gente realmente busca.',
          headingsOk: 'Los niveles de encabezado están en orden.',
          headingsSkip: 'Se salta un nivel de encabezado ({from} → {to}).',
          headingsNone: 'No hay subtítulos. Divide el contenido en secciones con encabezados H2.',
          paragraphsOk: 'El {percent}% de los párrafos tiene menos de 80 palabras.',
          paragraphsLong:
            'Solo el {percent}% de los párrafos tiene menos de 80 palabras. Los párrafos cortos son más fáciles de citar.',
          listsOk: 'Usa listas o tablas.',
          listsNone: 'No hay listas ni tablas. Úsalas para pasos, comparaciones y datos clave.',
          numbersOk: '{count} números o datos concretos.',
          numbersFew:
            'Pocos números concretos. Agrega datos, fechas, precios o resultados medibles.',
          schemaOk: 'Datos estructurados encontrados: {types}.',
          schemaNone:
            'No hay datos estructurados JSON-LD. Agrega el tipo de schema que corresponde a la página.',
          metaOk: 'Tiene meta description.',
          metaNone: 'No tiene meta description.',
          authorOk: 'Se encontró una señal de autor.',
          authorNone: 'No se encontró autor. Indica quién escribió la página y enlaza a su perfil.',
          dateOk: 'Se encontró la fecha de publicación o actualización.',
          dateNone: 'No se encontró fecha. Muestra cuándo se publicó o actualizó la página.',
        },
      },
    },
    serpPreview: {
      steps: [
        'Escribe la URL de la página, el title y la meta description.',
        'Revisa la vista previa. El texto que Google cortaría termina en "…".',
        'Ajusta hasta que ambos medidores digan "Buena longitud" y copia el texto final en tu CMS.',
      ],
      faq: [
        {
          question: '¿Qué tan largo debe ser el title SEO?',
          answer:
            'Google corta los títulos por ancho en píxeles, no por caracteres. En escritorio el límite ronda los 600 píxeles, que suelen ser entre 50 y 60 caracteres. Letras anchas como W y M ocupan más espacio que la i o la l.',
        },
        {
          question: '¿Qué tan larga debe ser la meta description?',
          answer:
            'Apunta a unos 120 a 160 caracteres. Google corta los snippets más largos cerca de los 920 píxeles en escritorio y a menudo reescribe la descripción según la búsqueda, así que pon el mensaje clave al inicio.',
        },
        {
          question: '¿Google siempre muestra mi title y mi descripción?',
          answer:
            'No. Google los reescribe cuando cree que otro texto responde mejor a la búsqueda. Un title claro y preciso, alineado con el H1 de la página, reduce la probabilidad de que lo cambie.',
        },
        {
          question: '¿La vista previa es exacta?',
          answer:
            'Es una estimación cercana. Mide el texto en Arial con los tamaños que usa Google, pero Google cambia su diseño de vez en cuando, así que deja un pequeño margen.',
        },
      ],
      ui: {
        url: 'URL de la página',
        urlPlaceholder: 'https://ejemplo.com/blog/guia-link-building/',
        title: 'Title (etiqueta de título)',
        titlePlaceholder: 'Guía de link building: cómo conseguir backlinks de calidad | Marca',
        description: 'Meta description',
        descriptionPlaceholder:
          'Aprende a encontrar, evaluar y contactar sitios para conseguir enlaces, con plantillas y las señales de alerta que debes revisar.',
        preview: 'Vista previa (escritorio)',
        characters: 'caracteres',
        pixels: 'px',
        of: 'de',
        titleShort: 'Corto: hay espacio para una palabra clave o tu marca.',
        descriptionShort: 'Corta: agrega un beneficio o una llamada a la acción.',
        good: 'Buena longitud.',
        tooLong: 'Demasiado largo: probablemente Google lo cortará.',
      },
    },
    schemaGenerator: {
      steps: [
        'Elige el tipo de schema que corresponde a tu página.',
        'Completa los campos. El código se actualiza mientras escribes.',
        'Copia el código y pégalo en el HTML de la página (el <head> es un buen lugar).',
        'Pruébalo con la prueba de resultados enriquecidos de Google antes de publicar.',
      ],
      faq: [
        {
          question: '¿Qué es el schema markup?',
          answer:
            'Son datos estructurados, normalmente en formato JSON-LD, que describen de qué trata una página (un artículo, una empresa, una persona, una lista de preguntas) de forma que los buscadores y los asistentes de IA la entiendan sin ambigüedad.',
        },
        {
          question: '¿Qué formato recomienda Google?',
          answer:
            'JSON-LD. Va en una sola etiqueta script, separada del HTML visible, así que es el formato más fácil de agregar y mantener.',
        },
        {
          question: '¿El schema me garantiza resultados enriquecidos?',
          answer:
            'No. Un marcado válido hace que la página sea elegible, pero Google decide cuándo mostrarlos. Desde 2023, los resultados enriquecidos de FAQ solo aparecen para sitios gubernamentales y de salud reconocidos, aunque el marcado FAQ sigue ayudando a que las máquinas entiendan el contenido.',
        },
        {
          question: '¿El schema ayuda en la búsqueda con IA?',
          answer:
            'Los datos estructurados declaran hechos claros sobre entidades: quién escribió una página, qué es una organización y qué perfiles le pertenecen. Esa claridad ayuda a buscadores y sistemas de IA a relacionar el contenido con la entidad correcta, aunque ningún marcado garantiza una cita.',
        },
      ],
      ui: {
        type: 'Tipo de schema',
        types: {
          article: 'Artículo o entrada de blog',
          faq: 'Página de preguntas frecuentes',
          organization: 'Organización',
          person: 'Persona',
          breadcrumb: 'Migas de pan (breadcrumbs)',
        },
        fields: {
          articleType: 'Tipo de artículo',
          headline: 'Titular',
          description: 'Descripción',
          image: 'URL de la imagen',
          authorName: 'Nombre del autor',
          authorUrl: 'URL de la página del autor',
          publisherName: 'Nombre del editor',
          publisherLogo: 'URL del logo del editor',
          datePublished: 'Fecha de publicación',
          dateModified: 'Fecha de actualización',
          name: 'Nombre',
          url: 'URL del sitio web',
          logo: 'URL del logo',
          sameAs: 'URLs de perfiles (una por línea)',
          jobTitle: 'Cargo',
          worksFor: 'Empresa',
          knowsAbout: 'Áreas de especialidad (una por línea)',
          question: 'Pregunta',
          answer: 'Respuesta',
          pageName: 'Nombre de la página',
          pageUrl: 'URL de la página',
        },
        item: 'Elemento',
        addQuestion: 'Agregar pregunta',
        addPage: 'Agregar página',
        remove: 'Quitar',
        output: 'Tu código JSON-LD',
        missing: 'Falta un campo obligatorio:',
        ready: 'Los campos obligatorios están completos. Prueba el código antes de publicar.',
        test: 'Probar en la prueba de resultados enriquecidos de Google',
      },
    },
    linkScorecard: {
      steps: [
        'Define tu DR y tráfico orgánico mínimos. Empieza con 30 y 1.000, y ajústalos a tus propios criterios.',
        'Ingresa las métricas del prospecto desde Ahrefs, Semrush o una herramienta similar.',
        'Responde las preguntas de calidad con honestidad. Las señales de alerta pesan mucho.',
        'Lee el veredicto y los motivos, y copia el resumen en tu hoja de outreach.',
      ],
      faq: [
        {
          question: '¿Cómo se calcula la puntuación?',
          answer:
            'La puntuación es sobre 100: relevancia temática 25, tráfico orgánico 25, autoridad (DR) 25, coincidencia de mercado 15 y tendencia del tráfico 10. Cada señal de alerta resta 20 puntos. Los sitios por debajo de tu DR o tráfico mínimo, o con enlaces a nichos riesgosos no relacionados, se descartan automáticamente.',
        },
        {
          question: '¿Por qué el DR no basta para evaluar un sitio?',
          answer:
            'El DR mide el perfil de enlaces de un sitio, no si personas reales lo leen. Los sitios con DR alto y poco tráfico orgánico suelen existir para vender enlaces, por eso este evaluador da tanto peso al tráfico y a la relevancia como a la autoridad.',
        },
        {
          question: '¿Qué se considera relevancia temática?',
          answer:
            'Un sitio es muy relevante cuando sus temas principales coinciden con los tuyos y sus lectores harían clic en tu enlace de forma natural. Un sitio de noticias deportivas que enlaza a una reseña de casas de apuestas es relevante; un blog general que habla de todo, desde préstamos hasta mascotas, no lo es.',
        },
        {
          question: '¿Reemplaza una revisión manual?',
          answer:
            'No. Es un primer filtro rápido que mantiene criterios consistentes en todo el equipo. Revisa siempre el sitio, sus artículos recientes y hacia dónde apuntan sus enlaces salientes antes de escribirle.',
        },
      ],
      ui: {
        thresholds: 'Tus mínimos',
        minDr: 'DR mínimo',
        minTraffic: 'Tráfico orgánico mensual mínimo',
        metrics: 'Prospecto',
        domain: 'Dominio (opcional)',
        domainPlaceholder: 'ejemplo.com',
        dr: 'Domain Rating (DR)',
        traffic: 'Tráfico orgánico mensual',
        trend: 'Tendencia del tráfico (últimos 6 a 12 meses)',
        trends: { growing: 'En crecimiento', stable: 'Estable', declining: 'En caída' },
        relevance: 'Relevancia temática para tu sitio',
        relevances: {
          high: 'Alta: mismo tema y audiencia',
          medium: 'Media: tema relacionado',
          low: 'Baja: tema no relacionado',
        },
        market: 'Audiencia en tu mercado objetivo',
        markets: { yes: 'Sí, en su mayoría', partial: 'En parte', no: 'No' },
        flags: 'Señales de alerta (marca todas las que apliquen)',
        flagList: {
          sellsLinks:
            'Vende enlaces abiertamente (tarifas de "escribe para nosotros", menús de posts patrocinados)',
          spamOutbound: 'Enlaza a nichos riesgosos no relacionados (farmacia, préstamos, adultos)',
          thinContent: 'Contenido pobre, reescrito o producido en masa',
          linkOnly: 'Los artículos recientes parecen existir solo para enlazar a otros sitios',
          trafficDrop: 'Caída fuerte de tráfico que parece una penalización o una actualización',
        },
        result: 'Resultado',
        score: 'Puntuación',
        empty: 'Ingresa el DR y el tráfico para ver la puntuación.',
        verdicts: {
          go: 'Adelante: vale la pena contactarlo',
          review: 'Revisar: compruébalo a mano antes de contactarlo',
          nogo: 'Descartar: no conviene este prospecto',
        },
        reasons: {
          drBelow: 'El DR de {dr} está por debajo de tu mínimo de {min}.',
          drOk: 'El DR de {dr} cumple tu mínimo de {min}.',
          trafficBelow: 'Un tráfico de {traffic} al mes está por debajo de tu mínimo de {min}.',
          trafficOk: 'Un tráfico de {traffic} al mes cumple tu mínimo de {min}.',
          growing: 'El tráfico está creciendo.',
          stable: 'El tráfico es estable.',
          declining:
            'El tráfico está cayendo: revisa si hubo una penalización o pérdida de posiciones.',
          high: 'Mismo tema y audiencia que tu sitio.',
          medium: 'Tema relacionado: asegúrate de que el enlace encaje de forma natural.',
          low: 'Tema no relacionado: el enlace se vería fuera de lugar.',
          yes: 'La audiencia coincide con tu mercado objetivo.',
          partial: 'La audiencia coincide solo en parte con tu mercado objetivo.',
          no: 'La audiencia está fuera de tu mercado objetivo.',
          flag: 'Señal de alerta: {flag}.',
        },
        flagShort: {
          sellsLinks: 'vende enlaces abiertamente',
          spamOutbound: 'enlaza a nichos riesgosos no relacionados',
          thinContent: 'contenido pobre o producido en masa',
          linkOnly: 'artículos que solo existen para enlazar',
          trafficDrop: 'caída fuerte de tráfico',
        },
        copySummary: 'Copiar resumen',
        unnamed: 'Prospecto',
      },
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
      title: 'Herramientas SEO gratuitas de Diego Navarro',
      description:
        'Herramientas gratuitas de SEO y búsqueda con IA: evaluador de prospectos, verificador de contenido para IA y generadores de robots.txt y llms.txt.',
    },
    contact: {
      title: 'Contactar a Diego Navarro, especialista SEO senior',
      description:
        'Cómo contactar a Diego Navarro, especialista SEO senior y en backlinks en Costa Rica: formulario, LinkedIn, disponibilidad, idiomas y enfoque.',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe.',
      backHome: 'Volver al inicio',
    },
  },
};
