---
title: Process as Code
description: "A process written in a wiki describes; a process written as automation executes. The PMO's recurring procedures become workflows that run, converge, and leave a record."
path: /as-code/process/
anchors:
  - ["gap", "The wiki gap"]
  - ["running", "Processes that run"]
  - ["limits", "What should stay written"]
---

<div class="eyebrow">The as-code family</div>

# Process as Code.

<p class="lead">A process written in a wiki describes; a process written as automation executes. Between the two sits every procedure that was documented once and drifted quietly ever since.</p>

<section id="gap">

## The wiki gap.

Most organizations document their processes and then operate from memory. The documented version and the operated version diverge, nobody notices because nothing checks, and the divergence surfaces during an incident or an audit.

Software delivery closed this gap by making the pipeline the process. Nobody consults a wiki page to remember how to release; the release process is a workflow, and running it is following it. The process cannot drift from its documentation because the automation is the documentation.

</section>

<section id="running">

## The PMO's processes can run.

The recurring procedures of portfolio governance turn out to be automatable in exactly the same way. Each of these operates today in the reference deployments:

<div class="grid-2">
  <div class="card"><div class="card-title">Document review</div><div class="card-body">Every changed document is validated on the pull request, and the whole traceability graph is checked before merge.</div></div>
  <div class="card"><div class="card-title">Scope intake</div><div class="card-body">When approved scope merges in the governance repo, the delivery boards are scaffolded within seconds, routed per project.</div></div>
  <div class="card"><div class="card-title">Progress roll-up</div><div class="card-body">When the last story under a feature closes, the feature closes itself, with the record on the issue.</div></div>
  <div class="card"><div class="card-title">Drift repair</div><div class="card-body">Reconciliation runs keep boards converged with documents, and a sentinel sweeps for stalled automation and opens findings on itself.</div></div>
</div>

</section>

<section id="limits">

## What should stay written.

Judgment-heavy procedures do not belong in a workflow file: how to run a steering conversation, when to escalate, what to do in a situation nobody predicted. The honest test is drift: if the written procedure and reality can diverge silently, encode the procedure; if a person must weigh the situation each time, write it down and govern the writing.

<div class="callout"><div class="card-title">The halfway house</div><div class="card-body">Procedures that need human hands can still live under the gate: a runbook as a governed document, with numbered steps, changed only by pull request. The steps stay human; the change control is code.</div></div>

</section>
