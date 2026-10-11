/**
 * Known AI crawler user-agent tokens (checked Oct 2026 against the owners'
 * docs and Search Engine Journal's list). Used by the AI robots.txt generator.
 *
 * purpose:
 *   training — collects content to train AI models
 *   search   — builds an AI search index; pages can be cited in answers
 *   user     — fetches a page when a person asks the assistant about it
 *   control  — not a crawler: a robots.txt token that controls how content
 *              fetched by the company's main crawler may be used for AI
 */
export type CrawlerPurpose = 'training' | 'search' | 'user' | 'control';

export interface AiCrawler {
  token: string;
  company: string;
  purpose: CrawlerPurpose;
}

export const AI_CRAWLERS: AiCrawler[] = [
  { token: 'GPTBot', company: 'OpenAI', purpose: 'training' },
  { token: 'OAI-SearchBot', company: 'OpenAI', purpose: 'search' },
  { token: 'ChatGPT-User', company: 'OpenAI', purpose: 'user' },
  { token: 'ClaudeBot', company: 'Anthropic', purpose: 'training' },
  { token: 'Claude-SearchBot', company: 'Anthropic', purpose: 'search' },
  { token: 'Claude-User', company: 'Anthropic', purpose: 'user' },
  { token: 'PerplexityBot', company: 'Perplexity', purpose: 'search' },
  { token: 'Perplexity-User', company: 'Perplexity', purpose: 'user' },
  { token: 'Google-Extended', company: 'Google', purpose: 'control' },
  { token: 'Applebot-Extended', company: 'Apple', purpose: 'control' },
  { token: 'Meta-ExternalAgent', company: 'Meta', purpose: 'training' },
  { token: 'Meta-WebIndexer', company: 'Meta', purpose: 'search' },
  { token: 'Amazonbot', company: 'Amazon', purpose: 'training' },
  { token: 'DuckAssistBot', company: 'DuckDuckGo', purpose: 'search' },
  { token: 'MistralAI-User', company: 'Mistral', purpose: 'user' },
  { token: 'CCBot', company: 'Common Crawl', purpose: 'training' },
  { token: 'Bytespider', company: 'ByteDance', purpose: 'training' },
];
