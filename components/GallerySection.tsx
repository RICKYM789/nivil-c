'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/gallery';

export default function GallerySection() {
  // Curated images for top row (moving left) and bottom row (moving right)
  const topRowImages = GALLERY_IMAGES.slice(0, 12);
  const bottomRowImages = GALLERY_IMAGES.slice(12, 24);

  return (
    <section id="gallery" className="w-full bg-[#000000] py-20 px-6 md:px-12 border-b border-[#151515] scroll-mt-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-b border-[#151515] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-meta mb-6 flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#000000] border border-[#333333] p-0.5 flex items-center justify-center">
                <img src="/images/logo.png" alt="L&C Logo" className="w-full h-full object-contain" />
              </div>
              <span className="w-6 h-[1px] bg-[#777777]" />
              <span>PHOTOGRAPHY ARCHIVE / {GALLERY_IMAGES.length} WORKS</span>
            </div>
            <h2 className="font-editorial-hero text-[#F2F2F2]">
              VISUAL <br />
              <span className="text-[#FFFFFF]">GALLERY.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm text-[#777777] leading-relaxed">
              Curated explorations in high-contrast light, shadow geometry, coastal horizons, and editorial portraiture created by Nive at Lumes &amp; Chromes.
            </p>
          </div>
        </div>

        <div className="space-y-4 overflow-hidden py-4">
          <div className="relative w-full overflow-hidden flex select-none">
            <div className="flex space-x-4 animate-[marqueeLeft_35s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
              {topRowImages.concat(topRowImages).map((img, idx) => (
                <div
                  key={`top-${img.id}-${idx}`}
                  className="w-48 sm:w-56 md:w-64 aspect-[4/5] bg-[#080808] border border-[#151515] overflow-hidden shrink-0 group relative cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden flex select-none">
            <div className="flex space-x-4 animate-[marqueeRight_35s_linear_infinite] hover:[animation-play-state:paused] shrink-0">
              {bottomRowImages.concat(bottomRowImages).map((img, idx) => (
                <div
                  key={`bottom-${img.id}-${idx}`}
                  className="w-48 sm:w-56 md:w-64 aspect-[4/5] bg-[#080808] border border-[#151515] overflow-hidden shrink-0 group relative cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Option at Bottom */}
        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-4 bg-[#080808] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#000000] border border-[#333333] hover:border-[#FFFFFF] px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase transition-all duration-300 shadow-xl group"
            data-cursor="hover"
          >
            <span>VIEW MORE WORKS [ {GALLERY_IMAGES.length} FRAMES ]</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
