"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang, Translations } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "NL",
  setLang: () => {},
  t: translations.NL,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("NL");

  useEffect(() => {
    const saved = localStorage.getItem("gradient-lang") as Lang | null;
    if (saved && ["EN", "NL", "FR"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gradient-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
