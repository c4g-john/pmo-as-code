// The shipped delivery profiles. One record per profile; the page and
// llms.txt render from these.
export interface Profile {
  color: string;
  title: string;
  note: string;
  required: string;
  recommended: string;
}

export const PROFILES: Profile[] = [
  { color: 'var(--warn)', title: 'regulated-industry',
    note: 'The full governance spine for finance, healthcare, or government.',
    required: 'charter, business-case, brd, prd, frnfr, test-cases, risk-register, raci-stakeholder, qa-test-plan',
    recommended: 'adr, runbook, status-report, benefits-realization' },
  { color: 'var(--ok)', title: 'lean-startup',
    note: 'The minimum spine. Gaps stay advisory until the project goes active, so a small team is never blocked for unfinished docs.',
    required: 'charter, brd, prd, test-cases', recommended: 'risk-register' },
  { color: 'var(--l2)', title: 'agile-delivery',
    note: 'Story-led: every story traces to a product requirement, every acceptance criterion to a test.',
    required: 'charter, prd, user-story, test-cases', recommended: 'brd, risk-register' },
  { color: 'var(--muted)', title: 'operations',
    note: 'Period-chartered keep-the-lights-on: a governed service catalog with a review date that turns derived status amber by itself when it lapses.',
    required: 'operations', recommended: 'risk-register, runbook' },
];
