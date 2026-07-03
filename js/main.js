/* ==========================================================================
   MAIN — mobile nav, article rendering (featured + grid), category filter,
   and the (front-end only) contact form feedback.
   ========================================================================== */

const GF_LOCALE_MAP = { pt: "pt-BR", en: "en-US", es: "es-ES" };
let gfActiveCategory = "all";

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
  return `
    <article class="article-card">
      <div class="thumb" aria-hidden="true">${article.icon}</div>
      <div class="body">
        <span class="category">${dict[CATEGORY_LABEL_KEY[article.category]]}</span>
        <h3>${article.title[lang]}</h3>
        <p>${article.excerpt[lang]}</p>
        <span class="meta">${gfFormatDate(article.date, lang)} · ${dict.read_more}</span>
      </div>
    </article>`;
}

function gfFeaturedHTML(article, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  return `
    <div class="thumb" aria-hidden="true">${article.icon}</div>
    <div>
      <span class="category">${dict.featured_label} · ${dict[CATEGORY_LABEL_KEY[article.category]]}</span>
      <h2>${article.title[lang]}</h2>
      <p>${article.excerpt[lang]}</p>
      <a href="artigos.html" class="btn btn-primary">${dict.read_more}</a>
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
    { key: "dev", label: dict.filter_dev },
    { key: "data", label: dict.filter_data },
    { key: "career", label: dict.filter_career }
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

function gfSetupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const feedback = document.getElementById("form-feedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = typeof gfGetLang === "function" ? gfGetLang() : "pt";
    const messages = {
      pt: "Mensagem pronta! Como este é um formulário de demonstração, use o LinkedIn ou o e-mail para me enviar de verdade. 💌",
      en: "Message ready! Since this is a demo form, use LinkedIn or email to actually send it to me. 💌",
      es: "¡Mensaje listo! Como este es un formulario de demostración, usa LinkedIn o el correo para enviármelo de verdad. 💌"
    };
    if (feedback) {
      feedback.textContent = messages[lang];
      feedback.hidden = false;
    }
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gfSetupMobileNav();
  gfSetupContactForm();
  gfBuildFilterBar();
  gfRenderArticles();
});

window.addEventListener("gf:langchange", () => {
  gfBuildFilterBar();
  gfRenderArticles();
});
