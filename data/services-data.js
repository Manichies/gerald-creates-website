/**
 * ============================================
 * SERVICES DATA - Gerald Creates
 * ============================================
 *
 * HOW TO UPDATE SERVICES:
 * - Change prices, descriptions, or included items below
 * - To add a new service, copy an existing block and update all fields
 * - Changes appear on both the Services page and Home page preview
 *
 * Fields:
 *   id          - URL-friendly identifier (used for anchors and filtering)
 *   name        - Display name of the package
 *   subtitle    - Short descriptor shown under the name
 *   description - 1-2 sentence overview
 *   price       - Numeric price (formatted with currency on display)
 *   priceLabel  - How price is displayed (e.g., "From $497")
 *   currency    - Currency code
 *   image       - Path to service hero image
 *   imageAlt    - Alt text for the image
 *   includes    - Array of what's included in the package
 *   process     - Array of steps describing the workflow
 *   testimonial - Client quote specific to this service
 *   ctaBook     - URL for booking button
 *   ctaGallery  - URL for "view gallery" button
 */

const SERVICES_DATA = [
  {
    id: 'couples',
    name: 'The Connection Session',
    subtitle: 'For Couples & Engagements',
    description: "Celebrate your love story with authentic, natural photos that capture your connection. Perfect for engagements, anniversaries, or just because you want beautiful photos together.",
    price: 497,
    priceLabel: 'From $497',
    currency: 'SGD',
    // TODO: Replace with your actual service photo
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    imageAlt: 'Couples photography session by Gerald Creates',
    includes: [
      '45-minute outdoor session at location of your choice',
      '15 professionally edited high-resolution digital images',
      '2 custom announcement card designs (perfect for save-the-dates)',
      'Online gallery delivery within 48 hours',
      'Print release included'
    ],
    process: [
      'Book your session and choose your location',
      'Pre-session consultation (what to wear, best times, etc.)',
      'Your 45-minute photo session',
      'Gallery delivered within 48 hours',
      'Download and share your beautiful photos'
    ],
    testimonial: {
      quote: "Gerald made us feel so comfortable and natural. We love every single photo!",
      author: 'Sarah & Tom'
    },
    ctaBook: 'contact.html?service=couples',
    ctaGallery: 'portfolio.html#couples'
  },
  {
    id: 'maternity',
    name: 'The Milestone Session',
    subtitle: 'For Expecting Parents',
    description: "Celebrate this incredible chapter with timeless maternity portraits. I'll capture the beauty, excitement, and love of this special time in a way that feels natural and authentic.",
    price: 497,
    priceLabel: 'From $497',
    currency: 'SGD',
    // TODO: Replace with your actual service photo
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&h=600&fit=crop',
    imageAlt: 'Maternity photography session by Gerald Creates',
    includes: [
      '45-minute session at studio or outdoor location',
      '15 professionally edited high-resolution digital images',
      'Partner and/or sibling inclusion at no extra cost',
      'Online gallery delivery within 48 hours',
      'Print release included'
    ],
    process: [
      'Book your session (recommended at 28-34 weeks)',
      'Pre-session consultation (styling tips, location selection)',
      'Your relaxed 45-minute photo session',
      'Gallery delivered within 48 hours',
      'Download and cherish your milestone memories'
    ],
    testimonial: {
      quote: "I was nervous about maternity photos, but Gerald made me feel so comfortable. The images are beautiful and natural.",
      author: 'Michelle'
    },
    ctaBook: 'contact.html?service=maternity',
    ctaGallery: 'portfolio.html#maternity'
  },
  {
    id: 'branding',
    name: 'The Brand Session',
    subtitle: 'For Professionals & Entrepreneurs',
    description: "Elevate your personal brand with professional imagery that tells your story. Perfect for LinkedIn, websites, social media, and marketing materials.",
    price: 697,
    priceLabel: 'From $697',
    currency: 'SGD',
    // TODO: Replace with your actual service photo
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop',
    imageAlt: 'Personal branding photography session by Gerald Creates',
    includes: [
      '60-minute session with up to 2 outfit changes',
      '20 professionally edited high-resolution digital images',
      'Mix of headshots, lifestyle, and workspace imagery',
      'Social media-optimized crops included',
      'Online gallery delivery within 48 hours',
      'Commercial usage rights included'
    ],
    process: [
      'Book your session and share your brand vision',
      'Brand strategy call (your goals, aesthetic, platforms)',
      'Your 60-minute photo session',
      'Gallery delivered within 48 hours',
      'Download and elevate your brand across all platforms'
    ],
    testimonial: {
      quote: "Professional, creative, and delivered exactly what I needed for my LinkedIn and website. Worth every dollar.",
      author: 'David Chen'
    },
    ctaBook: 'contact.html?service=branding',
    ctaGallery: 'portfolio.html#branding'
  }
];
