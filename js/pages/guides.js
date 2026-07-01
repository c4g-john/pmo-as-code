import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderGuides() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Guides.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 36px;">Task-focused walkthroughs. Start from any guide. They're independent.</p>

    <div style="display:grid;gap:10px;margin-bottom:48px;">
      ${[
        ['Convert a Word document', 'guide-convert', 'Bring an existing doc in with the doc-to-pmo skill — gaps flagged, not invented.'],
        ['Author linked requirements', 'guide-trace', 'Write BR → PR → AC → TC as items, and let consistency check the chain.'],
        ['Gate documents in CI', 'guide-gate', 'Run the audit and consistency jobs on every PR; make the gate binding.'],
        ['Add a new document kind', 'guide-kind', 'A template + schema + criteria trio — usually no code at all.'],
        ['Start a new project', 'guide-project', 'Give a project a unique ID, a folder, and its own derived status page.'],
      ].map(([title, id, desc]) => `
        <a href="#${id}" data-anchor="${id}" style="display:flex;align-items:center;gap:16px;padding:16px 18px;background:var(--panel);border:1px solid var(--border);border-radius:11px;text-decoration:none;color:var(--ink);">
          <div style="flex:1;">
            <div style="font-weight:600;font-size:16px;margin-bottom:3px;">${title}</div>
            <div style="font-size:14px;color:var(--muted);">${desc}</div>
          </div>
          <span class="mono" style="color:var(--accent);">↓</span>
        </a>`).join('')}
    </div>

    <div id="guide-convert" style="margin-bottom:60px;padding-top:10px;border-top:2px solid var(--accent-line);">
      <div class="eyebrow" style="margin-top:20px;">Guide 01</div>
      <h2 class="h2-sm" style="margin-top:8px;">Convert a Word document.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">Bring an existing charter, business case, or BRD into the pipeline without retyping it.</p>

      <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;margin:0 0 10px;">Extract the source text</h3>
      ${cb('terminal', `pip install "docassert[convert]"
python extract.py path/to/charter.docx   <span class="cc"># .docx / .pdf / .md / .txt — tools/ in the docassert repo</span>`)}

      <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;margin:24px 0 10px;">Let the skill map it</h3>
      <p style="font-size:15px;color:var(--ink-2);max-width:60ch;margin:0 0 14px;">The <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">doc-to-pmo</code> skill fills the standard template from the source, and <em>flags what the source didn't supply rather than inventing it</em>.</p>
      ${cb('documents/PRJ-001-AUR/charter.md (first pass)', `<span class="cv">## Success Criteria</span>
- TODO: source says "faster onboarding" — add a measurable target.

<span class="cv">## Risks</span>
- Migration may slip. (TODO: assign an Owner and a Mitigation.)`)}
      <div class="card" style="margin-top:14px;border-left:3px solid var(--warn);">
        <div class="card-title">Faithful over passing</div>
        <div class="card-body" style="margin-top:4px;">An incomplete source produces a document that honestly fails the audit — with the exact gaps to fill. That is the pipeline working, not a bug.</div>
      </div>
    </div>

    <div id="guide-trace" style="margin-bottom:60px;padding-top:10px;border-top:2px solid var(--accent-line);">
      <div class="eyebrow" style="margin-top:20px;">Guide 02</div>
      <h2 class="h2-sm" style="margin-top:8px;">Author linked requirements.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">Write each requirement as an item with a stable ID and a typed link to what it refines.</p>
      ${cb('across four documents in documents/PRJ-001-AUR/', `<span class="cc"># brd.md</span>
- <span class="ck">**AUR-BR-001**</span>: The business shall reduce onboarding time to under 2 days.
<span class="cc"># prd.md</span>
- <span class="ck">**AUR-PR-014**</span> (<span class="cv">traces</span>: AUR-BR-001): The product shall provide a self-serve flow.
- <span class="ck">**AUR-AC-001**</span> (<span class="cv">verifies</span>: AUR-PR-014): Given a new customer…, then an active account exists.
<span class="cc"># test-cases.md</span>
- <span class="ck">**AUR-TC-001**</span> (<span class="cv">tests</span>: AUR-AC-001): Complete the wizard → account active, zero tickets.`)}
      ${cb('terminal', `docassert consistency

<span class="cs">  ✓ referential-integrity: all references resolve
  ✓ coverage: all approved items are covered</span>
  <span class="cc"># broken links block; the AI advises on whether each link truly holds</span>`)}
    </div>

    <div id="guide-gate" style="margin-bottom:60px;padding-top:10px;border-top:2px solid var(--accent-line);">
      <div class="eyebrow" style="margin-top:20px;">Guide 03</div>
      <h2 class="h2-sm" style="margin-top:8px;">Gate documents in CI.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">Two jobs run on every pull request; branch protection makes them binding.</p>
      ${cb('.github/workflows/audit.yml', `<span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:        <span class="cc"># validate each changed document</span>
    <span class="ck">steps</span>: [{ <span class="ck">run</span>: <span class="cs">docassert validate documents/**/*.md</span> }]
  <span class="ck">consistency</span>:  <span class="cc"># check the whole traceability graph</span>
    <span class="ck">steps</span>: [{ <span class="ck">run</span>: <span class="cs">docassert consistency</span> }]`)}
      ${cb('terminal', `<span class="cc"># require both checks before a PR can merge</span>
gh api -X PUT repos/OWNER/REPO/branches/main/protection --input - &lt;&lt;'JSON'
{ <span class="ck">"required_status_checks"</span>: { <span class="ck">"strict"</span>: true, <span class="ck">"contexts"</span>: [<span class="cs">"audit"</span>, <span class="cs">"consistency"</span>] } }
JSON`)}
    </div>

    <div id="guide-kind" style="margin-bottom:48px;padding-top:10px;border-top:2px solid var(--accent-line);">
      <div class="eyebrow" style="margin-top:20px;">Guide 04</div>
      <h2 class="h2-sm" style="margin-top:8px;">Add a new document kind.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">A kind is a trio: a template, a JSON Schema for its frontmatter, and a criteria file listing the checks. Most kinds need no new code.</p>
      ${cb('criteria/decision-log.criteria.yaml', `<span class="ck">kind</span>: <span class="cv">decision-log</span>
<span class="ck">required_sections</span>: [Overview, Decisions]
<span class="ck">item_sections</span>:
  - { <span class="ck">section</span>: Decisions, <span class="ck">prefix</span>: <span class="cv">DEC</span> }
<span class="ck">checks</span>:
  - { <span class="ck">id</span>: frontmatter-schema, <span class="ck">blocking</span>: true }
  - { <span class="ck">id</span>: required-sections, <span class="ck">blocking</span>: true }
  - { <span class="ck">id</span>: items-well-formed, <span class="ck">blocking</span>: true }`)}
      <div class="card" style="margin-top:14px;">
        <div class="card-title">Config-driven checks</div>
        <div class="card-body" style="margin-top:4px;line-height:1.6;">Some checks are reusable via config: <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">measurable_sections</code> makes bullets in a section require a threshold; <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">steps_sections</code> requires an ordered list. New kinds reuse them with zero code.</div>
      </div>
    </div>

    <div id="guide-project" style="margin-bottom:48px;padding-top:10px;border-top:2px solid var(--accent-line);">
      <div class="eyebrow" style="margin-top:20px;">Guide 05</div>
      <h2 class="h2-sm" style="margin-top:8px;">Start a new project.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">Give a project a unique identity, a folder, and its own always-current status page. Pick the next sequence number and a short code, and drop a <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">project.md</code> anchor in its folder.</p>

      <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;margin:0 0 10px;">Anchor the project</h3>
      ${cb('documents/PRJ-002-ATL/project.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">project</span>
<span class="ck">id</span>: <span class="cv">PRJ-002-ATL</span>
<span class="ck">code</span>: <span class="cv">ATL</span>
<span class="ck">name</span>: Atlas — Partner Portal Modernization
<span class="ck">sponsor</span>: <span class="cs">mia.chen</span>
<span class="ck">status</span>: <span class="cv">proposed</span>
<span class="cc">---</span>

<span class="cv">## Overview</span>
<span class="cv">## Scope</span>`)}

      <h3 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;margin:24px 0 10px;">Register it and see its page</h3>
      <p style="font-size:15px;color:var(--ink-2);max-width:60ch;margin:0 0 14px;">Every document you add under <span class="mono" style="font-size:13px;">documents/PRJ-002-ATL/</span> uses the <span class="mono" style="font-size:13px;">ATL-</span> code — so its items (<span class="mono" style="font-size:13px;">ATL-BR-001</span>) never collide with any other project's.</p>
      ${cb('terminal', `docassert projects --out projects.yaml     <span class="cc"># regenerate the registry</span>
docassert status --project PRJ-002-ATL      <span class="cc"># this project's derived RAG</span>
docassert pages --out _site                 <span class="cc"># adds PRJ-002-ATL.html to the portfolio</span>`)}
      <div class="card" style="margin-top:14px;border-left:3px solid var(--ok);">
        <div class="card-title">Unique by construction</div>
        <div class="card-body" style="margin-top:4px;">A CI check fails if <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">projects.yaml</code> drifts from the anchors or two projects claim the same id or code — so identity stays unambiguous as the portfolio grows.</div>
      </div>
    </div>

    ${pageNavHtml('/guides')}
    ${provenanceFooter('/guides')}
  </div>`;
}
