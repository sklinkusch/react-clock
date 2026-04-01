export interface SingleLocale {
  de: string;
  en: string;
  fr: string;
}

export interface Locales {
  WorldTimeClock: SingleLocale;
  RealTimeZones: SingleLocale;
  IdealTimeZones: SingleLocale;
  MajorCities: SingleLocale;
  FilterCountries: SingleLocale;
}

export const locales: Locales = {
  WorldTimeClock: {
    de: 'Weltzeituhr',
    en: 'World Time Clock',
    fr: 'Horloge universelle',
  },
  RealTimeZones: {
    de: 'Reale Zeitzonen',
    en: 'Real Time zones',
    fr: 'Fuseaux horaires réels',
  },
  IdealTimeZones: {
    de: 'Ideale Zeitzonen',
    en: 'Ideal Time zones',
    fr: 'Fuseaux horaires idéals',
  },
  MajorCities: {
    de: 'Größte Städte',
    en: 'Major cities',
    fr: 'Villes importantes',
  },
  FilterCountries: {
    de: 'Länder filtern',
    en: 'Filter countries',
    fr: 'Choisissez un pays',
  },
};
