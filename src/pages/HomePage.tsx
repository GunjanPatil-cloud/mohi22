import React from 'react';
import { Page } from '../types';
import { CHAIRS_DATA } from '../data/chairsData';
import { ChairImage } from '../components/ChairImage';
import {
  ArrowRight,
  Maximize2,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  onOpenEnquiry: (chairId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenEnquiry
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Hero Section (Two-Column Layout) */}
      <section className="pt-8 sm:pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Buttons */}
            <div className="lg:col-span-6 space-y-6">
              {/* Small green label */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#21885B] bg-[#21885B]/10 px-3 py-1.5 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#21885B]" />
                <span>Next-Generation Folding Seating</span>
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#103D2E] leading-[1.1] text-balance">
                Smart Seating. Lasting Comfort.
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Discover practical, space-saving folding-chair solutions designed for everyday spaces, with a focus on functionality, quality, and responsible business growth.
              </p>

              {/* Two Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('chairs')}
                  className="px-6 py-3.5 bg-[#21885B] hover:bg-[#103D2E] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Our Chairs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3.5 bg-white hover:bg-[#F5F7F4] text-[#103D2E] font-semibold text-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
                >
                  Discover Our Story
                </button>
              </div>

              {/* Three Small Highlights */}
              <div className="pt-6 border-t border-slate-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#21885B]/15 text-[#21885B] flex items-center justify-center shrink-0 mt-0.5">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#103D2E]">Space-Saving Design</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Ultra-slim flat folding profile</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#21885B]/15 text-[#21885B] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#103D2E]">Quality-Focused Approach</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Reinforced hinge & frame engineering</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#21885B]/15 text-[#21885B] flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#103D2E]">Responsible Growth</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Material efficiency & circular mindset</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Product Photo on Clean Background */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-3 aspect-[4/3] sm:aspect-[16/10] lg:aspect-square flex items-center justify-center group">
                <ChairImage
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Nexlivo folding chair on clean light background"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  category="Signature Collection"
                  title="Modern Precision Folding Seating"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#21885B] uppercase tracking-wider block">
                      Engineered Simplicity
                    </span>
                    <span className="text-sm font-bold text-[#103D2E]">
                      Zero wobble. Instant fold-away stowage.
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry('comfort-folding-chair')}
                    className="text-xs font-semibold text-[#103D2E] hover:text-[#21885B] underline"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Brand Mission, Vision & Concept Introduction */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
                About The Startup
              </span>
              <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight">
                Rethinking everyday seating through honest manufacturing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nexlivo is a modern furniture manufacturing startup established to bridge the gap between flimsy temporary folding chairs and costly rigid seating.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                By focusing on ergonomic seat geometry, tight hinge tolerances, and sustainable material sourcing, we build chairs that look at home in contemporary interiors yet fold away in seconds.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#21885B] hover:text-[#103D2E] group"
                >
                  <span>Learn about our mission and founding vision</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#21885B]/15 text-[#21885B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-base font-bold text-[#103D2E]">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To provide practical, comfortable, and space-conscious seating solutions that elevate living, working, and event spaces without wasteful production.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#21885B]/15 text-[#21885B] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-base font-bold text-[#103D2E]">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become the standard for responsible, modular folding furniture recognized for structural longevity and thoughtful environmental stewardship.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#21885B]/15 text-[#21885B] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-base font-bold text-[#103D2E]">Our Business Goals</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Scale sustainable regional manufacturing, serve high-volume institutional clients, and maintain positive unit economics from initial production batches.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#21885B]/15 text-[#21885B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-base font-bold text-[#103D2E]">Responsible Growth</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Embed circular principles into product design, ensuring parts are modular, repairable, and readily recycled rather than destined for landfills.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Folding Chair Concepts / Product Catalog Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
              Seating Collection
            </span>
            <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight mt-1">
              Explore Our Chairs
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Engineered for stability, ergonomic support, and rapid stowability across diverse commercial and residential settings.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('chairs')}
            className="text-xs font-bold text-[#21885B] hover:text-[#103D2E] inline-flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>View Full Lineup & Enquire</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHAIRS_DATA.map((chair) => (
            <div
              key={chair.id}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                <ChairImage
                  src={chair.image}
                  alt={chair.name}
                  category={chair.category}
                  title={chair.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#21885B] uppercase tracking-wider block mb-1">
                    {chair.category}
                  </span>
                  <h3 className="text-base font-bold text-[#103D2E] group-hover:text-[#21885B] transition-colors">
                    {chair.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {chair.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiry(chair.id)}
                    className="w-full py-2.5 px-3 bg-[#21885B] hover:bg-[#103D2E] text-white text-xs font-semibold rounded-lg transition-colors text-center shadow-xs"
                  >
                    Product Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Production Process Snapshot */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
              Manufacturing Precision
            </span>
            <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight mt-1">
              Our Production Process
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From certified alloy tubes to precision packaged delivery, every Nexlivo chair passes through four strict stages of craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Material Selection & Sourcing', desc: 'Tubular metal, beechwood, and non-toxic powder coats.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80' },
              { step: '02', title: 'Chair Assembly & Production', desc: 'Precision jig bending, robotic welding, and hinge alignment.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
              { step: '03', title: 'Quality Inspection', desc: 'Fatigue cycle checks, balance tests, and finish audits.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
              { step: '04', title: 'Packaging & Delivery', desc: 'High-density flat-pack protection engineered for clean logistics.', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80' }
            ].map((stage) => (
              <div key={stage.step} className="rounded-2xl bg-[#F5F7F4] border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden bg-slate-200 relative">
                  <ChairImage
                    src={stage.image}
                    alt={stage.title}
                    category={`Stage ${stage.step}`}
                    title={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#103D2E]/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#B5F45A]">
                    STAGE {stage.step}
                  </div>
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#103D2E] group-hover:text-[#21885B] transition-colors">{stage.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentPage('process')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#21885B] hover:text-[#103D2E]"
            >
              <span>Explore full step-by-step production methodology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Sustainability Commitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#103D2E] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none bg-[radial-gradient(#B5F45A_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5F45A] bg-white/10 px-3 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verifiable Sustainability</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Responsible by Design. Transparent by Principle.
            </h2>

            <p className="text-sm sm:text-base text-[#D6E5DE] leading-relaxed">
              We reject greenwashing. Our environmental roadmaps focus on genuine material efficiency, zero-landfill metal offcut recovery, and biodegradable packaging. All targets remain clearly designated as proposed until independently audited.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('sustainability')}
                className="px-5 py-3 bg-[#B5F45A] text-[#103D2E] font-bold text-xs rounded-xl hover:bg-white transition-colors shadow-sm"
              >
                View Sustainability Framework
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className="px-5 py-3 bg-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/20 transition-colors"
              >
                View Startup Projects (8)
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
