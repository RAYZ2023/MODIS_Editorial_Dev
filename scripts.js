/* =========================================================
   HOW WE WORK
   CLEAN PAGE RESET
   ========================================================= */

.site-nav a.active {
  color: var(--orange);
}


/* =========================================
   HERO
   ========================================= */

.hww-hero {
  display: grid;
  grid-template-columns: 44% 56%;
  min-height: 680px;
  overflow: hidden;
  border-bottom: 1px solid var(--ink);
}

.hww-hero-copy {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 64px 5vw;
}

.hww-hero h1 {
  margin: 0 0 28px;
  color: var(--paper);
  font-size: clamp(68px, 6.7vw, 110px);
  line-height: .82;
}

.hww-hero h1 span {
  display: block;
  color: var(--orange);
}

.hww-lead {
  max-width: 570px;
  margin: 0 0 19px;
  color: var(--paper);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.42;
}

.hww-hero-support {
  max-width: 580px;
  margin: 0 0 16px;
  color: rgba(243,236,219,.78);
  font-size: 14px;
  line-height: 1.55;
}

.hww-hero-copy .btn {
  align-self: flex-start;
  margin-top: 14px;
}

.hww-hero-art {
  position: relative;
  min-height: 680px;
  overflow: hidden;
}

.hww-hero-art img {
  position: absolute;
  inset: -6%;
  width: 112%;
  height: 112%;
  object-fit: cover;
  will-change: transform;
}

.hww-hero-art::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  box-shadow:
    inset 0 0 0 1px rgba(243,236,219,.09),
    inset 0 0 34px rgba(0,0,0,.42);
}


/* =========================================
   FRACTION STRIP
   ========================================= */

.hww-principles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--testimonial);
  background-image: url("assets/paper-texture.png");
  background-size: 720px 720px;
  background-blend-mode: multiply;
  border-bottom: 1px solid var(--ink);
}

.hww-principles article {
  padding: 25px 38px;
  border-right: 1px solid var(--rule);
}

.hww-principles article:last-child {
  border-right: 0;
}

.hww-principles h3 {
  margin: 0 0 7px;
  color: var(--cta-blue);
  font-size: 23px;
  line-height: 1;
  text-transform: uppercase;
}

.hww-principles p {
  margin: 0;
  color: var(--cta-blue);
  font-size: 13px;
  line-height: 1.4;
}


/* =========================================
   PROCESS INTRO
   ========================================= */

.hww-process-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 485px;
  align-items: stretch;
  border-bottom: 1px solid var(--rule);
}

.hww-process-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 58px 5vw;
}

.hww-process-heading h2 {
  max-width: 700px;
  margin: 0;
  color: var(--cta-blue);
  font-size: clamp(60px, 5.6vw, 90px);
  line-height: .87;
}

.hww-process-heading h2 span {
  display: block;
  color: var(--orange);
}

.hww-process-intro-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 6vw;
}

.hww-process-intro-copy p {
  max-width: 650px;
  margin: 0;
  color: var(--cta-blue);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(29px, 2.4vw, 43px);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -.025em;
}


/* =========================================
   PROCESS STEPS
   ========================================= */

.hww-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 580px;
  border-bottom: 1px solid var(--ink);
}

.hww-step-art {
  position: relative;
  min-height: 580px;
  overflow: hidden;
}

.hww-step-art img {
  position: absolute;
  inset: -7%;
  width: 114%;
  height: 114%;
  object-fit: cover;
  will-change: transform;
}

.hww-step-art::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  box-shadow:
    inset 0 0 0 1px rgba(18,49,66,.20),
    inset 0 0 30px rgba(18,49,66,.24);
}

.hww-step-copy {
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 22px;
  align-items: center;
  padding: 58px 5vw 58px 34px;
}

.hww-step-number {
  align-self: start;
  color: rgba(18,49,66,.09);
  font-family: "Barlow Condensed", sans-serif;
  font-size: clamp(108px, 10vw, 170px);
  font-weight: 900;
  line-height: .75;
}

