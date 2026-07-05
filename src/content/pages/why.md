---
title: Why PMO as Code
description: "Why the PowerPoint-Excel-SharePoint-email PMO fails: stale artifacts, self-reported RAG, unauditable approvals, a reporting layer that eats PM headcount. With the author's statement."
path: /why/
anchors:
  - ["status-quo", "The status quo"]
  - ["stale", "Stale on arrival"]
  - ["rag", "RAG fiction"]
  - ["audit", "Unauditable governance"]
  - ["tax", "The army-of-PMs tax"]
  - ["why-i-wrote", "Why I wrote this"]
  - ["next", "What comes next"]
authorStatement: true
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

<div id="why-i-wrote" style="margin:64px 0 8px;border-top:1px solid var(--border);padding-top:44px;">
  <div class="eyebrow">From the author</div>
  <h2 class="h2" style="margin-bottom:22px;">Why I wrote this.</h2>
  <div style="max-width:66ch;display:grid;gap:18px;font-size:16px;line-height:1.7;color:var(--ink-2);">
    <p style="margin:0;">My career began in development. I did some interesting things in the non-profit sector, corporate media, and then federal space. I eventually wound up kicking off a DevOps movement at the White House Communications Agency, before spending the next several years consulting with Fortune 500s around the world on their development practices. That path led me to a position over delivery modernization at Freddie Mac, and on to running my own company teaching others how to get on top of AI readiness.</p>
    <p style="margin:0;">Now, I lead the PMO at a Fortune 200, and I bring a lot of expectations with me.</p>
    <p style="margin:0;">In engineering, the truth always lives in the source. Every change is tested multiple times before it is deployed, and real-time monitoring shows the state of the whole as it truly is. Nobody ever has to ask the deployment how it feels about the way things are going. Stuff is either working or it isn't, and when done properly, the stuff not working never makes it out to the customer.</p>
    <p style="margin:0;">Project and portfolio management, on the other hand, have always been much more subjective. Numbers are usually collected by hand, entered into a Gantt chart or pointed to a backlog, and invariably make their way into some status deck to hand off to leadership. The insights that may be garnered are usually out of date by the time anyone reviews them, and inaccuracy is almost treated as a feature. Why show red when green is such a more calming color, right?</p>
    <p style="margin:0;">The automated development discipline I spent twenty years helping install around the world always seemed to stop just outside of the PMO's door. PMO as Code is an answer to that problem.</p>
    <p style="margin:0;">If you view documents as the source for the PMO system, a lot of engineering practices and parallels begin to apply. Document pipelines can test every structural change just like code is unit tested. Modern LLMs can judge whether a requirement actually serves the goal it claims to, just like infrastructure monitoring judges a service against its thresholds. Project status can be derived from core documents the way a binary is built from code. And reconciliation loops keep the delivery boards converged with the documents, the same way GitOps keeps a cluster converged with its manifests. When something drifts, the system notices before I do.</p>
    <p style="margin:0;">On my own portfolio, when an automation flags a project amber, the public dashboard says amber, and nobody gets to change it for a slide deck.</p>
    <p style="margin:0;">The world going AI native is what makes this approach an urgent need instead of merely the right way to do things. AI-assisted delivery moves faster than any hand-assembled report can describe, so the choice is a reporting layer that compiles in seconds or outdated insights that were overtaken by events before they even got manually updated.</p>
    <p style="margin:0;">Whether PMs will trade away their curated plans and polished decks for raw Git and Markdown is a question yet to be answered, but I'm providing the thoughts and tools necessary to get started for free right here, and all feedback is welcome. I'm keeping it all public and open: the tool and the standard are Apache 2.0, free to adopt if you choose.</p>
    <p style="margin:6px 0 0;font-style:italic;color:var(--ink);">John Tanner</p>
  </div>
</div>

<section id="next">

## What comes next

The principles name the five defaults behind the response, and the Rosetta Stone maps each problem to its as-code equivalent. The case study shows the whole approach against a real document set.

<div class="cta-row">
  <a class="btn-primary" href="/principles/">Read the principles →</a>
  <a class="btn-secondary" href="/rosetta/">The Rosetta Stone →</a>
  <a class="btn-secondary" href="/case-study/">The case study →</a>
</div>

</section>
