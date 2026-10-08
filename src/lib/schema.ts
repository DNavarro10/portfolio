/**
 * JSON-LD (schema.org) builders. Each returns a plain object; the JsonLd
 * component wraps them in one @graph so entities can reference each other
 * by "@id" (e.g. a BlogPosting's author points to the Person).
 */
import { OWNER, SITE, SITE_URL } from '@/config/site';
import { LANG_META, LANGS, type Lang } from '@/i18n/config';
import { absoluteUrl } from '@/i18n/utils';

export type JsonLdNode = Record<string, unknown>;

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function personSchema(): JsonLdNode {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: OWNER.name,
    alternateName: OWNER.shortName,
    jobTitle: OWNER.jobTitle,
    url: `${SITE_URL}/`,
    sameAs: [...OWNER.sameAs],
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    knowsLanguage: LANGS.map((lang) => LANG_META[lang].hreflang),
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: `${SITE_URL}/`,
    inLanguage: LANGS.map((lang) => LANG_META[lang].hreflang),
    publisher: { '@id': PERSON_ID },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface BlogPostingInput {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  datePublished: Date;
  dateModified?: Date;
  image?: string;
}

export function blogPostingSchema(post: BlogPostingInput): JsonLdNode {
  const url = absoluteUrl(post.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    inLanguage: LANG_META[post.lang].hreflang,
    datePublished: post.datePublished.toISOString(),
    dateModified: (post.dateModified ?? post.datePublished).toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(post.image ? { image: absoluteUrl(post.image) } : {}),
  };
}
