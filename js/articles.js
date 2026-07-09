/* ==========================================================================
   ARTICLES — replace/extend this list to publish new posts.
   Each article can be featured (shown big, centered) or regular
   (shown in the smaller grid below). "icon" is a placeholder emoji used
   as the thumbnail until real cover images are added in /assets/images.
   ========================================================================== */

const ARTICLES = [
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
    date: "2026-07-06",
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
