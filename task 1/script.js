// ── Hamburger toggle ──
const ham = document.getElementById('hamburger');
const mMenu = document.getElementById('mobile-menu');

ham.addEventListener('click', () => {
  mMenu.classList.toggle('open');
  ham.querySelector('i').className = mMenu.classList.contains('open')
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
});

mMenu.querySelectorAll('.mob-link').forEach(link =>
  link.addEventListener('click', () => {
    mMenu.classList.remove('open');
    ham.querySelector('i').className = 'fa-solid fa-bars';
  })
);

// ── Scroll-reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Navbar glass on scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 40
      ? 'rgba(10,10,15,0.95)'
      : 'rgba(10,10,15,0.72)';
});