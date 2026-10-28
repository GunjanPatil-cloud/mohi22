import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { CHAIRS_DATA } from '../data/chairsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedChairId?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedChairId
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buyerType, setBuyerType] = useState('Commercial / Office');
  const [selectedChair, setSelectedChair] = useState(preselectedChairId || 'all');
  const [quantity, setQuantity] = useState('10 - 50 units');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedChairId) {
      setSelectedChair(preselectedChairId);
    }
  }, [preselectedChairId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103D2E]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#103D2E] p-2 rounded-full hover:bg-[#F5F7F4] transition-colors"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#B5F45A]/30 text-[#103D2E] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#21885B]" />
            </div>
            <h3 className="text-2xl font-bold text-[#103D2E]">Enquiry Received</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-[#103D2E]">{name || 'there'}</span>. Your enquiry for{' '}
              <span className="font-semibold text-[#21885B]">
                {CHAIRS_DATA.find((c) => c.id === selectedChair)?.name || 'Nexlivo Folding Chairs'}
              </span>{' '}
              has been recorded. A Nexlivo representative will review your request and reach out via{' '}
              <span className="font-medium text-[#103D2E]">{email}</span>.
            </p>
            <div className="p-4 bg-[#F5F7F4] rounded-xl text-left text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Enquiry Summary:</p>
              <p>Organization / Context: {buyerType}</p>
              <p>Quantity Estimate: {quantity}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#21885B] hover:bg-[#103D2E] text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#21885B] mb-1">
                Product Inquiry & Custom Quotes
              </div>
              <h3 className="text-2xl font-bold text-[#103D2E]">Connect with Nexlivo</h3>
              <p className="text-slate-600 text-sm mt-1">
                Request dimensional guidelines, bulk evaluation samples, or logistics details for your space.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] focus:border-transparent bg-[#F5F7F4]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@organisation.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] focus:border-transparent bg-[#F5F7F4]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                    Chair Model of Interest
                  </label>
                  <select
                    value={selectedChair}
                    onChange={(e) => setSelectedChair(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50 text-slate-800"
                  >
                    <option value="all">General Product Range</option>
                    {CHAIRS_DATA.map((chair) => (
                      <option key={chair.id} value={chair.id}>
                        {chair.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                    Intended Application
                  </label>
                  <select
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50 text-slate-800"
                  >
                    <option value="Commercial / Office">Commercial Office / Training</option>
                    <option value="Event Venue / Hospitality">Event Venue & Hospitality</option>
                    <option value="School / Educational">School & Educational Institution</option>
                    <option value="Retailer / Bulk Buyer">Retailer / Wholesale Buyer</option>
                    <option value="Household / Personal">Residential / Household</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                  Estimated Quantity Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1 - 10 units', '10 - 50 units', '50 - 200 units', '200+ units'].map((qty) => (
                    <button
                      type="button"
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        quantity === qty
                          ? 'border-[#21885B] bg-[#21885B]/10 text-[#103D2E] font-semibold ring-1 ring-[#21885B]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                  Message or Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your venue layout, delivery timeline, or questions..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50 resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#21885B] shrink-0 mt-0.5" />
                <span>
                  Nexlivo protects your privacy. Contact information is used strictly to answer your inquiry without marketing spam.
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#21885B] hover:bg-[#103D2E] text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Submit Product Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
