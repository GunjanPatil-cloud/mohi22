import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ChairImage } from '../components/ChairImage';
import { ProjectItem } from '../types';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

interface ProjectsPageProps {
  initialProjectId?: string;
  onOpenEnquiry: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialProjectId,
  onOpenEnquiry
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    initialProjectId || PROJECTS_DATA[0].id
  );

  useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId);
    }
  }, [initialProjectId]);

  const activeProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const activeIndex = PROJECTS_DATA.findIndex((p) => p.id === activeProject.id);
  const prevProject = activeIndex > 0 ? PROJECTS_DATA[activeIndex - 1] : null;
  const nextProject =
    activeIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[activeIndex + 1] : null;

  const handleSelect = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-20 pt-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Research, Operations & Strategy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Startup Projects & Strategic Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            In-depth documentation exploring Nexlivo's engineering viability, supply chain logistics, ESG framework, and business model synthesis.
          </p>
        </div>

        {/* 8 Projects Selector Bar */}
        <div className="mt-8 border-b border-slate-200 pb-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {PROJECTS_DATA.map((proj) => {
              const isActive = proj.id === activeProject.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(proj.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#103D2E] text-white font-semibold shadow-xs'
                      : 'bg-white text-slate-600 hover:text-[#103D2E] hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span
                    className={`font-mono font-bold text-[11px] ${
                      isActive ? 'text-[#B5F45A]' : 'text-[#21885B]'
                    }`}
                  >
                    {proj.number}
                  </span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Project View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-10">
          
          {/* Project Title & Top Meta */}
          <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#21885B]/10 text-[#21885B] rounded-md">
                  PROJECT {activeProject.number} OF 08
                </span>
                <span className="text-xs text-slate-400">Nexlivo Technical Documentation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#103D2E] tracking-tight">
                {activeProject.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                {activeProject.shortDesc}
              </p>
            </div>

            {/* Quick Navigation between projects */}
            <div className="flex items-center gap-2 self-start shrink-0">
              <button
                disabled={!prevProject}
                onClick={() => prevProject && handleSelect(prevProject.id)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-[#103D2E] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={prevProject ? `Previous: ${prevProject.title}` : 'First project'}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={!nextProject}
                onClick={() => nextProject && handleSelect(nextProject.id)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-[#103D2E] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={nextProject ? `Next: ${nextProject.title}` : 'Last project'}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Banner / Relevant Image (Product/Industrial - No People) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-[#E9EFEA]">
                <ChairImage
                  src={activeProject.image}
                  alt={`Project illustration for ${activeProject.title}`}
                  category={`Study ${activeProject.number}`}
                  title={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Executive Summary Box */}
            <div className="lg:col-span-5 bg-[#F5F7F4] p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#21885B]">
                <BookOpen className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProject.executiveSummary}
              </p>
              
              <div className="pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-bold text-[#103D2E] uppercase block mb-2">
                  Key Strategic Takeaways:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeProject.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#21885B] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Organized Content Sections */}
          <div className="space-y-8 pt-4">
            <div className="text-lg font-bold text-[#103D2E] border-b border-slate-100 pb-2">
              Detailed Analysis & Operational Sections
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProject.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-[#F5F7F4]/70 border border-slate-200/60 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-[#21885B]">
                      SECTION {activeProject.number}.{sIdx + 1}
                    </span>
                    <h3 className="text-base font-bold text-[#103D2E]">
                      {section.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {section.content}
                    </p>

                    {section.bulletPoints && (
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600 border-t border-slate-200/40">
                        {section.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex items-start gap-1.5">
                            <span className="text-[#21885B] font-bold">›</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Project Navigator Bar */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Viewing project {activeIndex + 1} of {PROJECTS_DATA.length}
            </div>

            <div className="flex items-center gap-3">
              {prevProject && (
                <button
                  onClick={() => handleSelect(prevProject.id)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-[#103D2E] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous: {prevProject.title}</span>
                </button>
              )}
              {nextProject && (
                <button
                  onClick={() => handleSelect(nextProject.id)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#21885B] hover:bg-[#103D2E] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Next: {nextProject.title}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Project Overview Directory List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21885B]">
              Master Index
            </span>
            <h3 className="text-xl font-bold text-[#103D2E] mt-1">
              Complete List of Startup Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS_DATA.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  p.id === activeProject.id
                    ? 'border-[#21885B] bg-[#21885B]/5 ring-1 ring-[#21885B]'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-[#F5F7F4]'
                }`}
              >
                <span className="font-mono text-xs font-bold text-[#21885B] block mb-1">
                  Project {p.number}
                </span>
                <h4 className="text-xs font-bold text-[#103D2E] line-clamp-1">{p.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{p.shortDesc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
