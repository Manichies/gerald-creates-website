/**
 * ============================================
 * PORTFOLIO DATA - Gerald Creates
 * ============================================
 *
 * HOW TO ADD NEW PHOTOS:
 * 1. Place your image in the appropriate /images/portfolio/{category}/ folder
 * 2. Add a new entry to the array below
 * 3. Set featured: true if you want it on the homepage (pick ~9 favorites)
 *
 * Fields:
 *   id       - Unique identifier (e.g., 'couples-11')
 *   category - Must match a filter: 'couples', 'maternity', or 'unscripted'
 *   src      - Path to image (relative or absolute URL)
 *   alt      - Descriptive alt text for accessibility & SEO
 *   featured - true = shows on homepage grid (aim for ~9 featured images)
 */

const PORTFOLIO_DATA = [
  // Unscripted
  {
    id: 'unscripted-01',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/kamakuraBike.JPG',
    alt: 'Bicycle scene in Kamakura, Japan',
    featured: true
  },
  {
    id: 'unscripted-02',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/bodinTemple.JPG',
    alt: 'Bodin Temple atmosphere',
    featured: true
  },
  {
    id: 'unscripted-03',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/kamakuraBeach.JPG',
    alt: 'Beach scene in Kamakura, Japan',
    featured: true
  },
  {
    id: 'unscripted-04',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/sqStars.JPG',
    alt: 'Starry night photography',
    featured: true
  },
  {
    id: 'unscripted-05',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/alleyHK.JPG',
    alt: 'Hong Kong alley street photography',
    featured: true
  },
  {
    id: 'unscripted-06',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/casino.JPG',
    alt: 'Casino ambiance',
    featured: true
  },
  {
    id: 'unscripted-07',
    category: 'unscripted',
    src: 'images/portfolio/unscripted/kamakuraTrain.JPG',
    alt: 'Train scene in Kamakura, Japan',
    featured: true
  },

  // Couples
  {
    id: 'couples-01',
    category: 'couples',
    src: 'images/portfolio/couples/IMG_2464.JPG',
    alt: 'Couples photography session',
    featured: true
  },

  // Portraits
  {
    id: 'portraits-01',
    category: 'portraits',
    src: 'images/portfolio/portraits/IMG_2472.JPG',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-02',
    category: 'portraits',
    src: 'images/portfolio/portraits/IMG_2476.JPG',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-03',
    category: 'portraits',
    src: 'images/portfolio/portraits/IMG_2507.JPG',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-04',
    category: 'portraits',
    src: 'images/portfolio/portraits/IMG_2508.JPG',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-05',
    category: 'portraits',
    src: 'images/portfolio/portraits/IMG_2573.JPG',
    alt: 'Portrait photograph',
    featured: true
  }
];
