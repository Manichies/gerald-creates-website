# Gerald Creates — Photography Portfolio Website

A clean, modern, professional photography portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — just production-ready code designed for easy content updates and Netlify deployment.

---

## Quick Start

### Run Locally

1. Open the `gerald-creates-website` folder in VS Code
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

Alternatively, you can use any local HTTP server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

> **Note:** Opening HTML files directly (double-clicking) will work for most features, but `fetch()` calls require an HTTP server if you switch the data loading approach.

---

## Project Structure

```
gerald-creates-website/
├── index.html              ← Home page
├── portfolio.html           ← Filterable gallery with lightbox
├── services.html            ← Service packages & pricing
├── about.html               ← Your story & approach
├── contact.html             ← Contact form & booking
├── css/
│   ├── style.css            ← Main stylesheet (all components)
│   └── responsive.css       ← Media queries & breakpoints
├── js/
│   ├── main.js              ← Navigation, scroll, animations, content rendering
│   ├── portfolio.js         ← Gallery filters, lightbox, keyboard nav
│   └── contact.js           ← Form validation, Formspree submission
├── data/                    ← ⭐ EDIT THESE FILES TO UPDATE CONTENT
│   ├── site-data.js         ← Business info, about text, hero, FAQs
│   ├── portfolio-data.js    ← All portfolio images
│   ├── services-data.js     ← Service packages & pricing
│   └── testimonials-data.js ← Client testimonials
├── images/                  ← Your actual image files go here
│   ├── portfolio/
│   │   ├── couples/
│   │   ├── maternity/
│   │   └── branding/
│   └── services/
├── robots.txt
├── sitemap.xml
├── _redirects               ← Netlify routing config
├── favicon.ico              ← Add your favicon here
└── README.md
```

---

## Content Updates (No Code Editing Needed!)

The site is **data-driven** — all content lives in the `data/` folder as simple JavaScript objects. Edit these files to update the website without touching HTML.

### Add a New Portfolio Photo

1. Place your image in `images/portfolio/{category}/` (e.g., `images/portfolio/couples/`)
2. Open `data/portfolio-data.js`
3. Add a new entry to the array:

```javascript
{
  id: 'couples-11',                           // Unique ID
  category: 'couples',                        // 'couples', 'maternity', or 'branding'
  src: 'images/portfolio/couples/my-photo.jpg', // Path to your image
  alt: 'Couple at Gardens by the Bay',        // Descriptive alt text
  featured: true                              // true = shows on homepage
}
```

4. Save the file — that's it!

### Update Service Pricing

Open `data/services-data.js` and change the `price` and `priceLabel` fields:

```javascript
{
  id: 'couples',
  name: 'The Connection Session',
  price: 597,                    // ← Change this number
  priceLabel: 'From $597',       // ← Update the display text
  // ... rest stays the same
}
```

### Add a New Testimonial

Open `data/testimonials-data.js` and add to the array:

```javascript
{
  quote: "Gerald is amazing! Our photos turned out beautiful.",
  author: 'Jane & John',
  service: 'Couples Photography'
}
```

### Add a New Service Category

1. Add the new service object in `data/services-data.js` (copy an existing one as template)
2. Create the image folder: `images/portfolio/newcategory/`
3. Add portfolio items with `category: 'newcategory'` in `data/portfolio-data.js`
4. Add a filter button in `portfolio.html`:
   ```html
   <button class="filter-btn" data-filter="newcategory">New Category</button>
   ```

### Update About Page / Business Info

Edit `data/site-data.js` — all fields are clearly labeled with comments.

---

## Deployment to Netlify

### Option 1: Drag & Drop (Fastest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up / log in
3. Drag the entire `gerald-creates-website` folder onto the deploy area
4. Your site is live!

### Option 2: GitHub + Netlify (Recommended for Ongoing Updates)

1. Push this folder to a GitHub repository
2. In Netlify, click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account and select the repo
4. Build settings:
   - **Build command:** (leave empty — no build step needed)
   - **Publish directory:** `.` or `/`
5. Click **Deploy**
6. Every time you push changes to GitHub, Netlify auto-deploys

### Connect Your Domain (geraldcreates.com)

1. In Netlify dashboard → **Domain settings** → **Add custom domain**
2. Enter `geraldcreates.com`
3. Update your domain's DNS:
   - **Option A (Recommended):** Point nameservers to Netlify's DNS
   - **Option B:** Add a CNAME record pointing to `your-site.netlify.app`
4. Netlify provides free SSL (HTTPS) automatically
5. Uncomment the redirect line in `_redirects` file

---

## Formspree Setup (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **"New Form"** and name it (e.g., "Gerald Creates Contact")
3. Copy your form ID (looks like `xrgvknao`)
4. Open `contact.html` and find this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Test by submitting the form — you'll receive submissions at your Formspree email

---

## Calendly Setup (Booking Calendar)

