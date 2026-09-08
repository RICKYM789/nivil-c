'use client';

export default function Marquee() {
  const items = [
    'PHOTOGRAPHY',
    'FILM',
    'CONTENT',
    'STORIES',
    'LIGHT',
    'COLOR',
    'MOTION',
    'CHROMA',
    'LUMA'
  ];

  return (
    <div className="w-full bg-[#000000] border-t border-b border-[#151515] py-8 overflow-hidden select-none">
      <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span className="font-editorial-subhead text-[#F2F2F2] tracking-tighter hover:text-[#FFFFFF] transition-colors">
              {text}
            </span>
            <span className="text-[#777777] font-mono text-sm">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
