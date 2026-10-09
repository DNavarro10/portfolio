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
  home: {
    eyebrow: 'Diego Navarro · Costa Rica',
    headline: "Senior SEO Specialist with an engineer's mindset",
    summary:
      '6+ years leading SEO and GEO for competitive US and UK brands like RotoWire.com and Bookies.com, from technical audits and structured data to link building, digital outreach, and visibility in AI search.',
    openToWork: 'Open to new roles',
    actions: {
      downloadCv: 'Download CV',
      viewExperience: 'View my experience',
      contact: 'Contact me',
    },
    profile: {
      label: 'Profile summary',
      role: 'role',
      roleValue: 'Senior SEO Specialist, Backlinks Specialist',
      focus: 'focus',
      focusValue: 'SEO, technical SEO, link building, digital outreach, AEO/GEO',
      markets: 'markets',
      marketsValue: 'US, UK, LatAm',
      languages: 'languages',
      languagesValue: 'Spanish (native), English (C1)',
      education: 'education',
      educationValue: 'Informatics Engineering',
    },
    results: {
      eyebrow: 'Track record',
      title: 'Results that compound',
      description:
        'Most of my impact comes from building authority: links earned through outreach at scale, each one vetted for quality.',
      metrics: [
        { value: '6+', label: 'Years in SEO strategy and execution' },
        { value: '120+', label: 'Backlinks secured per month' },
        { value: 'DR 45', label: 'Average domain rating of placements' },
        { value: '5,000+', label: 'Publishers in my outreach network' },
        { value: '8–12', label: 'State-level domains launched in the US' },
        { value: '7', label: 'Team members led, hired, and mentored' },
      ],
    },
    pillars: {
      eyebrow: 'What I do',
      title: 'Four ways I grow search visibility',
      items: [
        {
          title: 'Link building and outreach',
          description:
            'My strongest area: backlink strategy and digital outreach across a 5,000+ publisher network, with every placement vetted for authority, traffic, and topical relevance.',
        },
        {
          title: 'Technical SEO',
          description:
            'Site architecture, crawlability, indexation, structured data, and Core Web Vitals, implemented hand in hand with developers.',
        },
        {
          title: 'Content and on-page SEO',
          description:
            'Keyword research mapped to search intent, competitor gap analysis, internal linking, and content optimization that ranks.',
        },
        {
          title: 'AI search: GEO and AEO',
          description:
            'GEO roadmaps, structured data, and content architecture that earn visibility and citations in Google AI Overviews, ChatGPT, Gemini, and Perplexity.',
        },
      ],
    },
    brands: {
      eyebrow: 'Brands',
      title: "Sites I've helped grow",
      note: 'Competitive sports and iGaming markets in the US and UK, including 8–12 state-level launches.',
      more: '+ more state sites',
    },
    caseStudies: {
      eyebrow: 'Case studies',
      title: 'Selected work',
      viewAll: 'All case studies',
    },
    tools: {
      eyebrow: 'Free tools',
      title: 'SEO tools I built',
      viewAll: 'All tools',
    },
    posts: {
      eyebrow: 'Blog',
      title: 'Latest writing',
      viewAll: 'All posts',
    },
    about: {
      eyebrow: 'About',
      title: 'Engineer by training, SEO by trade',
      text: 'I studied Informatics Engineering, and it still shapes how I work: I treat SEO as a system to measure, test, and improve. I work in English and Spanish, from Costa Rica, with teams in the US and UK.',
      link: 'More about me',
    },
  },
  llms: {
    language: 'English',
    kinds: {
      page: 'Pages',
      experience: 'Case studies',
      blog: 'Articles',
      tool: 'Free SEO tools',
    },
    profile: 'Profile',
    expertise: 'Core expertise',
    profiles: 'Public profiles',
  },
  pages: {
    home: {
      title: 'Diego Navarro | Senior SEO Specialist, Technical SEO & GEO',
      description:
        'Senior SEO and backlinks specialist with 6+ years growing organic and AI search visibility for US and UK brands: link building, technical SEO, and GEO.',
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
