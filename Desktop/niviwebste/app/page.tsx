import Hero from '@/components/Hero';
import IntroStatement from '@/components/IntroStatement';
import FeaturedProjectSection from '@/components/FeaturedProjectSection';
import SelectedWork from '@/components/SelectedWork';
import GallerySection from '@/components/GallerySection';
import LumaChroma from '@/components/LumaChroma';
import AboutNiveSection from '@/components/AboutNiveSection';
import ServicesSection from '@/components/ServicesSection';
import CommercialFeature from '@/components/CommercialFeature';
import StatsSection from '@/components/StatsSection';
import Marquee from '@/components/Marquee';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full bg-[#000000]">
      {/* 01. Fullscreen Cinematic Hero */}
      <Hero />

      {/* 02. Massive Brand Statement */}
      <IntroStatement />

      {/* 03. Fullscreen Featured Project Break */}
      <FeaturedProjectSection />

      {/* 04. Selected Work (#work) */}
      <SelectedWork />

      {/* 05. Visual Gallery Archive (#gallery) */}
      <GallerySection />

      {/* 06. Luma + Chroma Interactive Brand Philosophy */}
      <LumaChroma />

      {/* 07. About Nive Founder Story & Ethos (#about) */}
      <AboutNiveSection />

      {/* 08. Studio Services (#services) */}
      <ServicesSection />

      {/* 09. Commercial Content Creation Feature */}
      <CommercialFeature />

      {/* 10. Verified Studio Stats */}
      <StatsSection />

      {/* 11. Infinite Monochrome Marquee Ticker */}
      <Marquee />

      {/* 12. Interactive Project Contact Form (#contact) */}
      <ContactSection />
    </div>
  );
}
