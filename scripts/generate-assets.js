const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images',
  'public/images/projects',
  'public/videos',
  'public/videos/projects'
];

dirs.forEach(d => {
  const full = path.join(process.cwd(), d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

// Helper to generate fallback poster data for missing media.
function generateSVGPoster(title, subtitle, category) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#1c1c1c"/>
      <stop offset="100%" stop-color="#050505"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262626" stroke-width="1" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  
  <circle cx="600" cy="400" r="300" stroke="#333333" stroke-width="1" fill="none" opacity="0.6"/>
  <line x1="100" y1="400" x2="1100" y2="400" stroke="#333333" stroke-width="1" opacity="0.4"/>
  <line x1="600" y1="100" x2="600" y2="700" stroke="#333333" stroke-width="1" opacity="0.4"/>
  
  <text x="80" y="120" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#777777" letter-spacing="4">LUMES &amp; CHROMES / ${category.toUpperCase()}</text>
  <text x="80" y="400" font-family="system-ui, sans-serif" font-size="48" font-weight="900" fill="#F2F2F2" letter-spacing="-1">${title.toUpperCase()}</text>
  <text x="80" y="440" font-family="system-ui, sans-serif" font-size="20" font-weight="400" fill="#B8B8B8">${subtitle}</text>
  <text x="80" y="720" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#777777" letter-spacing="2">L&amp;C STUDIO FILM ARCHIVE</text>
</svg>`;
}

function writeIfMissing(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
}

writeIfMissing(path.join(process.cwd(), 'public/images/hero-poster.svg'), generateSVGPoster('STORIES IN MOTION', 'Cinematic Visual Studio — Chennai', 'CINEMATIC HERO'));

// Generate Nive portrait poster
const niveSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <circle cx="450" cy="500" r="280" fill="#181818" stroke="#333" stroke-width="2"/>
  <path d="M 200 950 Q 450 700 700 950 Z" fill="#202020"/>
  <text x="50" y="100" font-family="system-ui, sans-serif" font-size="16" fill="#777" letter-spacing="4">FOUNDER &amp; VISUAL STORYTELLER</text>
  <text x="50" y="1130" font-family="system-ui, sans-serif" font-size="72" font-weight="900" fill="#FFF" letter-spacing="-2">NIVE</text>
  <text x="50" y="1160" font-family="system-ui, sans-serif" font-size="16" fill="#B8B8B8">LUMES &amp; CHROMES / EST. 2020</text>
</svg>`;
writeIfMissing(path.join(process.cwd(), 'public/images/nive-portrait.svg'), niveSVG);

// Projects list
const projects = [
  { id: 'pool-party', title: "Chennai's Wildest Pool Party", category: 'Event Promo' },
  { id: 'fake-sangeet', title: 'Fake Sangeet', category: 'Creative Film' },
  { id: 'cinematic-reel', title: 'Cinematic Reel', category: 'Showcase' },
  { id: 'behance', title: 'Behance', category: 'Portfolio' },
  { id: 'talking-head', title: 'Talking Head', category: 'Branding' },
  { id: 'quarantine-2020', title: 'Quarantine 2020', category: 'Experimental' },
  { id: 'music-video', title: 'Music Video', category: 'Music Film' },
  { id: 'short-film', title: 'Short Film', category: 'Short Cut' },
  { id: 'vurve-salon', title: 'Vurve Salon', category: 'Luxury Social' },
  { id: 'multicam-interview', title: 'Multi-Cam Interview', category: 'Corporate' }
];

projects.forEach(p => {
  const content = generateSVGPoster(p.title, p.category, p.category);
  writeIfMissing(path.join(process.cwd(), `public/images/projects/${p.id}.svg`), content);
});

console.log('Fallback media generation complete.');
