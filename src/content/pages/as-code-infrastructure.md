---
title: Infrastructure as Code
description: "The ancestor of the family: servers stopped being hand-built snowflakes and became declared state that tooling converges toward. PMO as Code borrows its posture wholesale."
path: /as-code/infrastructure/
anchors:
  - ["origin", "Where it came from"]
  - ["proved", "What it proved"]
  - ["borrowed", "What PMO as Code borrows"]
---

<div class="eyebrow">The as-code family</div>

# Infrastructure as Code.

<p class="lead">The ancestor. Before it, every server was a snowflake: hand-configured, undocumented, and impossible to rebuild with confidence. After it, infrastructure became declared state that tooling converges toward.</p>

<section id="origin">

## Where it came from.

CFEngine started automating server configuration in 1993. Puppet and Chef carried the idea through the 2000s, and once cloud providers exposed everything behind an API, Terraform generalized it in 2014: entire environments, from networks to DNS, declared in text files and applied by a tool. Kief Morris gave the practice its book in 2016, by which point it had stopped being a technique and become the default.

The operational change mattered more than the tools. Infrastructure changes started arriving as pull requests. A reviewer could see exactly what would change before it changed, and the applied environment could be checked against the declaration afterward.

</section>

<section id="proved">

## What it proved.

<div class="grid-2">
  <div class="card"><div class="card-title">Declared state beats remembered state</div><div class="card-body">A file that says what should exist outlives every engineer who knew what did exist.</div></div>
  <div class="card"><div class="card-title">Convergence beats correction</div><div class="card-body">Tooling that continuously pulls reality toward the declaration fixes drift without anyone noticing it first.</div></div>
  <div class="card"><div class="card-title">Reproducibility is a property, not a project</div><div class="card-body">If the environment is declared, rebuilding it is running the tool again.</div></div>
  <div class="card"><div class="card-title">Review works for operations</div><div class="card-body">The pull request turned out to be a better change-approval board than the change-approval board.</div></div>
</div>

</section>

<section id="borrowed">

## What PMO as Code borrows.

The posture, wholesale. The document set declares the portfolio the way Terraform files declare an environment. Dashboards and matrices are the applied state, rebuilt from the declaration on every change. Reconciliation loops keep the delivery boards converged with the documents, and staleness checks flag drift the moment a derived artifact falls behind its source.

<div class="callout"><div class="card-title">The one-line inheritance</div><div class="card-body">"Nobody SSHes into production to fix it by hand" becomes "nobody edits a status deck to fix the story by hand."</div></div>

</section>
