/* ================================================
   THOMAS CHERIAN — PORTFOLIO JS
================================================ */

// Sticky nav
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('stuck', window.scrollY > 10);
}, { passive: true });

// Mobile burger
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// Scroll reveal for .fade-up elements
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => fadeObs.observe(el));

// Skill bar animation
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.s-fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, i * 100);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const barsCol = document.querySelector('.bars-col');
if (barsCol) skillObs.observe(barsCol);

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.desk-nav a[href^="#"]');
const secObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navAs.forEach(a => {
        const isActive = a.getAttribute('href') === `#${id}`;
        if (!a.classList.contains('nav-btn')) {
          a.style.color = isActive ? 'var(--navy)' : '';
          a.style.fontWeight = isActive ? '500' : '';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => secObs.observe(s));
