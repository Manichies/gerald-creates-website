/**
 * ============================================
 * Gerald Creates - Portfolio JavaScript
 * ============================================
 * Handles: Portfolio grid rendering, category filtering,
 * client session cards (maternity, graduation) → gallery overlay → lightbox.
 * ============================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    fetch('data/portfolio-data.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        window.PORTFOLIO_DATA = data.photos;
        window.CLIENT_SESSIONS = {
          maternity: data.maternity_clients || [],
          graduation: data.graduation_clients || []
        };
        initPortfolio();
      })
      .catch(function () {
        initPortfolio();
      });
  });

  var currentItems = [];  // visible portfolio-item DOM nodes
  var allItems = [];      // all portfolio-item DOM nodes
  var currentIndex = 0;
  var lightbox, lightboxImg, lightboxCounter;

  // Client gallery lightbox state
  var clientPhotos = [];
  var clientIndex = 0;
  var isClientMode = false;

  function initPortfolio() {
    var grid = document.querySelector('.portfolio-grid-section .portfolio-grid');
    if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;

    renderPortfolioGrid(grid);
    renderClientSessionSections(grid);
    createClientGalleryOverlay();
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
      div.setAttribute('data-full', cldImg(item.src, 2000));
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-label', 'View photo: ' + item.alt);

      div.innerHTML =
        '<img src="' + cldImg(item.src, 800) + '" alt="' + item.alt + '" loading="lazy">' +
        '<div class="portfolio-overlay">' +
          '<span class="portfolio-category">' + formatCategory(item.category) + '</span>' +
        '</div>';

      grid.appendChild(div);
    });

    allItems = Array.from(grid.querySelectorAll('.portfolio-item'));
    currentItems = allItems.slice();
    setupGridReveal();
  }

  /* ─── CLIENT SESSION CARDS (3-up grid, single cover) ───── */
  // One hidden section per category that has client sessions
  // (maternity, graduation); shown when that filter is picked.
  function renderClientSessionSections(grid) {
    if (typeof CLIENT_SESSIONS === 'undefined') return;

    Object.keys(CLIENT_SESSIONS).forEach(function (category) {
      var clients = CLIENT_SESSIONS[category];
      if (!clients.length) return;

      var section = document.createElement('div');
      section.className = 'client-sessions-section';
      section.setAttribute('data-category', category);
      section.style.display = 'none';

      clients.forEach(function (client) {
        section.appendChild(createClientCard(client));
      });

      grid.parentNode.insertBefore(section, grid.nextSibling);
    });
  }

  function createClientCard(client) {
    var cover = client.photos[0];

    var card = document.createElement('div');
    card.className = 'client-card reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', client.name + ' — ' + client.photos.length + ' photos');

    card.innerHTML =
      '<div class="client-cover">' +
        '<img src="' + cldImg(cover.src, 800) + '" alt="' + cover.alt + '" loading="lazy">' +
        '<img src="' + cldImg(cover.src, 800) + '" alt="' + cover.alt + '" loading="lazy" aria-hidden="true">' +
      '</div>' +
      '<div class="client-card-footer">' +
        '<span class="client-name">' + client.name + '</span>' +
        '<span class="client-photo-count">' + client.photos.length + ' photos</span>' +
      '</div>';

    card.addEventListener('click', function () { openClientGallery(client); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openClientGallery(client); }
    });

    startCoverSlideshow(card, client);

    return card;
  }

  /* ─── COVER PHOTO SLIDESHOW ────────────────────────────── */
  function startCoverSlideshow(card, client) {
    if (client.photos.length < 2) return;

    var imgs = card.querySelectorAll('.client-cover img');
    if (imgs.length < 2) return;

    var topImg = imgs[0];    // z-index: 2 — visible layer
    var bottomImg = imgs[1]; // z-index: 1 — preload layer

    // Check each photo's orientation; keep only portrait ones
    var portraitPhotos = [];
    var checked = 0;

    client.photos.forEach(function (photo) {
      var probe = new Image();
      probe.onload = function () {
        if (this.naturalHeight >= this.naturalWidth) {
          portraitPhotos.push(photo);
        }
        checked++;
        if (checked === client.photos.length && portraitPhotos.length > 1) {
          runSlideshow(topImg, bottomImg, portraitPhotos);
        }
      };
      probe.onerror = function () { checked++; };
      probe.src = cldImg(photo.src, 800);
    });
  }

  function runSlideshow(topImg, bottomImg, photos) {
    var idx = 0;

    setInterval(function () {
      idx = (idx + 1) % photos.length;
      var next = photos[idx];

      // 1. Load next photo into the hidden bottom layer
      bottomImg.src = cldImg(next.src, 800);
      bottomImg.alt = next.alt;

      // 2. Once loaded, fade top layer out — bottom shows through seamlessly
      bottomImg.onload = function () {
        topImg.style.opacity = '0';

        // 3. After fade completes, promote bottom to top and reset
        setTimeout(function () {
          topImg.src = cldImg(next.src, 800);
          topImg.alt = next.alt;
          topImg.style.opacity = '1';
        }, 850); // slightly longer than the 0.8s CSS transition
      };
    }, 5000);
  }

  /* ─── CLIENT GALLERY OVERLAY ───────────────────────────── */
  function createClientGalleryOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'client-gallery';
    overlay.className = 'client-gallery-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Client photo gallery');

    overlay.innerHTML =
      '<div class="client-gallery-intro">' +
        '<div class="client-gallery-title-row">' +
          '<h2 class="client-gallery-title"></h2>' +
          '<button class="gallery-back-btn" aria-label="Back to all sessions">' +
            '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>' +
            'All Sessions' +
          '</button>' +
        '</div>' +
        '<p class="client-gallery-description"></p>' +
        '<span class="client-gallery-count"></span>' +
      '</div>' +
      '<div class="client-gallery-grid"></div>';

    document.body.appendChild(overlay);

    overlay.querySelector('.gallery-back-btn').addEventListener('click', closeClientGallery);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeClientGallery();
      }
    });
  }

  function openClientGallery(client) {
    var overlay = document.getElementById('client-gallery');
    if (!overlay) return;

    // Set header
    overlay.querySelector('.client-gallery-title').textContent = client.name;
    overlay.querySelector('.client-gallery-description').textContent = client.description || '';
    overlay.querySelector('.client-gallery-count').textContent = client.photos.length + ' photos';

    // Build masonry grid
    var grid = overlay.querySelector('.client-gallery-grid');
    grid.innerHTML = '';

    client.photos.forEach(function (photo, i) {
      var item = document.createElement('div');
      item.className = 'gallery-photo';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', 'View photo ' + (i + 1) + ' of ' + client.photos.length);

      // Landscapes show up to two columns wide, so fetch them larger
      var srcWidth = photoRatio(photo) < 1 ? 1200 : 800;
      item.innerHTML = '<img src="' + cldImg(photo.src, srcWidth) + '" alt="' + photo.alt + '" loading="lazy">';
      item._photo = photo;

      // Photos without a stored size are measured once they load
      if (!photo.width) {
        item.querySelector('img').addEventListener('load', function () { layoutGallery(grid); });
      }

      item.addEventListener('click', function () {
        openClientLightbox(client.photos, i);
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openClientLightbox(client.photos, i);
        }
      });

      grid.appendChild(item);
    });

    layoutGallery(grid);

    overlay.scrollTop = 0;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.gallery-back-btn').focus();
  }

  /* ─── GALLERY MASONRY ──────────────────────────────────── */
  // Uneven columns. Portraits drop into the shortest column; a landscape
  // spans two neighbouring columns, held back a few photos if needed until
  // two columns are nearly level. The small step left over is closed by
  // stretching the tile above it slightly (object-fit trims its sides).
  var GALLERY_GAP = 4;
  var LEVEL_TOLERANCE = 0.2;  // step a landscape can sit on (x column width)
  var MAX_RISE = 0.5;         // how far above the lowest column it may start
  var MAX_STRETCH = 0.3;      // most a tile may be stretched (x column width)
  var MAX_WAIT = 4;           // photos a landscape may be held back

  // Height / width. Uses the stored size, else the loaded image, else portrait.
  function photoRatio(photo, img) {
    if (photo.width && photo.height) return photo.height / photo.width;
    if (img && img.naturalWidth) return img.naturalHeight / img.naturalWidth;
    return 1.5;
  }

  function layoutGallery(grid) {
    var tiles = Array.prototype.slice.call(grid.querySelectorAll('.gallery-photo'));
    if (!tiles.length) return;

    var style = getComputedStyle(grid);
    var cols = parseInt(style.getPropertyValue('--gallery-cols'), 10) || 4;
    var padLeft = parseFloat(style.paddingLeft);
    var padTop = parseFloat(style.paddingTop);
    var colW = (grid.clientWidth - padLeft - parseFloat(style.paddingRight) - GALLERY_GAP * (cols - 1)) / cols;

    var heights = [];     // next free y in each column
    var lastInCol = [];   // bottom tile of each column
    for (var c = 0; c < cols; c++) { heights.push(0); lastInCol.push(null); }

    function setBox(tile, col, span, top, height) {
      tile._box = { col: col, span: span, top: top, height: height };
      for (var k = col; k < col + span; k++) {
        heights[k] = top + height + GALLERY_GAP;
        lastInCol[k] = tile;
      }
    }

    function placePortrait(tile) {
      var col = 0;
      for (var k = 1; k < cols; k++) if (heights[k] < heights[col]) col = k;
      setBox(tile, col, 1, heights[col], colW * tile._ratio);
    }

    // Returns false when no pair of neighbouring columns is level enough,
    // and low enough, yet. Keeping landscapes near the lowest column stops
    // them all stacking in the same two columns.
    function placeLandscape(tile, force) {
      var floor = Math.min.apply(null, heights);
      var col = -1, best = Infinity;
      for (var k = 0; k < cols - 1; k++) {
        var step = Math.abs(heights[k] - heights[k + 1]);
        var rise = Math.max(heights[k], heights[k + 1]) - floor;
        var ok = force || (step <= colW * LEVEL_TOLERANCE && rise <= colW * MAX_RISE);
        var score = rise + 2 * step;
        if (ok && score < best) { col = k; best = score; }
      }
      if (col < 0) return false;

      var shortCol = heights[col] < heights[col + 1] ? col : col + 1;
      var gap = Math.abs(heights[col] - heights[col + 1]);
      var above = lastInCol[shortCol];
      if (gap && above && above._box.span === 1 && gap <= colW * MAX_STRETCH) {
        above._box.height += gap;
      }

      var width = 2 * colW + GALLERY_GAP;
      setBox(tile, col, 2, Math.max(heights[col], heights[col + 1]), width * tile._ratio);
      return true;
    }

    var waiting = []; // landscapes held back, in order

    function placeWaiting(force) {
      while (waiting.length) {
        var next = waiting[0];
        if (!placeLandscape(next.tile, force || next.waited >= MAX_WAIT)) {
          waiting.forEach(function (w) { w.waited++; });
          return;
        }
        waiting.shift();
      }
    }

    tiles.forEach(function (tile) {
      tile._ratio = photoRatio(tile._photo, tile.querySelector('img'));
      if (tile._ratio < 1) {
        waiting.push({ tile: tile, waited: 0 });
      } else {
        placePortrait(tile);
      }
      placeWaiting(false);
    });
    placeWaiting(true);

    tiles.forEach(function (tile) {
      var b = tile._box;
      tile.style.left = (padLeft + b.col * (colW + GALLERY_GAP)) + 'px';
      tile.style.top = (padTop + b.top) + 'px';
      tile.style.width = (b.span * colW + (b.span - 1) * GALLERY_GAP) + 'px';
      tile.style.height = b.height + 'px';
    });

    grid.style.height = (padTop + Math.max.apply(null, heights) - GALLERY_GAP + parseFloat(style.paddingBottom)) + 'px';
  }

  var galleryResizeQueued = false;
  window.addEventListener('resize', function () {
    if (galleryResizeQueued) return;
    galleryResizeQueued = true;
    requestAnimationFrame(function () {
      galleryResizeQueued = false;
      var grid = document.querySelector('.client-gallery-overlay.active .client-gallery-grid');
      if (grid) layoutGallery(grid);
    });
  });

  function closeClientGallery() {
    var overlay = document.getElementById('client-gallery');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ─── CATEGORY FILTER ──────────────────────────────────── */
  function setupFilters() {
    var filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        filterButtons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        filterItems(filter);

        if (filter === 'all') {
          history.replaceState(null, '', window.location.pathname);
        } else {
          history.replaceState(null, '', '#' + filter);
        }
      });
    });
  }

  function filterItems(filter) {
    var grid = document.querySelector('.portfolio-grid-section .portfolio-grid');
    var sessionsSection = null;

    document.querySelectorAll('.client-sessions-section').forEach(function (section) {
      var isMatch = section.getAttribute('data-category') === filter;
      section.style.display = isMatch ? '' : 'none';
      if (isMatch) sessionsSection = section;
    });

    if (sessionsSection) {
      sessionsSection.querySelectorAll('.client-card').forEach(function (card) {
        card.classList.remove('revealed');
        requestAnimationFrame(function () { card.classList.add('revealed'); });
      });
      if (grid) grid.style.display = 'none';
      currentItems = [];
      return;
    }

    if (grid) grid.style.display = '';
    currentItems = [];

    allItems.forEach(function (item) {
      var category = item.getAttribute('data-category');
      var shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        item.style.display = '';
        item.classList.remove('revealed');
        requestAnimationFrame(function () { item.classList.add('revealed'); });
        currentItems.push(item);
      } else {
        item.style.display = 'none';
      }
    });
  }

  /* ─── HANDLE INITIAL URL HASH ──────────────────────────── */
  function handleInitialHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var btn = document.querySelector('.filter-btn[data-filter="' + hash + '"]');
    if (btn) btn.click();
  }

  /* ─── LIGHTBOX ─────────────────────────────────────────── */
  function setupLightbox() {
    lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightboxImg = document.getElementById('lightbox-image');
    lightboxCounter = lightbox.querySelector('.lightbox-counter');

    var grid = document.querySelector('.portfolio-grid-section .portfolio-grid');
    if (grid) {
      grid.addEventListener('click', function (e) {
        var item = e.target.closest('.portfolio-item');
        if (!item) return;
        var index = currentItems.indexOf(item);
        if (index > -1) openLightbox(index);
      });
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

    var closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      switch (e.key) {
        case 'Escape': closeLightbox(); break;
        case 'ArrowRight': nextImage(); break;
        case 'ArrowLeft': prevImage(); break;
      }
    });

    var touchStartX = 0, touchStartY = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var diffX = touchStartX - e.changedTouches[0].screenX;
      var diffY = touchStartY - e.changedTouches[0].screenY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) { nextImage(); } else { prevImage(); }
      }
    }, { passive: true });
  }

  function openLightbox(index) {
    isClientMode = false;
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }

  function openClientLightbox(photos, index) {
    isClientMode = true;
    clientPhotos = photos;
    clientIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    // If in client mode, restore scroll lock on gallery overlay
    if (isClientMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    isClientMode = false;
  }

  function nextImage() {
    if (isClientMode) {
      clientIndex = (clientIndex + 1) % clientPhotos.length;
    } else {
      currentIndex = (currentIndex + 1) % currentItems.length;
    }
    updateLightboxImage();
  }

  function prevImage() {
    if (isClientMode) {
      clientIndex = (clientIndex - 1 + clientPhotos.length) % clientPhotos.length;
    } else {
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    }
    updateLightboxImage();
  }

  function updateLightboxImage() {
    if (isClientMode) {
      var photo = clientPhotos[clientIndex];
      if (!photo) return;
      lightboxImg.src = cldImg(photo.src, 2000);
      lightboxImg.alt = photo.alt;
      if (lightboxCounter) {
        lightboxCounter.textContent = (clientIndex + 1) + ' / ' + clientPhotos.length;
      }
    } else {
      var item = currentItems[currentIndex];
      if (!item) return;
      var img = item.querySelector('img');
      if (img) {
        lightboxImg.src = item.getAttribute('data-full') || img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentItems.length;
      }
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
