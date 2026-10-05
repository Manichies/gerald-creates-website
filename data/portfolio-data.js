/**
 * ============================================
 * PORTFOLIO DATA - Gerald Creates
 * ============================================
 *
 * HOW TO ADD NEW PHOTOS:
 * 1. Upload the image to Cloudinary (or via /admin) and copy its URL
 * 2. Add a new entry to the array below
 * 3. Set featured: true if you want it on the homepage (pick ~9 favorites)
 *
 * Fields:
 *   id       - Unique identifier (e.g., 'couples-11')
 *   category - Must match a filter: 'couples', 'maternity', 'portraits', 'graduation', or 'unscripted'
 *   src      - Cloudinary image URL (resized automatically on the site)
 *   alt      - Descriptive alt text for accessibility & SEO
 *   featured - true = shows on homepage grid (aim for ~9 featured images)
 */

/**
 * MATERNITY CLIENTS
 * Each entry = one client photoshoot session.
 * photos[] = all images taken for that session.
 * The portfolio page shows a 3-photo mosaic preview per client;
 * clicking it opens a lightbox with the full set.
 *
 * HOW TO ADD A NEW CLIENT:
 *   1. Upload their photos to Cloudinary and copy each URL
 *   2. Copy the template block below and fill in the details.
 */
const MATERNITY_CLIENTS = [
  {
    id: 'client-01',
    name: 'Alvin & Baiyang',
    description: 'A soft golden hour by the sea — celebrating the arrival of their little one with the warmth of family, love, and the sound of gentle waves.',
    photos: [
      { id: 'maternity-01', src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179005/IMG_3728_pwpopz.jpg', alt: 'Maternity photography session' },
      { id: 'maternity-02', src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179005/IMG_3733_rfjqzv.jpg', alt: 'Maternity photography session' },
      { id: 'maternity-03', src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3737_mmezzg.jpg', alt: 'Maternity photography session' },
      { id: 'maternity-04', src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3729_kvtcjh.jpg', alt: 'Maternity photography session' },
      { id: 'maternity-05', src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3730_ir7ez6.jpg', alt: 'Maternity photography session' }
    ]
  }
];

const PORTFOLIO_DATA = [
  // Unscripted
  {
    id: 'unscripted-01',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791178996/kamakuraBike_orywot.jpg',
    alt: 'Bicycle scene in Kamakura, Japan',
    featured: true
  },
  {
    id: 'unscripted-02',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179000/bodinTemple_ifshdo.jpg',
    alt: 'Bodin Temple atmosphere',
    featured: true
  },
  {
    id: 'unscripted-03',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179008/kamakuraBeach_dbqvgd.jpg',
    alt: 'Beach scene in Kamakura, Japan',
    featured: true
  },
  // {
  //   id: 'unscripted-04',
  //   category: 'unscripted',
  //   src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791178998/sqStars_w42ggy.jpg',
  //   alt: 'Starry night photography',
  //   featured: true
  // },
  {
    id: 'unscripted-05',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791178998/alleyHK_uhy9ep.jpg',
    alt: 'Hong Kong alley street photography',
    featured: true
  },
  {
    id: 'unscripted-06',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179000/casino_wcculx.jpg',
    alt: 'Casino ambiance',
    featured: true
  },
  {
    id: 'unscripted-07',
    category: 'unscripted',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791178999/kamakuraTrain_gl68pf.jpg',
    alt: 'Train scene in Kamakura, Japan',
    featured: true
  },

  

  // Portraits
  {
    id: 'portraits-01',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179002/IMG_2472_ldpiwe.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-02',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179002/IMG_2476_cjl4pp.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-03',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179004/IMG_2574_ykluuw.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-04',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179003/IMG_2507_bmtcef.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-05',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179003/IMG_2573_bwmfv9.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-06',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179003/IMG_2508_b2siso.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-07',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791178762/IMG_2381_qwmnge.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-08',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179001/IMG_2382_kodnbc.jpg',
    alt: 'Portrait photograph',
    featured: true
  },
  {
    id: 'portraits-09',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179002/IMG_2473_h3xogg.jpg',
    alt: 'Portrait photograph',
    featured: true
  },

  // Maternity
  {
    id: 'maternity-01',
    category: 'maternity',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179005/IMG_3728_pwpopz.jpg',
    alt: 'Maternity photography session',
    featured: true
  },
  {
    id: 'maternity-02',
    category: 'maternity',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179005/IMG_3733_rfjqzv.jpg',
    alt: 'Maternity photography session',
    featured: true
  },
  {
    id: 'maternity-03',
    category: 'maternity',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3737_mmezzg.jpg',
    alt: 'Maternity photography session',
    featured: true
  },
  {
    id: 'maternity-04',
    category: 'maternity',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3729_kvtcjh.jpg',
    alt: 'Maternity photography session',
    featured: true
  },
  {
    id: 'maternity-05',
    category: 'maternity',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179006/IMG_3730_ir7ez6.jpg',
    alt: 'Maternity photography session',
    featured: true
  },

  // Portraits (continued)
  {
    id: 'portraits-10',
    category: 'portraits',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179011/IMG_3751_mc7x6i.jpg',
    alt: 'Portrait photograph',
    featured: true
  },

  // Couples
  {
    id: 'couples-01',
    category: 'couples',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179001/IMG_2464_dskgbz.jpg',
    alt: 'Couples photography session',
    featured: true
  },
  {
    id: 'couples-02',
    category: 'couples',
    src: 'https://res.cloudinary.com/dnduxr69x/image/upload/v1791179008/IMG_3755_wpfuai.jpg',
    alt: 'Couples photography session',
    featured: true
  }
];
