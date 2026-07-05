---
title: Adoption & Maturity
description: "A staged path from your first validated document to a fully traceable set: crawl takes an afternoon, walk adds the gate, run turns on cross-document consistency."
path: /adoption/
anchors:
  - ["crawl", "Stage 1 · Crawl"]
  - ["walk", "Stage 2 · Walk"]
  - ["run", "Stage 3 · Run"]
---

<div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
  <span class="layer-badge" style="background:var(--l3);">3</span>
  <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 3 · Profiles</span>
</div>

# Adoption & maturity model.

<p class="lead">A staged path from your first validated document to a fully traceable set, where each stage delivers value on its own.</p>

Crawl takes an afternoon, walk adds the gate on every pull request, and run turns on cross-document consistency across the whole set.

<section id="crawl">

## Stage 1 · Crawl: one document, validated.

Pick one document. Author `documents/PRJ-001-AUR/charter.md`, covering the frontmatter and the required sections. Run `docassert validate` locally, and you have a versioned, schema-checked document in a place with history.

<div class="grid-2">
  <div class="card"><div class="card-title">What you get</div><div class="card-body">A versioned document, structural validation you can run in one command, and a Git history of every change, which retires the question of which version of the charter is current.</div></div>
  <div class="card"><div class="card-title">What you skip</div><div class="card-body">CI, cross-document consistency, and the AI layer, all optional at this stage, while you build the habit of truth-in-Git before automating on top of it.</div></div>
</div>

<p class="mono" style="font-size:12px;color:var(--muted);margin-top:14px;">Checklist: charter.md ✓ · docassert validate ✓</p>

</section>

<section id="walk">

## Stage 2 · Walk: gated on every pull request.

Put `docassert validate` in a GitHub Actions workflow and turn on branch protection. Add a few more kinds, such as a BRD and a PRD, and a document that misses the standard can no longer merge, with the reasons posted on the PR.

<div class="grid-2">
  <div class="card"><div class="card-title">What you get</div><div class="card-body">A binding gate, an audit result on every pull request, and more document kinds under the same standard. The PMO begins to operate the way an engineering team does.</div></div>
  <div class="card"><div class="card-title">Typical timeline</div><div class="card-body">About a day to wire the Action and require the check on main. Most of the effort is agreeing the criteria with stakeholders.</div></div>
</div>

<p class="mono" style="font-size:12px;color:var(--muted);margin-top:14px;">Checklist: audit.yml ✓ · branch protection ✓ · 3+ kinds ✓</p>

</section>

<section id="run">

## Stage 3 · Run: the full set, with consistency enforced.

Every document kind in Git, with the cross-document consistency job enforcing traceability, the AI advisory layer on, and the RTM generated on every change. Requirements trace end to end, broken links block the merge, and the matrix regenerates on every change.

<div class="grid-2">
  <div class="card"><div class="card-title">What you get</div><div class="card-body">Every requirement traces to a test, broken links block, the AI flags weak links for review, and the traceability matrix stays current without anyone maintaining it.</div></div>
  <div class="card"><div class="card-title">The run claim</div><div class="card-body">At run, you can answer "which requirements have no test?" in seconds from the graph, without calling anyone or reading a deck.</div></div>
</div>

<p class="mono" style="font-size:12px;color:var(--muted);margin-top:14px;">Checklist: consistency required ✓ · AI advisory on ✓ · RTM generated ✓</p>

</section>
