'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LumaChroma() {
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100

  // Calculate contrast/brightness parameters based on slider value
  const lumaOpacity = (100 - sliderVal) / 50;
  const chromaOpacity = sliderVal / 50;
  const combinedBrightness = 70 + (sliderVal - 50) * 0.6; // 40% to 100%
  const blurVal = Math.abs(sliderVal - 50) * 0.08;

  return (
    <section className="relative w-full bg-[#080808] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515] overflow-hidden select-none">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="font-meta mb-12 flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-[#777777]" />
          <span>02 / THE NAME</span>
        </div>

        {/* Narrative Copy */}
        <div className="max-w-4xl mb-16">
          <p className="font-mono text-xs text-[#777777] uppercase tracking-widest mb-4">
            BRAND PHILOSOPHY
          </p>
          <h2 className="font-editorial-subhead text-[#F2F2F2] mb-6">
            PHOTOGRAPHY AND FILMMAKING BEGIN WITH TWO FOUNDATIONAL ELEMENTS.
          </h2>
          <p className="font-sans text-lg text-[#B8B8B8] font-light leading-relaxed">
            <strong className="text-[#FFFFFF]">Luma</strong> represents Light.{' '}
            <strong className="text-[#FFFFFF]">Chroma</strong> represents Color.{' '}
            Together they form <strong className="text-[#FFFFFF]">LUMES &amp; CHROMES</strong>. We manipulate light, contrast, texture, and motion to bring stories to life.
          </p>
        </div>

       
          
        
      </div>
    </section>
  );
}
