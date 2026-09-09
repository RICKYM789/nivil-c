'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '@/data/gallery';
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { label: 'ALL', count: GALLERY_IMAGES.length },
  { label: 'Portrait', count: 34 },
  { label: 'Wedding', count: 21 },
  { label: 'Events', count: 19 },
  { label: 'Corporate Events', count: 36 },
  { label: 'Food', count: 22 },
  { label: 'Fake Sangeet', count: 8 },
  { label: 'Beach x Sushmi', count: 5 },
  { label: 'EDC Editorial', count: 10 },
  { label: 'Kovil Kulam', count: 3 },
  { label: 'Maria Editorial', count: 3 },
] as const;

export default function FullGalleryComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isGrayscale, setIsGrayscale] = useState<boolean>(false);
  const [viewLayout, setViewLayout] = useState<'masonry' | 'grid'>('masonry');

  const filteredImages = selectedCategory === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="w-full bg-[#000000] min-h-screen py-20 px-6 md:px-12 border-b border-[#151515]">
      <div className="max-w-[1800px] mx-auto">
        {/* Navigation Back Link */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 text-[#777777] hover:text-[#FFFFFF] font-mono text-xs tracking-widest uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

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
            <h1 className="font-editorial-hero text-[#F2F2F2]">
              COMPLETE <br />
              <span className="text-[#FFFFFF]">GALLERY.</span>
            </h1>
          </div>

          <div className="max-w-md font-sans text-sm text-[#777777] leading-relaxed">
            Full archive of explorations in high-contrast light, shadow geometry, coastal horizons, and editorial portraiture created by Nive at Lumes &amp; Chromes.
          </div>
        </div>

        {/* Filter Controls & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-[#151515] pb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.label);
                    setLightboxIndex(null);
                  }}
                  className={`font-mono text-xs tracking-[0.2em] uppercase px-5 py-3 border transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#000000] border-[#FFFFFF] font-bold shadow-lg'
                      : 'bg-[#080808] text-[#777777] border-[#151515] hover:text-[#FFFFFF] hover:border-[#333333]'
                  }`}
                  data-cursor="hover"
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 border ${
                    isActive ? 'border-[#000000] text-[#000000]' : 'border-[#222222] text-[#555555]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controls: Color/Monochrome toggle & Layout mode */}
          <div className="flex items-center space-x-6">
            {/* Color Mode Toggle */}
            <button
              onClick={() => setIsGrayscale(!isGrayscale)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2.5 border transition-colors flex items-center space-x-2 ${
                isGrayscale
                  ? 'bg-[#151515] text-[#FFFFFF] border-[#FFFFFF]'
                  : 'bg-[#080808] text-[#777777] border-[#151515] hover:text-[#FFFFFF]'
              }`}
              data-cursor="hover"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isGrayscale ? 'MONOCHROME: ON' : 'FULL COLOR'}</span>
            </button>

            {/* Layout Switcher */}
            <div className="flex border border-[#222222] bg-[#080808] p-1">
              <button
                onClick={() => setViewLayout('masonry')}
                className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  viewLayout === 'masonry' ? 'bg-[#FFFFFF] text-[#000000] font-bold' : 'text-[#777777] hover:text-[#FFFFFF]'
                }`}
                data-cursor="hover"
              >
                MASONRY
              </button>
              <button
                onClick={() => setViewLayout('grid')}
                className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  viewLayout === 'grid' ? 'bg-[#FFFFFF] text-[#000000] font-bold' : 'text-[#777777] hover:text-[#FFFFFF]'
                }`}
                data-cursor="hover"
              >
                GRID
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Image Grid */}
        <motion.div layout className="w-full">
          <AnimatePresence mode="popLayout">
            <div
              className={
                viewLayout === 'masonry'
                  ? 'columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4'
                  : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
              }
            >
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (idx % 12) * 0.03 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative bg-[#080808] border border-[#151515] overflow-hidden cursor-pointer break-inside-avoid"
                  data-cursor="project"
                  data-cursor-text="INSPECT"
                >
                  <div className="relative w-full aspect-auto overflow-hidden bg-[#101010]">
                    <img
                      src={img.src}
                      alt={img.title}
                      className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                        isGrayscale ? 'grayscale contrast-125' : 'contrast-105'
                      }`}
                      loading="lazy"
                      draggable={false}
                      onContextMenu={(event) => event.preventDefault()}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Right Zoom Icon */}
                    <div className="absolute top-4 right-4 text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000000]/80 p-2 border border-[#333333]">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#000000]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-[#FFFFFF] hover:text-[#777777] transition-colors p-3 border border-[#333333] bg-[#080808]"
              data-cursor="hover"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row items-center bg-[#080808] border border-[#222222] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image View */}
              <div
                className="relative flex-1 w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-[#000000] p-4 select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className={`max-w-full max-h-full object-contain pointer-events-none select-none ${
                    isGrayscale ? 'grayscale contrast-125' : 'contrast-105'
                  }`}
                  style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
                />
                {/* Transparent shield to block right-click / long-press save */}
                <div className="absolute inset-0 z-[1]" aria-hidden="true" />

                {/* Left/Right Prev Next Buttons */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#000000]/80 hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] p-3 border border-[#333333] transition-colors"
                  data-cursor="hover"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % filteredImages.length : 0
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#000000]/80 hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] p-3 border border-[#333333] transition-colors"
                  data-cursor="hover"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-80 p-8 border-t md:border-t-0 md:border-l border-[#222222] flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#777777] uppercase tracking-widest block mb-2">
                    {activeImage.category}
                  </span>
                  <h3 className="font-editorial-subhead text-2xl text-[#FFFFFF] mb-4">
                    {activeImage.title}
                  </h3>
                  <p className="font-sans text-xs text-[#B8B8B8] max-w-2xl mt-2 leading-relaxed">
                    {activeImage.description}
                  </p>
                </div>

                <div className="border-t border-[#151515] pt-6 flex justify-between font-mono text-xs text-[#777777]">
                  <span>LOCATION: {activeImage.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
