# CLAUDE.md — pmoascode.com

## Read before touching any page content

1. **[website_content_guidelines.md](website_content_guidelines.md)** — how
   content is authored, structured, and delivered (Markdown authoring,
   semantic HTML, JSON-LD, llms.txt, crawler policy). Apply its per-page
   build checklist to every page you create or edit.
2. **human-authorship-standard.md** (repo root, gitignored; ask John if it is
   missing) — the prose voice standard. Hard rules include zero em dashes and
   a one-contrast-per-page budget. Scan your own copy against it before
   committing.
3. **Never lie to the reader.** No fabricated numbers, customers, or quotes.
   The one fictional sample project (Aurora) is disclosed as fiction wherever
   it appears. Reader-facing claims must trace to a shipped artifact.

## Build defaults

- **Framework: Astro.** Prose pages are plain Markdown with schema-validated
  frontmatter (content collections). Repeatable content (document kinds,
  profiles, proof links, fact-sheet entries) lives in data collections, one
  record feeding the page, JSON-LD, sitemap, and llms.txt together.
- **Rendering: fully static** (`output: 'static'`). Zero client-side
  JavaScript by default; an interactive island needs a stated reason in the
  PR. Primary content must exist in the built HTML.
- **No MDX.** A page needing a component gets a layout or template partial,
  not inline JSX in prose. (Deliberately stricter than the guidelines.)
- **No CMS.** Content is files in this repo, gated by pull request, same as
  every other PMO as Code artifact.
- **URLs are real flat paths** (`/principles/`, not `#/principles`). Any URL
  that moves gets a redirect stub and keeps its inbound links working.
- **Dates are derived, not typed.** `dateModified` comes from git history at
  build time; JSON-LD is generated from the same records that render the
  page. Hand-maintained freshness metadata is a lie generator.
- **llms.txt and sitemap.xml are build outputs**, generated from the content
  collections. Never hand-edit either.

## Working on the site

- `npm run build` builds to `dist/` and then runs the dist gate
  (`scripts/check-dist.mjs`: one h1 per page, no skipped heading levels,
  parsable JSON-LD) followed by Pagefind indexing. `npm run dev` for the
  dev server.
- Prose pages live in `src/content/pages/*.md` (schema-gated frontmatter);
  structural pages are `.astro` files composing typed records from
  `src/data/*.ts`. Nav, prev/next, provenance footers, and llms.txt all
  derive from `src/data/nav.ts` — add a page there or it does not exist.
- The one client script is `public/site.js` (theme, menu, copy buttons,
  search dialog); everything must read fine without it.
- CI gates on `actionlint` and `build`; `main` is branch-protected and PRs
  auto-merge when green. Deploys go through `.github/workflows/deploy.yml`
  (Pages artifact deploy with the fleet's jittered second attempt and the
  `deploy retry` follower).

## Verification habits

- Playwright (scratchpad venv) for full-page desktop and 375 px captures;
  no copy block may overflow its container.
- Link-check internal hrefs after structural changes; external links get
  HTTP-checked in outward-facing sweeps.
- The dashboards this site links to are live derived artifacts. Never
  screenshot-fake or hand-describe their state; capture or link the real
  thing.
