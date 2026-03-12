import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Amina Berrada — Data Analyst",
  author: "Amina Berrada",
  description: `
    Professionnelle Data spécialisée dans l’analyse, la modélisation et la valorisation des données. 📊

    J’interviens sur l’ensemble du cycle de vie de la donnée, de la collecte à la visualisation, afin de transformer les données en leviers de performance et d’aide à la décision. ✅

    Forte expertise en Power BI, SQL, Excel et Python, avec une approche orientée qualité des données, optimisation des processus et pilotage par les indicateurs. ✨
  `,
  lang: "fr",
  siteLogo: `${import.meta.env.BASE_URL}amina-small-no-blur.png`,
  availableLanguages: [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
  ],
  cvLinks: {
    fr: `${import.meta.env.BASE_URL}Amina-Berrada-CV-fr.pdf`,
    en: `${import.meta.env.BASE_URL}Amina-Berrada-CV-en.pdf`,
  },
  navLinks: [
    { text: "Expérience Pro", href: "#experience" },
    // { text: "Compétences", href: "#skills" },
    // { text: "Formation", href: "#education" },
    { text: "À propos", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/amina-berrada/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Amina Berrada",
    specialty: "Data Analyst",
    summary: `
      Professionnelle Data spécialisée dans l’analyse, la modélisation et la valorisation des données. 📊\n
      J’interviens sur l’ensemble du cycle de vie de la donnée, de la collecte à la visualisation, afin de transformer les données en leviers de performance et d’aide à la décision stratégique. ✅\n
      Forte expertise en Power BI, SQL, Excel et Python, avec une approche orientée qualité des données, optimisation des processus et pilotage par les indicateurs. ✨
    `,
    email: "berradaamina08@gmail.com",
  },

  experience: [
    {
      company: "Laboratoire médical",
      position: "Data Analyst",
      startDate: "NOVEMBRE 2024",
      endDate: "JUIN 2025",
      technologies: ["Power BI", "Excel", "Python", "SQL", "SharePoint", "DBT"],
      summary: [
        "Nettoyage et traitement des données.",
        "Analyse des résultats médicaux et données patients.",
        "Automatisation du reporting hebdomadaire avec Power BI.",
        "Création de dashboards et visualisation des KPIs.",
        "Collaboration avec les biologistes.",
      ],
    },
    {
      company: "Colas",
      position: "Data Analyst",
      startDate: "OCTOBRE 2022",
      endDate: "OCTOBRE 2024",
      technologies: [
        "Power BI",
        "Excel",
        "VBA",
        "SQL",
        "Figma",
        "Snowflake",
        "DBT",
      ],
      summary: [
        "Analyse et traitement de données.",
        "Automatisation des rapports via VBA et macros.",
        "Création de dashboards Power BI avec indicateurs clés.",
        "Présentations pour les directions sur PowerPoint.",
        "Création d’une application sur Power BI.",
        "Création et mise à jour des schémas Snowflake.",
      ],
    },
    {
      company: "Technopolis",
      position: "Analyste fonctionnelle",
      startDate: "JUIN 2021",
      endDate: "OCTOBRE 2021",
      technologies: ["UML", "HTML5", "CSS", "Figma"],
      summary: [
        "Analyse des besoins et modélisation fonctionnelle.",
        "Conception de l’interface utilisateur.",
        "Développement front-end de l’application.",
        "Optimisation de la gestion des flux de stationnement.",
      ],
    },
    {
      company: "Câblages industriel",
      position: "Consultante Web",
      startDate: "JUIN 2020",
      endDate: "OCTOBRE 2020",
      technologies: ["Microsoft Access", "MySQL", "UML"],
      summary: [
        "Développement d’une application de gestion de câblage.",
        "Création et gestion d’une base de données câblage.",
        "Vérification et suivi des connexions techniques.",
      ],
    },
  ],

  freelanceExperience: [],

  about: {
    description: `
    Professionnelle Data spécialisée dans l’analyse, la modélisation et la valorisation des données. 📊

    J’interviens sur l’ensemble du cycle de vie de la donnée, de la collecte à la visualisation, afin de transformer les données en leviers de performance et d’aide à la décision stratégique. ✅

    Forte expertise en Power BI, SQL, Excel et Python, avec une approche orientée qualité des données, optimisation des processus et pilotage par les indicateurs. ✨
  `,
    image: `${import.meta.env.BASE_URL}amina-big.jpg`,
  },

  // Si ton type SiteContent contient d'autres sections (skills/education/etc.),
  // ajoute-les ici avec les mêmes clés attendues par ton projet.
};

// #5755ff
