/* MODIS HOMEPAGE ENHANCEMENTS */

(() => {
  const nav = document.querySelector(".site-nav");

  if (nav) {
    nav.innerHTML = `
      <a href="how-we-work.html">HOW WE WORK</a>
      <a href="about-us.html">WHO WE ARE</a>
      <a
        class="nav-placeholder"
        href="#"
        aria-disabled="true"
        tabindex="-1"
        style="pointer-events:none; opacity:.68;"
      >CASE STUDIES</a>
      <a
        class="btn small"
        href="mailto:info@modismarketing.com"
      >LET'S TALK →</a>
    `;
  }

  const main = document.querySelector("main");
  if (!main) return;

  const sections = Array.from(
    main.querySelectorAll(":scope > section")
  ).filter((section) => {
    const style = window.getComputedStyle(section);
    return style.display !== "none" && section.offsetHeight > 80;
  });

  if (!sections.length) return;

  sections.forEach((section, index) => {
    if (!section.id) {
      section.id = `home-section-${index + 1}`;
    }
    section.dataset.homeSectionIndex = index;
  });

  const stepper = document.createElement("aside");
  stepper.className = "home-section-stepper";
  stepper.setAttribute("aria-label", "Homepage section navigation");

  const label = document.createElement("span");
  label.className = "home-stepper-label";
  label.textContent = "SCROLL";
  stepper.appendChild(label);

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  const dots = sections.map((section, index) => {
    const button = document.createElement("button");
    button.className = "home-stepper-dot";
    button.type = "button";

    const heading = section.querySelector("h1, h2, .kicker, [class*='kicker']");
    const sectionName = heading
      ? heading.textContent.trim().replace(/\s+/g, " ")
      : `Section ${index + 1}`;

    button.setAttribute("aria-label", `Go to ${sectionName}`);

    button.addEventListener("click", () => {
      section.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start"
      });
    });

    stepper.appendChild(button);
    return button;
  });

  const nextButton = document.createElement("button");
  nextButton.className = "home-stepper-next";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Go to next section");
  nextButton.innerHTML = "↓";
  stepper.appendChild(nextButton);

  document.body.appendChild(stepper);

  let activeIndex = 0;

  function sectionLooksDark(section) {
    let node = section;

    for (let i = 0; i < 3 && node; i += 1) {
      const background = window.getComputedStyle(node).backgroundColor;
      const match = background.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

      if (match) {
        const r = Number(match[1]);
        const g = Number(match[2]);
        const b = Number(match[3]);

        const luminance =
          (0.299 * r) +
          (0.587 * g) +
          (0.114 * b);

        if (luminance < 95) return true;
        if (luminance > 170) return false;
      }

      node = node.parentElement;
    }

    return (
      section.classList.contains("dark") ||
      String(section.className).includes("dark")
    );
  }

  function setActive(index) {
    activeIndex = Math.max(0, Math.min(index, sections.length - 1));

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle("is-active", active);

      if (active) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });

    const currentSection = sections[activeIndex];

    stepper.classList.toggle(
      "is-over-dark",
      sectionLooksDark(currentSection)
    );

    if (activeIndex === sections.length - 1) {
      nextButton.innerHTML = "↑";
      nextButton.setAttribute("aria-label", "Return to first section");
    } else {
      nextButton.innerHTML = "↓";
      nextButton.setAttribute("aria-label", "Go to next section");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      const index = Number(
        visible[0].target.dataset.homeSectionIndex
      );

      if (Number.isFinite(index)) {
        setActive(index);
      }
    },
    {
      threshold: [0.18, 0.3, 0.45, 0.6],
      rootMargin: "-12% 0px -25% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  nextButton.addEventListener("click", () => {
    const nextIndex =
      activeIndex >= sections.length - 1
        ? 0
        : activeIndex + 1;

    sections[nextIndex].scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start"
    });
  });

  const existingBackTop = document.querySelector(".back-top");

  if (existingBackTop) {
    existingBackTop.setAttribute("href", "#");

    existingBackTop.addEventListener("click", (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    });
  } else {
    const backTopWrap = document.createElement("div");
    backTopWrap.className = "home-back-top-wrap";

    const backTop = document.createElement("a");
    backTop.className = "home-back-top";
    backTop.href = "#";
    backTop.innerHTML = `
      <span>BACK TO TOP</span>
      <span class="home-back-top-arrow" aria-hidden="true">↑</span>
    `;

    backTop.addEventListener("click", (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    });

    backTopWrap.appendChild(backTop);

    const footer = document.querySelector("footer");

    if (footer) {
      footer.parentNode.insertBefore(backTopWrap, footer);
    } else {
      document.body.appendChild(backTopWrap);
    }
  }

  setActive(0);
})();
