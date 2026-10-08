import { SITE_URL } from '@/config/site';
import { DEFAULT_LANG, LANGS, isLang, type Lang } from './config';
import { en } from './en';
import { es } from './es';
import { ROUTES, type RouteKey } from './routes';

const DICTIONARIES = { en, es } as const;

/** Map of language -> path for the same piece of content. */
export type Alternates = Partial<Record<Lang, string>>;

/** UI strings for a language. Usage: `const t = useTranslations(lang); t.nav.home` */
export function useTranslations(lang: Lang) {
  return DICTIONARIES[lang];
}

/** Detect the language from a URL: "/es/..." is Spanish, everything else English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : DEFAULT_LANG;
}

/** Localized path of a registered page, e.g. routePath('about', 'es') -> "/es/sobre-mi/". */
export function routePath(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** All language versions of a registered page. */
export function routeAlternates(key: RouteKey): Alternates {
  const { published: _published, ...paths } = ROUTES[key];
  return paths;
}

/** Turn a site path ("/about/") into an absolute URL ("https://example.com/about/"). */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

/** True when the content exists in every language (required for hreflang). */
export function hasAllLanguages(alternates: Alternates): boolean {
  return LANGS.every((lang) => Boolean(alternates[lang]));
}
