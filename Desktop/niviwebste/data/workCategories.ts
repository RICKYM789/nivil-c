import { GALLERY_IMAGES } from '@/data/gallery';

export interface WorkCategory {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  cover: string;
  gallerySlugs: string[];
}

export interface ReelAsset {
  id: string;
  src: string;
  url: string;
}

export const INSTAGRAM_REELS: ReelAsset[] = [
  {
    id: 'coachreel',
    src: '/videos/projects/coachreel.MP4',
    url: 'https://www.instagram.com/reel/DcAe2aLNjl-/?igsi=MTl1eDM5b2M3MzgzbQ==',
  },
  {
    id: 'shammenareel',
    src: '/videos/projects/shammenareel.MP4',
    url: 'https://www.instagram.com/reel/DLUhu0fzp1h/?igsi=MXJnb2g1MnBvN3FrcQ==',
  },
  {
    id: 'kaviyareel',
    src: '/videos/projects/kaviyareel.MP4',
    url: 'https://www.instagram.com/reel/Cz1AOS0Jsoz/?igsi=MTdydzNnYXlhbXNybg==',
  },
  {
    id: 'shameenareel',
    src: '/videos/projects/shameenareel.MP4',
    url: 'https://www.instagram.com/reel/DP8rG_qEyMg/?igsi=MXZycWhrbDNza2o2cg==',
  },
  {
    id: 'srishtireel',
    src: '/videos/projects/srishtireel.MP4',
    url: 'https://www.instagram.com/reel/DaIPGsXqqZk/?igsi=d3VjZnRnaTk1ZG9h',
  },
  {
    id: 'coach2',
    src: '/videos/projects/coach2.MP4',
    url: 'https://www.instagram.com/reel/DZM_9VASMqJ/?igsi=N3N2bDE3dnRlMTB4',
  },
  {
    id: 'coach3',
    src: '/videos/projects/coach3.MP4',
    url: 'https://www.instagram.com/reel/DZHyTmgNk_V/?igsi=MWxmcXJ2dXM5bmNleg==',
  },
  {
    id: 'reels',
    src: '/videos/projects/reels.MP4',
    url: 'https://www.instagram.com/reel/DSrHlvxE4nl/?igsi=MWgzZWFnZ3lsZjlyYw==',
  },
];

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    slug: 'portrait',
    number: '01',
    title: 'PORTRAIT',
    eyebrow: 'Portraits/Fashion',
    description: 'High-contrast editorial portraiture, directional light and sculpted shadow work.',
    cover: '/images/projects/portiait9.jpeg',
    gallerySlugs: ['portrait'],
  },
  {
    slug: 'events',
    number: '02',
    title: 'EVENTS',
    eyebrow: 'Curated Events/Clubs',
    description: 'High-energy event recaps with dynamic motion, rhythm editing and immersive audio sync.',
    cover: '/images/projects/pool party.jpeg',
    gallerySlugs: ['events'],
  },
  {
    slug: 'wedding-professional',
    number: '03',
    title: 'WEDDING & PROFESSIONAL',
    eyebrow: 'Weddings/Special Occasions',
    description: 'Celebratory storytelling and professional brand content with cinematic grading.',
    cover: '/images/projects/wedding11.jpeg',
    gallerySlugs: ['wedding'],
  },
  {
    slug: 'corporate-events',
    number: '04',
    title: 'CORPORATE EVENTS',
    eyebrow: 'Commercial & Interviews',
    description: 'Broadcast-quality commercial, corporate interviews and multi-cam productions.',
    cover: '/images/projects/ce0.jpeg',
    gallerySlugs: ['corporate-events'],
  },
  {
    slug: 'food',
    number: '05',
    title: 'FOOD',
    eyebrow: 'Culinary & Editorial',
    description: 'Rich culinary editorial aesthetics, texture studies and gastronomy visuals.',
    cover: '/images/projects/food1.jpeg',
    gallerySlugs: ['food'],
  },
  {
    slug: 'insta-reels',
    number: '06',
    title: 'PERSONAL BRANDING & TALKING HEADS',
    eyebrow: 'Founder Content / Social',
    description: 'Vertical personal branding videos and talking-head reels designed to build trust, authority and warm audience connection.',
    cover: '/images/projects/talkinghear1.jpeg',
    gallerySlugs: [],
  },
];

export const EXTRA_CATEGORIES: Record<string, WorkCategory> = {
  'pool-party': {
    slug: 'pool-party',
    number: '01',
    title: "CHENNAI'S WILDEST POOL PARTY",
    eyebrow: 'EVENT & PROMO FILM',
    description: 'An electric night captured through fast-cut narrative cinematography, rich low-light color science, and immersive audio sync.',
    cover: '/images/projects/pool party.jpeg',
    gallerySlugs: ['pool-party'],
  },
  'fake-sangeet': {
    slug: 'fake-sangeet',
    number: '02',
    title: 'FAKE SANGEET',
    eyebrow: 'EVENT & CREATIVE FILM',
    description: 'A stylized exploration of celebratory culture created with high-contrast frames and expressive motion.',
    cover: '/images/projects/fake sangeeth.jpeg',
    gallerySlugs: ['fake-sangeet'],
  },
};

export function getCategory(slug: string): WorkCategory | undefined {
  return WORK_CATEGORIES.find((c) => c.slug === slug) || EXTRA_CATEGORIES[slug];
}

export function getCategoryImages(category: WorkCategory) {
  return GALLERY_IMAGES.filter((img) => category.gallerySlugs.includes(img.categorySlug));
}

export interface FreelanceWork {
  id: string;
  title: string;
  categoryLabel: string;
  platform: string;
  year: string;
  url: string;
}

export const FREELANCE_WORKS: FreelanceWork[] = [
  {
    id: 'music-video',
    title: 'Atmospheric Music Film',
    categoryLabel: 'Music / Film',
    platform: 'YouTube',
    year: '2023',
    url: 'https://www.youtube.com/watch?v=mcpl7PQrFLY',
  },
  {
    id: 'short-film',
    title: 'Short Narrative Film',
    categoryLabel: 'Film',
    platform: 'YouTube',
    year: '2022',
    url: 'https://www.youtube.com/watch?v=XVq7wA0bH70',
  },
  {
    id: 'interview-celebrity',
    title: 'Interview with Celebrity',
    categoryLabel: 'Interview',
    platform: 'YouTube',
    year: '2024',
    url: 'https://www.youtube.com/watch?v=aeNNaD0_8SE',
  },
];