import { cb, pageNavHtml, provenanceFooter } from '../ui.js';
import { ROSETTA_ROWS } from '../data.js';

export function renderRosetta() {
  const rowsHtml = ROSETTA_ROWS.map((row, i) => `
    <div class="rosetta-row" id="row-${i}">
      <div class="rosetta-summary" id="summary-${i}" data-row="${i}">
        <span class="rosetta-before">${row.before}</span>
        <span class="rosetta-arrow">→</span>
        <span class="rosetta-after">${row.after}</span>
      </div>
      <div class="rosetta-detail" id="detail-${i}" style="display:none;">
        <div>
          <div class="rosetta-yaml-label">YAML definition</div>
          <div class="code-block">
            <pre class="code-pre" style="font-size:12px;">${row.yaml}</pre>
          </div>
        </div>
        <div>
          <div class="rosetta-yaml-label">Generated output</div>
          <div class="rosetta-output">${row.output}</div>
        </div>
      </div>
    </div>`).join('');

  return `
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
        <span class="layer-badge" style="background:var(--l2);">2</span>
        <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
      </div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">The Rosetta Stone.</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;" id="intro">A mapping from the world people know to the world we're selling. Click any row to see the YAML definition and the artifact it generates.</p>
      <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">The YAML→artifact transformation is the core visual beat of the whole framework. This page is where it gets most explicit.</p>

      <div id="rows" style="margin-top:8px;">
        <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:14px;padding:10px 18px;margin-bottom:6px;">
          <span class="mono" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);">Traditional PMO</span>
          <span></span>
          <span class="mono" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);">PMO as Code</span>
        </div>
        ${rowsHtml}
      </div>

      ${pageNavHtml('/rosetta')}
      ${provenanceFooter('/rosetta')}
    </div>`;
}
