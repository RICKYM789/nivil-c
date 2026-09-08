export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'PHOTOGRAPHY',
    description: 'Editorial, fashion, portraiture, event, and architectural photography focused on light sculpture and raw detail.',
    tags: ['EDITORIAL', 'PORTRAITURE', 'COMMERCIAL', 'ARCHITECTURAL']
  },
  {
    number: '02',
    title: 'VIDEOGRAPHY',
    description: 'Cinematic storytelling, commercials, promos, and documentary films shot with high-end digital film cameras.',
    tags: ['CINEMATIC', 'PROMOTION', '4K CAMERA', 'COLOR GRADE']
  },
  {
    number: '03',
    title: 'SHORT FORM CONTENT',
    description: 'High-impact vertical reels & TikToks designed for virality, high retention, and brand authority.',
    tags: ['REELS', 'TIKTOK', 'RETENTION EDITING', 'TREND ANALYSIS']
  },
  {
    number: '04',
    title: 'LONG FORM CONTENT',
    description: 'Documentaries, YouTube video series, in-depth podcasts, and cinematic narrative journeys.',
    tags: ['YOUTUBE', 'DOCUMENTARY', 'PODCAST', 'EPISODIC']
  },
  {
    number: '05',
    title: 'EVENTS',
    description: 'Live event coverage, concerts, pool parties, product launches, and fashion week recaps.',
    tags: ['NIGHTLIFE', 'CONCERTS', 'LAUNCHES', 'AFTERMOVIE']
  },
  {
    number: '06',
    title: 'CORPORATE SHOOTS',
    description: 'Polished multi-camera interviews, executive profiles, testimonial series, and brand commercials.',
    tags: ['INTERVIEWS', 'EXECUTIVE PROFILES', 'MULTI-CAM', 'TESTIMONIALS']
  },
  {
    number: '07',
    title: 'PERSONAL BRANDING',
    description: 'End-to-end media strategy, talking-head videos, and aesthetic imagery for founders and creators.',
    tags: ['FOUNDERS', 'CREATORS', 'CONTENT STRATEGY', 'TALKING HEAD']
  },
  {
    number: '08',
    title: 'PORTFOLIO',
    description: 'Curated visual model/actor test shoots, artist portfolios, and agency submissions.',
    tags: ['MODEL TESTS', 'ACTOR LOOKBOOKS', 'CREATIVE DIRECTION']
  },
  {
    number: '09',
    title: 'FASHION',
    description: 'High-fashion lookbooks, campaign films, runway coverage, and lifestyle brand storytelling.',
    tags: ['LOOKBOOK', 'CAMPAIGNS', 'RUNWAY', 'STYLING']
  },
  {
    number: '10',
    title: 'ART',
    description: 'Experimental visual art, monochrome light studies, gallery installations, and conceptual video pieces.',
    tags: ['EXPERIMENTAL', 'MONOCHROME', 'INSTALLATIONS', 'CONCEPTUAL']
  }
];
