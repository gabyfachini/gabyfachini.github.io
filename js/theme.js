/* ==========================================================================
   THEME — dark / light mode
   The actual attribute (data-theme) is set as early as possible by a tiny
   inline snippet in <head> of every page, so the page never flashes the
   wrong theme. This file only wires up the visible toggle button.
   ========================================================================== */

(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gf-theme", theme);
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) toggle.setAttribute("aria-checked", theme === "dark");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    const current = document.documentElement.getAttribute("data-theme") || "light";
    toggle.setAttribute("aria-checked", current === "dark");

    toggle.addEventListener("click", function () {
      const now = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(now === "dark" ? "light" : "dark");
    });
  });
})();
