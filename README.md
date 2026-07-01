# PMO as Code

A documentation and framework site for **PMO as Code**, the practice of defining a portfolio's governance, structure, and operating model as declarative, version-controlled files, so status, roadmaps, risks, and decisions are *generated from a single source of truth* instead of hand-maintained in slides and spreadsheets.

It takes the Infrastructure-as-Code / GitOps playbook and points it at the PMO.

The site is intentionally a **running instance** of the idea it describes: content authored as structured data, rendered by a single build, every page traceable to its source.

## The three-layer model

| Layer | What it is | Owned by |
|---|---|---|
| **1. The Manifesto** | Five value-pairs. The philosophy. | No one |
| **2. The Reference Approach** | An opinionated implementation: object model, conventions, schema | This project |
| **3. Profiles** | Named bundles others compose or fork (regulated-industry, lean-startup, agile-portfolio) | Community |

## The object model

Modeled Kubernetes-style. Ten kinds — `Portfolio`, `Program`, `Project`, `Charter`, `Milestone`, `RAID`, `Decision`, `Policy`, `Status`, `EventLog` — sharing one envelope:

```yaml
apiVersion: pmo/v1
kind: Project
metadata:
  id: proj-aurora
  portfolio: digital-transformation
spec:
  charter:
    objective: Cut customer onboarding from 14 days to 2
    successCriteria: [onboarding-p50 < 48h, csat > 4.5]
    sponsor: jordan.lee
  budget: { approved: 1200000, currency: USD }
  milestones:
    - { id: m1, name: MVP, due: 2026-09-30 }
status:        # GENERATED — never typed by hand
  health: derived
  source: jira://CUST-PLATFORM
```

The `spec` is authored. The `status` block is always **derived** from real signals, never typed by hand.

## Running locally

The site is plain HTML + CSS + native ES modules — **no build step**. Serve the
folder with any static file server (ES modules need HTTP, not `file://`):

```bash
python3 -m http.server 3131
# then open http://localhost:3131
```

## Project structure

Hash-based SPA, split into discrete files for maintainability:

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
```

To edit a page, open its file in `js/pages/`. To add a page: create the module,
add its route to `js/router.js`, and add nav/anchors in `js/data.js`.

Pages covered: Home · Why · The Manifesto (+ Automation & Audit, Traceability) ·
Rosetta Stone · Core Concepts · Quickstart · Guides · Reference · Integrations ·
Profiles · Adoption & Maturity · vs Traditional PPM · FAQ.

## Roadmap

- [x] Full content across all 13 pages
- [x] Copy-to-clipboard on code blocks, light/dark theme, mobile navigation
- [ ] Client-side search (⌘K)
- [ ] Provenance footer wired to live Git/CI metadata
