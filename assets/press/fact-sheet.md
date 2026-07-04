# PMO as Code — fact sheet

*As of 2026-07-04. Live sources linked; where a figure can change, trust the link.*

- **What it is:** PMO as Code — a vendor-neutral standard for running a PMO
  from version-controlled files: business documents are structured Markdown,
  validated like code on every change; requirements trace end to end; project
  status is derived from the documents, never self-reported.
- **One-liner:** "Unit testing for business documents."
- **The concept:** extends the Infrastructure-as-Code / DevOps playbook to the
  PMO — declared truth in Git, gates as admission control, derived status.
- **The tool:** docassert — stable 1.x (since 2026-07-04), SemVer-bound per
  STABILITY.md. Apache-2.0. Python 3.10–3.14.
  Install: `pipx install docassert` · `brew install c4g-john/tap/docassert`
- **The standard:** PMO as Code specification v0.8 (draft), 73-case
  conformance suite passed in CI.
- **Scope:** 21 document kinds, two check tiers (structural = blocking,
  AI semantic = advisory only), execution bridge to GitHub issues, derived
  dashboards.
- **Proof:** the project governs itself with its own tool —
  https://c4g-john.github.io/pmo-as-code-pmo/
- **Site:** https://pmoascode.com · **Code:** https://github.com/c4g-john/docassert
- **Who:** John Tanner, C4G Enterprises Inc. — https://linkedin.com/in/tannerjs
- **Press contact:** press@c4genterprises.com

Names: "PMO as Code" (the standard), lowercase "docassert" (the tool).
Assets in this kit are free to use when covering the project.