1. Create a [Calendly](https://calendly.com) account
2. Set up your availability and event types
3. Open `contact.html` and find the `.calendly-placeholder` div
4. Replace it with your Calendly embed code:

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/YOUR_USERNAME"
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

---

## Image Optimization Guide

### Recommended Sizes

| Image Type         | Dimensions      | Max File Size | Format |
|--------------------|-----------------|---------------|--------|
| Hero background    | 1920 x 1080 px  | 200 KB        | WebP/JPG |
| Portfolio images   | 600 x 750 px    | 100 KB        | WebP/JPG |
| Service images     | 800 x 600 px    | 120 KB        | WebP/JPG |
| About photo        | 800 x 1000 px   | 150 KB        | WebP/JPG |
| OG image           | 1200 x 630 px   | 100 KB        | JPG     |

### How to Optimize

1. **Resize** images to the recommended dimensions before uploading
2. **Compress** using free tools:
   - [Squoosh](https://squoosh.app) — Google's image optimizer
   - [TinyPNG](https://tinypng.com) — Batch compression
   - [ImageOptim](https://imageoptim.com) — Mac app
3. **Use WebP format** where possible (supported by all modern browsers)
4. All portfolio images use `loading="lazy"` for automatic lazy loading

### Replacing Placeholder Images

The site currently uses Unsplash placeholder URLs. To use your own photos:

1. Place optimized images in the appropriate `images/` subdirectory
2. Update the `src` field in the relevant data file:

```javascript
// Before (placeholder)
src: 'https://images.unsplash.com/photo-xxx?w=600&h=750&fit=crop',

// After (your photo)
src: 'images/portfolio/couples/sarah-tom-gardens.jpg',
```

### Creating a Favicon

1. Use [favicon.io](https://favicon.io) to generate from text or image
2. Download the favicon package
3. Place `favicon.ico` in the root directory

### Creating an OG Image

1. Create a 1200 x 630 px image with your logo/brand
2. Save as `images/og-image.jpg`
3. This image appears when your site is shared on social media

---

## Technical Details

### Browser Support

- Chrome 80+
- Safari 13+
- Firefox 78+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome for Android)

### Performance Features

- No external frameworks (zero JS dependency weight)
- CSS-only animations (no animation libraries)
- Native lazy loading with `loading="lazy"`
- Preconnect to Google Fonts
- Minimal DOM manipulation
- Passive scroll event listeners
- `will-change` and GPU-accelerated transforms

### Accessibility (WCAG AA)

- Semantic HTML5 structure
- Skip-to-content link
- ARIA labels and roles on interactive elements
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Focus indicators on all interactive elements
- Alt text on all images
- Color contrast meets WCAG AA standards
- `prefers-reduced-motion` media query respected
- `prefers-contrast: high` support

### SEO

- Semantic heading hierarchy (h1 → h2 → h3)
- Meta descriptions on every page
- Open Graph and Twitter Card tags
- JSON-LD structured data (LocalBusiness, Service)
- Sitemap.xml
- robots.txt
- Descriptive alt text on images

---

## Troubleshooting

### Images Not Loading

- Check that file paths in `data/portfolio-data.js` match actual file locations
- Ensure image filenames don't have spaces (use hyphens: `my-photo.jpg`)
- Verify images are in the correct subdirectory

### Contact Form Not Working

- Confirm you've replaced `YOUR_FORM_ID` in `contact.html` with your actual Formspree ID
- Check Formspree dashboard for form status
- Ensure the form action URL is correct: `https://formspree.io/f/your-actual-id`

### Mobile Menu Not Working

- Ensure JavaScript is enabled in the browser
- Check browser console for errors (F12 → Console tab)

### Fonts Not Loading

- Requires internet connection for Google Fonts
- Check that the `<link>` tag in `<head>` is intact

### Site Looks Broken

- Make sure all files are in the correct directories
- Open browser console (F12) and check for 404 errors
- Verify `css/style.css` and `css/responsive.css` paths are correct

---

## Customization Tips

### Changing Brand Colors

Edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --color-charcoal: #1E1E1E;   /* Primary text */
  --color-gray: #8B8B8B;        /* Secondary text */
  --color-sage: #5B6F5D;        /* Accent / buttons */
  --color-sage-dark: #4a5c4b;   /* Button hover */
  --color-offwhite: #FAFAFA;    /* Background */
}
```

### Changing Fonts

1. Pick fonts from [Google Fonts](https://fonts.google.com)
2. Update the `<link>` tag in each HTML file's `<head>`
3. Update CSS variables:

```css
:root {
  --font-heading: 'YourHeadingFont', sans-serif;
  --font-body: 'YourBodyFont', sans-serif;
}
```

---

## Future Enhancement Ideas

- **Blog section** — Add a blog for SEO and sharing photography tips
- **Client galleries** — Password-protected galleries for client photo delivery
- **Dark mode toggle** — The current brand colors work well in light mode
- **Animation library** — Add GSAP for more sophisticated scroll animations
- **CMS integration** — Connect to Netlify CMS or Decap CMS for visual editing
- **Analytics** — Add Google Analytics or Plausible for visitor tracking
- **Image gallery** — Before/after slider for editing showcase
- **Multi-language** — Add language switcher for international clients

---

## License

This website template was custom-built for Gerald Creates. All rights reserved.

Photos used as placeholders are from [Unsplash](https://unsplash.com) and should be replaced with your own photography before going live.
