import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderQuickstart() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Author a document. Unit-test it. Merge it.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">This walkthrough uses <code class="mono" style="font-size:15px;background:var(--panel-2);padding:1px 6px;border-radius:4px;">docunit</code>, the reference implementation. Everything is Git, Markdown, and GitHub Actions — no other tools.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Time to complete: ~15 minutes. Requires: git, Python 3.10+, a terminal.</p>

    <div class="thread-rail">

      <section class="thread-section" id="qs-install">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 1</div>
        <h2 class="h2-sm">Get docunit.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Clone the reference implementation. It validates documents, checks cross-document consistency, and generates the traceability matrix.</p>
        ${cb('terminal', `git clone https://github.com/c4g-john/pmo-as-code-pipeline
cd pmo-as-code-pipeline
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"        <span class="cc"># add ".[ai]" for AI advisory checks</span>`)}
      </section>

      <section class="thread-section" id="qs-author">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 2</div>
        <h2 class="h2-sm">Author a document.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">A document is Markdown with YAML frontmatter and defined sections. Here's a charter. (Or convert an existing Word doc — see the guides.)</p>
        ${cb('documents/PRJ-001-AUR/charter.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">charter</span>
<span class="ck">project</span>: <span class="cv">PRJ-001-AUR</span>
<span class="ck">id</span>: <span class="cv">AUR-charter</span>
<span class="ck">title</span>: Aurora — Customer Onboarding Overhaul
<span class="ck">sponsor</span>: <span class="cs">jordan.lee</span>
<span class="ck">budget</span>: { <span class="ck">amount</span>: 1200000, <span class="ck">currency</span>: USD }
<span class="ck">dates</span>: { <span class="ck">created</span>: 2026-01-15, <span class="ck">target</span>: 2026-12-15 }
<span class="ck">status</span>: <span class="cv">approved</span>
<span class="cc">---</span>

<span class="cv">## Objective</span>
Cut median onboarding time from 14 days to under 2 days by replacing
manual setup with a self-serve flow.

<span class="cv">## Success Criteria</span>
- Median onboarding time (p50) drops below 48 hours.
- Onboarding CSAT rises above 4.5 / 5.
- Manual setup tickets fall by at least 80%.

<span class="cc"># … Scope, Milestones, Risks, Approval …</span>`)}
      </section>

      <section class="thread-section" id="qs-test">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 3</div>
        <h2 class="h2-sm">Unit-test it.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Structural checks are deterministic and block a merge. AI checks (with a key) advise. This is the real output.</p>
        ${cb('terminal', `docunit validate documents/PRJ-001-AUR/charter.md

<span class="cs">documents/PRJ-001-AUR/charter.md
  ✓ frontmatter-schema: valid against the schema
  ✓ required-sections: all 6 present and non-empty
  ✓ measurable-success-criteria: all 3 state a measurable threshold
  ✓ risks-have-owner-and-mitigation: all risks name an owner + mitigation
  ✓ dates-consistent: created 2026-01-15 → target 2026-12-15
  ✓ unique-id: id 'AUR-charter' is unique
  ○ objective-is-specific: advisory (needs ANTHROPIC_API_KEY)

✓ All structural checks passed — clear to merge.</span>`)}
        <div class="card" style="margin-top:14px;border-left:3px solid var(--ok);">
          <div class="card-title">Why it fails when it should</div>
          <div class="card-body" style="margin-top:4px;">A vague "make customers happier" success criterion has no measurable threshold, so <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">measurable-success-criteria</code> blocks — with the exact reason. The gate is specific, not vibes.</div>
        </div>
      </section>

      <section class="thread-section" id="qs-gate">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 4</div>
        <h2 class="h2-sm">Gate it on every PR.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">A GitHub Actions workflow runs the audit on each pull request and posts the result. With branch protection, a document that fails can't merge.</p>
        ${cb('.github/workflows/audit.yml', `<span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:
    <span class="ck">runs-on</span>: ubuntu-latest
    <span class="ck">steps</span>:
      - <span class="ck">uses</span>: actions/checkout@v4
      - <span class="ck">uses</span>: actions/setup-python@v5
      - <span class="ck">run</span>: <span class="cs">pip install -e ".[ai]"</span>
      - <span class="ck">run</span>: <span class="cs">docunit validate documents/**/*.md</span>`)}
      </section>

      <section class="thread-section" id="qs-consistency">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 5</div>
        <h2 class="h2-sm">Check consistency across documents.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">The differentiator. Requirements trace end to end; broken links block, and the AI judges whether each child genuinely fulfils its parent.</p>
        ${cb('terminal', `docunit consistency

<span class="cs">consistency (cross-document)
  ✓ item-id-uniqueness: all 24 item IDs are unique
  ✓ referential-integrity: all references resolve
  ✓ required-links: all required upstream links present
  ✓ coverage: all approved items are covered</span>
  <span class="cc"># AI advisory, e.g.:</span>
<span class="cs">  ● AUR-PR-015 —traces→ AUR-BR-002  score 0.40
    "progress emails don't obviously reduce support tickets"</span>`)}
      </section>

      <section class="thread-section" id="qs-rtm">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 6</div>
        <h2 class="h2-sm">Generate the traceability matrix.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Derived from the links, never authored by hand. Traceability you can see.</p>
        ${cb('terminal', `docunit rtm --project PRJ-001-AUR

<span class="cs"># Requirements Traceability Matrix — AUR
| Business Req | Product Req | Func/NFR  | Acceptance | Test |
|--------------|-------------|-----------|------------|------|
| AUR-BR-001   | AUR-PR-014  | AUR-FR-101| AUR-AC-001 | AUR-TC-001 |
| AUR-BR-002   | AUR-PR-015  | AUR-NFR-05| AUR-AC-002 | AUR-TC-002 |</span>`)}
      </section>

      <section class="thread-section" id="qs-pages">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 7</div>
        <h2 class="h2-sm">Publish a page per project.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Status is derived, never typed. Scope it to one project, or build the whole portfolio site — a landing index plus a discrete, always-current page for each project.</p>
        ${cb('terminal', `docunit status --project PRJ-001-AUR   <span class="cc"># one project's derived RAG</span>
docunit status --index                  <span class="cc"># the portfolio table</span>
docunit pages --out _site               <span class="cc"># index.html + a page per project</span>

<span class="cs"># Projects — AMBER
| Project                 | Code | RAG   | Docs | Open risks |
|-------------------------|------|-------|------|------------|
| Aurora — Onboarding     | AUR  | AMBER | 20   | 2          |
| Atlas — Partner Portal  | ATL  | GREEN | 5    | 0          |</span>`)}
        <p style="font-size:14px;color:var(--muted);margin:14px 2px 0;">The <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">status-pages</code> workflow runs <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">docunit pages</code> on every push to <span class="mono" style="font-size:13px;">main</span> — <a href="https://c4g-john.github.io/pmo-as-code-pipeline/" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">see it live →</a></p>
      </section>

    </div>

    <div style="margin-top:48px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">What's next</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">Convert an existing Word document with the <code class="mono" style="font-size:14px;background:var(--bg);padding:1px 5px;border-radius:3px;">doc-to-pmo</code> skill, turn on branch protection, or explore the document kinds in the reference.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="https://github.com/c4g-john/pmo-as-code-pipeline" target="_blank" rel="noopener">The pipeline repo →</a>
        <a class="btn-secondary" href="#/reference">The document kinds →</a>
      </div>
    </div>

    ${pageNavHtml('/quickstart')}
    ${provenanceFooter('/quickstart')}
  </div>`;
}
