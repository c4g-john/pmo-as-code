import { cb, pageNavHtml, provenanceFooter } from '../ui.js';

export function renderFAQ() {
  const faqs = [
    { q: 'Is this just another PPM tool?', a: 'No. PMO as Code is a vendor-neutral standard: business documents as Markdown with defined schemas and audit criteria, validated in Git. docassert is a reference implementation that shows it working end to end, but any tool that reads the templates and criteria conforms. There is no product to buy.' },
    { q: 'What about regulators who require a human signature?', a: 'A merged pull request with a named reviewer is the signature — timestamped and immutable in the Git history. Where a specific named sign-off is legally required, require that reviewer in branch protection, or add a signed-off field the audit checks for. The record writes itself, and it is far more auditable than an approval email no one can find.' },
    { q: 'Do we have to move everything to Git at once?', a: 'No. Start with one document. Validate it locally. Add the GitHub Actions gate when you are ready, then turn on cross-document consistency. Crawl, walk, run — each stage delivers value on its own, and nothing forces a big-bang migration.' },
    { q: 'Can the AI block a merge?', a: 'No — and that is deliberate. The deterministic structural checks (required fields, measurable success criteria, resolving requirement links) are what block a merge, because they are reliable. The AI checks are advisory: they score a document or a traceability link and post the reasoning to the pull request, but never gate it. They run via the Anthropic API and fail safe — with no key, they simply skip.' },
    { q: 'What if my organisation doesn\'t use Git?', a: 'The whole model assumes version control, and in practice almost every organisation already has Git somewhere — start there. If version control is genuinely absent, that conversation happens upstream of this framework, because a single versioned source of truth is the entire premise.' },
    { q: 'How is this different from a spreadsheet with strict conventions?', a: 'Three things a spreadsheet cannot do: schema validation (so the conventions actually hold), a queryable traceability graph across documents (so you can see that every requirement traces to a test), and a merge gate that blocks non-conforming changes before they land. A spreadsheet with conventions still relies on a human to keep it honest.' },
    { q: 'What is docassert, exactly?', a: 'docassert is the reference implementation: a small Python CLI and GitHub Action that validates each document against its criteria, checks cross-document consistency, and generates the traceability matrix. It is the standard in action, not the product — its output format is what a compliant tool conforms to.' },
    { q: 'Who owns the standard?', a: 'No one — it is vendor-neutral, like the Agile Manifesto or HTTP. The Manifesto (Layer 1) is the stable core. The reference approach and its templates, criteria, and conversion skill (Layer 2) are maintained here as a public library you can fork. Profiles (Layer 3) are community-owned.' },
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
