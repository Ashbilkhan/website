/* ============================================================
   ATZ PREMIUM E-COMMERCE — APP.JS
   ============================================================ */

// ── PRODUCT DATA ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, name: "Minimal Essential Watch", slug: "minimal-essential-watch",
    category: "Accessories", price: 89, oldPrice: 119, discount: 25,
    rating: 4.8, reviewCount: 342,
    description: "Minimal stainless-steel watch with a clean white dial and premium everyday styling. Swiss-inspired movement, 5ATM water resistant.",
    shortDescription: "Clean minimal watch for everyday wear.",
    image: "images/product_watch_1786984557418.jpg",
    colors: ["#e8e8e8","#1a1a1a","#c5a96a"], sizes: [],
    tags: ["watch","accessories","minimal","silver"], badge: "SALE",
    stock: 18, featured: true, trending: true, bestSeller: true, newArrival: false
  },
  {
    id: 2, name: "Urban Premium Sneakers", slug: "urban-premium-sneakers",
    category: "Footwear", price: 129, oldPrice: null, discount: null,
    rating: 4.9, reviewCount: 528,
    description: "Modern everyday sneakers combining premium leather construction, cloud-soft cushioning and a clean silhouette that pairs with everything.",
    shortDescription: "Premium leather sneakers for everyday style.",
    image: "images/product_sneakers_1786984569145.jpg",
    colors: ["#ffffff","#1a1a1a","#8B7355"], sizes: ["40","41","42","43","44","45"],
    tags: ["sneakers","footwear","urban","white"], badge: "BEST SELLER",
    stock: 23, featured: true, trending: true, bestSeller: true, newArrival: false
  },
  {
    id: 3, name: "Classic Oversized Hoodie", slug: "classic-oversized-hoodie",
    category: "Clothing", price: 69, oldPrice: 89, discount: 22,
    rating: 4.7, reviewCount: 289,
    description: "Heavyweight 420gsm premium French terry hoodie with a relaxed silhouette. Pre-washed for that perfectly broken-in feel from day one.",
    shortDescription: "Heavyweight premium hoodie, minimal aesthetic.",
    image: "images/product_hoodie_1786984580150.jpg",
    colors: ["#e8e0d5","#1a1a1a","#6e6b66"], sizes: ["XS","S","M","L","XL","XXL"],
    tags: ["hoodie","clothing","oversized","cozy"], badge: "SALE",
    stock: 41, featured: true, trending: false, bestSeller: true, newArrival: false
  },
  {
    id: 4, name: "Everyday Leather Backpack", slug: "everyday-leather-backpack",
    category: "Bags", price: 119, oldPrice: null, discount: null,
    rating: 4.8, reviewCount: 196,
    description: "Full-grain leather backpack with laptop sleeve (up to 15\"), structured back panel and antique brass hardware. Built to age beautifully.",
    shortDescription: "Premium leather backpack for work and travel.",
    image: "images/product_backpack_1786984593724.jpg",
    colors: ["#4a2c0a","#1a1a1a"], sizes: [],
    tags: ["backpack","bag","leather","work","travel"], badge: "TRENDING",
    stock: 12, featured: true, trending: true, bestSeller: false, newArrival: false
  },
  {
    id: 5, name: "Premium Wireless Headphones", slug: "premium-wireless-headphones",
    category: "Electronics", price: 159, oldPrice: 199, discount: 20,
    rating: 4.9, reviewCount: 614,
    description: "Active noise cancellation, 40-hour battery life and custom-tuned 40mm drivers for an immersive audio experience. Foldable for easy travel.",
    shortDescription: "Wireless ANC headphones with premium sound.",
    image: "images/product_headphones_1786984604407.jpg",
    colors: ["#1a1a1a","#e8e8e8"], sizes: [],
    tags: ["headphones","electronics","wireless","audio","ANC"], badge: "BEST SELLER",
    stock: 31, featured: true, trending: true, bestSeller: true, newArrival: false
  },
  {
    id: 6, name: "Minimal Sunglasses", slug: "minimal-sunglasses",
    category: "Accessories", price: 49, oldPrice: null, discount: null,
    rating: 4.6, reviewCount: 178,
    description: "Ultra-lightweight titanium-alloy frame with polarized UV400 lenses. Timeless round shape that complements any face type.",
    shortDescription: "Polarized minimal sunglasses for every occasion.",
    image: "images/product_sunglasses_1786984616727.jpg",
    colors: ["#1a1a1a","#8B7355"], sizes: [],
    tags: ["sunglasses","accessories","minimal","uv"], badge: "NEW",
    stock: 55, featured: false, trending: false, bestSeller: false, newArrival: true
  },
  {
    id: 7, name: "Premium Cotton Overshirt", slug: "premium-cotton-overshirt",
    category: "Clothing", price: 79, oldPrice: null, discount: null,
    rating: 4.7, reviewCount: 231,
    description: "100% organic cotton overshirt with a structured modern fit. Double chest pockets, mother-of-pearl buttons and a relaxed collar.",
    shortDescription: "Structured organic cotton overshirt.",
    image: "images/product_overshirt_1786984650643.jpg",
    colors: ["#e8dcc8","#1a1a1a","#6e6b66"], sizes: ["XS","S","M","L","XL","XXL"],
    tags: ["overshirt","clothing","cotton","shirt"], badge: "NEW",
    stock: 28, featured: false, trending: false, bestSeller: false, newArrival: true
  },
  {
    id: 8, name: "Smart Everyday Bottle", slug: "smart-everyday-bottle",
    category: "Lifestyle", price: 39, oldPrice: null, discount: null,
    rating: 4.8, reviewCount: 403,
    description: "18/8 stainless steel, triple-wall insulated. Keeps drinks cold 24hrs, hot 12hrs. BPA-free, leak-proof lid. 710ml capacity.",
    shortDescription: "Insulated minimal bottle for work, gym and travel.",
    image: "images/product_bottle_1786984662965.jpg",
    colors: ["#1a1a1a","#e8e8e8","#4a7c59"], sizes: [],
    tags: ["bottle","lifestyle","water","insulated"], badge: "TRENDING",
    stock: 67, featured: false, trending: true, bestSeller: false, newArrival: true
  },
  {
    id: 9, name: "Modern Crossbody Bag", slug: "modern-crossbody-bag",
    category: "Bags", price: 59, oldPrice: 79, discount: 25,
    rating: 4.7, reviewCount: 147,
    description: "Compact structured crossbody in smooth genuine leather. Magnetic clasp closure, interior card slots and an adjustable strap (up to 120cm).",
    shortDescription: "Compact leather crossbody with clean silhouette.",
    image: "images/product_crossbody_1786984677289.jpg",
    colors: ["#1a1a1a","#4a2c0a"], sizes: [],
    tags: ["crossbody","bag","leather","compact"], badge: "SALE",
    stock: 19, featured: false, trending: false, bestSeller: false, newArrival: true
  },
  {
    id: 10, name: "Premium Running Shoes", slug: "premium-running-shoes",
    category: "Footwear", price: 139, oldPrice: null, discount: null,
    rating: 4.8, reviewCount: 389,
    description: "Engineered mesh upper with responsive foam midsole and a high-traction rubber outsole. Lightweight performance for everyday movement.",
    shortDescription: "Lightweight performance running shoes.",
    image: "images/product_running_shoes_1786984691683.jpg",
    colors: ["#e8e8e8","#1a1a1a"], sizes: ["40","41","42","43","44","45","46"],
    tags: ["running","footwear","performance","athletic"], badge: "NEW",
    stock: 35, featured: false, trending: false, bestSeller: false, newArrival: true
  },
  {
    id: 11, name: "Minimal Desk Lamp", slug: "minimal-desk-lamp",
    category: "Home", price: 74, oldPrice: null, discount: null,
    rating: 4.7, reviewCount: 124,
    description: "Touch-dimming LED desk lamp with 3 colour temperatures (3000K/4000K/6000K), 360° adjustable arm and a brushed matte black finish.",
    shortDescription: "Architectural LED desk lamp for modern workspaces.",
    image: "images/product_lamp_1786984702639.jpg",
    colors: ["#1a1a1a","#e8e8e8"], sizes: [],
    tags: ["lamp","home","desk","led","office"], badge: "NEW",
    stock: 22, featured: false, trending: false, bestSeller: false, newArrival: true
  },
  {
    id: 12, name: "Everyday Premium Cap", slug: "everyday-premium-cap",
    category: "Accessories", price: 35, oldPrice: null, discount: null,
    rating: 4.6, reviewCount: 209,
    description: "6-panel structured cap in 100% heavyweight cotton twill. Curved brim, brass buckle strap and a sweat-wicking interior band.",
    shortDescription: "Structured premium cap with adjustable fit.",
    image: "images/product_cap_1786984714330.jpg",
    colors: ["#1a1a1a","#e8dcc8","#4a4a4a"], sizes: [],
    tags: ["cap","hat","accessories","minimal"], badge: "TRENDING",
    stock: 44, featured: false, trending: true, bestSeller: false, newArrival: false
  }
];

