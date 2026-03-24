// ===========================================
// SECURITY: HTML entity encoding for XSS prevention
// ===========================================
const escapeHtml = (str) => {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

// Validate URLs - only allow http/https
const sanitizeUrl = (url) => {
  if (!url) return '#';
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.href;
    }
  } catch (e) {}
  return '#';
};

// ===========================================
// Particle Background
// ===========================================
let particleSettings = {
  count: 200,
  maxSize: 1.5,
  speed: 0.25,
  brightness: 0.6
};

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}

function createParticles() {
  particles = [];
  const particleCount = particleSettings.count;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * particleSettings.maxSize + 0.5,
      opacity: Math.random() * particleSettings.brightness + 0.1,
      speed: Math.random() * particleSettings.speed + 0.1,
      offset: Math.random() * Math.PI * 2
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const time = Date.now() * 0.001;
  
  particles.forEach(p => {
    const wobbleX = Math.sin(time * 0.5 + p.offset) * 2;
    const drawX = p.x + wobbleX;
    const drawY = (p.y - (time * p.speed * 30) % canvas.height + canvas.height) % canvas.height;
    
    ctx.beginPath();
    ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(74, 158, 255, ${p.opacity})`;
    ctx.fill();
  });
  
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

// Star controls
document.getElementById('star-count').addEventListener('input', (e) => {
  particleSettings.count = parseInt(e.target.value);
  document.getElementById('star-count-value').textContent = e.target.value;
  createParticles();
});

document.getElementById('star-size').addEventListener('input', (e) => {
  particleSettings.maxSize = parseInt(e.target.value) / 10;
  document.getElementById('star-size-value').textContent = (particleSettings.maxSize).toFixed(1) + 'px';
  createParticles();
});

document.getElementById('star-speed').addEventListener('input', (e) => {
  particleSettings.speed = parseInt(e.target.value) / 100;
  document.getElementById('star-speed-value').textContent = e.target.value;
  createParticles();
});

document.getElementById('star-brightness').addEventListener('input', (e) => {
  particleSettings.brightness = parseInt(e.target.value) / 100;
  document.getElementById('star-brightness-value').textContent = e.target.value + '%';
  createParticles();
});

// ===========================================
// RSS Feed System - Dynamic from JSON config
// ===========================================
const CONFIG_URL = '/rss_config/feeds.json';
const CACHE_URL = '/rss_cache_n_fetch';
const ITEMS_PER_FEED = 2;
const MAX_DISPLAY_ITEMS = 30;

// Category display names
const CATEGORY_NAMES = {
  'networking': 'Networking',
  'sre_devops': 'SRE / DevOps',
  'linux_systems': 'Linux / Systems',
  'news_community': 'News / Community',
  'security': 'Security',
  'other_interests': 'Other Interests'
};

let feedConfig = null;
let feedCache = {};
let currentFilter = null;

const feedGrid = document.getElementById('feed-grid');
const feedItems = document.getElementById('feed-items');
const itemsLoading = document.getElementById('items-loading');
const feedFilterInfo = document.getElementById('feed-filter-info');

// ===========================================
// Build category cards from config
// ===========================================
function buildFeedGrid(config) {
  feedGrid.innerHTML = '';
  
  for (const [categoryKey, feeds] of Object.entries(config.categories)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'feed-category';
    
    const categoryName = CATEGORY_NAMES[categoryKey] || categoryKey;
    const h3 = document.createElement('h3');
    h3.textContent = categoryName;
    categoryDiv.appendChild(h3);
    
    const ul = document.createElement('ul');
    ul.className = 'feed-list';
    
    for (const [feedKey, feedInfo] of Object.entries(feeds)) {
      const li = document.createElement('li');
      
      // Site link
      const siteLink = document.createElement('a');
      siteLink.href = sanitizeUrl(feedInfo.site_url);
      siteLink.textContent = escapeHtml(feedInfo.name);
      siteLink.target = '_blank';
      siteLink.rel = 'noopener';
      li.appendChild(siteLink);
      
      // Links container
      const linksSpan = document.createElement('span');
      linksSpan.className = 'feed-links';
      
      // Show button
      const showBtn = document.createElement('button');
      showBtn.className = 'show-link';
      showBtn.textContent = 'show';
      showBtn.dataset.feed = feedKey;
      showBtn.dataset.category = categoryKey;
      showBtn.addEventListener('click', () => {
        showSingleFeed(categoryKey, feedKey, feedInfo.name);
      });
      linksSpan.appendChild(showBtn);
      
      // RSS link
      const rssLink = document.createElement('a');
      rssLink.href = sanitizeUrl(feedInfo.url);
      rssLink.className = 'rss-link';
      rssLink.textContent = 'rss';
      rssLink.target = '_blank';
      rssLink.rel = 'noopener';
      linksSpan.appendChild(rssLink);
      
      li.appendChild(linksSpan);
      ul.appendChild(li);
    }
    
    categoryDiv.appendChild(ul);
    feedGrid.appendChild(categoryDiv);
  }
}

// ===========================================
// Fetch cached feed data
// ===========================================
async function fetchCategoryCache(category) {
  if (feedCache[category] && (Date.now() - feedCache[category].timestamp < 300000)) {
    return feedCache[category].data;
  }
  
  try {
    const resp = await fetch(`${CACHE_URL}/${category}.json`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    feedCache[category] = { data, timestamp: Date.now() };
    return data;
  } catch (e) {
    console.error(`Failed to fetch ${category}:`, e);
    return null;
  }
}

// ===========================================
// Format dates
// ===========================================
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ===========================================
// Display feed items
// ===========================================
function displayItems(items) {
  itemsLoading.style.display = 'none';
  feedItems.innerHTML = '';
  
  if (!items || items.length === 0) {
    feedItems.innerHTML = '<li class="feed-item" style="color: var(--text-secondary);">No items found</li>';
    feedItems.style.display = 'block';
    return;
  }
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'feed-item';
    
    const titleLink = document.createElement('a');
    titleLink.href = sanitizeUrl(item.link);
    titleLink.className = 'feed-item-title';
    titleLink.textContent = escapeHtml(item.title);
    titleLink.target = '_blank';
    titleLink.rel = 'noopener';
    li.appendChild(titleLink);
    
    const meta = document.createElement('span');
    meta.className = 'feed-item-meta';
    
    const source = document.createElement('span');
    source.className = 'feed-item-source';
    source.textContent = escapeHtml(item.source || '');
    meta.appendChild(source);
    
    const dateText = formatDate(item.published);
    if (item.source && dateText) {
      meta.appendChild(document.createTextNode(' • '));
    }
    meta.appendChild(document.createTextNode(dateText));
    
    li.appendChild(meta);
    feedItems.appendChild(li);
  });
  
  feedItems.style.display = 'block';
}

// ===========================================
// Load aggregated feeds (all categories)
// ===========================================
async function loadAggregatedFeeds() {
  itemsLoading.style.display = 'block';
  itemsLoading.textContent = 'Loading feeds...';
  feedItems.style.display = 'none';
  currentFilter = null;
  
  if (!feedConfig) {
    itemsLoading.textContent = 'Feed config not loaded';
    return;
  }
  
  const allItems = [];
  const categories = Object.keys(feedConfig.categories);
  
  const results = await Promise.allSettled(
    categories.map(cat => fetchCategoryCache(cat))
  );
  
  results.forEach((result, idx) => {
    if (result.status === 'fulfilled' && result.value?.feeds) {
      result.value.feeds.forEach(feed => {
        if (feed.items) {
          const items = feed.items.slice(0, ITEMS_PER_FEED).map(item => ({
            ...item,
            source: feed.feed_name
          }));
          allItems.push(...items);
        }
      });
    }
  });
  
  // Sort by date (newest first)
  allItems.sort((a, b) => {
    const dateA = a.published ? new Date(a.published) : new Date(0);
    const dateB = b.published ? new Date(b.published) : new Date(0);
    return dateB - dateA;
  });
  
  displayItems(allItems.slice(0, MAX_DISPLAY_ITEMS));
  updateFilterInfo(null);
}

// ===========================================
// Show single feed
// ===========================================
async function showSingleFeed(category, feedKey, feedName) {
  itemsLoading.style.display = 'block';
  itemsLoading.textContent = `Loading ${feedName}...`;
  feedItems.style.display = 'none';
  currentFilter = { category, feedKey, feedName };
  
  const data = await fetchCategoryCache(category);
  if (!data?.feeds) {
    displayItems([]);
    updateFilterInfo(currentFilter);
    return;
  }
  
  const feed = data.feeds.find(f => f.feed_id === feedKey);
  if (!feed?.items) {
    displayItems([]);
    updateFilterInfo(currentFilter);
    return;
  }
  
  const items = feed.items.slice(0, 15).map(item => ({
    ...item,
    source: feed.feed_name
  }));
  
  displayItems(items);
  updateFilterInfo(currentFilter);
  
  // Scroll to feed content
  document.querySelector('.live-feeds').scrollIntoView({ behavior: 'smooth' });
}

// ===========================================
// Update filter info display
// ===========================================
function updateFilterInfo(filter) {
  if (filter) {
    feedFilterInfo.innerHTML = `Showing: <strong>${escapeHtml(filter.feedName)}</strong>. <a id="reset-filter" href="#">Show all</a>`;
    document.getElementById('reset-filter').addEventListener('click', (e) => {
      e.preventDefault();
      loadAggregatedFeeds();
    });
  } else {
    feedFilterInfo.innerHTML = 'Showing latest from all sources.';
  }
}

// ===========================================
// Initialize
// ===========================================
async function init() {
  try {
    const resp = await fetch(CONFIG_URL);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    feedConfig = await resp.json();
    
    buildFeedGrid(feedConfig);
    await loadAggregatedFeeds();
  } catch (e) {
    console.error('Failed to load feed config:', e);
    feedGrid.innerHTML = '<div class="feed-error">Failed to load feed configuration</div>';
    itemsLoading.textContent = 'Feed system unavailable';
  }
}

init();
