'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES, ServiceItem } from '@/data/services';

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#000000] py-20 md:py-28 px-6 md:px-12 border-b border-[#151515] scroll-mt-24"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <div className="font-meta mb-6 flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#777777]" />
              <span>04 / SERVICES</span>
            </div>
            <h2 className="font-editorial-headline text-[#F2F2F2]">
              WHAT WE DO.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#777777] tracking-widest uppercase">
            [ END-TO-END VISUAL PRODUCTION ]
          </div>
        </div>

        {/* Massive Horizontal Service Rows */}
        <div className="w-full border-t border-[#151515]">
          {SERVICES.map((service) => {
            const isHovered = hoveredService?.number === service.number;
            const isAnyHovered = hoveredService !== null;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group border-b border-[#151515] py-8 md:py-12 transition-all duration-500 cursor-pointer ${
                  isAnyHovered && !isHovered ? 'opacity-25' : 'opacity-100'
                }`}
                data-cursor="hover"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left: Number & Title */}
                  <div className="flex items-center space-x-8 md:w-1/2">
                    <span className="font-mono text-xs text-[#777777] tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="font-editorial-subhead text-[#F2F2F2] group-hover:text-[#FFFFFF] group-hover:translate-x-4 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description & Arrow */}
                  <div className="flex items-center justify-between md:justify-end space-x-12 md:w-1/2">
                    <p className="hidden lg:block font-sans text-sm text-[#777777] group-hover:text-[#B8B8B8] max-w-md transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Description expand */}
                <p className="lg:hidden mt-4 font-sans text-sm text-[#777777]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
