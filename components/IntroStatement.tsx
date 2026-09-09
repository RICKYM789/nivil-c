'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntroStatement() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000000] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515]">
      <Image
        src='/images/projects/Kovil Kulam abi-60.jpg.jpeg'
        alt=""
        fill
        sizes="100vw"
        unoptimized
        className="object-cover opacity-75"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 max-w-[1800px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-meta mb-12 flex items-center space-x-3"
        >
          <span className="w-8 h-[1px] bg-[#777777]" />
          <span>01 / LUMES &amp; CHROMES</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-6xl"
        >
          <h2 className="font-editorial-headline text-[#F2F2F2] leading-none mb-12">
            WE DON&apos;T JUST <br />
            <span className="text-[#FFFFFF]">CAPTURE MOMENTS.</span> <br />
            WE CREATE WHAT <br />
            <span className="text-[#777777]">PEOPLE REMEMBER.</span>
          </h2>
        </motion.div>

        {/* Paragraph & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-[#151515]"
        >
          <div className="md:col-span-3 font-mono text-xs text-[#777777] uppercase tracking-widest">
            STATEMENT / PHILOSOPHY
          </div>
          <div className="md:col-span-8 font-sans text-xl md:text-2xl text-[#B8B8B8] font-light leading-relaxed">
            Lumes &amp; Chromes is a Chennai-based visual studio creating photography, films and content designed to turn ideas into images people notice, remember and share.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
