import React, { useState } from 'react';
import { CHAIRS_DATA } from '../data/chairsData';
import { ChairImage } from '../components/ChairImage';
import { ChairProduct } from '../types';
import { ArrowRight, Check, SlidersHorizontal, Info, Sparkles } from 'lucide-react';

interface ChairsPageProps {
  onOpenEnquiry: (chairId?: string) => void;
}

export const ChairsPage: React.FC<ChairsPageProps> = ({ onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalChair, setActiveModalChair] = useState<ChairProduct | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Chairs' },
    { id: 'residential', label: 'Households & Apartments' },
    { id: 'commercial', label: 'Offices & Training' },
    { id: 'events', label: 'Events & Venues' },
    { id: 'compact', label: 'Compact & Ultra-Slim' }
  ];

  const filteredChairs = CHAIRS_DATA.filter((chair) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'residential') {
      return chair.id === 'classic-folding-chair' || chair.id === 'comfort-folding-chair';
    }
    if (selectedFilter === 'commercial') {
      return chair.id === 'comfort-folding-chair' || chair.id === 'offices-and-events-chair';
    }
    if (selectedFilter === 'events') {
      return chair.id === 'offices-and-events-chair' || chair.id === 'classic-folding-chair';
    }
    if (selectedFilter === 'compact') {
      return chair.id === 'compact-folding-chair';
    }
    return true;
  });

  return (
    <div className="space-y-12 pb-20 pt-8">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Product Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Our Chairs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Thoughtfully engineered folding seating tailored for space-conscious households, training classrooms, corporate halls, and event spaces.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-[#21885B] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#103D2E] hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredChairs.map((chair) => (
            <div
              key={chair.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <ChairImage
                    src={chair.image}
                    alt={chair.name}
                    category={chair.category}
                    title={chair.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#103D2E] shadow-xs">
                    {chair.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#103D2E] group-hover:text-[#21885B] transition-colors">
                      {chair.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#21885B] mt-0.5">
                      {chair.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {chair.description}
                  </p>

                  {/* Highlights / Functional Features */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#103D2E] uppercase tracking-wider block mb-2">
                      Design Highlights
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {chair.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#21885B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Intended Spaces */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Ideal For:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                      {chair.intendedSpaces.map((space, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F5F7F4] border border-slate-200/60 px-2.5 py-0.5 rounded-md text-[11px]"
                        >
                          {space}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Enquiry Button */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(chair.id)}
                  className="w-full sm:flex-1 py-3 px-4 bg-[#21885B] hover:bg-[#103D2E] text-white font-semibold text-xs rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Enquiry for {chair.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveModalChair(chair)}
                  className="w-full sm:w-auto py-3 px-4 bg-white hover:bg-[#F5F7F4] text-[#103D2E] border border-slate-200 font-medium text-xs rounded-xl transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Evaluation Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#21885B]/10 text-[#21885B] flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#103D2E]">Looking for institutional or batch procurement?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Nexlivo provides sample evaluation units, volume batch arrangements, and specialized cart accessories for organizations.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiry('offices-and-events-chair')}
            className="px-4 py-2.5 bg-[#103D2E] hover:bg-[#21885B] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Inquire for Organization
          </button>
        </div>
      </section>

      {/* Quick Details Modal */}
      {activeModalChair && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103D2E]/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <ChairImage
                src={activeModalChair.image}
                alt={activeModalChair.name}
                category={activeModalChair.category}
                title={activeModalChair.name}
              />
            </div>
            <span className="text-xs font-bold text-[#21885B] uppercase tracking-wider">
              {activeModalChair.category}
            </span>
            <h3 className="text-2xl font-bold text-[#103D2E] mt-1">{activeModalChair.name}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{activeModalChair.description}</p>
            
            <div className="my-4 pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#103D2E] uppercase mb-2">Key Highlights</h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activeModalChair.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#21885B]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setActiveModalChair(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = activeModalChair.id;
                  setActiveModalChair(null);
                  onOpenEnquiry(id);
                }}
                className="px-5 py-2 bg-[#21885B] hover:bg-[#103D2E] text-white text-xs font-semibold rounded-lg"
              >
                Enquire for this Model
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
