import { ProcessStage } from '../types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: 'Material Selection and Sourcing',
    subtitle: 'Prioritizing structural integrity, responsible origin, and material durability',
    description:
      'We carefully evaluate raw inputs to balance structural strength and weight efficiency. Sourcing focuses on certified tubular metal framing, sustainably harvested wood elements, and recyclable polymer joints that withstand repetitive mechanical stress.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    keyPractices: [
      'Evaluation of steel gauge thickness and tensile tolerance',
      'Responsibly sourced beech, birch, and composite wood panels',
      'Low-VOC, solvent-free protective powder coatings',
      'Supplier compliance with material quality and ethical standards'
    ]
  },
  {
    step: 2,
    title: 'Chair Assembly and Production',
    subtitle: 'Precision machining, smooth folding hinge alignment, and robust fastening',
    description:
      'Our assembly methodology emphasizes close-tolerance tooling. Every hinge pivot, cross-brace bracket, and fastener is aligned to ensure quiet opening, effortless fold-down action, and rock-solid seated stability.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    keyPractices: [
      'Precision tube bending and automated fixture welding',
      'Smooth friction-resistant hinge bushings for fluid motion',
      'Interlocking safety latches to prevent accidental collapse',
      'Consistent hardware torque application across batch runs'
    ]
  },
  {
    step: 3,
    title: 'Quality Inspection',
    subtitle: 'Rigorous multi-point validation before leaving our manufacturing line',
    description:
      'Every production batch undergoes systematic physical inspection. We assess frame geometry, joint resistance, surface finish uniformity, and load stability to ensure dependable everyday reliability.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    keyPractices: [
      'Geometric squareness and frame alignment checks',
      'Multi-cycle opening and closing mechanical verification',
      'Coating adhesion and scratch-resistance surface review',
      'Weight distribution and non-slip floor foot seating checks'
    ]
  },
  {
    step: 4,
    title: 'Packaging and Delivery',
    subtitle: 'Protective, space-optimized packaging minimizing waste and shipping footprint',
    description:
      'Engineered flat-pack cartons protect surface finishes in transit while maximizing transport volume density. By minimizing box bulk and eliminating unnecessary plastic fillers, we lower shipping footprint.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    keyPractices: [
      'Heavy-duty recyclable corrugated cardboard outer sleeves',
      'Corner guards made from molded pulp or recyclable paper',
      'High-density stacking layouts for pallet freight efficiency',
      'Clear assembly-free unpackaging instructions for end users'
    ]
  }
];
