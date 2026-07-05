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

The site is a fully static [Astro](https://astro.build) build with zero
client-side JavaScript beyond one progressive-enhancement script:

```bash
npm ci
npm run dev     # dev server
npm run build   # dist/ + structural gate + Pagefind search index
```

## Project structure

```
src/content/pages/   # prose pages: Markdown with schema-gated frontmatter
src/pages/           # structural pages: .astro composing typed data records
src/data/            # the records (nav, document kinds, FAQ, profiles, …);
                     #   one record feeds every surface that states the fact
src/layouts/Base.astro   # the one shell: nav, JSON-LD, provenance footer
public/site.js       # theme, menu, copy buttons, search (site works without it)
scripts/check-dist.mjs   # postbuild gate: headings + JSON-LD on every page
```

To edit a page, edit its file under `src/`; the provenance footer on every
page links to it. To add a page, create it and register it in
`src/data/nav.ts` — the sidebar, prev/next rail, sitemap, and llms.txt all
derive from that one record. `dateModified` comes from git history at build
time; nothing about freshness is typed by hand.

© 2026 C4G Enterprises Inc. · Site content and code by John Tanner.
