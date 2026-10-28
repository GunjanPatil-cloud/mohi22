import { SustainabilityPillar, ProposedGoal } from '../types';

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    title: 'Environmental Responsibility',
    summary:
      'Designing chairs that consume fewer resources during manufacturing, require minimal shipping volume, and utilize recyclable components at end-of-life.',
    initiatives: [
      'Focus on high strength-to-weight alloy ratios to reduce total raw metal required per chair.',
      'Transitioning to water-based and zero-solvent powder coating finishes.',
      'Elimination of single-use polystyrene foam cushions in product packaging.',
      'Design for disassembly: ensuring metal frames, wooden backs, and polymer hardware can be separated for recycling.'
    ]
  },
  {
    title: 'Social Responsibility',
    summary:
      'Cultivating safe, equitable assembly conditions, transparent supplier operations, and products that offer safe, ergonomic utility.',
    initiatives: [
      'Strict workplace ergonomics and safety standards across workshop floors.',
      'Fair wages and transparent labor practices throughout our regional assembly team.',
      'Hinge safety mechanisms designed to prevent accidental finger-pinch hazards for all users.',
      'Active engagement with local institutional partners to understand ergonomic needs in educational spaces.'
    ]
  },
  {
    title: 'Economic Sustainability',
    summary:
      'Building enduring products that discourage rapid throwaway culture, backed by modular repairability and responsible financial stewardship.',
    initiatives: [
      'Durable construction reducing the frequent replacement cycles common in cheap disposable furniture.',
      'Modular replacement parts program for feet pads, hinge pins, and seat pads to extend product lifespans.',
      'Accessible price points for schools, community organizations, and small businesses without sacrificing quality.',
      'Reinvestment of operating margins into cleaner production technology and tooling upgrades.'
    ]
  }
];

export const PROPOSED_GOALS: ProposedGoal[] = [
  {
    title: '40% Recycled Steel Tubing Feedstock',
    status: 'Proposed (Pending Verification)',
    targetHorizon: 'Target: Phase 2 Pilot',
    scope: 'Material Sourcing',
    verificationMethod: 'Third-party mill metallurgical certifications and batch tracking'
  },
  {
    title: '100% Biodegradable & Recycled Packaging',
    status: 'Proposed (Pending Verification)',
    targetHorizon: 'Target: Year 2 Commercial Launch',
    scope: 'Logistics & Packaging',
    verificationMethod: 'Supplier FSC-certified corrugated fiberboard audit'
  },
  {
    title: 'Zero-Landfill Metal Offcut Recovery',
    status: 'Proposed (Pending Verification)',
    targetHorizon: 'Target: Phase 3 Manufacturing',
    scope: 'Workshop Operations',
    verificationMethod: 'Direct closed-loop scrap recycling agreements with local foundries'
  },
  {
    title: 'Independent Life Cycle Assessment (LCA)',
    status: 'Proposed (Pending Verification)',
    targetHorizon: 'Target: Full Commercial Line',
    scope: 'Carbon & Impact Accounting',
    verificationMethod: 'Cradle-to-gate environmental product declaration (EPD) study'
  }
];

export const MEASURING_PROGRESS_FRAMEWORK = [
  {
    metric: 'Material Efficiency Ratio',
    description: 'Tracking percentage of raw steel tube and panel sheet converted into finished product vs scrap cutoffs.',
    cadence: 'Quarterly manufacturing review'
  },
  {
    metric: 'Packaging Recyclability Index',
    description: 'Percentage of packaging by weight composed of curbside-recyclable cardboard and molded paper pulp.',
    cadence: 'Bi-annual supply chain review'
  },
  {
    metric: 'Product Service Lifespan & Warranty Return Rate',
    description: 'Measuring durability and mechanical reliability through failure mode analysis and warranty records.',
    cadence: 'Continuous monitoring'
  },
  {
    metric: 'Supplier Environmental Code Compliance',
    description: 'Formal auditing of tier-1 raw material and coating providers on labor and environmental standards.',
    cadence: 'Annual review'
  }
];
