# PMO as Code

A documentation and framework site for **PMO as Code** — the practice of defining a portfolio's governance, structure, and operating model as declarative, version-controlled files, so status, roadmaps, risks, and decisions are *generated from a single source of truth* instead of hand-maintained in slides and spreadsheets.

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

The site is a single self-contained `index.html` (vanilla JS, no build step). Serve it with any static file server:

```bash
python3 -m http.server 3131
# then open http://localhost:3131
```

## Site structure

Hash-based SPA covering: Home · Why PMO as Code · The Manifesto (+ Automation & Audit, Traceability deep-dives) · The Rosetta Stone · Core Concepts · Quickstart · Guides · Reference · Integrations · Profiles · Adoption & Maturity · vs Traditional PPM · FAQ.

## Roadmap

- [x] Full content across all 13 pages
- [x] Copy-to-clipboard on code blocks, light/dark theme, mobile navigation
- [ ] Client-side search (⌘K)
- [ ] Provenance footer wired to live Git/CI metadata
