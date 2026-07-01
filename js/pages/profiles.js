import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderProfiles() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l3);">3</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 3 · Profiles</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Composable, named bundles.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">A profile is a fork of the templates and criteria, tuned for a context. Which kinds you use, which sections are required, how strict the checks are — all of it is just the library, adjusted.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Think: Agile Manifesto → Scrum / Kanban / SAFe. The manifesto doesn't change. The implementations diverge.</p>

    <div id="what-profile" style="margin-bottom:52px;">
      <h2 class="h2-sm">What a profile is.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Nothing new to learn — a profile edits the <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">criteria/</code> files. Here a regulated-industry profile tightens the base charter: an extra required section and a required reviewer.</p>
      ${cb('criteria/charter.criteria.yaml (regulated-industry)', `<span class="ck">kind</span>: <span class="cv">charter</span>
<span class="ck">required_sections</span>:
  - Objective
  - Success Criteria
  - Risks
  - Approval
  - <span class="cv">Data Classification</span>     <span class="cc"># added by this profile</span>
<span class="ck">checks</span>:
  - { <span class="ck">id</span>: measurable-success-criteria, <span class="ck">blocking</span>: true }
  - { <span class="ck">id</span>: risks-have-owner-and-mitigation, <span class="ck">blocking</span>: true }
<span class="cc"># plus a required PR reviewer, via branch protection</span>`)}
    </div>

    <div id="available-profiles" style="margin-bottom:52px;">
      <h2 class="h2-sm">Example profiles.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Illustrations of the same library tuned three ways. Fork one as a starting point.</p>
      <div style="display:grid;gap:12px;">
        ${[
          { id: 'regulated-industry', color: 'var(--warn)', title: 'regulated-industry', desc: 'All 20 kinds, strictest criteria. Adds a Data Classification section, requires a named reviewer on main, and keeps the full audit history for retention. For finance, healthcare, or government.' },
          { id: 'lean-startup', color: 'var(--ok)', title: 'lean-startup', desc: 'A handful of kinds — charter, brd, prd, test-cases. Coverage stays advisory until you grow, so a small team is never blocked for unfinished downstream docs. Start here.' },
          { id: 'agile-delivery', color: 'var(--l2)', title: 'agile-delivery', desc: 'User-story-centric. Stories carry acceptance criteria, every story traces to a product requirement, and every acceptance criterion needs a test case. For teams working in stories, not specs.' },
        ].map(p => `
          <div class="card" style="border-left:3px solid ${p.color};">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              <span class="mono" style="font-size:13px;font-weight:600;color:var(--accent);">${p.title}</span>
            </div>
            <div class="card-body">${p.desc}</div>
          </div>`).join('')}
      </div>
    </div>

    <div id="author-profile" style="margin-bottom:48px;">
      <h2 class="h2-sm">Author your own.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Fork the library, edit the criteria and templates to your standard, and publish it. Anyone can start from your fork.</p>
      ${cb('terminal', `<span class="cc"># fork the reference library and make it yours</span>
gh repo fork c4g-john/pmo-as-code-pipeline --clone
cd pmo-as-code-pipeline

<span class="cc"># edit criteria/ and templates/ to your standard, then commit</span>
git commit -am "our-org profile: stricter charters, required reviewer"`)}
    </div>

    ${pageNavHtml('/profiles')}
    ${provenanceFooter('/profiles')}
  </div>`;
}
