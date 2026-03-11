// Main JS for my-portfolio
// Update copyright year
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const container = document.querySelector('.nav-container');
  if (toggle && container) {
    toggle.addEventListener('click', () => {
      const isOpen = container.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Floating color button: change root --bg to a random pastel
  const colorBtn = document.querySelector('.color-btn');
  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      const hue = Math.floor(Math.random() * 360);
      const sat = 70; // saturation
      const light = 92; // lightness for pastel
      const color = `hsl(${hue} ${sat}% ${light}%)`;
      document.documentElement.style.setProperty('--bg', color);
    });
  }
});
