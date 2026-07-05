// The twenty-one document kinds. One record per kind feeds the
// reference page, the concepts grid, and llms.txt.
export interface Kind {
  name: string;
  short: string;      // one-line card blurb (concepts page)
  desc: string;       // reference-page description
  extra: string;      // kind-specific frontmatter beyond the shared five
  sections: string;
  items: string;
  checks: string;
}

export const KINDS: Kind[] = [
  { name: "project", short: "The project anchor, with unique id, code, sponsor, and status.", desc: "The identity anchor: one per project folder, declaring the canonical id (PRJ-NNN-CODE), code, sponsor, lifecycle status, delivery profile, and the repo its execution bridges to.", extra: "code, name, sponsor, profile, repo", sections: "Overview · Scope", items: "", checks: "project-id-format" },
  { name: "charter", short: "Objective, measurable success criteria, sponsor, budget.", desc: "The contract for a piece of work.", extra: "sponsor, budget, dates", sections: "Objective \u00b7 Success Criteria \u00b7 Scope \u00b7 Milestones (dated bullets draw the timeline; the target date is an implicit milestone) \u00b7 Risks \u00b7 Approval", items: "", checks: "milestones-dated \u00b7 measurable-success-criteria \u00b7 risks-have-owner-and-mitigation \u00b7 dates-consistent" },
  { name: "business-case", short: "Problem, options, recommendation, costs, benefits.", desc: "The justification, upstream of the BRD.", extra: "sponsor", sections: "Problem Statement \u00b7 Options Considered \u00b7 Recommendation \u00b7 Costs \u00b7 Benefits", items: "", checks: "required-sections" },
  { name: "brd", short: "Business requirements as BR items.", desc: "Business requirements.", extra: "owner", sections: "Purpose \u00b7 Business Requirements \u00b7 Out of Scope", items: "BR", checks: "items-well-formed" },
  { name: "prd", short: "Product requirements (PR) + acceptance criteria (AC).", desc: "Product requirements and acceptance criteria.", extra: "owner", sections: "Overview \u00b7 Product Requirements \u00b7 Acceptance Criteria", items: "PR (traces BR, optionally after another PR for sequencing) \u00b7 AC (verifies PR)", checks: "items-well-formed" },
  { name: "frnfr", short: "Functional (FR) & non-functional (NFR) requirements.", desc: "Functional & non-functional requirements.", extra: "owner", sections: "Overview \u00b7 Functional Requirements \u00b7 Non-Functional Requirements", items: "FR \u00b7 NFR (trace PR)", checks: "items-well-formed" },
  { name: "user-story", short: "Stories (US) in \"As a\u2026 I want\u2026\" form.", desc: "User stories.", extra: "owner", sections: "Overview \u00b7 User Stories", items: "US (traces PR)", checks: "story-format" },
  { name: "test-cases", short: "Test cases (TC) that verify acceptance criteria.", desc: "Test cases.", extra: "owner", sections: "Overview \u00b7 Test Cases", items: "TC (tests AC)", checks: "items-well-formed" },
  { name: "adr", short: "Architecture decisions with a recorded status.", desc: "Architecture decision log.", extra: "owner", sections: "Overview \u00b7 Decisions", items: "ADR (affects FR/NFR)", checks: "adr-items-have-status" },
  { name: "risk-register", short: "Risks with probability, impact, owner, response.", desc: "The risk register. Risks carry a disposition (open, mitigated, accepted, closed); open risks hold derived status at amber only at or above the configurable risk appetite (probability \u00d7 impact \u2265 6 by default), so writing a risk down does not cost the project its green.", extra: "owner", sections: "Overview \u00b7 Risks", items: "RISK (threatens BR/PR)", checks: "risk-items-complete \u00b7 risk-disposition-valid" },
  { name: "raci-stakeholder", short: "Roles matrix with one Accountable per activity.", desc: "Roles and responsibilities.", extra: "owner", sections: "Stakeholders \u00b7 RACI Matrix", items: "", checks: "raci-one-accountable" },
  { name: "qa-test-plan", short: "Scope, environments, measurable exit criteria.", desc: "Test strategy and gates.", extra: "owner", sections: "Scope \u00b7 Test Approach \u00b7 Environments \u00b7 Entry Criteria \u00b7 Exit Criteria", items: "", checks: "measurable-exit-criteria" },
  { name: "data-migration-plan", short: "Sources, field mapping, validation, cutover.", desc: "How data moves and is verified.", extra: "owner", sections: "Scope \u00b7 Source Systems \u00b7 Field Mapping \u00b7 Validation \u00b7 Cutover \u00b7 Rollback", items: "", checks: "mapping-table" },
  { name: "release-cutover-plan", short: "Ordered cutover steps and a rollback trigger.", desc: "The go-live switch.", extra: "owner", sections: "Overview \u00b7 Pre-Cutover Checklist \u00b7 Cutover Steps \u00b7 Verification \u00b7 Rollback Trigger", items: "", checks: "numbered-steps (Cutover Steps)" },
  { name: "rollback-plan", short: "Trigger conditions and ordered rollback steps.", desc: "The abort path.", extra: "owner", sections: "Overview \u00b7 Trigger Conditions \u00b7 Rollback Steps \u00b7 Verification", items: "", checks: "numbered-steps (Rollback Steps)" },
  { name: "hypercare-plan", short: "Support window, severities, measurable exit.", desc: "Heightened post-go-live support.", extra: "owner", sections: "Overview \u00b7 Support Window \u00b7 Severity Levels \u00b7 Escalation \u00b7 Exit Criteria", items: "", checks: "measurable-exit-criteria" },
  { name: "runbook", short: "Operational procedures, monitoring, escalation.", desc: "Operational procedures.", extra: "owner", sections: "Overview \u00b7 Prerequisites \u00b7 Procedures \u00b7 Monitoring \u00b7 Escalation", items: "", checks: "numbered-steps (Procedures)" },
  { name: "operations", short: "Service catalog with levels, measures, review freshness.", desc: "A governed service catalog for ongoing work, chartered per period.", extra: "owner, review_by", sections: "Overview \u00b7 Services", items: "SVC", checks: "svc-items-complete \u00b7 ops-review-fresh (advisory; a stale review turns derived status amber)" },
  { name: "status-report", short: "Period, RAG, cites risks from the register.", desc: "A point-in-time status.", extra: "owner, period, rag", sections: "Summary \u00b7 Progress \u00b7 Risks & Issues \u00b7 Next Steps", items: "", checks: "references-risk" },
  { name: "post-implementation-review", short: "Outcomes vs objectives, lessons, actions.", desc: "Closure and lessons.", extra: "owner", sections: "Summary \u00b7 Outcomes vs Objectives \u00b7 What Went Well \u00b7 What Could Improve \u00b7 Lessons Learned \u00b7 Follow-up Actions", items: "", checks: "required-sections" },
  { name: "benefits-realization", short: "Measurable benefits vs the business case.", desc: "Benefits vs the business case.", extra: "owner", sections: "Overview \u00b7 Benefits \u00b7 Measurement \u00b7 Realized Value", items: "", checks: "measurable-items (Benefits)" },
];
