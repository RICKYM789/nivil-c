'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCategoryImages, WorkCategory, INSTAGRAM_REELS } from '@/data/workCategories';
import { GalleryImage } from '@/data/gallery';

function CategoryImageCard({
  img,
  idx,
  onClick,
}: {
  img: GalleryImage;
  idx: number;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: idx * 0.03 }}
      onClick={onClick}
      className="group relative bg-[#080808] border border-[#151515] overflow-hidden cursor-pointer break-inside-avoid min-h-[250px]"
      data-cursor="project"
      data-cursor-text="INSPECT"
    >
      <div className="relative w-full aspect-auto overflow-hidden bg-[#101010]">
        {!loaded && (
          <div className="absolute inset-0 bg-[#121212] animate-pulse flex items-center justify-center min-h-[280px]">
            <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
              LOADING FRAME...
            </span>
          </div>
        )}
        <img
          src={img.src}
          alt={img.title}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover contrast-105 transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#FFFFFF] bg-[#000000]/80 px-3 py-1 border border-[#333333]">
          {img.category}
        </div>
      </div>
    </motion.div>
  );
}

export default function CategoryWork({ category }: { category: WorkCategory | undefined }) {
  const router = useRouter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = category ? getCategoryImages(category) : [];
  const reels = category?.slug === 'insta-reels' ? INSTAGRAM_REELS : [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || images.length === 0) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight')
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
      else if (e.key === 'ArrowLeft')
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : 0
        );
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  if (!category) {
    return (
      <div className="pt-24 text-center">
        <p className="font-mono text-xs text-[#777777] tracking-widest uppercase">
          COLLECTION NOT FOUND
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-[#222222] px-8 py-4 font-mono text-xs tracking-[0.3em] uppercase"
        >
          BACK HOME
        </Link>
      </div>
    );
  }

  const activeImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      {/* Header */}
      <div className="mb-10 border-b border-[#151515] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                router.back();
              } else {
                router.push('/#work');
              }
            }}
            className="font-mono text-xs text-[#777777] tracking-widest uppercase hover:text-[#FFFFFF] transition-colors flex items-center space-x-1"
          >
            <span>&larr; BACK</span>
          </button>
          <div className="font-meta mt-6 flex items-center space-x-3">
            <span className="w-6 h-[1px] bg-[#777777]" />
            <span>SELECTED WORK / {category.number}</span>
          </div>
          <h1 className="font-editorial-hero text-[#F2F2F2]">
            {category.title} <br />
            <span className="text-[#FFFFFF]">COLLECTION.</span>
          </h1>
        </div>
        <div className="max-w-md space-y-4">
          <p className="font-sans text-sm text-[#777777] leading-relaxed">{category.description}</p>
          <div className="font-mono text-xs text-[#777777] tracking-widest uppercase">
            [ {reels.length > 0 ? reels.length : images.length} {reels.length > 0 ? 'REELS' : 'FRAMES'} ]
          </div>
        </div>
      </div>

      {reels.length > 0 ? (
        <div className="space-y-8">
          {/* Infinite horizontal marquee of BIO frames (loops seamlessly, scrolls left) */}
          <div className="w-full overflow-hidden border-y border-[#151515] py-4">
            <div className="flex w-max marquee-left">
              {/* Duplicated once so the -50% translate loops seamlessly */}
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={copy === 1}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <img
                      key={`${copy}-${n}`}
                      src={`/images/projects/bio${n}.PNG`}
                      alt={`Bio frame ${n}`}
                      className="h-[30px] w-[30px] object-cover shrink-0"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <motion.article
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden border border-[#151515] bg-[#080808]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#101010]">
                <video
                  className="h-full w-full object-cover"
                  src={reel.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
              </div>

              <div className="p-5 border-t border-[#151515]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="font-editorial-subhead text-xl text-[#F2F2F2]">{reel.title}</h2>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#777777] uppercase">
                    REEL
                  </span>
                </div>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.2em] text-[#FFFFFF] uppercase underline-offset-4 hover:text-[#B8B8B8] transition-colors break-all"
                >
                  {reel.url}
                </a>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      ) : (
        <motion.div layout className="w-full">
          <AnimatePresence mode="popLayout">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, idx) => (
                <CategoryImageCard
                  key={img.id}
                  img={img}
                  idx={idx}
                  onClick={() => setLightboxIndex(idx)}
                />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#000000]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-[#222222] pb-6 relative z-10">
              <div>
                <span className="font-mono text-xs text-[#FFFFFF] tracking-widest block uppercase">
                  {activeImage.category}
                </span>
                <span className="font-mono text-[10px] text-[#777777]">
                  FRAME {lightboxIndex + 1} OF {images.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-[#151515] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors border border-[#333333]"
                aria-label="Close Lightbox"
                data-cursor="hover"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative my-auto flex-1 flex items-center justify-center py-6 px-4">
              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
                }
                className="absolute left-0 md:left-6 z-20 p-4 bg-[#000000]/80 border border-[#333333] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
                aria-label="Previous Image"
                data-cursor="hover"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.div
                key={activeImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-h-[75vh] max-w-[90vw] md:max-w-[80vw] overflow-hidden border border-[#222222] bg-[#080808] shadow-2xl relative"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto contrast-105"
                />
              </motion.div>

              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
                className="absolute right-0 md:right-6 z-20 p-4 bg-[#000000]/80 border border-[#333333] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
                aria-label="Next Image"
                data-cursor="hover"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="border-t border-[#222222] pt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
              <div>
                <span className="font-mono text-xs text-[#777777] tracking-widest uppercase block mb-1">
                  {activeImage.location} — {activeImage.year}
                </span>
                <h2 className="font-editorial-headline text-2xl md:text-3xl text-[#FFFFFF]">
                  {activeImage.title}
                </h2>
                <p className="font-sans text-xs text-[#B8B8B8] max-w-2xl mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
              <a
                href={activeImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-[#FFFFFF] border-b border-[#FFFFFF] pb-1 hover:text-[#B8B8B8] transition-colors"
              >
                OPEN RAW FILE ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}