'use client';

import { useEffect, useState } from 'react';
import { SERVICES, ServiceItem } from '@/data/services';

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [mobileWordIndex, setMobileWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMobileWordIndex((index) => index + 1);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative w-full bg-[#000000] py-14 md:py-20 px-6 md:px-12 border-b border-[#151515] scroll-mt-24"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
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

        {/* Two-Column Service Grid (5 + 5) */}
        <div className="w-full border-t border-[#151515] grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[#151515]">
          {SERVICES.map((service) => {
            const isHovered = hoveredService?.number === service.number;
            const isAnyHovered = hoveredService !== null;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group border-b border-[#151515] px-0 md:px-10 py-5 md:py-6 transition-all duration-500 cursor-pointer ${
                  isAnyHovered && !isHovered ? 'opacity-25' : 'opacity-100'
                }`}
                data-cursor="hover"
              >
                <div className="flex items-center justify-between gap-6">
                  {/* Left: Number & Title */}
                  <div className="flex items-center space-x-4 md:space-x-6 min-w-0">
                    <span className="font-mono text-xs text-[#777777] tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="font-editorial-subhead text-lg md:text-xl text-[#F2F2F2] group-hover:text-[#FFFFFF] group-hover:translate-x-2 transition-all duration-300 truncate">
                      {service.title}
                    </h3>
                  </div>

                </div>

                {/* Description */}
                <p className="hidden xl:block mt-2 font-sans text-xs text-[#777777] group-hover:text-[#B8B8B8] leading-relaxed line-clamp-1">
                  {service.description}
                </p>
                <p className="md:hidden mt-3 min-h-5 font-sans text-sm text-[#B8B8B8] leading-relaxed">
                  {service.description.split(' ')[mobileWordIndex % service.description.split(' ').length]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
