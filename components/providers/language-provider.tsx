"use client";

import * as React from "react";

import {
  SUPPORTED_LANGUAGES,
  type LanguageKey,
  type Translations,
  getDictionary
} from "@/lib/i18n";

type LanguageContextValue = {
  lang: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  dictionary: Translations;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "bible-app-language";

export function LanguageProvider({ children }: React.PropsWithChildren) {
  const [lang, setLang] = React.useState<LanguageKey>("en");

  React.useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (window.localStorage.getItem(STORAGE_KEY) as LanguageKey | null)
        : null;
    if (saved && SUPPORTED_LANGUAGES.some(({ key }) => key === saved)) {
      setLang(saved);
      if (typeof document !== "undefined") {
        document.documentElement.lang = saved;
      }
    }
  }, []);

  const setLanguage = React.useCallback((value: LanguageKey) => {
    setLang(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = value;
    }
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLanguage,
      dictionary: getDictionary(lang)
    }),
    [lang, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
