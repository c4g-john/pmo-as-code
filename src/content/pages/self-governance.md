---
title: Runs on itself
description: "The portfolio that builds PMO as Code is run as PMO as Code, in public. Live dashboards, governing documents, and observable gates, each one link away from this page."
path: /self-governance/
anchors:
  - ["portfolio", "The live portfolio"]
  - ["documents", "The governing documents"]
  - ["gates", "The gates, observable"]
  - ["honest", "The colors are derived"]
---

<div class="eyebrow">Start here</div>

# This standard governs its own development.

<p class="lead">The portfolio that builds PMO as Code is run as PMO as Code, in public. Every claim on this page is a link to the live artifact, so you can check rather than trust.</p>

<section id="portfolio">

## The live portfolio.

Three deployments derive their status from documents right now. The badges below are fetched live from each one; whatever they say is the current derivation, and this page has no say in it.

<div class="grid-2">
  <div class="card"><div class="card-title" style="display:flex;align-items:center;gap:10px;">The meta-portfolio <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Fpmo-as-code-pmo%2Fbadge.json" alt="live derived status" width="110" height="18" style="width:auto;height:18px;"></div><div class="card-body">Five projects govern the standard, the engine, the launch, and operations. <a href="https://c4g-john.github.io/pmo-as-code-pmo/" target="_blank" rel="noopener">The dashboard</a> and each project page: <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-001-GOV.html" target="_blank" rel="noopener">GOV</a> · <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-002-ENG.html" target="_blank" rel="noopener">ENG</a> · <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-003-STD.html" target="_blank" rel="noopener">STD</a> · <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-004-ADO.html" target="_blank" rel="noopener">ADO</a> · <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-005-OPS.html" target="_blank" rel="noopener">OPS</a></div></div>
  <div class="card"><div class="card-title" style="display:flex;align-items:center;gap:10px;">Refuge for Humans <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Frefuge-for-humans-pmo%2Fbadge.json" alt="live derived status" width="110" height="18" style="width:auto;height:18px;"></div><div class="card-body">A real project, converted from a Word BRD and governed end to end. <a href="https://c4g-john.github.io/refuge-for-humans-pmo/" target="_blank" rel="noopener">Its live dashboard</a> and <a href="/case-study/">the case study</a>.</div></div>
</div>

<div class="card" style="margin-top:11px;"><div class="card-title" style="display:flex;align-items:center;gap:10px;">The reference deployment <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Fpmo-as-code-pipeline%2Fbadge.json" alt="live derived status" width="110" height="18" style="width:auto;height:18px;"></div><div class="card-body">Sample projects (the fictional Aurora set, disclosed as fiction) exercising every document kind. <a href="https://c4g-john.github.io/pmo-as-code-pipeline/" target="_blank" rel="noopener">Its dashboard</a> runs the same derivation as the real ones.</div></div>

</section>

<section id="documents">

## The governing documents.

The dashboards above are compiled from Markdown in a public repository. The sources are one click deep:

<div class="grid-2">
  <div class="card"><div class="card-title"><a href="https://github.com/c4g-john/pmo-as-code-pmo/tree/main/documents" target="_blank" rel="noopener">documents/ →</a></div><div class="card-body">Charters, requirements, risk registers, test cases, and status reports for all five projects, each validated on every change.</div></div>
  <div class="card"><div class="card-title"><a href="https://github.com/c4g-john/pmo-as-code-pmo/blob/main/projects.yaml" target="_blank" rel="noopener">projects.yaml →</a></div><div class="card-body">The project registry, generated from the anchor documents. A CI check fails if it goes stale.</div></div>
  <div class="card"><div class="card-title"><a href="https://github.com/c4g-john/pmo-as-code-pmo/blob/main/STATUS.md" target="_blank" rel="noopener">STATUS.md →</a></div><div class="card-body">The derived status summary committed alongside the sources, with its own staleness gate.</div></div>
  <div class="card"><div class="card-title"><a href="https://github.com/c4g-john/pmo-as-code-pmo/blob/main/documents/PRJ-005-OPS/runbook.md" target="_blank" rel="noopener">The operations runbook →</a></div><div class="card-body">Recurring procedures as a governed document: numbered steps, changed only by pull request.</div></div>
</div>

</section>

<section id="gates">

## The gates, observable.

Every document change to the portfolio passes the same gate this site tells you to build, and the runs are public. <a href="https://github.com/c4g-john/pmo-as-code-pmo/actions" target="_blank" rel="noopener">The Actions history</a> shows every audit; branch protection blocks a merge whose checks fail, whoever authored it.

One complete chain, followable end to end: the scope for this site's rewrite was approved by merging <a href="https://github.com/c4g-john/pmo-as-code-pmo/pull/93" target="_blank" rel="noopener">a documents pull request</a>, the merge scaffolded <a href="https://github.com/c4g-john/pmo-as-code/issues/39" target="_blank" rel="noopener">the delivery stories</a> within seconds, <a href="https://github.com/c4g-john/pmo-as-code/pull/40" target="_blank" rel="noopener">the delivery pull request</a> closed the stories on merge, and the features closed themselves when their last story did.

</section>

<section id="honest">

## The colors are derived.

Whatever color the checks derive at build time is the color the dashboards show. A project lead can flag a concern and pull a color down; nothing anyone types can turn a failing derivation green. If a project page shows amber when you open it, that is the state of the checks, published anyway.

The rules of that derivation have their own explainer: <a href="/principles/derived-status/">derived status over self-reported status</a>.

</section>
