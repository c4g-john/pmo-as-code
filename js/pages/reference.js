import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderReference() {
  const kinds = [
    { name: 'charter', desc: 'The contract for a piece of work.', extra: 'sponsor, budget, dates', sections: 'Objective · Success Criteria · Scope · Milestones · Risks · Approval', items: '', checks: 'measurable-success-criteria · risks-have-owner-and-mitigation · dates-consistent' },
    { name: 'business-case', desc: 'The justification, upstream of the BRD.', extra: 'sponsor', sections: 'Problem Statement · Options Considered · Recommendation · Costs · Benefits', items: '', checks: 'required-sections' },
    { name: 'brd', desc: 'Business requirements.', extra: 'owner', sections: 'Purpose · Business Requirements · Out of Scope', items: 'BR', checks: 'items-well-formed' },
    { name: 'prd', desc: 'Product requirements and acceptance criteria.', extra: 'owner', sections: 'Overview · Product Requirements · Acceptance Criteria', items: 'PR (traces BR) · AC (verifies PR)', checks: 'items-well-formed' },
    { name: 'frnfr', desc: 'Functional & non-functional requirements.', extra: 'owner', sections: 'Overview · Functional Requirements · Non-Functional Requirements', items: 'FR · NFR (trace PR)', checks: 'items-well-formed' },
    { name: 'user-story', desc: 'User stories.', extra: 'owner', sections: 'Overview · User Stories', items: 'US (traces PR)', checks: 'story-format' },
    { name: 'test-cases', desc: 'Test cases.', extra: 'owner', sections: 'Overview · Test Cases', items: 'TC (tests AC)', checks: 'items-well-formed' },
    { name: 'adr', desc: 'Architecture decision log.', extra: 'owner', sections: 'Overview · Decisions', items: 'ADR (affects FR/NFR)', checks: 'adr-items-have-status' },
    { name: 'risk-register', desc: 'The risk register. Risks carry a disposition (open, mitigated, accepted, closed); only open risks hold derived status at amber.', extra: 'owner', sections: 'Overview · Risks', items: 'RISK (threatens BR/PR)', checks: 'risk-items-complete · risk-disposition-valid' },
    { name: 'raci-stakeholder', desc: 'Roles and responsibilities.', extra: 'owner', sections: 'Stakeholders · RACI Matrix', items: '', checks: 'raci-one-accountable' },
    { name: 'qa-test-plan', desc: 'Test strategy and gates.', extra: 'owner', sections: 'Scope · Test Approach · Environments · Entry Criteria · Exit Criteria', items: '', checks: 'measurable-exit-criteria' },
    { name: 'data-migration-plan', desc: 'How data moves and is verified.', extra: 'owner', sections: 'Scope · Source Systems · Field Mapping · Validation · Cutover · Rollback', items: '', checks: 'mapping-table' },
    { name: 'release-cutover-plan', desc: 'The go-live switch.', extra: 'owner', sections: 'Overview · Pre-Cutover Checklist · Cutover Steps · Verification · Rollback Trigger', items: '', checks: 'numbered-steps (Cutover Steps)' },
    { name: 'rollback-plan', desc: 'The abort path.', extra: 'owner', sections: 'Overview · Trigger Conditions · Rollback Steps · Verification', items: '', checks: 'numbered-steps (Rollback Steps)' },
    { name: 'hypercare-plan', desc: 'Heightened post-go-live support.', extra: 'owner', sections: 'Overview · Support Window · Severity Levels · Escalation · Exit Criteria', items: '', checks: 'measurable-exit-criteria' },
    { name: 'runbook', desc: 'Operational procedures.', extra: 'owner', sections: 'Overview · Prerequisites · Procedures · Monitoring · Escalation', items: '', checks: 'numbered-steps (Procedures)' },
    { name: 'operations', desc: 'A governed service catalog for ongoing work, chartered per period.', extra: 'owner, review_by', sections: 'Overview · Services', items: 'SVC', checks: 'svc-items-complete · ops-review-fresh (advisory; a stale review turns derived status amber)' },
    { name: 'status-report', desc: 'A point-in-time status.', extra: 'owner, period, rag', sections: 'Summary · Progress · Risks & Issues · Next Steps', items: '', checks: 'references-risk' },
    { name: 'post-implementation-review', desc: 'Closure and lessons.', extra: 'owner', sections: 'Summary · Outcomes vs Objectives · What Went Well · What Could Improve · Lessons Learned · Follow-up Actions', items: '', checks: 'required-sections' },
    { name: 'benefits-realization', desc: 'Benefits vs the business case.', extra: 'owner', sections: 'Overview · Benefits · Measurement · Realized Value', items: '', checks: 'measurable-items (Benefits)' },
  ];
  const relations = [
    ['traces', 'child requirement → the parent it refines', 'PR→BR · FR/NFR→PR · US→PR'],
    ['verifies', 'acceptance criterion → the requirement it checks', 'AC→PR/FR'],
    ['tests', 'test case → the acceptance criterion it exercises', 'TC→AC'],
    ['threatens', 'risk → the item it endangers', 'RISK→BR/PR'],
    ['affects', 'decision → the requirement it changes', 'ADR→FR/NFR'],
  ];
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Reference.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">Every kind is a Markdown document with YAML frontmatter and required sections. The canonical schema and audit criteria ship inside the docassert package, and your repo can override them; this page is the map.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">All document kinds share <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">kind</code>, <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">id</code>, <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">project</code>, <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">title</code>, and <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">status</code>. The remaining fields vary by kind and are listed below.</p>

    <div id="ref-shape" style="margin-bottom:44px;">
      <h2 class="h2-sm">The shared shape.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Frontmatter is typed metadata (validated against a JSON Schema); sections carry the content (checked for presence and completeness).</p>
      ${cb('any-document.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">&lt;one of the 19 below&gt;</span>
<span class="ck">project</span>: <span class="cv">PRJ-001-AUR</span>   <span class="cc"># the owning project's id</span>
<span class="ck">id</span>: <span class="cv">AUR-brd</span>        <span class="cc"># &lt;CODE&gt;-&lt;slug&gt;, globally unique</span>
<span class="ck">title</span>: Human-readable title
<span class="ck">status</span>: <span class="cv">draft</span>       <span class="cc"># draft | proposed | approved | baselined</span>
<span class="cc">---</span>

<span class="cv">## A Required Section</span>
Content — and, where the kind defines them, traceable items.`)}
    </div>

    <div id="ref-identity" style="margin-bottom:44px;">
      <h2 class="h2-sm">Project identity.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Documents live in per-project folders. Each project is anchored by a <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">project.md</code> (the 21st kind, <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">project</code>) whose id is the canonical <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">PRJ-NNN-CODE</code>. The <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">CODE</code> namespaces every document id (<code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">AUR-brd</code>) and item id (<code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">AUR-BR-001</code>).</p>
      ${cb('documents/PRJ-001-AUR/project.md', `<span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">project</span>
<span class="ck">id</span>: <span class="cv">PRJ-001-AUR</span>    <span class="cc"># PRJ-&lt;NNN&gt;-&lt;CODE&gt;, unique across all projects</span>
<span class="ck">code</span>: <span class="cv">AUR</span>            <span class="cc"># 2–6 letters; namespaces this project's ids</span>
<span class="ck">name</span>: Aurora — Customer Onboarding Overhaul
<span class="ck">sponsor</span>: <span class="cs">jordan.lee</span>
<span class="ck">status</span>: <span class="cv">active</span>         <span class="cc"># proposed | active | on-hold | closed</span>
<span class="cc">---</span>`)}
      <p style="font-size:14px;color:var(--muted);margin:14px 0 0;">An optional <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">repo: OWNER/NAME</code> on the anchor maps the project to its code repository for the execution bridge. <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">docassert projects</code> generates <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">projects.yaml</code> from these anchors, and a CI check fails if it drifts or an id/code is duplicated. Checks: <span class="mono" style="font-size:12px;color:var(--muted);">project-id-format</span>.</p>
    </div>

    <div id="ref-items" style="margin-bottom:44px;">
      <h2 class="h2-sm">Item &amp; link syntax.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Traceable rows are bullets with a bold ID and optional typed links. Broken links always block; coverage of approved items is enforced.</p>
      ${cb('convention', `- <span class="ck">**AUR-PR-014**</span> (<span class="cv">traces</span>: AUR-BR-001, AUR-BR-003): The product shall provide a self-serve flow.`)}
      <div style="border:1px solid var(--border);border-radius:11px;overflow:hidden;margin-top:16px;">
        <div style="display:grid;grid-template-columns:96px 1fr 168px;gap:12px;padding:9px 14px;background:var(--panel-2);font-family:'JetBrains Mono',monospace;font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--faint);">
          <span>relation</span><span>meaning</span><span>example</span>
        </div>
        ${relations.map(([r, meaning, eg]) => `
        <div style="display:grid;grid-template-columns:96px 1fr 168px;gap:12px;padding:10px 14px;border-top:1px solid var(--border);align-items:baseline;">
          <span class="mono" style="font-size:12.5px;font-weight:600;color:var(--accent);">${r}</span>
          <span style="font-size:13.5px;color:var(--ink-2);">${meaning}</span>
          <span class="mono" style="font-size:11px;color:var(--muted);">${eg}</span>
        </div>`).join('')}
      </div>
    </div>

    <div id="ref-kinds" style="margin-bottom:24px;">
      <h2 class="h2-sm">The twenty document kinds.</h2>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 22px;">
        ${kinds.map(k => `<a href="#ref-${k.name}" data-anchor="ref-${k.name}" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 8px;background:var(--panel);border:1px solid var(--border);border-radius:6px;text-decoration:none;color:var(--ink-2);">${k.name}</a>`).join('')}
      </div>
      ${kinds.map(k => `
      <div id="ref-${k.name}" style="border:1px solid var(--border);border-radius:11px;padding:13px 16px;margin-bottom:9px;">
        <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:8px;">
          <span class="mono" style="font-size:13px;font-weight:600;color:var(--accent);">${k.name}</span>
          <span style="font-size:13.5px;color:var(--ink-2);">${k.desc}</span>
        </div>
        <div class="mono" style="font-size:11.5px;color:var(--muted);line-height:1.85;">
          <div><span style="display:inline-block;width:74px;color:var(--faint);">frontmatter</span>kind, id, project, title, status, ${k.extra}</div>
          <div><span style="display:inline-block;width:74px;color:var(--faint);">sections</span>${k.sections}</div>
          ${k.items ? `<div><span style="display:inline-block;width:74px;color:var(--faint);">items</span>${k.items}</div>` : ''}
          <div><span style="display:inline-block;width:74px;color:var(--faint);">checks</span>${k.checks}</div>
        </div>
      </div>`).join('')}
    </div>

    <div style="margin-top:8px;padding:18px 20px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <p style="font-size:15px;color:var(--ink);margin:0 0 12px;max-width:60ch;">The full JSON Schema, audit criteria, and a runnable sample for every kind live in the pipeline repo. Fork them; add your own.</p>
      <a class="btn-secondary" href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener">schema/ · criteria/ · templates/ →</a>
    </div>

    ${pageNavHtml('/reference')}
    ${provenanceFooter('/reference')}
  </div>`;
}
