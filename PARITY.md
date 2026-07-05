# Rewrite parity record (ADO-PR-010 / ADO-AC-011)

Every page migrated from the JS-module site to the Astro build, with each
factual claim kept, corrected, or retired. "Kept verbatim" means the prose
carried over unchanged apart from hash links becoming real paths.

| Page | Disposition | Corrections made during migration |
|---|---|---|
| Home | Kept verbatim | none |
| Why | Kept verbatim | none |
| Case study | Kept verbatim | none |
| Principles | Kept verbatim (incl. the signed author statement, untouched) | none |
| Principles / Automation | Kept | eyebrow label read "Layer 1 · Manifesto · Explainer 01" after the principles rename; now "Principles" |
| Principles / Traceability | Kept | same stale "Manifesto" eyebrow corrected |
| Rosetta Stone | Kept verbatim (rows now a typed data record) | "Click any row" became "Open any row" (rows are native disclosure elements now) |
| Core Concepts | Kept (kind cards now render from the shared kinds record) | none |
| Quickstart | Kept verbatim | none |
| Quickstart with Claude Code | Kept verbatim (prompts now data constants) | none |
| Guides | Kept verbatim | none |
| Reference | Kept (kinds now a typed data record shared with Concepts) | the `project` kind row rendered the literal text "undefined" for its sections on the live site (field was missing when the row was added); now "Overview · Scope". The shared-shape sample said "one of the 19 below"; now 21 |
| Integrations | Kept verbatim | none |
| Profiles | Kept (profiles now a typed data record) | the page said "Three profiles live in the reference library today" while listing four; now four |
| Adoption & Maturity | Kept verbatim | none |
| vs Traditional PPM | Kept verbatim (rows now a typed data record) | none |
| FAQ | Kept verbatim (entries extracted programmatically from the old source) | none |
| Press & share kit | Kept verbatim (ported mechanically from the old source) | none |
| 404 | Rewritten (old 404 was the SPA shell) | n/a |

Retired claims: none. No numeric or factual claim was removed in migration.

Prose check: the migrated sources pass the Human Authorship Standard tells
scan (banned vocabulary, negation-pivot constructions) with zero hits.
Dashes inside CLI output samples and data names are content, not prose.

Single-source records introduced (one record now feeds every surface that
states the fact): the five defaults (home + principles), the 21 document
kinds (reference + concepts), profiles, comparison rows, FAQ entries,
Rosetta rows, nav/page summaries (sidebar + prev-next + llms.txt).
