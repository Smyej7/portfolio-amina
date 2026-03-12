// Utilitaire pour gérer la langue dans le navigateur
export function getCurrentLanguage(): "fr" | "en" {
  if (typeof window === "undefined") return "fr";
  return (localStorage.getItem("language") as "fr" | "en") || "fr";
}

export function setCurrentLanguage(lang: "fr" | "en") {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", lang);
  window.dispatchEvent(
    new CustomEvent("languageChanged", { detail: { lang } }),
  );
}
