/**
 * Content collections: blog posts and experience case studies.
 *
 * Files live in a folder per language:
 *   src/content/blog/en/my-post.md       -> /blog/my-post/
 *   src/content/blog/es/mi-articulo.md   -> /es/blog/mi-articulo/
 * The file name becomes the URL slug (lowercase letters, numbers, hyphens).
 *
 * To link an EN post with its ES version (for hreflang), give both the
 * same `translationKey` in their frontmatter.
 *
 * Frontmatter is validated at build time: a missing or too-long title or
 * description fails the build, so SEO basics can't be forgotten.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Fields shared by every collection. */
const seoFields = {
  /** Shown as the <h1> and used for the <title>. Keep it under ~60 characters. */
  title: z.string().min(1).max(70),
  /** Meta description. */
  description: z.string().min(50).max(160),
  /** Same value on the EN and ES versions of one piece of content. */
  translationKey: z.string().optional(),
  /** Drafts are visible in `npm run dev` but never built for production. */
  draft: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      ...seoFields,
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: ({ image }) =>
    z.object({
      ...seoFields,
      /**
       * Two- or three-sentence answer to "what was this project?", shown at the
       * top of the page. Written to be quoted on its own (search and AI answers).
       */
      summary: z.string().min(80).max(420),
      company: z.string(),
      role: z.string(),
      /** e.g. "2023 – 2026" */
      period: z.string(),
      /** Lower numbers are listed first. */
      order: z.number().int().default(100),
      /** Headline results, e.g. { label: 'Links per month', value: '120+' }. */
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      tags: z.array(z.string()).default([]),
      /** Tools used, shown as tags. */
      tools: z.array(z.string()).default([]),
      /** Short Q&A shown at the end of the page and marked up as FAQPage. */
      faq: z
        .array(z.object({ question: z.string().min(10), answer: z.string().min(30) }))
        .default([]),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
    }),
});

export const collections = { blog, experience };
