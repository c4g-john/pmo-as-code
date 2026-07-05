---
title: Governance as Code
description: "Policy is the rules; governance is the system around them. Decision rights, recorded approvals, oversight loops, and exceptions with a trail, all encoded and enforced."
path: /as-code/governance/
anchors:
  - ["beyond", "Beyond the rules"]
  - ["encoded", "The operating model, encoded"]
  - ["human", "What stays human"]
---

<div class="eyebrow">The as-code family</div>

# Governance as Code.

<p class="lead">Policy is the rules. Governance is the system around them: who decides, how decisions are recorded, how oversight happens, and what becomes of exceptions. That system can be encoded too.</p>

<section id="beyond">

## Beyond the rules.

Platform teams reached this layer after policy as code proved itself. A single rule that blocks an unencrypted bucket is policy; the account-vending machinery, the org-wide guardrails, the review boards replaced by codified escalation paths, all of that is governance expressed as configuration rather than as a committee's habits.

The practical difference shows up in questions. Policy answers "is this change allowed?" Governance answers "who was allowed to decide that, where is the decision recorded, and who is watching the watchers?"

</section>

<section id="encoded">

## The operating model, encoded.

A PMO is mostly governance, which is why this member of the family maps so directly. Each element of the operating model has an encoded form running in the reference deployments:

<div class="grid-2">
  <div class="card"><div class="card-title">Decision rights</div><div class="card-body">Who may approve what is branch protection configuration: required reviewers on the paths they own. The org chart stops being an argument.</div></div>
  <div class="card"><div class="card-title">The record of decisions</div><div class="card-body">A merged pull request is the minutes: who approved, when, exactly what changed, and which version of the criteria it was judged against.</div></div>
  <div class="card"><div class="card-title">Lifecycle enforcement</div><div class="card-body">A document moves draft to proposed to approved, and the checks tighten as it does. Approval is refused mechanically when criteria are not measurable, whoever asks.</div></div>
  <div class="card"><div class="card-title">Oversight loops</div><div class="card-body">Staleness gates, drift detectors, and a sentinel that opens findings on the automation itself, so the oversight layer is itself overseen.</div></div>
</div>

Exceptions complete the model. A governed exception carries a label a person applied deliberately, visible in history, never applied by automation, so deviating from the rule is possible and remembering the deviation is guaranteed.

</section>

<section id="human">

## What stays human.

The decisions. Code carries the record, the enforcement, and the escalation path; it does not decide whether the business case is sound or the risk is worth accepting. Governance as code removes the clerical layer between a decision-maker and a trustworthy record, and leaves the judgment where it belongs.

<div class="cta-row">
  <a class="btn-primary" href="/as-code/policy/">Policy as Code →</a>
  <a class="btn-secondary" href="/self-governance/">Watch it govern this project →</a>
</div>

</section>
