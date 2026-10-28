import { ChairProduct } from '../types';

export const CHAIRS_DATA: ChairProduct[] = [
  {
    id: 'classic-folding-chair',
    name: 'Classic Folding Chair',
    category: 'Essential Collection',
    tagline: 'Timeless form engineered for everyday utility',
    description:
      'A balanced, space-efficient folding chair crafted for versatile use across residential dining, study areas, and multi-purpose gathering spaces. Folds flat effortlessly with a smooth pivot mechanism.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Smooth pivot folding mechanism for slim storage',
      'Balanced supportive backrest for natural posture',
      'Protective non-marring floor feet',
      'Easy-to-clean scratch-resistant finish'
    ],
    dimensions: 'Fold-flat profile for closet or hanging storage',
    intendedSpaces: ['Dining Rooms', 'Balconies & Patios', 'Study Rooms', 'Small Apartments']
  },
  {
    id: 'comfort-folding-chair',
    name: 'Comfort Folding Chair',
    category: 'Ergonomic Line',
    tagline: 'Enhanced posture support for longer gatherings',
    description:
      'Designed with contoured seat cushioning and a curved back rest to provide prolonged sitting comfort without sacrificing quick foldability or clean aesthetics.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Ergonomically contoured seat and lumbar curve',
      'Padded fabric seating with breathable core',
      'Reinforced cross-brace structure for stability',
      'Gentle opening and locking hinge'
    ],
    dimensions: 'Compact nesting depth when folded',
    intendedSpaces: ['Work-from-Home Desks', 'Meeting Rooms', 'Workshops', 'Family Gatherings']
  },
  {
    id: 'compact-folding-chair',
    name: 'Compact Folding Chair',
    category: 'Ultra-Slim Series',
    tagline: 'Maximum space optimization with minimal footprint',
    description:
      'Engineered specifically for micro-apartments, dynamic classrooms, and high-density storage setups. Delivers a rigid frame with an exceptionally slim folded profile.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Ultra-thin folded profile for high-density stacking',
      'Lightweight frame for effortless one-handed carrying',
      'Integrated rear handle slot for quick transit',
      'Durable matte protective powder coat'
    ],
    dimensions: 'Ultra-slim flat depth for tight storage slots',
    intendedSpaces: ['Micro-Living Spaces', 'Seminars & Classrooms', 'Pop-up Venues', 'Studio Apartments']
  },
  {
    id: 'offices-and-events-chair',
    name: 'Folding Chairs for Offices and Events',
    category: 'Commercial & Institutional',
    tagline: 'High-density commercial seating built for rapid deployment',
    description:
      'Built for high turnover venues, conferences, educational halls, and corporate training rooms. Designed for fast batch unfolding, firm stability, and high-capacity cart stacking.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Cart-stackable geometry for efficient event logistics',
      'Heavy-duty alloy frame engineered for continuous setup cycles',
      'Interlocking gang-bracket compatibility for neat venue rows',
      'Wipe-clean hygienic surface materials'
    ],
    dimensions: 'Optimized for commercial multi-tier storage dollies',
    intendedSpaces: ['Corporate Training Rooms', 'Auditoriums & Event Halls', 'Universities & Schools', 'Community Centers']
  }
];
