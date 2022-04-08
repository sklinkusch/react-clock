import locales from "./locales.json"

const getPermLocale = (identifier) => {
  const lang = window.navigator.language
  if(locales[identifier].hasOwnProperty(lang)) {
    return locales[identifier][lang]
  }
  return locales[identifier]["en"]
}

export { getPermLocale }