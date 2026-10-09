# Diego Navarro — SEO Portfolio

Personal website of Luis Diego Navarro Morales, Senior SEO Specialist. Bilingual (English / Spanish),
built to be fast, accessible, and technically sound for search engines.

**Stack:** [Astro](https://astro.build) · TypeScript · Cloudflare Workers (static assets)

## Features

- English at `/`, Spanish at `/es/` with native Spanish URLs
- One SEO component for every page: titles, descriptions, canonicals, hreflang, Open Graph,
  Twitter cards, and JSON-LD (Person, WebSite, BreadcrumbList, BlogPosting)
- Sitemap with hreflang alternates generated from a single route registry
- Validated content collections for the blog and case studies
- Zero client-side JavaScript by default

## Getting started

Requirements: [Node.js](https://nodejs.org) 22 LTS or newer, and Git.

```bash
git clone https://github.com/DNavarro10/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:4321.

## Scripts

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the local dev server                            |
| `npm run build`   | Build the production site into `dist/`                |
| `npm run check`   | Type-check Astro and TypeScript files                 |
| `npm run lint`    | Run ESLint                                            |
| `npm run format`  | Format all files with Prettier                        |
| `npm run verify`  | Check, lint, format check, and build (before commits) |
| `npm run preview` | Build and run locally in the Cloudflare runtime       |
| `npm run deploy`  | Build and deploy to Cloudflare Workers                |

## Configuration

- **Site URL and owner details:** `src/config/site.ts`
- **Pages and their EN/ES URLs:** `src/i18n/routes.ts`
- **Interface text:** `src/i18n/en.ts` and `src/i18n/es.ts`
- **Environment variables:** copy `.env.example` to `.env` (never commit `.env`)

## Adding content

Create a Markdown file in the language folder; the file name becomes the URL:

```
src/content/blog/en/my-post.md      ->  /blog/my-post/
src/content/blog/es/mi-articulo.md  ->  /es/blog/mi-articulo/
```

To link translations (for hreflang), use the same `translationKey` in both files. Frontmatter is
validated at build time; see `src/content.config.ts` for the fields.

See [`CLAUDE.md`](./CLAUDE.md) for the full conventions and SEO rules.
