import React, { createContext, useContext, useMemo, useState } from "react";

export type Locale = "it" | "en";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Simple key-based translator (fallback: key). */
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const dictionaries: Record<Locale, Record<string, string>> = {
  it: {
    "topbar.title": "Il centro di supporto di Cold Sharing",
    "topbar.subtitle": "Guide, FAQ e supporto per Clienti e Fornitori",
    "topbar.area.cliente": "Cliente",
    "topbar.area.fornitore": "Fornitore",
    "topbar.cta": "Accedi in Cold Sharing",
  },
  // English dictionary intentionally minimal for this release.
  // Add keys here when you will enable EN.
  en: {
    "topbar.title": "Cold Sharing Support Center",
    "topbar.subtitle": "Guides, FAQ and support for Customers and Providers",
    "topbar.area.cliente": "Customer",
    "topbar.area.fornitore": "Provider",
    "topbar.cta": "Go to Cold Sharing",
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("it");

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale] ?? {};
    return {
      locale,
      setLocale,
      t: (key: string) => dict[key] ?? key,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
