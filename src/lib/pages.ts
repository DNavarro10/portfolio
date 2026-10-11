/**
 * The list of every published, indexable page on the site, grouped by
 * language versions.
 *
 * Single source of truth for machine-readable indexes: /sitemap.xml and
 * /llms.txt both read from here, so they always list the same pages.
 * Sources: the route registry, content collections, and tools registry.
 * Unpublished pages and drafts are never included.
 */
import { TOOLS } from '@/data/tools';
import { LANGS, type Lang } from '@/i18n/config';
import { COLLECTION_BASE, ROUTES, type RouteKey } from '@/i18n/routes';
import { routePath, useTranslations, type Alternates } from '@/i18n/utils';
import {
  entryAlternates,
  entryPath,
  getPublishedEntries,
  parseEntryId,
  type ContentCollection,
} from '@/lib/content';

export type PageKind = 'page' | 'experience' | 'blog' | 'tool';

export interface PageVersion {
  path: string;
  title: string;
  description: string;
  lastmod?: Date;
}

export interface IndexablePage {
  kind: PageKind;
  /** One entry per language the page exists in. */
  versions: Partial<Record<Lang, PageVersion>>;
}

/** Map of language -> path, used for hreflang. */
export function pageAlternates(page: IndexablePage): Alternates {
  return Object.fromEntries(
    Object.entries(page.versions).map(([lang, version]) => [lang, version.path]),
  );
}

function staticPages(): IndexablePage[] {
  return (Object.keys(ROUTES) as RouteKey[])
    .filter((key) => ROUTES[key].published)
    .map((key) => ({
      kind: 'page',
      versions: Object.fromEntries(
        LANGS.map((lang) => {
          const meta = useTranslations(lang).pages[key];
          return [
            lang,
            { path: routePath(key, lang), title: meta.title, description: meta.description },
          ];
        }),
      ),
    }));
}

async function collectionPages(collection: ContentCollection): Promise<IndexablePage[]> {
  const entries = (await getPublishedEntries(collection)).filter((entry) => !entry.data.draft);
  const seen = new Set<string>();
  const pages: IndexablePage[] = [];

  for (const entry of entries) {
    // EN and ES versions of the same content form one group; emit it once.
    const paths = Object.values(entryAlternates(collection, entry, entries));
    if (paths.some((path) => seen.has(path))) continue;
    paths.forEach((path) => seen.add(path));

    const versions: IndexablePage['versions'] = {};
    for (const version of entries) {
      const path = entryPath(collection, version);
      if (!paths.includes(path)) continue;
      const { data } = version;
      versions[parseEntryId(version.id).lang] = {
        path,
        title: data.title,
        description: data.description,
        lastmod: 'pubDate' in data ? (data.updatedDate ?? data.pubDate) : undefined,
      };
    }
    pages.push({ kind: collection, versions });
  }
  return pages;
}

function toolPages(): IndexablePage[] {
  return TOOLS.filter((tool) => tool.published).map((tool) => ({
    kind: 'tool',
    versions: Object.fromEntries(
      LANGS.map((lang) => [
        lang,
        {
          path: `${COLLECTION_BASE.tools[lang]}${tool.slug[lang]}/`,
          title: tool.title[lang],
          description: tool.description[lang],
          lastmod: new Date(tool.updated),
        },
      ]),
    ),
  }));
}

export async function getIndexablePages(): Promise<IndexablePage[]> {
  return [
    ...staticPages(),
    ...(await collectionPages('experience')),
    ...(await collectionPages('blog')),
    ...toolPages(),
  ];
}
