import type { Lang } from './config';

/**
 * Registry of the site's fixed pages and their URL in each language.
 *
 * This map is the single source of truth for:
 *  - hreflang alternates in <head>
 *  - the sitemap (including its hreflang alternates)
 *  - the language switcher
 *  - navigation links
 *
 * Rules: lowercase, always end with "/", Spanish slugs written in Spanish.
 * A page only gets hreflang tags when it exists in BOTH languages.
 *
 * `published: false` keeps a page out of the sitemap and adds `noindex`,
 * so placeholder pages can't be indexed by accident. Flip it to `true`
 * when the page has real content.
 */
export const ROUTES = {
  home: { en: '/', es: '/es/', published: true },
  about: { en: '/about/', es: '/es/sobre-mi/', published: true },
  experience: { en: '/experience/', es: '/es/experiencia/', published: true },
  blog: { en: '/blog/', es: '/es/blog/', published: false },
  tools: { en: '/tools/', es: '/es/herramientas/', published: false },
  contact: { en: '/contact/', es: '/es/contacto/', published: true },
} as const satisfies Record<string, Partial<Record<Lang, string>> & { published: boolean }>;

export type RouteKey = keyof typeof ROUTES;

/** Pages shown in the main navigation, in order. */
export const NAV_ROUTES: RouteKey[] = ['about', 'experience', 'blog', 'tools', 'contact'];

/**
 * Base path for collection detail pages (blog posts, case studies, tools).
 * e.g. collectionBase.blog.es + 'mi-articulo/' -> /es/blog/mi-articulo/
 */
export const COLLECTION_BASE = {
  blog: { en: '/blog/', es: '/es/blog/' },
  experience: { en: '/experience/', es: '/es/experiencia/' },
  tools: { en: '/tools/', es: '/es/herramientas/' },
} as const satisfies Record<string, Record<Lang, string>>;
