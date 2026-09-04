import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FilmGrain from '@/components/FilmGrain';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumes & Chromes | Photography, Film & Content Studio',
  description:
    'Lumes & Chromes is a Chennai-based visual storytelling studio creating photography, films, branded content and social media experiences.',
  keywords: [
    'Lumes & Chromes',
    'L&C',
    'Nive',
    'Chennai photographer',
    'Filmmaker Chennai',
    'Videographer India',
    'Content creation studio',
    'Fashion photography',
    'Commercial reels'
  ],
  authors: [{ name: 'Nive — Lumes & Chromes' }],
  creator: 'Lumes & Chromes',
  publisher: 'Lumes & Chromes Studio',
  openGraph: {
    title: 'Lumes & Chromes | Photography, Film & Content Studio',
    description:
      'Chennai-based visual storytelling studio creating photography, films, branded content and social media experiences.',
    url: 'https://lumesandchromes.com',
    siteName: 'Lumes & Chromes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-poster.svg',
        width: 1200,
        height: 630,
        alt: 'Lumes & Chromes Studio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumes & Chromes | Photography, Film & Content Studio',
    description:
      'Chennai-based visual storytelling studio creating photography, films, branded content and social media experiences.',
    images: ['/images/hero-poster.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#000000] text-[#F2F2F2] antialiased selection:bg-[#FFFFFF] selection:text-[#000000]">
        <SmoothScroll>
          <FilmGrain />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
