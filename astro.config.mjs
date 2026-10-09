// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { SITE_URL } from './src/config/site.ts';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Production URL. Change it in src/config/site.ts (single source of truth).
  site: SITE_URL,

  // URL policy: always end with "/" (e.g. /about/). Pages are built as
  // about/index.html, and Cloudflare serves those natively at /about/,
  // so canonical URLs never need a redirect hop.
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

  adapter: cloudflare({
    // Optimize images at build time; no paid Cloudflare Images needed.
    imageService: 'compile',
  }),

  // No server sessions needed (avoids provisioning a KV namespace).
  session: false,

  // Static HTML for every page by default. Future SEO tools can opt into
  // on-demand rendering per route with `export const prerender = false`.
  output: 'static',
});
