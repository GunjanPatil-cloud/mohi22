import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103D2E]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#103D2E] p-2 rounded-full hover:bg-[#F5F7F4] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4 text-[#103D2E]">
          <div className="w-9 h-9 rounded-lg bg-[#21885B]/10 flex items-center justify-center text-[#21885B]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Nexlivo Privacy Notice</h3>
            <p className="text-xs text-slate-500">Last updated: October 2026</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At <strong className="text-[#103D2E]">Nexlivo</strong>, we respect your right to privacy and are committed to protecting any personal information submitted through our contact and product inquiry forms.
          </p>

          <div>
            <h4 className="font-semibold text-[#103D2E] mb-1">1. Information We Collect</h4>
            <p>
              When you submit a product inquiry or message, we collect your name, email address, inquiry context (e.g., household or commercial buyer), and any specific project requirements provided in the message field.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#103D2E] mb-1">2. How We Use Your Information</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate and respond to your seating inquiries and quote requests.</li>
              <li>To provide dimensional details, logistics lead times, and bulk ordering guidance.</li>
              <li>We do not sell, rent, or distribute your personal details to third-party advertisers.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#103D2E] mb-1">3. Data Retention & Security</h4>
            <p>
              Your contact details are stored securely and retained only as long as necessary to address your inquiry and fulfill legitimate commercial communication.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#103D2E] mb-1">4. Your Rights & Inquiries</h4>
            <p>
              You may request access to, correction of, or deletion of your contact data at any time by contacting our team via the placeholder email on our contact page.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#21885B] text-white rounded-lg text-xs font-semibold hover:bg-[#103D2E] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
