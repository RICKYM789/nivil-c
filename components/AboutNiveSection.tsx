'use client';

import { motion } from 'framer-motion';

export default function AboutNiveSection() {
  return (
    <section id="about" className="relative w-full bg-[#000000] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515] overflow-hidden scroll-mt-24">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 border-b border-[#151515] pb-6 font-meta">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#777777]" />
            <span>ABOUT / FOUNDER &amp; CREATIVE DIRECTOR</span>
          </div>
          <div className="mt-2 sm:mt-0">
            <span>FOUNDER — PHOTOGRAPHER — FILMMAKER</span>
          </div>
        </div>

        {/* Oversized Background Header */}
        <div className="relative mb-12">
          <h2 className="font-editorial-hero text-[#151515] select-none pointer-events-none">
            SEEING THINGS <br /> DIFFERENTLY.
          </h2>

          {/* Editorial Overlapping Portrait & Copy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center -mt-16 md:-mt-24 relative z-10">
            {/* Portrait Container */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative w-full aspect-[3/4] bg-[#080808] border border-[#222222] overflow-hidden">
                <img
                  src="/images/projects/nive_founder_final.png"
                  alt="Nive — Founder of Lumes & Chromes"
                  className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 z-10 w-12 h-12 bg-[#000000]/80 backdrop-blur-md border border-[#333333] p-1.5 flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="L&C Studio Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end font-mono text-xs text-[#FFFFFF]">
                  <div>
                    <p className="font-bold">NIVE</p>
                    <p className="text-[#777777] text-[10px]">FOUNDER &amp; VISUAL STORYTELLER</p>
                  </div>
                  <span className="text-[#777777] text-[10px]">CHENNAI, IN</span>
                </div>
              </div>
            </motion.div>

            {/* Editorial Biography Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center space-y-8"
            >
              <h3 className="font-editorial-subhead text-[#FFFFFF]">
                &quot;A MOMENT THAT LASTS LESS THAN A SECOND IS OFTEN WHERE THE STORY LIVES.&quot;
              </h3>

              <div className="space-y-6 font-sans text-lg text-[#B8B8B8] font-light leading-relaxed">
                <p>
                  Hi, I&apos;m Nive, founder of Lumes &amp; Chromes. For more than six years I&apos;ve worked across photography, filmmaking and content creation, always drawn to details people usually pass by.
                </p>
                <p>
                  A certain light. An unexpected expression. Movement. Texture. Those details define how a story resonates.
                </p>
                <p>
                  Today, L&amp;C turns that perspective into photography, films and content designed to help brands communicate ideas people actually remember. From concept and scripting to shooting, editing and delivery, we handle the entire creative process.
                </p>
              </div>

              {/* Massive Philosophy Statement Callout */}
              <div className="pt-8 border-t border-[#151515]">
                <span className="font-mono text-xs text-[#777777] uppercase tracking-widest block mb-2">
                  KEY PHILOSOPHY
                </span>
                <span className="font-editorial-headline text-[#FFFFFF] block">
                  SMALL REELS. <br />
                  <span className="text-[#777777]">BIG IMPACT.</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
