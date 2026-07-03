/* ==========================================================================
   ARTICLES — replace/extend this list to publish new posts.
   Each article can be featured (shown big, centered) or regular
   (shown in the smaller grid below). "icon" is a placeholder emoji used
   as the thumbnail until real cover images are added in /assets/images.
   ========================================================================== */

const ARTICLES = [
  {
    id: "sistema-portfolio-i18n",
    date: "2026-06-20",
    category: "dev",
    icon: "🦙",
    featured: true,
    title: {
      pt: "Como criei este blog: Astro, i18n e um mascote de lhama",
      en: "How I built this blog: Astro, i18n and a llama mascot",
      es: "Cómo creé este blog: Astro, i18n y una mascota llama"
    },
    excerpt: {
      pt: "Os bastidores da construção de uma landing page de checkout para creators — do design system à internacionalização.",
      en: "The behind-the-scenes of building a checkout landing page for creators — from design system to internationalization.",
      es: "El detrás de escena de construir una landing page de checkout para creadores — del design system a la internacionalización."
    }
  },
  {
    id: "planilha-investimentos-python",
    date: "2026-05-14",
    category: "data",
    icon: "📊",
    featured: false,
    title: {
      pt: "Automatizando uma planilha de investimentos com Python e openpyxl",
      en: "Automating an investment spreadsheet with Python and openpyxl",
      es: "Automatizando una hoja de cálculo de inversiones con Python y openpyxl"
    },
    excerpt: {
      pt: "Dashboard, KPIs e gráficos gerados automaticamente em cinco abas de controle financeiro.",
      en: "Dashboard, KPIs and charts generated automatically across five financial control tabs.",
      es: "Dashboard, KPIs y gráficos generados automáticamente en cinco pestañas de control financiero."
    }
  },
  {
    id: "quiz-interativo-js",
    date: "2026-04-02",
    category: "dev",
    icon: "🎮",
    featured: false,
    title: {
      pt: "Construindo um quiz interativo com áudio e animações em JavaScript puro",
      en: "Building an interactive quiz with audio and animations in vanilla JavaScript",
      es: "Construyendo un quiz interactivo con audio y animaciones en JavaScript puro"
    },
    excerpt: {
      pt: "Web Audio API, revelações animadas em SVG e compatibilidade com toque em iOS, tudo em um único arquivo.",
      en: "Web Audio API, animated SVG reveals and iOS touch compatibility, all in a single file.",
      es: "Web Audio API, revelaciones animadas en SVG y compatibilidad táctil en iOS, todo en un solo archivo."
    }
  },
  {
    id: "spark-conceitos-essenciais",
    date: "2026-03-11",
    category: "data",
    icon: "⚡",
    featured: false,
    title: {
      pt: "Apache Spark sem mistério: transformações, DataFrames e streaming",
      en: "Apache Spark without the mystery: transformations, DataFrames and streaming",
      es: "Apache Spark sin misterio: transformaciones, DataFrames y streaming"
    },
    excerpt: {
      pt: "Um guia direto ao ponto sobre os conceitos que mais aparecem em provas e entrevistas de dados.",
      en: "A straight-to-the-point guide to the concepts that show up most in data exams and interviews.",
      es: "Una guía directa sobre los conceptos que más aparecen en exámenes y entrevistas de datos."
    }
  },
  {
    id: "portfolio-que-converte",
    date: "2026-02-18",
    category: "career",
    icon: "🗂️",
    featured: false,
    title: {
      pt: "Como montar um portfólio de dev que realmente conta uma história",
      en: "How to build a dev portfolio that actually tells a story",
      es: "Cómo armar un portafolio de dev que realmente cuenta una historia"
    },
    excerpt: {
      pt: "Estrutura, projetos e o que recrutadores olham primeiro — com exemplos práticos.",
      en: "Structure, projects and what recruiters look at first — with practical examples.",
      es: "Estructura, proyectos y lo que los reclutadores miran primero — con ejemplos prácticos."
    }
  },
  {
    id: "dark-mode-design-tokens",
    date: "2026-01-25",
    category: "dev",
    icon: "🌓",
    featured: false,
    title: {
      pt: "Dark mode de verdade: como estruturar design tokens em CSS",
      en: "Real dark mode: how to structure design tokens in CSS",
      es: "Modo oscuro de verdad: cómo estructurar design tokens en CSS"
    },
    excerpt: {
      pt: "Variáveis CSS, contraste acessível e a diferença entre inverter cores e desenhar um segundo tema.",
      en: "CSS variables, accessible contrast, and the difference between inverting colors and designing a second theme.",
      es: "Variables CSS, contraste accesible y la diferencia entre invertir colores y diseñar un segundo tema."
    }
  },
  {
    id: "primeiros-90-dias-tech",
    date: "2025-12-09",
    category: "career",
    icon: "🌱",
    featured: false,
    title: {
      pt: "Os primeiros 90 dias estudando tecnologia: o que eu faria diferente",
      en: "The first 90 days learning tech: what I'd do differently",
      es: "Los primeros 90 días aprendiendo tecnología: qué haría diferente"
    },
    excerpt: {
      pt: "Erros, acertos e uma rotina de estudos que finalmente funcionou para mim.",
      en: "Mistakes, wins, and a study routine that finally worked for me.",
      es: "Errores, aciertos y una rutina de estudio que finalmente funcionó para mí."
    }
  }
];

const CATEGORY_LABEL_KEY = {
  dev: "filter_dev",
  data: "filter_data",
  career: "filter_career"
};
