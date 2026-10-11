/**
 * Build step: Astro outputs src/pages/es/404.astro as es/404/index.html.
 * Cloudflare serves the *nearest 404.html* when a URL doesn't exist, so this
 * moves the file to es/404.html. Missing /es/... URLs then get the Spanish
 * not-found page (still with an HTTP 404 status).
 *
 * Kept in its own plain-JS file (no type checking) so the project doesn't
 * need the extra @types/node dependency.
 */
import { rename, rmdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export default function nestedNotFoundPages() {
  return {
    name: 'nested-404-pages',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const out = fileURLToPath(dir);
        await rename(`${out}es/404/index.html`, `${out}es/404.html`);
        await rmdir(`${out}es/404`);
      },
    },
  };
}
