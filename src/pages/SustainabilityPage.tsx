import React from 'react';
import {
  SUSTAINABILITY_PILLARS,
  PROPOSED_GOALS,
  MEASURING_PROGRESS_FRAMEWORK
} from '../data/sustainabilityData';
import { ChairImage } from '../components/ChairImage';
import {
  Leaf,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Calendar,
  FileCheck2,
  ArrowRight
} from 'lucide-react';

interface SustainabilityPageProps {
  onOpenEnquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Environmental & Social Stewardship
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Sustainability at Nexlivo
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Our framework for responsible furniture manufacturing: prioritizing real material efficiency, zero-waste packaging, and honest, verified milestones over unsubstantiated marketing claims.
          </p>

          <div className="mt-4 p-4 bg-[#21885B]/10 rounded-xl border border-[#21885B]/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#21885B] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-[#103D2E]">Transparency Commitment:</strong> All sustainability targets, material ratios, and reduction benchmarks are clearly designated as <em>proposed</em> until independently audited and verified by accredited third-party evaluators.
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars: Environmental, Social, Economic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
            Three Fundamental Pillars
          </span>
          <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight mt-1">
            Our Comprehensive Approach
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Balancing ecological care, fair workplace standards, and long-term economic durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => {
            const icons = [
              <Leaf key="0" className="w-6 h-6 text-[#21885B]" />,
              <Users key="1" className="w-6 h-6 text-[#21885B]" />,
              <TrendingUp key="2" className="w-6 h-6 text-[#21885B]" />
            ];

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#21885B]/10 flex items-center justify-center">
                    {icons[idx]}
                  </div>

                  <h3 className="text-xl font-bold text-[#103D2E]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#103D2E] uppercase tracking-wider block mb-2">
                      Key Planned Initiatives:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {pillar.initiatives.map((init, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21885B] shrink-0 mt-0.5" />
                          <span>{init}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Sustainability Goals (Clearly Labeled as Proposed Until Verified) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-1">
              Targets & Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#103D2E] tracking-tight">
              Our Sustainability Goals
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              The following targets represent Nexlivo's operational commitments. Each milestone is currently in proposal status and will transition to verified status upon completion of formal third-party audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROPOSED_GOALS.map((goal) => (
              <div
                key={goal.title}
                className="p-6 rounded-2xl bg-[#F5F7F4] border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#B5F45A]/40 text-[#103D2E]">
                    {goal.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#21885B]" />
                    {goal.targetHorizon}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#103D2E]">
                  {goal.title}
                </h4>

                <div className="text-xs text-slate-600 space-y-1">
                  <p>
                    <strong className="text-slate-800">Operational Scope:</strong> {goal.scope}
                  </p>
                  <p>
                    <strong className="text-slate-800">Verification Protocol:</strong> {goal.verificationMethod}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measuring Our Progress */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#103D2E] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5F45A] block">
              Governance & Oversight
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Measuring Our Progress
            </h2>
            <p className="text-sm text-[#D6E5DE] leading-relaxed">
              We employ structured internal audits and plan periodic public reporting to track material efficiency, packaging reductions, and operational emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MEASURING_PROGRESS_FRAMEWORK.map((item) => (
              <div
                key={item.metric}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2"
              >
                <div className="flex items-center gap-2 text-[#B5F45A]">
                  <FileCheck2 className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-white">{item.metric}</h4>
                </div>
                <p className="text-xs text-[#D6E5DE]/85 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-[11px] font-mono text-[#B5F45A] block pt-1">
                  Review Cadence: {item.cadence}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#D6E5DE]">
              Detailed research methodology is documented in our Startup Sustainability Audit project.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 bg-[#B5F45A] hover:bg-white text-[#103D2E] font-bold text-xs rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Request ESG Stakeholder Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
