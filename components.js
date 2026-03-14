// =============================================
// LAUNCIFY — Shared Components (Nav + Footer)
// =============================================

function getNav(activePage) {
  return `
  <nav class="nav" id="mainNav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo"><em>Launcify</em></a>
      <ul class="nav-links">
        <li><a href="index.html" class="${activePage==='home'?'active':''}">Home</a></li>
        <li><a href="services.html" class="${activePage==='services'?'active':''}">Services</a></li>
        <li><a href="work.html" class="${activePage==='work'?'active':''}">Work</a></li>
        <li><a href="about.html" class="${activePage==='about'?'active':''}">About</a></li>
        <li><a href="contact.html" class="${activePage==='contact'?'active':''}">Contact</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="work.html">Work</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="scroll-progress" id="scrollProgress"></div>
  <div class="cursor-ring" id="cursorRing"></div>
  <div class="cursor-dot" id="cursorDot"></div>
  `;
}

function getFooter() {
  return `
  <footer class="footer blueprint-bg">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo"><em>Launcify</em></div>
          <p class="footer-tagline">Built with AI. Deployed with precision.</p>
        </div>
        <div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="work.html">Work</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-credits">
            Co-founded by<br>
            <strong>Saksham Garg</strong> — Technical Builder<br>
            <strong>Yadyansh</strong> — Growth Lead
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} <em>Launcify</em>. All rights reserved.</p>
        <div class="footer-socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="GitHub">GH</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function getMobileCTA() {
  return `
  <div class="mobile-sticky-cta">
    <a href="contact.html" class="btn-coral">Start a Project →</a>
  </div>
  `;
}

function injectComponents(activePage) {
  // Inject nav at start of body
  document.body.insertAdjacentHTML('afterbegin', getNav(activePage));
  // Inject footer before scripts
  const main = document.querySelector('main');
  if (main) main.insertAdjacentHTML('afterend', getFooter() + getMobileCTA());
}
