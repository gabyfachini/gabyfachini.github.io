Coloque aqui suas fotos (perfil, capas de artigo). Ex: perfil.jpg, capa-artigo-1.jpg


gabryella-facchini-blog/
├── index.html          → Início (hero + destaques + artigo em destaque + grade)
├── sobre.html           → Sobre (bio, skills, timeline)
├── artigos.html          → Artigos (destaque + grade filtrável por categoria)
├── contato.html            → Contato (formulário + LinkedIn/GitHub/e-mail)
├── css/style.css            → design tokens (claro/escuro), tipografia, componentes
├── js/
│   ├── translations.js      → dicionário PT/EN/ES
│   ├── articles.js          → lista de artigos (edite aqui para publicar novos posts)
│   ├── i18n.js               → seletor de idioma com bandeiras suspensas
│   ├── theme.js                → alternância claro/escuro
│   └── main.js                  → menu mobile, renderização dos artigos, filtro, form
├── assets/images/                 → pasta pronta para suas fotos reais
└── README.md                       → arquitetura completa + guia de edição


# 📷 Orientações de Imagens - Studio Shodwe

Este diretório armazena todos os ativos visuais do blog. Para manter o design consistente e o carregamento rápido, siga os padrões abaixo:

---

## 📏 Tamanhos Padrão

| Tipo de Imagem | Dimensões (Px) | Proporção | Uso |
| :--- | :--- | :--- | :--- |
| **Destaque (Hero)** | $1200 \times 630$ | $16:9$ | Topo dos posts e cards da Home. |
| **Internas** | $1000$ (largura) | Livre | Imagens dentro do corpo do texto. |
| **Quadradas** | $400 \times 400$ | $1:1$ | Miniaturas laterais e avatares. |

---

## 🚀 Otimização e Performance

Para garantir que o site carregue rapidamente e tenha uma boa pontuação de SEO:

1.  **Formato:** Priorize o uso de arquivos **.webp**. Se não for possível, utilize **.jpg**.
2.  **Peso:** Cada arquivo deve ter menos de **200 KB**. Nunca suba imagens acima de $1$ MB.
3.  **Ferramentas Recomendadas:**
    * [Squoosh.app](https://squoosh.app/) (Google) - Melhor para ajuste fino e comparação.
    * [TinyPNG](https://tinypng.com/) - Melhor para comprimir várias imagens de uma vez.
    * [CloudConvert](https://cloudconvert.com/) - Útil para redimensionar pixels durante a conversão.

---

## 🔍 Nomenclatura e SEO (Search Engine Optimization)

O nome do arquivo ajuda o Google a entender o conteúdo da sua página. Siga estas regras:

* **Padrão:** `descricao-clara-da-imagem.webp`
* **Regras:** Use apenas letras minúsculas, separe palavras por hífens (`-`) e nunca use espaços, acentos ou caracteres especiais.
* **Exemplo:** * ❌ `Foto da Reunião 01.JPG`
    * ✅ `workshop-design-thinking-studio-shodwe.webp`

---

## 🎨 Efeitos Visuais

O site aplica automaticamente um filtro de **Grayscale (Preto e Branco)** via CSS.
* Não é necessário editar as fotos para P&B antes de subir.
* O efeito original (colorido) aparece automaticamente no **hover** (ao passar o mouse).

---
*Dúvidas sobre o design? Consulte as definições de estilo no arquivo `main.css`.*