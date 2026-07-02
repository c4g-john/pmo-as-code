import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderManifesto() {
  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l1);">1</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 1 · The Manifesto</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Five value-pairs. The philosophy.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">The layer that rarely changes and is owned by no one. It mirrors the Agile Manifesto: strong enough to be opinionated, open enough to implement many ways.</p>

      <div id="values" style="margin-top:40px;">
        <div class="eyebrow">We value</div>
        <div style="display:grid;gap:9px;">
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Declarative sources of truth</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">hand-maintained artifacts</span></div>
          <div class="value-pair featured" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Automation and audit</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">gates and approvals</span></div>
          <div class="value-pair featured" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Traceability</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">dense documentation</span></div>
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Derived status</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">self-reported status</span></div>
          <div class="value-pair" style="padding:16px 18px;"><span class="value-left" style="font-size:16.5px;">Composable definitions</span><span class="value-over">over</span><span class="value-right" style="font-size:15.5px;">bespoke, siloed tools</span></div>
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
            <div class="explainer-body">Shift from prevention to flow + accountability. The gate gets demoted to policy as code.</div>
            <div class="explainer-cta">Read →</div>
          </a>
          <a class="explainer-card" href="#/manifesto/traceability">
            <div class="explainer-num">02 · explainer</div>
            <div class="explainer-title">Traceability over dense documentation</div>
            <div class="explainer-body">The unit of value is the link, not the document. Thin artifacts, richly connected.</div>
            <div class="explainer-cta">Read →</div>
          </a>
        </div>
      </div>

      <div id="layers" style="margin-top:54px;">
        <h2 class="h2-sm">Three layers, always legible.</h2>
        <p style="color:var(--muted);font-size:15.5px;margin:0 0 18px;max-width:58ch;">How we are strongly opinionated <em style="font-style:italic;color:var(--ink-2);">and</em> genuinely open. A reader should always know which layer they're standing on.</p>
        <div style="display:grid;gap:11px;">
          <div class="layer-card" style="border-left:3px solid var(--l1);">
            <span class="layer-num" style="background:var(--l1);">1</span>
            <div><div class="layer-card-title">The Manifesto</div><div class="layer-card-body">Five value-pairs · rarely changes · owned by no one.</div></div>
          </div>
          <div class="layer-card" style="border-left:3px solid var(--l2);">
            <span class="layer-num" style="background:var(--l2);">2</span>
            <div><div class="layer-card-title">The Reference Approach</div><div class="layer-card-body">Our opinionated implementation: object model, conventions, schema · versioned · owned by us.</div></div>
          </div>
          <div class="layer-card" style="border-left:3px solid var(--l3);">
            <span class="layer-num" style="background:var(--l3);">3</span>
            <div><div class="layer-card-title">Profiles</div><div class="layer-card-body">Named bundles others compose or fork: regulated-industry, lean-startup, agile-portfolio · independent · owned by the community.</div></div>
          </div>
        </div>
      </div>

      <div style="margin-top:40px;padding:20px 22px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
        <div class="eyebrow" style="margin-bottom:8px;">The standard is written down</div>
        <p style="font-size:15.5px;color:var(--ink);margin:0 0 14px;max-width:60ch;">Layer 2 isn't just prose — it's a versioned specification with conformance language, precise grammars, and blocking semantics. Anyone can implement it; <a href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">docassert</a> is the reference implementation.</p>
        <a class="btn-secondary" href="https://github.com/c4g-john/pmo-as-code-spec" target="_blank" rel="noopener">Read the specification (v0.1) →</a>
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
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 32px;">Gates assume people misbehave unless blocked; audit assumes good faith and lets the record keep everyone honest.</p>

      <div id="shift" style="margin-bottom:48px;">
        <h2 class="h2-sm">The shift: from prevention to flow.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">A gate is a friction point: a human in the loop who must approve before work proceeds. The gate slows flow, creates bottlenecks, and produces an inbox full of decisions that no one can later audit. The default posture becomes <em>stop until told otherwise</em>.</p>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Audit inverts the posture. The default is <em>flow</em>. The record keeps everyone honest: every change, every decision, every signal is captured in Git history and the Event Log. Accountability is a result of the record, not a precondition of work.</p>
        <div class="grid-2">
          <div class="card" style="border-top:2px solid var(--bad);">
            <div class="card-title" style="color:var(--bad);">Gates</div>
            <div class="card-body">An email in an inbox. A human bottleneck. An unauditable approval. Default posture: stop.</div>
          </div>
          <div class="card" style="border-top:2px solid var(--ok);">
            <div class="card-title" style="color:var(--ok);">Audit</div>
            <div class="card-body">Git history + Event Log. Every decision traceable. Default posture: flow.</div>
          </div>
        </div>
      </div>

      <div id="policy" style="margin-bottom:48px;">
        <h2 class="h2-sm">Gates don't vanish. They become policy as code.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">The gate is demoted to an automated, auditable check, not an email in an inbox. When the check runs in CI, the result is in the commit log. When it passes, the audit trail writes itself.</p>
        <div class="code-block">
          <div class="code-titlebar">
            <span class="traffic-light" style="background:#ff5f57;"></span>
            <span class="traffic-light" style="background:#febc2e;"></span>
            <span class="traffic-light" style="background:#28c840;"></span>
            <span class="code-filename">.github/workflows/audit.yml</span>
          </div>
          <pre class="code-pre"><span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:
    <span class="ck">steps</span>:
      - <span class="ck">run</span>: <span class="cs">docassert validate documents/**/*.md</span>
  <span class="ck">consistency</span>:
    <span class="ck">steps</span>:
      - <span class="ck">run</span>: <span class="cs">docassert consistency</span>   <span class="cc"># broken traces block the merge</span></pre>
        </div>
      </div>

      <div id="tension" style="margin-bottom:48px;">
        <h2 class="h2-sm">Where gates still belong.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Some contexts legally require a human signature. A regulatory filing, a board resolution, a contractual approval — these are real requirements that the framework holds gracefully. The PMO as Code position is not that human approvals should disappear. It's that they should be the documented exception, not the default.</p>
        <div class="card" style="border-left:3px solid var(--warn);">
          <div class="card-title">When a human signature is required</div>
          <div class="card-body" style="margin-top:6px;">Model it explicitly: a <code style="font-family:'JetBrains Mono',monospace;font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">Policy</code> kind with <code style="font-family:'JetBrains Mono',monospace;font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">requires: [human-signature]</code>. The signature event lands in the Event Log. The audit trail still writes itself. The difference is that one of the signals is a person's explicit approval, not just a CI check.</div>
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
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 32px;">The unit of value is the link, not the document. Thin artifacts, richly connected.</p>

      <div id="unit" style="margin-bottom:48px;">
        <h2 class="h2-sm">The unit of value is the link.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Dense documentation is a trap. A 40-page Word doc describes a project in exhaustive detail, but it can't tell you <em>why</em> a status is red or which decision accepted the risk that caused it. You have to read everything to find anything.</p>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Traceability replaces density with linkage. Thin artifacts — a charter, a RAID entry, a decision record — each with a stable ID and typed references to each other. A reader can walk from any status to the root cause in five hops, without opening a deck.</p>
      </div>

      <div id="thread-ex" style="margin-bottom:48px;">
        <h2 class="h2-sm">The thread, made concrete.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 22px;">The canonical question: "does every requirement get tested?" Every hop is a typed link, checked on every pull request.</p>
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
        <h2 class="h2-sm">This is a schema requirement, not a writing style.</h2>
        <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Every requirement is an item with a stable ID and typed links. The lineage is a queryable graph, checked in CI, not a convention buried in prose. You can ask "which requirements have no test?" and get an answer from the tool, not a person who has read every document.</p>
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
