/**
 * /sitemap.xml — generated at build time from the same sources as the
 * hreflang tags (route registry, content collections, tools registry),
 * so the sitemap and <head> can never disagree.
 *
 * Only published, indexable pages are listed. When a page exists in every
 * language, each <url> lists all versions via <xhtml:link> (hreflang).
 */
import type { APIRoute } from 'astro';
import { TOOLS } from '@/data/tools';
import { DEFAULT_LANG, LANG_META, LANGS, type Lang } from '@/i18n/config';
import { COLLECTION_BASE, ROUTES, type RouteKey } from '@/i18n/routes';
import { absoluteUrl, hasAllLanguages, routeAlternates, type Alternates } from '@/i18n/utils';
import {
  entryAlternates,
  entryPath,
  getPublishedEntries,
  parseEntryId,
  type ContentCollection,
} from '@/lib/content';

interface SitemapPage {
  alternates: Alternates;
  /** Last modification date per language version. */
  lastmod?: Partial<Record<Lang, Date>>;
}

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function collectionPages(collection: ContentCollection): Promise<SitemapPage[]> {
  const entries = (await getPublishedEntries(collection)).filter((entry) => !entry.data.draft);
  const seen = new Set<string>();
  const pages: SitemapPage[] = [];
  for (const entry of entries) {
    const alternates = entryAlternates(collection, entry, entries);
    // EN and ES versions share one group; emit each group only once.
    const paths = Object.values(alternates);
    if (paths.some((path) => seen.has(path))) continue;
    paths.forEach((path) => seen.add(path));
    const lastmod: Partial<Record<Lang, Date>> = {};
    for (const version of entries) {
      if (!paths.includes(entryPath(collection, version))) continue;
      if ('pubDate' in version.data) {
        lastmod[parseEntryId(version.id).lang] = version.data.updatedDate ?? version.data.pubDate;
      }
    }
    pages.push({ alternates, lastmod });
  }
  return pages;
}

function renderUrls(page: SitemapPage): string[] {
  const linked = hasAllLanguages(page.alternates);
  const hreflang = linked
    ? [
        ...LANGS.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${LANG_META[l].hreflang}" href="${escapeXml(absoluteUrl(page.alternates[l]!))}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl(page.alternates[DEFAULT_LANG]!))}"/>`,
      ]
    : [];
  // One <url> per language version, each listing all alternates.
  return LANGS.filter((l) => page.alternates[l]).map((l) =>
    [
      '  <url>',
      `    <loc>${escapeXml(absoluteUrl(page.alternates[l]!))}</loc>`,
      page.lastmod?.[l] ? `    <lastmod>${page.lastmod[l].toISOString()}</lastmod>` : '',
      ...hreflang,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n'),
  );
}

export const GET: APIRoute = async () => {
  const staticPages: SitemapPage[] = (Object.keys(ROUTES) as RouteKey[])
    .filter((key) => ROUTES[key].published)
    .map((key) => ({ alternates: routeAlternates(key) }));

  const toolPages: SitemapPage[] = TOOLS.filter((tool) => tool.published).map((tool) => ({
    alternates: Object.fromEntries(
      LANGS.map((l) => [l, `${COLLECTION_BASE.tools[l]}${tool.slug[l]}/`]),
    ),
  }));

  const pages = [
    ...staticPages,
    ...(await collectionPages('blog')),
    ...(await collectionPages('experience')),
    ...toolPages,
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...pages.flatMap(renderUrls),
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
