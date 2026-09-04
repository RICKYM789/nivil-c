'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuLinks = [
    { label: 'WORK', href: '/#work', number: '01' },
    { label: 'GALLERY', href: '/#gallery', number: '02' },
    { label: 'ABOUT', href: '/#about', number: '03' },
    { label: 'SERVICES', href: '/#services', number: '04' },
    { label: 'CONTACT', href: '/#contact', number: '05' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-[#000000] text-[#F2F2F2] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#222222] pb-6">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center space-x-3 text-xl font-black tracking-tighter text-[#FFFFFF]"
            >
              <div className="w-8 h-8 bg-[#000000] border border-[#333333] p-0.5 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Lumes & Chromes Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-[#FFFFFF]">
                L&amp;C<span className="text-xs align-super ml-0.5 text-[#777777]">®</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-3 text-[#B8B8B8] hover:text-[#FFFFFF] transition-colors focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="my-auto py-12 flex flex-col space-y-6 sm:space-y-8">
            {menuLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                className="group border-b border-[#151515] pb-4"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-baseline justify-between w-full"
                >
                  <span className="font-editorial-subhead text-[#F2F2F2] group-hover:text-[#FFFFFF] group-hover:translate-x-3 transition-all duration-300">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#777777] tracking-widest">
                    {link.number}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-[#222222] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-[#777777] gap-4">
            <div>
              <p className="text-[#B8B8B8]">LUMES &amp; CHROMES STUDIO</p>
              <p>CHENNAI / INDIA — EST. 2020</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linktr.ee/visual.storyteller"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] transition-colors"
              >
                LINKTREE ↗
              </a>
              <a
                href="https://www.instagram.com/lumesandchromes?igsi=azRrZHh4a3VreXF4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] transition-colors"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
