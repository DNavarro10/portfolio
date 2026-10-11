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
- **Fully static build** (`dist/`), no adapter for now. Hosting will be **Cloudflare Workers with static
  assets**; the `@astrojs/cloudflare` adapter and `wrangler` are added back in roadmap step 7 (deploy),
  together with the contact form. They were removed on Oct 9 because the Workers dev runtime crashed
  on the owner's Windows machine.
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
npm run preview      # build and serve the production output locally
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
    schema.ts             JSON-LD builders (Person, WebSite, ProfilePage, AboutPage, ContactPage,
                          Article, FAQPage, BreadcrumbList, BlogPosting, WebApplication, ItemList,
                          DefinedTermSet)
    content.ts            Collection helpers: by language, entry URLs, hreflang alternates
    pages.ts              All published pages (feeds sitemap.xml and llms.txt)
  data/tools.ts           Registry of free SEO tools (slug, title, description, category, published)
  data/ai-crawlers.ts     Known AI crawler tokens + purpose (training/search/user/control)
  data/ai-referrers.ts    AI assistant referrer domains (GA4 AI traffic tool)
  components/
    seo/SeoHead.astro     Every SEO <head> tag; pages never write these by hand
    seo/JsonLd.astro      Single JSON-LD <script> with @graph
    layout/               Header, footer, language switcher, breadcrumbs
    content/              Blog post, case study, and tool page templates (shared by EN/ES)
    tools/                Interactive tool UIs (LinkScorecard, AnchorAnalyzer, AnswerReady,
                          PassageChecker, AiTraffic, AiVisibility, AiLogs, AiRobots, LlmsTxt,
                          ContentAnalyzer, SerpPreview, SchemaGenerator) +
                          client.ts helpers. Each ships its own small <script>, loaded only on
                          that tool's page
    ui/                   Design-system components (see "Design system" below)
    layout/Fonts.astro    Self-hosted font loading (@font-face + preload)
    PlaceholderPage.astro Temporary page used until real content exists
  layouts/BaseLayout.astro  <html lang>, head, fonts, skip link, header/main/footer
  content.config.ts       Collection schemas (blog, experience)
  content/{blog,experience}/{en,es}/*.md
  pages/                  Routes (EN at root, ES under /es/), sitemap.xml.ts, robots.txt.ts,
                          llms.txt.ts, 404 (EN + ES, see NotFoundPage.astro)
  styles/tokens.css       Design tokens: colors (light + dark), type scale, spacing, radii
  styles/global.css       Base styles: reset, typography, links, .container, .prose, utilities
  pages/styleguide.astro  Private style guide (noindex, not in sitemap or menu)
public/                   Static files served as-is (favicon, apple-touch-icon, og-default.png
                          share image 1200×630, _redirects for 301s; CV PDF later)
integrations/             Small build steps (nested-404.mjs)
```

## URL rules

- **Trailing slash: always** (`/about/`). Astro builds `about/index.html`; Cloudflare serves it at
  `/about/` natively, so canonicals never redirect. Internal links must include the trailing slash.
- Lowercase, hyphenated slugs only.
- English at `/`, Spanish under `/es/` with **Spanish slugs** (`/es/sobre-mi/`, `/es/experiencia/`,
  `/es/herramientas/`, `/es/glosario/`, `/es/contacto/`).
- New fixed pages: add them to `src/i18n/routes.ts` (both languages), add strings to `en.ts`/`es.ts`.

## SEO rules (non-negotiable, every page)

- Pages render through `BaseLayout`, passing `title`, `description`, `lang`, and `alternates`.
  `SeoHead` outputs: title (`Title | Diego Navarro`), meta description, robots, self-referencing
  canonical, hreflang, Open Graph, Twitter card, JSON-LD.
- **Unique** title (≤ ~60 chars) and meta description (~120–160 chars) per page and language.
- **hreflang** (`en`, `es`, `x-default` → English) only when the page exists in **both** languages.
  The route registry and `translationKey` (content) are the only sources for alternates.
- Case studies need `pubDate` (shown + Article `datePublished`); use `seoTitle` when the H1 is too
  long for a ≤ 60-character `<title>`. Tools carry an `updated` date. Format dates with
  `timeZone: 'UTC'`.
- **JSON-LD**: Person + WebSite on every page (linked by `@id`); BreadcrumbList on inner pages;
  BlogPosting on posts. Visible breadcrumbs must match the BreadcrumbList.
- **One `<h1>` per page**, headings in logical order (no skipping levels).
- **Sitemap** (`/sitemap.xml`) is generated from the route registry, collections, and tools.
  Unpublished pages (`published: false`, `draft: true`) are `noindex` and excluded from it.
- Never auto-redirect by browser language; the language switcher is a normal link.
- **404s**: `/404.html` (EN) and `/es/404.html` (ES, moved there by `integrations/nested-404.mjs`)
  keep a real 404 status, show a short message and quick links, and redirect to the home page
  (same language) after a 10-second countdown the visitor can cancel. Never redirect all missing URLs to the home page
  with a 301 (soft 404). Pages that move for good get a 301 in `public/_redirects`.

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

## SEO tools rules

- Browser-only first: no server, no paid APIs, nothing the visitor types is sent anywhere.
  Tools that must fetch other sites (robots/AI-crawler checker, live backlink checker) wait for
  the Cloudflare step and need Turnstile, rate limits, and blocking of private IPs.
- New tool: add an entry in `src/data/tools.ts`, its copy in `en.ts`/`es.ts` under
  `toolContent.<key>` (steps, faq, ui labels), and a component in `src/components/tools/`
  registered in `ToolPage.astro`. Plain TypeScript, no UI framework, no dependencies.
- Labels are rendered server-side from i18n; strings the script needs go in `data-strings` JSON.
- Elements created by scripts don't get Astro's scoped styles: use the global tool classes
  (`.tool-panel`, `.tool-field`, `.tool-checks`, `.tool-table`, `.tool-button`, `.status--*`).
- Pasted HTML is read with `DOMParser` (never inserted into the page); use `mainContent()`.
- Status is never shown by color alone (icon or text too). Keep each tool script small.
- Tools with wide tables, code, or pasted page source set `bestOnDesktop: true` (a note shows on
  screens under 48rem). They must still work on phones.

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
  The menu only lists published routes (no links to unfinished pages).
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
4. ✅ About + Experience (4 case studies, EN + ES), published
5. 🟡 Contact page published: form first (plain HTML, shown disabled as "coming soon" until
   `SITE.contactForm.enabled`), LinkedIn + CV as secondary, availability, services teaser.
   Pending: CV PDF (set `OWNER.cv`, the button appears automatically)
6. Blog launch posts
7. Deploy to Cloudflare (wrangler: `assets.not_found_handling: "404-page"` so the nearest
   404.html is served with a 404 status), buy domain, update `SITE_URL`, verify in Search Console, wire the contact
   form: `/api/contact/` server route (`prerender = false`) + Turnstile, destination email stored as a
   Cloudflare secret (never in the repo), then set `SITE.contactForm.enabled: true`
8. 🟡 SEO tools (12, EN + ES, browser-only): ✅ link prospect scorecard, anchor text analyzer,
   AI answer-readiness checker, quotable passage checker, GA4 AI traffic channel, AI visibility
   tracker, AI bot log analyzer, AI crawler robots.txt generator, llms.txt generator, content
   analyzer, SERP snippet preview, schema generator. ✅ AI search glossary (/glossary/, EN + ES,
   DefinedTermSet). Next after deploy: AI crawler access checker, live backlink checker,
   indexability checker (server routes, `prerender = false`)
9. Later: `/services` for client work
