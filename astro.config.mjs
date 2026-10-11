// @ts-check
import { defineConfig } from 'astro/config';
import nestedNotFoundPages from './integrations/nested-404.mjs';
import { SITE_URL } from './src/config/site.ts';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Production URL. Change it in src/config/site.ts (single source of truth).
  site: SITE_URL,

  // URL policy: always end with "/" (e.g. /about/). Pages are built as
  // about/index.html, and static hosts (Cloudflare included) serve those
  // natively at /about/, so canonical URLs never need a redirect hop.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline the (small) CSS into each page: no render-blocking request.
    inlineStylesheets: 'always',
  },

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English at "/", Spanish at "/es/"
      redirectToDefaultLocale: false,
    },
  },

  // Fully static site: every page is plain HTML built ahead of time.
  // The Cloudflare adapter is added back at deploy time (roadmap step 7),
  // when the contact form and server-side SEO tools need it.
  output: 'static',

  integrations: [nestedNotFoundPages()],
});
