export const profile = {
  name: "Nishaan Padanthaya",
  role: "AI / ML Engineer",
  email: "nishaanpj@gmail.com",
  github: "https://github.com/NishaanPadanthaya",
  linkedin: "https://www.linkedin.com/in/nishaan-padanthaya-6298a7290/",
  leetcode: "https://leetcode.com/u/NishaanPadanthaya/",
};

export const projects = [
  {
    number: "01",
    title: "PaperReviewer AI",
    category: "Agentic research",
    description:
      "A research assistant that discovers papers on arXiv and turns them into structured summaries through a pair of focused AI agents.",
    stack: ["Python", "CrewAI", "FastAPI", "Gemini"],
    href: "https://github.com/NishaanPadanthaya",
    visual: "agents",
  },
  {
    number: "02",
    title: "TextIQ",
    category: "Generative AI",
    description:
      "An AI productivity workspace for tone-aware rewriting, document Q&A, and generating presentation decks with speaker notes.",
    stack: ["Python", "Gemini", "React"],
    href: "https://github.com/NishaanPadanthaya",
    visual: "text",
  },
  {
    number: "03",
    title: "Research Topic Graphs",
    category: "NLP · Knowledge graphs",
    description:
      "A pipeline that models themes across research abstracts, then maps topic relationships with clustering and graph analysis.",
    stack: ["KeyBERT", "Llama 2", "UMAP", "HDBSCAN"],
    href: "https://github.com/NishaanPadanthaya",
    visual: "graph",
  },
  {
    number: "04",
    title: "SmartSaver AI",
    category: "Applied AI",
    description:
      "A finance app using vision to extract receipt transactions, categorize spending, and offer context-aware budgeting guidance.",
    stack: ["Next.js", "Gemini Vision", "PostgreSQL"],
    href: "https://github.com/NishaanPadanthaya",
    visual: "finance",
  },
];

export const skills = [
  {
    label: "AI & machine learning",
    items: ["Machine learning", "Deep learning", "NLP", "Computer vision", "Graph learning", "Explainable AI"],
  },
  {
    label: "Generative AI",
    items: ["LLM applications", "RAG", "AI agents", "LangChain", "CrewAI", "Hugging Face"],
  },
  {
    label: "Engineering",
    items: ["Python", "C++", "Java", "SQL", "FastAPI", "React", "Next.js"],
  },
  {
    label: "Tools & platforms",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "Azure", "Docker", "Git"],
  },
];

export const publications = [
  {
    year: "2026",
    venue: "ICTIS 2026",
    title: "HyperGNNs for Multi-Modal Classification and Severity Analysis of Neurodegenerative Disorders",
    authors: "K. Bhavish Raju, K. Musadiq Pasha, Mohammed Saqlain, Nishaan Padanthaya, Jayashree R.",
    summary:
      "Explores hypergraph neural networks for combining structural MRI and clinical data in neurodegenerative disorder classification, with SHAP and Grad-CAM used to support interpretability.",
    tags: ["Hypergraph neural networks", "Multimodal learning", "Explainable AI"],
  },
  {
    year: "2025",
    venue: "WCAIAA 2025",
    title: "Reading Between the Lines: LLM-Powered Topic Modelling and Graph-Based Insights from Research Abstracts",
    summary: "Research on combining language models, topic discovery, and graph analysis to surface connections across research abstracts.",
    tags: ["LLMs", "Topic modelling", "Graph analytics"],
  },
  {
    year: "2024",
    venue: "ICMBDC 2024",
    title: "Comparative Analysis of Traffic Accident Detection with Emphasis on Explainability of DL Models",
    summary: "A comparative study of deep learning approaches for traffic accident detection, with a focus on model explainability.",
    tags: ["Computer vision", "Deep learning", "Explainable AI"],
  },
];

export const achievements = [
  { title: "ACM ICPC Asia West Regionalist", detail: "2025 · Competitive programming" },
  { title: "1st place · Hack-AI Analytics Hackathon", detail: "2024 · PES University" },
  { title: "2nd place · Flipr AI/ML Hackathon", detail: "2025" },
  { title: "7th place · Neuronex ML Datathon", detail: "2023" },
  { title: "CNR & DAC Scholarship Awardee", detail: "PES University" },
];
