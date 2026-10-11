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
    key: 'anchorAnalyzer',
    slug: { en: 'anchor-text-analyzer', es: 'analizador-anchor-text' },
    title: {
      en: 'Anchor Text Distribution Analyzer',
      es: 'Analizador de anchor text (texto ancla)',
    },
    description: {
      en: 'Free anchor text analyzer: paste an Ahrefs or Semrush export to see your branded, exact-match, and generic anchor mix and spot over-optimization.',
      es: 'Analizador gratuito de anchor text: pega un export de Ahrefs o Semrush y revisa tu mezcla de anclas de marca, exactas y genéricas para evitar sobreoptimizar.',
    },
    category: { en: 'Link building', es: 'Link building' },
    published: true,
  },
  {
    key: 'answerReady',
    slug: { en: 'ai-answer-readiness-checker', es: 'verificador-contenido-ia' },
    title: {
      en: 'AI Answer-Readiness Checker',
      es: 'Verificador de contenido listo para IA',
    },
    description: {
      en: 'Free AEO and GEO checker: paste a page and see if it is easy for AI search to quote, from summaries and headings to schema and dates.',
      es: 'Verificador gratuito de AEO y GEO: pega una página y descubre si es fácil de citar por la búsqueda con IA, desde el resumen hasta el schema.',
    },
    category: { en: 'AI search (GEO)', es: 'Búsqueda con IA (GEO)' },
    published: true,
  },
  {
    key: 'aiLogs',
    slug: { en: 'ai-bot-log-analyzer', es: 'analizador-logs-bots-ia' },
    title: {
      en: 'AI Bot Log Analyzer',
      es: 'Analizador de logs de bots de IA',
    },
    description: {
      en: 'Free AI bot log analyzer: upload or paste server logs and see which AI crawlers, like GPTBot or PerplexityBot, visit your site and what they crawl.',
      es: 'Analizador gratuito de logs: sube o pega los logs de tu servidor y descubre qué bots de IA, como GPTBot o PerplexityBot, visitan tu sitio y qué rastrean.',
    },
    category: { en: 'AI search (GEO)', es: 'Búsqueda con IA (GEO)' },
    published: true,
  },
  {
    key: 'aiRobots',
    slug: { en: 'ai-robots-txt-generator', es: 'generador-robots-txt-ia' },
    title: {
      en: 'AI Crawler robots.txt Generator',
      es: 'Generador de robots.txt para bots de IA',
    },
    description: {
      en: 'Free robots.txt generator for AI crawlers: allow AI search bots like OAI-SearchBot and block AI training bots like GPTBot in a few clicks.',
      es: 'Generador gratuito de robots.txt para rastreadores de IA: permite bots de búsqueda como OAI-SearchBot y bloquea los de entrenamiento como GPTBot.',
    },
    category: { en: 'AI search (GEO)', es: 'Búsqueda con IA (GEO)' },
    published: true,
  },
  {
    key: 'llmsTxt',
    slug: { en: 'llms-txt-generator', es: 'generador-llms-txt' },
    title: { en: 'llms.txt Generator', es: 'Generador de llms.txt' },
    description: {
      en: 'Free llms.txt generator: create the Markdown file that gives AI tools a short summary of your site and links to your most useful pages.',
      es: 'Generador gratuito de llms.txt: crea el archivo Markdown que da a las herramientas de IA un resumen de tu sitio y enlaces a tus mejores páginas.',
    },
    category: { en: 'AI search (GEO)', es: 'Búsqueda con IA (GEO)' },
    published: true,
  },
  {
    key: 'contentAnalyzer',
    slug: { en: 'content-analyzer', es: 'analizador-contenido' },
    title: {
      en: 'SEO Content Analyzer and Keyword Density',
      es: 'Analizador de contenido y densidad SEO',
    },
    description: {
      en: 'Free SEO content analyzer: word count, reading time, readability, keyword density, keyword stuffing warnings, and HTML heading checks in one place.',
      es: 'Analizador de contenido SEO gratuito: cuenta palabras, tiempo de lectura, legibilidad, densidad de palabras clave, relleno de keywords y encabezados HTML.',
    },
    category: { en: 'Content SEO', es: 'SEO de contenidos' },
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
