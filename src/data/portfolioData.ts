import { ProfileData, Experience, Project, SkillCategory, Education } from '../types';

export const profileData: ProfileData = {
  name: "Ibi Ibrahim",
  title: {
    fr: "Développeur Full-Stack Laravel / React · IA & LLM",
    en: "Full-Stack Laravel / React Developer · AI & LLM Specialist",
  },
  location: "Maroua, Cameroun",
  phone: "+237 698 89 71 14",
  email: "phenixibm@gmail.com",
  githubUsername: "Phenix3",
  githubUrl: "https://github.com/Phenix3",
  linkedinUsername: "ibi-ibrahim",
  linkedinUrl: "https://linkedin.com/in/ibi-ibrahim",
  whatsappUrl: "https://wa.me/237698897114",
  bio: {
    fr: "Développeur web full-stack Laravel / Symfony / React avec 5+ années d'expérience dans la livraison de plateformes SaaS et de portails institutionnels pour des clients au Cameroun. Fondateur de Nexus Digital Hub, agence digitale et centre de formation à Maroua.",
    en: "Full-stack web developer in Laravel / Symfony / React with 5+ years of experience delivering robust SaaS platforms and institutional portals for clients in Cameroon. Founder of Nexus Digital Hub, a digital agency and tech training center in Maroua.",
  },
  fullBio: {
    fr: [
      "Spécialisé dans l'intégration de modèles LLM (Claude API, OpenAI) dans des applications métier, le développement d'agents IA autonomes et la mise en œuvre de workflows MCP (Model Context Protocol).",
      "Fondateur et lead technique chez Nexus Digital Hub à Maroua, où je supervise des projets digitaux de bout en bout : de l'analyse des besoins au déploiement continu et à la formation d'équipes techniques.",
      "Passionné par l'innovation numérique en Afrique, le développement de solutions offline-first et adaptées aux infrastructures locales (paiements Mobile Money, télé-triage médical, EdTech adaptative).",
      "Je cherche à contribuer activement à des projets ambitieux alliant développement web haute performance et intelligence artificielle appliquée."
    ],
    en: [
      "Specialized in integrating LLM models (Claude API, OpenAI) into business software, developing autonomous AI agents, and deploying MCP (Model Context Protocol) workflows.",
      "Founder and technical lead at Nexus Digital Hub in Maroua, managing end-to-end digital cycles: from requirements analysis to CI/CD deployments and client training.",
      "Passionate about digital innovation in Africa, creating offline-first applications resilient to local infrastructure constraints (Mobile Money gateways, rural medical triage, adaptive EdTech).",
      "Actively seeking to collaborate on high-impact projects bridging performant modern web architecture and applied artificial intelligence."
    ],
  },
  stats: {
    yearsExp: 5,
    completedProjects: 12,
    teamMembersManaged: 3,
    hackathonAwards: 2,
  },
  strengths: {
    fr: [
      {
        title: "Autonomie & Initiative",
        desc: "Capacité éprouvée à concevoir et mener des architectures complexes de zéro jusqu'à la production."
      },
      {
        title: "Leadership & Management",
        desc: "Fondateur d'agence, encadrement d'équipes pluridisciplinaires (mobile, backend, marketing)."
      },
      {
        title: "Rigueur & Délais",
        desc: "Respect strict des cahiers des charges et standards de qualité (W3C, sécurité JWT/OAuth, tests)."
      },
      {
        title: "Résolution de Problèmes Complexes",
        desc: "Optimisation de requêtes SQL à fort volume, intégration multi-tenant, tolérance aux pannes réseau."
      }
    ],
    en: [
      {
        title: "Autonomy & Proactivity",
        desc: "Demonstrated ability to architect, engineer, and ship complex systems from concept to production."
      },
      {
        title: "Technical Leadership",
        desc: "Agency founder experience, managing multidisciplinary engineering squads (mobile, backend, marketing)."
      },
      {
        title: "Rigor & Timely Delivery",
        desc: "Strict compliance with specifications, robust security standards (W3C, JWT/OAuth2, CI/CD)."
      },
      {
        title: "Complex Problem Solving",
        desc: "High-volume SQL optimization, robust multi-tenant architectures, offline-first fallback mechanisms."
      }
    ]
  },
  interests: {
    fr: [
      "Intelligence Artificielle appliquée au développement logiciel",
      "AI Product Building & Agents autonomes",
      "Écosystème Open Source & Hackathons internationaux",
      "Innovation technologique et numérique pour l'Afrique"
    ],
    en: [
      "Applied Artificial Intelligence in software engineering",
      "AI Product Building & Autonomous Agents",
      "Open Source Ecosystem & Competitive Hackathons",
      "African Digital Infrastructure & Fintech Innovation"
    ]
  },
  languagesSpoken: {
    fr: [
      { name: "Français", level: "Langue maternelle / Courant" },
      { name: "Anglais", level: "Professionnel / Technique" }
    ],
    en: [
      { name: "French", level: "Native / Fluent" },
      { name: "English", level: "Full Professional / Technical" }
    ]
  }
};

