import type { Lang } from '@/i18n/config';

/**
 * Registry of the free SEO tools. Each tool gets its own page in both
 * languages (/tools/<slug>/ and /es/herramientas/<slug>/).
 *
 * Tools are code (interactive components), not Markdown, so they are listed
 * here instead of in a content collection. Empty until the first tool ships.
 */
export interface Tool {
  /** Stable internal id, e.g. 'serp-preview'. */
  key: string;
  slug: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  /** false = noindex and excluded from the sitemap. */
  published: boolean;
}

export const TOOLS: Tool[] = [];
