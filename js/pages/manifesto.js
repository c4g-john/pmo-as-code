import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderManifesto() {
  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l1);">1</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 1 · The Manifesto</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">The five value-pairs.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">The layer that rarely changes and is owned by no one. It mirrors the Agile Manifesto, opinionated in its values and open in how you implement them.</p>

      <div id="values" style="margin-top:40px;">
        <div class="eyebrow">We value</div>
        <div style="display:grid;gap:9px;">
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Declarative sources of truth</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">hand-maintained artifacts</span></div>
          <div class="value-pair featured" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Automation and audit</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">gates and approvals</span></div>
          <div class="value-pair featured" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Traceability</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">dense documentation</span></div>
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Derived status</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">self-reported status</span></div>
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Composable definitions</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">one-off, siloed tools</span></div>
        </div>
        <p style="font-style:italic;color:var(--ink-2);font-size:15px;margin:18px 2px 0;">That is: while there is value in the items on the right, we value the items on the left more.</p>
      </div>

      <div id="deepdives" style="margin-top:54px;">
        <h2 class="h2-sm">Two carry the most weight.</h2>
        <p style="color:var(--muted);font-size:15.5px;margin:0 0 18px;">Each gets its own explainer.</p>
        <div class="explainer-grid">
          <a class="explainer-card" href="#/manifesto/automation">
            <div class="explainer-num">01 · explainer</div>
            <div class="explainer-title">Automation &amp; audit over gates &amp; approvals</div>
            <div class="explainer-body">The posture shifts from prevention to flow, and the gate becomes policy as code.</div>
            <div class="explainer-cta">Read →</div>
          </a>
          <a class="explainer-card" href="#/manifesto/traceability">
            <div class="explainer-num">02 · explainer</div>
            <div class="explainer-title">Traceability over dense documentation</div>
            <div class="explainer-body">Value lives in the links between thin, richly connected artifacts.</div>
            <div class="explainer-cta">Read →</div>
          </a>
        </div>
      </div>

      <div id="layers" style="margin-top:54px;">
        <h2 class="h2-sm">Three layers, each clearly owned.</h2>
        <p style="color:var(--muted);font-size:15.5px;margin:0 0 18px;max-width:58ch;">The structure keeps strong opinions and open implementation from blurring together, so a reader always knows which layer they're standing on.</p>
        <div style="display:grid;gap:11px;">
          <div class="layer-card" style="border-left:3px solid var(--l1);">
            <span class="layer-num" style="background:var(--l1);">1</span>
            <div><div class="layer-card-title">The Manifesto</div><div class="layer-card-body">Five value-pairs · rarely changes · owned by no one.</div></div>
          </div>
          <div class="layer-card" style="border-left:3px solid var(--l2);">
            <span class="layer-num" style="background:var(--l2);">2</span>
            <div><div class="layer-card-title">The Reference Approach</div><div class="layer-card-body">Our opinionated implementation: document model, kinds, checks · versioned · maintained by John Tanner at C4G.</div></div>
          </div>
          <div class="layer-card" style="border-left:3px solid var(--l3);">
            <span class="layer-num" style="background:var(--l3);">3</span>
            <div><div class="layer-card-title">Profiles</div><div class="layer-card-body">Named bundles others compose or fork: regulated-industry, lean-startup, agile-delivery · independent · owned by the community.</div></div>
          </div>
        </div>
      </div>

      <div style="margin-top:40px;padding:20px 22px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
        <div class="eyebrow" style="margin-bottom:8px;">The standard is written down</div>
        <p style="font-size:15.5px;color:var(--ink);margin:0 0 14px;max-width:60ch;">Layer 2 is a versioned specification with conformance language, precise grammars, and blocking semantics. Anyone can implement it; <a href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">docassert</a> is the reference implementation.</p>
        <a class="btn-secondary" href="https://github.com/c4g-john/pmo-as-code-spec" target="_blank" rel="noopener">Read the specification →</a>
      </div>


    <div id="why-i-wrote" style="margin:64px 0 8px;border-top:1px solid var(--border);padding-top:44px;">
      <div class="eyebrow">From the author</div>
      <h2 class="h2" style="margin-bottom:22px;">Why I wrote this.</h2>
      <div style="max-width:66ch;display:grid;gap:18px;font-size:16px;line-height:1.7;color:var(--ink-2);">
        <p style="margin:0;">My career began in development. I did some interesting things in the non-profit sector, corporate media, and then federal space. I eventually wound up kicking off a DevOps movement at the White House Communications Agency, before spending the next several years consulting with Fortune 500s around the world on their development practices. That path led me to a position over delivery modernization at Freddie Mac, and on to running my own company teaching others how to get on top of AI readiness.</p>
        <p style="margin:0;">Now, I lead the PMO at a Fortune 200, and I bring a lot of expectations with me.</p>
        <p style="margin:0;">In engineering, the truth always lives in the source. Every change is tested multiple times before it is deployed, and real-time monitoring shows the state of the whole as it truly is. Nobody ever has to ask the deployment how it feels about the way things are going. Stuff is either working or it isn't, and when done properly, the stuff not working never makes it out to the customer.</p>
        <p style="margin:0;">Project and portfolio management, on the other hand, have always been much more subjective. Numbers are usually collected by hand, entered into a Gantt chart or pointed to a backlog, and invariably make their way into some status deck to hand off to leadership. The insights that may be garnered are usually out of date by the time anyone reviews them, and inaccuracy is almost treated as a feature. Why show red when green is such a more calming color, right?</p>
        <p style="margin:0;">The automated development discipline I spent twenty years helping install around the world always seemed to stop just outside of the PMO's door. PMO as Code is an answer to that problem.</p>
        <p style="margin:0;">If you view documents as the source for the PMO system, a lot of engineering practices and parallels begin to apply. Document pipelines can test every structural change just like code is unit tested. Modern LLMs can judge whether a requirement actually serves the goal it claims to, just like infrastructure monitoring judges a service against its thresholds. Project status can be derived from core documents the way a binary is built from code. And reconciliation loops keep the delivery boards converged with the documents, the same way GitOps keeps a cluster converged with its manifests. When something drifts, the system notices before I do.</p>
        <p style="margin:0;">On my own portfolio, when an automation flags a project amber, the public dashboard says amber, and nobody gets to change it for a slide deck.</p>
        <p style="margin:0;">The world going AI native is what makes this approach an urgent need instead of merely the right way to do things. AI-assisted delivery moves faster than any hand-assembled report can describe, so the choice is a reporting layer that compiles in seconds or outdated insights that were overtaken by events before they even got manually updated.</p>
        <p style="margin:0;">Whether PMs will trade away their curated plans and polished decks for raw Git and Markdown is a question yet to be answered, but I'm providing the thoughts and tools necessary to get started for free right here, and all feedback is welcome. I'm keeping it all public and open: the tool and the standard are Apache 2.0, free to adopt if you choose.</p>
        <p style="margin:6px 0 0;font-style:italic;color:var(--ink);">John Tanner</p>
      </div>
    </div>

      ${pageNavHtml('/manifesto')}
      ${provenanceFooter('/manifesto')}
    </div>`;
}

export function renderAutomation() {
  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l1);">1</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 1 · Manifesto · Explainer 01</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(28px,4vw,42px);line-height:1.06;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Automation and audit over gates and approvals.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 32px;">A gate assumes people will misbehave unless someone blocks them. Audit starts from good faith and relies on the record to keep everyone accountable.</p>

      <div id="shift" style="margin-bottom:48px;">
        <h2 class="h2-sm">The shift: from prevention to flow.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">A gate puts a human in the loop who must approve before work proceeds. It slows the work and fills an inbox with decisions that no one can audit later, and the default posture becomes <em>stop until told otherwise</em>.</p>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Audit inverts that default. Every change and every decision lands in Git history, the record supplies the accountability, and the work keeps moving.</p>
        <div class="grid-2">
          <div class="card" style="border-top:2px solid var(--bad);">
            <div class="card-title" style="color:var(--bad);">Gates</div>
            <div class="card-body">An approval email in an inbox that nobody can audit later. The default is stop.</div>
          </div>
          <div class="card" style="border-top:2px solid var(--ok);">
            <div class="card-title" style="color:var(--ok);">Audit</div>
            <div class="card-body">Git history and merged pull requests, with every decision traceable. The default is flow.</div>
          </div>
        </div>
      </div>

      <div id="policy" style="margin-bottom:48px;">
        <h2 class="h2-sm">The gate becomes policy as code.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">The gate becomes an automated, auditable check that runs in CI, and the result lands in the repository's history alongside the change it judged.</p>
        <div class="code-block">
          <div class="code-titlebar">
            <span class="traffic-light" style="background:#ff5f57;"></span>
            <span class="traffic-light" style="background:#febc2e;"></span>
            <span class="traffic-light" style="background:#28c840;"></span>
            <span class="code-filename">.github/workflows/audit.yml</span>
          </div>
          <pre class="code-pre"><span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:        <span class="cc"># validate each changed document</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span>, <span class="ck">with</span>: { <span class="ck">fetch-depth</span>: 0 } }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cv">validate</span>, <span class="ck">changed-only</span>: <span class="cv">'true'</span> }
  <span class="ck">consistency</span>:  <span class="cc"># broken traces block the merge</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span> }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cs">consistency</span> }</pre>
        </div>
      </div>

      <div id="tension" style="margin-bottom:48px;">
        <h2 class="h2-sm">Where gates still belong.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Some contexts legally require a person's signature, and the framework accommodates them. A human approval stays available for the cases that need one, as a documented exception.</p>
        <div class="card" style="border-left:3px solid var(--warn);">
          <div class="card-title">When a human signature is required</div>
          <div class="card-body" style="margin-top:6px;">Model it explicitly with branch protection that requires a named reviewer on the pull request. The approval lands in the merge record with the rest of the history, and one of the gate's signals is now a person's explicit sign-off.</div>
        </div>
      </div>

      ${pageNavHtml('/manifesto/automation')}
      ${provenanceFooter('/manifesto/automation')}
    </div>`;
}

