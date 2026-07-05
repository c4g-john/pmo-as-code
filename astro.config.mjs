// @ts-check
import { defineConfig } from 'astro/config';

// Fully static output, real flat paths, trailing slashes to match the
// pre-rewrite URL shape (/principles/ etc.) so no inbound link changes depth.
export default defineConfig({
  site: 'https://pmoascode.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
});