.hww-step-copy h2 {
  margin-top: 5px;
  color: var(--cta-blue);
  font-size: clamp(50px, 4.8vw, 78px);
}

.hww-step-copy > div > p:not(.kicker) {
  max-width: 550px;
  font-size: 16px;
  line-height: 1.52;
}

.hww-output {
  max-width: 550px;
  margin-top: 28px;
  padding-top: 17px;
  border-top: 2px solid rgba(241,84,42,.45);
}

.hww-output strong {
  display: block;
  margin-bottom: 5px;
  color: var(--orange);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 900;
}

.hww-output p {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
}


/* =========================================
   MODIS MODEL
   ========================================= */

.hww-model {
  position: relative;
  overflow: hidden;
  padding: 78px 5vw 0;
  color: var(--paper);
  background: #070908;
}


/*
  Actual distressed image.
  Confined mostly to the diagram side.
*/

.hww-model::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 64%;
  z-index: 0;
  pointer-events: none;

  background-image:
    url("assets/how-we-work-modis-model-background.png");

  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 760px;

  opacity: .30;

  -webkit-mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(0,0,0,.20) 15%,
      rgba(0,0,0,.78) 45%,
      #000 72%
    );

  mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(0,0,0,.20) 15%,
      rgba(0,0,0,.78) 45%,
      #000 72%
    );
}


.hww-model > * {
  position: relative;
  z-index: 2;
}


.hww-model-inner {
  display: grid;

  grid-template-columns:
    minmax(0, 1.06fr)
    minmax(420px, .94fr);

  gap: 60px;
  align-items: center;
}


/* =========================================
   MODEL COPY
   ========================================= */

.hww-model-copy h2 {
  max-width: 720px;
  margin: 0 0 30px;
  color: var(--paper);
  font-size: clamp(62px, 5.8vw, 94px);
  line-height: .86;
}

.hww-model-copy h2 span {
  display: block;
  color: var(--orange);
}

.hww-model-copy > p:not(.kicker) {
  max-width: 650px;
  color: rgba(243,236,219,.90);
  font-size: 16px;
  line-height: 1.55;
}

.hww-model-copy .hww-model-core-line {
  margin-top: 24px;
  color: var(--paper);
  font-weight: 800;
}

.hww-model-rule {
  width: 100%;
  max-width: 650px;
  height: 2px;
  margin: 27px 0 22px;
  background: var(--orange);
}

.hww-model-copy .hww-model-payoff {
  color: var(--paper);
  font-size: 17px;
  font-weight: 800;
  line-height: 1.45;
}


/* =========================================
   DIAGRAM
   ========================================= */

.hww-diagram-wrap {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  padding:
    46px
    20px;

  overflow: visible;
}


.hww-diagram-card {
  position: relative;

  width:
    min(
      460px,
      90%
    );

  aspect-ratio: 1 / 1;

  flex: 0 0 auto;

  border-radius: 50%;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 44% 38%,
      rgba(255,255,255,.34) 0%,
      rgba(255,255,255,.05) 34%,
      transparent 64%
    ),
    #e7ddca;

  border:
    1px solid
    rgba(18,49,66,.28);

  box-shadow:
    0 24px 60px rgba(0,0,0,.40),
    0 0 0 8px rgba(243,236,219,.045),
    inset 0 0 0 1px rgba(255,255,255,.34),
    inset 0 0 45px rgba(18,49,66,.07);

  transform:
    scale(.88);

  transform-origin:
    center center;

  will-change:
    transform;
}


/*
  Printed-paper surface
*/

.hww-diagram-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;

  opacity: .16;

  background-image:
    radial-gradient(
      rgba(18,49,66,.32) .45px,
      transparent .65px
    );

  background-size:
    6px 6px;
}


/*
  Inner plate / border
*/

