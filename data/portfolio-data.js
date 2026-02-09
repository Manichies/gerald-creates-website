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
  // TODO: Replace with your actual photos
  // Example entry:
  {
    id: 'sample-01',
    category: 'couples',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=750&fit=crop',
    alt: 'Sample portfolio image - replace with your photo',
    featured: true
  }
];
