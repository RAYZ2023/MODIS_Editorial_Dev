/* =========================================================
   MODIS ABOUT PAGE
   Page-specific interactions
   ========================================================= */

(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const parallaxItems = Array.from(
    document.querySelectorAll("[data-about-parallax]")
  );

  if (reduceMotion || !parallaxItems.length) {
    parallaxItems.forEach((item) => {
      item.style.transform = "";
    });
    return;
  }

  let ticking = false;

  function updateParallax() {
    const viewportHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 820;

    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return;
      }

      const speed = Number(item.dataset.speed || 0.045);
      const requestedMax = Number(item.dataset.max || 55);
      const cap = Math.min(requestedMax, isMobile ? 32 : 55);

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = viewportCenter - elementCenter;

      let offset = distance * speed;

      if (isMobile) {
        offset *= 0.85;
      }

      offset = Math.max(-cap, Math.min(cap, offset));

      item.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(updateParallax);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);

  requestUpdate();
})();
