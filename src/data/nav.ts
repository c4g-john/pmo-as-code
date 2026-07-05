// Site navigation: the single source for the sidebar, prev/next page rail,
// and llms.txt. One record per page, in reading order.

export interface NavPage {
  title: string;
  path: string;
  srcPath: string; // provenance footer target, relative to repo root
  summary: string; // one line for llms.txt
}

export interface NavGroup {
  title: string;
  layer?: 1 | 2 | 3;
  color?: string;
  pages: NavPage[];
}

export const NAV: NavGroup[] = [
  {
    title: 'Start here',
    pages: [
      { title: 'Home', path: '/', srcPath: 'src/pages/index.astro',
        summary: 'Project status is a build artifact: the thesis, the five defaults, and the live deployments.' },
      { title: 'Why PMO as Code', path: '/why/', srcPath: 'src/content/pages/why.md',
        summary: 'Why the PowerPoint-Excel-SharePoint-email PMO fails: stale artifacts, self-reported RAG, unauditable approvals. Includes the author statement.' },
      { title: 'Case study: Refuge', path: '/case-study/', srcPath: 'src/pages/case-study.astro',
        summary: 'A real 14-section Word BRD converted to a gated, traceable, self-reporting project, failures included.' },
    ],
  },
  {
    title: 'Principles',
    layer: 1,
    color: 'var(--l1)',
    pages: [
      { title: 'Principles', path: '/principles/', srcPath: 'src/pages/principles/index.astro',
        summary: 'The five defaults, and why the right-hand column is an exception rather than a ban.' },
      { title: 'Automation & audit', path: '/principles/automation/', srcPath: 'src/pages/principles/automation.astro',
        summary: 'Gates move from the default to the documented exception; policy becomes code.' },
      { title: 'Traceability', path: '/principles/traceability/', srcPath: 'src/pages/principles/traceability.astro',
        summary: 'Value lives in typed links between thin documents; every test walks back to a business reason.' },
    ],
  },
  {
    title: 'Reference approach',
    layer: 2,
    color: 'var(--l2)',
    pages: [
      { title: 'The Rosetta Stone', path: '/rosetta/', srcPath: 'src/pages/rosetta.astro',
        summary: 'Traditional PMO artifacts mapped to their as-code equivalents, row by row.' },
      { title: 'Core Concepts', path: '/concepts/', srcPath: 'src/pages/concepts.astro',
        summary: 'Documents with frontmatter and sections, project identity, linked items, two check tiers, twenty-one kinds.' },
      { title: 'Quickstart', path: '/quickstart/', srcPath: 'src/pages/quickstart.astro',
        summary: 'Empty repo to merged validated document in eight steps with docassert.' },
      { title: 'Quickstart with Claude Code', path: '/quickstart-claude/', srcPath: 'src/pages/quickstart-claude.astro',
        summary: 'The same setup driven by Claude Code from one prompt, including Word-document conversion.' },
      { title: 'Guides', path: '/guides/', srcPath: 'src/pages/guides.astro',
        summary: 'Task-oriented guides: converting documents, wiring CI, bridging execution to GitHub.' },
      { title: 'Reference', path: '/reference/', srcPath: 'src/pages/reference.astro',
        summary: 'The twenty-one document kinds with their frontmatter, sections, items, and checks.' },
      { title: 'Integrations', path: '/integrations/', srcPath: 'src/content/pages/integrations.md',
        summary: 'GitHub Actions, badges, Pages dashboards, and the execution bridge.' },
    ],
  },
  {
    title: 'Profiles',
    layer: 3,
    color: 'var(--l3)',
    pages: [
      { title: 'Profiles', path: '/profiles/', srcPath: 'src/pages/profiles.astro',
        summary: 'Named document-set expectations: lean-startup, agile-delivery, regulated-industry, operations.' },
      { title: 'Adoption & Maturity', path: '/adoption/', srcPath: 'src/content/pages/adoption.md',
        summary: 'Crawl, walk, run: one validated document to a fully traceable, consistency-enforced set.' },
    ],
  },
  {
    title: 'Compare',
    pages: [
      { title: 'vs Traditional PPM', path: '/vs/', srcPath: 'src/pages/vs.astro',
        summary: 'Row-by-row comparison with traditional PPM, including where traditional gates still belong.' },
      { title: 'FAQ', path: '/faq/', srcPath: 'src/pages/faq.astro',
        summary: 'The questions every audience asks first, answered plainly.' },
    ],
  },
];

// Press kit is footer-linked, not in the main nav, but part of the page order.
export const EXTRA_PAGES: NavPage[] = [
  { title: 'Press & share kit', path: '/press/', srcPath: 'src/pages/press.astro',
    summary: 'Verified facts, quotable copy, real product images, and ready-to-post announcements.' },
];

export const ORDER: NavPage[] = [...NAV.flatMap(g => g.pages), ...EXTRA_PAGES];

export function pageFor(path: string): NavPage | undefined {
  return ORDER.find(p => p.path === path);
}

export function prevNext(path: string): { prev?: NavPage; next?: NavPage } {
  const i = ORDER.findIndex(p => p.path === path);
  if (i === -1) return {};
  return { prev: ORDER[i - 1], next: ORDER[i + 1] };
}
