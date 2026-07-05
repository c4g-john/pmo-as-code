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
  }),
});

export const collections = { pages };
