// Postbuild gate: every built page must have exactly one h1, a heading
// hierarchy that never skips a level, and JSON-LD that parses. Runs before
// Pagefind indexing; a structural regression fails the build.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'pagefind') continue;
      walk(p);
    } else if (name.endsWith('.html')) pages.push(p);
  }
})('dist');

const failures = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf-8');
  if (html.includes('http-equiv="refresh"')) continue; // redirect stubs, no article

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1s = levels.filter((l) => l === 1).length;
  if (h1s !== 1) failures.push(`${page}: ${h1s} h1 elements`);
  let prev = 0;
  for (const l of levels) {
    if (l > prev + 1 && prev !== 0) {
      failures.push(`${page}: heading level skips h${prev} -> h${l}`);
      break;
    }
    prev = l;
  }

  for (const m of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  )) {
    try {
      const ld = JSON.parse(m[1].replaceAll('<\\/', '</'));
      const graph = ld['@graph'] ?? [ld];
      for (const node of graph) {
        if (!node['@type']) failures.push(`${page}: JSON-LD node missing @type`);
      }
    } catch (e) {
      failures.push(`${page}: JSON-LD does not parse (${e.message})`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`check-dist: ${pages.length} pages, headings + JSON-LD clean`);
