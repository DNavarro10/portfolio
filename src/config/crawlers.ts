/**
 * Crawler policy for robots.txt.
 *
 * Current choice (Oct 2026): allow search engines and AI *search/answer*
 * crawlers, which fetch pages to cite them in answers; block AI *training*
 * crawlers, which collect content to train models. Revisit once the site is
 * complete. Blocking training crawlers does not affect search citations.
 *
 * Each list is a group of user-agent tokens published by the crawler owners.
 */

/** AI search and user-triggered fetchers: explicitly allowed. */
export const AI_SEARCH_CRAWLERS = [
  'OAI-SearchBot', // ChatGPT search results
  'ChatGPT-User', // ChatGPT fetching a page a user asked about
  'PerplexityBot', // Perplexity search index
  'Perplexity-User', // Perplexity user-triggered fetches
  'Claude-SearchBot', // Claude search
  'Claude-User', // Claude user-triggered fetches
  // Google-Extended controls Gemini use of content: grounding AND model training.
  // Kept allowed for now (owner to decide, Oct 10). Google Search uses Googlebot.
  'Google-Extended',
] as const;

/** AI model-training crawlers: blocked for now. */
export const AI_TRAINING_CRAWLERS = [
  'GPTBot', // OpenAI training
  'ClaudeBot', // Anthropic training
  'CCBot', // Common Crawl (widely used for training)
  'Applebot-Extended', // Apple AI training
  'Meta-ExternalAgent', // Meta AI training
  'Bytespider', // ByteDance
] as const;
