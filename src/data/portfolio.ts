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
      "An AI research assistant that finds relevant arXiv papers and turns them into structured summaries with focused search and synthesis agents.",
    stack: ["Python", "CrewAI", "FastAPI", "Gemini"],
    href: profile.github,
    diagram: {
      label: "PAPER-TO-BRIEF WORKFLOW",
      steps: ["arXiv papers", "Search agent", "Summary agent", "Research brief"],
    },
  },
  {
    number: "02",
    title: "TextIQ",
    category: "Generative AI",
    description:
      "An AI productivity platform for tone-aware rewriting, document question answering, and generating presentation decks with speaker notes.",
    stack: ["Python", "Gemini", "React"],
    href: profile.github,
    diagram: {
      label: "CONTENT WORKSPACE",
      steps: ["Text or document", "Rewrite · ask · explore", "Presentation deck"],
    },
  },
  {
    number: "03",
    title: "Research Topic Graphs",
    category: "NLP · Knowledge graphs",
    description:
      "A topic-modelling pipeline that groups research abstracts and maps relationships between themes as an analyzable graph.",
    stack: ["KeyBERT", "Llama 2", "UMAP", "HDBSCAN"],
    href: profile.github,
    diagram: {
      label: "ABSTRACTS TO CONNECTED THEMES",
      steps: ["Abstracts", "Topic discovery", "Clusters", "Similarity graph"],
    },
  },
  {
    number: "04",
    title: "SmartSaver AI",
    category: "Applied AI · Finance",
    description:
      "A finance app that extracts transactions from receipt images, organizes spending, and offers guidance informed by spending patterns.",
    stack: ["Next.js", "Gemini Vision", "PostgreSQL"],
    href: profile.github,
    diagram: {
      label: "RECEIPT-TO-SPENDING INSIGHT",
      steps: ["Receipt image", "Vision extraction", "Expense categories", "Spending view"],
    },
  },
  {
    number: "05",
    title: "Multimodal HyperGNNs",
    category: "Published research · Medical AI",
    description:
      "A research project exploring hypergraph neural networks to combine structural MRI and clinical data for neurodegenerative disorder classification and severity analysis.",
    stack: ["HyperGNN", "MRI + clinical data", "SHAP", "Grad-CAM"],
    href: profile.github,
    diagram: {
      label: "MULTIMODAL PATIENT GRAPH",
      steps: ["MRI + clinical", "Patient hypergraph", "Classification", "SHAP · Grad-CAM"],
    },
  },
  {
    number: "06",
    title: "Traffic Accident Detection",
    category: "Published research · Computer vision",
    description:
      "A comparative study of deep-learning approaches for traffic accident detection, with an emphasis on making model behaviour more interpretable.",
    stack: ["Deep learning", "Video analysis", "Explainable AI"],
    href: profile.github,
    diagram: {
      label: "DETECTION AND EXPLANATION",
      steps: ["Traffic frames", "Model comparison", "Accident detection", "Model explanation"],
    },
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
      "Published research exploring hypergraph neural networks for combining structural MRI and clinical data in neurodegenerative disorder classification, with SHAP and Grad-CAM used to support interpretability.",
    tags: ["Hypergraph neural networks", "Multimodal learning", "Explainable AI"],
  },
  {
    year: "2025",
    venue: "WCAIAA 2025",
    title: "Reading Between the Lines: LLM-Powered Topic Modelling and Graph-Based Insights from Research Abstracts",
    summary:
      "Published research combining language-model-based topic discovery with graph analysis to surface connections across research abstracts.",
    tags: ["LLMs", "Topic modelling", "Graph analytics"],
  },
  {
    year: "2024",
    venue: "ICMBDC 2024",
    title: "Comparative Analysis of Traffic Accident Detection with Emphasis on Explainability of DL Models",
    summary:
      "Published comparative research on deep-learning approaches to traffic accident detection, focused on explainability of model behaviour.",
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
