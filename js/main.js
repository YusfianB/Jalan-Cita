/* Jalan Cita — interaksi landing page */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Garis jalan tergambar saat di-scroll ---------- */

  var journey = document.querySelector(".journey");

  function setDraw(value) {
    if (journey) journey.style.setProperty("--draw", String(value));
  }

  if (journey) {
    if (reduceMotion) {
      setDraw(1);
    } else {
      var ticking = false;

      var update = function () {
        ticking = false;
        var rect = journey.getBoundingClientRect();
        var height = rect.height || 1;
        var lineTop = rect.top;
        var visible = window.innerHeight * 0.9 - lineTop;
        var progress = visible / height;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        setDraw(progress);
      };

      var onScroll = function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      window.addEventListener("load", update);
      update();
    }
  }

  /* ---------- Muncul halus saat section masuk layar ---------- */

  var revealTargets = document.querySelectorAll(".reveal, .section");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (var i = 0; i < revealTargets.length; i++) {
      revealTargets[i].classList.add("is-visible");
    }
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
