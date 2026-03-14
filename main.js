// =============================================
// LAUNCIFY — Main Interactivity
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Custom Cursor (desktop only) ----
  const ring = document.getElementById('cursorRing');
  const dot = document.getElementById('cursorDot');
  if (ring && dot && window.matchMedia('(pointer:fine)').matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function animateCursor() {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      requestAnimationFrame(animateCursor);
    })();
    document.querySelectorAll('a, button, .service-card, .case-card, .cofounder-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  } else if (ring && dot) {
    ring.style.display = 'none'; dot.style.display = 'none';
  }

  // ---- Scroll Progress Bar ----
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (window.scrollY / h * 100) + '%';
    }, { passive: true });
  }

  // ---- Sticky Nav ----
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ---- Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // ---- Scroll Reveal ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  }

  // ---- Count-Up Animation ----
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current + suffix;
          }, 25);
          cObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cObserver.observe(el));
  }

  // ---- 3D Card Tilt ----
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
  });

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });

  // ---- Terminal Typewriter ----
  const terminalLines = document.querySelectorAll('.terminal-line');
  if (terminalLines.length) {
    const tObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          terminalLines.forEach((line, i) => {
            setTimeout(() => line.classList.add('visible'), i * 600);
          });
          tObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    tObserver.observe(terminalLines[0].parentElement);
  }

  // ---- Star Particles (Hero) ----
  const starsCanvas = document.getElementById('starsCanvas');
  if (starsCanvas) {
    const ctx = starsCanvas.getContext('2d');
    let stars = [];
    function initStars() {
      starsCanvas.width = starsCanvas.offsetWidth;
      starsCanvas.height = starsCanvas.offsetHeight;
      stars = Array.from({length: 80}, () => ({
        x: Math.random() * starsCanvas.width,
        y: Math.random() * starsCanvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.2,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2
      }));
    }
    function drawStars() {
      ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,178,${s.a})`;
        ctx.fill();
        s.x += s.dx; s.y += s.dy;
        if (s.x < 0 || s.x > starsCanvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > starsCanvas.height) s.dy *= -1;
      });
      requestAnimationFrame(drawStars);
    }
    initStars(); drawStars();
    window.addEventListener('resize', initStars);
  }

  // ---- Connector dot animation (SVG) ----
  document.querySelectorAll('.travel-dot').forEach(dot => {
    const path = dot.closest('svg').querySelector('.wf-line');
    if (path) {
      // Simple CSS animation via offset-path handled in CSS
    }
  });

  // ---- Contact Form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    });
  }
});
