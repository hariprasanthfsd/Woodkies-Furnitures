/**
 * Woodkies Woods and Furnitures - Main Application Logic
 */

import { siteData } from './data.js';
import { initHeroScroll } from './hero-scroll.js';

// Application State
const state = {
  cart: JSON.parse(localStorage.getItem('woodkies_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('woodkies_wishlist') || '[]'),
  selectedFilter: 'all',
  activeProductForModal: null,
  theme: localStorage.getItem('woodkies_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeroScroll();
  initNavbar();
  renderCategories();
  renderFeaturedProducts();
  renderRooms();
  renderNewArrivals();
  renderWhyFeatures();
  renderReviews();
  renderGallery();
  initCustomFurnitureModal();
  initQuickViewModal();
  initDrawers();
  initForms();
  initScrollAnimations();
  updateCartBadge();
  updateWishlistBadge();
});

/* ==========================================================================
   THEME SWITCH (Natural Light / Atelier Dark)
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeLabels();

  const toggleBtn = document.getElementById('theme-toggle-btn');
  const mobileToggleBtn = document.getElementById('mobile-theme-toggle-btn');

  toggleBtn?.addEventListener('click', toggleTheme);
  mobileToggleBtn?.addEventListener('click', toggleTheme);

  // Sync with OS color scheme if not explicitly set
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('woodkies_theme')) {
      state.theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      updateThemeLabels();
    }
  });
}

function updateThemeLabels() {
  const mobileLabel = document.getElementById('mobile-theme-label');
  if (mobileLabel) {
    mobileLabel.textContent = state.theme === 'dark' ? 'Natural Light' : 'Atelier Dark';
  }
}

window.toggleTheme = () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('woodkies_theme', state.theme);
  updateThemeLabels();
};

/* ==========================================================================
   NAVBAR INTERACTIONS
   ========================================================================== */
function initNavbar() {
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const closeMobileNavBtn = document.querySelector('.close-mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  // Sticky transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarWrapper?.classList.add('scrolled');
    } else {
      navbarWrapper?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeNav = () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeMobileNavBtn?.addEventListener('click', closeNav);
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeNav();
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeNav);
    });
  }

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   RENDER 3. FURNITURE CATEGORIES
   ========================================================================== */
