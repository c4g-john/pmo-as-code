import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderProfiles() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l3);">3</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 3 · Profiles</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Composable, named bundles.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">A profile is a named bundle of expectations for a project: which document kinds it must carry, which are merely recommended, and how strict the gate is. Point a project at one, and its status page tells you what's still missing.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Think: Agile Manifesto → Scrum / Kanban / SAFe. The manifesto doesn't change. The implementations diverge.</p>

    <div id="what-profile" style="margin-bottom:52px;">
      <h2 class="h2-sm">What a profile is.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">A small YAML file that lists the kinds a project is expected to carry, at two levels — <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">required</code> and <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">recommended</code>. A project opts in with one line of frontmatter.</p>
      ${cb('profiles/regulated-industry.yaml', `<span class="ck">name</span>: <span class="cv">regulated-industry</span>
<span class="ck">enforce_when</span>: <span class="cv">active</span>          <span class="cc"># gaps block CI only once the project is active</span>
<span class="ck">expects</span>:
  <span class="ck">required</span>:    [charter, business-case, brd, prd, frnfr,
                test-cases, risk-register, raci-stakeholder, qa-test-plan]
  <span class="ck">recommended</span>: [adr, runbook, status-report, benefits-realization]`)}
      <div style="height:12px;"></div>
      ${cb('documents/PRJ-001-AUR/project.md', `<span class="ck">kind</span>: <span class="cv">project</span>
<span class="ck">id</span>: <span class="cv">PRJ-001-AUR</span>
<span class="ck">status</span>: <span class="cv">active</span>
<span class="ck">profile</span>: <span class="cv">regulated-industry</span>   <span class="cc"># opt in</span>`)}
      <div class="card" style="margin-top:16px;">
        <div class="card-title">Complete · incomplete · missing</div>
        <div class="card-body" style="margin-top:4px;line-height:1.6;">The project page classifies each expected kind: <strong style="color:var(--ok);font-weight:600;">complete</strong> (present, approved, passing), <strong style="color:var(--warn);font-weight:600;">incomplete</strong> (present but still draft), or <strong style="color:var(--bad);font-weight:600;">missing</strong>. A <em style="font-style:normal;color:var(--ink);">required</em> kind that's missing blocks the merge — but only once the project reaches <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">enforce_when</code>; a proposed project shows the same gaps as advisory amber and never blocks.</div>
      </div>
    </div>

    <div id="available-profiles" style="margin-bottom:52px;">
      <h2 class="h2-sm">The profiles that ship.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Three profiles live in the reference library today. Point a project at one, or copy it as a starting point.</p>
      <div style="display:grid;gap:12px;">
        ${[
          { color: 'var(--warn)', title: 'regulated-industry', note: 'The full governance spine — for finance, healthcare, or government.',
            required: 'charter, business-case, brd, prd, frnfr, test-cases, risk-register, raci-stakeholder, qa-test-plan',
            recommended: 'adr, runbook, status-report, benefits-realization' },
          { color: 'var(--ok)', title: 'lean-startup', note: 'The minimum spine. Gaps stay advisory until the project goes active, so a small team is never blocked for unfinished docs.',
            required: 'charter, brd, prd, test-cases', recommended: 'risk-register' },
          { color: 'var(--l2)', title: 'agile-delivery', note: 'Story-led: every story traces to a product requirement, every acceptance criterion to a test.',
            required: 'charter, prd, user-story, test-cases', recommended: 'brd, risk-register' },
        ].map(p => `
          <div class="card" style="border-left:3px solid ${p.color};">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              <span class="mono" style="font-size:13px;font-weight:600;color:var(--accent);">${p.title}</span>
            </div>
            <div class="card-body" style="margin-bottom:10px;">${p.note}</div>
            <div class="mono" style="font-size:11.5px;color:var(--muted);line-height:1.8;">
              <div><span style="display:inline-block;width:92px;color:var(--faint);">required</span>${p.required}</div>
              <div><span style="display:inline-block;width:92px;color:var(--faint);">recommended</span>${p.recommended}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div id="author-profile" style="margin-bottom:48px;">
      <h2 class="h2-sm">Author your own.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Drop a new file in <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">profiles/</code> and point projects at it. For deeper changes — extra required sections, stricter checks — edit the <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">criteria/</code> trio the kinds share.</p>
      ${cb('profiles/our-org.yaml', `<span class="ck">name</span>: <span class="cv">our-org</span>
<span class="ck">enforce_when</span>: <span class="cv">active</span>
<span class="ck">expects</span>:
  <span class="ck">required</span>:    [charter, brd, prd, test-cases, risk-register]
  <span class="ck">recommended</span>: [adr, runbook]`)}
      <p style="font-size:14px;color:var(--muted);margin:14px 0 0;">Then <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">profile: our-org</code> in each project's <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">project.md</code>. A CI check flags an unknown profile, so a typo can't slip through.</p>
    </div>

    ${pageNavHtml('/profiles')}
    ${provenanceFooter('/profiles')}
  </div>`;
}
