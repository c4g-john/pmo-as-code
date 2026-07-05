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

## Build defaults (decided 2026-07-05, for the rewrite)

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

## Current site (until the rewrite lands)

Pages are JS modules in `js/pages/`, prerendered to static HTML. After
editing any page module or `js/data.js`, run:

```bash
python3 scripts/prerender.py
```

and commit the regenerated HTML with your change. CI gates on `actionlint`
and `prerender` freshness; `main` is branch-protected and PRs auto-merge
when green.

## Verification habits

- Playwright (scratchpad venv) for full-page desktop and 375 px captures;
  no copy block may overflow its container.
- Link-check internal hrefs after structural changes; external links get
  HTTP-checked in outward-facing sweeps.
- The dashboards this site links to are live derived artifacts. Never
  screenshot-fake or hand-describe their state; capture or link the real
  thing.