.hww-diagram-card::after {
  content: "";
  position: absolute;
  inset: 15px;
  z-index: 1;
  pointer-events: none;

  border-radius: 50%;

  border:
    1px solid
    rgba(18,49,66,.09);

  box-shadow:
    inset 0 0 30px rgba(18,49,66,.05);
}


.hww-diagram {
  position: relative;
  z-index: 2;

  display: block;

  width: 100%;
  height: 100%;

  padding: 22px;

  overflow: visible;
}


/* =========================================
   DIAGRAM SYSTEM
   ========================================= */

.hww-diagram-crosshair {
  stroke: rgba(48,54,58,.08);
  stroke-width: 1;
}


.hww-diagram-guide {
  fill: none;

  stroke:
    rgba(48,54,58,.17);

  stroke-width: 1;
}


.hww-diagram-fractions {
  fill: none;

  stroke:
    var(--orange);

  stroke-width: 6;

  stroke-linecap: round;

  stroke-dasharray:
    46 119;

  opacity: .88;

  transform-origin:
    300px 300px;

  transform:
    rotate(-11deg);
}


.hww-diagram-fractions-alt {
  fill: none;

  stroke:
    #169bbb;

  stroke-width: 2.5;

  stroke-linecap: round;

  stroke-dasharray:
    10 148;

  opacity: .72;

  transform-origin:
    300px 300px;

  transform:
    rotate(11deg);
}


.hww-diagram-ring {
  fill: none;

  stroke:
    rgba(48,54,58,.47);

  stroke-width: 1.5;
}


.hww-diagram-inner-track {
  fill: none;

  stroke:
    rgba(48,54,58,.22);

  stroke-width: 1;

  stroke-dasharray:
    4 7;
}


.hww-diagram-core-halo {
  fill: none;

  stroke:
    var(--orange);

  stroke-width: 2;

  opacity: .52;
}


.hww-diagram-core-outline {
  fill:
    rgba(48,54,58,.07);

  stroke:
    rgba(48,54,58,.42);

  stroke-width: 1.5;
}


.hww-diagram-core {
  fill:
    #30363a;

  stroke:
    #30363a;

  stroke-width: 1.5;
}


.hww-diagram-spoke {
  stroke:
    rgba(48,54,58,.52);

  stroke-width: 1.6;

  stroke-linecap: round;
}


.hww-diagram-connector {
  stroke:
    rgba(48,54,58,.25);

  stroke-width: 1;

  stroke-linecap: round;
}


.hww-diagram-node {
  fill:
    var(--orange);

  stroke:
    #e7ddca;

  stroke-width:
    2;
}


.hww-diagram-label {
  fill:
    #30363a;

  font-family:
    "Barlow Condensed",
    sans-serif;

  font-size: 18px;

  font-weight: 900;

  letter-spacing:
    .035em;
}


.hww-diagram-core-title {
  fill:
    var(--paper);

  font-family:
    "Barlow Condensed",
    sans-serif;

  font-size: 31px;

  font-weight: 900;
}


.hww-diagram-core-subtitle {
  fill:
    var(--orange);

  font-family:
    "Barlow Condensed",
    sans-serif;

  font-size: 14px;

  font-weight: 900;

  letter-spacing:
    .08em;
}


/* =========================================
   CORE / FRACTIONS / WHOLE
   ========================================= */

.hww-model-points {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  margin-top: 62px;

  border-top:
    1px solid
    rgba(243,236,219,.18);
}


.hww-model-points article {
  padding:
    38px
    42px
    45px
    0;

  border-right:
    1px solid
    rgba(241,84,42,.58);
}


.hww-model-points article + article {
  padding-left: 42px;
}


.hww-model-points article:last-child {
  border-right: 0;
}


.hww-model-points h3 {
  margin: 0 0 12px;

  color: var(--paper);

  font-size: 40px;

  line-height: .84;

  text-transform: uppercase;
}


