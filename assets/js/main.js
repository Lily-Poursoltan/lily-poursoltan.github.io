/* Lily Poursoltan — site interactions
   Kept minimal: nav shadow on scroll, mobile menu, scrollspy, header reveal. */
(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  /* --- Nav shadow appears after 8px scroll --- */
  function onScroll() {
    if (window.scrollY > 8) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu toggle --- */
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    /* close menu after tapping a link */
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Scrollspy: highlight active section in nav --- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var linkFor = {};
  Array.prototype.forEach.call(document.querySelectorAll('.nav-links a[href^="#"]'), function (a) {
    linkFor[a.getAttribute("href").slice(1)] = a;
  });

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          Object.keys(linkFor).forEach(function (key) {
            linkFor[key].classList.toggle("active", key === id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- Header-only scroll reveal (respects reduced-motion via CSS) --- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    reveals.forEach(function (el) { revObs.observe(el); });
  }
})();
