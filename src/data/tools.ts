import type { Lang } from '@/i18n/config';
import type { UiStrings } from '@/i18n/en';

/**
 * Registry of the free SEO tools. Each tool gets its own page in both
 * languages (/tools/<slug>/ and /es/herramientas/<slug>/).
 *
 * Tools are code (interactive components), not Markdown, so they are listed
 * here instead of in a content collection. The page copy (how-to steps, FAQ,
 * labels) lives in en.ts / es.ts under `toolContent.<key>`, and the
 * interactive part in src/components/tools/.
 *
 * All current tools run 100% in the browser: no server, no cost, no data sent.
 */
export type ToolKey = keyof UiStrings['toolContent'];

export interface Tool {
  /** Matches `toolContent.<key>` in the translation files. */
  key: ToolKey;
  slug: Record<Lang, string>;
  /** Page title (≤ ~44 chars: " | Diego Navarro" is appended). */
  title: Record<Lang, string>;
  /** Meta description and on-page summary (~120–160 chars). */
  description: Record<Lang, string>;
  /** Short label for cards and lists. */
  category: Record<Lang, string>;
  /** false = noindex and excluded from the sitemap. */
  published: boolean;
}

export const TOOLS: Tool[] = [
  {
    key: 'linkScorecard',
    slug: { en: 'link-prospect-scorecard', es: 'evaluador-prospectos-link-building' },
    title: {
      en: 'Link Prospect Scorecard for Link Building',
      es: 'Evaluador de prospectos para link building',
    },
    description: {
      en: 'Free link building tool: score a guest post or outreach prospect on DR, traffic, relevance, and red flags, and get a clear go or no-go.',
      es: 'Herramienta gratuita de link building: evalúa un sitio para outreach según DR, tráfico, relevancia y señales de riesgo, con un veredicto claro.',
    },
    category: { en: 'Link building', es: 'Link building' },
    published: true,
  },
  {
    key: 'serpPreview',
    slug: { en: 'serp-preview', es: 'simulador-serp' },
    title: {
      en: 'SERP Snippet Preview and Meta Length Checker',
      es: 'Simulador SERP: title y meta description',
    },
    description: {
      en: 'Free SERP preview tool: see how your title tag and meta description look in Google, with pixel-width checks, before you publish.',
      es: 'Herramienta gratuita para ver cómo se verán tu title y tu meta description en Google, con medición en píxeles, antes de publicar.',
    },
    category: { en: 'On-page SEO', es: 'SEO on-page' },
    published: true,
  },
  {
    key: 'schemaGenerator',
    slug: { en: 'schema-generator', es: 'generador-schema' },
    title: {
      en: 'Schema Markup Generator (JSON-LD)',
      es: 'Generador de schema markup (JSON-LD)',
    },
    description: {
      en: 'Free JSON-LD schema generator for Article, FAQ, Organization, Person, and Breadcrumb markup. Copy valid structured data in seconds.',
      es: 'Generador gratuito de datos estructurados JSON-LD para Article, FAQ, Organization, Person y Breadcrumb. Copia el código listo para usar.',
    },
    category: { en: 'Technical SEO', es: 'SEO técnico' },
    published: true,
  },
];
