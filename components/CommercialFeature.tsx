'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CommercialFeature() {
  return (
    <section className="relative w-full bg-[#080808] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="font-meta mb-6 block">05 / CONTENT CREATION SERVICE</span>
          </div>
          <div className="lg:col-span-4 space-y-6 border-l border-[#222222] pl-8" />
        </div>

        {/* Oversized Statement with High-Res Backdrop */}
        <div className="relative w-full bg-[#000000] border border-[#151515] p-12 md:p-24 text-center overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 contrast-125 group-hover:scale-105 transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/projects/Beach x Sushmi-42.jpg.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-[#000000]" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 bg-[#000000]/80 border border-[#333333] p-1.5 flex items-center justify-center mb-2">
              <img
                src="/images/logo.png"
                alt="Lumes & Chromes Logo Mark"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-mono text-xs text-[#777777] tracking-[0.3em] uppercase block">
              COMMERCIAL CORE SLOGAN
            </span>
            <h3 className="font-editorial-hero text-[#FFFFFF]">
              SMALL REELS. <br />
              <span className="text-[#777777]">BIG IMPACT.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
