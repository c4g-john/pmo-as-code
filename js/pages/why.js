import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderWhy() {
  return `<div>
    <div class="eyebrow">Why PMO as Code</div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">The problem, sharply drawn.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 36px;">Today's PMO runs on PowerPoint, Excel, SharePoint, and email. Every artifact is stale by the time anyone reads it. This is not a tooling problem. It's an architectural one.</p>

    <div class="thread-rail">

      <section class="thread-section" id="status-quo">
        <span class="thread-node"></span>
        <div class="eyebrow">The status quo</div>
        <h2 class="h2">Four tools, zero truth.</h2>
        <p class="body">A portfolio runs across PowerPoint decks, Excel spreadsheets, SharePoint wikis, and approval email chains. None of them talk to each other. None of them are authoritative. All of them are someone's best guess at what was true last Thursday.</p>
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
        <p class="body">The problem is structural, not procedural. Hand-maintained artifacts can only ever reflect what someone knew at the moment they saved the file. There is no mechanism to keep them current because the data they summarize lives somewhere else entirely.</p>
        <div class="card" style="border-left:3px solid var(--bad);">
          <div class="card-title">The cost</div>
          <div class="card-body" style="margin-top:4px;">Decisions are made on stale data. Leaders optimize for the reality inside the deck, not the portfolio outside it. The gap between the two grows silently until something fails visibly.</div>
        </div>
      </section>

      <section class="thread-section" id="rag">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 2</div>
        <h2 class="h2">RAG is self-reported fiction.</h2>
        <p class="body">Every PM in the portfolio decides whether their project is green, amber, or red. The criteria are informal. The incentive is to stay green. The result is a portfolio dashboard where everything is green until the moment something catastrophically fails.</p>
        <p class="body">Amber means whatever the PM wants it to mean this week. Red requires courage and often a difficult conversation. The signal that matters most — the honest one — is the one the system is least likely to produce.</p>
        <div class="card" style="border-left:3px solid var(--warn);">
          <div class="card-title">What derived status does instead</div>
          <div class="card-body" style="margin-top:4px;">Status is computed from real signals: schedule variance from your project tracker, budget burn rate from finance, open incident count from your ops tooling. Nobody picks amber. The record does. The colour becomes a result, not an assertion.</div>
        </div>
      </section>

      <section class="thread-section" id="governance">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 3</div>
        <h2 class="h2">Governance you can't audit.</h2>
        <p class="body">A stage gate is an email. Someone forwards a deck. Someone replies "approved." Three months later, no one can find the thread, no one agrees on what was actually approved, and there's no record of what conditions the approval was contingent on.</p>
        <p class="body">When a regulator, an auditor, or a postmortem asks "who approved this and under what conditions?", the answer is "we think it was Dave, in an email, sometime in March." That is not an audit trail. It's a guess.</p>
        <div class="card" style="border-left:3px solid var(--ok);">
          <div class="card-title">What policy as code does instead</div>
          <div class="card-body" style="margin-top:4px;">A gate is a CI check. It runs against defined criteria, passes or fails, and the result is a commit in the repository. The approval is a merged PR with a reviewer on record. The audit trail writes itself.</div>
        </div>
      </section>

      <section class="thread-section" id="army">
        <span class="thread-node"></span>
        <div class="eyebrow">Problem 4</div>
        <h2 class="h2">The army-of-PMs tax.</h2>
        <p class="body">In a mature portfolio, a significant fraction of PM headcount exists not to run projects but to maintain the reporting layer above them. Someone collects status from each project lead. Someone turns that into a portfolio summary. Someone formats it into a slide. Someone presents the slide. None of this is project delivery.</p>
        <p class="body">PMO as Code eliminates this layer. Status is derived, not collected. Dashboards are rendered, not built. The PM's job is to run the project, not to describe it.</p>
        <div class="card" style="border-left:3px solid var(--accent);">
          <div class="card-title">The reallocation</div>
          <div class="card-body" style="margin-top:4px;">The time formerly spent on reporting moves to delivery. One source of truth means one update — the YAML — that everything downstream regenerates from automatically.</div>
        </div>
      </section>

    </div>

    <div style="margin-top:48px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">What comes next</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">The Manifesto names five value-pairs that encode the response to these problems. The Rosetta Stone maps each problem to its as-code equivalent. Core Concepts shows what the object model that holds it all together looks like.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="#/manifesto">Read the manifesto →</a>
        <a class="btn-secondary" href="#/rosetta">The Rosetta Stone →</a>
      </div>
    </div>

    ${pageNavHtml('/why')}
    ${provenanceFooter('/why')}
  </div>`;
}
