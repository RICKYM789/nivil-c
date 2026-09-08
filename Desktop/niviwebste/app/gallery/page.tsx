import type { Metadata } from 'next';
import FullGalleryComponent from '@/components/FullGalleryComponent';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse the Lumes & Chromes visual archive: portraits, fashion, events, films and commercial photography from Chennai.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Gallery | Lumes & Chromes',
    description:
      'Browse the Lumes & Chromes visual archive: portraits, fashion, events, films and commercial photography from Chennai.',
    url: '/gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return <FullGalleryComponent />;
}
