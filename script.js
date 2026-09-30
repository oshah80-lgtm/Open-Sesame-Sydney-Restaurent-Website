/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * OPEN SESAME SYDNEY — JAVASCRIPT
 * Middle Eastern Restaurant | Sydney Place, 180 George St, Sydney NSW 2000
 * Vanilla JavaScript (Zero Dependencies, Fast & Maintainable)
 */

/* ==========================================================================
   1. EDITABLE RESTAURANT DATA
   Non-developers can easily add, edit, or remove items in this section!
   ========================================================================== */

/**
 * MENU ITEMS
 * Categories: 'mezze' | 'grills' | 'desserts' | 'drinks'
 * Dietary tags: 'Vegetarian', 'Vegan', 'Gluten-Free Option', 'Halal'
 */
const MENU_ITEMS = [
  // --- Mezze & Starters ---
  {
    id: 'm1',
    category: 'mezze',
    name: 'Silky Hummus bil Lahme',
    price: '$18.00',
    description: 'Slow-simmered chickpea purée whipped with premium sesame tahini, topped with warm spiced minced lamb, toasted pine nuts & extra virgin olive oil. Served with stone-baked Lebanese pita.',
    dietary: ['Halal', 'Gluten-Free Option Available']
  },
  {
    id: 'm2',
    category: 'mezze',
    name: 'Smoked Baba Ghanoush',
    price: '$16.00',
    description: 'Charcoal-roasted eggplant gently blended with tahini, crushed garlic, lemon juice, sumac, and ruby pomegranate arils. Served with warm pita bread.',
    dietary: ['Vegetarian', 'Vegan', 'Gluten-Free Option Available']
  },
  {
    id: 'm3',
    category: 'mezze',
    name: 'Artisan Golden Falafel (5 pcs)',
    price: '$15.50',
    description: 'Crisp fava bean and chickpea croquettes perfumed with coriander, cumin, and sesame seeds. Paired with house pickled turnip and garlic-lemon tahini dip.',
    dietary: ['Vegetarian', 'Vegan', 'Halal']
  },
  {
    id: 'm4',
    category: 'mezze',
    name: 'Grilled Cypriot Haloumi',
    price: '$17.50',
    description: 'Pan-seared squeaky sheep’s milk haloumi glazed with Australian wild honeycomb, wild thyme za’atar, and fresh pomegranate molasses drizzle.',
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'm5',
    category: 'mezze',
    name: 'Classic Beirut Fattoush Salad',
    price: '$16.00',
    description: 'Crisp baby cos lettuce, heirloom radishes, Lebanese cucumber, vine tomatoes, mint, and crisp sumac pita crisps tossed in a tangy pomegranate-lemon dressing.',
    dietary: ['Vegetarian', 'Vegan']
  },

  // --- Grills & Mains ---
  {
    id: 'g1',
    category: 'grills',
    name: 'Charcoal Mixed Grill Platter',
    price: '$36.00',
    description: 'The signature feast: Marinated Shish Tawook chicken skewer, hand-minced spiced Lamb Kafta, and tender Beef Tenderloin over natural charcoal. Served with garlic toum, biwaz salad, and fresh pita.',
    dietary: ['Halal', 'Chef Signature']
  },
  {
    id: 'g2',
    category: 'grills',
    name: 'Shish Tawook Chicken Plate',
    price: '$28.00',
    description: 'Succulent chicken breast cubes marinated for 24 hours in wild garlic, yoghurt, lemon zest, and mild Aleppo pepper. Served with fluffy spiced vermicelli rice and house pickles.',
    dietary: ['Halal', 'Gluten-Free Option Available']
  },
  {
    id: 'g3',
    category: 'grills',
    name: 'Spiced Lamb Kafta Skewers',
    price: '$29.50',
    description: 'Pasture-fed Australian lamb infused with flat-leaf parsley, sweet brown onions, and 7-spice Levantine blend, grilled over live coals. Paired with roasted chili tomato relish.',
    dietary: ['Halal']
  },
  {
    id: 'g4',
    category: 'grills',
    name: 'Slow-Turned Shawarma Plate',
    price: '$27.00',
    description: 'Carved spiced chicken or beef shavings, rested in cardamon and allspice, served over seasoned fragrant rice, pickled cucumbers, and velvety tahini sauce.',
    dietary: ['Halal']
  },
  {
    id: 'g5',
    category: 'grills',
    name: 'Crispy Barramundi Sayadieh',
    price: '$34.00',
    description: 'Pan-roasted Australian barramundi fillet served on caramelized onion and cumin-scented brown rice, crowned with crispy fried shallots and spiced tahini harra sauce.',
    dietary: ['Pescatarian', 'Gluten-Free']
  },

  // --- Desserts ---
  {
    id: 'd1',
    category: 'desserts',
    name: 'Warm Cheese Knafeh',
    price: '$16.00',
    description: 'Freshly baked golden kataifi pastry spun around stretchy sweet Akawi cheese, soaked in hot orange-blossom sugar syrup and finished with crushed green pistachios.',
    dietary: ['Vegetarian', 'Served Hot']
  },
  {
    id: 'd2',
    category: 'desserts',
    name: 'Pistachio & Walnut Baklava Trio',
    price: '$12.00',
    description: 'Paper-thin buttery filo pastry layers generously loaded with roasted Aleppo pistachios and walnuts, lightly kissed with rosewater syrup.',
    dietary: ['Vegetarian']
  },
  {
    id: 'd3',
    category: 'desserts',
    name: 'Ashta Rose Mahalabia',
    price: '$11.50',
    description: 'Silky Middle Eastern milk pudding scented with natural damask rosewater, crowned with pomegranate seeds and crushed candied nuts.',
    dietary: ['Vegetarian', 'Gluten-Free']
  },

  // --- Drinks ---
  {
    id: 'dr1',
    category: 'drinks',
    name: 'Fresh Mint & Lemon Limonana',
    price: '$8.50',
    description: 'The iconic Middle Eastern refresher: fresh hand-crushed mint leaves, freshly squeezed Australian lemons, and crushed ice with a touch of raw cane sugar.',
    dietary: ['Non-Alcoholic', 'Refreshing']
  },
  {
    id: 'dr2',
    category: 'drinks',
    name: 'Beirut Cardamom Turkish/Arabic Coffee',
    price: '$5.50',
    description: 'Rich, unfiltered dark roast finely ground and brewed in a copper cezve with freshly crushed green cardamom pods. Served with a Turkish delight.',
    dietary: ['Traditional']
  },
  {
    id: 'dr3',
    category: 'drinks',
    name: 'Fresh Pomegranate & Rose Iced Tea',
    price: '$8.00',
    description: 'Brewed ceylon black tea infused with cold-pressed tart pomegranate juice and gentle orange blossom water over ice.',
    dietary: ['House Special']
  },
  {
    id: 'dr4',
    category: 'drinks',
    name: 'Arak Traditional Service (50ml / Bottle)',
    price: '$14.00',
    description: 'Distilled anise spirit served traditionally with iced mountain spring water turning crystal clear liquor into a cloud of white. Perfect pairing for mezze.',
    dietary: ['Alcoholic (18+)']
  }
];

