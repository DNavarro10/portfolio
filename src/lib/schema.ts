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
    sameAs: OWNER.profiles.map((profile) => profile.url),
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    knowsLanguage: LANGS.map((lang) => LANG_META[lang].hreflang),
    knowsAbout: [...OWNER.knowsAbout],
    alumniOf: { '@type': 'CollegeOrUniversity', name: OWNER.alumniOf },
  };
}

/**
 * ProfilePage: tells search engines the home page is about one person.
 * https://developers.google.com/search/docs/appearance/structured-data/profile-page
 */
export function profilePageSchema(path: string, lang: Lang): JsonLdNode {
  const url = absoluteUrl(path);
  return {
    '@type': 'ProfilePage',
    '@id': `${url}#profilepage`,
    url,
    inLanguage: LANG_META[lang].hreflang,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
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

export interface ArticleInput {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  keywords?: readonly string[];
}

/** Case studies: an Article written by (and about the work of) Diego. */
export function articleSchema(article: ArticleInput): JsonLdNode {
  const url = absoluteUrl(article.path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    inLanguage: LANG_META[article.lang].hreflang,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(article.keywords?.length ? { keywords: article.keywords.join(', ') } : {}),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Q&A blocks. Visible on the page too: never mark up hidden content. */
export function faqSchema(items: readonly FaqItem[], path: string): JsonLdNode {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** About page: tells search engines the page is about Diego. */
export function aboutPageSchema(path: string, lang: Lang): JsonLdNode {
  const url = absoluteUrl(path);
  return {
    '@type': 'AboutPage',
    '@id': `${url}#aboutpage`,
    url,
    inLanguage: LANG_META[lang].hreflang,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
  };
}

/** Contact page: how to reach Diego (his profiles are on the Person node). */
export function contactPageSchema(path: string, lang: Lang): JsonLdNode {
  const url = absoluteUrl(path);
  return {
    '@type': 'ContactPage',
    '@id': `${url}#contactpage`,
    url,
    inLanguage: LANG_META[lang].hreflang,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
  };
}

/** A free tool page: a browser-based web app made by Diego. */
export function webApplicationSchema(input: {
  name: string;
  description: string;
  path: string;
  lang: Lang;
}): JsonLdNode {
  const url = absoluteUrl(input.path);
  return {
    '@type': 'WebApplication',
    '@id': `${url}#app`,
    name: input.name,
    description: input.description,
    url,
    inLanguage: LANG_META[input.lang].hreflang,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any (runs in the web browser)',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    creator: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

/** An ordered list of links, e.g. the tools index. */
export function itemListSchema(items: { name: string; path: string }[]): JsonLdNode {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
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
