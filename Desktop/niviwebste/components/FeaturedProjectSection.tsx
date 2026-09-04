'use client';

import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export default function FeaturedProjectSection() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="w-full bg-[#000000] py-16 md:py-24 space-y-20">
      {featuredProjects.map((project, index) => (
        <div key={project.id} className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8 border-b border-[#151515] pb-4 font-meta">
            <span>FEATURED / {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            <span>{project.categoryLabel}</span>
          </div>

          {/* Horizontal Cover Picture Container */}
          <Link
            href={`/work/${project.id}`}
            className="group relative block w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#080808] border border-[#151515]"
            data-cursor="project"
            data-cursor-text="VIEW"
          >
            {/* Horizontal Cover Image */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-all duration-1000 ease-out"
              style={{ objectPosition: 'center 35%' }}
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Text Overlay Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6 z-10">
              <div className="max-w-3xl">
                <span className="font-mono text-xs text-[#777777] uppercase tracking-widest block mb-2">
                  {project.number} / {project.client} — {project.year}
                </span>
                <h3 className="font-editorial-headline text-2xl md:text-4xl text-[#F2F2F2] group-hover:text-[#FFFFFF] transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-[#B8B8B8] group-hover:text-[#FFFFFF] transition-colors border-b border-transparent group-hover:border-[#FFFFFF] pb-1">
                <span>VIEW COLLECTION</span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
