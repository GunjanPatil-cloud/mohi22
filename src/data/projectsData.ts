import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sustainability-audit',
    number: '01',
    title: 'Sustainability Audit of a Startup',
    shortDesc:
      'Baseline analysis of manufacturing energy consumption, material scrap ratios, and initial operational carbon footprint.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'This project presents our foundational environmental evaluation of Nexlivo as an emerging furniture manufacturer. It establishes preliminary benchmarks for raw material conversion, identifies scrap hotspots during tube cutting, and establishes an operational framework to verify sustainable claims prior to market publication.',
    sections: [
      {
        heading: 'Audit Scope & Objective',
        content:
          'The initial audit assessed physical operations from raw metal delivery to final boxed inventory. The core objective was mapping carbon and resource intensity across each assembly phase.',
        bulletPoints: [
          'Material intensity per chair unit (metal tubing, fasteners, surface coats)',
          'Electric energy consumption across welding, powder-coating, and packaging lines',
          'Quantification of pre-consumer metal and timber cutting scrap',
          'Identification of non-recyclable protective elements in incoming supplies'
        ]
      },
      {
        heading: 'Key Diagnostic Findings',
        content:
          'Our initial analysis confirmed that 74% of the lifecycle footprint originates in raw material extraction and steel processing, highlighting that product longevity and recycled feedstock are the primary levers for environmental impact reduction.',
        bulletPoints: [
          'Cutting optimization software can decrease raw metal offcut waste by an estimated 14%',
          'Switching to solvent-free electro-static powder coatings eliminates 98% of VOC emissions in painting',
          'Flat-pack density improvements can fit up to 35% more units per transport pallet compared to pre-assembled competitors'
        ]
      },
      {
        heading: 'Corrective Action Plan',
        content:
          'Phase 1 focuses on standardizing offcut sorting and implementing third-party verified mill sourcing for recycled tubular steel.'
      }
    ],
    keyTakeaways: [
      'Raw materials represent the single largest carbon driver in chair production.',
      'Maximizing durability directly offsets replacement cycle emissions.',
      'All environmental claims must undergo verification before commercial release.'
    ]
  },
  {
    id: 'business-model',
    number: '02',
    title: 'Our Business Model',
    shortDesc:
      'Hybrid B2B institutional wholesale and direct consumer model prioritizing durable, space-saving furniture.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'Nexlivo operates a value-driven hybrid business model targeting both high-volume institutional purchasers (schools, event venues, corporate facilities) and design-conscious residential buyers in space-constrained living environments.',
    sections: [
      {
        heading: 'Value Proposition & Market Fit',
        content:
          'Most folding chairs in the market suffer from one of two extremes: cheap, disposable stamped metal chairs that bend easily, or bulky designer chairs that do not fold compactly. Nexlivo bridges this gap by delivering structural reliability, clean modern aesthetics, and ultra-compact stowing.',
        bulletPoints: [
          'Dual focus: Compact residential living and heavy-duty institutional fleets',
          'Direct-to-organization bulk pricing without distributor markups',
          'Modular repairability to eliminate premature product disposal',
          'Space-saving logistics reducing warehouse and shipping costs'
        ]
      },
      {
        heading: 'Revenue Streams & Commercial Channels',
        content:
          'Our revenue architecture is structured around recurring institutional refresh cycles and volume commercial sales, complemented by direct online ordering for residential customers.',
        bulletPoints: [
          'B2B Venue & Event Logistics: Bulk orders with cart and dolly accessories',
          'Educational & Training Facilities: Multi-unit batches with ganging clips',
          'Direct Residential Sales: Curated sets for apartments and home offices',
          'Spare Parts & Refurbishment: Replacement foot pads, fasteners, and seat cushions'
        ]
      },
      {
        heading: 'Unit Economics & Cost Structure',
        content:
          'Operating leverage improves through standardized frame geometry across the Classic and Comfort lines, minimizing proprietary tooling overhead.'
      }
    ],
    keyTakeaways: [
      'High-volume institutional accounts provide stable baseline revenue.',
      'Shared tooling between models yields significant cost efficiencies.',
      'Modular replacement parts generate brand loyalty and secondary revenue.'
    ]
  },
  {
    id: 'supply-chain-operations',
    number: '03',
    title: 'Our Supply Chain & Operations',
    shortDesc:
      'Lean regional manufacturing, audited tier-1 material suppliers, and optimized flat-pack logistics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'Operational resilience at Nexlivo is built upon regionalized supply clusters, just-in-time material scheduling, and tight manufacturing tolerances to maintain consistent production quality while limiting storage bloat.',
    sections: [
      {
        heading: 'Regional Sourcing Architecture',
        content:
          'To mitigate international freight delays and reduce transportation carbon, Nexlivo prioritizes regional suppliers for primary structural steel tubing, certified wood panels, and hardware fasteners.',
        bulletPoints: [
          'Steel mill partnerships within regional transport corridors',
          'FSC-certified timber sourcing for curved backrests',
          'Standardized fastener inventory to avoid single-supplier dependencies',
          'Dual-supplier redundancy on high-stress hinge bushings'
        ]
      },
      {
        heading: 'Lean Assembly Operations',
        content:
          'Our facility uses modular assembly cells rather than rigid monolithic conveyor lines, allowing flexible shifts between residential Classic orders and large institutional Comfort runs.',
        bulletPoints: [
          'Cellular manufacturing allowing fast re-tooling between chair variants',
          'Poka-yoke error-proofing on hinge pin alignment jigs',
          'Synchronized batch powder-coating cycles to minimize color-change waste',
          'In-line mechanical cycle testing on random pull samples'
        ]
      },
      {
        heading: 'Logistics Optimization',
        content:
          'Standardized flat cartons interlock precisely on euro and standard pallets, achieving up to 94% volumetric packing efficiency.'
      }
    ],
    keyTakeaways: [
      'Regional sourcing reduces lead time volatility and transport emissions.',
      'Cellular assembly cells enable rapid adaptation to bulk order surges.',
      'Volumetric packaging density dramatically cuts freight expenses.'
    ]
  },
  {
    id: 'growth-financial-outlook',
    number: '04',
    title: 'Our Growth & Financial Outlook',
    shortDesc:
      'Disciplined capital allocation, phased manufacturing scaling, and sustainable commercial expansion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'Nexlivo takes a conservative, quality-led growth trajectory. Rather than chasing unsustainable volume at the expense of product integrity, our financial plan targets gradual capacity scaling funded by positive unit gross margins.',
    sections: [
      {
        heading: 'Phased Scaling Milestones',
        content:
          'Growth is organized into three distinct operational horizons designed to de-risk capital expenditures while proving market traction.',
        bulletPoints: [
          'Phase 1: Tooling validation, initial pilot batch runs, and regional test deployments',
          'Phase 2: Commercial launch targeting corporate events, colleges, and residential e-commerce',
          'Phase 3: Automated robotic welding cells and expanding nationwide wholesale distribution'
        ]
      },
      {
        heading: 'Capital Discipline & Break-Even Model',
        content:
          'Our operational break-even point is calibrated around reasonable production volumes, avoiding excessive fixed debt during early startup stages.',
        bulletPoints: [
          'Direct reinvestment of early gross margins into precision tooling ownership',
          'Controlled inventory levels to prevent carrying cost depreciation',
          'Transparent, verified financial reporting adhering to conservative accounting principles'
        ]
      },
      {
        heading: 'Market Opportunity',
        content:
          'The increasing demand for multi-functional spaces in modern architecture, hybrid offices, and urban homes creates an expanding total addressable market for premium folding furniture.'
      }
    ],
    keyTakeaways: [
      'Organic unit profitability prioritized over high-burn customer acquisition.',
      'Phased capital deployment protects against premature inventory scaling.',
      'Commercial multi-space demand presents resilient, counter-cyclical growth.'
    ]
  },
  {
    id: 'risk-management',
    number: '05',
    title: 'Risk Assessment & Management',
    shortDesc:
      'Comprehensive risk framework covering supply disruptions, product liability, price volatility, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'Proactive risk governance ensures that mechanical safety, supply chain shocks, and material price variations are identified early and mitigated through systematic contingency planning.',
    sections: [
      {
        heading: 'Operational & Supply Risks',
        content:
          'Hardware hinges and high-tolerance steel tubes represent critical single points of failure if not actively guarded.',
        bulletPoints: [
          'Raw steel price fluctuations: Buffer stock protocols and quarterly hedge agreements',
          'Component supply bottlenecks: Secondary validated sources for all mechanical pins',
          'Tooling wear: Scheduled preventative maintenance schedules on all hydraulic benders'
        ]
      },
      {
        heading: 'Mechanical Integrity & Product Safety',
        content:
          'Furniture failure in public or corporate settings carries significant liability. Nexlivo maintains strict internal stress protocols.',
        bulletPoints: [
          'Anti-pinch hinge geometry minimizing finger entrapment risks',
          'Cyclic fatigue testing simulating years of repeated opening and seating impact',
          'Non-slip elastomer feet to prevent sliding accidents on polished venue floors'
        ]
      },
      {
        heading: 'Regulatory & Environmental Compliance',
        content:
          'Continuous monitoring of regional fire retardancy codes, consumer safety standards, and emissions mandates for finishing coatings.'
      }
    ],
    keyTakeaways: [
      'Dual-sourcing mechanical hardware prevents sudden production halts.',
      'Built-in safety features reduce product liability exposure.',
      'Preemptive compliance auditing ensures smooth market entry.'
    ]
  },
  {
    id: 'esg-impact',
    number: '06',
    title: 'ESG Integration & Impact Measurement',
    shortDesc:
      'Structured environmental, social, and governance matrix linking internal benchmarks with verified accountability.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'Nexlivo integrates ESG principles directly into manufacturing decisions, vendor selection, and governance reporting. We reject vague greenwashing in favor of verifiable data points and clearly designated proposed milestones.',
    sections: [
      {
        heading: 'Environmental Dimension (E)',
        content:
          'Focusing on measurable resource intensity, circular design attributes, and verified scrap minimization.',
        bulletPoints: [
          'Design for disassembly: No glued composite assemblies that prevent metal recycling',
          'Packaging simplification: Eliminating plastic shrink wraps in favor of paper bands',
          'Proposed Goal: Establishing a buyback and refurbishment pilot for institutional clients'
        ]
      },
      {
        heading: 'Social Dimension (S)',
        content:
          'Worker safety on the factory floor, fair remuneration, and safe ergonomics for the end user.',
        bulletPoints: [
          'Regular workshop floor air quality testing during welding and finishing',
          'Comprehensive ergonomic training for line assembly technicians',
          'Transparent feedback loops for continuous floor safety enhancements'
        ]
      },
      {
        heading: 'Governance Dimension (G)',
        content:
          'Rigorous oversight, ethics code adherence, and accurate reporting of all corporate disclosures.',
        bulletPoints: [
          'Prohibition of unverified environmental marketing claims',
          'Open stakeholder audits for educational and municipal clients',
          'Whistleblower protection and equal opportunity hiring policies'
        ]
      }
    ],
    keyTakeaways: [
      'ESG metrics are treated as operational KPIs, not PR slogans.',
      'Circular product design makes end-of-life recycling commercially viable.',
      'Transparent reporting builds trust with institutional buyers.'
    ]
  },
  {
    id: 'team-culture',
    number: '07',
    title: 'Our Team & Culture',
    shortDesc:
      'Engineering mindset, craftsmanship pride, collaborative problem-solving, and continuous learning.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'At Nexlivo, culture is centered on industrial pride, craftsmanship, and pragmatic problem-solving. We cultivate an environment where design engineers and workshop technicians work side by side to perfect physical products.',
    sections: [
      {
        heading: 'Craftsmanship Meets Modern Engineering',
        content:
          'We bridge the gap between traditional furniture durability and contemporary precision manufacturing. Every team member understands how their work translates to comfort for the end user.',
        bulletPoints: [
          'Cross-functional floor huddles between design engineers and assembly techs',
          'Culture of continuous improvement (Kaizen) on fixture ergonomics and flow',
          'Recognition of individual craftsmanship in weld finishing and upholstery tension'
        ]
      },
      {
        heading: 'Core Cultural Principles',
        content:
          'Our team operates on four non-negotiable guiding tenets that shape daily decision making across the shop floor and management.',
        bulletPoints: [
          'Respect for the Material: Eliminate waste, treat inputs with care',
          'Simplicity in Mechanics: The simplest reliable hinge is always the best',
          'Truth in Quality: Never ship a unit you would not seat your own family upon',
          'Collaborative Accountability: Open discussion of defects to drive systemic fixes'
        ]
      },
      {
        heading: 'Workplace Well-being',
        content:
          'Investment in ergonomic lifting assists, natural workshop lighting, and continuous skill certification in metal fabrication and CNC tooling.'
      }
    ],
    keyTakeaways: [
      'Cross-disciplinary collaboration creates practical, robust furniture.',
      'Floor technicians hold direct authority to halt lines for quality defects.',
      'Safety, pride, and skill development drive team retention.'
    ]
  },
  {
    id: 'final-project',
    number: '08',
    title: 'Final Project: The Nexlivo Synthesis',
    shortDesc:
      'Comprehensive startup synthesis integrating design, manufacturing capability, sustainability, and market strategy.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    executiveSummary:
      'The Final Project brings together all seven preceding operational pillars into a unified strategic roadmap for Nexlivo. It documents the transition from early design concepts into a viable, responsible, and scalable manufacturing enterprise.',
    sections: [
      {
        heading: 'Integrated Operational Architecture',
        content:
          'This synthesis links material sourcing, lean cellular assembly, risk mitigation, and verified sustainability into an actionable commercial blueprint.',
        bulletPoints: [
          'Standardized frame architecture across 4 distinct market offerings',
          'Verified lean manufacturing flow minimizing work-in-progress capital',
          'Direct institutional sales pipeline for rapid validation and cash generation',
          'Clear governance structure ensuring verified claims before public release'
        ]
      },
      {
        heading: 'Commercial Launch Readiness',
        content:
          'Key readiness indicators verified across tooling, supply partnerships, and distribution logistics.',
        bulletPoints: [
          'Prototype cycle testing validated to surpass typical residential folding cycles',
          'Flat-pack carton engineering finalized for standard pallet density',
          'Initial B2B inquiry pipeline established with regional event operators',
          'Proposed sustainability verification roadmap staged for Phase 2 implementation'
        ]
      },
      {
        heading: 'Vision for Future Scaling',
        content:
          'Nexlivo aims to redefine folding seating from an afterthought utility into a modern, comfortable, and environmentally sound standard for flexible spaces.'
      }
    ],
    keyTakeaways: [
      'Holistic integration of engineering, ethics, and unit economics.',
      'Clear, defensible product differentiation in everyday seating.',
      'Foundation established for responsible, verifiable long-term growth.'
    ]
  }
];
