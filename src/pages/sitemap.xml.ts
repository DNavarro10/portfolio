/**
 * /sitemap.xml — generated at build time from the shared page list
 * (src/lib/pages.ts), the same data that feeds hreflang and /llms.txt,
 * so they can never disagree.
 *
 * Only published, indexable pages are listed. When a page exists in every
 * language, each <url> lists all versions via <xhtml:link> (hreflang).
 */
import type { APIRoute } from 'astro';
import { DEFAULT_LANG, LANG_META, LANGS } from '@/i18n/config';
import { absoluteUrl, hasAllLanguages } from '@/i18n/utils';
import { getIndexablePages, pageAlternates, type IndexablePage } from '@/lib/pages';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderUrls(page: IndexablePage): string[] {
  const alternates = pageAlternates(page);
  const hreflang = hasAllLanguages(alternates)
    ? [
        ...LANGS.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${LANG_META[l].hreflang}" href="${escapeXml(absoluteUrl(alternates[l]!))}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl(alternates[DEFAULT_LANG]!))}"/>`,
      ]
    : [];

  // One <url> per language version, each listing all alternates.
  return LANGS.flatMap((l) => {
    const version = page.versions[l];
    if (!version) return [];
    return [
      [
        '  <url>',
        `    <loc>${escapeXml(absoluteUrl(version.path))}</loc>`,
        version.lastmod ? `    <lastmod>${version.lastmod.toISOString()}</lastmod>` : '',
        ...hreflang,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n'),
    ];
  });
}

export const GET: APIRoute = async () => {
  const pages = await getIndexablePages();
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...pages.flatMap(renderUrls),
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
