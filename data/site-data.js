/**
 * ============================================
 * SITE CONFIGURATION - Gerald Creates
 * ============================================
 * Edit this file to update business info, about content, and stats.
 * No need to touch any HTML files!
 */

const SITE_CONFIG = {
  business: {
    name: 'Gerald Creates',
    tagline: 'Creating Memories That Last',
    email: 'createsgerald@gmail.com',
    phone: '+65 XXXX XXXX', // TODO: Replace with actual phone number
    instagram: '@geraldcreates',
    instagramUrl: 'https://instagram.com/geraldcreates',
    location: 'Singapore',
    url: 'https://geraldcreates.com'
  },

  about: {
    headline: "Hey, I'm Gerald",
    intro: "I'm a Singapore-based photographer who believes the best photos happen when you're being yourself. No awkward poses, no forced smiles — just genuine moments captured beautifully.",
    story: "I started photography [X years ago] and quickly fell in love with telling people's stories through images. Whether you're a couple celebrating your love, expecting parents preparing for your new arrival, or a professional building your personal brand, I'm here to create images you'll treasure.", // TODO: Update with your actual story
    approach: "I keep things simple: authentic, modern, and timeless. I want you to look at your photos in 20 years and still love them. That means no trendy filters, no over-editing — just beautiful, honest photography.",
    personal: "You'll find me exploring Singapore's hidden photography spots, traveling (with a goal to photograph all seven continents), or planning my next adventure. I believe great photographers are always learning, always exploring, always seeing the world with fresh eyes.",
    reasons: [
      'Professional yet approachable — I make photo sessions fun and comfortable',
      'Fast turnaround — your photos delivered within 48 hours',
      'Modern aesthetic — clean, timeless images you\'ll love forever',
      'Singapore-based — I know the best local spots for stunning photos'
    ],
    // TODO: Replace with your actual photo
    image: 'images/geraldProfile.JPG',
    imageAlt: 'Gerald, photographer based in Singapore'
  },

  stats: [
    { number: 'X+', label: 'Years Experience' },   // TODO: Update number
    { number: 'X+', label: 'Happy Clients' },       // TODO: Update number
    { number: 'Based in SG', label: 'Serving Singapore' }
  ],

  // Home page about preview (shorter version)
  aboutPreview: {
    heading: "Hi, I'm Gerald",
    paragraphs: [
      "I'm a Singapore-based photographer specializing in capturing authentic moments for couples, expecting parents, and professionals building their personal brand.",
      "My approach is simple: genuine, modern, and timeless. I believe the best photos happen when you're being yourself."
    ]
  },

  // Hero section
  hero: {
    // TODO: Replace with your best hero image
    backgroundImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop',
    heading: 'Gerald Creates',
    tagline: 'Creating Memories That Last',
    ctaText: 'View Portfolio',
    ctaLink: 'portfolio.html'
  },

  // CTA section
  cta: {
    heading: 'Ready to Create Something Beautiful?',
    subtext: "Let's capture your moments together.",
    buttonText: 'Book Your Session',
    buttonLink: 'contact.html'
  },

  // FAQs for contact page
  faqs: [
    {
      question: "What's your availability?",
      answer: "I typically book 2-3 weeks out, but last-minute sessions are sometimes possible. Check the calendar below!"
    },
    {
      question: 'Do you travel?',
      answer: 'Absolutely! All sessions within Singapore are included. For destination sessions, let\'s chat.'
    }
  ]
};
