import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderIntegrations() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l2);">2</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">GitHub-native by design.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">There are no connectors to build or maintain. The whole pipeline is Git, GitHub Actions, and — only for the advisory layer — the Anthropic API. Nothing else to wire up, nothing else to break.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Feed Claude any source document; it maps it to the standard templates. From there it's version control the whole way down.</p>

    <div id="int-actions" style="margin-bottom:52px;">
      <h2 class="h2-sm">GitHub Actions.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Two jobs run on every pull request: <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">audit</code> validates each changed document, and <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">consistency</code> checks the whole traceability graph. Both post their results as a PR comment.</p>
      ${cb('.github/workflows/audit.yml', `<span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:          <span class="cc"># validate each changed document</span>
    <span class="ck">runs-on</span>: ubuntu-latest
    <span class="ck">steps</span>:
      - <span class="ck">run</span>: <span class="cs">docassert validate documents/**/*.md</span>
  <span class="ck">consistency</span>:    <span class="cc"># check the whole graph (a change can break links elsewhere)</span>
    <span class="ck">runs-on</span>: ubuntu-latest
    <span class="ck">steps</span>:
      - <span class="ck">run</span>: <span class="cs">docassert consistency && docassert rtm --out RTM.md</span>`)}
    </div>

    <div id="int-protection" style="margin-bottom:52px;">
      <h2 class="h2-sm">Branch protection.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">Require both checks on <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">main</code>. Now a document that fails validation — or a broken requirements trace — cannot merge. The gate is binding, not advisory.</p>
      ${cb('terminal', `<span class="cc"># require both checks before a PR can merge</span>
gh api -X PUT repos/OWNER/REPO/branches/main/protection \\
  --input - &lt;&lt;'JSON'
{ <span class="ck">"required_status_checks"</span>:
    { <span class="ck">"strict"</span>: true, <span class="ck">"contexts"</span>: [<span class="cs">"audit"</span>, <span class="cs">"consistency"</span>] } }
JSON`)}
    </div>

    <div id="int-ai" style="margin-bottom:52px;">
      <h2 class="h2-sm">The Anthropic API.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">The one external service, and only for the <em>advisory</em> layer: the AI reads a document (or a traceability link) and scores it. Set one repo secret to switch it on. It fails safe — no key, and the advisory checks simply skip; the deterministic gate is unaffected.</p>
      ${cb('terminal', `<span class="cc"># enable AI advisory scoring (optional)</span>
gh secret set ANTHROPIC_API_KEY --repo OWNER/REPO

<span class="cc"># without it, advisory checks report:</span>
<span class="cs">  ○ objective-is-specific: skipped — no ANTHROPIC_API_KEY (advisory only)</span>`)}
    </div>

    <div id="int-skills" style="margin-bottom:52px;">
      <h2 class="h2-sm">The skills &amp; templates library.</h2>
      <p style="font-size:16px;color:var(--ink-2);max-width:60ch;margin:0 0 16px;">The real "integration" is Claude itself. The <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">doc-to-pmo</code> skill takes a Word doc, a PDF, or pasted text and maps it into the standard Markdown templates — flagging anything the source didn't supply rather than inventing it.</p>
      <div class="card" style="border-left:3px solid var(--l3);">
        <div class="card-title">Composable and public</div>
        <div class="card-body" style="margin-top:4px;line-height:1.6;">The templates, the audit criteria, and the conversion skill live in the repo as a library you fork and extend. Any source in; standard, testable documents out.</div>
      </div>
      <div style="margin-top:16px;">
        <a class="btn-secondary" href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener">Browse the library →</a>
      </div>
    </div>

    ${pageNavHtml('/integrations')}
    ${provenanceFooter('/integrations')}
  </div>`;
}
