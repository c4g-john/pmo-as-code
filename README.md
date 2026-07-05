# PMO as Code

The documentation site for **PMO as Code**, the standard whose one-liner is:
**project status is a build artifact.** Business documents live in Git as
structured Markdown, every change is tested and gated before it merges, and
the pipeline compiles the documents into dashboards, roadmaps, and RAG status.
Nobody types a status anywhere. It is the Infrastructure-as-Code / DevOps
playbook, pointed at the PMO.

**Live site: [pmoascode.com](https://pmoascode.com)**

## The stack this site documents

| Layer | Where it lives |
|---|---|
| **The Principles** — five defaults, the philosophy | [pmoascode.com/principles](https://pmoascode.com/principles/) |
| **The specification** — document model, item grammar, checks, conformance suite | [pmo-as-code-spec](https://github.com/c4g-john/pmo-as-code-spec) |
| **The reference implementation** — `docassert` (stable 1.x, [SemVer-bound](https://github.com/c4g-john/docassert/blob/main/STABILITY.md)) | [docassert](https://github.com/c4g-john/docassert) · `pip install docassert` |
| **Delivery profiles** — lean-startup, agile-delivery, regulated-industry, operations | shipped inside docassert · [pmoascode.com/profiles](https://pmoascode.com/profiles/) |

Twenty-one document kinds (charter → benefits realization, plus the `project`
anchor), two tiers of checks (deterministic structural checks that gate a
merge; AI-graded semantic checks that only advise), an execution bridge to
GitHub issues, and derived dashboards.

## Proof it runs on itself

- **The portfolio that governs PMO as Code** is run as PMO as Code:
  [pmo-as-code-pmo](https://github.com/c4g-john/pmo-as-code-pmo) · [live derived dashboard](https://c4g-john.github.io/pmo-as-code-pmo/).
- **A real project** converted from a Word BRD and governed end to end:
  [refuge-for-humans-pmo](https://github.com/c4g-john/refuge-for-humans-pmo) — the site's [case study](https://pmoascode.com/case-study/).
- **A reference deployment** with sample projects: [pmo-as-code-pipeline](https://github.com/c4g-john/pmo-as-code-pipeline).
- **A starter template**: [pmo-as-code-template](https://github.com/c4g-john/pmo-as-code-template).

Content rule: **never lie to the reader.** No fabricated numbers, no invented
customers; the one fictional sample project (Aurora) is disclosed as such
wherever it appears.

## Running locally

Plain HTML + CSS + native ES modules. Serve the folder with any static file
server (ES modules need HTTP, not `file://`):

```bash
python3 -m http.server 3131
# then open http://localhost:3131
```

## Project structure

Hash-based SPA, prerendered to static HTML per route for crawlers and no-JS
readers:

```
index.html          # shell: <link> styles.css + <script type="module"> js/app.js
styles.css          # all styles (design tokens, components, responsive)
js/
  app.js            # entry: state wiring, render(), events, boot
  router.js         # getPageHtml(route) → the right page renderer
  data.js           # NAV, PAGE_META, ANCHORS, ROSETTA_ROWS, shared constants
  state.js          # the mutable app state object
  ui.js             # shared render helpers (cb, pageNav, sidebar, on-this-page)
  pages/            # one module per page (home, concepts, reference, …)
scripts/prerender.py  # renders every route to <route>/index.html + sitemap
```

To edit a page: change its module in `js/pages/`, then **run
`python3 scripts/prerender.py`** so the static copies and sitemap stay in
sync. To add a page: create the module, add its route to `js/router.js`,
nav/anchors in `js/data.js`, and prerender.

© 2026 C4G Enterprises Inc. · Site content and code by John Tanner.
