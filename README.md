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
├── sobre.html               → Página "Sobre" (bio, pilares de conteúdo, timeline)
├── artigos.html              → Página "Artigos" (destaque + grade com filtro)
├── contato.html                → Página "Contato" (formulário + canais)
│
├── artigos/                     → 📄 PÁGINAS INDIVIDUAIS DE CADA ARTIGO
│   ├── empresas-crescem-mercado-desacelera.html
│   ├── ia-mudando-trabalho-alem-chatgpt.html
│   ├── cloud-estrategia-de-negocio.html
│   ├── bastidores-startups-escalam-eficiencia.html
│   └── competencias-lideres-proximos-cinco-anos.html
│
├── css/
│   └── style.css            → Todo o design: tokens de cor (claro/escuro),
│                               tipografia, header, hero, cards, artigo
│                               individual, footer etc.
│
├── js/
│   ├── translations.js      → Dicionário PT / EN / ES (todo texto do site)
│   ├── articles.js          → Metadados dos artigos (título, categoria,
│   │                            data, ícone, destaque) — edite aqui!
│   ├── article-content.js   → Corpo completo de cada artigo (parágrafos e
│   │                            subtítulos) em PT / EN / ES
│   ├── theme.js              → Lógica do botão de tema claro/escuro
│   ├── i18n.js                → Lógica do seletor de idioma (bandeiras)
│   ├── main.js                  → Menu mobile, cards de artigo (com link
│   │                              para a página individual), filtro por
│   │                              categoria e formulário de contato
│   └── article-page.js           → Renderiza a página de UM artigo:
│                                    título, categoria, data, corpo do
│                                    texto e "artigos relacionados"
│
├── assets/
│   └── images/                → Coloque aqui fotos reais (perfil, capas
│                                  de artigo) para substituir os placeholders
│
└── README.md                  → Este arquivo
```

### 📄 Onde ficam os artigos individuais

Cada artigo publicado no blog tem **duas partes**, guardadas em lugares diferentes por organização:

1. **Os metadados** (título, categoria, data, resumo, se é destaque) ficam em
   `js/articles.js`.
2. **O texto completo** (parágrafos e subtítulos, em PT/EN/ES) fica em
   `js/article-content.js`, indexado pelo mesmo `id` do artigo.
3. **A página HTML** correspondente mora em `artigos/<id>.html` — um arquivo
   real e independente, com sua própria URL (ex.:
   `artigos/cloud-estrategia-de-negocio.html`), ótimo para SEO e para
   compartilhar o link de um artigo específico.

Essa página HTML é bem enxuta: ela só declara `<main data-article-id="...">`
e alguns "slots" vazios (`#article-header`, `#article-body`,
`#related-slot`...). Quem preenche esses slots com o conteúdo certo — no
idioma certo — é o `js/article-page.js`, lendo os dados de `articles.js` e
`article-content.js`. Isso evita duplicar texto em três idiomas dentro de
cada página HTML.

**Para publicar um novo artigo, três passos:**
1. Adicione o objeto do artigo em `js/articles.js` (com um `id` novo).
2. Adicione o corpo do texto (PT/EN/ES) em `js/article-content.js`, usando
   o mesmo `id` como chave.
3. Copie um dos arquivos de `artigos/` (ex.:
   `artigos/cloud-estrategia-de-negocio.html`), renomeie para
   `artigos/<seu-novo-id>.html` e troque apenas o valor de
   `data-article-id="..."` no `<main>` pelo novo `id` (o resto do arquivo
   é idêntico entre artigos — título, resumo, ícone e texto são
   preenchidos automaticamente pelo JavaScript).

### 🔗 Acesso direto aos artigos

Os cards de artigo (no Início e em Artigos) e o artigo em destaque agora
apontam diretamente para a página individual correspondente — o clique no
título, na imagem/ícone ou em "Ler artigo" leva para `artigos/<id>.html`
em vez de apenas rolar até a lista. Cada página de artigo também mostra
"Artigos recentes" relacionados no rodapé do texto, incentivando a
navegação para outros posts.

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

Edite o arquivo `js/articles.js` (metadados) e `js/article-content.js`
(texto completo). Cada artigo em `articles.js` é um objeto:

```js
{
  id: "meu-novo-artigo",
  date: "2026-07-01",
  category: "estrategia",  // "estrategia" | "ia" | "tecnologia" | "negocios" | "lideranca"
  icon: "🚀",              // emoji-placeholder da capa (troque por <img> se quiser)
  featured: false,          // true = aparece em destaque, grande, no topo
  title:   { pt: "...", en: "...", es: "..." },
  excerpt: { pt: "...", en: "...", es: "..." }
}
```

E o texto completo em `js/article-content.js`, usando o **mesmo `id`**:

```js
"meu-novo-artigo": {
  pt: [
    { type: "p",  text: "Parágrafo de abertura..." },
    { type: "h2", text: "Um subtítulo" },
    { type: "p",  text: "Mais um parágrafo..." }
  ],
  en: [ /* mesma estrutura em inglês */ ],
  es: [ /* mesma estrutura em espanhol */ ]
}
```

Não esqueça do terceiro passo: criar o arquivo `artigos/meu-novo-artigo.html`
(copiando um existente e trocando o `data-article-id`) — veja a seção
"Onde ficam os artigos individuais" acima.

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
© 2026 Gabryella Facchini • Business, Technology & Innovation
LinkedIn (linkedin.com/in/gabryellafachini) | GitHub (github.com/gabyfachini)
São Paulo, Brasil
```
