import React from 'react';
import { PROCESS_STAGES } from '../data/processData';
import { ChairImage } from '../components/ChairImage';
import { Check, ShieldCheck, Cog, Box, Layers, ArrowRight } from 'lucide-react';

interface ProcessPageProps {
  onOpenEnquiry: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Engineering & Manufacturing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Our Production Process
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Delivering consistent durability, fluid foldability, and minimal environmental footprint through four disciplined stages of modern production.
          </p>
        </div>
      </section>

      {/* 4 Stages Detailed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {PROCESS_STAGES.map((stage, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={stage.step}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#21885B]/10 rounded-md text-xs font-bold font-mono text-[#21885B]">
                    STAGE 0{stage.step} OF 04
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103D2E] tracking-tight">
                      {stage.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#21885B] mt-1">
                      {stage.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#103D2E] uppercase tracking-wider block mb-2.5">
                      Operational Benchmarks:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {stage.keyPractices.map((practice, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#B5F45A]/40 text-[#103D2E] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Product-only Image Side (No People) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-[#E9EFEA] relative group">
                    <ChairImage
                      src={stage.image}
                      alt={`Product and manufacturing stage: ${stage.title}`}
                      category={`Process Stage 0${stage.step}`}
                      title={stage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Process Standards Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#103D2E] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5F45A]">
              Manufacturing Assurance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tested for Continuous Setup and High-Frequency Stowing
            </h3>
            <p className="text-sm sm:text-base text-[#D6E5DE] leading-relaxed">
              Every prototype in our development facility is cycled thousands of times to ensure hinge pivots do not loosen, rattle, or bind over years of daily repositioning.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 bg-[#B5F45A] hover:bg-white text-[#103D2E] font-bold text-xs rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Request Manufacturing Technical Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
