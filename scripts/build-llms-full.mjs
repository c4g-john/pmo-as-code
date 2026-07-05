// llms-full.txt: the full-content companion to llms.txt, extracted from the
// built article bodies so it can never say something the site doesn't.
// Runs in postbuild, after check-dist and before Pagefind.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const routes = JSON.parse(readFileSync('dist/llms-routes.json', 'utf-8'));

function articleText(html) {
  const m = html.match(/<article[^>]*>(.*?)<\/article>/s);
  if (!m) return '';
  return m[1]
    .replace(/<script[^>]*>.*?<\/script>/gs, '')
    .replace(/<style[^>]*>.*?<\/style>/gs, '')
    .replace(/<(h2)[^>]*>/g, '\n\n## ')
    .replace(/<(h3)[^>]*>/g, '\n\n### ')
    .replace(/<(p|div|li|pre|section|footer)[^>]*>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const out = [
  '# PMO as Code (full content)',
  '',
  '> The complete text of every page on https://pmoascode.com, generated at',
  '> build time from the same HTML readers see. The index version is /llms.txt.',
  '',
];
for (const { title, path } of routes) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}index.html`;
  if (!existsSync(file)) continue;
  out.push('---', '', `# ${title}`, `URL: https://pmoascode.com${path}`, '', articleText(readFileSync(file, 'utf-8')), '');
}
writeFileSync('dist/llms-full.txt', out.join('\n'));
console.log(`llms-full.txt: ${routes.length} pages, ${(out.join('\n').length / 1024).toFixed(0)} KB`);
