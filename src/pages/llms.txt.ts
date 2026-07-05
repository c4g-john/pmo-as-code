// llms.txt, generated from the same nav record that renders the sidebar,
// so the two can never drift.
import type { APIRoute } from 'astro';
import { NAV, EXTRA_PAGES } from '../data/nav';

const SITE = 'https://pmoascode.com';

export const GET: APIRoute = () => {
  const lines: string[] = [
    '# PMO as Code',
    '',
    '> A vendor-neutral standard for running a PMO from version-controlled,',
    '> testable documents. Project status is a build artifact.',
    '',
    'The reference implementation is docassert (https://docassert.com),',
    'a CLI that validates business documents the way a test suite validates code.',
    '',
  ];
  for (const group of NAV) {
    lines.push(`## ${group.title}`, '');
    for (const p of group.pages) {
      lines.push(`- [${p.title}](${SITE}${p.path}): ${p.summary}`);
    }
    lines.push('');
  }
  lines.push('## Optional', '');
  for (const p of EXTRA_PAGES) {
    lines.push(`- [${p.title}](${SITE}${p.path}): ${p.summary}`);
  }
  lines.push('');
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
