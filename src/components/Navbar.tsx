import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Page } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onSelectProject?: (projectId: string) => void;
  onExploreChairs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onSelectProject,
  onExploreChairs
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { label: string; page: Page; hasDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Our Chairs', page: 'chairs' },
    { label: 'Process', page: 'process' },
    { label: 'Sustainability', page: 'sustainability' },
    { label: 'Projects', page: 'projects', hasDropdown: true },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (id: string) => {
    if (onSelectProject) {
      onSelectProject(id);
    }
    setCurrentPage('projects');
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F7F4]/90 backdrop-blur-md border-b border-[#103D2E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Nexlivo Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Nexlivo Home"
          >
            {/* Custom geometric folding chair mark */}
            <div className="w-10 h-10 rounded-xl bg-[#103D2E] text-[#B5F45A] flex items-center justify-center shadow-sm group-hover:bg-[#21885B] transition-colors">
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
              <span className="text-2xl font-bold tracking-tight text-[#103D2E] block leading-none">
                Nexlivo
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#21885B] block mt-0.5">
                Smart Seating
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#103D2E]">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;

              if (item.hasDropdown) {
                return (
                  <div key={item.page} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                      className={`flex items-center gap-1.5 py-1.5 transition-colors focus:outline-none whitespace-nowrap shrink-0 ${
                        isActive ? 'text-[#21885B] font-semibold' : 'text-[#103D2E]/80 hover:text-[#103D2E]'
                      }`}
                      aria-expanded={projectsDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          projectsDropdownOpen ? 'rotate-180 text-[#21885B]' : 'text-[#103D2E]/60'
                        }`}
                      />
                    </button>

                    {/* Projects Dropdown Menu */}
                    {projectsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                        <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#103D2E] uppercase tracking-wider">
                            Startup Projects
                          </span>
                          <button
                            onClick={() => handleNavClick('projects')}
                            className="text-[11px] text-[#21885B] hover:underline font-semibold"
                          >
                            View All (8)
                          </button>
                        </div>
                        <div className="max-h-72 overflow-y-auto space-y-0.5">
                          {PROJECTS_DATA.map((proj) => (
                            <button
                              key={proj.id}
                              onClick={() => handleProjectSelect(proj.id)}
                              className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F7F4] transition-colors flex items-start gap-2.5 group"
                            >
                              <span className="font-mono text-[#21885B] text-[11px] shrink-0 font-semibold mt-0.5">
                                {proj.number}
                              </span>
                              <div>
                                <span className="font-medium text-slate-800 group-hover:text-[#103D2E] block line-clamp-1">
                                  {proj.title}
                                </span>
                                <span className="text-[11px] text-slate-400 line-clamp-1">
                                  {proj.shortDesc}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`py-1.5 relative whitespace-nowrap shrink-0 transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#21885B] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#21885B]'
                      : 'text-[#103D2E]/80 hover:text-[#103D2E]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Prominent Green Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onExploreChairs}
              className="px-5 py-2.5 bg-[#21885B] hover:bg-[#103D2E] text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow whitespace-nowrap shrink-0 flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Chairs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5F45A] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#103D2E] hover:bg-slate-200/60 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg px-6 py-6 space-y-4 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.page}>
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    currentPage === item.page
                      ? 'bg-[#21885B]/10 text-[#21885B]'
                      : 'text-slate-700 hover:bg-[#F5F7F4]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className="text-[11px] font-normal text-slate-400">8 projects</span>
                  )}
                </button>

                {item.hasDropdown && (
                  <div className="pl-4 pr-1 py-1 space-y-1 mt-1 border-l-2 border-slate-100 ml-3">
                    {PROJECTS_DATA.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => handleProjectSelect(proj.id)}
                        className="w-full text-left py-1 px-2 text-xs text-slate-600 hover:text-[#21885B] line-clamp-1"
                      >
                        <span className="text-[#21885B] font-mono mr-1.5">{proj.number}.</span>
                        {proj.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreChairs();
              }}
              className="w-full py-3 bg-[#21885B] text-white font-semibold text-sm rounded-lg text-center shadow-sm"
            >
              Explore Our Chairs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
