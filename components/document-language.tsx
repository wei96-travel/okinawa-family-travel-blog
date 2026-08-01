"use client";

import { useEffect } from "react";

export function DocumentLanguage({ language }: { language: string }) {
  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = language;

    return () => {
      document.documentElement.lang = previousLanguage;
    };
  }, [language]);

  return null;
}
