# Système de Traduction i18n

Ce projet utilise un système de traduction personnalisé pour gérer le multilinguisme (FR/EN).

## 📁 Structure

```
src/
├── i18n/
│   ├── translations.ts   # Toutes les traductions
│   └── utils.ts          # Utilitaires de langue
└── components/
    └── TranslationWrapper.astro  # Gère la mise à jour dynamique
```

## 🚀 Comment ajouter des traductions

### 1. Ajouter les traductions dans `translations.ts`

```typescript
export const translations = {
  fr: {
    hero: {
      name: "Abdelhakim Smyaj",
      specialty: "Développeur Web Full-Stack",
      // ... autres traductions
    },
  },
  en: {
    hero: {
      name: "Abdelhakim Smyaj",
      specialty: "Full-Stack Web Developer",
      // ... autres traductions
    },
  },
};
```

### 2. Utiliser les traductions dans un composant Astro

```astro
---
import { getTranslations } from "@/i18n/translations";

const t = getTranslations("fr"); // Langue par défaut
---

<!-- Pour le texte simple -->
<h1 data-i18n="hero.name">
  {t.hero.name}
</h1>

<!-- Pour le HTML formaté -->
<p data-i18n-html="hero.summary">
  {t.hero.summary}
</p>

<!-- Pour les boutons et liens -->
<button data-i18n="hero.contactButton">
  {t.hero.contactButton}
</button>
```

## 🔑 Attributs data-i18n

### `data-i18n`

Pour le texte simple qui sera remplacé par `textContent`

```html
<span data-i18n="hero.specialty">Texte par défaut</span>
```

### `data-i18n-html`

Pour le HTML qui sera remplacé par `innerHTML` (pour les retours à la ligne, etc.)

```html
<p data-i18n-html="hero.summary">Texte par défaut</p>
```

## 📝 Exemple complet

### Ajouter une nouvelle section

1. **Ajoutez les traductions** dans `src/i18n/translations.ts` :

```typescript
export const translations = {
  fr: {
    about: {
      title: "À propos de moi",
      description: "Je suis un développeur...",
    },
  },
  en: {
    about: {
      title: "About me",
      description: "I am a developer...",
    },
  },
};
```

2. **Utilisez-les dans votre composant** :

```astro
---
import { getTranslations } from "@/i18n/translations";

const t = getTranslations("fr");
---

<section>
  <h2 data-i18n="about.title">{t.about.title}</h2>
  <p data-i18n="about.description">{t.about.description}</p>
</section>
```

## ⚡ Comment ça fonctionne

1. Le composant `TranslationWrapper` écoute l'événement `languageChanged`
2. Quand l'utilisateur change de langue via `LanguageSwitcher`, un événement est émis
3. `TranslationWrapper` met à jour tous les éléments avec `data-i18n` ou `data-i18n-html`
4. Le contenu de la page change instantanément sans rechargement

## 💡 Astuces

- La langue est sauvegardée dans `localStorage`
- Le texte initial (côté serveur) est en français par défaut
- Les mises à jour se font côté client pour une transition fluide
- Utilisez des clés descriptives : `hero.contactButton` plutôt que `btn1`

## 🔄 Sections déjà traduites

- ✅ Hero (nom, spécialité, résumé, boutons)
- ✅ Boutons CV (voir/télécharger + options de langue)
- ⏳ Navigation (à configurer selon vos besoins)
- ⏳ Experience (à ajouter)
- ⏳ About (à ajouter)
- ⏳ Footer (à ajouter)
