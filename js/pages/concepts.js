import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderConcepts() {
  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l2);">2</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Core Concepts.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 36px;">Everything is a Markdown document with YAML frontmatter and defined sections. Requirements are authored as linked items — which is what makes the whole set testable and traceable.</p>

      <div id="model" style="margin-bottom:52px;">
        <h2 class="h2-sm">A document, not a database.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Every kind shares one shape: <strong style="font-weight:600;color:var(--ink);">frontmatter</strong> (typed metadata a JSON Schema checks) and <strong style="font-weight:600;color:var(--ink);">required sections</strong> (the audit checks they're present and complete). Plain Markdown a person can read and a diff can review.</p>
        ${cb('documents/PRJ-001-AUR/charter.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">charter</span>
<span class="ck">project</span>: <span class="cv">PRJ-001-AUR</span>
<span class="ck">id</span>: <span class="cv">AUR-charter</span>
<span class="ck">sponsor</span>: <span class="cs">jordan.lee</span>
<span class="ck">status</span>: <span class="cv">approved</span>
<span class="cc">---</span>

<span class="cv">## Objective</span>
Cut median onboarding time from 14 days to under 2 days.

<span class="cv">## Success Criteria</span>
- Median onboarding time drops below 48 hours.
- Manual setup tickets fall by at least 80%.`)}
      </div>

      <div id="identity" style="margin-bottom:52px;">
        <h2 class="h2-sm">Every document belongs to a project.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Documents are organized <strong style="font-weight:600;color:var(--ink);">project-first</strong>, and each project has a unique, self-identifying id — <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">PRJ-001-AUR</code>: a unique sequence <em style="font-style:normal;color:var(--ink);">and</em> a short code. A <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">project.md</code> anchors each folder.</p>
        ${cb('documents/PRJ-001-AUR/', `<span class="cv">project.md</span>       <span class="cc"># id: PRJ-001-AUR · code: AUR · sponsor</span>
<span class="cv">charter.md</span>       <span class="cc"># id: AUR-charter</span>
<span class="cv">brd.md</span>           <span class="cc"># items: AUR-BR-001, AUR-BR-002</span>
<span class="cv">prd.md</span>           <span class="cc"># items: AUR-PR-014 (traces: AUR-BR-001)</span>
<span class="cc">…</span>`)}
        <p class="caption">The <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">AUR-</code> code namespaces every id, so <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">AUR-BR-001</code> and <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">ATL-BR-001</code> are different requirements in different projects — globally unique, and each item declares its own project. A generated <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">projects.yaml</code> registers them all.</p>
      </div>

      <div id="items" style="margin-bottom:52px;">
        <h2 class="h2-sm">Requirements are linked items.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">The unit of traceability is the <em style="font-style:normal;color:var(--ink);">item</em>: a bullet with a stable ID and typed links to what it depends on. That turns a pile of documents into a queryable graph.</p>
        ${cb('the chain, across four documents', `<span class="ck">**AUR-BR-001**</span>: The business shall reduce onboarding time to under 2 days.
<span class="ck">**AUR-PR-014**</span> (<span class="cv">traces</span>: AUR-BR-001): The product shall provide a self-serve flow.
<span class="ck">**AUR-AC-001**</span> (<span class="cv">verifies</span>: AUR-PR-014): Given a new customer…, then an active account exists.
<span class="ck">**AUR-TC-001**</span> (<span class="cv">tests</span>: AUR-AC-001): Complete the wizard → account active, zero tickets.`)}
        <p class="caption">BR → PR → FR/NFR → AC → TC. Every hop is a typed link the pipeline checks: broken references block, and the matrix is generated from them.</p>
      </div>

      <div id="checks" style="margin-bottom:52px;">
        <h2 class="h2-sm">Two tiers of checks.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">The same split runs on every document and across the whole graph.</p>
        <div class="grid-2">
          <div class="card" style="border-left:3px solid var(--ok);">
            <div class="card-title">Structural — deterministic, blocking</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">Required fields and sections present, success criteria measurable, risks have owners, references resolve. Plain code, reliable enough to gate a merge. Integrity errors block at any status; completeness gaps are advisory for drafts and gate once a document is proposed.</div>
          </div>
          <div class="card" style="border-left:3px solid var(--l2);">
            <div class="card-title">Semantic — AI-graded, advisory</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">Is the objective specific? Does AUR-PR-014 actually fulfil AUR-BR-001? Scored via the Anthropic API and posted to the PR — but never blocking.</div>
          </div>
        </div>
      </div>

      <div id="kinds" style="margin-bottom:52px;">
        <h2 class="h2-sm">Twenty kinds, one pattern.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Each kind is a <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">template</code> + <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">schema</code> + <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">criteria</code> trio. Adding one is adding a trio — no code for the common cases.</p>
        <div class="kind-grid">
          ${[
            ['project', 'The project anchor — unique id, code, sponsor, status.'],
            ['charter', 'Objective, measurable success criteria, sponsor, budget.'],
            ['business-case', 'Problem, options, recommendation, costs, benefits.'],
            ['brd', 'Business requirements as BR items.'],
            ['prd', 'Product requirements (PR) + acceptance criteria (AC).'],
            ['frnfr', 'Functional (FR) & non-functional (NFR) requirements.'],
            ['user-story', 'Stories (US) in "As a… I want…" form.'],
            ['test-cases', 'Test cases (TC) that verify acceptance criteria.'],
            ['adr', 'Architecture decisions with a recorded status.'],
            ['risk-register', 'Risks with probability, impact, owner, response.'],
            ['raci-stakeholder', 'Roles matrix — one Accountable per activity.'],
            ['qa-test-plan', 'Scope, environments, measurable exit criteria.'],
            ['data-migration-plan', 'Sources, field mapping, validation, cutover.'],
            ['release-cutover-plan', 'Ordered cutover steps and a rollback trigger.'],
            ['rollback-plan', 'Trigger conditions and ordered rollback steps.'],
            ['hypercare-plan', 'Support window, severities, measurable exit.'],
            ['runbook', 'Operational procedures, monitoring, escalation.'],
            ['status-report', 'Period, RAG, cites risks from the register.'],
            ['post-implementation-review', 'Outcomes vs objectives, lessons, actions.'],
            ['benefits-realization', 'Measurable benefits vs the business case.'],
          ].map(([name, desc]) => `
            <div class="kind-card">
              <div class="kind-name">${name}</div>
              <div class="kind-desc">${desc}</div>
            </div>`).join('')}
        </div>
      </div>

      ${pageNavHtml('/concepts')}
      ${provenanceFooter('/concepts')}
    </div>`;
}
