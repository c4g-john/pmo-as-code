import { cb, pageNavHtml, provenanceFooter } from '../ui.js';
import { state } from '../state.js';
import { REVEAL_PASS, REVEAL_COMPUTING } from '../data.js';

export function renderHome() {
  const revealedHtml = state.revealed ? REVEAL_PASS : REVEAL_COMPUTING;

  return `
    <div>
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        A vendor-neutral standard · running live in two public deployments
      </div>
      <h1 class="h1">Run the PMO from version-controlled, declarative files.</h1>
      <p class="lead">Define a portfolio's governance, structure, and operating model as plain files in Git, so status, roadmaps, risks, and decisions are <em style="color:var(--ink);font-style:normal;border-bottom:1px solid var(--accent-line);">generated from a single source of truth</em> instead of hand-maintained in slides and spreadsheets.</p>
      <p class="sub">It takes the Infrastructure-as-Code / GitOps playbook and points it at the PMO.</p>
      <div class="cta-row">
        <a class="btn-primary" href="#/rosetta">See the Rosetta Stone <span class="mono">→</span></a>
        <a class="btn-secondary" href="#/quickstart">Quickstart</a>
      </div>

      <div class="thread-rail" style="margin-top:64px;">

        <section class="thread-section" id="thesis">
          <span class="thread-node"></span>
          <div class="eyebrow">The problem it answers</div>
          <h2 class="h2">The reporting is stale and the reasoning is lost.</h2>
          <p class="body">Today's PMO runs on PowerPoint, Excel, SharePoint, and email. Nothing is authoritative, and nobody records <em style="font-style:italic;color:var(--ink);">why</em> decisions were made.</p>
          <div class="grid-2">
            <div class="card"><div class="card-title">Stale artifacts</div><div class="card-body">A deck is out of date the moment it's shared.</div></div>
            <div class="card"><div class="card-title">RAG fiction</div><div class="card-body">Red, amber, and green are whatever the PM reports.</div></div>
            <div class="card"><div class="card-title">Unauditable governance</div><div class="card-body">Approval is an email in an inbox no one can audit.</div></div>
            <div class="card"><div class="card-title">An army of PMs</div><div class="card-body">It takes a team just to keep the decks current.</div></div>
          </div>
        </section>

        <section class="thread-section" id="manifesto-strip">
          <span class="thread-node"></span>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:11px;">
            <span class="layer-badge" style="background:var(--l1);">1</span>
            <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">The Manifesto</span>
          </div>
          <h2 class="h2">We value the items on the left more.</h2>
          <div style="display:grid;gap:9px;">
            <div class="value-pair"><span class="value-left">Declarative sources of truth</span><span class="value-over">over</span><span class="value-right">hand-maintained artifacts</span></div>
            <div class="value-pair"><span class="value-left">Automation and audit</span><span class="value-over">over</span><span class="value-right">gates and approvals</span></div>
            <div class="value-pair"><span class="value-left">Traceability</span><span class="value-over">over</span><span class="value-right">dense documentation</span></div>
            <div class="value-pair"><span class="value-left">Derived status</span><span class="value-over">over</span><span class="value-right">self-reported status</span></div>
            <div class="value-pair"><span class="value-left">Composable definitions</span><span class="value-over">over</span><span class="value-right">bespoke, siloed tools</span></div>
          </div>
          <p style="font-style:italic;color:var(--ink-2);font-size:14.5px;margin:16px 2px 0;">That is: while there is value in the items on the right, we value the items on the left more.</p>
          <a href="#/manifesto" style="display:inline-flex;align-items:center;gap:7px;margin-top:14px;color:var(--accent);text-decoration:none;font-weight:600;font-size:14.5px;">Read the manifesto <span class="mono">→</span></a>
        </section>

        <section class="thread-section" id="reveal">
          <span class="thread-node"></span>
          <div class="eyebrow">The core beat</div>
          <h2 class="h2">Declared, then checked.</h2>
          <p class="body">You author the <em style="font-style:normal;color:var(--ink);">document</em>; the pipeline checks its fields, sections, and requirement links on every change. Watch it run:</p>
          <div class="reveal-grid">
            <div class="code-block">
              <div class="code-titlebar">
                <span class="traffic-light" style="background:#ff5f57;"></span>
                <span class="traffic-light" style="background:#febc2e;"></span>
                <span class="traffic-light" style="background:#28c840;"></span>
                <span class="code-filename">documents/PRJ-001-AUR/charter.md</span>
              </div>
              <pre class="code-pre"><span class="cc">---</span>
<span class="ck">kind</span>: <span class="cv">charter</span>
<span class="ck">project</span>: <span class="cv">PRJ-001-AUR</span>
<span class="ck">id</span>: <span class="cv">AUR-charter</span>
<span class="ck">status</span>: <span class="cv">approved</span>
<span class="cc">---</span>
<span class="cv">## Objective</span>
Cut onboarding from 14 days to under 2.
<span class="cv">## Success Criteria</span>
- Onboarding p50 below 48 hours.</pre>
            </div>
            <div class="reveal-panel">
              <div class="reveal-header">
                <span class="mono" style="font-size:12px;color:var(--muted);">docassert validate</span>
                <button class="rederive-btn" id="rederive-btn">↻ run audit</button>
              </div>
              <div id="reveal-output">${revealedHtml}</div>
            </div>
          </div>
          <p class="caption">The checks decide what counts as done, the same way every time, and the same checks run for real in CI.</p>
        </section>

        <section class="thread-section" id="thread">
          <span class="thread-node"></span>
          <div class="eyebrow">The signature concept</div>
          <h2 class="h2">Follow the thread: <span style="color:var(--accent);">why does this test exist?</span></h2>
          <p class="body">The links carry the value. Documents stay thin and richly connected, so any test walks back to the business reason it exists.</p>

          <div style="position:relative;padding-left:32px;border-left:2px solid var(--accent-line);">
            <div style="position:relative;margin-bottom:8px;">
              <span class="thread-node-lg"></span>
              <div class="card">
                <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px;"><span class="kind-badge">Test Case</span><span class="mono" style="font-size:11px;color:var(--muted);">AUR-TC-001</span></div>
                <div style="font-size:14px;color:var(--ink-2);">Complete the self-serve wizard → account active, zero support tickets.</div>
              </div>
            </div>
            <div class="thread-connector">↑ tests</div>
            <div style="position:relative;margin-bottom:8px;">
              <span class="thread-node-sm"></span>
              <div class="card">
                <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px;"><span class="kind-badge">Acceptance Criterion</span><span class="mono" style="font-size:11px;color:var(--muted);">AUR-AC-001</span></div>
                <div style="font-size:14px;color:var(--ink-2);">A new customer completes setup with no support ticket created.</div>
              </div>
            </div>
            <div class="thread-connector">↑ verifies</div>
            <div style="position:relative;margin-bottom:8px;">
              <span class="thread-node-sm"></span>
              <div class="card">
                <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px;"><span class="kind-badge">Product Requirement</span><span class="mono" style="font-size:11px;color:var(--muted);">AUR-PR-014</span></div>
                <div style="font-size:14px;color:var(--ink-2);">The product shall provide a self-serve onboarding flow.</div>
              </div>
            </div>
            <div class="thread-connector">↑ traces to</div>
            <div style="position:relative;margin-bottom:8px;">
              <span class="thread-node-sm"></span>
              <div class="card">
                <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px;"><span class="kind-badge">Business Requirement</span><span class="mono" style="font-size:11px;color:var(--muted);">AUR-BR-001</span></div>
                <div style="font-size:14px;color:var(--ink-2);">Reduce median customer onboarding time to under 2 days.</div>
              </div>
            </div>
            <div class="thread-connector">↑ which serves</div>
            <div style="position:relative;">
              <span class="thread-node-lg"></span>
              <div style="background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:11px;padding:14px 16px;">
                <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px;"><span class="kind-badge">Charter</span><span class="mono" style="font-size:11px;color:var(--accent);">objective</span></div>
                <div style="font-size:14px;color:var(--ink);">Cut customer onboarding from 14 days to 2.</div>
              </div>
            </div>
          </div>
          <p style="font-size:14px;color:var(--muted);margin:22px 2px 0;max-width:60ch;">Five hops, no slide-hunting. The pipeline generates this walk from the links; it is the same graph behind the traceability matrix. (Aurora is the fictional sample project used in examples across this site; its people are invented. The deployments below are real.)</p>
        </section>

        <section class="thread-section" id="portfolio">
          <span class="thread-node"></span>
          <div class="eyebrow">From one document to a portfolio</div>
          <h2 class="h2">Every project has a unique ID and its own live page.</h2>
          <p class="body">Each project carries a stable identity, <span class="mono" style="color:var(--accent);">PRJ-001-AUR</span>, that namespaces its documents (<span class="mono" style="font-size:13px;">documents/PRJ-001-AUR/</span>) and its items (<span class="mono" style="font-size:13px;">AUR-BR-001</span>). Nothing collides, and every item says which project it belongs to. The pipeline publishes a <em style="font-style:normal;color:var(--ink);">portfolio dashboard</em>: one derived RAG card per project, each linking to that project's status page.</p>
          <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:6px;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 15px;background:var(--panel-2);">
              <span class="mono" style="font-size:12px;color:var(--muted);">portfolio dashboard · illustrated</span>
              <span class="mono" style="font-size:11px;color:var(--warn);">● AMBER</span>
            </div>
            ${[
              ['AUR','Aurora — Customer Onboarding', 'PRJ-001-AUR', 'var(--warn)', 'AMBER', '20 docs · 2 open risks'],
              ['ATL','Atlas — Partner Portal', 'PRJ-002-ATL', 'var(--ok)', 'GREEN', '5 docs · fully traced'],
              ['PHX','Phoenix — Support Response', 'PRJ-004-PHX', 'var(--ok)', 'GREEN', 'charter · project'],
            ].map(([code, name, pid, color, rag, stat]) => `
              <div style="display:flex;align-items:center;gap:12px;padding:12px 15px;border-top:1px solid var(--border);">
                <span style="width:9px;height:9px;border-radius:50%;background:${color};flex:none;"></span>
                <span class="mono" style="font-size:11px;color:var(--muted);background:var(--panel);border:1px solid var(--border);padding:2px 6px;border-radius:5px;flex:none;">${code}</span>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:14px;color:var(--ink);">${name}</div>
                  <div class="mono" style="font-size:11px;color:var(--faint);">${pid} · ${stat}</div>
                </div>
                <span class="mono" style="font-size:11px;color:${color};flex:none;">${rag}</span>
              </div>`).join('')}
          </div>
          <p class="caption">Each RAG is <em style="font-style:normal;color:var(--ink);">computed</em> from that project's own documents, using coverage, open risks, and failing audits. The panel above shows the format; the live dashboard has today's states. <a href="https://c4g-john.github.io/pmo-as-code-pipeline/" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">See the live dashboard →</a></p>
        </section>

        <section class="thread-section" id="proof">
          <span class="thread-node"></span>
          <div class="eyebrow">Live proof</div>
          <h2 class="h2">The method is running in public right now.</h2>
          <p class="body">This site is ordinary hand-written web pages. The pipeline it describes runs in public, in two deployments that regenerate their dashboards and badges from their documents on every push. <strong style="font-weight:600;color:var(--ink);">Aurora</strong> is the reference portfolio, and <strong style="font-weight:600;color:var(--ink);">Refuge for Humans</strong> is a real product spec converted from a Word BRD.</p>
          <div class="grid-2">
            <div class="card">
              <div class="card-title" style="display:flex;align-items:center;gap:10px;">Reference portfolio <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Fpmo-as-code-pipeline%2Fbadge.json" alt="live derived status" height="18"></div>
              <div class="card-body" style="margin-top:6px;">Four sample projects, the gate on every pull request, a published traceability matrix. The badge above is the live derived status.</div>
              <div style="margin-top:12px;"><a href="https://c4g-john.github.io/pmo-as-code-pipeline/" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;font-size:14px;">Dashboard →</a>&nbsp;&nbsp;<a href="https://github.com/c4g-john/pmo-as-code-pipeline" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;font-size:14px;">Repo →</a></div>
            </div>
            <div class="card">
              <div class="card-title" style="display:flex;align-items:center;gap:10px;">Refuge for Humans <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fc4g-john.github.io%2Frefuge-for-humans-pmo%2Fbadge.json" alt="live derived status" height="18"></div>
              <div class="card-body" style="margin-top:6px;">A real 14-section BRD converted faithfully, with its gaps on display. The <a href="#/case-study" style="color:var(--accent);text-decoration:none;">case study</a> covers what the audit found.</div>
              <div style="margin-top:12px;"><a href="https://c4g-john.github.io/refuge-for-humans-pmo/" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;font-size:14px;">Dashboard →</a>&nbsp;&nbsp;<a href="https://github.com/c4g-john/refuge-for-humans-pmo" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;font-size:14px;">Repo →</a></div>
            </div>
          </div>
        </section>

      </div>

      ${pageNavHtml('/')}
      ${provenanceFooter('/')}
    </div>`;
}
