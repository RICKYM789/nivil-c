export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'COMMERCIAL' | 'SOCIAL' | 'FILMS' | 'EVENTS' | 'FASHION' | 'PERSONAL';
  categoryLabel: string;
  mediaType: 'image';
  thumbnail: string;
  externalUrl: string;
  year: string;
  featured: boolean;
  platform: 'Instagram' | 'YouTube' | 'Behance' | 'Vimeo';
  client?: string;
  description: string;
  aspectRatio?: string;
  images?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'pool-party',
    number: '01',
    title: "Chennai's Wildest Pool Party",
    subtitle: 'High-energy event recap with dynamic motion & rhythm editing.',
    category: 'EVENTS',
    categoryLabel: 'Event / Promo Film',
    mediaType: 'image',
    thumbnail: '/images/projects/pool party.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DYhMJTFPfmS/',
    year: '2024',
    featured: true,
    platform: 'Instagram',
    client: 'Private Host / Chennai',
    description: 'An electric night captured through fast-cut narrative cinematography, rich low-light color science, and immersive audio sync.',
    images: [
      '/images/projects/pool party.jpeg',
      '/images/projects/pool_party1.jpeg',
      '/images/projects/pool_party2.jpeg',
      '/images/projects/pool_party3.jpeg',
      '/images/projects/pool_party4.jpeg',
      '/images/projects/pool_party5.jpeg',
      '/images/projects/pool_party6.jpeg',
    ],
  },
  {
    id: 'fake-sangeet',
    number: '02',
    title: 'Fake Sangeet',
    subtitle: 'Conceptual visual piece blending tradition, music, and cinematic aesthetic.',
    category: 'FILMS',
    categoryLabel: 'Event / Creative Film',
    mediaType: 'image',
    thumbnail: '/images/projects/fake sangeeth.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DYhMJTFPfmS/',
    year: '2024',
    featured: true,
    platform: 'Instagram',
    client: 'Lumes & Chromes Studio',
    description: 'A stylized exploration of celebratory culture created with high-contrast monochrome frames and expressive slow motion.',
    images: [
      '/images/projects/fake sangeeth.jpeg',
      '/images/projects/fake_sangeeth1.jpeg',
      '/images/projects/fake_sangeeth2.jpeg',
      '/images/projects/fake_sangeeth3.jpeg',
      '/images/projects/fake_sangeeth4.jpeg',
      '/images/projects/fake_sangeeth5.jpeg',
      '/images/projects/fake_sangeeth6.jpeg',
      '/images/projects/fake_sangeeth7.jpeg',
    ],
  },
  {
    id: 'cinematic-reel',
    number: '03',
    title: 'Cinematic Reel',
    subtitle: 'Showcase of texture, movement, light, and narrative intensity.',
    category: 'PERSONAL',
    categoryLabel: 'Cinematic / Social',
    mediaType: 'image',
    thumbnail: '/images/projects/EDC_2070.JPG.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DYhMJTFPfmS/',
    year: '2024',
    featured: true,
    platform: 'Instagram',
    client: 'Lumes & Chromes',
    description: 'A compilation of raw visual moments, exploring shadows, editorial portraits, and hyper-stylized camera choreography.'
  },
  {
    id: 'behance-showcase',
    number: '04',
    title: 'Behance Editorial',
    subtitle: 'Creative visual design & photography series.',
    category: 'FASHION',
    categoryLabel: 'Creative / Portfolio',
    mediaType: 'image',
    thumbnail: '/images/projects/Maria-91.jpg.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DYhMJTFPfmS/',
    year: '2023',
    featured: false,
    platform: 'Instagram',
    client: 'Editorial Series',
    description: 'Minimalist studio portraiture focused on texture, hard light directional shadow work, and tone manipulation.'
  },
  {
    id: 'talking-head',
    number: '05',
    title: 'Talking Head Series',
    subtitle: 'High-converting personal branding content for modern founders.',
    category: 'SOCIAL',
    categoryLabel: 'Personal Branding / Content',
    mediaType: 'image',
    thumbnail: '/images/projects/EDC_1998.JPG.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DSrHlvxE4nl/',
    year: '2024',
    featured: false,
    platform: 'Instagram',
    client: 'Founder Series',
    description: 'Studio-grade short-form video crafted with dynamic caption design, multi-angle cuts, and crystal-clear acoustic sound.'
  },
  {
    id: 'quarantine-2020',
    number: '06',
    title: 'Quarantine 2020',
    subtitle: 'Experimental visual diary birthed during solitude.',
    category: 'FILMS',
    categoryLabel: 'Experimental / Film',
    mediaType: 'image',
    thumbnail: '/images/projects/ED06.jpg.jpeg',
    externalUrl: 'https://www.instagram.com/reels/DSrHlvxE4nl/',
    year: '2020',
    featured: false,
    platform: 'Instagram',
    client: 'L&C Archive',
    description: 'The foundational project that sparked Lumes & Chromes. Raw 16mm-style digital grain, moody sunlight, and introspective soundscapes.'
  },
  {
    id: 'music-video',
    number: '07',
    title: 'Atmospheric Music Film',
    subtitle: 'Atmospheric narrative music film with rich color direction.',
    category: 'FILMS',
    categoryLabel: 'Music / Film',
    mediaType: 'image',
    thumbnail: '/images/projects/EDC_2245.JPG.jpeg',
    externalUrl: 'https://www.youtube.com/watch?v=mcpl7PQrFLY&feature=youtu.be',
    year: '2023',
    featured: true,
    platform: 'YouTube',
    client: 'Independent Artist',
    description: 'Full production film encompassing location scouting, lighting setup, performance directing, and master color grading.'
  },
  {
    id: 'short-film',
    number: '08',
    title: 'Short Narrative Film',
    subtitle: 'A gripping narrative exploring human connection and silences.',
    category: 'FILMS',
    categoryLabel: 'Film',
    mediaType: 'image',
    thumbnail: '/images/projects/Beach x Sushmi-42.jpg.jpeg',
    externalUrl: 'https://youtu.be/XVq7wA0bH70?si=E4upxyhKoVXpvmsy',
    year: '2022',
    featured: false,
    platform: 'YouTube',
    client: 'Festival Cut',
    description: 'Award-entry narrative film produced by Nive, featuring custom sound design and anamorphic lens framing.'
  },
  {
    id: 'vurve-salon',
    number: '09',
    title: 'Vurve Salon Commercial',
    subtitle: 'Branded content creation for a premier luxury salon brand.',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial / Social Content',
    mediaType: 'image',
    thumbnail: '/images/projects/Maria-58.jpg.jpeg',
    externalUrl: 'https://www.instagram.com/vurvesalon',
    year: '2024',
    featured: true,
    platform: 'Instagram',
    client: 'Vurve Salon Luxury',
    description: 'High-end beauty & fashion imagery highlighting hair movement, skin texture, and sophisticated interior ambiance.'
  },
  {
    id: 'multicam-interview',
    number: '10',
    title: 'Multi-Cam Corporate Interview',
    subtitle: 'Seamless multi-angle production for executive dialogue.',
    category: 'COMMERCIAL',
    categoryLabel: 'Corporate / Interview',
    mediaType: 'image',
    thumbnail: '/images/projects/EDC_2525.JPG.jpeg',
    externalUrl: 'https://www.youtube.com/watch?v=aeNNaD0_8SE',
    year: '2024',
    featured: false,
    platform: 'YouTube',
    client: 'Corporate Enterprise',
    description: 'Broadcast-quality 3-camera interview recording with key light diffusion, lavalier + boom audio, and clean chapter editing.'
  }
];

export const MAIN_PORTFOLIO_LINK = 'https://linktr.ee/visual.storyteller';
