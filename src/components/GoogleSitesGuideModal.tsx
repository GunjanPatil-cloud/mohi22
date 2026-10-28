import React, { useState } from 'react';
import { X, Layers, Palette, Layout, FileText, CheckCircle2 } from 'lucide-react';

interface GoogleSitesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesGuideModal: React.FC<GoogleSitesGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'theme' | 'pages' | 'blocks' | 'colors'>('theme');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103D2E]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[88vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#103D2E] p-2 rounded-full hover:bg-[#F5F7F4] transition-colors"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4 text-[#103D2E]">
          <div className="w-10 h-10 rounded-xl bg-[#21885B]/15 flex items-center justify-center text-[#21885B]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Google Sites Reproduction Guide</h3>
            <p className="text-xs text-slate-500">
              How to recreate the Nexlivo website using native Google Sites built-in features
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F5F7F4] rounded-lg mb-6 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('theme')}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'theme' ? 'bg-white text-[#103D2E] font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-[#21885B]" />
            1. Theme & Fonts
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'pages' ? 'bg-white text-[#103D2E] font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#21885B]" />
            2. Page Tree Structure
          </button>
          <button
            onClick={() => setActiveTab('blocks')}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'blocks' ? 'bg-white text-[#103D2E] font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layout className="w-3.5 h-3.5 text-[#21885B]" />
            3. Content Blocks & Layouts
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'colors' ? 'bg-white text-[#103D2E] font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#21885B]" />
            4. Color Hex Values
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-xs sm:text-sm text-slate-600 space-y-4">
          {activeTab === 'theme' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#103D2E] text-sm">Create a Custom Theme in Google Sites:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  In the right-hand sidebar of Google Sites, select <strong>Themes</strong> &gt; Click <strong>+ Create theme</strong>.
                </li>
                <li>
                  <strong>Theme Name:</strong> Nexlivo Brand Theme.
                </li>
                <li>
                  <strong>Color Palette:</strong> Select <em>Custom</em> and enter primary brand green <code className="bg-slate-100 px-1 py-0.5 rounded text-[#21885B] font-mono">#21885B</code> and secondary dark forest <code className="bg-slate-100 px-1 py-0.5 rounded text-[#103D2E] font-mono">#103D2E</code>.
                </li>
                <li>
                  <strong>Fonts:</strong> In Google Sites font picker, select <em>Plus Jakarta Sans</em> (or <em>DM Sans</em> / <em>Outfit</em>) for Headings and <em>Open Sans</em> or <em>Roboto</em> for Body text.
                </li>
                <li>
                  <strong>Navigation Style:</strong> In Navigation settings, choose <em>Top navigation</em> with background color set to <em>White</em> or <em>Transparent</em>.
                </li>
              </ol>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#103D2E] text-sm">Configuring the Page Hierarchy:</h4>
              <p>In the <strong>Pages</strong> tab of Google Sites, add top-level pages and subpages:</p>
              <div className="p-3 bg-[#F5F7F4] rounded-xl font-mono text-xs space-y-1 text-slate-700">
                <p>• Home (Title-only or Large Banner header)</p>
                <p>• About Us</p>
                <p>• Our Chairs</p>
                <p>• Process ("Our Production Process")</p>
                <p>• Sustainability</p>
                <p>• Projects (Parent page with 8 subpages):</p>
                <p className="pl-6 text-slate-500">- 01. Sustainability Audit of a Startup</p>
                <p className="pl-6 text-slate-500">- 02. Our Business Model</p>
                <p className="pl-6 text-slate-500">- 03. Our Supply Chain & Operations</p>
                <p className="pl-6 text-slate-500">- 04. Our Growth & Financial Outlook</p>
                <p className="pl-6 text-slate-500">- 05. Risk Assessment & Management</p>
                <p className="pl-6 text-slate-500">- 06. ESG Integration & Impact Measurement</p>
                <p className="pl-6 text-slate-500">- 07. Our Team & Culture</p>
                <p className="pl-6 text-slate-500">- 08. Final Project</p>
                <p>• Contact</p>
              </div>
            </div>
          )}

          {activeTab === 'blocks' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#103D2E] text-sm">Building Layouts Using Native Content Blocks:</h4>
              <ul className="space-y-2.5">
                <li className="p-2.5 bg-[#F5F7F4] rounded-lg">
                  <strong className="text-[#103D2E] block">Hero Section:</strong>
                  Use Google Sites <strong>2-column Content Block</strong> (Image on right, Text box on left). Insert two <strong>Buttons</strong> ("Explore Our Chairs" linking to the Chairs page, and "Discover Our Story" linking to About Us).
                </li>
                <li className="p-2.5 bg-[#F5F7F4] rounded-lg">
                  <strong className="text-[#103D2E] block">Our Chairs:</strong>
                  Use the <strong>4-item Content Block</strong>. Insert clean product images, model titles, short descriptions, and link a button underneath labeled "Enquire" to the Contact page.
                </li>
                <li className="p-2.5 bg-[#F5F7F4] rounded-lg">
                  <strong className="text-[#103D2E] block">Production Process:</strong>
                  Use alternating 2-column blocks for the 4 stages (Step 1, 2, 3, 4) with image on one side and bullet list on the other.
                </li>
                <li className="p-2.5 bg-[#F5F7F4] rounded-lg">
                  <strong className="text-[#103D2E] block">Contact Form:</strong>
                  Create a simple Google Form (Name, Email, Enquiry Type, Message) and embed it directly into the Contact page using <strong>Insert &gt; Forms</strong>.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#103D2E] text-sm">Nexlivo Brand Color Specifications:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#103D2E] shrink-0 shadow-xs" />
                  <div>
                    <p className="font-bold text-xs text-[#103D2E]">Dark Forest Green</p>
                    <code className="text-xs text-slate-500">#103D2E</code> (Headings & Footer)
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#21885B] shrink-0 shadow-xs" />
                  <div>
                    <p className="font-bold text-xs text-[#21885B]">Brand Green</p>
                    <code className="text-xs text-slate-500">#21885B</code> (Primary Buttons & Accents)
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#B5F45A] shrink-0 border border-slate-300 shadow-xs" />
                  <div>
                    <p className="font-bold text-xs text-[#103D2E]">Lime Green</p>
                    <code className="text-xs text-slate-500">#B5F45A</code> (Subtle Highlights & Badges)
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F5F7F4] shrink-0 border border-slate-300 shadow-xs" />
                  <div>
                    <p className="font-bold text-xs text-[#103D2E]">Soft White</p>
                    <code className="text-xs text-slate-500">#F5F7F4</code> (Backgrounds & Section Blocks)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#103D2E] text-white rounded-lg text-xs font-semibold hover:bg-[#21885B] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
