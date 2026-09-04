'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="relative w-full bg-[#000000] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515]">
      <div className="max-w-[1800px] mx-auto">
        <div className="font-meta mb-12 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-[#000000] border border-[#333333] p-0.5 flex items-center justify-center">
              <img src="/images/logo.png" alt="L&C Logo" className="w-full h-full object-contain" />
            </div>
            <span className="w-6 h-[1px] bg-[#777777]" />
              <span>LET&apos;S WORK TOGETHER</span>
          </div>
          <span className="font-mono text-xs text-[#777777] hidden sm:block">LUMES &amp; CHROMES®</span>
        </div>

        {/* Oversized Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-editorial-headline text-[#F2F2F2] max-w-7xl">
            HAVE A STORY <br />
            <span className="text-[#FFFFFF]">WORTH TELLING?</span> <br />
              LET&apos;S MAKE IT <br />
            <span className="text-[#777777]">IMPOSSIBLE TO IGNORE.</span>
          </h2>
        </motion.div>

        {/* Action Button & Contact Meta */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pt-8 border-t border-[#151515]">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center space-x-6 px-10 py-5 bg-[#FFFFFF] text-[#000000] font-mono text-sm tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-[#B8B8B8]"
            data-cursor="link"
          >
            <span>START A PROJECT</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </Link>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 font-mono text-xs text-[#777777] tracking-widest uppercase">
            <div>
              <p className="text-[#B8B8B8] mb-1">DIRECT INQUIRIES</p>
              <a
                href="mailto:lumi.chomi@gmail.com"
                className="hover:text-[#FFFFFF] transition-colors lowercase"
              >
                lumi.chomi@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[#B8B8B8] mb-1">PHONE / WHATSAPP</p>
              <a
                href="tel:+919176776588"
                className="hover:text-[#FFFFFF] transition-colors"
              >
                +91 91767 76588
              </a>
            </div>
            <div>
              <p className="text-[#B8B8B8] mb-1">PORTFOLIO ARCHIVE</p>
              <a
                href="https://linktr.ee/visual.storyteller"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] transition-colors"
              >
                LINKTREE ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
