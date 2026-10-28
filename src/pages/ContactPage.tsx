import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Clock, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenPrivacy: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenPrivacy }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('Bulk / Wholesale Order');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#21885B] block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103D2E] tracking-tight leading-tight">
            Contact Nexlivo
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Have questions about our folding-chair series, institutional trial units, or supply chain partnerships? Send us an inquiry below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Placeholders Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#B5F45A]/30 text-[#103D2E] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#21885B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#103D2E]">Message Transmitted</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-[#103D2E]">{name}</span>. Your message regarding{' '}
                  <span className="font-medium text-[#21885B]">{enquiryType}</span> has been routed to our team. A representative will respond to{' '}
                  <span className="font-medium text-[#103D2E]">{email}</span> within 1–2 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setOrganization('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 bg-[#21885B] hover:bg-[#103D2E] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#103D2E]">Direct Enquiry Form</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the fields below and our operations desk will follow up promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jordan Lee"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. jordan@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                        Enquiry Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50 text-slate-800"
                      >
                        <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
                        <option value="Product Specifications">Product Specifications</option>
                        <option value="Educational & Institutional Seating">Educational & Institutional Seating</option>
                        <option value="Event Venue Partnership">Event Venue Partnership</option>
                        <option value="Sustainability & Sourcing Audit">Sustainability & Sourcing Audit</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                        Company or Institution (Optional)
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Metro Event Center or Self"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#103D2E] mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please outline your seating requirements, space dimensions, or project questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#21885B] bg-[#F5F7F4]/50 resize-none"
                    />
                  </div>

                  {/* Privacy Notice Banner */}
                  <div className="p-3.5 bg-[#F5F7F4] rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                    <Shield className="w-4 h-4 text-[#21885B] shrink-0 mt-0.5" />
                    <div>
                      <span>
                        By submitting this form, you acknowledge that your contact details will be used solely to respond to your inquiry in accordance with our{' '}
                      </span>
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#21885B] font-semibold underline hover:text-[#103D2E]"
                      >
                        Privacy Notice
                      </button>
                      . We never sell or share contact information.
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-[#21885B] hover:bg-[#103D2E] text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <span>Submit Official Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Placeholders & Operational Details Side */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Business Placeholders Notice */}
            <div className="bg-[#103D2E] text-white rounded-3xl p-8 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5F45A] block">
                  Official Communication Channels
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Contact Information Placeholders
                </h3>
                <p className="text-xs text-[#D6E5DE]/80 mt-1">
                  In accordance with brand guidelines, verifiable operational placeholders are designated below for initial commercial contact:
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#21885B] text-[#B5F45A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D6E5DE]/70 uppercase block font-mono">Business Email Placeholder</span>
                    <span className="text-sm font-mono font-semibold text-white">contact@nexlivo-placeholder.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#21885B] text-[#B5F45A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D6E5DE]/70 uppercase block font-mono">Telephone Placeholder</span>
                    <span className="text-sm font-mono font-semibold text-white">+1 (800) 555-CHAIR [Placeholder]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#21885B] text-[#B5F45A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D6E5DE]/70 uppercase block font-mono">Manufacturing Facility Location</span>
                    <span className="text-sm text-white">Nexlivo Manufacturing & Design Hub [Location Placeholder]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Response Time Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#103D2E] uppercase">
                <Clock className="w-4 h-4 text-[#21885B]" />
                <span>Response Timelines</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commercial batch quote estimates and dimensional requests are typically processed within 24–48 hours by our industrial engineering team.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
