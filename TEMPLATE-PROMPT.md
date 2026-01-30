## Photography Portfolio Website — AI Prompt Template

Copy everything below and paste it into Claude (or any AI coding assistant). Replace all `[bracketed]` sections with your own information.

---

Build me a professional photography portfolio website using only HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no npm. The site should be production-ready and deployable on Netlify via drag-and-drop or GitHub.

## About Me (Replace with your info)
- **Business Name:** [Your Business Name]
- **Tagline:** [Your Tagline, e.g. "Creating Memories That Last"]
- **Location:** [Your City/Country]
- **Email:** [your@email.com]
- **Phone:** [Your Phone Number]
- **Instagram:** [@yourhandle]
- **Photography Specialties:** [e.g. Couples, Maternity, Personal Branding — or replace with your own categories like Weddings, Portraits, Events, etc.]
- **About Me Bio:** [2-3 paragraphs about yourself, your style, and your approach]
- **Years of Experience:** [X]
- **Number of Happy Clients:** [X]

## Site Structure (5 pages)
1. **Home** — Hero section with full-width background image, about preview, services preview grid, featured portfolio grid (9 images), testimonial slider with dot navigation, and a call-to-action booking section.
2. **Portfolio** — Filterable gallery with category buttons (one per specialty), image grid with hover effects, and a lightbox viewer with keyboard navigation (arrow keys, Escape to close).
3. **Services** — Service packages with pricing, what's included lists, process/workflow steps, and a client testimonial per service. Each service links to the contact page with the service pre-selected.
4. **About** — Full bio, profile photo, stats section (years experience, clients, location), reasons to choose you, and a CTA to book.
5. **Contact** — Contact form (name, email, phone, service dropdown, message) with validation, submitted via Formspree. Include FAQ accordion and a placeholder for Calendly booking widget.

## Architecture Requirements
- **Data-driven content:** All business info, portfolio items, services, and testimonials must live in separate JavaScript data files (`data/site-data.js`, `data/portfolio-data.js`, `data/services-data.js`, `data/testimonials-data.js`). HTML pages should render content dynamically from these data files so I only need to edit the data files to update content — never the HTML.
- **No external JS dependencies.** Pure vanilla JavaScript only.
- **Google Fonts only:** Use Poppins for headings and Inter for body text.
- **CSS custom properties** for brand colors so I can change the color scheme in one place.

## Design & UX
- Clean, modern, minimal aesthetic suitable for a photographer
- Mobile-first responsive design with hamburger menu on mobile
- Sticky header that appears on scroll
- Smooth scroll navigation
- Scroll-reveal animations on sections (fade up on enter)
- Back-to-top button
- Image lazy loading using native `loading="lazy"`
- Portfolio lightbox with swipe/arrow key navigation
- Testimonial slider with auto-rotation and dot indicators
- Use Unsplash placeholder images for all photos (I'll replace them later)

## Accessibility (WCAG AA)
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels and roles on interactive elements
- Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- Focus indicators on all interactive elements
- Skip-to-content link
- `prefers-reduced-motion` media query support
- Alt text on all images

## SEO
- Meta descriptions and keywords on every page
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (ProfessionalService schema)
- Semantic heading hierarchy (h1 > h2 > h3)
- XML sitemap (`sitemap.xml`)
- `robots.txt`

## Deployment
- Include a Netlify `_redirects` file
- No build step required — site should work by opening `index.html` directly

## Service Packages (Replace with your own)
1. **[Package Name 1]** — [Subtitle], $[Price] [Currency]. Includes: [list what's included]. Process: [list the steps].
2. **[Package Name 2]** — [Subtitle], $[Price] [Currency]. Includes: [list]. Process: [list].
3. **[Package Name 3]** — [Subtitle], $[Price] [Currency]. Includes: [list]. Process: [list].

## Testimonials (Replace with your own)
1. "[Quote]" — [Client Name], [Service Type]
2. "[Quote]" — [Client Name], [Service Type]
3. "[Quote]" — [Client Name], [Service Type]

## Portfolio Categories
Create 10 placeholder images per category using Unsplash URLs. Mark 3 per category as "featured" for the homepage grid.
- Categories: [List your specialties, e.g. Couples, Maternity, Branding]

Generate the complete website with all files. Use TODO comments wherever I need to replace placeholder content with my real info or photos.
