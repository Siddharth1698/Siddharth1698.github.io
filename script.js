document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (defaults to dark; remembers choice)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "light") root.setAttribute("data-theme", "light");

  btn.addEventListener("click", function () {
    var isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      try { localStorage.setItem("theme", "dark"); } catch (e) {}
    } else {
      root.setAttribute("data-theme", "light");
      try { localStorage.setItem("theme", "light"); } catch (e) {}
    }
  });
})();

// Typed headline effect
(function () {
  var el = document.getElementById("typed");
  if (!el) return;
  var text = "Technical Specialist @ Sony — Deep Learning · Agentic AI · NLP";
  var i = 0;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { el.textContent = text; return; }
  (function type() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(type, 22);
  })();
})();

// Scroll reveal
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach(function (el) { observer.observe(el); });
})();

// Active nav link highlighting
(function () {
  var links = document.querySelectorAll(".nav-links a");
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute("href"));
  });
  if (!("IntersectionObserver" in window)) return;
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var idx = sections.indexOf(entry.target);
        if (idx === -1) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          links[idx].classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach(function (s) { if (s) observer.observe(s); });
})();

// Cursor spotlight glow (desktop only, respects reduced motion)
(function () {
  var spot = document.getElementById("spotlight");
  if (!spot) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;
  window.addEventListener("mousemove", function (e) {
    spot.style.setProperty("--x", e.clientX + "px");
    spot.style.setProperty("--y", e.clientY + "px");
  }, { passive: true });
})();
