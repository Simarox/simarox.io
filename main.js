// ── NAV SCROLL BEHAVIOUR ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('top');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('top');
  }
});

// ── SMOOTH SCROLL ──
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ── MOBILE HAMBURGER MENU ──
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  const links = document.querySelector('.nav-links');

  if (menuOpen) {
    links.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: rgba(11,28,45,.98);
      padding: 2rem;
      gap: 1.5rem;
      backdrop-filter: blur(12px);
      z-index: 999;
      border-top: 1px solid rgba(184,150,62,.2);
    `;
  } else {
    links.style.display = 'none';
  }
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) {
      menuOpen = false;
      document.querySelector('.nav-links').style.display = 'none';
    }
  });
});

// ── SCROLL REVEAL ANIMATION ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => observer.observe(el));

// ── CONTACT FORM SUBMISSION ──
function handleSubmit() {
  alert('Thank you for your enquiry. A member of our team will be in touch within 24 hours.');
}
