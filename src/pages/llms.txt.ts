/**
 * /llms.txt — a plain-text (Markdown) summary of the site for AI tools,
 * following the community convention at https://llmstxt.org.
 *
 * Generated at build time from the same sources as the sitemap
 * (src/lib/pages.ts) and the profile facts shown on the home page, so it
 * updates itself whenever a page, case study, post, or tool is published.
 */
import type { APIRoute } from 'astro';
import { OWNER } from '@/config/site';
import { LANGS } from '@/i18n/config';
import { absoluteUrl, useTranslations } from '@/i18n/utils';
import { getIndexablePages, type PageKind } from '@/lib/pages';

const KIND_ORDER: PageKind[] = ['page', 'experience', 'blog', 'tool'];

export const GET: APIRoute = async () => {
  const en = useTranslations('en');
  const p = en.home.profile;
  const pages = await getIndexablePages();

  const lines: string[] = [
    `# ${OWNER.shortName} — ${OWNER.jobTitle}`,
    '',
    `> ${en.home.summary}`,
    '',
    `## ${en.llms.profile}`,
    '',
    `- name: ${OWNER.name}`,
    `- ${p.role}: ${p.roleValue}`,
    `- ${p.focus}: ${p.focusValue}`,
    `- ${p.markets}: ${p.marketsValue}`,
    `- ${p.languages}: ${p.languagesValue}`,
    `- ${p.education}: ${p.educationValue}, ${OWNER.alumniOf}`,
    `- location: ${OWNER.location}`,
    '',
    `## ${en.llms.expertise}`,
    '',
    ...OWNER.knowsAbout.map((topic) => `- ${topic}`),
    '',
    `## ${en.llms.profiles}`,
    '',
    ...OWNER.profiles.map((profile) => `- [${profile.label}](${profile.url})`),
  ];

  // One section per language, grouped by page type.
  for (const lang of LANGS) {
    const t = useTranslations(lang).llms;
    lines.push('', `## ${t.language}`);
    for (const kind of KIND_ORDER) {
      const versions = pages
        .filter((page) => page.kind === kind)
        .map((page) => page.versions[lang])
        .filter((version) => version !== undefined);
      if (versions.length === 0) continue;
      lines.push('', `### ${t.kinds[kind]}`, '');
      for (const version of versions) {
        lines.push(`- [${version.title}](${absoluteUrl(version.path)}): ${version.description}`);
      }
    }
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
