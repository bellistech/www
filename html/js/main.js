/* bellis.tech - Main JavaScript v1.0.0 12-28-25
   Shared functionality across all pages
*/

// ===========================================
// Security: HTML sanitization
// ===========================================
const escapeHtml = (str) => {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

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
// Particle Background System
// ===========================================
const ParticleSystem = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    settings: {
        count: 150,
        maxSize: 1.5,
        speed: 0.2,
        color: { r: 74, g: 158, b: 255 }, // --accent color
        maxBrightness: 0.6
    },

    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.settings.count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.settings.speed,
                vy: (Math.random() - 0.5) * this.settings.speed,
                size: Math.random() * this.settings.maxSize + 0.5,
                brightness: Math.random() * this.settings.maxBrightness
            });
        }
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Subtle brightness variation
            p.brightness += (Math.random() - 0.5) * 0.02;
            p.brightness = Math.max(0.1, Math.min(this.settings.maxBrightness, p.brightness));

            // Draw particle
            const { r, g, b } = this.settings.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.brightness})`;
            this.ctx.fill();
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    },

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
};

// ===========================================
// Initialize on DOM ready
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    ParticleSystem.init();
});

// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ParticleSystem, escapeHtml, sanitizeUrl };
}
