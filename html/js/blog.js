/* blog.js - Blog entry loader (v2 - HTML rendering fixed) */

const BlogSystem = {
  container: null,
  entries: [],
  dataPath: '/data/blog-entries.json',

  async init() {
    this.container = document.getElementById('blog-list');
    if (!this.container) return;

    try {
      await this.loadEntries();
      this.render();
    } catch (err) {
      console.error('Failed to load blog entries:', err);
      this.renderError();
    }
  },

  async loadEntries() {
    const resp = await fetch(this.dataPath);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    this.entries = data.entries || [];
  },

  render() {
    if (this.entries.length === 0) {
      this.container.innerHTML = '<div class="empty-state">No blog entries yet.</div>';
      return;
    }

    // Build HTML string
    let html = '';
    this.entries.forEach((entry, idx) => {
      html += this.renderCard(entry, idx);
    });
    
    // Insert into DOM
    this.container.innerHTML = html;

    // Attach click handlers
    this.container.querySelectorAll('.blog-card-header').forEach(header => {
      header.addEventListener('click', () => this.toggleCard(header));
    });
  },

  renderCard(entry, idx) {
    const date = this.escapeHtml(entry.date || '');
    const category = this.escapeHtml(entry.category || 'post');
    const title = this.escapeHtml(entry.title || '');
    const intro = entry.intro ? this.renderIntro(entry.intro) : '';
    const content = entry.conversation ? 
      this.renderConversation(entry.conversation) : 
      this.renderContent(entry.content || '');

    return `
      <article class="blog-card" data-index="${idx}">
        <div class="blog-card-header">
          <div class="blog-card-info">
            <h2 class="blog-card-title">${title}</h2>
            <div class="blog-card-meta">
              <span class="date">${date}</span>
              <span>•</span>
              <span class="category">${category}</span>
            </div>
          </div>
          <div class="blog-card-expand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <div class="blog-card-content">
          <div class="blog-card-body">
            ${intro}
            ${content}
          </div>
        </div>
      </article>
    `;
  },

  // Intro paragraphs - allow HTML (strong, em tags)
  renderIntro(intro) {
    if (Array.isArray(intro)) {
      return '<div class="blog-intro">' + intro.map(p => '<p>' + p + '</p>').join('') + '</div>';
    }
    return '<div class="blog-intro"><p>' + intro + '</p></div>';
  },

  // Generic content - escape HTML
  renderContent(content) {
    if (Array.isArray(content)) {
      return content.map(p => '<p>' + this.escapeHtml(p) + '</p>').join('');
    }
    return '<p>' + this.escapeHtml(content) + '</p>';
  },

  renderConversation(messages) {
    let html = '<div class="conversation">';
    messages.forEach(msg => {
      html += this.renderMessage(msg);
    });
    html += '</div>';
    return html;
  },

  renderMessage(msg) {
    const role = msg.role === 'human' ? 'human' : 'robot';
    const label = role === 'human' ? 'Human' : 'Robot';
    const content = this.renderMessageContent(msg.content);

    return `
      <div class="message ${role}">
        <div class="message-header">${label}</div>
        <div class="message-content">${content}</div>
      </div>
    `;
  },

  // Message content - allow HTML for formatting
  renderMessageContent(content) {
    if (Array.isArray(content)) {
      let html = '';
      content.forEach(item => {
        if (typeof item === 'string') {
          // String content - allow HTML tags like <em>, <strong>
          html += '<p>' + item + '</p>';
        } else if (item && item.type === 'list') {
          // List items - allow HTML in items
          const listItems = item.items.map(li => '<li>' + li + '</li>').join('');
          html += item.ordered ? '<ol>' + listItems + '</ol>' : '<ul>' + listItems + '</ul>';
        } else if (item && item.type === 'code') {
          // Code - escape HTML
          html += '<code>' + this.escapeHtml(item.text) + '</code>';
        }
      });
      return html;
    }
    // Single string content - allow HTML
    return '<p>' + content + '</p>';
  },

  toggleCard(header) {
    const card = header.closest('.blog-card');
    const wasExpanded = card.classList.contains('expanded');
    
    // Close all cards
    this.container.querySelectorAll('.blog-card.expanded').forEach(c => {
      c.classList.remove('expanded');
    });

    // Toggle clicked card if it wasn't already expanded
    if (!wasExpanded) {
      card.classList.add('expanded');
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  },

  renderError() {
    this.container.innerHTML = '<div class="error-state">Failed to load blog entries. Please try refreshing.</div>';
  },

  // Escape HTML for user-generated/untrusted content
  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  BlogSystem.init();
});