export function renderTraceability() {
  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l1);">1</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 1 · Manifesto · Explainer 02</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(28px,4vw,42px);line-height:1.06;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Traceability over dense documentation.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 32px;">Value lives in the links between thin, richly connected artifacts.</p>

      <div id="unit" style="margin-bottom:48px;">
        <h2 class="h2-sm">The unit of value is the link.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Dense documentation defeats its own purpose. A 40-page Word document describes a project in exhaustive detail, yet it cannot tell you <em style="font-style:italic;color:var(--ink);">why</em> a status is red or which decision accepted the risk that caused it, so you read everything to find anything.</p>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Traceability replaces density with linkage. Each thin artifact (a charter, a RAID entry, a decision record) carries a stable ID and typed references to the others, so a reader can walk from any status to its root cause in five hops without opening a deck.</p>
      </div>

      <div id="thread-ex" style="margin-bottom:48px;">
        <h2 class="h2-sm">The thread in practice.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">The canonical question is whether every requirement gets tested. Every hop below is a typed link that CI checks on every pull request.</p>
        <div style="position:relative;padding-left:28px;border-left:2px solid var(--accent-line);display:grid;gap:2px;">
          ${[
            ['Test Case', 'AUR-TC-001', 'wizard → account active, zero tickets', 'tests →'],
            ['Acceptance Criterion', 'AUR-AC-001', 'new customer set up, no support ticket', 'verifies →'],
            ['Product Requirement', 'AUR-PR-014', 'self-serve onboarding flow', 'traces to →'],
            ['Business Requirement', 'AUR-BR-001', 'onboarding under 2 days', 'which serves →'],
            ['Charter', 'AUR-charter', 'objective: 14 days → under 2', null],
          ].map(([kind, id, desc, link], i, arr) => `
            <div style="position:relative;padding:10px 0 ${link ? '6px' : '0'};">
              <span style="position:absolute;left:-36px;top:14px;width:${i===0||i===arr.length-1?'13':'11'}px;height:${i===0||i===arr.length-1?'13':'11'}px;border-radius:50%;background:${i===0||i===arr.length-1?'var(--accent)':'var(--bg)'};border:${i===0||i===arr.length-1?'0':'2px solid var(--accent)'};box-shadow:${i===0||i===arr.length-1?'0 0 0 3px var(--bg),0 0 0 5px var(--accent-soft)':'none'};"></span>
              <div style="background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:12px 15px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;"><span class="kind-badge">${kind}</span><span class="mono" style="font-size:11px;color:var(--muted);">${id}</span></div>
                <div style="font-size:14px;color:var(--ink-2);">${desc}</div>
              </div>
              ${link ? `<div class="mono" style="font-size:11px;color:var(--muted);margin:6px 0 0 2px;">${link}</div>` : ''}
            </div>`).join('')}
        </div>
      </div>

      <div id="schema" style="margin-bottom:48px;">
        <h2 class="h2-sm">The schema enforces this.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Every requirement is an item with a stable ID and typed links, so the lineage is a queryable graph that CI checks. Ask "which requirements have no test?" and the tool answers.</p>
        <div class="code-block">
          <div class="code-titlebar">
            <span class="traffic-light" style="background:#ff5f57;"></span>
            <span class="traffic-light" style="background:#febc2e;"></span>
            <span class="traffic-light" style="background:#28c840;"></span>
            <span class="code-filename">documents/PRJ-001-AUR/prd.md</span>
          </div>
          <pre class="code-pre"><span class="cv">## Product Requirements</span>
- <span class="ck">**AUR-PR-014**</span> (<span class="cv">traces</span>: AUR-BR-001): the product shall
  provide a self-serve onboarding flow.

<span class="cv">## Acceptance Criteria</span>
- <span class="ck">**AUR-AC-001**</span> (<span class="cv">verifies</span>: AUR-PR-014): a new customer
  completes setup with no support ticket created.</pre>
        </div>
      </div>

      ${pageNavHtml('/manifesto/traceability')}
      ${provenanceFooter('/manifesto/traceability')}
    </div>`;
}
