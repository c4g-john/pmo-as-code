// Prose pages are Markdown with schema-validated frontmatter, rendered
// through src/pages/[...slug].astro. The schema is the gate: a page missing
// its description or title fails the build, not the reader.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().min(3),
    description: z.string().min(20).max(300),
    path: z.string().regex(/^\/[a-z0-9\-\/]*\/$/),
    anchors: z.array(z.tuple([z.string(), z.string()])).default([]),
    // The page hosting the author statement also carries the Person node.
    authorStatement: z.boolean().default(false),
  }),
});

// News entries: dated announcements tied to releases and milestones. The
// date is the dateline, a fact about the story, so it is typed here rather
// than derived. The feed at /rss.xml and the /news/ index render from this.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string().min(3),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    description: z.string().min(20).max(300),
  }),
});

export const collections = { pages, news };