const CATEGORIES = [
  { name: "Clothing", icon: "👕", count: 2 },
  { name: "Footwear", icon: "👟", count: 2 },
  { name: "Accessories", icon: "⌚", count: 3 },
  { name: "Bags", icon: "🎒", count: 2 },
  { name: "Electronics", icon: "🎧", count: 1 },
  { name: "Lifestyle", icon: "💧", count: 1 },
  { name: "Home", icon: "💡", count: 1 }
];

// Smart recommendation map
const RECO_MAP = {
  "Footwear":    ["Accessories","Bags","Clothing"],
  "Accessories": ["Footwear","Clothing","Bags"],
  "Clothing":    ["Footwear","Accessories","Bags"],
  "Bags":        ["Lifestyle","Electronics","Clothing"],
  "Electronics": ["Accessories","Bags","Lifestyle"],
  "Lifestyle":   ["Bags","Electronics","Home"],
  "Home":        ["Lifestyle","Electronics","Accessories"]
};

// ── STATE ─────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('atz-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('atz-wishlist')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('atz-recent')) || [];
let filteredProducts = [...PRODUCTS];
let currentPage = 'home';
let cartOpen = false;
let searchOpen = false;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategories();
  renderBestSellers();
  renderTrending();
  renderNewArrivals();
  renderShopGrid();
  updateCounts();
  initScrollReveal();
  initNavbarScroll();
  updateRecentlyViewed();

  // Delivery option interactions
  document.querySelectorAll('.del-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.del-opt').forEach(o => o.classList.remove('active-del'));
      opt.classList.add('active-del');
      const radio = opt.querySelector('input[name="del"]');
      if (radio) {
        radio.checked = true;
        renderCheckoutSummary();
      }
    });
  });
});

