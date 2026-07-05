---
title: The as-code family
description: "PMO as Code did not invent its pattern. Infrastructure, documentation, process, and policy each moved into version control first, and each proved a piece of the approach."
path: /as-code/
anchors:
  - ["pattern", "The shared pattern"]
  - ["tree", "The family"]
  - ["pmo", "Where PMO as Code sits"]
---

<div class="eyebrow">The as-code family</div>

# The pattern has a family tree.

<p class="lead">PMO as Code did not invent its pattern. It applies a discipline that infrastructure, documentation, process, and policy each adopted first, one practice at a time, over the last two decades.</p>

<section id="pattern">

## The shared pattern.

Every member of the family makes the same move: take a practice that lived in hand-work and tribal knowledge, and express it as plain-text files in version control. Four things follow from that one move.

<div class="grid-2">
  <div class="card"><div class="card-title">One source of truth</div><div class="card-body">The files are authoritative. Anything derived from them is a build output, and anything that contradicts them is drift.</div></div>
  <div class="card"><div class="card-title">Review before change</div><div class="card-body">Changes arrive as diffs, get reviewed as diffs, and merge with a named author and a timestamp.</div></div>
  <div class="card"><div class="card-title">Validation by machine</div><div class="card-body">Automation checks every change against the rules before it lands, so the standard is enforced rather than encouraged.</div></div>
  <div class="card"><div class="card-title">History for free</div><div class="card-body">Who changed what, when, and why stops being a records-management project. It is the commit log.</div></div>
</div>

</section>

<section id="tree">

## The family.

<div class="grid-2">
  <div class="card"><div class="card-title"><a href="/as-code/infrastructure/">Infrastructure as Code →</a></div><div class="card-body">The ancestor. Servers stopped being hand-built and became declared state that tooling converges toward. It proved the whole posture.</div></div>
  <div class="card"><div class="card-title"><a href="/as-code/documents/">Documents as Code →</a></div><div class="card-body">Technical writers moved documentation into Git and CI. Business documents raise the stakes: they carry commitments, so validation has to reach into structure.</div></div>
  <div class="card"><div class="card-title"><a href="/as-code/process/">Process as Code →</a></div><div class="card-body">A process written in a wiki describes; a process written as automation executes. The gap between the two is where procedures rot.</div></div>
  <div class="card"><div class="card-title"><a href="/as-code/policy/">Policy as Code →</a></div><div class="card-body">Rules that machines evaluate against every change. Branch protection is the version most teams already run without naming it.</div></div>
  <div class="card"><div class="card-title"><a href="/as-code/governance/">Governance as Code →</a></div><div class="card-body">The system around the rules: decision rights, recorded approvals, oversight loops, and exceptions with a trail.</div></div>
  <div class="card"><div class="card-title"><a href="/as-code/compliance/">Compliance as Code →</a></div><div class="card-body">Controls checked by machines, evidence accumulating as a by-product, audits that read the record instead of reconstructing it.</div></div>
</div>

GitOps deserves a mention alongside these: the practice of keeping a system converged with its declared sources through automated reconciliation loops. PMO as Code leans on it directly, since the delivery boards are reconciled against the documents the same way a cluster is reconciled against its manifests.

</section>

<section id="pmo">

## Where PMO as Code sits.

PMO as Code is the family pattern applied to project and portfolio management. The documents are the declared state, the audit is the validation, the merge is the recorded decision, and status is derived rather than reported. Each member of the family contributed a proven piece, and the contribution pages that follow name exactly which piece came from where.

<div class="cta-row">
  <a class="btn-primary" href="/as-code/infrastructure/">Start with the ancestor →</a>
  <a class="btn-secondary" href="/principles/">The five defaults →</a>
</div>

</section>
