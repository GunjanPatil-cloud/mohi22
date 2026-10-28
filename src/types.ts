export type Page =
  | 'home'
  | 'about'
  | 'chairs'
  | 'process'
  | 'sustainability'
  | 'projects'
  | 'contact';

export interface ChairProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  dimensions: string;
  intendedSpaces: string[];
}

export interface ProcessStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keyPractices: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  executiveSummary: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
  keyTakeaways: string[];
}

export interface SustainabilityPillar {
  title: string;
  summary: string;
  initiatives: string[];
}

export interface ProposedGoal {
  title: string;
  status: 'Proposed (Pending Verification)' | 'Planned Phase 1' | 'Planned Phase 2';
  targetHorizon: string;
  scope: string;
  verificationMethod: string;
}
