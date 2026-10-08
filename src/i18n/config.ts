/**
 * Language settings. English is the default (served at "/"),
 * Spanish is secondary (served under "/es/").
 */

export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<
  Lang,
  { htmlLang: string; hreflang: string; ogLocale: string; label: string }
> = {
  en: { htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', label: 'English' },
  es: { htmlLang: 'es', hreflang: 'es', ogLocale: 'es_LA', label: 'Español' },
};

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && (LANGS as readonly string[]).includes(value);
}
