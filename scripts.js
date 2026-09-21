const menuButton = document.querySelector('#menu');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const parallaxItems = Array.from(document.querySelectorAll('.parallax'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateParallax() {
  if (prefersReducedMotion || window.innerWidth < 821) {
    parallaxItems.forEach(item => {
      item.style.transform = 'translate3d(0,0,0)';
    });
    return;
  }

  const viewportHeight = window.innerHeight;

  parallaxItems.forEach(item => {
    const rect = item.parentElement.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
    const speed = parseFloat(item.dataset.speed || '0.05');
    const movement = Math.max(-32, Math.min(32, centerOffset * speed * -1));
    item.style.transform = `translate3d(0, ${movement}px, 0)`;
  });
}

let ticking = false;
function requestParallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', requestParallax, { passive: true });
window.addEventListener('resize', requestParallax);
window.addEventListener('load', requestParallax);
requestParallax();

/* existing menu code */


/* existing parallax code */


/* =========================================
   SEAMLESS LOGO MARQUEE
   ========================================= */

const logoTrack = document.querySelector(".logo-track");

if (logoTrack && !logoTrack.dataset.cloned) {
  logoTrack.innerHTML += logoTrack.innerHTML;
  logoTrack.dataset.cloned = "true";
}