function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  container.innerHTML = siteData.categories.map((cat, idx) => `
    <div class="category-card ${cat.gridSpan} reveal-on-scroll delay-${(idx % 4) + 1}" data-category-id="${cat.id}">
      <div class="category-card-img-wrap">
        <img src="${cat.image}" alt="${cat.name} Collection" loading="lazy" />
      </div>
      <div class="category-card-overlay"></div>
      <div class="category-card-content">
        <div class="category-info">
          <h3>${cat.name}</h3>
          <span class="category-count">${cat.itemCount} Designs</span>
        </div>
        <button class="category-arrow-btn" aria-label="Browse ${cat.name}" onclick="filterProductsByCategory('${cat.id}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Universal filter matcher that connects pills and category cards to products
function matchProductFilter(product, filter) {
  if (!filter || filter === 'all') return true;
  const f = filter.toLowerCase().replace(/[-_]/g, ' ').trim();
  const cat = (product.category || '').toLowerCase().replace(/[-_]/g, ' ').trim();
  const rm = (product.room || '').toLowerCase().replace(/[-_]/g, ' ').trim();
  const name = (product.name || '').toLowerCase();

  if (f === 'all') return true;
  if (f === 'living room') return rm === 'living room' || cat.includes('sofa') || cat.includes('chair') || cat.includes('tv') || cat.includes('living');
  if (f === 'dining' || f === 'dining room' || f === 'dining tables') return rm.includes('dining') || cat.includes('dining') || cat.includes('table');
  if (f === 'bedroom' || f === 'beds') return rm.includes('bedroom') || cat.includes('bed') || cat.includes('wardrobe') || cat.includes('nightstand');
  if (f === 'workspace' || f === 'home office' || f === 'office furniture') return rm.includes('office') || cat.includes('office') || cat.includes('bookshelf') || cat.includes('desk');
  if (f === 'sofas') return cat.includes('sofa') || name.includes('sofa') || name.includes('sectional');
  if (f === 'chairs') return cat.includes('chair') || name.includes('chair') || name.includes('armchair');
  if (f === 'tables' || f === 'dining tables') return cat.includes('table') || name.includes('table');
  if (f === 'beds') return cat.includes('bed') || name.includes('bed') || name.includes('daybed');
  if (f === 'wardrobes') return cat.includes('wardrobe');
  if (f === 'tv units' || f === 'tvunits') return cat.includes('tv') || name.includes('console');
  if (f === 'storage') return cat.includes('wardrobe') || cat.includes('tv') || cat.includes('credenza') || cat.includes('bookshelf') || cat.includes('nightstand') || cat.includes('storage');
  if (f === 'outdoor' || f === 'outdoor furniture') return rm.includes('outdoor') || cat.includes('outdoor') || name.includes('outdoor') || name.includes('patio') || name.includes('lounger');

  return cat.includes(f) || rm.includes(f) || f.includes(cat) || name.includes(f);
}

// Global filter helper for category buttons
window.filterProductsByCategory = (catId) => {
  const featuredSection = document.getElementById('featured');
  if (featuredSection) {
    const headerOffset = 90;
    const elementPosition = featuredSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    // Update active filter pill
    const pills = document.querySelectorAll('.featured-filter-bar .filter-pill');
    let matchedPill = null;
    const norm = catId.toLowerCase().replace(/[-_]/g, '');
    pills.forEach(p => {
      const pFilter = (p.dataset.filter || '').toLowerCase().replace(/[-_]/g, '');
      if (pFilter === norm || p.dataset.filter === catId || norm.includes(pFilter) || pFilter.includes(norm)) {
        if (!matchedPill) matchedPill = p;
      }
    });

    if (matchedPill) {
      matchedPill.click();
    } else if (window._renderFeatured) {
      pills.forEach(p => p.classList.remove('active'));
      window._renderFeatured(catId);
    }
  }
};

/* ==========================================================================
   RENDER 4. FEATURED FURNITURE PRODUCTS
   ========================================================================== */
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  const filterPills = document.querySelectorAll('.featured-filter-bar .filter-pill');
  if (!container) return;

  const render = (filter = 'all') => {
    let list = siteData.featuredProducts;
    if (filter && filter !== 'all') {
      list = list.filter(p => matchProductFilter(p, filter));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; width: 100%; text-align: center; padding: 3rem 1rem;">
          <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">No items found for this selection</p>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">Browse our entire collection or contact our atelier for custom woodwork.</p>
          <button class="filter-pill active" onclick="window.filterProductsByCategory('all')">View All Pieces</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((product, idx) => {
      const isWishlisted = state.wishlist.includes(product.id);
      return `
        <article class="product-card reveal-on-scroll revealed delay-${(idx % 4) + 1}" data-product-id="${product.id}">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" class="product-image-primary" loading="lazy" />
            <span class="product-badge">${product.badge}</span>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    aria-label="Save ${product.name} to wishlist" 
                    onclick="toggleWishlist('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="product-quick-view-btn" onclick="openQuickView('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Quick View
            </button>
          </div>
          <div class="product-body">
            <span class="product-category-meta">${product.category}</span>
            <h4 class="product-name" onclick="openQuickView('${product.id}')" style="cursor:pointer">${product.name}</h4>
            <div class="product-rating">
              <span class="star-rating">
                ${'★'.repeat(Math.floor(product.rating))}
              </span>
              <span>${product.rating.toFixed(1)}</span>
              <span class="review-count">(${product.reviewCount})</span>
            </div>
            <div class="product-footer">
              <div class="product-price-wrap">
                <span class="product-price">$${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
              </div>
              <button class="product-details-btn" onclick="openQuickView('${product.id}')">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  };

  window._renderFeatured = render;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      render(pill.dataset.filter);
    });
  });

  render('all');
}

/* ==========================================================================
   RENDER 5. SHOP BY ROOM
   ========================================================================== */
