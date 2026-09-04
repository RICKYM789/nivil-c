'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000000] text-[#777777] py-16 px-6 md:px-12 border-t border-[#151515] select-none">
      <div className="max-w-[1800px] mx-auto space-y-12">
        {/* Top 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#151515]">
          {/* Left Column */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#000000] border border-[#333333] p-1 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Lumes & Chromes Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[#FFFFFF] font-black text-xl tracking-tighter">
                LUMES &amp; CHROMES<span className="text-xs font-mono align-super ml-0.5 text-[#777777]">®</span>
              </span>
            </div>
            <p className="font-mono text-xs tracking-widest text-[#777777]">
              PHOTOGRAPHY &amp; VISUAL STORYTELLING STUDIO
            </p>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col space-y-1 font-mono text-xs tracking-widest text-[#B8B8B8] uppercase">
            <span>PHOTOGRAPHY</span>
            <span>FILM</span>
            <span>CONTENT CREATION</span>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-1 font-mono text-xs tracking-widest text-[#777777] uppercase md:text-right">
            <span className="text-[#B8B8B8]">CHENNAI, INDIA</span>
            <span>FOUNDED 2020</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] tracking-widest text-[#777777] gap-4">
          <div>
            © {currentYear} LUMES &amp; CHROMES. ALL RIGHTS RESERVED.
          </div>
          <div>
            LIGHT / COLOR / STORIES
          </div>
        </div>
      </div>
    </footer>
  );
}
