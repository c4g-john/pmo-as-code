export const NAV = [
  { title: 'Start here', items: [['Home', '/'], ['Why PMO as Code', '/why'], ['Case study: Refuge', '/case-study']] },
  { title: 'The Manifesto', layer: 1, color: 'var(--l1)', items: [
    ['The Manifesto', '/manifesto'],
    ['Automation & audit', '/manifesto/automation'],
    ['Traceability', '/manifesto/traceability'],
  ]},
  { title: 'Reference Approach', layer: 2, color: 'var(--l2)', items: [
    ['The Rosetta Stone', '/rosetta'],
    ['Core Concepts', '/concepts'],
    ['Quickstart', '/quickstart'],
    ['Quickstart with Claude Code', '/quickstart-claude'],
    ['Guides', '/guides'],
    ['Reference', '/reference'],
    ['Integrations', '/integrations'],
  ]},
  { title: 'Profiles', layer: 3, color: 'var(--l3)', items: [
    ['Profiles', '/profiles'],
    ['Adoption & Maturity', '/adoption'],
  ]},
  { title: 'Compare', items: [
    ['vs Traditional PPM', '/vs'],
    ['FAQ', '/faq'],
  ]},
];

export const PAGE_META = {
  '/':            { t: 'Home',                    src: 'js/pages/home.js' },
  '/why':         { t: 'Why PMO as Code',         src: 'js/pages/why.js' },
  '/press': [['press-facts','Fact sheet'],['press-boiler','Boilerplate'],['press-angles','Story angles'],['press-assets','Assets'],['press-share','Ready-to-post copy']],
  '/case-study':  { t: 'Case study: Refuge for Humans', src: 'js/pages/case-study.js' },
  '/manifesto':   { t: 'The Manifesto',           src: 'js/pages/manifesto.js' },
  '/manifesto/automation':   { t: 'Automation & audit',   src: 'js/pages/manifesto.js' },
  '/manifesto/traceability': { t: 'Traceability',         src: 'js/pages/manifesto.js' },
  '/rosetta':     { t: 'The Rosetta Stone',       src: 'js/pages/rosetta.js' },
  '/concepts':    { t: 'Core Concepts',           src: 'js/pages/concepts.js' },
  '/quickstart':  { t: 'Quickstart',              src: 'js/pages/quickstart.js' },
  '/quickstart-claude': { t: 'Quickstart with Claude Code', src: 'js/pages/quickstart-claude.js' },
  '/guides':      { t: 'Guides',                  src: 'js/pages/guides.js' },
  '/reference':   { t: 'Reference',               src: 'js/pages/reference.js' },
  '/integrations':{ t: 'Integrations',            src: 'js/pages/integrations.js' },
  '/profiles':    { t: 'Profiles',                src: 'js/pages/profiles.js' },
  '/adoption':    { t: 'Adoption & Maturity',     src: 'js/pages/adoption.js' },
  '/vs':          { t: 'vs Traditional PPM',      src: 'js/pages/vs.js' },
  '/faq':         { t: 'FAQ',                     src: 'js/pages/faq.js' },
  '/press':       { t: 'Press & share kit',       src: 'js/pages/press.js' },
};

export const ORDER = ['/','/why','/case-study','/manifesto','/manifesto/automation','/manifesto/traceability',
  '/rosetta','/concepts','/quickstart','/quickstart-claude','/guides','/reference','/integrations',
  '/profiles','/adoption','/vs','/faq','/press'];

export const SHELLS = {};

