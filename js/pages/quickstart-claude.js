import { pageNavHtml, provenanceFooter } from '../ui.js';

const HERO_PROMPT = `Set up "PMO as Code" in this repository using docassert
(pip install docassert · https://github.com/c4g-john/docassert).

1. Add docassert and its GitHub Actions workflows: validate + consistency on
   every pull request plus the status-pages dashboard, using
   c4g-john/docassert-action@v1 (copy the workflows from
   github.com/c4g-john/pmo-as-code-template).
2. Create a project anchor at documents/PRJ-001-&lt;CODE&gt;/project.md with a
   unique id, a short CODE, a sponsor, and a profile (start with lean-startup).
3. Turn my existing project docs into PMO-as-Code documents using the standard
   templates: charter, business requirements, product requirements, test cases.
   Flag anything the source doesn't cover as a TODO; never invent facts.
4. Run docassert validate and docassert consistency, and fix whatever blocks.
5. Show me docassert status --project PRJ-001-&lt;CODE&gt;, then tell me exactly what
   to click to turn on branch protection and GitHub Pages.

Start by asking me for the project name, sponsor, and any existing documents.`;

const CONVERT_PROMPT = `Convert this Word document into a PMO-as-Code charter using docassert
(pip install docassert · github.com/c4g-john/docassert). Extract the text, map it
to the charter template, and flag anything the source is missing as a TODO
rather than inventing it. Then run docassert validate and show me what fails.`;

const ADD_PROJECT_PROMPT = `We already use docassert. Add a new project: create
documents/PRJ-00N-&lt;CODE&gt;/project.md (pick the next free number and a short
CODE), set a profile, regenerate projects.yaml, and scaffold its charter.
Then run docassert consistency and docassert status --project for the new project.`;

function promptCard(id, badge, text, { primary = false } = {}) {
  const label = primary ? 'Copy prompt and open Claude Code ↗' : 'Copy prompt';
  const open = primary ? ' data-open="https://claude.ai/code"' : '';
  const secondary = primary
    ? `<button class="copy-prompt-btn btn-secondary" data-copy-id="${id}" data-label="Copy only" style="font-family:inherit;">Copy only</button>`
    : '';
  return `
    <div style="border:1px solid var(--accent-line);border-radius:14px;overflow:hidden;background:var(--panel);">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 16px;border-bottom:1px solid var(--border);background:var(--panel-2);">
        <span class="mono" style="font-size:12px;color:var(--muted);">${badge}</span>
        <span class="mono" style="font-size:11px;color:var(--faint);">paste into Claude Code</span>
      </div>
      <pre id="${id}" style="margin:0;padding:18px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;line-height:1.7;color:var(--ink-2);white-space:pre-wrap;">${text}</pre>
      <div style="padding:0 18px 18px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
        <button class="copy-prompt-btn btn-primary" data-copy-id="${id}" data-label="${label}"${open} style="font-family:inherit;">${label}</button>
        ${secondary}
      </div>
    </div>`;
}

export function renderQuickstartClaude() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Quickstart with Claude Code.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">Skip the manual steps. Copy one prompt, paste it into Claude Code, and it scaffolds the pipeline, converts your documents, and wires the gate, asking you for the specifics as it goes.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Prefer to do it by hand? See the <a href="#/quickstart" style="color:var(--accent);text-decoration:none;">manual quickstart →</a></p>

    <div id="cc-prompt" style="margin-bottom:52px;">
      <h2 class="h2-sm" style="margin-bottom:14px;">The prompt.</h2>
      ${promptCard('cc-prompt-text', 'set up the whole pipeline', HERO_PROMPT, { primary: true })}
      <p style="font-size:13.5px;color:var(--muted);margin:12px 2px 0;">The button copies the prompt and opens <a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">claude.ai/code</a>, where you paste and send. Or run <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 5px;border-radius:3px;">claude</code> in your terminal and paste.</p>
    </div>

    <div id="cc-need" style="margin-bottom:52px;">
      <h2 class="h2-sm">What you'll need.</h2>
      <div class="grid-2">
        <div class="card">
          <div class="card-title">Claude Code</div>
          <div class="card-body" style="margin-top:4px;line-height:1.6;">The terminal <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">claude</code> CLI, the desktop app, or the web app at <a href="https://claude.ai/code" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">claude.ai/code</a>. Install from <a href="https://claude.com/claude-code" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;">claude.com/claude-code</a>.</div>
        </div>
        <div class="card">
          <div class="card-title">A GitHub repo</div>
          <div class="card-body" style="margin-top:4px;line-height:1.6;">New or existing. Claude adds the pipeline and workflows in a branch and opens a pull request, so nothing lands on <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">main</code> until you approve it.</div>
        </div>
      </div>
    </div>

    <div id="cc-does" style="margin-bottom:52px;">
      <h2 class="h2-sm">What Claude will do.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">It follows the same path as the manual quickstart, drives it for you, and stops to ask whenever a decision is yours.</p>
      <div style="display:grid;gap:8px;">
        ${[
          ['Add docassert + the CI workflows', 'the tool, plus audit / consistency / status-pages'],
          ['Anchor your project', 'project.md with a unique id, code, and a profile'],
          ['Convert your documents', 'into the standard templates, with gaps marked as TODOs'],
          ['Validate and check consistency', 'and fix whatever blocks a merge'],
          ['Derive the status page', 'RAG, coverage, and the required-document set'],
          ['Explain the repo setup', 'branch protection and Pages, the one-time manual settings'],
        ].map(([t, d], i) => `
          <div style="display:flex;align-items:baseline;gap:12px;padding:12px 15px;background:var(--panel);border:1px solid var(--border);border-radius:11px;">
            <span class="mono" style="font-size:12px;color:var(--accent);flex:none;">${String(i + 1).padStart(2, '0')}</span>
            <div>
              <div style="font-size:15px;color:var(--ink);font-weight:600;">${t}</div>
              <div style="font-size:13.5px;color:var(--muted);">${d}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div id="cc-more" style="margin-bottom:48px;">
      <h2 class="h2-sm">More prompts.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 18px;">Smaller, targeted asks once you're set up.</p>
      <div style="display:grid;gap:16px;">
        ${promptCard('cc-convert-text', 'convert one Word document', CONVERT_PROMPT)}
        ${promptCard('cc-add-text', 'add a project to an existing setup', ADD_PROJECT_PROMPT)}
      </div>
    </div>

    <div style="margin-top:8px;padding:22px 24px;background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:13px;">
      <div class="eyebrow" style="margin-bottom:8px;">What's next</div>
      <p style="font-size:16px;color:var(--ink);margin:0 0 16px;max-width:60ch;">See the steps Claude runs in the manual quickstart, or browse the document kinds and guides.</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a class="btn-primary" href="#/quickstart">The manual quickstart →</a>
        <a class="btn-secondary" href="#/reference">The document kinds →</a>
      </div>
    </div>

    ${pageNavHtml('/quickstart-claude')}
    ${provenanceFooter('/quickstart-claude')}
  </div>`;
}
