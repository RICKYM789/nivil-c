'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '/#work', id: 'work' },
    { label: 'GALLERY', href: '/#gallery', id: 'gallery' },
    { label: 'ABOUT', href: '/#about', id: 'about' },
    { label: 'SERVICES', href: '/#services', id: 'services' },
    { label: 'CONTACT', href: '/#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3 bg-[#000000]/85 backdrop-blur-md border-b border-[#151515]'
            : 'py-5 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand with Logo Image */}
          <Link
            href="/"
            className="group flex items-center space-x-3 focus:outline-none"
            data-cursor="hover"
          >
            <div className="relative w-8 h-8 md:w-9 md:h-9 bg-[#000000] border border-[#333333] overflow-hidden group-hover:border-[#FFFFFF] transition-colors p-0.5 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Lumes & Chromes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter text-[#FFFFFF] group-hover:text-[#B8B8B8] transition-colors leading-none">
                L&amp;C<span className="text-[10px] font-mono align-super text-[#777777] ml-0.5">®</span>
              </span>
              <span className="text-[9px] font-mono text-[#777777] tracking-widest uppercase group-hover:text-[#FFFFFF] transition-colors hidden sm:block">
                LUMES &amp; CHROMES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs tracking-[0.25em] uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold'
                      : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FFFFFF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#F2F2F2] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
            data-cursor="hover"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
