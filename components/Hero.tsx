'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroVideo from './HeroVideo';

export default function Hero() {
  const [introStep, setIntroStep] = useState(0);

  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 800], [0, 120]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenHeroIntro')) {
      setIntroStep(3);
      return;
    }

    const timer1 = setTimeout(() => setIntroStep(1), 200);
    const timer2 = setTimeout(() => setIntroStep(2), 500);
    const timer3 = setTimeout(() => {
      setIntroStep(3);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasSeenHeroIntro', 'true');
      }
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-[#000000] flex flex-col justify-between p-6 md:p-12 select-none">
      {/* Intro Black Screen Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: introStep >= 2 ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-40 bg-[#000000] flex items-center justify-center pointer-events-none"
      >
        {introStep === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#000000] border border-[#333333] p-2 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Lumes & Chromes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#FFFFFF]">
              LUMES &amp; CHROMES<span className="text-xs align-super text-[#777777]">®</span>
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Hero Video with Parallax Scale */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 w-full h-full">
        <HeroVideo />
      </motion.div>

      {/* Spacer for Top Navbar */}
      <div className="h-20 w-full z-10" />

      {/* Central Oversized Typography */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 my-auto max-w-[1800px] w-full mx-auto"
      >
        <div className="flex flex-col space-y-1 md:space-y-2">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: introStep >= 2 ? 0 : '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial-hero text-[#FFFFFF] drop-shadow-2xl"
            >
              STORIES
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: introStep >= 2 ? 0 : '100%' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial-hero text-[#B8B8B8] drop-shadow-2xl pl-4 md:pl-16"
            >
              IN MOTION.
            </motion.h1>
          </div>

          {/* Subline / Statement */}
          <div className="overflow-hidden mt-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introStep >= 2 ? 1 : 0, y: introStep >= 2 ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#777777] max-w-xl pl-1 md:pl-16"
            >
              PHOTOGRAPHY / FILMS / CONTENT CREATION STUDIO
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Metadata & Scroll Indicator */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex items-end justify-between border-t border-[#FFFFFF]/15 pt-6 text-xs font-mono tracking-widest text-[#B8B8B8]">
        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introStep >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 text-[#777777]"
        >
          <span className="text-[#FFFFFF] font-bold">LUMES &amp; CHROMES</span>
          <span>CHENNAI / INDIA</span>
          <span>EST. 2020</span>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introStep >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-[#FFFFFF] group cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
          data-cursor="hover"
        >
          <span className="text-[11px] tracking-[0.3em]">SCROLL</span>
          <span className="text-sm transform group-hover:translate-y-1 transition-transform duration-300">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
