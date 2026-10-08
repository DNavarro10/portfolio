/**
 * English UI strings. Every visible piece of interface text lives here
 * (and in es.ts), never hardcoded in components.
 */
export const en = {
  site: {
    tagline: 'Senior SEO Specialist',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    openMenu: 'Menu',
    breadcrumb: 'Breadcrumb',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    blog: 'Blog',
    tools: 'SEO Tools',
    contact: 'Contact',
  },
  langSwitch: {
    /** Link text that switches TO the other language. */
    label: 'Español',
  },
  footer: {
    builtWith: 'Built with Astro and hosted on Cloudflare.',
    sourceCode: 'Source code',
    rights: 'All rights reserved.',
  },
  placeholder: {
    comingSoon: 'This page is under construction.',
  },
  blog: {
    publishedOn: 'Published on',
    updatedOn: 'Updated on',
  },
  pages: {
    home: {
      title: 'Diego Navarro — Senior SEO Specialist',
      description:
        'Senior SEO Specialist with an engineering background: technical SEO, strategy, and free SEO tools.',
    },
    about: {
      title: 'About',
      description: 'Background, skills, and approach to SEO of Diego Navarro.',
    },
    experience: {
      title: 'Experience',
      description: 'SEO case studies: challenges, strategy, and measurable results.',
    },
    blog: {
      title: 'Blog',
      description: 'Articles on technical SEO, content strategy, and AI search.',
    },
    tools: {
      title: 'Free SEO Tools',
      description: 'Free, browser-based SEO tools built by Diego Navarro.',
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch with Diego Navarro about SEO roles or projects.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
      backHome: 'Back to the home page',
    },
  },
};

export type UiStrings = typeof en;
