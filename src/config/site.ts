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
  /** Public profiles; used for JSON-LD `sameAs` and footer links. */
  sameAs: ['https://www.linkedin.com/in/diegonavarro10/'],
} as const;

export const SITE = {
  /** Brand name shown in titles: "Page title | SITE.name". */
  name: 'Diego Navarro',
  /** Default social share image (relative to SITE_URL). Add the file in /public later. */
  defaultOgImage: '/og-default.png',
  /** Twitter/X handle without "@", or empty if none. */
  twitterHandle: '',
} as const;