.hww-model-points p {
  max-width: 350px;

  margin: 0;

  color:
    rgba(243,236,219,.82);

  font-size: 13px;

  line-height: 1.45;
}


/* =========================================
   EXPERIENCE
   ========================================= */

.hww-experience {
  padding:
    54px
    5vw
    60px;
}


.hww-experience-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  margin-top: 30px;
}


.hww-experience-grid article {
  padding:
    0
    28px;

  border-right:
    1px solid
    var(--rule);
}


.hww-experience-grid article:first-child {
  padding-left: 0;
}


.hww-experience-grid article:last-child {
  padding-right: 0;

  border-right: 0;
}


.hww-experience-grid strong {
  display: block;

  margin-bottom: 7px;

  color: var(--orange);

  font-family:
    "Barlow Condensed",
    sans-serif;

  font-size: 55px;

  font-weight: 900;

  line-height: .8;
}


.hww-experience-grid h3 {
  margin: 0 0 12px;

  color: var(--cta-blue);

  font-size: 28px;

  line-height: .86;

  text-transform: uppercase;
}


.hww-experience-grid p {
  margin: 0;

  font-size: 12px;

  line-height: 1.45;
}


/* =========================================
   FINAL CTA
   ========================================= */

.hww-final {
  display: grid;

  grid-template-columns:
    45% 55%;

  min-height: 430px;

  overflow: hidden;
}


.hww-final-copy {
  position: relative;

  z-index: 3;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding:
    52px
    40px
    52px
    5vw;
}


.hww-final-copy h2 {
  max-width: 740px;

  color: var(--paper);

  font-size:
    clamp(
      54px,
      5.4vw,
      84px
    );

  line-height: .87;
}


.hww-final-copy h2 span {
  display: block;

  color: var(--orange);
}


.hww-final-copy > p:not(.kicker) {
  max-width: 530px;

  color: var(--paper);

  font-size: 15px;

  line-height: 1.5;
}


.hww-final-art {
  position: relative;

  min-height: 430px;

  overflow: hidden;
}


.hww-final-art img {
  position: absolute;

  inset: -8%;

  width: 116%;
  height: 116%;

  object-fit: cover;

  will-change: transform;
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1100px) and (min-width: 821px) {

  .hww-hero {
    grid-template-columns:
      46% 54%;
  }


  .hww-hero-copy {
    padding:
      54px
      34px;
  }


  .hww-principles article {
    padding:
      22px
      24px;
  }


  .hww-step-copy {
    grid-template-columns:
      82px 1fr;

    padding:
      48px
      34px;
  }


  .hww-step-number {
    font-size:
      100px;
  }


  .hww-model {
    padding-left:
      34px;

    padding-right:
      34px;
  }


  .hww-model-inner {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(350px, .9fr);

    gap:
      32px;
  }


  .hww-diagram-card {
    width:
      min(
        400px,
        88%
      );
  }

}


/* =========================================================
   MOBILE ONLY
   ========================================================= */

