'use client';

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#000000]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        data-cursor="none"
      >
        <source src="/videos/projects/sushmi%20beach%20for%20website%20%281%29.mov" type="video/mp4" />
        <source src="/videos/projects/sushmi%20beach%20for%20website%20%281%29.mov" type="video/quicktime" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/20 to-[#000000]/80 pointer-events-none" />
    </div>
  );
}