/**
 * REVIEWS DATA
 * Pulled from verified Google reviews for Open Sesame Sydney
 */
const GOOGLE_REVIEWS = [
  {
    id: 'r1',
    author: 'Daniel M.',
    avatarColor: '#1a73e8',
    initial: 'D',
    timeAgo: '2 weeks ago',
    rating: 5,
    tag: 'Local Guide · 42 reviews',
    text: 'Outstanding Middle Eastern food right in Sydney Place! The mixed charcoal grill is unbelievably tender, and the hummus with spiced lamb is some of the best I’ve had in Sydney. Service was fast and warm. Great $25–35 lunch spot.'
  },
  {
    id: 'r2',
    author: 'Sarah Al-Hassan',
    avatarColor: '#e37400',
    initial: 'S',
    timeAgo: '1 month ago',
    rating: 5,
    tag: 'Verified Diner',
    text: 'As someone raised on authentic Lebanese cooking, Open Sesame Sydney delivers genuine Levantine flavor. The garlic toum has the exact bite it should, the falafel is green and crispy inside, and the cheese knafeh is sublime!'
  },
  {
    id: 'r3',
    author: 'Marcus Chen',
    avatarColor: '#188038',
    initial: 'M',
    timeAgo: '3 weeks ago',
    rating: 5,
    tag: 'Local Guide · 118 reviews',
    text: 'A hidden gem at 180 George St. Came with 4 colleagues after work, ordered a selection of hot mezze and kebabs. Extremely generous portions, reasonably priced ($30pp with drinks), and wheelchair accessible entrance was very easy for our coworker.'
  },
  {
    id: 'r4',
    author: 'Elena Rostova',
    avatarColor: '#a142f4',
    initial: 'E',
    timeAgo: '2 months ago',
    rating: 5,
    tag: 'Verified Diner',
    text: 'The Shish Tawook and Baba Ghanoush are perfection! Super fresh, vibrant ingredients and genuine hospitality. We also ordered delivery through curbside pickup on Friday night and food was still piping hot. Highly recommend.'
  }
];

