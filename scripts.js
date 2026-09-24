/* =========================================
   MOBILE MENU
   ========================================= */

const menuButton = document.querySelector("#menu");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {

  menuButton.addEventListener("click", () => {

    const open =
      siteNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

  });


  siteNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      siteNav.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================
   PARALLAX
   DESKTOP + MOBILE
   ========================================= */

const parallaxItems =
  Array.from(
    document.querySelectorAll(".parallax")
  );


const reduceMotionQuery =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


function updateParallax() {

  /*
    Respect accessibility settings.
    If Reduce Motion is enabled on the phone,
    parallax will intentionally be disabled.
  */

  if (reduceMotionQuery.matches) {

    parallaxItems.forEach(item => {

      item.style.transform =
        "translate3d(0, 0, 0)";

    });

    return;
  }


  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;


  const isMobile =
    window.innerWidth <= 820;


  parallaxItems.forEach(item => {

    const parent =
      item.parentElement;

    if (!parent) {
      return;
    }


    const rect =
      parent.getBoundingClientRect();


    /*
      Ignore elements far outside the viewport.
    */

    if (
      rect.bottom < -200 ||
      rect.top > viewportHeight + 200
    ) {
      return;
    }


    const elementCenter =
      rect.top +
      rect.height / 2;


    const viewportCenter =
      viewportHeight / 2;


    const centerOffset =
      elementCenter -
      viewportCenter;


    const baseSpeed =
      parseFloat(
        item.dataset.speed || "0.05"
      );


    /*
      Mobile is still slightly gentler than desktop,
      but strong enough to actually be visible.
    */

    const effectiveSpeed =
      isMobile
        ? baseSpeed * 0.85
        : baseSpeed;


    const maxMovement =
      isMobile
        ? 32
        : 55;


    const movement =
      Math.max(
        -maxMovement,
        Math.min(
          maxMovement,
          centerOffset *
          effectiveSpeed *
          -1
        )
      );


    item.style.transform =
      `translate3d(0, ${movement}px, 0)`;

  });

}


/* =========================================
   RAF SCROLL HANDLER
   ========================================= */

let parallaxTicking = false;


function requestParallaxUpdate() {

  if (parallaxTicking) {
    return;
  }


  parallaxTicking = true;


  window.requestAnimationFrame(() => {

    updateParallax();

    parallaxTicking = false;

  });

}


/* =========================================
   PARALLAX EVENTS
   ========================================= */

window.addEventListener(
  "scroll",
  requestParallaxUpdate,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  requestParallaxUpdate
);


window.addEventListener(
  "orientationchange",
  requestParallaxUpdate
);


window.addEventListener(
  "load",
  requestParallaxUpdate
);


/*
  Helpful when returning to the page
  from Safari's back-forward cache.
*/

window.addEventListener(
  "pageshow",
  requestParallaxUpdate
);


if (window.visualViewport) {

  window.visualViewport.addEventListener(
    "resize",
    requestParallaxUpdate
  );

}


updateParallax();


/* =========================================
   SEAMLESS LOGO MARQUEE
   ========================================= */

const logoTrack =
  document.querySelector(".logo-track");


if (
  logoTrack &&
  !logoTrack.dataset.cloned
) {

  logoTrack.innerHTML +=
    logoTrack.innerHTML;

  logoTrack.dataset.cloned =
    "true";

}