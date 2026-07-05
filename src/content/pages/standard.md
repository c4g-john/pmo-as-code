---
title: The standard
description: "The normative specification behind PMO as Code: document model, grammars, link relations, check semantics, profiles, and derived status, versioned independently with a conformance suite."
path: /standard/
anchors:
  - ["covers", "What it specifies"]
  - ["versioning", "Versioning"]
  - ["conformance", "The conformance suite"]
  - ["implement", "Implementing it"]
---

<div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
  <span class="layer-badge" style="background:var(--l2);">2</span>
  <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
</div>

# The standard: a versioned, testable specification.

<p class="lead">PMO as Code is specified, versioned, and testable, so that implementing it never requires reading the reference implementation's source code. The current version is <a href="https://github.com/c4g-john/pmo-as-code-spec/blob/main/SPEC.md" target="_blank" rel="noopener">v0.8.1</a>, still marked draft while it hardens toward a 1.0 of its own.</p>

<section id="covers">

## What it specifies.

<div class="grid-2">
  <div class="card"><div class="card-title">The document model</div><div class="card-body">Frontmatter fields, required sections, and document lifecycle for every kind, from charter to benefits realization.</div></div>
  <div class="card"><div class="card-title">Identity and item grammars</div><div class="card-body">Project identifiers, document identifiers, and the item grammar that makes requirements, risks, and tests countable and linkable.</div></div>
  <div class="card"><div class="card-title">Typed link relations</div><div class="card-body">What traces may point at, what sequencing means, and which broken links block a merge.</div></div>
  <div class="card"><div class="card-title">Two-tier check semantics</div><div class="card-body">The normative line between deterministic structural checks, which block, and semantic AI checks, which only advise.</div></div>
  <div class="card"><div class="card-title">Profiles</div><div class="card-body">How named document-set expectations are declared, composed, and enforced.</div></div>
  <div class="card"><div class="card-title">Derived status</div><div class="card-body">The inputs a conforming implementation must derive RAG from, including risk appetite and the rule that reports lower colors and never raise them.</div></div>
</div>

</section>

<section id="versioning">

## Versioning.

The specification is versioned independently of any implementation. A breaking change to a grammar or to blocking semantics requires a major version bump, and changes land the way everything else in this ecosystem lands: a pull request against <a href="https://github.com/c4g-john/pmo-as-code-spec/blob/main/SPEC.md" target="_blank" rel="noopener">SPEC.md</a>, gated and recorded.

Hardening the standard to 1.0 is itself a chartered project in the public portfolio, with its own derived status: <a href="https://c4g-john.github.io/pmo-as-code-pmo/PRJ-003-STD.html" target="_blank" rel="noopener">PRJ-003-STD, live</a>.

</section>

<section id="conformance">

## The conformance suite.

The spec ships with 73 executable conformance cases across five categories (document, grammar, graph, profiles, registry), each pairing an input with the verdict a conforming implementation must produce. The reference implementation pins a spec version and verifies itself against that version's suite; <a href="https://pypi.org/project/docassert/" target="_blank" rel="noopener">docassert 1.x</a> currently pins v0.8.1.

<div class="callout"><div class="card-title">Why the suite matters</div><div class="card-body">"Implements PMO as Code" is a checkable claim, made against numbered cases, rather than a marketing sentence. An alternative implementation earns the same claim the same way.</div></div>

</section>

<section id="implement">

## Implementing it.

Read <a href="https://github.com/c4g-john/pmo-as-code-spec/blob/main/SPEC.md" target="_blank" rel="noopener">SPEC.md</a>, run your implementation against <a href="https://github.com/c4g-john/pmo-as-code-spec/tree/main/conformance" target="_blank" rel="noopener">the conformance suite</a>, and use the <a href="https://github.com/c4g-john/pmo-as-code-spec/tree/main/artifacts" target="_blank" rel="noopener">artifacts mirror</a> for the canonical templates. The spec is Apache 2.0; a conforming implementation owes nobody anything.

<div class="cta-row">
  <a class="btn-primary" href="https://github.com/c4g-john/pmo-as-code-spec" target="_blank" rel="noopener">The specification repo →</a>
  <a class="btn-secondary" href="/reference/">The 21 kinds in detail →</a>
</div>

</section>