export const projectsData: Project[] = [
  {
    id: "mediroute",
    title: "MediRoute — Assistant de Triage Médical IA",
    category: "ai",
    year: "2025",
    badge: "Compétition MBZUAI · K2-Think-V2",
    competition: "K2-Think-V2 · MBZUAI (Jusqu'à $30 000)",
    featured: true,
    summary: {
      fr: "Application PWA offline-first pour le triage médical en zone rurale africaine. Intègre le modèle de raisonnement K2 Think, supporte le français et les dialectes locaux avec fallback hors-ligne.",
      en: "Offline-first PWA application for medical triage in rural African health centers. Embeds K2 Think reasoning model, supports French & local dialects with offline fallback."
    },
    details: {
      fr: {
        problem: "Dans les zones rurales africaines, le manque de personnel médical qualifié et l'absence fréquente de connexion internet rendent le pré-diagnostic et le triage d'urgence très difficiles.",
        solution: "Une Progressive Web App (PWA) résiliente fonctionnant hors-ligne grâce à une synchronisation locale différée, couplée au modèle de raisonnement K2 Think pour assister les agents de santé communautaires.",
        highlights: [
          "Architecture multi-couches avec base locale IndexedDB et fallback offline",
          "Interfaçage avec l'API K2 Think pour le raisonnement médical structuré",
          "Support linguistique multilingue adapté au contexte local d'Afrique centrale",
          "Sélectionné pour la prestigieuse compétition mondiale MBZUAI (jusqu'à 30 000 $ de dotation)"
        ]
      },
      en: {
        problem: "In rural medical centers, shortages of specialized clinicians and unstable internet access impede rapid triage and critical pre-diagnostics.",
        solution: "A robust offline-first PWA leveraging local caching and the K2 Think reasoning model to guide community health workers through structured triage protocols.",
        highlights: [
          "Multi-tier architecture with local IndexedDB persistence and offline sync queues",
          "Integrated K2 Think reasoning API for structured clinical symptom evaluations",
          "Multilingual support covering French and regional African dialects",
          "Selected for the prestigious global MBZUAI AI competition ($30k prize pool)"
        ]
      }
    },
    technologies: ["React", "FastAPI", "Python", "K2 Think API", "PWA", "IndexedDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Phenix3"
  },
  {
    id: "edupath-ai",
    title: "EduPath AI — Plateforme de Tutorat Adaptatif",
    category: "ai",
    year: "2025",
    badge: "Hackathon Polytech Maroua",
    competition: "Hackathon École Polytechnique de Maroua",
    featured: true,
    summary: {
      fr: "Plateforme de tutorat intelligent pour lycéens camerounais (BEPC/BAC) avec parcours adaptatif alimenté par un LLM. Génération automatique d'exercices et feedback personnalisé selon le niveau.",
      en: "Intelligent adaptive tutoring platform for Cameroonian secondary school students (BEPC/BAC) powered by LLMs. Features automated exercise generation and real-time personalized feedback."
    },
    details: {
      fr: {
        problem: "Les élèves préparant les examens nationaux manquent de suivi personnalisé et d'exercices corrigés détaillés adaptés aux programmes officiels.",
        solution: "Mise en place d'un tuteur virtuel propulsé par l'API Claude qui analyse les lacunes de l'élève en temps réel et génère des parcours de révision individualisés.",
        highlights: [
          "Génération dynamique de questionnaires et synthèses pédagogiques par Claude API",
          "Modélisation des compétences et progression continue par élève",
          "Tableau de bord pour enseignants et suivi statistique des acquis",
          "Projet primé lors du Hackathon officiel de l'École Polytechnique de Maroua"
        ]
      },
      en: {
        problem: "High school students preparing for national exams often lack personalized mentorship and tailored practice problems matching official curricula.",
        solution: "Engineered an AI tutor powered by Claude API that evaluates knowledge gaps in real-time and constructs individualized revision pathways.",
        highlights: [
          "Dynamic quiz generation & interactive explanations powered by Claude API",
          "Skill-tree mastery tracking and performance progression analytics",
          "Teacher dashboard for monitoring student performance and key roadblocks",
          "Recognized with an award at the National Polytechnic School of Maroua Hackathon"
        ]
      }
    },
    technologies: ["Laravel", "React", "TypeScript", "Claude API", "MySQL", "Prompt Engineering"],
    githubUrl: "https://github.com/Phenix3"
  },
  {
    id: "mcp-client-server",
    title: "Client MCP React + Serveur FastAPI World Bank",
    category: "ai",
    year: "2025",
    badge: "Model Context Protocol · Liwaza Assessment",
    competition: "Assessment technique — Liwaza (AI-for-Education)",
    featured: true,
    summary: {
      fr: "Implémentation complète du protocole MCP (Model Context Protocol) : client React et serveur Python/FastAPI consommant l'API World Bank pour interconnecter des agents IA avec des données réelles.",
      en: "Full MCP (Model Context Protocol) implementation: React client and Python/FastAPI server consuming the World Bank API to connect AI agents with live global economic data."
    },
    details: {
      fr: {
        problem: "Les agents IA ont besoin d'outils standardisés et sécurisés pour interroger des sources de données externes complexes sans hallucinations.",
        solution: "Création d'un serveur MCP conforme aux spécifications d'Anthropic pour exposer les données d'indicateurs économiques mondiaux, consommé par une interface client interactive en React.",
        highlights: [
          "Serveur MCP en FastAPI avec gestion des outils (tools), ressources et prompts",
          "Client web React avec streaming des requêtes et visualisation des graphiques de données",
          "Intégration transparente avec les API de la Banque Mondiale",
          "Démonstration d'une maîtrise avancée des architectures d'agents et de protocoles IA émergents"
        ]
      },
      en: {
        problem: "AI agents require secure, protocol-standardized channels to retrieve authoritative live data without hallucinations.",
        solution: "Built an Anthropic-standard MCP server exposing World Bank developmental indicators, interfaced with a reactive web client.",
        highlights: [
          "FastAPI MCP server implementing standard tool definitions, resources & prompts",
          "React web interface with token streaming and dynamic chart visualizers",
          "Direct integration with World Bank Open Data endpoints",
          "Validation of cutting-edge agentic workflows and tool-calling protocols"
        ]
      }
    },
    technologies: ["React", "TypeScript", "FastAPI", "Python", "MCP Protocol", "World Bank API", "JSON-RPC"],
    githubUrl: "https://github.com/Phenix3"
  },
  {
    id: "stageconnect",
    title: "StageConnect — Plateforme de Mise en Relation Stages",
    category: "saas",
    year: "2024-2025",
    badge: "SaaS & Matching IA",
    featured: false,
    summary: {
      fr: "Plateforme connectant étudiants en informatique et entreprises camerounaises pour les stages. Backend opérationnel avec 3 interfaces (étudiant, admin, entreprise). Intégration IA LlamaIndex & CopilotKit.",
      en: "Two-sided platform connecting IT students with Cameroonian enterprises for internships. Operational backend featuring 3 role portals (student, company, admin) with upcoming AI matching."
    },
    details: {
      fr: {
        problem: "Difficulté majeure pour les étudiants technologiques de trouver des stages pertinents, et processus de recrutement lourd pour les entreprises locales.",
        solution: "Un portail complet avec filtres par compétences techniques, validation des candidatures et système de recommandation intelligent.",
        highlights: [
          "3 tableaux de bord dédiés : Étudiants, Recruteurs et Administrateurs",
          "Architecture robuste en Laravel avec API REST et front-end React moderne",
          "Workflows d'évaluation des CV et planification des entretiens",
          "Module de matching intelligent en cours d'intégration avec LlamaIndex"
        ]
      },
      en: {
        problem: "Engineering students in Cameroon struggle to find verified internship placements while companies lack streamlined candidate vetting.",
        solution: "A high-performance SaaS connecting applicants and tech recruiters with automated skill mapping and multi-tier permission portals.",
        highlights: [
          "3 distinct portals: Student hub, Company recruiter cockpit, System admin",
          "Modular Laravel backend with RESTful API contracts and responsive React UI",
          "Application lifecycle management & interview coordination workflows",
          "Planned AI candidate-job matching integration via LlamaIndex & CopilotKit"
        ]
      }
    },
    technologies: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS", "LlamaIndex"],
    githubUrl: "https://github.com/Phenix3"
  },
  {
    id: "momo-plugin",
    title: "WordPress / WooCommerce Mobile Money Plugin",
    category: "plugin",
    year: "2024",
    badge: "Fintech & Passerelle Paiement",
    featured: false,
    summary: {
      fr: "Plugin de paiement autonome intégrant directement les API MTN MoMo et Orange Money, avec couche WooCommerce optionnelle. Cible le marché e-commerce camerounais et ouest-africain.",
      en: "Standalone payment plugin directly integrating MTN MoMo and Orange Money APIs, with optional WooCommerce integration for Cameroonian & West African e-commerce."
    },
    details: {
      fr: {
        problem: "L'absence de cartes de crédit courantes en Afrique francophone bloque les ventes en ligne si les paiements Mobile Money ne sont pas intégrés de manière fluide.",
        solution: "Développement d'un module de paiement léger et sécurisé supportant les webhooks, les vérifications de solde en direct et la confirmation instantanée de commande.",
        highlights: [
          "Intégration directe des API de production MTN Mobile Money et Orange Money",
          "Gestion des webhooks asynchrones pour la confirmation instantanée des transactions",
          "Compatible avec ou sans WooCommerce via des boutons d'encaissement autonomes",
          "Sécurisation des clés secrètes et conformité stricte aux protocoles bancaires"
        ]
      },
      en: {
        problem: "Low credit card penetration in Central/West Africa requires seamless Mobile Money processing for any digital merchant.",
        solution: "Engineered a secure payment extension handling instant USSD pushes, webhook listeners, and automatic payment status callbacks.",
        highlights: [
          "Direct integration with MTN Mobile Money API & Orange Money API",
          "Asynchronous webhook handlers with transaction signature verification",
          "Plug-and-play compatibility with standard WooCommerce checkout flows",
          "Built-in audit logging and automated refund/re-try mechanism"
        ]
      }
    },
    technologies: ["PHP", "WordPress", "WooCommerce", "MTN MoMo API", "Orange Money API", "cURL", "Webhooks"],
    githubUrl: "https://github.com/Phenix3"
  },
  {
    id: "symshop",
    title: "Symshop — E-Commerce Haute Performance",
    category: "ecommerce",
    year: "2023",
    badge: "Open Source & Architecture",
    featured: false,
    summary: {
      fr: "Plateforme de vente en ligne complète (panier, catalogue hiérarchique, tunnel de commande) inspirée des standards architecturaux de Sylius et Symfony.",
      en: "Full-featured modern e-commerce platform (cart management, multi-level catalog, checkout pipeline) inspired by Sylius and Symfony enterprise standards."
    },
    details: {
      fr: {
        problem: "Besoin d'un socle e-commerce modulaire, personnalisable et sans le surcoût de solutions monolithiques lourdes.",
        solution: "Architecture MVC propre en Symfony avec gestion avancée des stocks, des devises et des états de commande par machine à états (State Machine).",
        highlights: [
          "Conception modulaire basée sur les composants Symfony et Doctrine ORM",
          "Gestion des paniers d'achat avec validation de stock en temps réel",
          "Back-office d'administration ergonomique pour les commerçants",
          "Codebase disponible en open source sur GitHub"
        ]
      },
      en: {
        problem: "Need for a clean, modular e-commerce engine free from the bloat of monolithic legacy platforms.",
        solution: "Crafted a decoupled Symfony MVC e-commerce platform with robust state machine workflows for order lifecycle tracking.",
        highlights: [
          "Modular architecture built on Symfony Components & Doctrine ORM",
          "Real-time inventory reservations and dynamic shopping cart sessions",
          "Intuitive merchant control room for product catalog and delivery updates",
          "Open-source codebase maintained on GitHub"
        ]
      }
    },
    technologies: ["Symfony", "PHP", "MySQL", "Twig", "Bootstrap", "Doctrine ORM"],
    githubUrl: "https://github.com/Phenix3"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "nexus-digital-hub",
    period: {
      fr: "2024 — Présent",
      en: "2024 — Present"
    },
    role: {
      fr: "Développeur Web Full-Stack & Fondateur",
      en: "Full-Stack Web Developer & Founder"
    },
    company: "Nexus Digital Hub",
    location: "Maroua, Cameroun",
    description: {
      fr: "Fondation et direction technique d'une agence digitale et centre de formation livrant des sites institutionnels, des plateformes SaaS sur-mesure et des intégrations d'intelligence artificielle pour des clients au Cameroun.",
      en: "Founded and technically directed a digital agency & tech hub delivering institutional websites, bespoke SaaS systems, and AI integrations for regional enterprises."
    },
    highlights: {
      fr: [
        "Supervision du cycle logiciel complet : analyse du besoin, architecture technique, développement, déploiement et formation des clients.",
        "Management et mentorat d'une équipe pluridisciplinaire de 3 personnes (développement mobile, backend, stratégie marketing).",
        "Conception de solutions d'automatisation IA et d'agents conversationnels sur mesure (Claude API, OpenAI).",
        "Formations professionnelles dispensées à des dizaines de jeunes talents sur les technologies web modernes."
      ],
      en: [
        "Led end-to-end software delivery: client scoping, architectural design, implementation, cloud deployment, and user training.",
        "Managed and mentored a 3-person technical team across mobile apps, backend systems, and growth marketing.",
        "Engineered customized AI automations and conversational agents for enterprise client operations.",
        "Delivered hands-on tech bootcamps in modern web development to regional developers."
      ]
    },
    technologies: ["Laravel", "React", "TypeScript", "Claude API", "MySQL", "Docker", "Linux", "CI/CD"],
    isCurrent: true
  },
  {
    id: "chr-maroua",
    period: {
      fr: "2024 — Présent",
      en: "2024 — Present"
    },
    role: {
      fr: "Développeur Web / Concepteur de Solutions",
      en: "Web Developer / Solution Architect"
    },
    company: "Centre Hospitalier Régional de Maroua",
    location: "Maroua, Cameroun",
    description: {
      fr: "Conception et déploiement du portail institutionnel officiel de l'hôpital régional de Maroua et mise en place de services numériques d'accueil et de prise de rendez-vous.",
      en: "Designed and deployed the official regional hospital portal alongside digital patient appointment and reception services."
    },
    highlights: {
      fr: [
        "Déploiement d'un CMS d'entreprise Sulu avec workflows de publication multi-rôles et gestion sécurisée des actualités médicales.",
        "Mise en place d'un système de prise de rendez-vous en ligne via une application Expo, réduisant drastiquement la charge administrative de l'accueil physique.",
        "Optimisation complète du référencement naturel (SEO) et de l'expérience utilisateur (UX) pour garantir l'accessibilité sur tous terminaux.",
        "Garantie d'une haute disponibilité et mise en conformité de la protection des données des usagers."
      ],
      en: [
        "Deployed enterprise Sulu CMS with role-based editorial workflows and institutional medical content management.",
        "Developed online patient appointment scheduling with Expo mobile integration, cutting front-desk queue times.",
        "Executed full SEO and responsive UX audits to ensure instant accessibility across low-bandwidth mobile networks.",
        "Maintained high uptime and fortified patient privacy security guidelines."
      ]
    },
    technologies: ["Symfony", "Sulu CMS", "PHP", "Bootstrap", "MySQL", "Expo", "REST API"],
    isCurrent: true
  },
  {
    id: "yadiko",
    period: {
      fr: "2025",
      en: "2025"
    },
    role: {
      fr: "Développeur Web Full-Stack",
      en: "Full-Stack Web Developer"
    },
    company: "Yadiko",
    location: "Cameroun",
    description: {
      fr: "Développement des modules critiques d'une plateforme SaaS scolaire de grande envergure en Laravel pour des dizaines d'établissements d'enseignement.",
      en: "Engineered critical core modules for a large-scale multi-school management SaaS platform in Laravel."
    },
    highlights: {
      fr: [
        "Conception d'une architecture multi-tenant étanche garantissant l'isolation absolue des données entre chaque établissement scolaire.",
        "Développement des modules de gestion des notes, calcul automatisé des moyennes pondérées et relevés de notes officiels.",
        "Intégration du système de suivi et encaissement des frais de scolarité.",
        "Optimisation poussée des requêtes MySQL complexes et indexation, accélérant la génération massive des bulletins scolaires."
      ],
      en: [
        "Architected multi-tenant database isolation guaranteeing zero cross-school data leakage.",
        "Engineered automated grade weighting, report card generators, and student academic records.",
        "Implemented tuition fee tracking and digital invoicing pipelines.",
        "Refactored complex MySQL queries and indexes to enable rapid generation of thousands of PDF report cards simultaneously."
      ]
    },
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Multi-tenant Architecture"]
  },
  {
    id: "nyanga-travel",
    period: {
      fr: "2023",
      en: "2023"
    },
    role: {
      fr: "Développeur Backend",
      en: "Backend Developer"
    },
    company: "Nyanga Travel",
    companyUrl: "https://nyangatravel.com",
    location: "Cameroun",
    description: {
      fr: "Conception et livraison d'une API REST Laravel robuste pour une plateforme de réservation de billets de transport interurbain en ligne.",
      en: "Built and delivered a resilient Laravel REST API for an online intercity passenger transit and bus booking platform."
    },
    highlights: {
      fr: [
        "Gestion de la disponibilité des sièges en temps réel et prévention des sur-réservations via verrous transactionnels.",
        "Traitement sécurisé des réservations de billets et gestion des profils voyageurs.",
        "Réduction mesurable du temps de réponse des endpoints critiques grâce à la mise en cache Redis et l'optimisation des requêtes Eloquent.",
        "Documentation complète des endpoints via Postman / OpenAPI pour l'équipe mobile."
      ],
      en: [
        "Engineered real-time seat inventory reservation with transactional locks to eliminate double-booking.",
        "Processed ticket checkout flows and traveler records with instant validation.",
        "Significantly decreased API latency on high-frequency routes using query caching and database tuning.",
        "Authored thorough Postman / OpenAPI documentation for seamless client app integration."
      ]
    },
    technologies: ["Laravel", "PHP", "MySQL", "API REST", "Cache Optimization", "Postman"]
  },
  {
    id: "fondation-agir",
    period: {
      fr: "2022",
      en: "2022"
    },
    role: {
      fr: "Développeur Web Full-Stack",
      en: "Full-Stack Web Developer"
    },
    company: "Fondation AGIR — ONG humanitaire",
    location: "Kousseri, Cameroun",
    description: {
      fr: "Conception et mise en production du portail web officiel de l'ONG humanitaire AGIR, facilitant la diffusion de rapports d'activité et les dons en ligne.",
      en: "Developed and launched the official humanitarian web platform for AGIR NGO, enabling public impact reports and online donations."
    },
    highlights: {
      fr: [
        "Développement responsive avec conformité stricte aux standards d'accessibilité W3C.",
        "Intégration d'un module de collecte de dons et présentation des projets humanitaires terrain.",
        "Livraison dans les délais impartis avec back-office intuitif pour l'équipe de communication de l'ONG."
      ],
      en: [
        "Delivered fully responsive UI complying with W3C web accessibility guidelines.",
        "Integrated online donation processing and field project showcase modules.",
        "Delivered on-schedule with an easy-to-use content management interface for non-technical NGO staff."
      ]
    },
    technologies: ["Symfony", "PHP", "MySQL", "JavaScript", "W3C Standards", "Responsive Design"]
  },
  {
    id: "sahel-fund",
    period: {
      fr: "2021",
      en: "2021"
    },
    role: {
      fr: "Développeur Web Full-Stack",
      en: "Full-Stack Web Developer"
    },
    company: "Sahel Fund",
    companyUrl: "https://sahel-fund.com",
    location: "Cameroun",
    description: {
      fr: "Développement du site institutionnel de la startup fintech Sahel Fund avec intégration d'API REST tierces et interface réactive en React.",
      en: "Engineered the official institutional website for fintech startup Sahel Fund with third-party REST API integrations and a React frontend."
    },
    highlights: {
      fr: [
        "Développement d'une interface utilisateur réactive en React connectée à un backend Symfony.",
        "Intégration d'API REST financières tierces et sécurisation des échanges de données.",
        "Mise en production sur serveur Linux dédié avec pipeline de déploiement continu."
      ],
      en: [
        "Developed an interactive React frontend connected to a modular Symfony backend.",
        "Integrated third-party financial REST endpoints with secure token handling.",
        "Configured Linux production deployment with automated continuous integration scripts."
      ]
    },
    technologies: ["Symfony", "PHP", "React", "MySQL", "API REST", "Linux Deployment", "Git"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-llm",
    title: {
      fr: "IA, LLM & Agents",
      en: "AI, LLMs & Agents"
    },
    description: {
      fr: "Intégration avancée de modèles de langage, protocoles d'agents et raisonnement IA.",
      en: "Advanced language model integrations, agentic workflows, and reasoning APIs."
    },
    iconName: "Bot",
    skills: [
      { name: "Claude API (Anthropic)", highlight: true, level: "Expert" },
      { name: "OpenAI API", highlight: true, level: "Advanced" },
      { name: "Model Context Protocol (MCP)", highlight: true, level: "Advanced" },
      { name: "Prompt Engineering", highlight: true, level: "Expert" },
      { name: "RAG (Retrieval-Augmented)", highlight: false, level: "Advanced" },
      { name: "LangChain", highlight: false, level: "Proficient" },
      { name: "K2 Think API", highlight: false, level: "Proficient" },
      { name: "LlamaIndex", highlight: false, level: "Proficient" }
    ]
  },
  {
    id: "backend",
    title: {
      fr: "Back-end & Architecture",
      en: "Back-end & Architecture"
    },
    description: {
      fr: "Architectures modulaires, API REST sécurisées, SaaS multi-tenant et haute performance.",
      en: "Modular architectures, secure REST APIs, multi-tenant SaaS, and high performance."
    },
    iconName: "Server",
    skills: [
      { name: "PHP", highlight: true, level: "Expert" },
      { name: "Laravel", highlight: true, level: "Expert" },
      { name: "Symfony", highlight: true, level: "Advanced" },
      { name: "API REST", highlight: true, level: "Expert" },
      { name: "FastAPI / Python", highlight: true, level: "Advanced" },
      { name: "Node.js / Express", highlight: false, level: "Advanced" },
      { name: "NestJS", highlight: false, level: "Proficient" },
      { name: "Architecture Multi-tenant", highlight: true, level: "Advanced" },
      { name: "Design Patterns MVC", highlight: false, level: "Expert" },
      { name: "JWT & OAuth2", highlight: false, level: "Advanced" }
    ]
  },
  {
    id: "frontend",
    title: {
      fr: "Front-end & Mobile",
      en: "Front-end & Mobile"
    },
    description: {
      fr: "Interfaces modernes réactives, TypeScript typé, composants réutilisables et PWA.",
      en: "Modern reactive user interfaces, typed TypeScript, reusable components, and PWAs."
    },
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true, level: "Expert" },
      { name: "TypeScript", highlight: true, level: "Advanced" },
      { name: "JavaScript (ES6+)", highlight: true, level: "Expert" },
      { name: "NextJS", highlight: false, level: "Advanced" },
      { name: "Tailwind CSS", highlight: true, level: "Expert" },
      { name: "PWA (Offline-first)", highlight: true, level: "Advanced" },
      { name: "Expo / React Native", highlight: false, level: "Proficient" },
      { name: "HTML5 / CSS3 (W3C)", highlight: false, level: "Expert" },
      { name: "Bootstrap", highlight: false, level: "Advanced" }
    ]
  },
  {
    id: "databases",
    title: {
      fr: "Bases de Données",
      en: "Databases & Storage"
    },
    description: {
      fr: "Modélisation relationnelle, optimisation des index et requêtes sur de gros volumes.",
      en: "Relational modeling, query optimization, indexing, and high-volume data isolation."
    },
    iconName: "Database",
    skills: [
      { name: "MySQL", highlight: true, level: "Expert" },
      { name: "PostgreSQL", highlight: true, level: "Advanced" },
      { name: "MongoDB", highlight: false, level: "Proficient" },
      { name: "IndexedDB (Browser)", highlight: false, level: "Advanced" },
      { name: "Doctrine ORM & Eloquent", highlight: true, level: "Expert" },
      { name: "Optimisation de requêtes", highlight: true, level: "Advanced" }
    ]
  },
  {
    id: "payments",
    title: {
      fr: "Paiements Afrique & Fintech",
      en: "African Payments & Fintech"
    },
    description: {
      fr: "Intégration directe des passerelles Mobile Money leaders pour le commerce ouest/centre-africain.",
      en: "Direct Mobile Money payment gateway integrations for central and west African e-commerce."
    },
    iconName: "CreditCard",
    skills: [
      { name: "MTN MoMo API", highlight: true, level: "Expert" },
      { name: "Orange Money API", highlight: true, level: "Expert" },
      { name: "Webhooks Asynchrones", highlight: true, level: "Expert" },
      { name: "Passerelles E-Commerce", highlight: false, level: "Advanced" }
    ]
  },
  {
    id: "tools-devops",
    title: {
      fr: "Outils, DevOps & CMS",
      en: "Tools, DevOps & CMS"
    },
    description: {
      fr: "Environnements de développement robustes, conteneurisation et gestion de contenu.",
      en: "Robust development pipelines, containerization, and enterprise content systems."
    },
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", highlight: true, level: "Expert" },
      { name: "Docker", highlight: true, level: "Advanced" },
      { name: "Linux / Bash", highlight: true, level: "Advanced" },
      { name: "CI / CD Pipelines", highlight: false, level: "Advanced" },
      { name: "Postman / OpenAPI", highlight: false, level: "Expert" },
      { name: "Sulu CMS", highlight: true, level: "Advanced" },
      { name: "WordPress / WooCommerce", highlight: false, level: "Advanced" },
      { name: "Optimisation SEO", highlight: false, level: "Advanced" }
    ]
  }
];

export const educationData: Education[] = [
  {
    year: "2025",
    degree: {
      fr: "Licence en Informatique",
      en: "Bachelor's Degree in Computer Science"
    },
    institution: "Université de Maroua",
    location: "Maroua, Cameroun",
    details: {
      fr: "Formation approfondie en algorithmique, génie logiciel, bases de données, réseaux et systèmes d'information.",
      en: "In-depth curriculum in algorithms, software engineering, databases, networking, and distributed systems."
    }
  },
  {
    year: "2018",
    degree: {
      fr: "Baccalauréat TI (Technologies de l'Information)",
      en: "High School Diploma in Information Technology (Bac TI)"
    },
    institution: "Lycée Classique et Moderne de Maroua",
    location: "Maroua, Cameroun",
    details: {
      fr: "Spécialisation précoce en informatique, logique algorithmique, programmation et mathématiques appliquées.",
      en: "Early specialization in computer sciences, algorithmic logic, computer systems, and applied mathematics."
    }
  }
];
