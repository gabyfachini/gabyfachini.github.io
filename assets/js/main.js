// assets/js/main.js
// Gerencia preferência de tema claro/escuro

(function () {
  const toggle = document.getElementById("themeToggle");
  const icon   = document.getElementById("themeIcon");
  const root   = document.documentElement;

  // Resolve o caminho base para as imagens (compatível com subpath no GitHub Pages)
  const base = toggle.closest("body").querySelector('link[rel="stylesheet"]')
    ?.getAttribute("href")
    ?.replace(/\/assets\/css\/style\.css$/, "") ?? "";

  const imgLight = base + "/assets/img/theme-light.png";
  const imgDark  = base + "/assets/img/theme-dark.png";

  // Aplica tema salvo ou preferência do sistema operacional
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) {
    root.classList.add("dark");
    icon.src = imgDark;
  }

  // Troca de tema ao clicar
  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    icon.src = isDark ? imgDark : imgLight;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Sincroniza se o usuário mudar a preferência do SO em tempo real
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      root.classList.toggle("dark", e.matches);
      icon.src = e.matches ? imgDark : imgLight;
    }
  });
})();