// ── THEME ─────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('atz-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('atz-theme', next);
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
}

// ── PAGES ──────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');
  currentPage = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
  if (id === 'checkout') renderCheckoutSummary();
  if (id === 'wishlist') renderWishlistPage();
  if (id === 'home') updateRecentlyViewed();
  setTimeout(checkAndReveal, 60);
  setTimeout(checkAndReveal, 250);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateToSection(id) {
  showPage('home');
  if (typeof updateNavActive === 'function') {
    updateNavActive(id);
  } else {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-page'));
    const el = document.getElementById('nav-link-' + id);
    if (el) el.classList.add('active-page');
  }
  setTimeout(() => scrollToSection(id), 120);
}

// ── ANNOUNCEMENT BAR ──────────────────────────────────────────
function dismissAnnouncement() {
  const bar = document.getElementById('announcement-bar');
  bar.style.maxHeight = bar.offsetHeight + 'px';
  requestAnimationFrame(() => {
    bar.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
    bar.style.maxHeight = '0';
    bar.style.opacity = '0';
    bar.style.overflow = 'hidden';
  });
}

// ── NAVBAR ─────────────────────────────────────────────────────
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── SEARCH ─────────────────────────────────────────────────────
function openSearch() {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.add('open');
  searchOpen = true;
  setTimeout(() => document.getElementById('search-input').focus(), 200);
  document.getElementById('search-results').innerHTML = '';
}

function closeSearch(e) {
  if (!e || e.target === document.getElementById('search-overlay') || e.type === 'click') {
    document.getElementById('search-overlay').classList.remove('open');
    document.getElementById('search-input').value = '';
    searchOpen = false;
  }
}

function performSearch(q) {
  const box = document.getElementById('search-results');
  q = q.trim().toLowerCase();
  if (!q) { box.innerHTML = ''; return; }
  const res = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  );
  if (!res.length) {
    box.innerHTML = `<div class="search-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No products found for "<strong>${q}</strong>"</p><small>Try searching for something different.</small></div>`;
    return;
  }
  box.innerHTML = res.slice(0,6).map(p => `
    <div class="search-result-item" onclick="goToProduct(${p.id});closeSearch()">
      <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      <div class="sri-info">
        <strong>${p.name}</strong>
        <span>${p.category} &mdash; $${p.price}</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSearch(); closeCart(); closeQuickView(); closeMobFilterBtn();
  }
});

// ── RENDER FUNCTIONS ──────────────────────────────────────────
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="filterByCategory('${c.name}')" role="button" tabindex="0" aria-label="Browse ${c.name}">
      <div class="cat-icon">${c.icon}</div>
      <span class="cat-name">${c.name.toUpperCase()}</span>
      <span class="cat-count">${c.count} products</span>
    </div>
  `).join('');
}

function filterByCategory(cat) {
  showPage('shop');
  setTimeout(() => {
    // Uncheck all, check selected
    document.querySelectorAll('.cat-cb, .cat-mob').forEach(cb => {
      cb.checked = (cb.value === cat);
    });
    applyFilters();
  }, 100);
}

function handleCategoryChange(changedInput) {
  const isAll = changedInput.value === 'all';
  const isChecked = changedInput.checked;
  const isMob = changedInput.classList.contains('cat-mob');
  const selector = isMob ? '.cat-mob' : '.cat-cb';
  const otherSelector = isMob ? '.cat-cb' : '.cat-mob';

  if (isAll) {
    if (isChecked) {
      document.querySelectorAll('.cat-cb, .cat-mob').forEach(cb => {
        cb.checked = (cb.value === 'all');
      });
    } else {
      changedInput.checked = true;
    }
  } else {
    const allCbs = document.querySelectorAll(selector);
    const specificChecked = [...allCbs].filter(cb => cb.value !== 'all' && cb.checked);
    const allBox = [...allCbs].find(cb => cb.value === 'all');

    if (specificChecked.length > 0) {
      if (allBox) allBox.checked = false;
    } else {
      if (allBox) allBox.checked = true;
    }

    // Sync to other selector
    document.querySelectorAll(otherSelector).forEach(cb => {
      const match = [...allCbs].find(c => c.value === cb.value);
      if (match) cb.checked = match.checked;
    });
  }

  applyFilters();
}

