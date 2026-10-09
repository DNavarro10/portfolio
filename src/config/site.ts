/**
 * Site-wide configuration: the single source of truth for values used across
 * canonical URLs, hreflang, the sitemap, and structured data (JSON-LD).
 *
 * Change SITE_URL once the domain is purchased; everything else updates.
 * Privacy: never add a personal email or phone number here.
 */

/** Production origin, without trailing slash. Placeholder until the domain is bought. */
export const SITE_URL = 'https://example.com';

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
} as const;
