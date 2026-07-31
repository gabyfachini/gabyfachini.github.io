/* ==========================================================================
   ARTICLES — replace/extend this list to publish new posts.
   Each article can be featured (shown big, centered) or regular
   (shown in the smaller grid below). "icon" is a placeholder emoji used
   as the thumbnail until real cover images are added in /assets/images.
   ========================================================================== */

const ARTICLES = [
  {
    id: "por-que-estrategias-falham-execucao",
    date: "2026-08-12",
    category: "estrategia",
    icon: " ",
    image: "assets/images/por-que-estrategias-falham-execucao.jpg",
    featured: false,
    title: {
      pt: "Por que tantas estratégias falham mesmo quando parecem excelentes no papel?",
      en: "Why do so many strategies fail even when they look excellent on paper?",
      es: "¿Por qué tantas estrategias fallan incluso cuando parecen excelentes en el papel?"
    },
    excerpt: {
      pt: "Depois do São Paulo Innovation Week, ficou claro que o problema raramente é a estratégia em si, mas o alinhamento entre pessoas, processos e cultura.",
      en: "After São Paulo Innovation Week, it became clear the problem is rarely the strategy itself, but the alignment between people, processes and culture.",
      es: "Tras el São Paulo Innovation Week, quedó claro que el problema rara vez es la estrategia en sí, sino la alineación entre personas, procesos y cultura."
    }
  },
  {
    id: "seguranca-alimentar-geopolitica-regulacao-internacional",
    date: "2026-08-08",
    category: "negocios",
    icon: " ",
    image: "assets/images/seguranca-alimentar-geopolitica-regulacao-internacional.jpg",
    featured: false,
    title: {
      pt: "Como o 11 de setembro mudou as regras para quem exporta alimentos aos Estados Unidos",
      en: "How 9/11 changed the rules for companies exporting food to the United States",
      es: "Cómo el 11 de septiembre cambió las reglas para quienes exportan alimentos a Estados Unidos"
    },
    excerpt: {
      pt: "Um exemplo claro de como acontecimentos geopolíticos podem transformar regulações e a estratégia de empresas que atuam globalmente.",
      en: "A clear example of how geopolitical events can transform regulations and the strategy of companies operating globally.",
      es: "Un ejemplo claro de cómo los acontecimientos geopolíticos pueden transformar regulaciones y la estrategia de empresas que operan globalmente."
    }
  },
  {
    id: "internacionalizacao-negocios-effectuation-vtex",
    date: "2026-08-06",
    category: "negocios",
    icon: " ",
    image: "assets/images/internacionalizacao-negocios-effectuation-vtex.jpg",
    featured: false,
    title: {
      pt: "Internacionalizar um negócio é um exercício constante de adaptação",
      en: "Taking a business international is a constant exercise in adaptation",
      es: "Internacionalizar un negocio es un ejercicio constante de adaptación"
    },
    excerpt: {
      pt: "O que aprendi sobre effectuation, pivôs de negócio e os desafios reais de expandir para outros países, a partir do case da VTEX.",
      en: "What I learned about effectuation, business pivots and the real challenges of expanding abroad, from VTEX's case.",
      es: "Lo que aprendí sobre effectuation, pivotes de negocio y los desafíos reales de expandirse a otros países, a partir del caso de VTEX."
    }
  },
  {
    id: "sao-paulo-innovation-week-dados-maturidade-ia",
    date: "2026-08-03",
    category: "estrategia",
    icon: " ",
    image: "assets/images/sao-paulo-innovation-week-dados-maturidade-ia.jpeg",
    featured: false,
    title: {
      pt: "Dados, maturidade e o potencial do Brasil para criar empresas globais",
      en: "Data, maturity and Brazil's potential to build global companies",
      es: "Datos, madurez y el potencial de Brasil para crear empresas globales"
    },
    excerpt: {
      pt: "Aprendizados do São Paulo Innovation Week sobre infraestrutura de dados, maturidade organizacional para IA e o potencial brasileiro de gerar negócios globais.",
      en: "Learnings from São Paulo Innovation Week on data infrastructure, organizational AI maturity and Brazil's potential to build global businesses.",
      es: "Aprendizajes del São Paulo Innovation Week sobre infraestructura de datos, madurez organizacional para la IA y el potencial brasileño de generar negocios globales."
    }
  },
  {
    id: "google-for-startups-brasil-ia-infraestrutura",
    date: "2026-07-28",
    category: "ia",
    icon: " ",
    image: "assets/images/google-for-startups-brasil-ia-infraestrutura.jpeg",
    featured: false,
    title: {
      pt: "A Inteligência Artificial deixou de ser modelo para se tornar infraestrutura",
      en: "Artificial Intelligence has stopped being a model and become infrastructure",
      es: "La Inteligencia Artificial dejó de ser un modelo para convertirse en infraestructura"
    },
    excerpt: {
      pt: "Aprendizados do Google for Startups sobre IA como infraestrutura empresarial e o Brasil no radar global de inovação.",
      en: "Learnings from Google for Startups on AI as business infrastructure and Brazil's place on the global innovation radar.",
      es: "Aprendizajes del Google for Startups sobre la IA como infraestructura empresarial y Brasil en el radar global de innovación."
    }
  },
  {
    id: "web-summit-rio-tendencias-tecnologia-negocios",
    date: "2026-07-15",
    category: "tecnologia",
    icon: " ",
    image: "assets/images/web-summit-rio-tendencias-tecnologia-negocios.jpg",
    featured: false,
    title: {
      pt: "Cinco aprendizados do Web Summit Rio sobre tecnologia, dados e negócios",
      en: "Five lessons from Web Summit Rio on technology, data and business",
      es: "Cinco aprendizajes del Web Summit Rio sobre tecnología, datos y negocios"
    },
    excerpt: {
      pt: "Tendências que estão moldando tecnologia, cultura e negócios, direto do Web Summit Rio.",
      en: "Trends shaping technology, culture and business, straight from Web Summit Rio.",
      es: "Tendencias que están moldeando la tecnología, la cultura y los negocios, directo del Web Summit Rio."
    }
  },
  {
    id: "empresas-crescem-mercado-desacelera",
    date: "2026-06-20",
    category: "estrategia",
    icon: "🚀",
    image: "assets/images/empresas-crescem-mercado-desacelera.jpg", 
    featured: false,
    title: {
      pt: "O que faz empresas crescerem quando o mercado desacelera?",
      en: "What makes companies grow when the market slows down?",
      es: "¿Qué hace que las empresas crezcan cuando el mercado se desacelera?"
    },
    excerpt: {
      pt: "Uma análise sobre eficiência operacional, cultura, tecnologia e tomada de decisão em momentos de incerteza.",
      en: "An analysis of operational efficiency, culture, technology and decision-making in times of uncertainty.",
      es: "Un análisis sobre eficiencia operativa, cultura, tecnología y toma de decisiones en momentos de incertidumbre."
    }
  },
  {
    id: "ia-mudando-trabalho-alem-chatgpt",
    date: "2026-05-14",
    category: "ia",
    icon: "🤖",
    image: "assets/images/ia-mudando-trabalho-alem-chatgpt.jpg",
    featured: false,
    title: {
      pt: "Como a IA está mudando o trabalho — e por que isso vai muito além do ChatGPT",
      en: "How AI is changing work — and why it goes far beyond ChatGPT",
      es: "Cómo la IA está cambiando el trabajo — y por qué va mucho más allá de ChatGPT"
    },
    excerpt: {
      pt: "Os impactos da IA em produtos, atendimento, engenharia, marketing e liderança.",
      en: "The impact of AI on products, customer service, engineering, marketing and leadership.",
      es: "Los impactos de la IA en productos, atención al cliente, ingeniería, marketing y liderazgo."
    }
  },
  {
    id: "cloud-estrategia-de-negocio",
    date: "2026-04-02",
    category: "tecnologia",
    icon: "☁️",
    image: "assets/images/cloud-estrategia-de-negocio.jpg",
    featured: false,
    title: {
      pt: "Cloud deixou de ser infraestrutura. Agora é estratégia de negócio.",
      en: "Cloud is no longer just infrastructure. Now it's business strategy.",
      es: "La nube dejó de ser infraestructura. Ahora es estrategia de negocio."
    },
    excerpt: {
      pt: "Como empresas utilizam computação em nuvem para acelerar inovação, reduzir custos e criar vantagem competitiva.",
      en: "How companies use cloud computing to accelerate innovation, cut costs and build competitive advantage.",
      es: "Cómo las empresas utilizan la computación en la nube para acelerar la innovación, reducir costos y crear ventaja competitiva."
    }
  },
  {
    id: "bastidores-startups-escalam-eficiencia",
    date: "2026-03-11",
    category: "negocios",
    icon: "📈",
    image: "assets/images/bastidores-startups-escalam-eficiencia.jpg",
    featured: false,
    title: {
      pt: "Os bastidores das startups que conseguem escalar sem perder eficiência",
      en: "Behind the scenes of startups that scale without losing efficiency",
      es: "El detrás de escena de las startups que logran escalar sin perder eficiencia"
    },
    excerpt: {
      pt: "Produto, métricas, cultura e processos que sustentam o crescimento.",
      en: "Product, metrics, culture and processes that sustain growth.",
      es: "Producto, métricas, cultura y procesos que sostienen el crecimiento."
    }
  },
  {
    id: "competencias-lideres-proximos-cinco-anos",
    date: "2026-02-18",
    category: "lideranca",
    icon: "👥",
    image: "assets/images/competencias-lideres-proximos-cinco-anos.jpg",
    featured: false,
    title: {
      pt: "As competências que líderes precisarão desenvolver nos próximos cinco anos",
      en: "The skills leaders will need to develop over the next five years",
      es: "Las competencias que los líderes deberán desarrollar en los próximos cinco años"
    },
    excerpt: {
      pt: "O impacto da inteligência artificial, automação e mudanças no mercado sobre a liderança moderna.",
      en: "The impact of artificial intelligence, automation and market shifts on modern leadership.",
      es: "El impacto de la inteligencia artificial, la automatización y los cambios del mercado en el liderazgo moderno."
    }
  },
  {
    id: "feedback-mudou-forma-compartilhar-conhecimento",
    date: "2025-09-06",
    category: "lideranca",
    image: "assets/images/feedback.jpg",
    featured: true, // This article is featured and will be shown in the hero section of the articles page
    title: {
      pt: "O Feedback que mudou minha forma de compartilhar conhecimento ✨",
      en: "The Feedback That Changed the Way I Share Knowledge ✨",
      es: "El comentario que cambió mi forma de compartir conocimiento ✨"
    },
    excerpt: {
      pt: "Como um feedback despertou em mim a vontade de transformar aprendizados, experiências e reflexões em conhecimento compartilhado.",
      en: "How a single piece of feedback inspired me to turn my experiences, reflections and lessons into shared knowledge.",
      es: "Cómo un comentario despertó en mí el deseo de transformar experiencias, reflexiones y aprendizajes en conocimiento compartido."
    }
  }
];

const CATEGORY_LABEL_KEY = {
  estrategia: "filter_estrategia",
  ia: "filter_ia",
  tecnologia: "filter_tecnologia",
  negocios: "filter_negocios",
  lideranca: "filter_lideranca"
};