function renderRooms() {
  const container = document.getElementById('rooms-grid');
  if (!container) return;

  container.innerHTML = siteData.rooms.map((room, idx) => `
    <div class="room-card reveal-on-scroll delay-${(idx % 3) + 1}" onclick="filterProductsByCategory('${room.id}')">
      <img src="${room.image}" alt="${room.name}" class="room-img" loading="lazy" />
      <div class="room-overlay"></div>
      <div class="room-content">
        <span class="room-meta">${room.itemCount} Curated Pieces</span>
        <h3 class="room-name">${room.name}</h3>
        <p class="room-subtitle">${room.subtitle}</p>
        <span class="room-cta">
          Explore Room 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER 6. NEW ARRIVALS
   ========================================================================== */
function renderNewArrivals() {
  const container = document.getElementById('arrivals-carousel');
  const prevBtn = document.getElementById('arrivals-prev');
  const nextBtn = document.getElementById('arrivals-next');
  const filterPills = document.querySelectorAll('.arrivals-filter-bar .filter-pill');
  if (!container) return;

  const render = (filter = 'all') => {
    let list = siteData.newArrivals;
    if (filter && filter !== 'all') {
      list = list.filter(p => matchProductFilter(p, filter));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; width: 100%; text-align: center; padding: 2.5rem 1rem;">
          <p style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">New releases in this category are coming soon.</p>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Explore our other new arrivals or handcrafted heirloom collection.</p>
          <button class="filter-pill active" onclick="window._renderArrivals('all')">View All New</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((product, idx) => {
      const isWishlisted = state.wishlist.includes(product.id);
      return `
        <article class="product-card arrival-card reveal-on-scroll revealed delay-${(idx % 4) + 1}" data-product-id="${product.id}">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" class="product-image-primary" loading="lazy" />
            <span class="product-badge badge-new">NEW</span>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    aria-label="Save ${product.name} to wishlist" 
                    onclick="toggleWishlist('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="product-quick-view-btn" onclick="openQuickView('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Quick View
            </button>
          </div>
          <div class="product-body">
            <span class="product-category-meta">${product.category}</span>
            <h4 class="product-name" onclick="openQuickView('${product.id}')" style="cursor:pointer">${product.name}</h4>
            <div class="product-rating">
              <span class="star-rating">
                ${'★'.repeat(Math.floor(product.rating))}
              </span>
              <span>${product.rating.toFixed(1)}</span>
              <span class="review-count">(${product.reviewCount})</span>
            </div>
            <div class="product-footer">
              <div class="product-price-wrap">
                <span class="product-price">$${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
              </div>
              <button class="product-details-btn" onclick="openQuickView('${product.id}')">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  };

  window._renderArrivals = (filter) => {
    filterPills.forEach(p => {
      if (p.dataset.filter === filter) p.classList.add('active');
      else p.classList.remove('active');
    });
    render(filter);
  };

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      render(pill.dataset.filter);
    });
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  render('all');
}

/* ==========================================================================
   RENDER 9. WHY CHOOSE WOODKIES
   ========================================================================== */
