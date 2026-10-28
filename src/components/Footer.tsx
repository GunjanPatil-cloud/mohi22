import React from 'react';
import { Page } from '../types';
import { CHAIRS_DATA } from '../data/chairsData';
import { Mail, Phone, MapPin, ArrowRight, BookOpen, Shield } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenPrivacy: () => void;
  onOpenGoogleSitesGuide: () => void;
  onOpenEnquiry: (chairId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  onOpenPrivacy,
  onOpenGoogleSitesGuide,
  onOpenEnquiry
}) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#103D2E] text-[#D6E5DE] pt-16 pb-12 border-t border-[#103D2E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#21885B] text-[#B5F45A] flex items-center justify-center shadow-inner">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M7 3h10v10H7z" />
                  <path d="M5 21l5-8" />
                  <path d="M19 21l-5-8" />
                  <path d="M5 13h14" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">
                  Nexlivo
                </span>
                <span className="text-xs font-semibold text-[#B5F45A] tracking-wider uppercase">
                  Smart Seating. Lasting Comfort.
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D6E5DE]/85 leading-relaxed max-w-sm">
              Modern folding-chair manufacturing startup engineered for space efficiency, durability, and responsible growth across homes, corporate offices, and venues.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#103D2E] bg-[#B5F45A] hover:bg-white px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Commercial Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D6E5DE]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chairs')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Our Chairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('process')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Production Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sustainability')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Startup Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B5F45A] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-sm text-[#D6E5DE]/80">
              {CHAIRS_DATA.map((chair) => (
                <li key={chair.id}>
                  <button
                    onClick={() => {
                      handleNav('chairs');
                      onOpenEnquiry(chair.id);
                    }}
                    className="hover:text-[#B5F45A] transition-colors text-left flex items-start gap-1.5 group"
                  >
                    <span className="text-[#B5F45A] opacity-60 group-hover:opacity-100">›</span>
                    <span>{chair.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-xs text-[#D6E5DE]/60 block">
                  Custom batch inquiries available for institutions and venues.
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Placeholders */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Placeholders
            </h4>
            <p className="text-xs text-[#D6E5DE]/70 leading-normal">
              Official operational contact points for the Nexlivo startup:
            </p>

            <div className="space-y-2.5 text-xs text-[#D6E5DE]/90">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B5F45A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-[#D6E5DE]/60 block uppercase font-mono">Business Email</span>
                  <span className="font-mono text-white">contact@nexlivo-placeholder.com</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B5F45A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-[#D6E5DE]/60 block uppercase font-mono">Telephone</span>
                  <span className="font-mono text-white">+1 (800) 555-CHAIR [Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B5F45A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-[#D6E5DE]/60 block uppercase font-mono">Manufacturing Facility</span>
                  <span>Industrial Park Hub [Location Placeholder]</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGoogleSitesGuide}
                className="inline-flex items-center gap-1.5 text-xs text-[#B5F45A] hover:underline cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Google Sites Reproduction Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D6E5DE]/70">
          <p>© 2026 Nexlivo. All rights reserved. Smart Seating. Lasting Comfort.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5 text-[#B5F45A]" />
              <span>Privacy Notice</span>
            </button>
            <button
              onClick={onOpenGoogleSitesGuide}
              className="hover:text-white transition-colors"
            >
              Google Sites Blueprint
            </button>
            <span className="text-[11px] text-[#B5F45A]">
              Hex: #103D2E · #21885B · #B5F45A
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
