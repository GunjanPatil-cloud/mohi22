import React from 'react';
import { Page } from '../types';
import { ChairImage } from '../components/ChairImage';
import { ArrowRight, Compass, Eye, Shield, Target, Lightbulb, Users } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Engineering Better Seating for Flexible Modern Spaces
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Nexlivo is a folding-chair manufacturing startup established to reinvent how portable furniture is designed, manufactured, and utilized across modern homes, corporate offices, and communal venues.
          </p>
        </div>
      </section>

      {/* Startup Story & Image Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
                The Nexlivo Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103D2E] tracking-tight">
                Born from frustration with disposable, uncomfortable folding chairs
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For decades, folding chairs have been treated as an afterthought—either flimsy stamped metal chairs that pinch fingers and wobble after three uses, or bulky event seating that wastes precious storage space.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nexlivo started with a simple belief: folding chairs should be as sturdy, comfortable, and beautifully resolved as permanent dining furniture, while folding completely flat for effortless stowage.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                By pairing durable alloy tubing with ergonomic lumbar geometry and modular repairability, we build seating solutions that institutions and households can rely upon for years.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('chairs')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#21885B] hover:bg-[#103D2E] px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Explore The Resulting Product Line</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <ChairImage
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80"
                  alt="Nexlivo design and assembly ethos"
                  category="Manufacturing Ethos"
                  title="Crafted for Enduring Strength"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#103D2E] text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#21885B] text-[#B5F45A] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-[#D6E5DE] leading-relaxed">
              To engineer space-efficient, durable, and aesthetically refined folding seating that empowers multi-functional spaces, while setting a higher standard for environmental accountability in furniture production.
            </p>
            <div className="pt-2 text-xs font-mono text-[#B5F45A]">
              PRACTICAL UTILITY · RESPONSIBLE PRODUCTION
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#21885B]/15 text-[#21885B] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#103D2E]">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To be the premier partner for households, universities, and commercial venues seeking modular seating that lasts for decades, eliminating disposable furniture waste through circular design and repairable components.
            </p>
            <div className="pt-2 text-xs font-mono text-[#21885B]">
              CIRCULARITY · ENDURING STABILITY
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight mt-1">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The foundation behind every manufacturing decision, engineering drawing, and customer partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#21885B]/10 text-[#21885B] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#103D2E]">Integrity in Materials</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never cut corners with thin gauge metal or cheap plastic hinge pins that wear out. Every structural component is chosen for lasting endurance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#21885B]/10 text-[#21885B] flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#103D2E]">Functionality First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Design is more than surface style. It is smooth folding action, compact nesting depth, non-slip feet, and ergonomic back contouring.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#21885B]/10 text-[#21885B] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#103D2E]">Responsible Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We grow in sync with real customer value, measuring our carbon and material efficiency rigorously rather than chasing vanity metrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#21885B]/10 text-[#21885B] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#103D2E]">Customer Centricity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct consultation with event managers, educators, and homeowners to ensure our chairs satisfy real spatial and operational workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Long-Term Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F7F4] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
              Strategic Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103D2E] tracking-tight">
              Our Long-Term Goals
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As an emerging manufacturing startup, Nexlivo has mapped a progressive 3-stage strategic expansion plan:
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-start gap-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#21885B]/10 text-[#21885B] rounded-md shrink-0">
                  Phase 1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#103D2E]">Tooling Refinement & Institutional Pilot</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Execute pilot production runs of the Classic and Comfort chairs for regional universities and event spaces to validate mechanical wear under heavy cyclic usage.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-start gap-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#21885B]/10 text-[#21885B] rounded-md shrink-0">
                  Phase 2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#103D2E]">Commercial Scale & Recycled Feedstock Integration</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Expand manufacturing capacity to full commercial output, introduce 40% certified recycled tubular steel, and establish nationwide distribution logistics.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-start gap-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#21885B]/10 text-[#21885B] rounded-md shrink-0">
                  Phase 3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#103D2E]">Closed-Loop Buyback & Zero-Landfill Manufacturing</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Launch an institutional furniture buyback and refurbishment program, providing venue operators with modular part refreshes to keep frames in circulation indefinitely.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 bg-[#21885B] hover:bg-[#103D2E] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Inquire About Early Pilot Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
