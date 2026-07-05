// Build-time route manifest consumed by scripts/build-llms-full.mjs, so the
// postbuild script derives from the same nav record as everything else.
import type { APIRoute } from 'astro';
import { ORDER } from '../data/nav';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(ORDER.map((p) => ({ title: p.title, path: p.path }))), {
    headers: { 'Content-Type': 'application/json' },
  });
