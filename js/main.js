/* ==========================================================================
   MAIN — mobile nav, article rendering (featured + grid), category filter,
   and the (front-end only) contact form feedback.
   ========================================================================== */

const GF_LOCALE_MAP = { pt: "pt-BR", en: "en-US", es: "es-ES" };
let gfActiveCategory = "all";

function gfArticlePrefix() {
  return document.body ? document.body.dataset.articlePrefix || "" : "";
}

function gfFormatDate(iso, lang) {
  const date = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat(GF_LOCALE_MAP[lang] || "pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function gfArticleCardHTML(article, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  const href = `${gfArticlePrefix()}${article.id}.html`;
  return `
    <article class="article-card">
      <a href="${href}" class="thumb" aria-hidden="true">${article.icon}</a>
      <div class="body">
        <span class="category">${dict[CATEGORY_LABEL_KEY[article.category]]}</span>
        <h3><a href="${href}">${article.title[lang]}</a></h3>
        <p>${article.excerpt[lang]}</p>
        <a href="${href}" class="meta">${gfFormatDate(article.date, lang)} · ${dict.read_more}</a>
      </div>
    </article>`;
}

function gfFeaturedHTML(article, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  const href = `${gfArticlePrefix()}${article.id}.html`;
  return `
    <a href="${href}" class="thumb" aria-hidden="true">${article.icon}</a>
    <div>
      <span class="category">${dict.featured_label} · ${dict[CATEGORY_LABEL_KEY[article.category]]}</span>
      <h2><a href="${href}">${article.title[lang]}</a></h2>
      <p>${article.excerpt[lang]}</p>
      <a href="${href}" class="btn btn-primary">${dict.read_more}</a>
      <div class="meta">${gfFormatDate(article.date, lang)}</div>
    </div>`;
}

function gfRenderArticles() {
  const lang = typeof gfGetLang === "function" ? gfGetLang() : "pt";
  const featuredSlot = document.getElementById("featured-slot");
  const gridSlot = document.getElementById("grid-slot");
  if (!featuredSlot && !gridSlot) return;

  const featured = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.id !== featured.id);

  if (featuredSlot) featuredSlot.innerHTML = gfFeaturedHTML(featured, lang);

  if (gridSlot) {
    const limit = parseInt(gridSlot.dataset.limit || "0", 10);
    let list = gfActiveCategory === "all" ? rest : rest.filter((a) => a.category === gfActiveCategory);
    if (limit) list = list.slice(0, limit);
    gridSlot.innerHTML = list.map((a) => gfArticleCardHTML(a, lang)).join("");
  }
}

function gfBuildFilterBar() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  const lang = typeof gfGetLang === "function" ? gfGetLang() : "pt";
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  const cats = [
    { key: "all", label: dict.filter_all },
    { key: "estrategia", label: dict.filter_estrategia },
    { key: "ia", label: dict.filter_ia },
    { key: "tecnologia", label: dict.filter_tecnologia },
    { key: "negocios", label: dict.filter_negocios },
    { key: "lideranca", label: dict.filter_lideranca }
  ];
  bar.innerHTML = cats
    .map(
      (c) =>
        `<button type="button" class="filter-btn ${c.key === gfActiveCategory ? "active" : ""}" data-cat="${c.key}">${c.label}</button>`
    )
    .join("");

  bar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      gfActiveCategory = btn.dataset.cat;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
      gfRenderArticles();
    });
  });
}

function gfSetupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gfSetupMobileNav();
  gfBuildFilterBar();
  gfRenderArticles();
});

window.addEventListener("gf:langchange", () => {
  gfBuildFilterBar();
  gfRenderArticles();
});
