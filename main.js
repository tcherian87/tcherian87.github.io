// ── NAV STICKY ──
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('stuck', window.scrollY > 10);
}, { passive: true });

// ── MOBILE BURGER ──
const brg  = document.getElementById('brg');
const mnav = document.getElementById('mnav');
brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  mnav.classList.toggle('open');
});
mnav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    brg.classList.remove('open');
    mnav.classList.remove('open');
  })
);

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fu').forEach(el => revealObs.observe(el));

// ── SKILL BAR ANIMATION ──
const barCol = document.getElementById('barcol');
if (barCol) {
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sfil').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, i * 90);
        });
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  barObs.observe(barCol);
}

// ── ACTIVE NAV HIGHLIGHT ──
const navLinks = document.querySelectorAll('.dnav a[href^="#"]');
const secObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(a => {
        const match = a.getAttribute('href') === '#' + id;
        if (!a.classList.contains('nbtn')) {
          a.style.color     = match ? 'var(--navy)' : '';
          a.style.fontWeight = match ? '600' : '';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('section[id]').forEach(s => secObs.observe(s));
