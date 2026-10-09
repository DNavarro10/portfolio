# CLAUDE.md

Project guide for Claude (and humans). Read this before making changes.

## What this is

Personal portfolio of **Luis Diego Navarro Morales**, Senior SEO Specialist (6+ years, engineering background).
Goals: showcase experience with case studies, host a blog, ship free SEO tools, let recruiters contact
me and download my CV, and later offer SEO services to clients. The site itself is an SEO showcase,
so technical SEO, performance, and accessibility are held to a high bar.

The owner is new to modern web development: explain changes in simple terms and keep code readable.

## Stack

- **Astro 7** (static output by default), **TypeScript strict**.
- **Cloudflare Workers with static assets** via `@astrojs/cloudflare` (`wrangler.jsonc`).
- **ESLint** (flat config) + **Prettier** (with the Astro plugin).
- No UI framework yet. **Ask before adding any dependency** and explain why it's needed.

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server at http://localhost:4321
npm run build        # production build into dist/
npm run check        # TypeScript + Astro diagnostics
npm run lint         # ESLint
npm run format       # Prettier (write)
npm run verify       # check + lint + format check + build (run before every commit)
npm run preview      # build and run locally in the Cloudflare runtime
npm run deploy       # build and deploy to Cloudflare
```

## Folder structure

```
src/
  config/site.ts          Single source of truth: SITE_URL, owner info, brand name
  config/crawlers.ts      robots.txt policy: AI search crawlers allowed, AI training blocked
  i18n/
    config.ts             Languages (en default, es), hreflang and og:locale codes
    en.ts / es.ts         ALL UI strings (es is typed against en: missing keys fail the build)
    routes.ts             Page registry: EN/ES path per page + `published` flag
    utils.ts              useTranslations, routePath, routeAlternates, absoluteUrl
  lib/
    schema.ts             JSON-LD builders (Person, WebSite, BreadcrumbList, BlogPosting)
    content.ts            Collection helpers: by language, entry URLs, hreflang alternates
    pages.ts              All published pages (feeds sitemap.xml and llms.txt)
  data/tools.ts           Registry of free SEO tools (code, not Markdown)
  components/
    seo/SeoHead.astro     Every SEO <head> tag; pages never write these by hand
    seo/JsonLd.astro      Single JSON-LD <script> with @graph
    layout/               Header, footer, language switcher, breadcrumbs
    content/              Blog post, case study, and tool page templates (shared by EN/ES)
    ui/                   Design-system components (see "Design system" below)
    layout/Fonts.astro    Self-hosted font loading (@font-face + preload)
    PlaceholderPage.astro Temporary page used until real content exists
  layouts/BaseLayout.astro  <html lang>, head, fonts, skip link, header/main/footer
  content.config.ts       Collection schemas (blog, experience)
  content/{blog,experience}/{en,es}/*.md
  pages/                  Routes (EN at root, ES under /es/), sitemap.xml.ts, robots.txt.ts,
                          llms.txt.ts, 404
  styles/tokens.css       Design tokens: colors (light + dark), type scale, spacing, radii
  styles/global.css       Base styles: reset, typography, links, .container, .prose, utilities
  pages/styleguide.astro  Private style guide (noindex, not in sitemap or menu)
public/                   Static files served as-is (favicon; CV PDF later)
```

## URL rules

- **Trailing slash: always** (`/about/`). Astro builds `about/index.html`; Cloudflare serves it at
  `/about/` natively, so canonicals never redirect. Internal links must include the trailing slash.
- Lowercase, hyphenated slugs only.
- English at `/`, Spanish under `/es/` with **Spanish slugs** (`/es/sobre-mi/`, `/es/experiencia/`,
  `/es/herramientas/`, `/es/contacto/`).
- New fixed pages: add them to `src/i18n/routes.ts` (both languages), add strings to `en.ts`/`es.ts`.

## SEO rules (non-negotiable, every page)

- Pages render through `BaseLayout`, passing `title`, `description`, `lang`, and `alternates`.
  `SeoHead` outputs: title (`Title | Diego Navarro`), meta description, robots, self-referencing
  canonical, hreflang, Open Graph, Twitter card, JSON-LD.
- **Unique** title (≤ ~60 chars) and meta description (~120–160 chars) per page and language.
- **hreflang** (`en`, `es`, `x-default` → English) only when the page exists in **both** languages.
  The route registry and `translationKey` (content) are the only sources for alternates.
- **JSON-LD**: Person + WebSite on every page (linked by `@id`); BreadcrumbList on inner pages;
  BlogPosting on posts. Visible breadcrumbs must match the BreadcrumbList.
- **One `<h1>` per page**, headings in logical order (no skipping levels).
- **Sitemap** (`/sitemap.xml`) is generated from the route registry, collections, and tools.
  Unpublished pages (`published: false`, `draft: true`) are `noindex` and excluded from it.
- Never auto-redirect by browser language; the language switcher is a normal link.

## AI search (GEO/AEO) rules

- `/llms.txt` and `/sitemap.xml` are generated from `src/lib/pages.ts`, which reads the same
  sources as hreflang (route registry, collections, tools). Never hand-write these files; publish
  pages through the route registry or collections instead.
- `robots.txt` policy lives in `src/config/crawlers.ts`: search engines and AI search/answer
  crawlers allowed; AI training crawlers blocked (owner's choice, revisit after launch).
- Every new page should be "answer-ready":
  - A clear one- or two-sentence summary near the top that answers "what is this page?"
  - Descriptive, question-like headings where natural; short self-contained paragraphs that can
    be quoted on their own.
  - The same facts about Diego everywhere (name, title, years, markets) as in `site.ts` and
    the home page. Don't invent new numbers; claims must come from the resumes.
  - The right JSON-LD for the page type; concrete numbers and dates where available.

## i18n rules

- **No hardcoded UI text in components.** Add strings to `en.ts` and `es.ts`.
- Spanish is written natively for Spanish-speaking searchers, not translated word for word.
- Content files go in `src/content/<collection>/<lang>/<slug>.md`. Link translations with the same
  `translationKey` in both files' frontmatter.

## Performance and accessibility

- **Zero client JavaScript by default.** Interactivity only as Astro islands (e.g. SEO tools), and
  only on the pages that need it.
- Images through `astro:assets` `<Image>` (optimized at build time). Always set meaningful `alt`
  (empty `alt=""` only for decorative images).
- Fonts must be self-hosted (no Google Fonts `<link>`).
- Lighthouse target: **95+** in Performance, Accessibility, Best Practices, SEO.
- Semantic HTML and landmarks, keyboard navigable, visible focus, **WCAG AA** contrast,
  respect `prefers-reduced-motion`.

## Design system

- Style: "technical and precise". Theme: **Signal green**. Light by default, dark follows
  `prefers-color-scheme` (no toggle).
- **Use tokens only** (`var(--color-*)`, `--fs-*`, `--space-*`, `--radius*`). No raw hex values or
  pixel font sizes in components. New colors go in `tokens.css` for both themes, with the contrast
  ratio noted in a comment (AA: 4.5:1 text, 3:1 UI/large text).
- Fonts: IBM Plex Sans (text, variable) + IBM Plex Mono 400/500 (labels, numbers), Latin subset only,
  loaded in `components/layout/Fonts.astro`. Only Plex Sans is preloaded.
- Components (`src/components/ui/`):
  - `Section` (section landmark + container; pass `labelledby`) and `SectionHeading` (mono
    eyebrow + heading).
  - `Button` (`primary` max once per view, `secondary`, `ghost`; renders `<a>` with `href`).
  - `Card` + `CardGrid` (wrap each card in `<li>`); whole card clickable via the title link.
  - `Tag`, `TagList`, `MetricGroup` (results as a `<dl>`).
- Layout helpers: `.container`, `.container--prose`, `.prose` (long-form), `.lead`, `.mono-label`,
  `.text-muted`, `.visually-hidden`.
- Header: desktop nav plus a no-JavaScript mobile menu (`<details>`). Touch targets ≥ 44px.
- Review changes on `/styleguide/` in light and dark. That page is the one exception to the
  "no hardcoded text" rule (internal, English sample text).

## Privacy and secrets

- Never put the owner's email address or phone number in code or content. Contact happens via a
  form (to be built); public profiles go in `OWNER.profiles`.
- Secrets go in `.env` / `.dev.vars` (git-ignored). Document variable names in `.env.example`.

## Workflow

- Show a plan and wait for approval before large changes.
- Small, focused commits with Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`, `style:`.
- `npm run verify` must pass before every commit.
- Use the latest stable APIs from the official Astro and Cloudflare docs.

## Roadmap

1. ✅ Foundation
2. ✅ Design system (Signal green, IBM Plex, components, style guide)
3. ✅ Home page (hiring-team focus; CTA for services moves to Contact later)
4. About + Experience case studies (from the CV; anonymize metrics if confidential)
5. Contact form + CV download (`/public`, track clicks)
6. Blog launch posts
7. Deploy to Cloudflare, buy domain, update `SITE_URL`, verify in Search Console
8. SEO tools, one at a time (browser-only first; server-side ones via `prerender = false` routes)
9. Later: `/services` for client work
