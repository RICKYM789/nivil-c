'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_EMAIL = 'lumi.chomi@gmail.com';
const CONTACT_PHONE = '+91 91767 76588';
const WHATSAPP_URL = 'https://wa.me/919176776588';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    projectType: 'Commercial / Film',
    budget: '₹6,000 - ₹10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const getInquiryDetails = () => {
    const subject = `${formData.projectType} inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Brand / Company: ${formData.brand || 'Not provided'}`,
      `Project type: ${formData.projectType}`,
      `Budget: ${formData.budget}`,
      '',
      'Project details:',
      formData.message
    ].join('\n');

    return { subject, body };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { subject, body } = getInquiryDetails();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const { body } = getInquiryDetails();
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="w-full bg-[#000000] py-20 px-6 md:px-12 border-b border-[#151515] scroll-mt-24">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-[#151515] pb-12">
          <div className="font-meta mb-6 flex items-center space-x-3">
            <div className="w-6 h-6 bg-[#000000] border border-[#333333] p-0.5 flex items-center justify-center">
              <img src="/images/logo.png" alt="L&C Logo" className="w-full h-full object-contain" />
            </div>
            <span className="w-6 h-[1px] bg-[#777777]" />
            <span>START A PROJECT / LUMES &amp; CHROMES®</span>
          </div>
          <h2 className="font-editorial-hero text-[#F2F2F2]">
            LET&apos;S CREATE <br />
            <span className="text-[#FFFFFF]">SOMETHING.</span>
          </h2>
        </div>

        {/* Grid Layout: Contact Form + Direct Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 bg-[#080808] border border-[#222222] space-y-6 text-center"
              >
                <span className="font-mono text-xs text-[#777777] tracking-[0.3em] uppercase block">
                  PROJECT INQUIRY RECEIVED
                </span>
                <h3 className="font-editorial-subhead text-[#FFFFFF]">
                  THANK YOU FOR REACHING OUT.
                </h3>
                <p className="font-sans text-base text-[#B8B8B8] max-w-lg mx-auto leading-relaxed">
                  We have received your project details. Nive and the Lumes &amp; Chromes studio team will review your inquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs tracking-widest text-[#FFFFFF] border-b border-[#FFFFFF] pb-1 uppercase"
                >
                  SEND ANOTHER MESSAGE ↗
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                    01 / YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-xl text-[#FFFFFF] placeholder-[#444444] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                      02 / EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-xl text-[#FFFFFF] placeholder-[#444444] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                      03 / PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-xl text-[#FFFFFF] placeholder-[#444444] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Brand / Company */}
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                    04 / BRAND / COMPANY
                  </label>
                  <input
                    type="text"
                    placeholder="Brand name or business entity"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-xl text-[#FFFFFF] placeholder-[#444444] focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                      05 / PROJECT TYPE
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#000000] border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-lg text-[#FFFFFF] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Commercial / Film">Commercial / Film</option>
                      <option value="Photography Campaign">Photography Campaign</option>
                      <option value="Short Form Content">Short Form Content / Reels</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Personal Branding">Personal Branding</option>
                      <option value="Fashion / Editorial">Fashion / Editorial</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                      06 / ESTIMATED BUDGET RANGE
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#000000] border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-lg text-[#FFFFFF] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="₹Below 10000">Below ₹10000</option>
                      <option value="₹10,000 - ₹1,00,000">₹10,000 - ₹1,00,000</option>
                      <option value="Above ₹1,00,000+"> Above ₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs text-[#777777] tracking-widest uppercase">
                    07 / PROJECT DETAILS / VISION *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project vision, key deliverables, and target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333] focus:border-[#FFFFFF] py-4 text-lg text-[#FFFFFF] placeholder-[#444444] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative inline-flex items-center space-x-6 px-16 py-8 bg-[#FFFFFF] text-[#000000] font-mono text-xs tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-[#B8B8B8]"
                  data-cursor="link"
                >
                  <span>OPEN EMAIL DRAFT</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    ↗
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group relative inline-flex items-center space-x-6 px-16 py-8 border border-[#FFFFFF] text-[#FFFFFF] font-mono text-xs tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-[#FFFFFF] hover:text-[#000000]"
                  data-cursor="link"
                >
                  <span>WHATSAPP</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    ↗
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-8 border-t lg:border-t-0 lg:border-l border-[#151515] pt-12 lg:pt-0 lg:pl-12">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#777777] tracking-widest uppercase block">
                DIRECT INQUIRIES
              </span>
              <p className="font-sans text-sm md:text-base text-[#FFFFFF] tracking-wide">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#B8B8B8] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#777777] tracking-widest uppercase block">
                PHONE / WHATSAPP
              </span>
              <p className="font-sans text-sm md:text-base text-[#FFFFFF] font-medium tracking-wide">
                <a href="tel:+919176776588" className="hover:text-[#B8B8B8] transition-colors">
                  {CONTACT_PHONE}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#777777] tracking-widest uppercase block">
                STUDIO LOCATION
              </span>
              <p className="font-sans text-sm md:text-base text-[#FFFFFF] font-medium tracking-wide">
                CHENNAI, INDIA
              </p>
              <p className="font-mono text-[11px] text-[#777777]">
                OPERATING GLOBALLY &amp; ON LOCATION
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#777777] tracking-widest uppercase block">
                CONNECT &amp; ARCHIVE
              </span>
              <div className="flex flex-col space-y-2 font-mono text-xs text-[#B8B8B8]">
                <a
                  href="https://linktr.ee/visual.storyteller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  LINKTREE ARCHIVE ↗
                </a>
                <a
                  href="https://www.instagram.com/lumesandchromes?igsi=azRrZHh4a3VreXF4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  INSTAGRAM ↗
                </a>
                <a
                  href="https://www.behance.net/lonewolf103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  BEHANCE ↗
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#080808] border border-[#151515] space-y-2">
              <span className="font-mono text-[10px] text-[#777777] tracking-widest uppercase">
                RESPONSE GUARANTEE
              </span>
              <p className="font-sans text-xs text-[#B8B8B8]">
                Every project inquiry is personally evaluated by Nive within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
