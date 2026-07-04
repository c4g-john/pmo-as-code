import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

// Every number on this page is verifiable against a shipped artifact
// (ADO-PR-006). If a figure here can drift, link the living source instead.
export function renderPress() {
  const fact = (k, v) => `<div style="display:grid;grid-template-columns:180px 1fr;gap:14px;padding:11px 0;border-bottom:1px solid var(--border);">
    <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);padding-top:2px;">${k}</span>
    <span style="font-size:14.5px;color:var(--ink);">${v}</span></div>`;

  const angle = (t, body, link, label) => `<div style="border:1px solid var(--border);border-radius:11px;padding:18px 20px;background:var(--panel);">
    <div style="font-weight:600;font-size:15.5px;margin-bottom:8px;">${t}</div>
    <p style="font-size:14px;line-height:1.6;color:var(--ink-2);margin:0 0 10px;">${body}</p>
    <a href="${link}" target="_blank" rel="noopener" style="font-size:13px;">${label} →</a></div>`;

  return `<div>
    <div class="eyebrow">Share</div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Press &amp; share kit.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:62ch;margin:0 0 12px;">Everything needed to cover or share PMO as Code accurately: verified facts, approved copy, story angles, assets, and a contact. Every claim on this page traces to a shipped artifact you can click.</p>
    <p style="font-size:13.5px;color:var(--muted);max-width:62ch;margin:0 0 36px;">Assets and copy here are free to use when writing about the project. Names: “PMO as Code” (the standard), lowercase “docassert” (the tool).</p>

    <div id="press-facts" style="margin-bottom:44px;">
      <h2 class="h2-sm">Fact sheet.</h2>
      <div style="margin-top:14px;">
        ${fact('What it is', 'PMO as Code — a vendor-neutral standard for running a project management office from version-controlled files: business documents are structured Markdown, validated like code on every change; requirements trace end to end; project status is derived from the documents, never self-reported.')}
        ${fact('The one-liner', '“Unit testing for business documents.”')}
        ${fact('The concept', 'Extends the Infrastructure-as-Code / DevOps playbook to the PMO: declared truth in Git, gates as admission control, derived (never hand-set) status.')}
        ${fact('The tool', '<a href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener">docassert</a> — stable 1.x since 2026-07-04, <a href="https://github.com/c4g-john/docassert/blob/main/STABILITY.md" target="_blank" rel="noopener">SemVer-bound</a>. Apache-2.0. Python 3.10–3.14. <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">pipx install docassert</code> · <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">brew install c4g-john/tap/docassert</code>')}
        ${fact('The standard', '<a href="https://github.com/c4g-john/pmo-as-code-spec" target="_blank" rel="noopener">PMO as Code specification</a> v0.8 (draft), with a 73-case conformance suite the tool passes in CI.')}
        ${fact('The scope', 'Twenty-one document kinds (charter → benefits realization), two tiers of checks — deterministic structural checks that gate a merge, AI-graded semantic checks that only advise — an execution bridge to GitHub issues, and derived dashboards.')}
        ${fact('Proof', 'The project governs itself with its own tool: <a href="https://c4g-john.github.io/pmo-as-code-pmo/" target="_blank" rel="noopener">the live portfolio dashboard</a> is derived from the governing documents on every merge.')}
        ${fact('Who', 'John Tanner, C4G Enterprises Inc. — <a href="https://linkedin.com/in/tannerjs" target="_blank" rel="noopener">linkedin.com/in/tannerjs</a>')}
        ${fact('Press contact', '<a href="mailto:press@c4genterprises.com">press@c4genterprises.com</a>')}
      </div>
    </div>

    <div id="press-boiler" style="margin-bottom:44px;">
      <h2 class="h2-sm">Boilerplate.</h2>
      <p style="font-size:14px;color:var(--ink-2);margin:8px 0 14px;max-width:60ch;">Quote these verbatim or edit freely.</p>
      ${cb('50 words', `PMO as Code treats business documents the way engineers treat code: charters, BRDs, and risk registers live in Git as structured Markdown, are unit-tested on every change, and cannot merge until they pass. Project status is derived from the documents — red, amber, green that nobody can hand-set.`)}
      ${cb('100 words', `PMO as Code is an open standard for running a project management office from version-controlled files. Business documents — charters, BRDs, PRDs, risk registers — are structured Markdown with schemas and audit criteria, validated on every pull request by docassert, the Apache-licensed reference implementation. Requirements are traceable items with typed links, so “which requirements have no test?” is a query, not a meeting. Project status is derived from the documents and published as a live dashboard nobody can hand-edit. The project practices what it preaches: its own portfolio is governed by the standard, gates and all, in public repositories.`)}
    </div>

    <div id="press-angles" style="margin-bottom:44px;">
      <h2 class="h2-sm">Three story angles.</h2>
      <div style="display:grid;gap:12px;margin-top:14px;">
        ${angle('Infrastructure-as-Code, pointed at the PMO',
          'DevOps solved “the wiki is stale and the spreadsheet lies” for infrastructure a decade ago: declare truth in files, validate on every change, derive state instead of reporting it. PMO as Code applies the same playbook to project governance — same Git, same gates, same convergence loops.',
          'https://pmoascode.com/manifesto/', 'The manifesto')}
        ${angle('It governs itself — and you can check',
          'The portfolio that builds PMO as Code is run as PMO as Code: five projects, every scope change through a gated pull request, and a public dashboard derived from the governing documents on every merge. Every claim is a click away from its evidence.',
          'https://c4g-john.github.io/pmo-as-code-pmo/', 'The live portfolio dashboard')}
        ${angle('Dashboards that can’t lie',
          'Status is computed, not typed: coverage from the traceability graph, risk from a scored register with an explicit appetite, delivery from real issue states. Amber pages state their causes. A real project converted from a Word BRD shows the whole loop, ambers included.',
          'https://c4g-john.github.io/refuge-for-humans-pmo/', 'The case-study dashboard')}
      </div>
    </div>

    <div id="press-assets" style="margin-bottom:44px;">
      <h2 class="h2-sm">Assets.</h2>
      <p style="font-size:14px;color:var(--ink-2);margin:8px 0 14px;max-width:62ch;">Logo, social card, the demo animation, and this page's facts as files — or grab the bundle. Dashboards change with reality, so screenshot them fresh from the live links above.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-secondary" href="/assets/press/pmo-as-code-press-kit.zip" download>Download the kit (zip) ↓</a>
        <a class="btn-secondary" href="/assets/press/logo.svg" target="_blank" rel="noopener">Logo (SVG)</a>
        <a class="btn-secondary" href="/assets/press/social-card.png" target="_blank" rel="noopener">Social card (PNG)</a>
        <a class="btn-secondary" href="/assets/press/demo.svg" target="_blank" rel="noopener">Demo animation (SVG)</a>
        <a class="btn-secondary" href="/assets/press/fact-sheet.md" target="_blank" rel="noopener">Fact sheet (Markdown)</a>
      </div>
    </div>

    <div id="press-share" style="margin-bottom:24px;">
      <h2 class="h2-sm">Ready-to-post copy.</h2>
      <p style="font-size:14px;color:var(--ink-2);margin:8px 0 14px;max-width:60ch;">Personal-voice drafts — every number in them is real. Edit freely.</p>
      ${cb('LinkedIn (~1 min read)', `I recently took a 14-section product BRD — a Word document like every BRD you've ever seen — and ran it through something I've been building.

Out the other side came a Git repository where every requirement is a traceable item, every document is unit-tested on each pull request, and project status is derived from the documents instead of typed into a slide.

The interesting part was what failed at import:

· The charter had no budget and no target date, and the audit said so.
· All five risks had descriptions but no probability, impact, or owner — each flagged with its missing fields.
· 6 of 10 product requirements had no acceptance criterion. The traceability graph found that in seconds, after every prose review had missed it.

Every one of those gaps was closed the only way the repo allows: pull requests the gate re-checked. The dashboard shows the whole story, ambers included.

That's the idea behind PMO as Code. Business documents get the treatment engineers give code — versioned, tested on every change, gated before merge — with a red/amber/green nobody can hand-set because it's computed.

It's open source (Apache-2.0), and the tool just hit a stability-guaranteed 1.0:

· The standard: pmoascode.com
· The tool: pipx install docassert (github.com/c4g-john/docassert)
· A one-click starter template, and live dashboards you can poke at

If you run a PMO, write BRDs, or have ever argued about whether a status is *really* green — I'd love your critique.

#PMO #ProjectManagement #DevOps #OpenSource #DocsAsCode`)}
      ${cb('Show HN (title + first comment)', `Show HN: Docassert – unit testing for business documents

Business documents (charters, BRDs, risk registers) are usually prose in Word, which leaves them unversioned, unvalidated, and impossible to audit at scale. docassert treats them like code: documents are structured Markdown, unit-tested on every pull request, and unable to merge until they pass.

There are two tiers of checks by design. Structural checks are deterministic Python and block the merge (measurable success criteria, risks with owners, resolving references, schema-valid frontmatter). Semantic checks are LLM-graded and only advise, because a model shouldn't gate a merge.

The part I find most useful in practice: requirements are bullets with stable ids and typed links (**AUR-PR-014** (traces: AUR-BR-001): ...), so the whole repo becomes a graph. "Which requirements have no test?" becomes a query. Project status (red/amber/green) is derived from the documents, and the dashboard and README badge can't be hand-set.

As a test, I converted a real 14-section BRD from Word. The audit immediately found a charter with no budget, five risks without owners, and six requirements with no acceptance criteria. It also blocked a draft for a budget that legitimately didn't exist yet — which forced a spec change (drafts now get advisories; the gate arms when you mark a document "proposed"). The whole loop is public, including a live dashboard with the ambers showing.

There's a spec so it isn't tool-locked (73-case conformance suite), a GitHub Action, a Homebrew tap, and a template repo. Python, Apache-2.0, stable 1.x. pipx install docassert

Two things I'd value critique on: whether item-id grammars in Markdown bullets are too fussy for non-engineers, and whether "LLM checks never block" stays tenable as models get better.`)}
      ${cb('Short (X / Mastodon)', `Your project charter should fail CI.

PMO as Code: business documents as version-controlled Markdown, unit-tested on every PR, status derived — never typed. The tool (docassert) just hit stable 1.0. Apache-2.0.

pmoascode.com`)}
    </div>

    ${pageNavHtml('/press')}
    ${provenanceFooter('/press')}
  </div>`;
}
