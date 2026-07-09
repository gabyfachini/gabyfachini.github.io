/* ==========================================================================
   ARTICLE PAGE — renders a single article (artigos/<id>.html).
   Reads the article id from [data-article-id] on the page, pulls metadata
   from ARTICLES (js/articles.js) and body copy from ARTICLE_CONTENT
   (js/article-content.js), and re-renders on language change.
   gfArticlePrefix() and gfArticleCardHTML() live in js/main.js, which
   must be loaded before this file.
   ========================================================================== */

function gfRenderArticlePage() {
  const page = document.querySelector("[data-article-id]");
  if (!page) return;

  const id = page.dataset.articleId;
  const lang = typeof gfGetLang === "function" ? gfGetLang() : "pt";
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  const meta = ARTICLES.find((a) => a.id === id);
  if (!meta) return;

  const contentSet = ARTICLE_CONTENT[id] || {};
  const blocks = contentSet[lang] || contentSet.pt || [];

  document.title = `${meta.title[lang]} — Gabryella Facchini`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", meta.excerpt[lang]);

  const headerSlot = document.getElementById("article-header");
  if (headerSlot) {
    headerSlot.innerHTML = `
      <span class="category">${dict.featured_label} · ${dict[CATEGORY_LABEL_KEY[meta.category]]}</span>
      <h1>${meta.title[lang]}</h1>
      <p class="article-lead">${meta.excerpt[lang]}</p>
      <div class="meta">${gfFormatDate(meta.date, lang)}</div>
    `;
  }

  const coverSlot = document.getElementById("article-cover");
  if (coverSlot) {
    if (meta.image) {
      coverSlot.classList.add("has-image");
      coverSlot.innerHTML = `<img src="${gfAssetPrefix()}${meta.image}" alt="${meta.title[lang]}" loading="lazy">`;
    } else {
      coverSlot.classList.remove("has-image");
      coverSlot.textContent = meta.icon;
    }
  }

  const bodySlot = document.getElementById("article-body");
  if (bodySlot) {
    bodySlot.innerHTML = blocks
      .map((b) => (b.type === "h2" ? `<h2>${b.text}</h2>` : `<p>${b.text}</p>`))
      .join("");
  }

  const backLink = document.getElementById("back-to-articles");
  if (backLink) backLink.textContent = `← ${dict.nav_articles}`;

  const relatedHeading = document.getElementById("related-heading");
  if (relatedHeading) relatedHeading.textContent = dict.articles_title;

  const relatedSlot = document.getElementById("related-slot");
  if (relatedSlot) {
    const related = ARTICLES.filter((a) => a.id !== id).slice(0, 3);
    relatedSlot.innerHTML = related.map((a) => gfArticleCardHTML(a, lang)).join("");
  }
}

document.addEventListener("DOMContentLoaded", gfRenderArticlePage);
window.addEventListener("gf:langchange", gfRenderArticlePage);
