const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('main-nav');

menuBtn.addEventListener('click', () => {
  const isActive = menuBtn.classList.toggle('active');
  nav.classList.toggle('show', isActive);
  menuBtn.setAttribute('aria-expanded', isActive);
});

// Cierra el menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !nav.contains(e.target)) {
    menuBtn.classList.remove('active');
    nav.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Cierra con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuBtn.classList.remove('active');
    nav.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});