// The vs-Traditional-PPM rows. One record per row; 'tie' rows are the
// honest context-dependent cases and render amber.
export interface ComparisonRow {
  traditional: string;
  ascode: string;
  win: 'ascode' | 'tie';
}

export const COMPARISON: ComparisonRow[] = [
  { traditional: 'Status deck (weekly, manual)', ascode: 'Audit result, posted on every PR', win: 'ascode' },
  { traditional: 'RAG self-reported by the PM', ascode: 'Deterministic checks decide pass/fail', win: 'ascode' },
  { traditional: 'Approval email chain', ascode: 'A required check + a merged PR', win: 'ascode' },
  { traditional: 'Charter in Word, v47_FINAL.docx', ascode: 'charter.md, versioned, schema-validated', win: 'ascode' },
  { traditional: 'RAID log in Excel, shared drive', ascode: 'Risk register in Git, reviewed by PR', win: 'ascode' },
  { traditional: 'Requirements drifting across 6 docs', ascode: 'One traceability graph, checked in CI', win: 'ascode' },
  { traditional: '"Who approved this?" means an email search', ascode: 'git log + the merged PR reviewer', win: 'ascode' },
  { traditional: 'PM headcount for the reporting layer', ascode: 'One docassert run per pull request', win: 'ascode' },
  { traditional: 'Human signature required (regulatory)', ascode: 'A required reviewer, recorded in Git', win: 'tie' },
  { traditional: 'Tool-trained PMs, high switching cost', ascode: 'Any compliant tool, vendor-neutral standard', win: 'ascode' },
];
