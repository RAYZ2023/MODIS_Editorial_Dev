/* =========================================
   MOBILE MENU
   ========================================= */

const menuButton =
  document.querySelector("#menu");

const siteNav =
  document.querySelector(".site-nav");


if (menuButton && siteNav) {

  menuButton.addEventListener(
    "click",
    () => {

      const open =
        siteNav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    }
  );


  siteNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          siteNav.classList.remove("open");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================
   MOTION ELEMENTS
   ========================================= */

const parallaxItems =
  Array.from(
    document.querySelectorAll(".parallax")
  );


const diagramCard =
  document.querySelector(
    ".hww-diagram-card"
  );


const reduceMotionQuery =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


/* =========================================
   IMAGE PARALLAX
   ========================================= */

function updateParallax() {

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
        item.dataset.speed ||
        "0.05"
      );


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
   MODIS MODEL DIAGRAM ZOOM
   ========================================= */

function updateDiagramZoom() {

  if (!diagramCard) {
    return;
  }


  if (reduceMotionQuery.matches) {

    diagramCard.style.transform =
      "scale(1)";

    return;

  }


  const rect =
    diagramCard.getBoundingClientRect();


  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;


  const viewportCenter =
    viewportHeight / 2;


  const diagramCenter =
    rect.top +
    rect.height / 2;


  const signedDistance =
    diagramCenter -
    viewportCenter;


  const distance =
    Math.abs(
      signedDistance
    );


  /*
    Large influence area means the motion
    begins before the circle hits the exact
    center of the viewport.
  */

  const influenceRange =
    viewportHeight * 0.82;


  let proximity =
    1 -
    distance /
    influenceRange;


  proximity =
    Math.max(
      0,
      Math.min(
        1,
        proximity
      )
    );


  /*
    Ease the zoom so it feels more cinematic
    than mathematically linear.
  */

  const eased =
    1 -
    Math.pow(
      1 - proximity,
      2.4
    );


  const isMobile =
    window.innerWidth <= 820;


  /*
    Stronger than previous version.

    Desktop:
    88% → 112%

    Mobile:
    92% → 108%
  */

  const minScale =
    isMobile
      ? 0.92
      : 0.88;


  const maxScale =
    isMobile
      ? 1.08
      : 1.12;


  const scale =
    minScale +
    (
      maxScale -
      minScale
    ) *
    eased;


  diagramCard.style.transform =
    `scale(${scale.toFixed(4)})`;

}


/* =========================================
   SINGLE MOTION UPDATE
   ========================================= */

function updateMotion() {

  updateParallax();

  updateDiagramZoom();

}


/* =========================================
   RAF HANDLER
   ========================================= */

let motionTicking =
  false;


function requestMotionUpdate() {

  if (motionTicking) {
    return;
  }


  motionTicking =
    true;


  window.requestAnimationFrame(
    () => {

      updateMotion();

      motionTicking =
        false;

    }
  );

}


/* =========================================
   EVENTS
   ========================================= */

window.addEventListener(
  "scroll",
  requestMotionUpdate,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  requestMotionUpdate
);


window.addEventListener(
  "orientationchange",
  requestMotionUpdate
);


window.addEventListener(
  "load",
  requestMotionUpdate
);


window.addEventListener(
  "pageshow",
  requestMotionUpdate
);


if (window.visualViewport) {

  window.visualViewport.addEventListener(
    "resize",
    requestMotionUpdate
  );

}


if (
  typeof reduceMotionQuery
    .addEventListener ===
  "function"
) {

  reduceMotionQuery.addEventListener(
    "change",
    requestMotionUpdate
  );

}


/* INITIAL RENDER */

updateMotion();


/* =========================================
   SEAMLESS LOGO MARQUEE
   ========================================= */

const logoTrack =
  document.querySelector(
    ".logo-track"
  );


if (
  logoTrack &&
  !logoTrack.dataset.cloned
) {

  logoTrack.innerHTML +=
    logoTrack.innerHTML;


  logoTrack.dataset.cloned =
    "true";

}