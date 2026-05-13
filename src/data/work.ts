/**
 * Case-study index. Each entry is consumed by:
 *  - the Work tease on `/`
 *  - the case-study index at `/work`
 *  - the case-study page at `/work/<slug>`
 *
 * Bodies are intentionally placeholder. Real positioning copy lands later.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  /** Short label shown on the Work tease cards. */
  blurb: string;
  /** Optional context line (org / role / time). */
  context?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'inspect-view',
    title: 'Inspect View',
    blurb: 'TODO: short blurb — what it is, why it mattered.',
    context: 'GitLens · Tech Lead',
  },
  {
    slug: 'gitlens-growth',
    title: 'GitLens Growth',
    blurb: 'TODO: short blurb — scope, scale, outcome.',
    context: 'GitKraken · Principal Engineer',
  },
  {
    slug: 'chewy-design-system',
    title: 'Chewy Design System',
    blurb: 'TODO: short blurb — system shape and adoption.',
    context: 'Chewy · Design Systems',
  },
  {
    slug: 'web-components-ai-tools',
    title: 'Web Components for AI Tools',
    blurb: 'TODO: short blurb — pattern, problem, fit.',
    context: 'D13 · Independent practice',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(s => s.slug === slug);
}
