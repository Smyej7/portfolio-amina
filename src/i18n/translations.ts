export const translations = {
  fr: {
    // Navigation
    nav: {
      experience: "Expérience Pro",
      // freelanceProjects: "Projets Freelance",
      about: "À propos",
    },
    // Theme
    theme: {
      light: "Thème clair",
      dark: "Thème sombre",
      toggle: "Changer de thème",
    },
    // Hero
    hero: {
      name: "Amina Berrada",
      specialty: "Data Analyst",
      summary: `Professionnelle Data spécialisée dans l’analyse, la modélisation et la valorisation des données.
J’interviens sur l’ensemble du cycle de vie de la donnée, de la collecte à la visualisation, afin de transformer les données en leviers de performance et d’aide à la décision stratégique.
Forte expertise en Power BI, SQL, Excel et Python, avec une approche orientée qualité des données, optimisation des processus et pilotage par les indicateurs.`,
      contactButton: "Contactez-moi",
      viewCV: "Voir le CV",
      downloadCV: "Télécharger",
      cvVersionFr: "Version Française",
      cvVersionEn: "English Version",
    },
    // Sections
    sections: {
      experience: "Expérience Professionnelle",
      // freelance: "Projets Freelance",
      about: "À propos de moi",
    },
    // Experience
    experience: {
      internship: "Stage de fin d'études",
      yearProject: "Projet annuel",
      internshipLicense: "Stage de fin de licence",
      position: "Développeur Full-Stack",
      ongoing: "EN COURS",
    },
    // About
    about: {
      description: `Professionnelle Data spécialisée dans l’analyse, la modélisation et la valorisation des données.
J’interviens sur l’ensemble du cycle de vie de la donnée, de la collecte à la visualisation, afin de transformer les données en leviers de performance et d’aide à la décision stratégique.
Forte expertise en Power BI, SQL, Excel et Python, avec une approche orientée qualité des données, optimisation des processus et pilotage par les indicateurs.`,
    },
    // Footer
    footer: {
      rightsReserved: "Tous droits réservés",
    },
  },
  en: {
    // Navigation
    nav: {
      experience: "Professional Experience",
      freelanceProjects: "Freelance Projects",
      about: "About",
    },
    // Theme
    theme: {
      light: "Light theme",
      dark: "Dark theme",
      toggle: "Toggle theme",
    },
    // Hero
    hero: {
      name: "Amina Berrada",
      specialty: "Data Analyst",
      summary: `Data professional specializing in data analysis, modeling, and value creation.
I work across the entire data lifecycle, from collection to visualization, to
transform data into performance drivers and strategic decision-making tools.
Strong expertise in Power BI, SQL, Excel, and Python, with a focus on data quality, process optimization, and KPI-driven management.`,
      contactButton: "Contact me",
      viewCV: "View CV",
      downloadCV: "Download",
      cvVersionFr: "French Version",
      cvVersionEn: "English Version",
    },
    // Sections
    sections: {
      experience: "Professional Experience",
      freelance: "Freelance Projects",
      about: "About me",
    },
    // Experience
    experience: {
      internship: "End of studies internship",
      yearProject: "Annual project",
      internshipLicense: "Bachelor's internship",
      position: "Full-Stack Developer",
      ongoing: "ONGOING",
    },
    // About
    about: {
      description: `Data professional specializing in data analysis, modeling, and value creation.

I work across the entire data lifecycle, from collection to visualization, to
transform data into performance drivers and strategic decision-making tools.
Strong expertise in Power BI, SQL, Excel, and Python, with a focus on data quality, process optimization, and KPI-driven management.`,
    },
    // Footer
    footer: {
      rightsReserved: "All rights reserved",
    },
  },
};

export type Language = "fr" | "en";

export function getTranslations(lang: Language) {
  return translations[lang] || translations.fr;
}
