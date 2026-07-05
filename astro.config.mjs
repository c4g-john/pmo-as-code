// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { ORDER } from './src/data/nav';
import { lastModified } from './src/lib/dates';

// Fully static output, real flat paths, trailing slashes to match the
// pre-rewrite URL shape (/principles/ etc.) so no inbound link changes depth.
export default defineConfig({
  site: 'https://pmoascode.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      serialize(item) {
        // lastmod from the same git-derived date the page footer shows
        const path = new URL(item.url).pathname;
        const page = ORDER.find((p) => p.path === path);
        if (page) item.lastmod = lastModified(page.srcPath);
        return item;
      },
    }),
  ],
});
