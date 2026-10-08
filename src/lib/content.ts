/**
 * Helpers for reading content collections by language and building their
 * URLs and hreflang alternates.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, isLang, type Lang } from '@/i18n/config';
import { COLLECTION_BASE } from '@/i18n/routes';
import type { Alternates } from '@/i18n/utils';

export type ContentCollection = 'blog' | 'experience';
type Entry<C extends ContentCollection> = CollectionEntry<C>;

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Split an entry id like "es/mi-articulo" into its language and slug. */
export function parseEntryId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  const slug = rest.join('/');
  if (!isLang(lang) || !SLUG_PATTERN.test(slug)) {
    throw new Error(
      `Invalid content path "${id}". Use <lang>/<slug>.md with a lowercase, hyphenated slug (e.g. en/my-post.md).`,
    );
  }
  return { lang, slug };
}

/** Public URL path of an entry, e.g. "/es/blog/mi-articulo/". */
export function entryPath(collection: ContentCollection, entry: { id: string }): string {
  const { lang, slug } = parseEntryId(entry.id);
  return `${COLLECTION_BASE[collection][lang]}${slug}/`;
}

/** All non-draft entries (drafts are included only in development). */
export async function getPublishedEntries<C extends ContentCollection>(
  collection: C,
  lang?: Lang,
): Promise<Entry<C>[]> {
  const entries = (await getCollection(collection)) as Entry<C>[];
  return entries.filter((entry) => {
    if (entry.data.draft && !import.meta.env.DEV) return false;
    return lang ? parseEntryId(entry.id).lang === lang : true;
  });
}

/** Language versions of an entry, matched by `translationKey`. */
export function entryAlternates<C extends ContentCollection>(
  collection: C,
  entry: Entry<C>,
  all: Entry<C>[],
): Alternates {
  const alternates: Alternates = { [parseEntryId(entry.id).lang]: entryPath(collection, entry) };
  const key = entry.data.translationKey;
  if (!key) return alternates;
  for (const other of all) {
    if (other.data.translationKey !== key) continue;
    const { lang } = parseEntryId(other.id);
    if (LANGS.includes(lang)) alternates[lang] = entryPath(collection, other);
  }
  return alternates;
}

/** getStaticPaths() helper shared by the EN and ES detail pages. */
export async function staticPathsFor<C extends ContentCollection>(collection: C, lang: Lang) {
  const all = await getPublishedEntries(collection);
  return all
    .filter((entry) => parseEntryId(entry.id).lang === lang)
    .map((entry) => ({
      params: { slug: parseEntryId(entry.id).slug },
      props: { entry, alternates: entryAlternates(collection, entry, all) },
    }));
}