function renderWhyFeatures() {
  const container = document.getElementById('why-features-grid');
  if (!container) return;

  const icons = {
    carpentry: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    'wood-shield': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    'custom-measure': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    'hourglass-clock': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>`,
    'concierge-star': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  };

  container.innerHTML = siteData.features.map((feat, idx) => `
    <div class="why-feature-card reveal-on-scroll delay-${idx + 1}">
      <div class="why-icon-box">
        ${icons[feat.icon] || icons.carpentry}
      </div>
      <h3>${feat.title}</h3>
      <p>${feat.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER 11. CUSTOMER REVIEWS
   ========================================================================== */
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;

  container.innerHTML = siteData.reviews.map((rev, idx) => `
    <div class="review-card reveal-on-scroll delay-${idx + 1}">
      <div>
        <div class="review-stars">
          ${'★'.repeat(rev.rating)}
        </div>
        <p class="review-text">“${rev.review}”</p>
        <div class="review-purchased-badge">${rev.product}</div>
      </div>
      <div class="review-author">
        <img src="${rev.avatar}" alt="${rev.name}" class="review-avatar" loading="lazy" />
        <div class="review-author-info">
          <h4>${rev.name}</h4>
          <p>${rev.location}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER 12. FURNITURE GALLERY / INSPIRATION
   ========================================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-masonry');
  if (!container) return;

  container.innerHTML = siteData.gallery.map((item, idx) => `
    <div class="gallery-item reveal-on-scroll delay-${(idx % 3) + 1}" onclick="openQuickView('${item.productId}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="gallery-hover-overlay">
        <span class="gallery-tag">Lookbook Curated</span>
        <div class="gallery-bottom-info">
          <div>
            <h4 class="gallery-product-title">${item.productName}</h4>
            <p style="color: #f1ede8; font-size: 0.85rem;">${item.title}</p>
          </div>
          <button class="gallery-action-link">
            View Product
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   CART & WISHLIST MANAGEMENT
   ========================================================================== */
window.addToCart = (productId, selectedWood = null, quantity = 1) => {
  const product = [...siteData.featuredProducts, ...siteData.newArrivals].find(p => p.id === productId);
  if (!product) return;

  const wood = selectedWood || (product.woodOptions ? product.woodOptions[0] : 'Natural Oak');
  const existingIndex = state.cart.findIndex(item => item.id === productId && item.wood === wood);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      wood: wood,
      quantity: quantity
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added "${product.name}" to your cart.`, 'cart');
};

window.removeFromCart = (index) => {
  state.cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast('Item removed from cart.', 'info');
};

window.updateCartQty = (index, delta) => {
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
};

function saveCart() {
  localStorage.setItem('woodkies_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

window.toggleWishlist = (productId) => {
  const index = state.wishlist.indexOf(productId);
  const product = [...siteData.featuredProducts, ...siteData.newArrivals].find(p => p.id === productId);
  const name = product ? product.name : 'Piece';

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${name}" from Liked Collection.`, 'heart');
  } else {
    state.wishlist.push(productId);
    showToast(`Added "${name}" to Liked Collection.`, 'heart');
  }

  localStorage.setItem('woodkies_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderFeaturedProducts();
  renderNewArrivals();
  renderWishlistDrawer();
};

function updateWishlistBadge() {
  const count = state.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-badge-count');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

/* ==========================================================================
   DRAWERS (Liked Collection)
   ========================================================================== */
function initDrawers() {
  const backdrop = document.getElementById('drawer-backdrop');

  // Trigger buttons for Liked Collection
  document.querySelectorAll('.open-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', openWishlistDrawer);
  });

  // Close buttons
  document.querySelectorAll('.close-drawer-btn').forEach(btn => {
    btn.addEventListener('click', closeAllDrawers);
  });

  backdrop?.addEventListener('click', closeAllDrawers);
}

window.openWishlistDrawer = () => {
  window.closeAllDrawers();
  renderWishlistDrawer();
  document.getElementById('drawer-backdrop')?.classList.add('active');
  document.getElementById('wishlist-drawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeAllDrawers = () => {
  document.getElementById('drawer-backdrop')?.classList.remove('active');
  document.getElementById('wishlist-drawer')?.classList.remove('active');
  document.getElementById('mobile-nav-drawer')?.classList.remove('active');
  document.body.style.overflow = '';
};

const openWishlistDrawer = window.openWishlistDrawer;
const closeAllDrawers = window.closeAllDrawers;

function renderCartDrawer() {
  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-drawer-count');
  const checkoutBtn = document.getElementById('checkout-action-btn');

  if (!container) return;

  const totalCount = state.cart.reduce((t, i) => t + i.quantity, 0);
  if (countEl) countEl.textContent = `(${totalCount} item${totalCount === 1 ? '' : 's'})`;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Explore our crafted collection and discover timeless furniture for your home.</p>
        <button class="btn-pill btn-primary" onclick="closeAllDrawers(); window.location.hash='#featured';">Explore Collection</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0';
    if (totalEl) totalEl.textContent = '$0';
    if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
    return;
  }

  const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  container.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-option">${item.wood}</span>
        <div style="display:flex; align-items:center; gap: 0.8rem; margin-top:0.4rem;">
          <div class="quantity-control">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remove item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toLocaleString()}`;
  if (checkoutBtn) checkoutBtn.style.opacity = '1';
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-items-list');
  const countEl = document.getElementById('wishlist-drawer-count');
  if (!container) return;

  const allProducts = [...siteData.featuredProducts, ...siteData.newArrivals];
  const items = allProducts.filter(p => state.wishlist.includes(p.id));

  if (countEl) countEl.textContent = `(${items.length} piece${items.length === 1 ? '' : 's'})`;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h4>Your Liked Collection is Empty</h4>
        <p>Save pieces that inspire your spaces and revisit them at your leisure.</p>
        <button class="btn-pill btn-primary" onclick="closeAllDrawers(); const f = document.getElementById('featured'); if (f) f.scrollIntoView({behavior:'smooth'});">Explore Pieces</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <h4 class="cart-item-name">${product.name}</h4>
        <span class="cart-item-option">${product.category}</span>
        <span class="cart-item-price">$${product.price.toLocaleString()}</span>
        <div style="margin-top:0.6rem;">
          <button class="product-details-btn" style="padding:0.35rem 0.75rem; font-size:0.78rem;" onclick="viewLikedPieceDetails('${product.id}')">
            View Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="toggleWishlist('${product.id}')" aria-label="Remove from Liked Collection">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   PRODUCT QUICK VIEW MODAL
   ========================================================================== */
function initQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
  const closeBtn = document.getElementById('close-quick-view-btn');
  const backdrop = modal?.querySelector('.modal-backdrop-layer');

  const closeModal = () => {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
}

window.viewLikedPieceDetails = (productId) => {
  window.closeAllDrawers();
  window.openQuickView(productId);
};

window.openQuickView = (productId) => {
  window.closeAllDrawers();
  const product = [...siteData.featuredProducts, ...siteData.newArrivals].find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const container = document.getElementById('quick-view-content');
  if (!modal || !container) return;

  let selectedWood = product.woodOptions ? product.woodOptions[0] : 'Natural Oak';

  container.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-image-col">
        <img src="${product.image}" alt="${product.name}" id="modal-primary-img" />
      </div>
      <div class="quick-view-content-col">
        <span class="quick-view-category">${product.category}</span>
        <h3 class="quick-view-title">${product.name}</h3>
        <div class="product-rating" style="margin-bottom:0.75rem;">
          <span class="star-rating">★★★★★</span>
          <span>${product.rating.toFixed(1)}</span>
          <span class="review-count">(${product.reviewCount} customer reviews)</span>
        </div>
        <div class="quick-view-price">$${product.price.toLocaleString()}</div>
        <p class="quick-view-desc">${product.description || 'Artisanal furniture piece carefully crafted with hand-selected FSC® certified hardwoods and organic wax finishes.'}</p>
        
        ${product.woodOptions ? `
          <div class="swatches-wrap">
            <div class="swatches-title">Select Hardwood Finish: <span id="selected-wood-label" style="font-weight:400; color:var(--color-accent);">${selectedWood}</span></div>
            <div class="swatches-list">
              ${product.woodOptions.map((wood, i) => `
                <button class="swatch-pill ${i === 0 ? 'active' : ''}" onclick="selectWoodSwatch(this, '${wood}')">
                  ${wood}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="spec-list">
          <div class="spec-item">
            <span>Dimensions</span>
            <strong>${product.dimensions || 'Standard Showroom Spec'}</strong>
          </div>
          <div class="spec-item">
            <span>Materials</span>
            <strong>${product.materials || 'Solid Sustainable Hardwood'}</strong>
          </div>
        </div>

        <div style="display:flex; gap:0.75rem; align-items:center; margin-top:auto;">
          <button class="btn-pill btn-primary" style="flex-grow:1; padding:0.9rem;" onclick="inquireAboutPiece('${product.name}', window.currentModalWood)">
            Inquire About This Piece
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <button class="icon-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" style="width:48px; height:48px; flex-shrink:0;" onclick="toggleWishlist('${product.id}')" aria-label="Save to Liked Collection" title="Save to Liked Collection">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${state.wishlist.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  window.currentModalWood = selectedWood;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.inquireAboutPiece = (productName, wood) => {
  const qvModal = document.getElementById('quick-view-modal');
  if (qvModal) qvModal.classList.remove('active');
  document.body.style.overflow = '';

  const modal = document.getElementById('custom-furniture-modal');
  const notesField = document.getElementById('cf-notes');
  const woodField = document.getElementById('cf-wood');
  const eyebrow = document.getElementById('cf-modal-eyebrow');
  const title = document.getElementById('cf-modal-title');
  const desc = document.getElementById('cf-modal-desc');

  if (eyebrow) eyebrow.textContent = 'PIECE INQUIRY';
  if (title) title.textContent = `Inquire About ${productName}`;
  if (desc) desc.textContent = `Send your inquiry to our atelier regarding the ${productName}. We will confirm current availability, timber finish choices, and delivery timeline.`;

  if (notesField) {
    notesField.value = `Hello Woodkies Atelier,\n\nI would like to inquire about the "${productName}" in ${wood || 'Natural Oak'} finish. Please let me know lead times, custom options, and showroom availability.`;
  }

  if (wood && woodField) {
    for (let opt of woodField.options) {
      if (opt.value.toLowerCase().includes(wood.toLowerCase()) || wood.toLowerCase().includes(opt.value.toLowerCase())) {
        woodField.value = opt.value;
        break;
      }
    }
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const nameField = document.getElementById('cf-name');
    if (nameField) nameField.focus();
  } else {
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  }
};

window.inquireAboutLikedPieces = () => {
  window.closeAllDrawers();

  const allProducts = [...siteData.featuredProducts, ...siteData.newArrivals];
  const likedProducts = allProducts.filter(p => state.wishlist.includes(p.id));

  if (likedProducts.length === 0) {
    const featuredSec = document.getElementById('featured');
    if (featuredSec) {
      featuredSec.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Your Liked Collection is currently empty. Explore our catalog to save pieces first!', 'info');
    return;
  }

  const modal = document.getElementById('custom-furniture-modal');
  const notesField = document.getElementById('cf-notes');
  const categoryField = document.getElementById('cf-category');
  const eyebrow = document.getElementById('cf-modal-eyebrow');
  const title = document.getElementById('cf-modal-title');
  const desc = document.getElementById('cf-modal-desc');

  if (eyebrow) eyebrow.textContent = 'COLLECTION INQUIRY';
  if (title) title.textContent = 'Inquire About Liked Pieces';
  if (desc) desc.textContent = 'Review your saved pieces below and send your inquiry to our showroom concierge for immediate availability, pricing, and finish consultation.';

  if (notesField) {
    const listStr = likedProducts.map(p => `• ${p.name} ($${p.price.toLocaleString()})`).join('\n');
    notesField.value = `Hello Woodkies Atelier,\n\nI would like to inquire about the following pieces from my Liked Collection:\n${listStr}\n\nPlease share details on current availability, custom timber finishes, and delivery lead times.`;
  }

  if (likedProducts.length === 1 && categoryField) {
    const cat = likedProducts[0].category;
    for (let opt of categoryField.options) {
      if (opt.value.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(opt.value.toLowerCase())) {
        categoryField.value = opt.value;
        break;
      }
    }
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const nameField = document.getElementById('cf-name');
    if (nameField) nameField.focus();
  } else {
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  }
};

window.selectWoodSwatch = (btn, wood) => {
  document.querySelectorAll('.swatch-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.currentModalWood = wood;
  const label = document.getElementById('selected-wood-label');
  if (label) label.textContent = wood;
};

/* ==========================================================================
   CUSTOM FURNITURE REQUEST MODAL
   ========================================================================== */
function initCustomFurnitureModal() {
  const modal = document.getElementById('custom-furniture-modal');
  const openBtns = document.querySelectorAll('.open-custom-modal-btn');
  const closeBtn = document.getElementById('close-custom-modal-btn');
  const backdrop = modal?.querySelector('.modal-backdrop-layer');
  const form = document.getElementById('custom-furniture-form');

  const openModal = () => {
    const eyebrow = document.getElementById('cf-modal-eyebrow');
    const title = document.getElementById('cf-modal-title');
    const desc = document.getElementById('cf-modal-desc');
    if (eyebrow) eyebrow.textContent = 'BESPOKE ATELIER COMMISSION';
    if (title) title.textContent = 'Request Custom Furniture';
    if (desc) desc.textContent = 'Tell us about your room, target dimensions, preferred hardwood, and finishes. A Woodkies master craftsman will prepare an architectural rendering and initial estimate within 24 hours.';
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
    showToast('Your inquiry has been submitted! Our concierge will contact you shortly.', 'check');
    form.reset();
  });
}

/* ==========================================================================
   FORMS & SUBSCRIPTIONS
   ========================================================================== */
function initForms() {
  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input && input.value) {
      showToast(`Welcome! We've sent a 10% welcome invitation to ${input.value}.`, 'check');
      input.value = '';
    }
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you! Your showroom consultation request has been received.', 'check');
    contactForm.reset();
  });

  // Checkout simulation
  const checkoutBtn = document.getElementById('checkout-action-btn');
  checkoutBtn?.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    closeAllDrawers();
    showToast('Proceeding to secure showroom checkout...', 'check');
    setTimeout(() => {
      state.cart = [];
      saveCart();
      updateCartBadge();
      showToast('Order confirmed! Thank you for choosing Woodkies.', 'check');
    }, 1500);
  });
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-pill';

  const icons = {
    cart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    heart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    sun: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>`,
    moon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    info: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}
window.showToast = showToast;

/* ==========================================================================
   SCROLL REVEAL & STATS COUNTER ANIMATION
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // Stat Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatNumber(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => statObserver.observe(num));
}

function animateStatNumber(el) {
  const target = parseInt(el.getAttribute('data-target') || '0', 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.floor(easeProgress * target);

    el.textContent = currentVal.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}
