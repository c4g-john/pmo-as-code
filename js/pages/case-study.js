import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderCaseStudy() {
  return `<div>
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      A real conversion, with a public repo and a live dashboard, ambers included
    </div>
    <h1 class="h1">One Word document in. A gated, traceable, self-reporting project out.</h1>
    <p class="lead">Refuge for Humans is a real C4G product: a 14-section business requirements document written in Word. This is what happened when we ran it through the pipeline, including the parts that failed.</p>

    <div class="thread-rail" style="margin-top:56px;">

      <section class="thread-section" id="cs-source">
        <span class="thread-node"></span>
        <div class="eyebrow">The source</div>
        <h2 class="h2">A dense, well-written BRD — with invisible gaps.</h2>
        <p class="body">The document was good by Word-document standards: an executive summary, strategic goals, a success-metrics table, detailed signal specifications, NFRs, and a risk table. Fourteen sections of real product thinking. What nobody could see from the prose was which requirements had no test, which risks had no owner, and what a reviewer would still need to chase down.</p>
        ${cb('terminal', `pip install "docassert[convert]"
docassert extract "Refuge for Humans BRD.docx"   <span class="cc"># .docx → plain text, tables included</span>`)}
      </section>

      <section class="thread-section" id="cs-convert">
        <span class="thread-node"></span>
        <div class="eyebrow">The conversion</div>
        <h2 class="h2">Mapped faithfully; nothing padded to pass.</h2>
        <p class="body">The doc-to-pmo skill split the BRD into a proper spine: a project anchor, charter, BRD, PRD, functional &amp; non-functional requirements, a risk register, and test cases. That came to <strong style="font-weight:600;color:var(--ink);">49 traceable items</strong>, every reference resolving, all seven business requirements covered. Where the source stated a threshold, it became a measurable criterion. Where it didn't, nothing was invented.</p>
        ${cb('documents/PRJ-001-RFH/brd.md (excerpt)', `- <span class="ck">**RFH-BR-001**</span>: The business shall block AI-generated posts before
  publication at a rate above 95% at steady state.
- <span class="ck">**RFH-BR-002**</span>: The business shall keep false positives below 2%
  of genuine human posts.`)}
      </section>

      <section class="thread-section" id="cs-findings">
        <span class="thread-node"></span>
        <div class="eyebrow">The findings</div>
        <h2 class="h2">The audit produced the PM's to-do list.</h2>
        <p class="body">Run the checks and the invisible gaps become named, linkable findings — not tooling noise, but the actual state of the spec:</p>
        ${cb('docassert validate · docassert status', `<span class="cs">✗ Missing required frontmatter: 'budget'; dates: 'target'</span>   <span class="cc"># the BRD names neither</span>
<span class="cs">✗ RFH-RISK-001…005 missing Probability, Impact, Owner</span>        <span class="cc"># 5 risks, descriptions only</span>
<span class="cs">🟠 product requirement covered by an acceptance criterion: 4/10</span> <span class="cc"># six PRs untested</span>`)}
        <div class="grid-2" style="margin-top:16px;">
          <div class="card" style="border-left:3px solid var(--warn);">
            <div class="card-title">No budget, no target date, no named sponsor</div>
            <div class="card-body" style="margin-top:4px;">The charter carries the gaps as TODOs. Nobody typed a plausible number to quiet the tool.</div>
          </div>
          <div class="card" style="border-left:3px solid var(--warn);">
            <div class="card-title">6 of 10 product requirements had no acceptance criterion</div>
            <div class="card-body" style="margin-top:4px;">Surfaced by the traceability graph in seconds; prose reviews reliably miss this kind of gap.</div>
          </div>
        </div>
      </section>

      <section class="thread-section" id="cs-loop">
        <span class="thread-node"></span>
        <div class="eyebrow">The feedback loop</div>
        <h2 class="h2">The deployment improved the standard itself.</h2>
        <p class="body">The first audit blocked the draft charter for its missing budget, but "budget unknown yet" is a legitimate state for a <em style="font-style:normal;color:var(--ink);">draft</em>. That tension went upstream the same day: the specification (v0.2) and docassert (0.7.0) now distinguish <strong style="font-weight:600;color:var(--ink);">integrity</strong> checks, which always block, from <strong style="font-weight:600;color:var(--ink);">completeness</strong> checks, which are advisory for drafts and gate the moment a document is proposed. The finding came from real use and shipped back into the standard within a day.</p>
      </section>

      <section class="thread-section" id="cs-live">
        <span class="thread-node"></span>
        <div class="eyebrow">Live now</div>
        <h2 class="h2">See it running — ambers and all.</h2>
        <p class="body">The repo is public, the gate is binding, and the dashboard derives its status from the documents on every push. The badge below is live: it turns green when the work does, and no one can set it by hand.</p>
        <p style="margin:0 0 18px;"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Frefuge-for-humans-pmo%2Fbadge.json" alt="Refuge for Humans — live derived status" height="20"></p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <a class="btn-primary" href="https://c4g-john.github.io/refuge-for-humans-pmo/PRJ-001-RFH.html" target="_blank" rel="noopener">The live project page →</a>
          <a class="btn-secondary" href="https://github.com/c4g-john/refuge-for-humans-pmo" target="_blank" rel="noopener">The repo →</a>
        </div>
      </section>

    </div>

    <div style="margin-top:48px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">Do this to your documents</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">One template click gives you the gate and the dashboard; one prompt lets Claude convert your existing Word docs the same way.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="https://github.com/c4g-john/pmo-as-code-template" target="_blank" rel="noopener">Use the template →</a>
        <a class="btn-secondary" href="#/quickstart-claude">Quickstart with Claude Code →</a>
      </div>
    </div>

    ${pageNavHtml('/case-study')}
    ${provenanceFooter('/case-study')}
  </div>`;
}
