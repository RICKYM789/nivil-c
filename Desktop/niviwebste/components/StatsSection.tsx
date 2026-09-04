'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      value: '2020',
      label: 'FOUNDED',
      subtitle: 'ESTABLISHED IN CHENNAI, INDIA'
    },
    {
      value: '6+',
      label: 'YEARS OF VISUAL STORYTELLING',
      subtitle: 'PHOTOGRAPHY, FILM & CONTENT EXPERIENCE'
    },
    {
      value: 'MILLIONS',
      label: 'CONTENT REACH',
      subtitle: 'GENERATED ACROSS BRAND REELS & FILMS'
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] py-20 px-6 md:px-12 border-b border-[#151515]">
      <div className="max-w-[1800px] mx-auto">
        <div className="font-meta mb-12 flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-[#777777]" />
          <span>06 / STUDIO TRACK RECORD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-[#151515] py-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col space-y-4"
            >
              <span className="font-editorial-headline text-[#FFFFFF] tracking-tighter">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-[#F2F2F2] tracking-[0.2em] uppercase font-bold">
                {stat.label}
              </span>
              <span className="font-mono text-[11px] text-[#777777] tracking-widest">
                {stat.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
