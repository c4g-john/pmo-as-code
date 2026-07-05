---
title: Documents as Code
description: "Technical writers proved documentation belongs in Git with CI. Business documents raise the stakes: they carry commitments, so validation has to reach past prose into structure."
path: /as-code/documents/
anchors:
  - ["movement", "The docs-as-code movement"]
  - ["business", "Business documents raise the stakes"]
  - ["grammar", "What structural validation takes"]
---

<div class="eyebrow">The as-code family</div>

# Documents as Code.

<p class="lead">Technical writers made this move a decade ago: documentation as plain text in version control, built and checked by the same CI as the product. Business documents are the harder, more valuable version of the same idea.</p>

<section id="movement">

## The docs-as-code movement.

Through the 2010s, documentation teams walked away from binary formats and CMS silos. Docs became Markdown next to the code, changes became pull requests, CI caught broken links and style violations, and the published site became a build output. Anne Gentle's <em>Docs Like Code</em> put a name on the practice in 2016, and large documentation platforms run this way today.

The movement proved that writing survives contact with engineering tooling, and that writers benefit from it: reviewable changes, real history, and a publish pipeline nobody operates by hand.

</section>

<section id="business">

## Business documents raise the stakes.

A tutorial that goes stale wastes a reader's afternoon. A business document that goes stale misleads a decision: charters carry objectives and spending authority, requirements carry commitments to build, risk registers carry known dangers and their owners, and approvals carry accountability.

That is why checking business documents means more than linting prose. Whether a sentence is well-formed matters less than whether the requirement it states traces to a business reason, is verified by a test, and still passes the criteria it was approved against.

</section>

<section id="grammar">

## What structural validation takes.

The reference approach gives every document kind a machine-checkable shape, so a validator can treat a charter the way a test suite treats a module.

<div class="grid-2">
  <div class="card"><div class="card-title">Frontmatter schema</div><div class="card-body">Identity, kind, project, status, and dates are declared fields with a schema, so a document missing its basics fails before anyone reads it.</div></div>
  <div class="card"><div class="card-title">Required sections</div><div class="card-body">Each kind names the sections it must contain. An empty risk register is a finding, and a charter with no scope section can't reach approved.</div></div>
  <div class="card"><div class="card-title">Typed items</div><div class="card-body">Requirements, risks, and tests are identified items with a grammar, so they can be counted, linked, and covered.</div></div>
  <div class="card"><div class="card-title">Link clauses</div><div class="card-body">Traces between items are typed and checked. A broken trace blocks the merge the way a broken import blocks a build.</div></div>
</div>

Judgment stays prose. The objective's wording, the mitigation's reasoning, and the lessons in a review are written by people; the grammar covers identity and claims so the machine can hold them steady.

<div class="cta-row">
  <a class="btn-primary" href="/concepts/">The document model →</a>
  <a class="btn-secondary" href="/reference/">All twenty-one kinds →</a>
</div>

</section>
