export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
  availableLanguages: Language[];
  cvLinks: CVLinks;
}

export interface Language {
  code: string;
  label: string;
}

export interface CVLinks {
  fr: string;
  en: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  freelanceExperience: ExperienceProps[];
  // projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  technologies?: string[];
}

export interface SectionProps {
  sectionName: string;
  href: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
