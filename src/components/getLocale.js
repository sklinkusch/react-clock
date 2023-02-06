import locales from "./locales.json"

const getPermLocale = (identifier) => {
  const lang = window.navigator.language.substring(0,2).toLowerCase()
  if(locales[identifier].hasOwnProperty(lang)) {
    return locales[identifier][lang]
  }
  return locales[identifier]["en"]
}

export { getPermLocale }