export const ANCHORS = {
  '/': [['thesis','Thesis'],['manifesto-strip','The manifesto'],['reveal','Declared → derived'],['thread','The traceability thread'],['portfolio','A page per project'],['proof','A running instance']],
  '/manifesto': [['values','The five value-pairs'],['deepdives','The two that carry weight'],['layers','Three layers']],
  '/rosetta': [['intro','The mapping'],['rows','Traditional → as-code']],
  '/concepts': [['model','A document, not a database'],['identity','Projects & identity'],['items','Linked items'],['checks','Two tiers of checks'],['kinds','Twenty-one kinds']],
  '/manifesto/automation': [['shift','The shift'],['policy','Policy as code'],['tension','Where gates still belong']],
  '/manifesto/traceability': [['unit','The unit of value'],['thread-ex','The thread example'],['schema','Schema requirement']],
  '/case-study': [['cs-source','The source'],['cs-convert','The conversion'],['cs-findings','The findings'],['cs-loop','The feedback loop'],['cs-live','Live now'],['cs-bridge','The execution bridge']],
  '/why': [['status-quo','The status quo'],['stale','Stale on arrival'],['rag','RAG is fiction'],['governance','Unauditable governance'],['army','The army-of-PMs tax']],
  '/quickstart': [['qs-install','1 · Get docassert'],['qs-project','2 · Anchor a project'],['qs-author','3 · Author a document'],['qs-test','4 · Unit-test'],['qs-consistency','5 · Consistency'],['qs-rtm','6 · Traceability matrix'],['qs-pages','7 · Status & completeness'],['qs-gate','8 · Gate in CI']],
  '/quickstart-claude': [['cc-prompt','The prompt'],['cc-need','What you need'],['cc-does','What it does'],['cc-more','More prompts']],
  '/guides': [['guide-convert','Convert a Word doc'],['guide-trace','Author linked requirements'],['guide-gate','Gate documents in CI'],['guide-kind','Add a document kind'],['guide-project','Start a new project'],['guide-bridge','Bridge to GitHub Projects']],
  '/reference': [['ref-shape','The shared shape'],['ref-identity','Project identity'],['ref-items','Items & links'],['ref-kinds','Document kinds']],
  '/integrations': [['int-actions','GitHub Actions'],['int-protection','Branch protection'],['int-ai','Anthropic API'],['int-skills','Skills & templates']],
  '/profiles': [['what-profile','What a profile contains'],['available-profiles','Available profiles'],['author-profile','Author your own']],
  '/adoption': [['crawl','Crawl'],['walk','Walk'],['run','Run']],
  '/vs': [['comparison','The comparison'],['where-wins','Where as-code wins'],['where-gates','Where gates belong']],
  '/faq': [['faq-list','Questions']],
};

