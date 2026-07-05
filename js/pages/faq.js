import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderFAQ() {
  const faqs = [
    { q: 'Is this just another PPM tool?', a: 'No. PMO as Code is a vendor-neutral standard: business documents as Markdown with defined schemas and audit criteria, validated in Git. docassert is a reference implementation that shows it working end to end, but any tool that implements the specification conforms. There is no product to buy.' },
    { q: 'What about regulators who require a human signature?', a: 'A merged pull request with a named reviewer is the signature, timestamped in Git history and enforceable through branch protection. Where a specific person\'s sign-off is legally required, make that reviewer required in branch protection or add a signed-off field for the audit to check. The record is far more auditable than an approval email no one can find.' },
    { q: 'Do we have to move everything to Git at once?', a: 'No. Start with one document, validate it locally, add the GitHub Actions gate when you are ready, and turn on cross-document consistency last. Each crawl-walk-run stage delivers value on its own, and nothing forces a big-bang migration.' },
    { q: 'Can the AI block a merge?', a: 'No, by design. The deterministic structural checks (required fields, measurable success criteria, resolving requirement links) are what block a merge, because they are reliable. The AI checks are advisory. They score a document or a traceability link and post the reasoning to the pull request without ever gating it, and they fail safe, skipping when no key is set.' },
    { q: 'What if my organisation doesn\'t use Git?', a: 'The whole model assumes version control, and in practice almost every organisation already has Git somewhere, so start there. If version control is genuinely absent, that conversation happens upstream of this framework, because a single versioned source of truth is the entire premise.' },
    { q: 'How is this different from a spreadsheet with strict conventions?', a: 'Three things a spreadsheet cannot do: schema validation (so the conventions actually hold), a queryable traceability graph across documents (so you can see that every requirement traces to a test), and a merge gate that blocks non-conforming changes before they land. A spreadsheet with conventions still relies on a human to keep it honest.' },
    { q: 'What is docassert, exactly?', a: 'docassert is the reference implementation: a small Python CLI and GitHub Action that validates each document against its criteria, checks cross-document consistency, and generates the traceability matrix. It exists to prove the standard works end to end, and the specification defines what any other implementation must do.' },
    { q: 'Who owns the standard?', a: 'The principles (Layer 1) are meant to be owned by no one. The reference approach (Layer 2), meaning the specification, templates, criteria, and docassert, is maintained by John Tanner at C4G Enterprises as a public, Apache-licensed library you can fork. Profiles (Layer 3) are open to anyone.' },
  ];

  return `<div>
    <div class="eyebrow">Compare</div>
    <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(32px,4.5vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">FAQ.</h1>
    <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 36px;">The questions every audience asks first.</p>

    <div id="faq-list" style="display:grid;gap:3px;">
      ${faqs.map((f, i) => `
        <div class="faq-item" style="border:1px solid var(--border);border-radius:11px;overflow:hidden;">
          <button class="faq-btn" data-faq="${i}" style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px 18px;background:var(--panel);border:none;color:var(--ink);cursor:pointer;text-align:left;">
            <span style="font-weight:600;font-size:16px;">${f.q}</span>
            <span class="faq-chevron" data-faq-chevron="${i}" style="flex-shrink:0;font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);transition:transform .2s;">+</span>
          </button>
          <div class="faq-answer" id="faq-answer-${i}" style="display:none;padding:0 18px 16px;background:var(--panel);border-top:1px solid var(--border);">
            <p style="font-size:15.5px;color:var(--ink-2);line-height:1.65;margin:14px 0 0;max-width:62ch;">${f.a}</p>
          </div>
        </div>`).join('')}
    </div>

    ${pageNavHtml('/faq')}
    ${provenanceFooter('/faq')}
  </div>`;
}
