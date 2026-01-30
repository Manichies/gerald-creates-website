/**
 * ============================================
 * Gerald Creates - Main JavaScript
 * ============================================
 * Handles: Navigation, mobile menu, sticky header,
 * smooth scroll, scroll reveal, testimonials,
 * back-to-top, and dynamic content rendering.
 * ============================================
 */

(function () {
  'use strict';

  /* ─── DOM READY ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupStickyHeader();
    setupMobileMenu();
    setupActiveNavLink();
    setupSmoothScroll();
    setupScrollReveal();
    setupBackToTop();
    setupImageLoading();

    // Page-specific rendering from data files
    if (document.querySelector('.hero')) renderHero();
    if (document.querySelector('.about-preview')) renderAboutPreview();
    if (document.querySelector('.services-preview')) renderServicesPreview();
    if (document.querySelector('.portfolio-preview')) renderPortfolioPreview();
    if (document.querySelector('.testimonials')) renderTestimonials();
    if (document.querySelector('.about-main')) renderAboutPage();
    if (document.querySelector('.credentials')) renderCredentials();
    if (document.querySelector('#service-sections')) renderServiceSections();
    if (document.querySelector('.contact-faqs')) renderFAQs();
  }

  /* ─── STICKY HEADER ───────────────────────────────────── */
  function setupStickyHeader() {
    var header = document.querySelector('header');
    if (!header) return;

    var threshold = 100;

    function onScroll() {
      if (window.scrollY > threshold) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check initial position
  }

  /* ─── MOBILE MENU ─────────────────────────────────────── */
  function setupMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    var overlay = document.querySelector('.mobile-menu-overlay');
    if (!hamburger || !navLinks) return;

    function toggleMenu() {
      var isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Update ARIA
      hamburger.setAttribute('aria-expanded', isOpen);
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  /* ─── ACTIVE NAV LINK ─────────────────────────────────── */
  function setupActiveNavLink() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ─── SMOOTH SCROLL ───────────────────────────────────── */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerOffset = 90;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  /* ─── SCROLL REVEAL ───────────────────────────────────── */
  function setupScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      // Fallback: just show everything
      reveals.forEach(function (el) { el.classList.add('revealed'); });
    }
  }

  /* ─── BACK TO TOP ─────────────────────────────────────── */
  function setupBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── IMAGE LOADING ───────────────────────────────────── */
  function setupImageLoading() {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function () {
          this.classList.add('loaded');
        });
        img.addEventListener('error', function () {
          // Set a fallback background for broken images
          this.style.background = 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)';
          this.alt = 'Image unavailable';
        });
      }
    });
  }

  /* ─── HERO RENDERING ──────────────────────────────────── */
  function renderHero() {
    if (typeof SITE_CONFIG === 'undefined') return;
    var hero = SITE_CONFIG.hero;

    var heroBg = document.querySelector('.hero-bg');
    if (heroBg && hero.backgroundImage) {
      heroBg.style.backgroundImage = 'url(' + hero.backgroundImage + ')';
    }

    // Subtle parallax effect
    if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroBg.style.transform = 'scale(1) translateY(' + (scrolled * 0.3) + 'px)';
        }
      }, { passive: true });
    }
  }

  /* ─── ABOUT PREVIEW (Home page) ────────────────────────── */
  function renderAboutPreview() {
    if (typeof SITE_CONFIG === 'undefined') return;
    var preview = SITE_CONFIG.aboutPreview;
    var about = SITE_CONFIG.about;

    var imgEl = document.querySelector('.about-preview .about-image img');
    if (imgEl && about.image) {
      imgEl.src = about.image;
      imgEl.alt = about.imageAlt;
    }

    var heading = document.querySelector('.about-preview .about-text h2');
    if (heading) heading.textContent = preview.heading;

    var textContainer = document.querySelector('.about-preview .about-text');
    if (textContainer) {
      var paragraphs = textContainer.querySelectorAll('p[data-preview]');
      preview.paragraphs.forEach(function (text, i) {
        if (paragraphs[i]) paragraphs[i].textContent = text;
      });
    }
  }

  /* ─── SERVICES PREVIEW (Home page) ─────────────────────── */
  function renderServicesPreview() {
    if (typeof SERVICES_DATA === 'undefined') return;
    var grid = document.querySelector('.services-preview .services-grid');
    if (!grid) return;

    grid.innerHTML = '';

    SERVICES_DATA.forEach(function (service) {
      var card = document.createElement('div');
      card.className = 'service-card reveal';
      card.innerHTML =
        '<img src="' + service.image + '" alt="' + service.imageAlt + '" loading="lazy">' +
        '<div class="service-card-content">' +
          '<h3>' + service.name + '</h3>' +
          '<p class="service-card-subtitle">' + service.subtitle + '</p>' +
          '<span class="price">' + service.priceLabel + '</span>' +
          '<a href="services.html#' + service.id + '" class="btn-outline">Learn More</a>' +
        '</div>';
      grid.appendChild(card);
    });

    // Re-observe new elements for scroll reveal
    setupScrollReveal();
  }

  /* ─── PORTFOLIO PREVIEW (Home page) ────────────────────── */
  function renderPortfolioPreview() {
    if (typeof PORTFOLIO_DATA === 'undefined') return;
    var grid = document.querySelector('.portfolio-preview .portfolio-grid');
    if (!grid) return;

    var featured = PORTFOLIO_DATA.filter(function (item) { return item.featured; });
    grid.innerHTML = '';

    featured.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'portfolio-item reveal';
      div.innerHTML =
        '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
        '<div class="portfolio-overlay">' +
          '<span class="portfolio-category">' + item.category + '</span>' +
        '</div>';
      grid.appendChild(div);
    });

    setupScrollReveal();
  }

  /* ─── TESTIMONIALS SLIDER ──────────────────────────────── */
  function renderTestimonials() {
    if (typeof TESTIMONIALS_DATA === 'undefined') return;
    var slider = document.querySelector('.testimonial-slider');
    var dotsContainer = document.querySelector('.slider-dots');
    if (!slider || !dotsContainer) return;

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    var currentIndex = 0;
    var autoplayInterval;

    TESTIMONIALS_DATA.forEach(function (t, i) {
      // Create testimonial slide
      var slide = document.createElement('div');
      slide.className = 'testimonial' + (i === 0 ? ' active' : '');
      slide.innerHTML =
        '<p class="quote">' + t.quote + '</p>' +
        '<p class="author">\u2014 ' + t.author + ', ' + t.service + '</p>';
      slider.appendChild(slide);

      // Create dot
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', function () { goToSlide(i); });
      dotsContainer.appendChild(dot);
    });

    var slides = slider.querySelectorAll('.testimonial');
    var dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      currentIndex = index;
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Autoplay
    startAutoplay();

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Touch/swipe support
    var touchStartX = 0;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          goToSlide((currentIndex - 1 + slides.length) % slides.length);
        }
      }
      startAutoplay();
    }, { passive: true });
  }

  /* ─── ABOUT PAGE RENDERING ────────────────────────────── */
  function renderAboutPage() {
    if (typeof SITE_CONFIG === 'undefined') return;
    var about = SITE_CONFIG.about;

    var img = document.querySelector('.about-photo img');
    if (img) {
      img.src = about.image;
      img.alt = about.imageAlt;
    }

    setTextContent('.about-content h2', about.headline);
    setTextContent('[data-about="intro"]', about.intro);
    setTextContent('[data-about="story"]', about.story);
    setTextContent('[data-about="approach"]', about.approach);
    setTextContent('[data-about="personal"]', about.personal);

    var reasonsList = document.querySelector('.about-reasons');
    if (reasonsList && about.reasons) {
      reasonsList.innerHTML = '';
      about.reasons.forEach(function (reason) {
        var li = document.createElement('li');
        li.textContent = reason;
        reasonsList.appendChild(li);
      });
    }
  }

  /* ─── CREDENTIALS (About page) ─────────────────────────── */
  function renderCredentials() {
    if (typeof SITE_CONFIG === 'undefined') return;
    var grid = document.querySelector('.credentials-grid');
    if (!grid) return;

    grid.innerHTML = '';
    SITE_CONFIG.stats.forEach(function (stat) {
      var div = document.createElement('div');
      div.className = 'credential-item reveal';
      div.innerHTML = '<h3>' + stat.number + '</h3><p>' + stat.label + '</p>';
      grid.appendChild(div);
    });

    setupScrollReveal();
  }

  /* ─── SERVICE SECTIONS (Services page) ──────────────────── */
  function renderServiceSections() {
    if (typeof SERVICES_DATA === 'undefined') return;
    var container = document.getElementById('service-sections');
    if (!container) return;

    container.innerHTML = '';

    SERVICES_DATA.forEach(function (service, index) {
      var section = document.createElement('section');
      section.id = service.id;
      section.className = 'service-section';

      var includesHtml = service.includes.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');

      var processHtml = service.process.map(function (step) {
        return '<li>' + step + '</li>';
      }).join('');

      section.innerHTML =
        '<div class="container">' +
          '<div class="service-layout">' +
            '<div class="service-image reveal">' +
              '<img src="' + service.image + '" alt="' + service.imageAlt + '" loading="lazy">' +
            '</div>' +
            '<div class="service-details reveal">' +
              '<h2>' + service.name + '</h2>' +
              '<p class="service-subtitle">' + service.subtitle + '</p>' +
              '<p class="service-description">' + service.description + '</p>' +
              '<h3>What\'s Included</h3>' +
              '<ul class="service-includes">' + includesHtml + '</ul>' +
              '<h3>The Process</h3>' +
              '<ol class="service-process">' + processHtml + '</ol>' +
              '<div class="service-pricing">' +
                '<span class="price">$' + service.price + '</span>' +
              '</div>' +
              '<div class="service-testimonial">' +
                '<p class="quote">"' + service.testimonial.quote + '"</p>' +
                '<p class="author">\u2014 ' + service.testimonial.author + '</p>' +
              '</div>' +
              '<div class="service-cta">' +
                '<a href="' + service.ctaBook + '" class="btn-primary">Book This Session</a>' +
                '<a href="' + service.ctaGallery + '" class="btn-outline">View Gallery</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      container.appendChild(section);
    });

    setupScrollReveal();

    // Handle hash scrolling after render
    if (window.location.hash) {
      var target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(function () {
          var headerOffset = 90;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 300);
      }
    }
  }

  /* ─── FAQs (Contact page) ──────────────────────────────── */
  function renderFAQs() {
    if (typeof SITE_CONFIG === 'undefined') return;
    var container = document.querySelector('.contact-faqs .faq-list');
    if (!container) return;

    container.innerHTML = '';
    SITE_CONFIG.faqs.forEach(function (faq) {
      var div = document.createElement('div');
      div.className = 'faq-item';
      div.innerHTML = '<strong>' + faq.question + '</strong><p>' + faq.answer + '</p>';
      container.appendChild(div);
    });
  }

  /* ─── HELPER ──────────────────────────────────────────── */
  function setTextContent(selector, text) {
    var el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  }

})();
