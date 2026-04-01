import { locales, type Locales, type SingleLocale } from '@assets/locales';

type Identifier = keyof Locales;
type Lang = keyof SingleLocale;

const normalizeLangs = (lang: string, allowedLangs: Lang[]): Lang => {
  return allowedLangs.includes(lang as Lang) ? (lang as Lang) : 'en';
};

const getLocale = (identifier: Identifier) => {
  const lang = window.navigator.language.substring(0, 2).toLowerCase();
  const normLang = normalizeLangs(lang, ['de', 'en', 'fr']);
  return locales[identifier][normLang];
};

export { getLocale };
