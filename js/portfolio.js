/**
 * ============================================
 * Gerald Creates - Portfolio JavaScript
 * ============================================
 * Handles: Portfolio grid rendering, category filtering,
 * lightbox with keyboard/touch navigation, URL hash sync.
 * ============================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initPortfolio);

  var currentItems = [];    // currently visible items (filtered)
  var allItems = [];        // all rendered DOM items
  var currentIndex = 0;
  var lightbox, lightboxImg, lightboxCounter;

  function initPortfolio() {
    var grid = document.querySelector('.portfolio-grid-section .portfolio-grid');
    if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;

    renderPortfolioGrid(grid);
    setupFilters();
    setupLightbox();
    handleInitialHash();
  }

  /* ─── RENDER PORTFOLIO GRID ────────────────────────────── */
  function renderPortfolioGrid(grid) {
    grid.innerHTML = '';

    PORTFOLIO_DATA.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'portfolio-item reveal';
      div.setAttribute('data-category', item.category);
      div.setAttribute('data-id', item.id);
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-label', 'View photo: ' + item.alt);

      div.innerHTML =
        '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
        '<div class="portfolio-overlay">' +
          '<span class="portfolio-category">' + formatCategory(item.category) + '</span>' +
        '</div>';

      grid.appendChild(div);
    });

    allItems = Array.from(grid.querySelectorAll('.portfolio-item'));
    currentItems = allItems.slice();

    // Scroll reveal for new elements
    setupGridReveal();
  }

  /* ─── CATEGORY FILTER ──────────────────────────────────── */
  function setupFilters() {
    var filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        // Filter items with animation
        filterItems(filter);

        // Update URL hash
        if (filter === 'all') {
          history.replaceState(null, '', window.location.pathname);
        } else {
          history.replaceState(null, '', '#' + filter);
        }
      });
    });
  }

  function filterItems(filter) {
    currentItems = [];

    allItems.forEach(function (item) {
      var category = item.getAttribute('data-category');
      var shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        item.style.display = '';
        item.classList.remove('revealed');
        // Trigger re-animation
        requestAnimationFrame(function () {
          item.classList.add('revealed');
        });
        currentItems.push(item);
      } else {
        item.style.display = 'none';
      }
    });
  }

  /* ─── HANDLE INITIAL URL HASH ──────────────────────────── */
  function handleInitialHash() {
    var hash = window.location.hash.replace('#', '');
    if (hash && ['couples', 'maternity', 'unscripted'].indexOf(hash) > -1) {
      var btn = document.querySelector('.filter-btn[data-filter="' + hash + '"]');
      if (btn) btn.click();
    }
  }

  /* ─── LIGHTBOX ─────────────────────────────────────────── */
  function setupLightbox() {
    lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightboxImg = document.getElementById('lightbox-image');
    lightboxCounter = lightbox.querySelector('.lightbox-counter');

    // Click on portfolio item to open
    var grid = document.querySelector('.portfolio-grid-section .portfolio-grid');
    if (grid) {
      grid.addEventListener('click', function (e) {
        var item = e.target.closest('.portfolio-item');
        if (!item) return;
        var index = currentItems.indexOf(item);
        if (index > -1) openLightbox(index);
      });

      // Keyboard activation (Enter/Space on focused item)
      grid.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          var item = e.target.closest('.portfolio-item');
          if (!item) return;
          e.preventDefault();
          var index = currentItems.indexOf(item);
          if (index > -1) openLightbox(index);
        }
      });
    }

    // Close button
    var closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Navigation buttons
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    // Click outside image to close
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    });

    // Touch/swipe support
    var touchStartX = 0;
    var touchStartY = 0;

    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
      var diffX = touchStartX - e.changedTouches[0].screenX;
      var diffY = touchStartY - e.changedTouches[0].screenY;

      // Only handle horizontal swipes (not vertical scroll)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
    }, { passive: true });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trap focus
    lightbox.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';

    // Return focus to the portfolio item
    if (currentItems[currentIndex]) {
      currentItems[currentIndex].focus();
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    var item = currentItems[currentIndex];
    if (!item) return;

    var img = item.querySelector('img');
    if (img) {
      // Swap to larger version for lightbox
      var src = img.src.replace(/w=600/, 'w=1200').replace(/h=750/, 'h=1500');
      lightboxImg.src = src;
      lightboxImg.alt = img.alt;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentItems.length;
    }
  }

  /* ─── HELPERS ──────────────────────────────────────────── */
  function formatCategory(cat) {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }

  function setupGridReveal() {
    if (!('IntersectionObserver' in window)) {
      allItems.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    allItems.forEach(function (el) { observer.observe(el); });
  }

})();