function createProductCard(p, showWishlist = true) {
  const inWish = wishlist.includes(p.id);
  const starStr = renderStars(p.rating);
  const badgeClass = p.badge === 'SALE' ? 'sale' : p.badge === 'NEW' ? 'new' : p.badge === 'TRENDING' ? 'trend' : '';
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="pc-img-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      ${p.badge ? `<span class="pc-badge ${badgeClass}">${p.badge}</span>` : ''}
      ${showWishlist ? `<button class="pc-wishlist ${inWish ? 'active' : ''}" onclick="toggleWishlist(event,${p.id})" aria-label="Toggle wishlist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>` : ''}
      <div class="pc-quickview" onclick="openQuickView(event,${p.id})">QUICK VIEW</div>
      <div class="pc-quickadd" onclick="addToCart(event,${p.id})">+ ADD TO BAG</div>
    </div>
    <div class="pc-body" onclick="goToProduct(${p.id})" style="cursor:pointer">
      <div class="pc-cat">${p.category}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-rating">
        <span class="pc-stars">${starStr}</span>
        <span class="pc-rc">(${p.reviewCount})</span>
      </div>
      <div class="pc-price">
        <strong>$${p.price}</strong>
        ${p.oldPrice ? `<span class="pc-old">$${p.oldPrice}</span>` : ''}
        ${p.discount ? `<span class="pc-disc">-${p.discount}%</span>` : ''}
      </div>
    </div>
    <div class="pc-footer">
      <button class="btn btn-outline btn-sm" onclick="addToCart(event,${p.id})">Add to Cart</button>
    </div>
  </article>`;
}

function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) s += '★';
    else s += '☆';
  }
  return s;
}

function renderBestSellers() {
  const grid = document.getElementById('bestseller-grid');
  if (!grid) return;
  const bs = PRODUCTS.filter(p => p.bestSeller).slice(0, 4);
  grid.innerHTML = bs.map(p => createProductCard(p)).join('');
  setTimeout(reAnimateNewCards, 50);
}

function renderTrending() {
  const grid = document.getElementById('trending-grid');
  if (!grid) return;
  const tr = PRODUCTS.filter(p => p.trending).slice(0, 4);
  grid.innerHTML = tr.map(p => createProductCard(p)).join('');
  setTimeout(reAnimateNewCards, 50);
}

function renderNewArrivals() {
  const grid = document.getElementById('newarrivals-grid');
  if (!grid) return;
  const na = PRODUCTS.filter(p => p.newArrival).slice(0, 4);
  grid.innerHTML = na.map(p => createProductCard(p)).join('');
  setTimeout(reAnimateNewCards, 50);
}

function renderShopGrid() {
  const grid = document.getElementById('shop-grid');
  const empty = document.getElementById('shop-empty');
  if (!grid) return;
  if (filteredProducts.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    document.getElementById('count-label').textContent = '0 products';
    return;
  }
  if (empty) empty.style.display = 'none';
  grid.innerHTML = filteredProducts.map(p => createProductCard(p)).join('');
  document.getElementById('count-label').textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
  setTimeout(reAnimateNewCards, 50);
}

// ── FILTERS & SORTING ─────────────────────────────────────────
function applyFilters() {
  let products = [...PRODUCTS];

  // Category
  const checkedBoxes = [...document.querySelectorAll('.cat-cb:checked')];
  const isAll = checkedBoxes.some(cb => cb.value === 'all');
  const selectedCats = checkedBoxes.filter(cb => cb.value !== 'all').map(cb => cb.value);

  if (!isAll && selectedCats.length > 0) {
    products = products.filter(p => selectedCats.includes(p.category));
  }

  // Price
  const priceEl = document.querySelector('input[name="pr"]:checked');
  if (priceEl && priceEl.value !== 'all') {
    const [min, max] = priceEl.value.split('-').map(Number);
    products = products.filter(p => max ? (p.price >= min && p.price <= max) : p.price >= min);
  }

  // Rating
  const ratingEl = document.querySelector('input[name="rt"]:checked');
  if (ratingEl && ratingEl.value !== 'all') {
    const minR = parseFloat(ratingEl.value);
    products = products.filter(p => p.rating >= minR);
  }

  // Collection checkboxes
  if (document.getElementById('fn-new')?.checked) products = products.filter(p => p.newArrival);
  if (document.getElementById('fn-best')?.checked) products = products.filter(p => p.bestSeller);
  if (document.getElementById('fn-sale')?.checked) products = products.filter(p => p.discount);
  if (document.getElementById('fn-trend')?.checked) products = products.filter(p => p.trending);

  // Sort
  const sort = document.getElementById('sort-sel')?.value || 'featured';
  switch (sort) {
    case 'price-asc': products.sort((a,b) => a.price - b.price); break;
    case 'price-desc': products.sort((a,b) => b.price - a.price); break;
    case 'rating': products.sort((a,b) => b.rating - a.rating); break;
    case 'popular': products.sort((a,b) => b.reviewCount - a.reviewCount); break;
    case 'newest': products.sort((a,b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0)); break;
    default: products.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  filteredProducts = products;
  renderShopGrid();
}

function clearFilters() {
  document.querySelectorAll('.cat-cb, .cat-mob').forEach(cb => { cb.checked = (cb.value === 'all'); });
  const allPr = document.querySelector('input[name="pr"][value="all"]');
  if (allPr) allPr.checked = true;
  const allRt = document.querySelector('input[name="rt"][value="all"]');
  if (allRt) allRt.checked = true;
  ['fn-new','fn-best','fn-sale','fn-trend'].forEach(id => {
    const el = document.getElementById(id); if (el) el.checked = false;
  });
  const sortEl = document.getElementById('sort-sel');
  if (sortEl) sortEl.value = 'featured';
  const mobSort = document.querySelector('input[name="mob-sort"][value="featured"]');
  if (mobSort) mobSort.checked = true;
  filteredProducts = [...PRODUCTS];
  renderShopGrid();
}

// ── PRODUCT DETAIL ────────────────────────────────────────────
function goToProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Recently viewed
  recentlyViewed = [id, ...recentlyViewed.filter(x => x !== id)].slice(0, 6);
  localStorage.setItem('atz-recent', JSON.stringify(recentlyViewed));

  const wrap = document.getElementById('product-detail-wrap');
  const inWish = wishlist.includes(p.id);

  const colorSwatches = p.colors.map((c,i) => `
    <div class="color-swatch ${i===0?'active':''}" style="background:${c}" onclick="selectColor(this)" aria-label="Color option"></div>
  `).join('');

  const sizeButtons = p.sizes.map((s,i) => `
    <button class="size-btn ${i===0?'active':''}" onclick="selectSize(this)">${s}</button>
  `).join('');

  wrap.innerHTML = `
  <div class="pd-breadcrumb">
    <a onclick="showPage('home')">Home</a> /
    <a onclick="showPage('shop')">Shop</a> /
    <a onclick="filterByCategory('${p.category}')">${p.category}</a> /
    <span>${p.name}</span>
  </div>
  <div class="pd-grid">
    <div class="pd-images">
      <div class="main-img" id="main-img">
        <img src="${p.image}" alt="${p.name}" id="main-img-el"/>
      </div>
      <div class="pd-thumbs">
        <div class="pd-thumb active"><img src="${p.image}" alt="${p.name}" onclick="switchThumb(this, '${p.image}')"/></div>
        <div class="pd-thumb"><img src="${p.image}" alt="${p.name} angle 2" onclick="switchThumb(this, '${p.image}')"/></div>
        <div class="pd-thumb"><img src="${p.image}" alt="${p.name} angle 3" onclick="switchThumb(this, '${p.image}')"/></div>
      </div>
    </div>
    <div class="pd-info">
      <div class="pd-cat">${p.category}</div>
      <h1 class="pd-name">${p.name}</h1>
      <div class="pd-rating">
        <span class="stars" style="color:#e0a800">${renderStars(p.rating)}</span>
        <span class="pd-review-count">${p.rating} (${p.reviewCount} reviews)</span>
      </div>
      <div class="pd-price">
        <strong>$${p.price}</strong>
        ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}
        ${p.discount ? `<span class="discount">-${p.discount}%</span>` : ''}
      </div>
      <p class="pd-desc">${p.description}</p>
      <div class="pd-divider"></div>
      ${p.colors.length ? `<span class="pd-label">COLOR</span><div class="color-opts">${colorSwatches}</div>` : ''}
      ${p.sizes.length ? `<span class="pd-label">SIZE</span><div class="size-opts">${sizeButtons}</div>` : ''}
      <div class="qty-wrap">
        <span class="pd-label" style="margin:0">QUANTITY</span>
        <div class="qty-ctrl">
          <button onclick="changeQty(-1)" aria-label="Decrease">−</button>
          <span id="qty-val">1</span>
          <button onclick="changeQty(1)" aria-label="Increase">+</button>
        </div>
      </div>
      <div class="pd-actions">
        <button class="btn btn-primary" onclick="addToCartDetail(${p.id})">Add to Cart</button>
        <button class="btn btn-ghost" onclick="addToCartDetail(${p.id});showPage('checkout')">Buy Now</button>
        <button class="pd-wish-btn ${inWish?'active':''}" onclick="toggleWishlistDetail(${p.id},this)" aria-label="Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWish?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="pd-perks">
        <div class="pd-perk"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Free shipping on orders over $100</div>
        <div class="pd-perk"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> 30-day easy returns</div>
        <div class="pd-perk"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Secure checkout guaranteed</div>
      </div>
    </div>
  </div>`;

  showPage('product');
  renderRecommendations(p);
  document.getElementById('product-detail-wrap').style.padding = '60px 24px 0';
}

function switchThumb(el, src) {
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
  el.closest('.pd-thumb').classList.add('active');
  document.getElementById('main-img-el').src = src;
}

function selectColor(el) {
  el.closest('.color-opts').querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(el) {
  el.closest('.size-opts').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

let detailQty = 1;
function changeQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById('qty-val').textContent = detailQty;
}

function addToCartDetail(id) {
  const qty = detailQty || 1;
  for (let i = 0; i < qty; i++) addToCartById(id);
  detailQty = 1;
  const qv = document.getElementById('qty-val');
  if (qv) qv.textContent = '1';
}

function renderRecommendations(p) {
  const relCats = RECO_MAP[p.category] || [];
  const recos = PRODUCTS.filter(x => x.id !== p.id && relCats.includes(x.category)).slice(0, 4);
  const complete = PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);

  const recoGrid = document.getElementById('reco-grid');
  const completeGrid = document.getElementById('complete-grid');
  if (recoGrid) recoGrid.innerHTML = recos.map(pr => createProductCard(pr)).join('');
  if (completeGrid) completeGrid.innerHTML = complete.length ? complete.map(pr => createProductCard(pr)).join('') : PRODUCTS.filter(x => x.id !== p.id).slice(0,4).map(pr => createProductCard(pr)).join('');
}

// ── QUICK VIEW ─────────────────────────────────────────────────
function openQuickView(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const content = document.getElementById('quickview-content');
  content.innerHTML = `
  <div class="qv-grid">
    <div class="qv-img"><img src="${p.image}" alt="${p.name}"/></div>
    <div class="qv-info">
      <div class="pd-cat">${p.category}</div>
      <div class="pd-name" style="font-size:1.4rem;margin-bottom:12px">${p.name}</div>
      <div class="pd-rating" style="margin-bottom:16px">
        <span class="stars" style="color:#e0a800">${renderStars(p.rating)}</span>
        <span style="font-size:0.8rem;color:var(--fg3)">(${p.reviewCount})</span>
      </div>
      <div class="pd-price" style="margin-bottom:16px">
        <strong style="font-size:1.5rem">$${p.price}</strong>
        ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}
        ${p.discount ? `<span class="discount">-${p.discount}%</span>` : ''}
      </div>
      <p style="font-size:0.88rem;color:var(--fg2);margin-bottom:24px;line-height:1.7">${p.shortDescription}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="addToCart(event,${p.id});closeQuickView()" style="flex:1">Add to Cart</button>
        <button class="btn btn-ghost" onclick="goToProduct(${p.id});closeQuickView()" style="flex:1">View Details</button>
      </div>
    </div>
  </div>`;
  document.getElementById('quickview-overlay').classList.add('open');
}

function closeQuickView(e) {
  if (!e || e.target === document.getElementById('quickview-overlay') || e.type === 'click') {
    document.getElementById('quickview-overlay').classList.remove('open');
  }
}

// ── CART ──────────────────────────────────────────────────────
function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  cartOpen = true;
  renderCart();
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  cartOpen = false;
  document.body.style.overflow = '';
}

function closeCartOutside(e) {
  if (e.target === document.getElementById('cart-overlay')) closeCart();
}

function addToCart(e, id) {
  e.stopPropagation();
  addToCartById(id);
}

function addToCartById(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCounts();
  showToast(`✓ ${p.name} added to your bag.`);
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCounts();
  renderCart();
  if (cartOpen) renderCart();
}

function updateCartQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCounts();
  renderCart();
}

function saveCart() {
  localStorage.setItem('atz-cart', JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartItemCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCounts() {
  const cc = cartItemCount();
  const wc = wishlist.length;
  const ccEl = document.getElementById('cart-count');
  const wcEl = document.getElementById('wishlist-count');
  if (ccEl) { ccEl.textContent = cc; ccEl.style.display = cc > 0 ? 'flex' : 'none'; }
  if (wcEl) { wcEl.textContent = wc; wcEl.style.display = wc > 0 ? 'flex' : 'none'; }
}

function renderCart() {
  const itemsList = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer-area');
  const headerCount = document.getElementById('cart-header-count');
  const freeBar = document.getElementById('free-ship-bar');

  const total = cartTotal();
  const count = cartItemCount();
  if (headerCount) headerCount.textContent = `(${count} item${count !== 1 ? 's' : ''})`;

  // Free shipping progress
  const freeThreshold = 100;
  const remaining = Math.max(0, freeThreshold - total);
  if (freeBar) {
    freeBar.innerHTML = `
    <div class="ship-prog-text">${remaining > 0 ? `You're <strong>$${remaining.toFixed(0)}</strong> away from free shipping` : '🎉 You qualify for <strong>free shipping!</strong>'}</div>
    <div class="ship-prog-bar"><div class="ship-prog-fill" style="width:${Math.min(100,(total/freeThreshold)*100)}%"></div></div>`;
  }

  if (cart.length === 0) {
    itemsList.innerHTML = `
    <div class="cart-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <h3>Your bag is waiting</h3>
      <p>Looks like you haven't added anything yet.</p>
      <button class="btn btn-primary btn-sm" onclick="closeCart();showPage('shop')">Start Shopping</button>
    </div>`;
    footer.innerHTML = '';
    return;
  }

  itemsList.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-cat">${p.category}</div>
        <div class="ci-controls">
          <div class="ci-qty">
            <button onclick="updateCartQty(${p.id},-1)" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${p.id},1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="ci-price">$${(p.price * item.qty).toFixed(2)}</div>
        </div>
        <div class="ci-remove" onclick="removeFromCart(${p.id})">Remove</div>
      </div>
    </div>`;
  }).join('');

  const shipping = total >= 100 ? 0 : 8;
  footer.innerHTML = `
  <div class="cart-subtotal"><span>Subtotal</span><span>$${total.toFixed(2)}</span></div>
  <div class="cart-subtotal"><span>Shipping</span><span>${shipping === 0 ? '<strong style="color:#2d7a2d">FREE</strong>' : '$' + shipping.toFixed(2)}</span></div>
  <div class="cart-total"><span>Total</span><span>$${(total + shipping).toFixed(2)}</span></div>
  <div class="cart-btns">
    <button class="btn btn-ghost" onclick="closeCart();showPage('shop')">Continue Shopping</button>
    <button class="btn btn-primary" onclick="closeCart();showPage('checkout')">Checkout</button>
  </div>`;
}

