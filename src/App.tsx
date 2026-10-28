import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ChairsPage } from './pages/ChairsPage';
import { ProcessPage } from './pages/ProcessPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryModal } from './components/EnquiryModal';
import { PrivacyModal } from './components/PrivacyModal';
import { GoogleSitesGuideModal } from './components/GoogleSitesGuideModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryChairId, setEnquiryChairId] = useState<string | undefined>(undefined);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [googleSitesGuideOpen, setGoogleSitesGuideOpen] = useState(false);

  // Sync hash routing for shareability and back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = [
        'home',
        'about',
        'chairs',
        'process',
        'sustainability',
        'projects',
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (chairId?: string) => {
    setEnquiryChairId(chairId);
    setEnquiryModalOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    navigateToPage('projects');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F4] text-[#103D2E] selection:bg-[#B5F45A] selection:text-[#103D2E]">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
        onSelectProject={handleSelectProject}
        onExploreChairs={() => navigateToPage('chairs')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={navigateToPage}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={navigateToPage}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}
        {currentPage === 'chairs' && (
          <ChairsPage onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'process' && (
          <ProcessPage onOpenEnquiry={() => handleOpenEnquiry()} />
        )}
        {currentPage === 'sustainability' && (
          <SustainabilityPage onOpenEnquiry={() => handleOpenEnquiry()} />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            initialProjectId={selectedProjectId}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenPrivacy={() => setPrivacyModalOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={navigateToPage}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenGoogleSitesGuide={() => setGoogleSitesGuideOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Product Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        preselectedChairId={enquiryChairId}
      />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Google Sites Reproduction Guide Modal */}
      <GoogleSitesGuideModal
        isOpen={googleSitesGuideOpen}
        onClose={() => setGoogleSitesGuideOpen(false)}
      />
    </div>
  );
}
