import './style.css';

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Scroll-triggered fade-ins (also handles staggered children)
const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// Scroll to top button
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Cursor-follow glow on the hero terminal card
const heroVisual = document.getElementById('heroVisual');
if (heroVisual) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    heroVisual.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    heroVisual.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}

// Contact form (Formspree AJAX submit, no email ever shown in the DOM)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form && status) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (!action || action.includes('{your-form-id}')) {
      status.textContent = 'Form not connected yet — add your Formspree endpoint in index.html.';
      status.className = 'form-status err';
      return;
    }
    status.textContent = 'Sending…';
    status.className = 'form-status';
    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = 'Message sent — thanks for reaching out!';
        status.className = 'form-status ok';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again or use LinkedIn.';
        status.className = 'form-status err';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again or use LinkedIn.';
      status.className = 'form-status err';
    }
  });
}
