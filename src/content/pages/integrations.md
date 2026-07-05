---
title: Integrations
description: "GitHub-native by design: Actions for the gate, branch protection to make it binding, the Anthropic API for the advisory layer only, and the doc-to-pmo Claude skill."
path: /integrations/
anchors:
  - ["int-actions", "GitHub Actions"]
  - ["int-protection", "Branch protection"]
  - ["int-ai", "The Anthropic API"]
  - ["int-skills", "Skills & templates"]
---

<div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
  <span class="layer-badge" style="background:var(--l2);">2</span>
  <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 2 · Reference Approach</span>
</div>

# GitHub-native by design.

<p class="lead">There are no connectors to build or maintain. The whole pipeline runs on Git, GitHub Actions, and, for the advisory layer only, the Anthropic API, so there is nothing else to wire up or break.</p>

Claude maps any source document into the standard templates, and from there it is version control the whole way down.

<section id="int-actions">

## GitHub Actions.

Two jobs run on every pull request: `audit` validates each changed document, and `consistency` checks the whole traceability graph. Both post their results as a PR comment.

<div class="code-block">
  <div class="code-titlebar"><span class="traffic-light" style="background:#ff5f57;"></span><span class="traffic-light" style="background:#febc2e;"></span><span class="traffic-light" style="background:#28c840;"></span><span class="code-filename">.github/workflows/audit.yml</span><button class="copy-btn" data-copy-id="code-int-audit" title="Copy"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button></div>
  <pre class="code-pre" id="code-int-audit"><span class="ck">on</span>: [pull_request]
<span class="ck">jobs</span>:
  <span class="ck">audit</span>:        <span class="cc"># validate each changed document</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span>, <span class="ck">with</span>: { <span class="ck">fetch-depth</span>: 0 } }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cv">validate</span>, <span class="ck">changed-only</span>: <span class="cv">'true'</span> }
  <span class="ck">consistency</span>:  <span class="cc"># check the whole traceability graph</span>
    <span class="ck">steps</span>:
      - { <span class="ck">uses</span>: <span class="cs">actions/checkout@v4</span> }
      - <span class="ck">uses</span>: <span class="cs">c4g-john/docassert-action@v1</span>
        <span class="ck">with</span>: { <span class="ck">command</span>: <span class="cs">consistency</span> }</pre>
</div>

</section>

<section id="int-protection">

## Branch protection.

Require both checks on `main`, and a document that fails validation or breaks a requirements trace can no longer merge.

<div class="code-block">
  <div class="code-titlebar"><span class="traffic-light" style="background:#ff5f57;"></span><span class="traffic-light" style="background:#febc2e;"></span><span class="traffic-light" style="background:#28c840;"></span><span class="code-filename">terminal</span><button class="copy-btn" data-copy-id="code-int-prot" title="Copy"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button></div>
  <pre class="code-pre" id="code-int-prot"><span class="cc"># require both checks before a PR can merge</span>
gh api -X PUT repos/OWNER/REPO/branches/main/protection \
  --input - &lt;&lt;'JSON'
{ <span class="ck">"required_status_checks"</span>:
    { <span class="ck">"strict"</span>: true, <span class="ck">"contexts"</span>: [<span class="cs">"audit"</span>, <span class="cs">"consistency"</span>] } }
JSON</pre>
</div>

</section>

<section id="int-ai">

## The Anthropic API.

The one external service, used only by the *advisory* layer. The AI reads a document or a traceability link and scores it, and one repo secret switches it on. It fails safe: with no key, the advisory checks skip and the deterministic gate is unaffected.

<div class="code-block">
  <div class="code-titlebar"><span class="traffic-light" style="background:#ff5f57;"></span><span class="traffic-light" style="background:#febc2e;"></span><span class="traffic-light" style="background:#28c840;"></span><span class="code-filename">terminal</span><button class="copy-btn" data-copy-id="code-int-ai" title="Copy"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button></div>
  <pre class="code-pre" id="code-int-ai"><span class="cc"># enable AI advisory scoring (optional)</span>
gh secret set ANTHROPIC_API_KEY --repo OWNER/REPO

<span class="cc"># without it, advisory checks report:</span>
<span class="cs">  ○ objective-is-specific: skipped — no ANTHROPIC_API_KEY (advisory only)</span></pre>
</div>

</section>

<section id="int-skills">

## The skills & templates library.

The real "integration" is Claude itself. The `doc-to-pmo` skill takes a Word doc, a PDF, or pasted text and maps it into the standard Markdown templates, marking anything the source didn't supply as a TODO.

<div class="card" style="border-left:3px solid var(--l3);">
  <div class="card-title">Ships with the tool</div>
  <div class="card-body" style="margin-top:4px;line-height:1.6;">The templates, the audit criteria, and the conversion skill all ship inside the <code>docassert</code> package. <code>docassert init</code> scaffolds them into your repo and places the skill in <code>.claude/skills/</code>, where Claude Code discovers it. Any source goes in, and standard, testable documents come out.</div>
</div>

<p style="margin-top:16px;"><a class="btn-secondary" href="https://github.com/c4g-john/docassert" target="_blank" rel="noopener">Browse the library →</a></p>

</section>
