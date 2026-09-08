'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WORK_CATEGORIES, FREELANCE_WORKS } from '@/data/workCategories';

// Extra card appended to the carousel — opens the freelance links list on click
const FREELANCE_CARD = {
  slug: 'freelance',
  number: '07',
  title: 'OTHER WORKS AS FREELANCE',
  eyebrow: 'External Projects & Links',
  cover: '/images/projects/freelancercovernv.jpeg',
};

const ALL_CARDS = [...WORK_CATEGORIES, FREELANCE_CARD];

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFreelanceList, setShowFreelanceList] = useState(false);
  const totalCards = ALL_CARDS.length;

  // Auto-slide every 3 seconds (3000ms) unconditionally
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const activeCategory = WORK_CATEGORIES[currentIndex];

  return (
    <section
      id="work"
      className="relative w-full bg-[#000000] py-20 px-6 md:px-12 border-b border-[#151515] scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="font-meta mb-6 flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#777777]" />
              <span>03 / SELECTED WORK</span>
            </div>
            <h2 className="font-editorial-headline text-[#F2F2F2]">
              STORIES WE&apos;VE <br />
              <span className="text-[#FFFFFF]">BROUGHT TO LIFE.</span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0 font-mono text-xs text-[#777777] tracking-widest uppercase flex items-center space-x-4">
            <span>[ {WORK_CATEGORIES.length + 1} SIGNATURE COLLECTIONS ]</span>
            <span className="text-[#FFFFFF] font-bold border border-[#333333] px-3 py-1.5 bg-[#080808]">
              0{currentIndex + 1} / 0{totalCards}
            </span>
          </div>
        </div>

        {/* 6 Category Selection Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {ALL_CARDS.map((cat, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={cat.slug}
                onClick={() => setCurrentIndex(idx)}
                className={`font-mono text-xs tracking-wider uppercase px-4 py-2.5 border transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-[#FFFFFF] text-[#000000] border-[#FFFFFF] font-bold shadow-lg'
                    : 'bg-[#080808] text-[#777777] border-[#151515] hover:text-[#FFFFFF] hover:border-[#333333]'
                }`}
                data-cursor="hover"
              >
                <span className="text-[10px] opacity-60">0{idx + 1}.</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3-CARD CENTER-FOCUSED CAROUSEL (AUTO-SLIDES EVERY 3 SECONDS) */}
        <div className="relative w-full border border-[#222222] bg-[#080808] p-6 md:p-10 overflow-hidden shadow-2xl">
          {/* Animated 3s Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#151515] overflow-hidden z-30">
            <div
              key={currentIndex}
              className="h-full bg-[#FFFFFF] w-full animate-[carouselProgress_3s_linear]"
            />
          </div>

          {/* 3-Card Stage: Left (3/4 size), Center (Full size), Right (3/4 size) */}
          <div className="relative flex items-center justify-center min-h-[520px] md:min-h-[560px] py-4">
            {ALL_CARDS.map((category, idx) => {
              // Calculate relative position to active currentIndex
              const diff = (idx - currentIndex + totalCards) % totalCards;
              let isCenter = false;
              let isLeft = false;
              let isRight = false;

              if (diff === 0) {
                isCenter = true;
              } else if (diff === totalCards - 1 || diff === -1) {
                isLeft = true;
              } else if (diff === 1) {
                isRight = true;
              } else {
                return null; // Hide cards outside the 3-card window
              }

              return (
                <motion.div
                  key={category.slug}
                  initial={false}
                  animate={{
                    x: isCenter ? '0%' : isLeft ? '-105%' : '105%',
                    scale: isCenter ? 1 : 0.75, // 3/4 of the size in the middle!
                    opacity: isCenter ? 1 : 0.55,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className={`absolute w-full max-w-[340px] md:max-w-[400px] cursor-pointer origin-center ${
                    isCenter ? 'pointer-events-auto' : 'pointer-events-auto hover:opacity-90'
                  }`}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                >
                  <Link
                    href={`/work/${category.slug}`}
                    className={`group relative block bg-[#0A0A0A] border overflow-hidden transition-colors ${
                      isCenter ? 'border-[#333333] shadow-2xl' : 'border-[#151515] hover:border-[#333333]'
                    }`}
                    onClick={(e) => {
                      if (!isCenter) {
                        e.preventDefault(); // Click side cards to focus center
                      } else if (category.slug === 'freelance') {
                        e.preventDefault(); // Open freelance links list instead of a project page
                        setShowFreelanceList(true);
                      }
                    }}
                    data-cursor="project"
                    data-cursor-text={isCenter ? 'VIEW' : 'FOCUS'}
                  >
                    {/* Cover Image (Original Aspect 4/5) */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#101010]">
                      <img
                        src={category.cover}
                        alt={category.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isCenter
                            ? 'contrast-125 group-hover:scale-105'
                            : 'contrast-100 brightness-75'
                        }`}
                        style={{ objectPosition: 'center 35%' }}
                      />
                      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#FFFFFF] bg-[#000000]/80 px-3 py-1.5 border border-[#333333]">
                        0{idx + 1} / 0{totalCards}
                      </div>
                    </div>

                    {/* Caption Block */}
                    <div className="p-5 md:p-6 border-t border-[#151515] bg-[#080808]">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="font-editorial-subhead text-xl md:text-2xl text-[#F2F2F2] group-hover:text-[#FFFFFF] transition-colors uppercase break-words leading-snug">
                          {category.title}
                        </h3>
                        <span className="font-mono text-base text-[#777777] group-hover:text-[#FFFFFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0">
                          ↗
                        </span>
                      </div>
                      <p className="font-mono text-xs tracking-wider uppercase text-[#888888] font-medium">
                        {category.eyebrow}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Navigation Footer */}
          <div className="pt-6 border-t border-[#151515] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#777777] tracking-widest uppercase">
              AUTO-SLIDES EVERY 3S [ LEFT: 3/4 • CENTER: FULL • RIGHT: 3/4 ]
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#222222] bg-[#080808] hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] flex items-center justify-center transition-colors"
                aria-label="Previous Collection"
                data-cursor="hover"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#222222] bg-[#080808] hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] flex items-center justify-center transition-colors"
                aria-label="Next Collection"
                data-cursor="hover"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Freelance Works Modal — opens when the "OTHER WORKS AS FREELANCE" card is clicked */}
        <AnimatePresence>
          {showFreelanceList && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-[#000000]/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setShowFreelanceList(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#080808] border border-[#222222] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-[#080808] border-b border-[#222222] px-6 md:px-10 py-6 flex items-center justify-between z-10">
                  <div>
                    <div className="font-mono text-xs text-[#777777] tracking-widest uppercase mb-2">
                      03 (B) / OTHER WORKS AS FREELANCE
                    </div>
                    <h3 className="font-editorial-subhead text-2xl md:text-3xl text-[#F2F2F2]">
                      INDEPENDENT <span className="text-[#FFFFFF]">PROJECTS.</span>
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowFreelanceList(false)}
                    className="w-10 h-10 border border-[#222222] bg-[#080808] hover:bg-[#FFFFFF] hover:text-[#000000] text-[#FFFFFF] flex items-center justify-center transition-colors shrink-0"
                    aria-label="Close"
                    data-cursor="hover"
                  >
                    ✕
                  </button>
                </div>

                {/* Links List */}
                <div className="px-6 md:px-10 py-6">
                  <div className="w-full border-t border-[#151515]">
                    {FREELANCE_WORKS.map((work) => (
                      <a
                        key={work.id}
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-5 border-b border-[#151515] transition-colors duration-300 hover:bg-[#0A0A0A]"
                        data-cursor="link"
                      >
                        <div className="flex items-center space-x-4 md:space-x-6 min-w-0">
                          <span className="font-mono text-xs text-[#777777] tracking-widest shrink-0">
                            {work.categoryLabel}
                          </span>
                          <h4 className="font-editorial-subhead text-lg text-[#F2F2F2] group-hover:text-[#FFFFFF] group-hover:translate-x-2 transition-all duration-300 truncate">
                            {work.title}
                          </h4>
                        </div>

                        <div className="flex items-center space-x-4 md:space-x-6 shrink-0">
                          <span className="hidden sm:inline font-mono text-[11px] text-[#777777] tracking-widest uppercase">
                            {work.platform} — {work.year}
                          </span>
                          <span className="w-8 h-8 border border-[#222222] flex items-center justify-center text-[#777777] group-hover:bg-[#FFFFFF] group-hover:text-[#000000] transition-colors duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}