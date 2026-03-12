import { SITE_CONTENT } from "@config";
import type { Language } from "./translations";

// Traductions pour les expériences professionnelles
const experienceTranslations = {
  fr: {
    experiences: SITE_CONTENT.experience.map((exp) => ({
      ...exp,
      company: exp.company,
      position: exp.position,
      summary: exp.summary,
    })),
    freelance: SITE_CONTENT.freelanceExperience.map((exp) => ({
      ...exp,
      company: exp.company,
      position: exp.position,
      summary: exp.summary,
    })),
  },
  en: {
    experiences: [
      {
        company: "Medical laboratory",
        position: "Data Analyst",
        startDate: "NOVEMBER 2024",
        endDate: "JUNE 2025",
        technologies: SITE_CONTENT.experience[0].technologies,
        summary: [
          "Data cleaning and processing.",
          "Analysis of medical results and patient data.",
          "Automation of weekly reporting with Power BI.",
          "Creation of dashboards and visualization of KPIs.",
          "Collaboration with biologists.",
        ],
      },
      {
        company: "Colas",
        position: "Data Analyst",
        startDate: "OCTOBER 2022",
        endDate: "OCTOBER 2024",
        technologies: SITE_CONTENT.experience[1].technologies,
        summary: [
          "Data analysis and processing.",
          "Report automation using VBA and macros.",
          "Creation of Power BI dashboards with key indicators.",
          "Presentations for management using PowerPoint.",
          "Development of a Power BI application.",
          "Creation and maintenance of Snowflake schemas.",
        ],
      },
      {
        company: "Technopolis",
        position: "Functional Analyst",
        startDate: "JUNE 2021",
        endDate: "OCTOBER 2021",
        technologies: SITE_CONTENT.experience[2].technologies,
        summary: [
          "Needs analysis and functional modeling.",
          "User interface design.",
          "Front-end application development.",
          "Optimization of parking flow management.",
        ],
      },
      {
        company: "Industrial cabling",
        position: "Web Consultant",
        startDate: "JUNE 2020",
        endDate: "OCTOBER 2020",
        technologies: SITE_CONTENT.experience[3].technologies,
        summary: [
          "Development of a cabling management application.",
          "Creation and management of a cabling database.",
          "Verification and monitoring of technical connections.",
        ],
      },
    ],
    freelance:
      SITE_CONTENT.freelanceExperience.length > 0
        ? SITE_CONTENT.freelanceExperience.map((exp) => ({
            ...exp,
            company: exp.company,
            position: exp.position,
            summary: exp.summary,
          }))
        : [],
  },
};

export function getExperienceTranslations(lang: Language) {
  return experienceTranslations[lang] || experienceTranslations.fr;
}
