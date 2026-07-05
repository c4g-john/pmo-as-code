---
title: Policy as Code
description: "A rule that runs is a rule that holds. Branch protection is the policy engine most teams already use, and in PMO as Code it makes governance criteria binding at merge time."
path: /as-code/policy/
anchors:
  - ["rule", "A rule that runs"]
  - ["everyday", "The everyday version"]
  - ["governance", "Policy in the PMO"]
---

<div class="eyebrow">The as-code family</div>

# Policy as Code.

<p class="lead">A rule that runs is a rule that holds. Policy as code takes rules out of the binder and evaluates them by machine against every change, before the change lands.</p>

<section id="rule">

## A rule that runs.

Infrastructure teams got here first, again: tools like Open Policy Agent and HashiCorp Sentinel evaluate declared rules against every proposed change, so "storage must be encrypted" stops being an intention in a standards document and becomes a check that fails the deployment.

The property that matters is binding-ness. A written policy depends on everyone remembering it under deadline pressure. An executed policy is simply in the way of any change that violates it, uniformly, including changes made by its authors.

</section>

<section id="everyday">

## The everyday version: branch protection.

Branch protection is policy as code without the branding, and most engineering teams already run it: these checks must pass, this many reviewers must approve, this branch cannot be pushed to directly. The rules are configuration, they are evaluated on every merge, and the enforcement leaves a record.

Every repository in the PMO as Code fleet runs under it, including the one that publishes this page.

</section>

<section id="governance">

## Policy in the PMO.

Governance criteria become binding the same way:

<div class="grid-2">
  <div class="card"><div class="card-title">The quality bar</div><div class="card-body">A document that fails validation, or breaks a requirements trace, cannot merge. The standard is enforced by the repository, whoever the author is.</div></div>
  <div class="card"><div class="card-title">Required signatures</div><div class="card-body">Where regulation demands a named human approval, a required reviewer models it, and the sign-off lands in the merge record.</div></div>
  <div class="card"><div class="card-title">Scope discipline</div><div class="card-body">Delivery work traces to approved scope, and a guard flags work that arrives without it.</div></div>
  <div class="card"><div class="card-title">Recorded exceptions</div><div class="card-body">Real policy needs an escape hatch that leaves a trail: an exception label a human applies deliberately, visible in the history, never applied by automation.</div></div>
</div>

<div class="cta-row">
  <a class="btn-primary" href="/principles/automation/">How gates become policy →</a>
  <a class="btn-secondary" href="/integrations/">The enforcement wiring →</a>
</div>

</section>
