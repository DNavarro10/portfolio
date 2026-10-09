/**
 * /robots.txt — crawler access rules, generated from src/config/crawlers.ts.
 * Search engines and AI search crawlers are allowed; AI training crawlers
 * are blocked. Points crawlers to the sitemap and AI tools to llms.txt.
 */
import type { APIRoute } from 'astro';
import { AI_SEARCH_CRAWLERS, AI_TRAINING_CRAWLERS } from '@/config/crawlers';
import { absoluteUrl } from '@/i18n/utils';

export const GET: APIRoute = () => {
  const lines = [
    '# Search engines and all other crawlers',
    'User-agent: *',
    'Allow: /',
    '',
    '# AI search and answer engines: allowed (pages may be cited in answers)',
    ...AI_SEARCH_CRAWLERS.map((agent) => `User-agent: ${agent}`),
    'Allow: /',
    '',
    '# AI model-training crawlers: blocked',
    ...AI_TRAINING_CRAWLERS.map((agent) => `User-agent: ${agent}`),
    'Disallow: /',
    '',
    `# LLM-friendly site summary: ${absoluteUrl('/llms.txt')}`,
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
