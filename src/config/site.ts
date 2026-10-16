/**
 * Site-wide configuration: the single source of truth for values used across
 * canonical URLs, hreflang, the sitemap, and structured data (JSON-LD).
 *
 * Change SITE_URL if the domain ever changes; everything else updates.
 * Privacy: never add a personal email or phone number here.
 */

/** Production origin, without trailing slash (domain: diegonavarrocr.com, apex, no www). */
export const SITE_URL = 'https://diegonavarrocr.com';

export const OWNER = {
  name: 'Luis Diego Navarro Morales',
  shortName: 'Diego Navarro',
  jobTitle: 'Senior SEO Specialist',
  location: 'Costa Rica',
  /** Public profiles: shown in the footer and used for JSON-LD `sameAs`. */
  profiles: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/diegonavarro10/' }],
  /** Shows an "Open to new roles" badge on the home page when true. */
  openToWork: false,
  /**
   * CV files in /public, per language (e.g. '/cv/diego-navarro-cv-en.pdf').
   * Leave empty until the file exists: the "Download CV" button only shows when set.
   */
  cv: { en: '', es: '' },
  /**
   * Plain copy of the profile photo (800×800 JPG in /public) for JSON-LD `image`, which needs a
   * stable URL. Pages show the optimized version from src/assets/diego-navarro.jpg instead.
   */
  photo: { path: '/diego-navarro.jpg', width: 800, height: 800 },
  /** Topics for JSON-LD `knowsAbout` (helps search engines understand expertise). */
  knowsAbout: [
    'Search engine optimization',
    'Technical SEO',
    'Structured data',
    'Core Web Vitals',
    'Keyword research',
    'Link building',
    'Backlink strategy',
    'Digital outreach',
    'Answer engine optimization',
    'Generative engine optimization',
    'AI search optimization',
    'Google AI Overviews',
    'Schema.org',
    'Entity SEO',
  ],
  alumniOf: 'Universidad Metropolitana Castro Carazo',
  /** Verifiable certificates: shown on About and in JSON-LD (`hasCredential`). */
  credentials: [
    {
      name: 'EF SET English Certificate (C1 Advanced)',
      issuer: 'EF Education First',
      url: 'https://cert.efset.org/ifCw5x',
    },
  ],
  /** Tools listed on the About page (names aren't translated). */
  tools: [
    'Ahrefs',
    'SEMrush',
    'Majestic',
    'Moz',
    'Screaming Frog',
    'Google Search Console',
    'Google Analytics 4',
    'Google Tag Manager',
    'SurferSEO',
    'Yoast SEO',
    'WordPress',
    'Salesforce',
    'Jira',
    'Confluence',
    'Lighthouse',
    'Git',
    'ChatGPT',
    'Gemini',
    'Claude',
  ],
} as const;

/** Brands worked on (text only: no logos, which are trademarks). */
export const BRANDS = [
  'RotoWire.com',
  'Bookies.com',
  'SportsbookReview.com',
  'BetMichigan.com',
  'BetOhio.com',
  'BetArizona.com',
  'BetOntario.com',
] as const;

export const SITE = {
  /** Brand name shown in titles: "Page title | SITE.name". */
  name: 'Diego Navarro',
  /** Default social share image (relative to SITE_URL). Add the file in /public later. */
  defaultOgImage: '/og-default.png',
  /** Twitter/X handle without "@", or empty if none. */
  twitterHandle: '',
  /** Public source code of this site (shown in the footer). */
  sourceUrl: 'https://github.com/DNavarro10/portfolio',
  /**
   * Contact form. `enabled: false` shows the form as "coming soon" (fields disabled).
   * It is switched on at the Cloudflare deploy step, when the server route that sends
   * the email exists. The destination address is a private Cloudflare secret, never
   * written in this repo.
   */
  contactForm: { enabled: false, action: '/api/contact/' },
  /**
   * Google Analytics 4. Empty ID = analytics fully off (no banner, no Google code).
   * With an ID, a consent banner appears and GA4 loads ONLY after the visitor clicks
   * Accept (Consent Mode v2, "basic" mode), and only on the live domain (never in dev).
   * The Measurement ID is public (it's visible in any site's code), not a secret.
   */
  analytics: { ga4Id: '' as string, host: new URL(SITE_URL).hostname },
} as const;
