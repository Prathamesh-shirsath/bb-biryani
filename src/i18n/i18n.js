import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import mr from "./locales/mr.json";

const getSavedLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem("bb-language");

    if (savedLanguage === "mr" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "en";
  } catch {
    return "en";
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    mr: {
      translation: mr,
    },
  },

  lng: getSavedLanguage(),

  fallbackLng: "en",

  supportedLngs: ["en", "mr"],

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;