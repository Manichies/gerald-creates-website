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
 *   category - Must match a filter: 'couples', 'maternity', or 'branding'
 *   src      - Path to image (relative or absolute URL)
 *   alt      - Descriptive alt text for accessibility & SEO
 *   featured - true = shows on homepage grid (aim for ~9 featured images)
 */

const PORTFOLIO_DATA = [
  // ─── COUPLES PHOTOGRAPHY ───────────────────────────────────
  // TODO: Replace src URLs with your actual photos
  {
    id: 'couples-01',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=750&fit=crop',
    alt: 'Couple embracing during golden hour',
    featured: true
  },
  {
    id: 'couples-02',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=750&fit=crop',
    alt: 'Couple walking hand in hand',
    featured: true
  },
  {
    id: 'couples-03',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop',
    alt: 'Couple sharing a candid laugh',
    featured: true
  },
  {
    id: 'couples-04',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=750&fit=crop',
    alt: 'Romantic couple at sunset',
    featured: false
  },
  {
    id: 'couples-05',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=750&fit=crop',
    alt: 'Couple enjoying a moment together',
    featured: false
  },
  {
    id: 'couples-06',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=750&fit=crop',
    alt: 'Couple in outdoor setting',
    featured: false
  },
  {
    id: 'couples-07',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=750&fit=crop',
    alt: 'Couple silhouette at dusk',
    featured: false
  },
  {
    id: 'couples-08',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=750&fit=crop',
    alt: 'Couple portrait in natural light',
    featured: false
  },
  {
    id: 'couples-09',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=750&fit=crop',
    alt: 'Couple dancing together',
    featured: false
  },
  {
    id: 'couples-10',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1621665421558-831f91fd8e60?w=600&h=750&fit=crop',
    alt: 'Intimate couple portrait',
    featured: false
  },

  // ─── MATERNITY PHOTOGRAPHY ─────────────────────────────────
  // TODO: Replace src URLs with your actual photos
  {
    id: 'maternity-01',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=750&fit=crop',
    alt: 'Beautiful maternity portrait in natural light',
    featured: true
  },
  {
    id: 'maternity-02',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=750&fit=crop',
    alt: 'Expecting mother in garden setting',
    featured: true
  },
  {
    id: 'maternity-03',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=600&h=750&fit=crop',
    alt: 'Maternity session at golden hour',
    featured: true
  },
  {
    id: 'maternity-04',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1457449205106-d0aad138ae71?w=600&h=750&fit=crop',
    alt: 'Couple expecting their first child',
    featured: false
  },
  {
    id: 'maternity-05',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=750&fit=crop',
    alt: 'Glowing mother-to-be portrait',
    featured: false
  },
  {
    id: 'maternity-06',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop',
    alt: 'Intimate maternity moment',
    featured: false
  },
  {
    id: 'maternity-07',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=750&fit=crop',
    alt: 'Expecting parents sharing a tender moment',
    featured: false
  },
  {
    id: 'maternity-08',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=750&fit=crop',
    alt: 'Outdoor maternity photography',
    featured: false
  },
  {
    id: 'maternity-09',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=750&fit=crop',
    alt: 'Soft light maternity portrait',
    featured: false
  },
  {
    id: 'maternity-10',
    category: 'maternity',
    src: 'https://images.unsplash.com/photo-1455732063391-5f50f4df1854?w=600&h=750&fit=crop',
    alt: 'Beautiful family maternity session',
    featured: false
  },

  // ─── PERSONAL BRANDING PHOTOGRAPHY ─────────────────────────
  // TODO: Replace src URLs with your actual photos
  {
    id: 'branding-01',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop',
    alt: 'Professional headshot for corporate branding',
    featured: true
  },
  {
    id: 'branding-02',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop',
    alt: 'Confident professional portrait',
    featured: true
  },
  {
    id: 'branding-03',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop',
    alt: 'Entrepreneur personal brand photography',
    featured: true
  },
  {
    id: 'branding-04',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop',
    alt: 'Creative professional headshot',
    featured: false
  },
  {
    id: 'branding-05',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop',
    alt: 'Modern LinkedIn profile photo',
    featured: false
  },
  {
    id: 'branding-06',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop',
    alt: 'Professional woman personal branding',
    featured: false
  },
  {
    id: 'branding-07',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1556157382-97eded29296d?w=600&h=750&fit=crop',
    alt: 'Business lifestyle photography',
    featured: false
  },
  {
    id: 'branding-08',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=750&fit=crop',
    alt: 'Workspace branding photography',
    featured: false
  },
  {
    id: 'branding-09',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop',
    alt: 'Clean professional portrait',
    featured: false
  },
  {
    id: 'branding-10',
    category: 'branding',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop',
    alt: 'Personal brand portrait session',
    featured: false
  }
];
