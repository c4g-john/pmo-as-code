// The five defaults (Layer 1). One record feeds every surface that states
// them: the home strip, the principles page, and llms.txt.
export interface DefaultPair {
  left: string;
  right: string;
  featured?: boolean;
}

export const FIVE_DEFAULTS: DefaultPair[] = [
  { left: 'Declarative sources of truth', right: 'hand-maintained artifacts' },
  { left: 'Automation and audit', right: 'gates and approvals', featured: true },
  { left: 'Traceability', right: 'dense documentation', featured: true },
  { left: 'Derived status', right: 'self-reported status' },
  { left: 'Composable definitions', right: 'one-off, siloed tools' },
];

export const DEFAULTS_CODA =
  'The right-hand column is not banned. It is the exception, and exceptions get documented.';
