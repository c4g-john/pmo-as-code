// The news feed, generated from the same collection that renders /news/.
// Hand-rolled RSS 2.0: four fields per item, no dependency needed.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://pmoascode.com';

const esc = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export const GET: APIRoute = async () => {
  const entries = (await getCollection('news')).sort((a, b) =>
    b.data.date.localeCompare(a.data.date)
  );
  const items = entries
    .map((e) => {
      const url = `${SITE}/news/${e.id.replace(/\.md$/, '')}/`;
      const pub = new Date(`${e.data.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${esc(e.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${esc(e.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PMO as Code — news</title>
    <link>${SITE}/news/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Release-tied announcements for PMO as Code: dated, factual, artifacts linked.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
