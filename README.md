# Gabryella Facchini — Blog (Portfolio & Business Tech Blog)

Site estático (HTML + CSS + JS puro, sem build) com 4 páginas, troca de
idioma (PT/EN/ES) com bandeiras, e tema claro/escuro.

## 📁 Arquitetura do projeto (Visual Studio Code)

Abra a pasta `gabryella-facchini-blog/` inteira no VS Code
(`File > Open Folder…`). Estrutura de arquivos:

```
gabryella-facchini-blog/
│
├── index.html              → Página "Início" (hero + destaques + artigos)
├── sobre.html               → Página "Sobre" (bio, skills, timeline)
├── artigos.html              → Página "Artigos" (destaque + grade com filtro)
├── contato.html               → Página "Contato" (formulário + canais)
│
├── css/
│   └── style.css            → Todo o design: tokens de cor (claro/escuro),
│                               tipografia, header, hero, cards, footer etc.
│
├── js/
│   ├── translations.js      → Dicionário PT / EN / ES (todo texto do site)
│   ├── articles.js          → Lista de artigos do blog (edite aqui!)
│   ├── theme.js              → Lógica do botão de tema claro/escuro
│   ├── i18n.js                → Lógica do seletor de idioma (bandeiras)
│   └── main.js                 → Menu mobile, renderização dos artigos,
│                                  filtro por categoria e formulário de contato
│
├── assets/
│   └── images/                → Coloque aqui fotos reais (perfil, capas
│                                  de artigo) para substituir os placeholders
│
└── README.md                  → Este arquivo
```

## ▶️ Como rodar

Não há build nem dependências. Duas formas de abrir:

1. **Direto no navegador**: clique duas vezes em `index.html`.
2. **Recomendado — Live Server** (evita qualquer restrição de `file://`):
   - Instale a extensão **Live Server** no VS Code.
   - Clique com o botão direito em `index.html` → **"Open with Live Server"**.

## 🌓 Tema claro/escuro

Implementado com **CSS variables** em `css/style.css`, alternadas via o
atributo `data-theme="light|dark"` na tag `<html>`. A escolha do usuário
é salva em `localStorage` (`gf-theme`) e um pequeno script inline no
`<head>` de cada página aplica o tema salvo **antes da primeira renderização**,
evitando o "flash" de tema errado.

Para ajustar as cores, edite apenas as variáveis no topo do `style.css`:

```css
:root { --color-bg: #faf6ef; --color-accent: #b8863b; /* ... */ }
[data-theme="dark"] { --color-bg: #10131f; --color-accent: #d9a354; /* ... */ }
```

## 🌐 Idiomas (PT / EN / ES)

- O botão de idioma no cabeçalho abre um menu suspenso com as **bandeiras**
  🇧🇷 Português, 🇺🇸 English e 🇪🇸 Español (`js/i18n.js`).
- Todo texto traduzível tem um atributo `data-i18n="chave"` no HTML.
- As traduções ficam centralizadas em `js/translations.js`.
- A escolha do usuário é salva em `localStorage` (`gf-lang`) e mantida
  ao navegar entre páginas.

**Para adicionar um novo texto traduzível:**
1. Dê um `data-i18n="minha_chave"` ao elemento no HTML.
2. Adicione `minha_chave: "..."` dentro de `pt`, `en` e `es` em `translations.js`.

## 📝 Artigos do blog

Edite o arquivo `js/articles.js`. Cada artigo é um objeto:

```js
{
  id: "meu-novo-artigo",
  date: "2026-07-01",
  category: "dev",       // "dev" | "data" | "career"
  icon: "🚀",              // emoji-placeholder da capa (troque por <img> se quiser)
  featured: false,          // true = aparece em destaque, grande, no topo
  title:   { pt: "...", en: "...", es: "..." },
  excerpt: { pt: "...", en: "...", es: "..." }
}
```

Apenas **um** artigo deve ter `featured: true` por vez — ele aparece
centralizado e em destaque; os demais aparecem em cartões menores logo
abaixo (com filtro por categoria na página **Artigos**).

## 🖼️ Imagens reais

Por padrão as fotos usam um "frame em arco" (o elemento de assinatura
visual do design, inspirado na referência enviada) preenchido com um
gradiente + emoji/iniciais. Para usar fotos reais, substitua o `<div class="arch-frame">`
por uma tag `<img>` apontando para um arquivo em `assets/images/`, mantendo
a classe `arch-frame` para preservar o recorte em arco.

## © Rodapé

O rodapé (presente nas 4 páginas) traz:

```
© 2026 Developed by Gabryella Facchini | Portfolio & Business Tech Blog
LinkedIn (linkedin.com/in/gabryellafachini) | GitHub (github.com/gabyfachini)
São Paulo, Brazil
```