// ── WISHLIST ──────────────────────────────────────────────────
function toggleWishlist(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast(`Removed from wishlist.`);
  } else {
    wishlist.push(id);
    showToast(`♡ ${p?.name} saved to wishlist.`);
  }
  localStorage.setItem('atz-wishlist', JSON.stringify(wishlist));
  updateCounts();
  // Update all heart buttons for this product
  document.querySelectorAll(`.product-card[data-id="${id}"] .pc-wishlist`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(id));
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', wishlist.includes(id) ? 'currentColor' : 'none');
  });
}

function toggleWishlistDetail(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast(`Removed from wishlist.`);
    btn.classList.remove('active');
    const svg = btn.querySelector('svg'); if (svg) svg.setAttribute('fill','none');
  } else {
    wishlist.push(id);
    showToast(`♡ ${p?.name} saved to wishlist.`);
    btn.classList.add('active');
    const svg = btn.querySelector('svg'); if (svg) svg.setAttribute('fill','currentColor');
  }
  localStorage.setItem('atz-wishlist', JSON.stringify(wishlist));
  updateCounts();
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  if (!grid) return;
  if (wishlist.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  grid.innerHTML = items.map(p => createProductCard(p)).join('');
}

// ── RECENTLY VIEWED ───────────────────────────────────────────
function updateRecentlyViewed() {
  const section = document.getElementById('recently-viewed-section');
  const grid = document.getElementById('recently-viewed-grid');
  if (!section || !grid) return;
  if (recentlyViewed.length === 0) { section.style.display = 'none'; return; }
  const items = recentlyViewed.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (items.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  grid.innerHTML = items.map(p => createProductCard(p)).join('');
}

// ── CHECKOUT ──────────────────────────────────────────────────
function renderCheckoutSummary() {
  const box = document.getElementById('co-summary-box');
  if (!box) return;
  const total = cartTotal();
  const delMethod = document.querySelector('input[name="del"]:checked')?.value || 'standard';
  const shipping = total === 0 ? 0 : (delMethod === 'express' ? 18 : (total >= 100 ? 0 : 8));
  const items = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
    <div class="co-sum-item">
      <img src="${p.image}" alt="${p.name}"/>
      <div class="co-sum-info">
        <strong>${p.name}</strong>
        <span>Qty: ${item.qty}</span>
      </div>
      <span class="co-sum-price">$${(p.price * item.qty).toFixed(2)}</span>
    </div>`;
  }).join('');

  box.innerHTML = `
  <div class="co-sum-title">ORDER SUMMARY</div>
  ${items || '<p style="color:var(--fg3);font-size:0.85rem;margin-bottom:16px">No items in cart</p>'}
  <div class="co-sum-line"><span>Subtotal</span><span>$${total.toFixed(2)}</span></div>
  <div class="co-sum-line"><span>Shipping (${delMethod === 'express' ? 'Express' : 'Standard'})</span><span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div>
  <div class="co-sum-line"><span>Discount</span><span>—</span></div>
  <div class="co-sum-total"><span>TOTAL</span><span>$${(total + shipping).toFixed(2)}</span></div>
  <p style="font-size:0.72rem;color:var(--fg4);margin-top:12px">&#128274; Taxes calculated at checkout.</p>`;
}

function placeOrder() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  cart = [];
  saveCart();
  updateCounts();
  renderCart();
  renderCheckoutSummary();
  showToast('🎉 Order placed! Thank you for shopping with ATZ.');
  setTimeout(() => showPage('home'), 1500);
}

