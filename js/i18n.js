/* ==========================================================================
   I18N — language switcher (Português / English / Español)
   Reads TRANSLATIONS (translations.js) and applies text to every element
   with a data-i18n="key" attribute. Persists the choice in localStorage
   and broadcasts a "gf:langchange" event so other scripts (e.g. the
   article renderer) can react and re-render language-dependent content.
   ========================================================================== */

const GF_LANGS = [
  { code: "pt", flag: "🇧🇷", name: "Português" },
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" }
];

function gfGetLang() {
  return localStorage.getItem("gf-lang") || "pt";
}

function gfApplyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
}

function gfSetLang(lang) {
  localStorage.setItem("gf-lang", lang);
  gfApplyTranslations(lang);
  gfUpdateLangSwitchUI(lang);
  window.dispatchEvent(new CustomEvent("gf:langchange", { detail: { lang } }));
}

function gfUpdateLangSwitchUI(lang) {
  const info = GF_LANGS.find((l) => l.code === lang) || GF_LANGS[0];
  const flagEl = document.querySelector("[data-lang-current-flag]");
  const nameEl = document.querySelector("[data-lang-current-name]");
  if (flagEl) flagEl.textContent = info.flag;
  if (nameEl) nameEl.textContent = info.code.toUpperCase();

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
}

function gfBuildLangMenu() {
  const menu = document.querySelector("[data-lang-menu]");
  if (!menu) return;
  menu.innerHTML = GF_LANGS.map(
    (l) => `
      <button type="button" class="lang-option" data-lang="${l.code}" aria-pressed="false">
        <span class="flag">${l.flag}</span>
        <span>
          <span class="lang-name">${l.name}</span>
          <span class="lang-native">${l.code.toUpperCase()}</span>
        </span>
      </button>`
  ).join("");

  menu.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      gfSetLang(btn.dataset.lang);
      document.querySelector(".lang-switch")?.classList.remove("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  gfBuildLangMenu();
  gfApplyTranslations(gfGetLang());
  gfUpdateLangSwitchUI(gfGetLang());

  const switcher = document.querySelector(".lang-switch");
  const trigger = document.querySelector("[data-lang-trigger]");
  if (switcher && trigger) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      switcher.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) switcher.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") switcher.classList.remove("open");
    });
  }
});
