import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderAdoption() {
  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;">
      <span class="layer-badge" style="background:var(--l3);">3</span>
      <span class="mono" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Layer 3 · Profiles</span>
    </div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">Adoption &amp; maturity model.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 8px;">A staged path from your first document to a fully traceable document set. You don't need to do everything at once. Each stage delivers real value independently.</p>
    <p style="font-size:14px;color:var(--muted);margin:0 0 36px;">Crawl is an afternoon. Walk is the habit shift — the gate on every PR. Run is turning on cross-document consistency across the whole set.</p>

    <div class="thread-rail">

      <section class="thread-section" id="crawl">
        <span class="thread-node"></span>
        <div style="display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;color:var(--ok);border:1px solid color-mix(in srgb, var(--ok) 40%, transparent);background:color-mix(in srgb, var(--ok) 12%, transparent);border-radius:999px;padding:4px 12px;margin-bottom:12px;">Stage 1 · Crawl</div>
        <h2 class="h2-sm">One document, validated.</h2>
        <p class="body">Pick one document. Author <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">documents/PRJ-001-AUR/charter.md</code> — frontmatter and the required sections. Run <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">docassert validate</code> locally. That's it. You have a versioned, schema-checked document in a place with history.</p>
        <div class="grid-2">
          <div class="card" style="border-top:2px solid var(--ok);">
            <div class="card-title">What you get</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">A versioned document. Structural validation you can run in one command. A Git history of every change to it. No more "which version of the charter is current?"</div>
          </div>
          <div class="card">
            <div class="card-title">What you skip</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">CI, cross-document consistency, and the AI layer — all optional at this stage. You're building the habit of truth-in-Git before you automate on top of it.</div>
          </div>
        </div>
        <div style="margin-top:16px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">
          Checklist: <span style="color:var(--ok);">charter.md ✓</span> · <span style="color:var(--ok);">docassert validate ✓</span>
        </div>
      </section>

      <section class="thread-section" id="walk">
        <span class="thread-node"></span>
        <div style="display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;color:var(--warn);border:1px solid color-mix(in srgb, var(--warn) 40%, transparent);background:color-mix(in srgb, var(--warn) 12%, transparent);border-radius:999px;padding:4px 12px;margin-bottom:12px;">Stage 2 · Walk</div>
        <h2 class="h2-sm">Gated on every pull request.</h2>
        <p class="body">Put <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">docassert validate</code> in a GitHub Actions workflow and turn on branch protection. Add a few more kinds — a BRD, a PRD. Now a document that doesn't meet the standard cannot merge, and the reasons are posted on the PR.</p>
        <div class="grid-2">
          <div class="card" style="border-top:2px solid var(--warn);">
            <div class="card-title">What you get</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">A binding gate. An audit result on every PR. More document kinds under the same standard. The PMO starts looking like engineering, not administration.</div>
          </div>
          <div class="card">
            <div class="card-title">Typical timeline</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">About a day to wire the Action and require the check on <code class="mono" style="font-size:12px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">main</code>. Most of the effort is agreeing the criteria with stakeholders.</div>
          </div>
        </div>
        <div style="margin-top:16px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">
          Checklist: <span style="color:var(--ok);">audit.yml ✓</span> · <span style="color:var(--ok);">branch protection ✓</span> · <span style="color:var(--ok);">3+ kinds ✓</span>
        </div>
      </section>

      <section class="thread-section" id="run">
        <span class="thread-node"></span>
        <div style="display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;color:var(--accent);border:1px solid var(--accent-line);background:var(--accent-soft);border-radius:999px;padding:4px 12px;margin-bottom:12px;">Stage 3 · Run</div>
        <h2 class="h2-sm">Full set. Consistency. Traceability matrix.</h2>
        <p class="body">Every document kind in Git, with the cross-document <code class="mono" style="font-size:13px;background:var(--panel-2);padding:1px 4px;border-radius:3px;">consistency</code> job enforcing traceability, the AI advisory layer on, and the RTM generated on every change. Requirements trace end to end; broken links block; the matrix is derived, not drawn.</p>
        <div class="grid-2">
          <div class="card" style="border-top:2px solid var(--accent);">
            <div class="card-title">What you get</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">Every requirement traces to a test. Broken links are blocked. The AI flags weak links for review. A generated traceability matrix that's always current — no one maintains it by hand.</div>
          </div>
          <div class="card">
            <div class="card-title">The run claim</div>
            <div class="card-body" style="margin-top:4px;line-height:1.6;">At run, you can answer "which requirements have no test?" in seconds from the graph, without calling anyone or reading a deck.</div>
          </div>
        </div>
        <div style="margin-top:16px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">
          Checklist: <span style="color:var(--ok);">consistency required ✓</span> · <span style="color:var(--ok);">AI advisory on ✓</span> · <span style="color:var(--ok);">RTM generated ✓</span>
        </div>
      </section>

    </div>

    ${pageNavHtml('/adoption')}
    ${provenanceFooter('/adoption')}
  </div>`;
}
