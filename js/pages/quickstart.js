import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderQuickstart() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Anchor a project. Author a document. Merge it.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">This walkthrough uses <code class="mono" style="font-size:15px;background:var(--panel-2);padding:1px 6px;border-radius:4px;">docassert</code>, the reference implementation. Everything is Git, Markdown, and GitHub Actions — no other tools.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 20px;">Time to complete: ~20 minutes. Requires: git, Python 3.10+, a terminal, and a GitHub repo.</p>
    <p style="font-size:14px;color:var(--ink-2);margin:0 0 8px;">Prefer to let Claude do it? See <a href="#/quickstart-claude" style="color:var(--accent);text-decoration:none;font-weight:600;">Quickstart with Claude Code →</a></p>
    <p style="font-size:14px;color:var(--ink-2);margin:0 0 36px;">Starting a fresh repo? <a href="https://github.com/c4g-john/pmo-as-code-template" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;">Use the template →</a> — steps 1–2 and 8 come pre-wired.</p>

    <div class="thread-rail">

      <section class="thread-section" id="qs-install">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 1</div>
        <h2 class="h2-sm">Get docassert.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Install it from PyPI. It validates documents, checks cross-document consistency, generates the traceability matrix, and derives per-project status.</p>
        ${cb('terminal', `pipx install docassert          <span class="cc"># or: pip install docassert</span>
docassert --version
<span class="cc"># AI advisory extra:  pipx install "docassert[ai]"</span>`)}
      </section>

      <section class="thread-section" id="qs-project">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 2</div>
        <h2 class="h2-sm">Anchor a project.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Everything is organized by project. A <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">project.md</code> anchor gives it a unique id (<code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">PRJ-001-AUR</code>), a <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">code</code> that namespaces every document and item, and — optionally — a <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">profile</code> that declares the documents it should carry.</p>
        ${cb('documents/PRJ-001-AUR/project.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">project</span>
<span class="ck">id</span>: <span class="cv">PRJ-001-AUR</span>            <span class="cc"># PRJ-&lt;seq&gt;-&lt;CODE&gt;, unique across all projects</span>
<span class="ck">code</span>: <span class="cv">AUR</span>                    <span class="cc"># namespaces ids: AUR-charter, AUR-BR-001</span>
<span class="ck">name</span>: Aurora — Customer Onboarding Overhaul
<span class="ck">sponsor</span>: <span class="cs">jordan.lee</span>
<span class="ck">status</span>: <span class="cv">active</span>                 <span class="cc"># proposed | active | on-hold | closed</span>
<span class="ck">profile</span>: <span class="cv">regulated-industry</span>    <span class="cc"># optional: the expected document set</span>
<span class="cc">---</span>

<span class="cv">## Overview</span>
<span class="cv">## Scope</span>`)}
        ${cb('terminal', `docassert new project --code AUR --name "Aurora — Customer Onboarding Overhaul"
<span class="cs"># docassert: created documents/PRJ-001-AUR/project.md</span>   <span class="cc"># id auto-numbered</span>
docassert projects --out projects.yaml   <span class="cc"># generate the registry from the anchors</span>
<span class="cs"># docassert: wrote projects.yaml (4 projects)</span>`)}
        <div class="card" style="margin-top:14px;">
          <div class="card-title">Tip</div>
          <div class="card-body" style="margin-top:4px;">Keep a brand-new project <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">proposed</code> while you fill it in — its profile gaps stay advisory. Flip it to <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">active</code> when you're ready for missing required docs to block.</div>
        </div>
      </section>

      <section class="thread-section" id="qs-author">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 3</div>
        <h2 class="h2-sm">Author a document.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Scaffold a document into the project folder — <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">docassert new</code> fills in the identity (and suggests the next free item ids). Then write the content. Here's a completed charter. (Or convert an existing Word doc — see the guides.)</p>
        ${cb('terminal', `docassert new charter --project PRJ-001-AUR
<span class="cs"># docassert: created documents/PRJ-001-AUR/charter.md</span>`)}
        <div style="height:12px;"></div>
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
        <div class="eyebrow">Step 4</div>
        <h2 class="h2-sm">Unit-test it.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Structural checks are deterministic and block a merge. AI checks (with a key) advise. This is the real output.</p>
        ${cb('terminal', `docassert validate documents/PRJ-001-AUR/charter.md

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
          <div class="card-body" style="margin-top:4px;">A vague "make customers happier" success criterion has no measurable threshold, so <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">measurable-success-criteria</code> blocks — with the exact reason. The gate is specific, not vibes. (Completeness checks like this are advisory while a document is <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">draft</code> — they gate from <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">proposed</code> onward, so WIP is never punished.)</div>
        </div>
      </section>

      <section class="thread-section" id="qs-consistency">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 5</div>
        <h2 class="h2-sm">Check consistency across documents.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">The differentiator. Requirements trace end to end, the registry stays fresh, and each profiled project carries its required documents. Broken links block; the AI judges whether each child genuinely fulfils its parent.</p>
        ${cb('terminal', `docassert consistency

<span class="cs">consistency (cross-document)
  ✓ item-id-uniqueness: all 24 item IDs are unique
  ✓ referential-integrity: all references resolve
  ✓ required-links: all required upstream links present
  ✓ coverage: all approved items are covered
  ✓ profile-completeness: 3 project(s) with advisory gaps (not enforced yet)</span>
  <span class="cc"># AI advisory, e.g.:</span>
<span class="cs">  ● AUR-PR-015 —traces→ AUR-BR-002  score 0.40
    "progress emails don't obviously reduce support tickets"</span>`)}
      </section>

      <section class="thread-section" id="qs-rtm">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 6</div>
        <h2 class="h2-sm">Generate the traceability matrix.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Derived from the links, never authored by hand. Traceability you can see.</p>
        ${cb('terminal', `docassert rtm --project PRJ-001-AUR

<span class="cs"># Requirements Traceability Matrix — AUR
| Business Req | Product Req | Func/NFR  | Acceptance | Test |
|--------------|-------------|-----------|------------|------|
| AUR-BR-001   | AUR-PR-014  | AUR-FR-101| AUR-AC-001 | AUR-TC-001 |
| AUR-BR-002   | AUR-PR-015  | AUR-NFR-05| AUR-AC-002 | AUR-TC-002 |</span>`)}
      </section>

      <section class="thread-section" id="qs-pages">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 7</div>
        <h2 class="h2-sm">Derive status — and see what's missing.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Status is derived, never typed. Scope it to one project, roll up the portfolio, or build the whole site. Because Aurora is on a profile, its page also shows which required documents are complete, incomplete, or missing.</p>
        ${cb('terminal', `docassert status --project PRJ-001-AUR   <span class="cc"># one project's RAG + document set</span>
docassert status --index                  <span class="cc"># the portfolio table</span>
docassert pages --out _site               <span class="cc"># index.html + a page per project</span>

<span class="cs"># Projects — AMBER
| Project                | Code | RAG   | Docs | Required | Open risks |
|------------------------|------|-------|------|----------|------------|
| Aurora — Onboarding    | AUR  | AMBER | 20   | 9/9      | 2          |
| Atlas — Partner Portal | ATL  | AMBER | 5    | 0/4      | 0          |</span>`)}
        <div class="card" style="margin-top:14px;border-left:3px solid var(--warn);">
          <div class="card-title">The document set</div>
          <div class="card-body" style="margin-top:4px;">Aurora is <strong style="color:var(--ok);font-weight:600;">9/9 required complete</strong>. A project still filling in shows each required kind as <strong style="color:var(--ok);font-weight:600;">complete</strong> / <strong style="color:var(--warn);font-weight:600;">incomplete</strong> / <strong style="color:var(--bad);font-weight:600;">missing</strong> — and a missing required doc turns the page red and blocks the merge once the project is <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">active</code>.</div>
        </div>
      </section>

      <section class="thread-section" id="qs-gate">
        <span class="thread-node"></span>
        <div class="eyebrow">Step 8</div>
        <h2 class="h2-sm">Gate it in CI — and make it binding.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Two jobs run on every pull request. But GitHub only <em style="font-style:normal;color:var(--ink);">blocks</em> a merge when branch protection requires them — that's what turns advisory checks into a real gate.</p>
        ${cb('.github/workflows/audit.yml', `<span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:        <span class="cc"># validate each changed document</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span>, <span class="ck">with</span>: { <span class="ck">fetch-depth</span>: 0 } }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cv">validate</span>, <span class="ck">changed-only</span>: <span class="cv">'true'</span> }
  <span class="ck">consistency</span>:  <span class="cc"># the graph + registry + profile completeness</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span> }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cv">consistency</span> }`)}
        <div style="height:14px;"></div>
        ${cb('terminal', `<span class="cc"># make both checks required before a PR can merge</span>
gh api -X PUT repos/OWNER/REPO/branches/main/protection --input - &lt;&lt;'JSON'
{ <span class="ck">"required_status_checks"</span>: { <span class="ck">"strict"</span>: true, <span class="ck">"contexts"</span>: [<span class="cs">"audit"</span>, <span class="cs">"consistency"</span>] } }
JSON`)}
        <div class="card" style="margin-top:16px;">
          <div class="card-title">One-time repo setup</div>
          <div class="card-body" style="margin-top:6px;line-height:1.7;">
            <div>· <strong style="font-weight:600;">Branch protection</strong> — require <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">audit</code> and <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">consistency</code> on <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">main</code> (above). Without it, the checks run but never block.</div>
            <div>· <strong style="font-weight:600;">GitHub Pages</strong> — Settings → Pages → Source: <strong style="font-weight:600;">GitHub Actions</strong>, so <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">status-pages.yml</code> can publish the live dashboard. One-time, and manual.</div>
            <div>· <strong style="font-weight:600;">AI advisory (optional)</strong> — add <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">ANTHROPIC_API_KEY</code> as an Actions secret. Structural checks gate without it; this just adds the AI scoring.</div>
          </div>
        </div>
      </section>

    </div>

    <div style="margin-top:48px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">What's next</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">Let Claude Code scaffold the whole thing from one prompt, convert an existing Word document, or explore the document kinds in the reference.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="https://github.com/c4g-john/pmo-as-code-template" target="_blank" rel="noopener">Use the template →</a>
        <a class="btn-secondary" href="#/quickstart-claude">Quickstart with Claude Code →</a>
        <a class="btn-secondary" href="#/guides">The guides →</a>
        <a class="btn-secondary" href="#/reference">The document kinds →</a>
      </div>
    </div>

    ${pageNavHtml('/quickstart')}
    ${provenanceFooter('/quickstart')}
  </div>`;
}