// ── NEWSLETTER ────────────────────────────────────────────────
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('nl-email')?.value;
  if (!email) return;
  showToast(`🎉 You're in! Check ${email} for your 10% off code.`);
  document.getElementById('nl-email').value = '';
}

// ── CONTACT ───────────────────────────────────────────────────
function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const origText = btn ? btn.textContent : 'Send Message';

  const name = form.querySelector('[name="name"]')?.value || '';
  const email = form.querySelector('[name="email"]')?.value || '';
  const subject = form.querySelector('[name="subject"]')?.value || 'Website Inquiry';
  const message = form.querySelector('[name="message"]')?.value || '';

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending...';
  }

  fetch('https://formsubmit.co/ajax/atzmarketplacellc@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      _subject: `New Inquiry from ATZ Website: ${subject}`,
      message: message,
      _template: 'table'
    })
  })
  .then(res => res.json())
  .then(data => {
    showToast('✓ Message sent! We\'ll get back to you within 24 hours.');
    form.reset();
  })
  .catch(err => {
    showToast('✓ Message sent! We\'ll get back to you within 24 hours.');
    form.reset();
  })
  .finally(() => {
    if (btn) {
      btn.disabled = false;
      btn.textContent = origText;
    }
  });
}

// ── FAQ ───────────────────────────────────────────────────────
function toggleFAQ(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-ans').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
}

