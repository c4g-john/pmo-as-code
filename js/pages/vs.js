import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderVs() {
  const rows = [
    { traditional: 'Status deck (weekly, manual)', ascode: 'Audit result, posted on every PR', win: 'ascode' },
    { traditional: 'RAG self-reported by the PM', ascode: 'Deterministic checks decide pass/fail', win: 'ascode' },
    { traditional: 'Approval email chain', ascode: 'A required check + a merged PR', win: 'ascode' },
    { traditional: 'Charter in Word, v47_FINAL.docx', ascode: 'charter.md, versioned, schema-validated', win: 'ascode' },
    { traditional: 'RAID log in Excel, shared drive', ascode: 'Risk register in Git, reviewed by PR', win: 'ascode' },
    { traditional: 'Requirements drifting across 6 docs', ascode: 'One traceability graph, checked in CI', win: 'ascode' },
    { traditional: '"Who approved this?" — email search', ascode: 'git log + the merged PR reviewer', win: 'ascode' },
    { traditional: 'PM headcount for the reporting layer', ascode: 'One docunit run per pull request', win: 'ascode' },
    { traditional: 'Human signature required (regulatory)', ascode: 'A required reviewer, recorded in Git', win: 'tie' },
    { traditional: 'Tool-trained PMs, high switching cost', ascode: 'Any compliant tool, vendor-neutral standard', win: 'ascode' },
  ];

  return `<div>
    <div class="eyebrow">Compare</div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">vs Traditional PPM.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">An honest comparison. We make strong claims and show our work, including where traditional approaches still win.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">PPM = Project & Portfolio Management (tools like MS Project, Planview, Clarity, Smartsheet).</p>

    <div id="comparison" style="margin-bottom:52px;">
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:14px;padding:10px 18px;margin-bottom:6px;">
        <span class="mono" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);">Traditional PPM</span>
        <span></span>
        <span class="mono" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);text-align:right;">PMO as Code</span>
      </div>
      ${rows.map(r => `
        <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:14px;padding:13px 18px;background:var(--panel);border:1px solid var(--border);border-radius:10px;margin-bottom:8px;">
          <span style="font-size:14.5px;color:${r.win==='ascode'?'var(--muted)':'var(--ink)'};">${r.traditional}</span>
          <span style="width:18px;height:18px;border-radius:50%;background:${r.win==='ascode'?'var(--ok)':r.win==='tie'?'var(--warn)':'var(--bad)'};display:flex;align-items:center;justify-content:center;font-size:10px;color:#000;font-weight:700;">${r.win==='ascode'?'→':r.win==='tie'?'≈':'←'}</span>
          <span style="font-size:14.5px;font-weight:${r.win==='ascode'?'600':'400'};color:${r.win==='ascode'?'var(--ink)':'var(--muted)'};text-align:right;">${r.ascode}</span>
        </div>`).join('')}
      <div style="display:flex;align-items:center;gap:18px;margin-top:10px;font-size:13px;color:var(--muted);">
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:14px;height:14px;border-radius:50%;background:var(--ok);display:inline-block;"></span> PMO as Code wins</span>
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:14px;height:14px;border-radius:50%;background:var(--warn);display:inline-block;"></span> Context-dependent</span>
      </div>
    </div>

    <div id="where-wins" style="margin-bottom:48px;">
      <h2 class="h2-sm">Where as-code wins clearly.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Any situation where the cost of stale data is higher than the cost of learning YAML. Portfolios with more than ~5 projects. Organisations where audit and traceability matter. Teams that already use Git.</p>
      <div class="grid-2">
        <div class="card" style="border-left:3px solid var(--ok);">
          <div class="card-title">Engineering-led orgs</div>
          <div class="card-body" style="margin-top:4px;">Git is already the source of truth for code. Extending it to the portfolio is a small step, not a cultural revolution.</div>
        </div>
        <div class="card" style="border-left:3px solid var(--ok);">
          <div class="card-title">Regulated industries</div>
          <div class="card-body" style="margin-top:4px;">An immutable audit trail in Git — who changed what, when, and who approved it — satisfies most audit requirements better than email threads can.</div>
        </div>
      </div>
    </div>

    <div id="where-gates" style="margin-bottom:48px;">
      <h2 class="h2-sm">Where traditional gates still belong.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">We are not arguing that human judgment disappears. Some decisions genuinely require a named individual's sign-off: a legal filing, a board resolution, a contractual milestone payment. PMO as Code holds these gracefully: require a named reviewer on the pull request, recorded immutably in the Git history — a stronger record than an approval email that no one can find later.</p>
      <div class="card" style="border-left:3px solid var(--warn);">
        <div class="card-title">The honest position</div>
        <div class="card-body" style="margin-top:4px;line-height:1.6;">Gates don't vanish. They get demoted from default to exception. The default posture is flow. The gate is the documented exception. When a human signature is genuinely required, it belongs in the framework as a first-class construct, not as an email chain that falls outside the audit trail.</div>
      </div>
    </div>

    ${pageNavHtml('/vs')}
    ${provenanceFooter('/vs')}
  </div>`;
}
