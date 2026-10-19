// Master Deck Initialization: Pure Dynamic Scaling (Zero Sliders/Scrollbars, Clean Proportional Fit)
document.addEventListener("DOMContentLoaded", function () {
  // 1. MathJax 3 Pre-typesetting Configuration
  window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    },
    svg: {
      fontCache: "local"
    },
    startup: {
      pageReady: function () {
        return MathJax.startup.defaultPageReady().then(function () {
          autoFitAllSlides();
          if (typeof Reveal !== "undefined") {
            Reveal.layout();
          }
        });
      }
    }
  };

  // 2. Dynamic Auto-Fit: Measures content and scales down smoothly to fit slide canvas
  function autoFitSlide(section) {
    if (!section) return;
    const body = section.querySelector(".slide-body");
    if (!body) return;

    // Reset scaling to measure true unconstrained dimensions
    body.style.transform = "none";
    body.style.transformOrigin = "top left";
    body.style.width = "812px";

    // Target viewport inside slide: available width = 812px, available height = 768px
    const maxW = 812;
    const maxH = 768;

    // Measure total natural dimensions of everything inside body
    let maxBottom = 0;
    let maxRight = 0;
    const bodyRect = body.getBoundingClientRect();

    body.querySelectorAll("*").forEach(el => {
      const r = el.getBoundingClientRect();
      const bottomRel = r.bottom - bodyRect.top;
      const rightRel = r.right - bodyRect.left;
      if (bottomRel > maxBottom) maxBottom = bottomRel;
      if (rightRel > maxRight) maxRight = rightRel;
    });

    const naturalH = Math.max(maxBottom + 32, body.scrollHeight);
    const naturalW = Math.max(maxRight + 24, body.scrollWidth);

    let scale = 1.0;
    if (naturalW > maxW) {
      scale = Math.min(scale, maxW / naturalW);
    }
    if (naturalH > maxH) {
      scale = Math.min(scale, maxH / naturalH);
    }

    if (scale < 0.98) {
      const s = Math.max(0.50, scale * 0.97);
      body.style.transform = `scale(${s.toFixed(3)})`;
      body.style.transformOrigin = "top left";
    }
  }

  function autoFitAllSlides() {
    document.querySelectorAll(".reveal .slides > section").forEach(autoFitSlide);
  }

  // 3. Make Sidebar TOC Navigation Interactive & Clickable
  function makeSidebarClickable() {
    const topicSlideMap = new Map();
    const slides = Array.from(document.querySelectorAll(".reveal .slides > section"));

    slides.forEach((sec, idx) => {
      const activeLi = sec.querySelector(".sidebar-nav li.active");
      if (activeLi) {
        const topicText = activeLi.textContent.trim();
        if (!topicSlideMap.has(topicText)) {
          topicSlideMap.set(topicText, idx);
        }
      }
    });

    document.querySelectorAll(".sidebar-nav li").forEach(li => {
      const topicText = li.textContent.trim();
      const targetIdx = topicSlideMap.get(topicText);

      li.style.cursor = "pointer";
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");
      li.title = `Jump to ${topicText}`;

      li.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (targetIdx !== undefined && typeof Reveal !== "undefined") {
          Reveal.slide(targetIdx);
        }
      });

      li.addEventListener("keydown", function (e) {
        if ((e.key === "Enter" || e.key === " ") && targetIdx !== undefined && typeof Reveal !== "undefined") {
          e.preventDefault();
          Reveal.slide(targetIdx);
        }
      });
    });
  }

  // 4. Reveal.js Initialization
  if (typeof Reveal !== "undefined") {
    Reveal.initialize({
      width: 1024,
      height: 768,
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      center: false,
      hash: true,
      controls: true,
      progress: true,
      slideNumber: "c/t",
      transition: "none",
      transitionSpeed: "fast",
      backgroundTransition: "none",
      pdfSeparateFragments: false,
      plugins: []
    });

    Reveal.on("ready", function () {
      makeSidebarClickable();
      setTimeout(autoFitAllSlides, 200);
    });

    Reveal.on("slidechanged", function (event) {
      if (event.currentSlide) {
        autoFitSlide(event.currentSlide);
      }
    });

    window.addEventListener("resize", autoFitAllSlides);
  }
});