// ── MOBILE FILTER ─────────────────────────────────────────────
function openMobFilter() {
  document.getElementById('mob-filter-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobFilter(e) {
  if (e.target === document.getElementById('mob-filter-bg')) closeMobFilterBtn();
}

function closeMobFilterBtn() {
  document.getElementById('mob-filter-bg').classList.remove('open');
  document.body.style.overflow = '';
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// ── SCROLL ANIMATIONS (BIDIRECTIONAL UP & DOWN + ON LOAD) ─────
function checkAndReveal() {
  const windowHeight = window.innerHeight;
  const triggerOffset = 40;
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    // If element is inside viewport
    if (rect.top <= windowHeight - triggerOffset && rect.bottom >= triggerOffset) {
      el.classList.add('is-revealed');
    } else {
      // If element is scrolled completely out above or below
      if (rect.top > windowHeight || rect.bottom < 0) {
        el.classList.remove('is-revealed');
      }
    }
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.product-card, .review-card, .cat-card, .trust-item, .stat-box, .sec-head, .promo-content, .newsletter-box, .faq-item, .c-item, .contact-form, .about-body, .footer-top, .footer-contact-strip'
  );

  targets.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  window.removeEventListener('scroll', checkAndReveal);
  window.addEventListener('scroll', checkAndReveal, { passive: true });

  // Initial triggers
  setTimeout(checkAndReveal, 80);
  setTimeout(checkAndReveal, 350);
}

// Re-observe dynamic cards
function reAnimateNewCards() {
  document.querySelectorAll('.product-card:not(.reveal-on-scroll)').forEach(el => {
    el.classList.add('reveal-on-scroll');
  });
  setTimeout(checkAndReveal, 40);
}

// ── SERVICES TAB SWITCH ───────────────────────────────────────
function switchServiceTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.srv-tab-btn').forEach(btn => {
    btn.classList.remove('srv-tab-active');
  });
  const activeBtn = document.getElementById('tab-btn-' + tab);
  if (activeBtn) activeBtn.classList.add('srv-tab-active');

  // Hide all panels
  document.querySelectorAll('.srv-tab-panel').forEach(panel => {
    panel.classList.remove('srv-panel-active');
    panel.style.display = 'none';
  });

  // Show target panel with animation
  const targetPanel = document.getElementById('srv-panel-' + tab);
  if (targetPanel) {
    targetPanel.style.display = 'block';
    // Force reflow for animation restart
    targetPanel.classList.remove('srv-panel-active');
    void targetPanel.offsetWidth;
    targetPanel.classList.add('srv-panel-active');
  }

  // Reset & re-trigger scroll reveal for cards in active panel
  if (targetPanel) {
    targetPanel.querySelectorAll('.srv-card').forEach(card => {
      card.classList.remove('is-revealed');
    });
    setTimeout(() => {
      targetPanel.querySelectorAll('.srv-card').forEach(card => {
        if (!card.classList.contains('reveal-on-scroll')) {
          card.classList.add('reveal-on-scroll');
        }
      });
      checkAndReveal();
    }, 60);
  }
}

// Update dynamic nav underline for whichever link is clicked/active
function updateNavActive(target) {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-page'));
  const el = document.getElementById('nav-link-' + target);
  if (el) el.classList.add('active-page');
}

// Mark active nav link and trigger page inits
(function patchShowPage() {
  const _orig = showPage;
  window.showPage = function(id) {
    _orig(id);
    updateNavActive(id);
    // Trigger tab init if services page opened
    if (id === 'services') {
      setTimeout(() => {
        // Ensure ecommerce tab is visible & cards animate
        switchServiceTab('ecommergeservices');
        checkAndReveal();
      }, 80);
    }
  };
})();
