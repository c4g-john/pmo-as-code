import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderWhy() {
  return `<div>
    <div class="eyebrow">Why PMO as Code</div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">The problem, sharply drawn.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 36px;">Today's PMO runs on PowerPoint, Excel, SharePoint, and email. Every artifact is stale by the time anyone reads it, and the approval trail lives in inboxes.</p>

    <div class="thread-rail">

      <section class="thread-section" id="status-quo">
        <span class="thread-node"></span>
        <div class="eyebrow">The status quo</div>
        <h2 class="h2">Four tools, zero truth.</h2>
        <p class="body">A portfolio runs across PowerPoint decks, Excel spreadsheets, SharePoint wikis, and approval email chains. The four never agree, none is authoritative, and each is somebody's best guess at what was true last Thursday.</p>
        <div class="grid-2">
          <div class="card"><div class="card-title">PowerPoint</div><div class="card-body">Status decks updated weekly by a PM whose main job is finding numbers to put in the deck.</div></div>
          <div class="card"><div class="card-title">Excel</div><div class="card-body">RAID logs, budget trackers, roadmaps — each maintained by a different person with a different definition of "current."</div></div>
          <div class="card"><div class="card-title">SharePoint</div><div class="card-body">Charters, governance docs, templates — mostly the version from the last project, lightly renamed.</div></div>
          <div class="card"><div class="card-title">Email</div><div class="card-body">The approval chain. A thread where someone said "looks good" that is now impossible to find or audit.</div></div>
        </div>
      </section>

      <section class="thread-section" id="stale">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 1</div>
        <h2 class="h2">Stale on arrival.</h2>
        <p class="body">A deck takes hours to build. By the time it's distributed, the schedule has slipped, the budget number has changed, and the risk that was escalated yesterday isn't in it. The act of creating the artifact is the moment it becomes out of date.</p>
        <p class="body">The problem is structural, not procedural: hand-maintained artifacts can only ever reflect what someone knew at the moment they saved the file. There is no mechanism to keep them current because the data they summarize lives somewhere else entirely.</p>
        <div class="card" style="border-left:3px solid var(--bad);">
          <div class="card-title">The cost</div>
          <div class="card-body" style="margin-top:4px;">Decisions are made on stale data. Leaders optimize for the reality inside the deck, not the portfolio outside it. The gap between the two grows silently until something fails visibly.</div>
        </div>
      </section>

      <section class="thread-section" id="rag">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 2</div>
        <h2 class="h2">RAG is self-reported fiction.</h2>
        <p class="body">Every PM in the portfolio decides whether their project is green, amber, or red. The criteria are informal and the incentive is to stay green, so the dashboard stays green until something fails in public.</p>
        <p class="body">Amber means whatever the PM wants it to mean this week, and red requires a difficult conversation. The system is least likely to produce the one signal that matters.</p>
        <div class="card" style="border-left:3px solid var(--warn);">
          <div class="card-title">What derived status does instead</div>
          <div class="card-body" style="margin-top:4px;">Status is computed from the documents themselves: whether every requirement traces to a test, which risks are open and who owns them, whether the approved documents still pass their audits. Nobody picks amber; the checks do.</div>
        </div>
      </section>

      <section class="thread-section" id="governance">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 3</div>
        <h2 class="h2">Governance you can't audit.</h2>
        <p class="body">A stage gate is an email. Someone forwards a deck. Someone replies "approved." Three months later, no one can find the thread, no one agrees on what was actually approved, and there's no record of what conditions the approval was contingent on.</p>
        <p class="body">When an auditor or a postmortem asks "who approved this, and under what conditions?", the answer is "we think it was Dave, in an email, sometime in March." Auditors know the difference between a record and a guess.</p>
        <div class="card" style="border-left:3px solid var(--ok);">
          <div class="card-title">What policy as code does instead</div>
          <div class="card-body" style="margin-top:4px;">A gate is a CI check. It runs against defined criteria, passes or fails, and the result is a commit in the repository. The approval is a merged PR with a reviewer on record. The audit trail writes itself.</div>
        </div>
      </section>

      <section class="thread-section" id="army">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 4</div>
        <h2 class="h2">The army-of-PMs tax.</h2>
        <p class="body">In a mature portfolio, much of the PM headcount maintains the reporting layer above the projects: someone collects status from each lead, and someone else turns it into slides for a meeting about the slides. None of this is project delivery.</p>
        <p class="body">PMO as Code removes the collection step. Status is derived from the documents, so the reporting layer has nothing left to assemble, and the PM's job returns to running the project.</p>
        <div class="card" style="border-left:3px solid var(--accent);">
          <div class="card-title">The reallocation</div>
          <div class="card-body" style="margin-top:4px;">The time formerly spent on reporting moves to delivery. One update to the document, and everything downstream regenerates from it.</div>
        </div>
      </section>

    </div>

    <div style="margin-top:48px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">What comes next</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">The Manifesto names the five value-pairs behind the response. The Rosetta Stone maps each problem to its as-code equivalent. For what this looks like against a real document set, read the case study.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="#/manifesto">Read the manifesto →</a>
        <a class="btn-secondary" href="#/rosetta">The Rosetta Stone →</a>
        <a class="btn-secondary" href="#/case-study">The case study →</a>
      </div>
    </div>

    ${pageNavHtml('/why')}
    ${provenanceFooter('/why')}
  </div>`;
}