@media (max-width: 820px) {


  /* HERO */

  .hww-hero {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }


  .hww-hero-copy {
    order: 1;

    padding:
      48px
      24px;
  }


  .hww-hero-art {
    order: 2;

    min-height:
      340px;
  }


  .hww-hero h1 {
    font-size:
      clamp(
        58px,
        17vw,
        84px
      );
  }


  .hww-lead {
    font-size:
      17px;
  }


  .hww-hero-support {
    font-size:
      14px;
  }


  /* FRACTIONS */

  .hww-principles {
    grid-template-columns:
      1fr 1fr;
  }


  .hww-principles article {
    padding:
      20px;
  }


  .hww-principles article:nth-child(2) {
    border-right:
      0;
  }


  .hww-principles article:nth-child(-n+2) {
    border-bottom:
      1px solid
      var(--rule);
  }


  /* PROCESS INTRO */

  .hww-process-intro {
    grid-template-columns:
      1fr;

    min-height:
      0;
  }


  .hww-process-heading {
    padding:
      46px
      24px
      32px;
  }


  .hww-process-heading h2 {
    font-size:
      54px;
  }


  .hww-process-intro-copy {
    padding:
      18px
      24px
      48px;
  }


  .hww-process-intro-copy p {
    max-width:
      none;

    font-size:
      clamp(
        26px,
        7vw,
        34px
      );

    line-height:
      1.15;
  }


  /* STEPS */

  .hww-step,
  .hww-step-reverse {
    display: flex;

    flex-direction: column;

    min-height:
      0;
  }


  .hww-step-art {
    order: 1;

    min-height:
      330px;
  }


  .hww-step-copy {
    order: 2;

    grid-template-columns:
      68px 1fr;

    padding:
      42px
      24px;
  }


  .hww-step-number {
    font-size:
      84px;
  }


  .hww-step-copy h2 {
    font-size:
      48px;
  }


  /* MODEL */

  .hww-model {
    padding:
      52px
      24px
      0;
  }


  /*
    Mobile texture is a controlled band
    behind the diagram instead of a giant
    full-section image.
  */

  .hww-model::before {
    top:
      38%;

    right:
      -24px;

    bottom:
      auto;

    width:
      calc(100% + 48px);

    height:
      500px;

    background-size:
      auto 500px;

    background-position:
      68% center;

    opacity:
      .22;

    -webkit-mask-image:
      linear-gradient(
        180deg,
        transparent 0%,
        #000 15%,
        #000 83%,
        transparent 100%
      );

    mask-image:
      linear-gradient(
        180deg,
        transparent 0%,
        #000 15%,
        #000 83%,
        transparent 100%
      );
  }


  .hww-model-inner {
    grid-template-columns:
      1fr;

    gap:
      36px;
  }


  .hww-model-copy h2 {
    font-size:
      57px;
  }


  .hww-model-copy > p:not(.kicker) {
    font-size:
      15px;
  }


  .hww-diagram-wrap {
    padding:
      34px
      0
      44px;
  }


  /*
    Slightly smaller base size because
    it expands to 108% during the scroll.
  */

  .hww-diagram-card {
    width:
      min(
        300px,
        82vw
      );

    transform:
      scale(.92);
  }


  .hww-diagram {
    padding:
      12px;
  }


  .hww-model-points {
    grid-template-columns:
      1fr;

    margin-top:
      12px;
  }


  .hww-model-points article,
  .hww-model-points article + article {
    padding:
      28px
      0;

    border-right:
      0;

    border-bottom:
      1px solid
      rgba(241,84,42,.55);
  }


  .hww-model-points article:last-child {
    border-bottom:
      0;
  }


  /* EXPERIENCE */

  .hww-experience {
    padding:
      48px
      24px;
  }


  .hww-experience-grid {
    grid-template-columns:
      1fr;
  }


  .hww-experience-grid article,
  .hww-experience-grid article:first-child,
  .hww-experience-grid article:last-child {
    padding:
      24px
      0;

    border-right:
      0;

    border-bottom:
      1px solid
      var(--rule);
  }


  .hww-experience-grid article:last-child {
    border-bottom:
      0;
  }


  .hww-experience-grid h3 {
    font-size:
      32px;
  }


  /* FINAL CTA */

  .hww-final {
    display: flex;

    flex-direction: column;

    min-height:
      0;
  }


  .hww-final-copy {
    order:
      1;

    padding:
      48px
      24px;
  }


  .hww-final-copy h2 {
    font-size:
      52px;
  }


  .hww-final-art {
    order:
      2;

    min-height:
      310px;
  }

}


/* =========================================
   REDUCED MOTION
   ========================================= */

@media (prefers-reduced-motion: reduce) {

  .hww-diagram-card {
    transform:
      scale(1) !important;
  }

}