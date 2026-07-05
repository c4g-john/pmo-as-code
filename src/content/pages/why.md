---
title: Why PMO as Code
description: "Why the PowerPoint-Excel-SharePoint-email PMO fails: stale artifacts, self-reported RAG, unauditable approvals, and a reporting layer that eats PM headcount."
path: /why/
anchors:
  - ["status-quo", "The status quo"]
  - ["stale", "Stale on arrival"]
  - ["rag", "RAG fiction"]
  - ["audit", "Unauditable governance"]
  - ["tax", "The army-of-PMs tax"]
  - ["next", "What comes next"]
---

<div class="eyebrow">Why PMO as Code</div>

# Why the current model fails.

<p class="lead">Today's PMO runs on PowerPoint, Excel, SharePoint, and email. Every artifact is stale by the time anyone reads it, and the approval trail lives in inboxes.</p>

<section id="status-quo">

## Four tools and no source of truth.

A portfolio runs across PowerPoint decks, Excel spreadsheets, SharePoint wikis, and approval email chains. The four never agree, none is authoritative, and each is somebody's best guess at what was true last Thursday.

<div class="grid-2">
  <div class="card"><div class="card-title">PowerPoint</div><div class="card-body">Status decks updated weekly by a PM whose main job is finding numbers to put in the deck.</div></div>
  <div class="card"><div class="card-title">Excel</div><div class="card-body">RAID logs, budget trackers, and roadmaps, each maintained by a different person with a different definition of current.</div></div>
  <div class="card"><div class="card-title">SharePoint</div><div class="card-body">Charters, governance docs, and templates, mostly the version from the last project, lightly renamed.</div></div>
  <div class="card"><div class="card-title">Email</div><div class="card-body">The approval chain lives here, in a thread where someone once said "looks good" and which nobody can find or audit now.</div></div>
</div>

</section>

<section id="stale">

## Problem 1: stale on arrival.

A deck takes hours to build. By the time it's distributed, the schedule has slipped, the budget number has changed, and the risk that was escalated yesterday isn't in it. The act of creating the artifact is the moment it becomes out of date.

The staleness is built into the architecture. A hand-maintained artifact can only reflect what its author knew at save time, and nothing keeps it current because the data it summarizes lives somewhere else entirely.

<div class="callout"><div class="card-title">The cost</div><div class="card-body">Decisions are made on stale data, leaders steer by the deck while the portfolio drifts elsewhere, and the gap grows until a failure surfaces on its own.</div></div>

</section>

<section id="rag">

## Problem 2: RAG is self-reported fiction.

Every PM in the portfolio decides whether their project is green, amber, or red. The criteria are informal and the incentive is to stay green, so the dashboard stays green until something fails in public.

Amber means whatever the PM wants it to mean this week, and red requires a difficult conversation. The system is least likely to produce the one signal that matters.

<div class="callout"><div class="card-title">What derived status does instead</div><div class="card-body">Status is computed from the documents themselves: whether every requirement traces to a test, which risks are open and who owns them, whether the approved documents still pass their audits, so the checks pick the color instead of a person.</div></div>

</section>

<section id="audit">

## Problem 3: governance you can't audit.

A stage gate amounts to an email in which someone forwards a deck and someone else replies "approved." Three months later, no one can find the thread, no one agrees on what was actually approved, and there's no record of what conditions the approval was contingent on.

When an auditor or a postmortem asks "who approved this, and under what conditions?", the answer is "we think it was Dave, in an email, sometime in March." Auditors know the difference between a record and a guess.

<div class="callout"><div class="card-title">What policy as code does instead</div><div class="card-body">A gate becomes a CI check that runs against defined criteria and records its result in the repository, and the approval becomes a merged pull request with a reviewer on record. The audit trail accumulates as a by-product of working.</div></div>

</section>

<section id="tax">

## Problem 4: the army-of-PMs tax.

In a mature portfolio, much of the PM headcount maintains the reporting layer above the projects. Someone collects status from each lead, and someone else turns it into slides for a meeting about the slides. None of this is project delivery.

PMO as Code removes the collection step. Status is derived from the documents, so the reporting layer has nothing left to assemble, and the PM's job returns to running the project.

<div class="callout"><div class="card-title">The reallocation</div><div class="card-body">The time formerly spent on reporting moves to delivery. One update to the document, and everything downstream regenerates from it.</div></div>

</section>

<section id="next">

## What comes next

The principles name the five defaults behind the response, and the Rosetta Stone maps each problem to its as-code equivalent. The case study shows the whole approach against a real document set.

<div class="cta-row">
  <a class="btn-primary" href="/principles/">Read the principles →</a>
  <a class="btn-secondary" href="/rosetta/">The Rosetta Stone →</a>
  <a class="btn-secondary" href="/case-study/">The case study →</a>
</div>

</section>
