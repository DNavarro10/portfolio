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
    languageSwitcher: 'Cambiar idioma',
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
    rights: 'Todos los derechos reservados.',
  },
  placeholder: {
    comingSoon: 'Esta página está en construcción.',
  },
  blog: {
    publishedOn: 'Publicado el',
    updatedOn: 'Actualizado el',
  },
  pages: {
    home: {
      title: 'Diego Navarro — Especialista SEO Senior',
      description:
        'Especialista SEO Senior con base en ingeniería: SEO técnico, estrategia y herramientas SEO gratuitas.',
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
