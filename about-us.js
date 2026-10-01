/* =========================================================
   MODIS ABOUT PAGE
   Isolated mobile menu + motion.
   Does not depend on the site's global scripts.js.
   ========================================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

const aboutMenuButton =
  document.querySelector("#about-menu");

const aboutNav =
  document.querySelector(".about-site-nav");


if (aboutMenuButton && aboutNav) {

  aboutMenuButton.addEventListener(
    "click",
    () => {

      const open =
        aboutNav.classList.toggle("open");

      aboutMenuButton.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    }
  );


  aboutNav.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          aboutNav.classList.remove("open");

          aboutMenuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================
   ABOUT PAGE MOTION
   ========================================= */

const aboutParallaxItems =
  Array.from(
    document.querySelectorAll(
      "[data-about-parallax]"
    )
  );

const aboutScaleItem =
  document.querySelector(
    "[data-about-scale]"
  );

const aboutReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


function updateAboutParallax() {

  if (aboutReducedMotion.matches) {

    aboutParallaxItems.forEach(item => {
      item.style.transform =
        "translate3d(0,0,0)";
    });

    return;
  }


  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;

  const isMobile =
    window.innerWidth <= 820;


  aboutParallaxItems.forEach(item => {

    const parent =
      item.parentElement;

    if (!parent) {
      return;
    }


    const rect =
      parent.getBoundingClientRect();


    if (
      rect.bottom < -250 ||
      rect.top > viewportHeight + 250
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

    const speed =
      parseFloat(
        item.dataset.speed ||
        "0.045"
      );

    const configuredMax =
      parseFloat(
        item.dataset.max ||
        "44"
      );

    const mobileMultiplier =
      isMobile
        ? 0.72
        : 1;

    const maxMovement =
      configuredMax *
      mobileMultiplier;

    const movement =
      Math.max(
        -maxMovement,
        Math.min(
          maxMovement,
          centerOffset *
          speed *
          -1 *
          mobileMultiplier
        )
      );


    item.style.transform =
      `translate3d(0, ${movement}px, 0)`;

  });

}


function updateAboutScale() {

  if (
    !aboutScaleItem ||
    aboutReducedMotion.matches
  ) {
    return;
  }


  const rect =
    aboutScaleItem
      .getBoundingClientRect();

  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;

  const center =
    rect.top +
    rect.height / 2;

  const viewportCenter =
    viewportHeight / 2;

  const distance =
    Math.abs(
      center -
      viewportCenter
    );

  const range =
    viewportHeight *
    0.82;

  let proximity =
    1 -
    distance /
    range;

  proximity =
    Math.max(
      0,
      Math.min(
        1,
        proximity
      )
    );

  const eased =
    1 -
    Math.pow(
      1 - proximity,
      2.1
    );

  const isMobile =
    window.innerWidth <= 820;

  const minScale =
    isMobile
      ? 0.96
      : 0.92;

  const maxScale =
    isMobile
      ? 1.035
      : 1.075;

  const scale =
    minScale +
    (
      maxScale -
      minScale
    ) *
    eased;


  aboutScaleItem.style.transform =
    `translate(-50%, -50%) scale(${scale.toFixed(4)})`;

}


/* =========================================
   SINGLE RAF LOOP
   ========================================= */

let aboutMotionTicking =
  false;


function updateAboutMotion() {

  updateAboutParallax();
  updateAboutScale();

}


function requestAboutMotion() {

  if (aboutMotionTicking) {
    return;
  }


  aboutMotionTicking =
    true;


  window.requestAnimationFrame(
    () => {

      updateAboutMotion();

      aboutMotionTicking =
        false;

    }
  );

}


window.addEventListener(
  "scroll",
  requestAboutMotion,
  { passive: true }
);

window.addEventListener(
  "resize",
  requestAboutMotion
);

window.addEventListener(
  "orientationchange",
  requestAboutMotion
);

window.addEventListener(
  "pageshow",
  requestAboutMotion
);

if (window.visualViewport) {

  window.visualViewport.addEventListener(
    "resize",
    requestAboutMotion
  );

}


updateAboutMotion();
