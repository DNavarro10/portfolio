/**
 * Referrer / source domains of AI assistants, used by the GA4 AI traffic
 * generator. Checked Oct 2026. ChatGPT also tags links with utm_source=chatgpt.com.
 */
export interface AiReferrer {
  name: string;
  domains: string[];
}

export const AI_REFERRERS: AiReferrer[] = [
  { name: 'ChatGPT', domains: ['chatgpt.com', 'chat.openai.com'] },
  { name: 'Perplexity', domains: ['perplexity.ai'] },
  { name: 'Gemini', domains: ['gemini.google.com', 'bard.google.com'] },
  { name: 'Copilot', domains: ['copilot.microsoft.com', 'copilot.com'] },
  { name: 'Claude', domains: ['claude.ai'] },
  { name: 'DeepSeek', domains: ['chat.deepseek.com'] },
  { name: 'Meta AI', domains: ['meta.ai'] },
  { name: 'Grok', domains: ['grok.com'] },
  { name: 'Mistral Le Chat', domains: ['chat.mistral.ai'] },
  { name: 'You.com', domains: ['you.com'] },
  { name: 'Poe', domains: ['poe.com'] },
];