export const ROSETTA_ROWS = [
  { before: 'Status deck', after: 'Audit result, posted on every PR',
    yaml: `<span class="cc">---</span>\n<span class="ck">kind</span>: <span class="cv">charter</span>\n<span class="ck">project</span>: <span class="cv">PRJ-001-AUR</span>\n<span class="ck">id</span>: <span class="cv">AUR-charter</span>\n<span class="cc">---</span>\n<span class="cv">## Objective</span>\nOnboarding 14d → under 2d`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">✓ all checks passed</div><div style="font-size:13px;color:var(--muted);">frontmatter · sections · criteria<br>clear to merge</div>` },
  { before: 'RAID log in Excel', after: 'Risk register in Git, checked on PR',
    yaml: `<span class="ck">kind</span>: <span class="cv">risk-register</span>\n<span class="cv">## Risks</span>\n- <span class="ck">**AUR-RISK-001**</span> (<span class="cv">threatens</span>: AUR-BR-001):\n  … Probability: High. Impact: High.\n  Owner: alex.kim. Response: dual-run.`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">✓ risk-items-complete</div><div style="font-size:13px;color:var(--muted);">merged by pull request, reviewer on record<br>threatens AUR-BR-001</div>` },
  { before: 'Charter in Word', after: 'charter.md validated on every change',
    yaml: `<span class="cc">---</span>\n<span class="ck">kind</span>: <span class="cv">charter</span>\n<span class="ck">sponsor</span>: <span class="cs">jordan.lee</span>\n<span class="cc">---</span>\n<span class="cv">## Success Criteria</span>\n- p50 onboarding below 48h`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">✓ schema valid · 6 sections</div><div style="font-size:13px;color:var(--muted);">measurable criteria ✓<br>approved by merged pull request</div>` },
  { before: 'Steering approval email', after: 'A merged PR with a named reviewer',
    yaml: `<span class="cc"># branch protection</span>\n<span class="ck">required_status_checks</span>:\n  <span class="ck">contexts</span>:\n    - <span class="cs">audit</span>\n    - <span class="cs">consistency</span>`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">✓ merged · reviewer on record</div><div style="font-size:13px;color:var(--muted);">audit ✓ · consistency ✓</div>` },
  { before: 'Manual RAG status', after: 'Deterministic checks with reasons',
    yaml: `<span class="cv">## Success Criteria</span>\n- Onboarding p50 below 48 hours.\n- Support tickets fall by at least 80%.\n- CSAT rises above 4.5 / 5.`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">✓ measurable-success-criteria (3/3)</div><div style="font-size:13px;color:var(--muted);">Pass or fail comes from the checks,<br>with the reason attached.</div>` },
  { before: 'Requirements that drift across docs', after: 'One generated traceability matrix',
    yaml: `<span class="ck">**AUR-BR-001**</span>: reduce onboarding time\n<span class="ck">**AUR-PR-014**</span> (<span class="cv">traces</span>: AUR-BR-001): self-serve flow\n<span class="ck">**AUR-AC-001**</span> (<span class="cv">verifies</span>: AUR-PR-014): …\n<span class="ck">**AUR-TC-001**</span> (<span class="cv">tests</span>: AUR-AC-001): …`,
    output: `<div style="font-size:12px;font-family:'JetBrains Mono',monospace;color:var(--muted);margin-bottom:8px;">Requirements Traceability Matrix</div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink-2);">AUR-BR-001 → AUR-PR-014 → AUR-AC-001 → AUR-TC-001</div><div style="font-size:12px;color:var(--muted);margin-top:6px;">generated from the links</div>` },
  { before: 'Stage-gate checklist', after: 'A required check in CI',
    yaml: `<span class="ck">on</span>: [pull_request]\n<span class="ck">jobs</span>:\n  <span class="ck">audit</span>: docassert validate\n  <span class="ck">consistency</span>: docassert consistency`,
    output: `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ok);margin-bottom:6px;">CI · audit ✓ · consistency ✓</div><div style="font-size:12px;color:var(--muted);">merge blocked until green<br>on every pull request</div>` },
];

export const REVEAL_PASS = `
    <div>
      <div class="status-pill" style="background:color-mix(in srgb, var(--ok) 16%, transparent);border:1px solid color-mix(in srgb, var(--ok) 45%, transparent);margin-bottom:16px;">
        <span class="status-dot" style="background:var(--ok);box-shadow:0 0 0 3px color-mix(in srgb,var(--ok) 22%,transparent);"></span>
        <span style="color:var(--ok);">All checks passed</span>
      </div>
      <div class="signal-list">
        <div class="signal-item"><span class="signal-dot" style="background:var(--ok);"></span><div class="signal-text"><strong>frontmatter-schema</strong> · valid, all required sections present</div></div>
        <div class="signal-item"><span class="signal-dot" style="background:var(--ok);"></span><div class="signal-text"><strong>measurable-success-criteria</strong> · every criterion states a threshold</div></div>
        <div class="signal-item"><span class="signal-dot" style="background:var(--ok);"></span><div class="signal-text"><strong>risks-have-owner-and-mitigation</strong> · every risk names both</div></div>
      </div>
      <div class="mono" style="font-size:11.5px;color:var(--muted);margin-top:14px;"><span style="color:var(--ok);">clear to merge</span></div>
    </div>`;

export const REVEAL_COMPUTING = `
    <div style="display:flex;align-items:center;gap:11px;padding:6px 0 20px;">
      <span class="spinner"></span>
      <span class="mono" style="font-size:13px;color:var(--muted);">running checks<span class="blink">…</span></span>
    </div>`;