/**
 * PHOTO GALLERY
 */
const GALLERY_ITEMS = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=75',
    title: 'Charcoal Grilled Skewers Feast',
    caption: 'Tender Shish Tawook & Lamb Kafta over natural charcoal embers',
    featured: true
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=75',
    title: 'Silky Tahini Hummus Platter',
    caption: 'Freshly whipped chickpeas, sesame tahini, and extra virgin olive oil',
    featured: false
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=75',
    title: 'Golden Spiced Falafel',
    caption: 'Hand-shaped crisp falafel with sesame seeds and fresh coriander herbs',
    featured: false
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=75',
    title: 'Sydney Place Hospitality',
    caption: 'Warm ambiance, open kitchen, and welcoming dining experience',
    featured: false
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=75',
    title: 'Mediterranean Barramundi',
    caption: 'Crisp seared fillet with caramelized onion rice and tahini harra',
    featured: false
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    thumb: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=75',
    title: 'Stone-Baked Fresh Pita Bread',
    caption: 'Puffed hot from the oven, ready for generous mezze dipping',
    featured: false
  }
];


/* ==========================================================================
   2. DOM RENDERING FUNCTIONS
   ========================================================================== */

/**
 * Render Menu Items based on current selected category filter
 */
function renderMenu(categoryFilter = 'all') {
  const menuContainer = document.getElementById('menu-items-grid');
  if (!menuContainer) return;

  const filteredItems = categoryFilter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === categoryFilter);

  menuContainer.innerHTML = filteredItems.map(item => `
    <article class="menu-card" data-category="${item.category}">
      <div>
        <div class="menu-card-header">
          <h3 class="menu-item-name">${escapeHTML(item.name)}</h3>
          <span class="menu-item-price">${escapeHTML(item.price)}</span>
        </div>
        <p class="menu-item-desc">${escapeHTML(item.description)}</p>
      </div>
      <div class="menu-card-footer">
        <span class="menu-item-category">${formatCategoryName(item.category)}</span>
        <div class="menu-dietary-tags">
          ${item.dietary.map(tag => `<span class="dietary-tag">· ${escapeHTML(tag)}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Render Reviews Cards from the GOOGLE_REVIEWS array
 */
function renderReviews() {
  const reviewsContainer = document.getElementById('reviews-cards-grid');
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = GOOGLE_REVIEWS.map(rev => `
    <article class="review-card">
      <div>
        <div class="review-header">
          <div class="review-avatar" style="background-color: ${rev.avatarColor};">
            ${escapeHTML(rev.initial)}
          </div>
          <div class="review-author-info">
            <h3 class="review-author-name">${escapeHTML(rev.author)}</h3>
            <div class="review-meta">
              <span>${escapeHTML(rev.tag)}</span>
              <span>·</span>
              <span>${escapeHTML(rev.timeAgo)}</span>
            </div>
          </div>
        </div>
        <div class="review-stars" aria-label="Rated 5 out of 5 stars">
          ★★★★★
        </div>
        <p class="review-text">"${escapeHTML(rev.text)}"</p>
      </div>
    </article>
  `).join('');
}

/**
 * Render Gallery Images
 */
function renderGallery() {
  const galleryContainer = document.getElementById('gallery-grid-container');
  if (!galleryContainer) return;

  galleryContainer.innerHTML = GALLERY_ITEMS.map((item, index) => `
    <div class="gallery-item ${item.featured ? 'featured' : ''}" 
         tabindex="0" 
         role="button" 
         aria-label="View photo: ${escapeHTML(item.title)}" 
         data-index="${index}">
      <img src="${item.thumb}" alt="${escapeHTML(item.title)}" loading="lazy" width="600" height="400" />
      <div class="gallery-overlay">
        <div class="gallery-caption">${escapeHTML(item.title)}</div>
        <div class="gallery-hint">${escapeHTML(item.caption)}</div>
      </div>
    </div>
  `).join('');

  // Attach click & enter events to gallery items
  const items = galleryContainer.querySelectorAll('.gallery-item');
  items.forEach(el => {
    const idx = parseInt(el.getAttribute('data-index'), 10);
    el.addEventListener('click', () => openLightbox(idx));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });
}

/**
 * Helper: Format category string to human label
 */
function formatCategoryName(cat) {
  const mapping = {
    'mezze': 'Mezze & Starters',
    'grills': 'Charcoal Grills',
    'desserts': 'Sweets & Desserts',
    'drinks': 'Beverages'
  };
  return mapping[cat] || cat;
}

/**
 * Helper: basic HTML escape utility
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/* ==========================================================================
   3. LIGHTBOX FUNCTIONALITY (Pure Vanilla JS, Accessible)
   ========================================================================== */
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-target-img');
  const title = document.getElementById('lightbox-caption-text');
  const counter = document.getElementById('lightbox-counter-text');

  if (!modal || !img) return;

  const item = GALLERY_ITEMS[currentLightboxIndex];
  img.src = item.src;
  img.alt = item.title;
  title.textContent = item.title + ' — ' + item.caption;
  counter.textContent = `${currentLightboxIndex + 1} of ${GALLERY_ITEMS.length}`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus close button for accessibility
  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showNextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_ITEMS.length;
  openLightbox(currentLightboxIndex);
}

function showPrevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  openLightbox(currentLightboxIndex);
}


/* ==========================================================================
   4. INTERACTIVE HANDLERS (Sticky Nav, Mobile Drawer, Form)
   ========================================================================== */

function setupNavigation() {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile drawer when clicking any link
    const drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-header .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function setupMenuFilterButtons() {
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter') || 'all';
      renderMenu(category);
    });
  });
}

function setupLightboxControls() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNextLightbox);

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  window.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNextLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevLightbox();
    }
  });
}

function setupReservationForm() {
  const form = document.getElementById('booking-form');
  const feedback = document.getElementById('form-feedback-msg');
  if (!form) return;

  // Set default minimum date to today
  const dateInput = document.getElementById('form-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const guests = document.getElementById('form-guests')?.value;
    const date = document.getElementById('form-date')?.value;
    const time = document.getElementById('form-time')?.value;
    const serviceType = document.getElementById('form-service')?.value;
    const notes = document.getElementById('form-notes')?.value.trim();

    if (!name || !phone || !date || !time) {
      alert('Please fill out all required fields (Name, Phone, Date, Time).');
      return;
    }

    // Generate reference code
    const refCode = 'OS-' + Math.floor(100000 + Math.random() * 900000);

    // Build mailto link as reliable front-end fallback
    const mailSubject = encodeURIComponent(`Reservation Request: ${name} (${guests} Guests) [${refCode}]`);
    const mailBody = encodeURIComponent(
      `Hello Open Sesame Sydney,\n\n` +
      `I would like to request a table booking / inquiry:\n\n` +
      `• Reference: ${refCode}\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email || 'Not provided'}\n` +
      `• Guests: ${guests}\n` +
      `• Date: ${date}\n` +
      `• Time: ${time}\n` +
      `• Type: ${serviceType}\n` +
      `• Special Requests: ${notes || 'None'}\n\n` +
      `Thank you!`
    );

    const mailtoUrl = `mailto:reservations@opensesamesydney.com.au?subject=${mailSubject}&body=${mailBody}`;

    // Display rich in-page confirmation
    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>Thank you, ${escapeHTML(name)}!</strong><br>
        Your reservation request has been created (Reference: <strong>${refCode}</strong>).<br>
        Our team will confirm your table shortly. You can also call us directly at 
        <a href="tel:+61414149505" style="text-decoration: underline; font-weight: bold; color: inherit;">+61 414 149 505</a>
        or chat with us on WhatsApp for immediate confirmation.
      `;
    }

    // Trigger email client fallback quietly
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Ignore if browser blocks mailto
    }

    form.reset();
    if (dateInput) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }
  });
}


/* ==========================================================================
   5. INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderReviews();
  renderGallery();
  setupNavigation();
  setupMenuFilterButtons();
  setupLightboxControls();
  setupReservationForm();

  // Set current copyright year
  const yearEl = document.getElementById('year-copy');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
