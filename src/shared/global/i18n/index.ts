import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';

export const languages = ['en', 'pl'] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage = 'en';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: defaultLanguage,
  });

export default i18n;
