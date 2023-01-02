import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Amerikanische Jungferninseln (USA)",
      en: "American Virgin Islands (United States)",
      fr: "Îles Vierges des États-Unis (États-Unis)"
    },
    zone: "America/St_Thomas",
    flag: "VI",
    cities: cityList.filter(city => city.country === "VI" && city.tz === "America/St_Thomas")
  },
  {
    country: {
      de: "Anguilla (Vereinigtes Königreich)",
      en: "Anguilla (United Kingdom)",
      fr: "Anguilla (Royaume-Uni)"
    },
    zone: "America/Anguilla",
    flag: "AI",
    cities: cityList.filter(city => city.country === "AI" && city.tz === "America/Anguilla")
  },
  {
    country: {
      de: "Antigua und Barbuda",
      en: "Antigua and Barbuda",
      fr: "Antigua-et-Barbuda"
    },
    zone: "America/Antigua",
    flag: "AG",
    cities: cityList.filter(city => city.country === "AG" && city.tz === "America/Antigua")
  },
  {
    country: {
      de: "Aruba (Niederlande)",
      en: "Aruba (Netherlands)",
      fr: "Aruba (Pays-Bas)"
    },
    zone: "America/Aruba",
    flag: "AW",
    cities: cityList.filter(city => city.country === "AW" && city.tz === "America/Aruba")
  },
  {
    country: {
      de: "Bahamas",
      en: "Bahamas",
      fr: "Bahamas"
    },
    zone: "America/Nassau",
    flag: "BS",
    cities: cityList.filter(city => city.country === "BS" && city.tz === "America/Nassau")
  },
  {
    country: {
      de: "Barbados",
      en: "Barbados",
      fr: "Barbade"
    },
    zone: "America/Barbados",
    flag: "BB",
    cities: cityList.filter(city => city.country === "BB" && city.tz === "America/Barbados")
  },
  {
    country: {
      de: "Bermuda (Vereinigtes Königreich)",
      en: "Bermuda (United Kingdom)",
      fr: "Bermudes (Royaume-Uni)"
    },
    zone: "Atlantic/Bermuda",
    flag: "BM",
    cities: cityList.filter(city => city.country === "BM" && city.tz === "America/Bermuda")
  },
  {
    country: {
      de: "Britische Jungferninseln (Vereinigtes Königreich)",
      en: "British Virgin Islands (United Kingdom)",
      fr: "Îles Vierges britanniques (Royaume-Uni)"
    },
    zone: "America/Tortola",
    flag: "VG",
    cities: cityList.filter(city => city.country === "VG" && city.tz === "America/Tortola")
  },
  {
    country: {
      de: "Cayman Islands (Vereinigtes Königreich)",
      en: "Cayman Islands (United Kingdom)",
      fr: "Îles Caïmans (Royaume-Uni)"
    },
    zone: "America/Cayman",
    flag: "KY",
    cities: cityList.filter(city => city.country === "KY" && city.tz === "America/Cayman")
  },
  {
    country: {
      de: "Kuba",
      en: "Cuba",
      fr: "Cuba"
    },
    zone: "America/Havana",
    flag: "CU",
    cities: cityList.filter(city => city.country === "CU" && city.tz === "America/Havana")
  },
  {
    country: {
      de: "Curaçao (Niederlande)",
      en: "Curaçao (Netherlands)",
      fr: "Curaçao (Pays-Bas)"
    },
    zone: "America/Curacao",
    flag: "CW",
    cities: cityList.filter(city => city.country === "CW" && city.tz === "America/Curacao")
  },
  {
    country: {
      de: "Dominica",
      en: "Dominica",
      fr: "Dominique"
    },
    zone: "America/Dominica",
    flag: "DM",
    cities: cityList.filter(city => city.country === "DM" && city.tz === "America/Dominica")
  },
  {
    country: {
      de: "Dominikanische Republik",
      en: "Dominican Republic",
      fr: "République dominicaine"
    },
    zone: "America/Santo_Domingo",
    flag: "DO",
    cities: cityList.filter(city => city.country === "DO" && city.tz === "America/Santo_Domingo")
  },
  {
    country: {
      de: "Guadeloupe (Frankreich)",
      en: "Guadeloupe (France)",
      fr: "Guadeloupe (France)"
    },
    zone: "America/Guadeloupe",
    flag: "GP",
    cities: cityList.filter(city => city.country === "GP" && city.tz === "America/Guadeloupe")
  },
  {
    country: {
      de: "Frankreich",
      en: "France",
      fr: "France"
    },
    subdiv: [
      {
        title: {
          de: "Saint-Martin",
          en: "Saint-Martin",
          fr: "Saint-Martin"
        }
      }
    ],
    zone: "America/Marigot",
    flag: "FR", // eigentlich MF 
    cities: cityList.filter(city => city.country === "MF" && city.tz === "America/Marigot")
  },
  {
    country: {
      de: "Saint-Barthélemy (Frankreich)",
      en: "Saint-Barthélemy (France)",
      fr: "Saint-Barthélemy (France)"
    },
    zone: "America/St_Barthelemy",
    flag: "BL",
    cities: cityList.filter(city => city.country === "BL" && city.tz === "America/St_Barthelemy")
  },
  {
    country: {
      de: "Saint-Pierre und Miquelon (Frankreich)",
      en: "Saint-Pierre and Miquelon (France)",
      fr: "Saint-Pierre-et-Miquelon (France)"
    },
    zone: "America/Miquelon",
    flag: "PM",
    cities: cityList.filter(city => city.country === "PM" && city.tz === "America/Miquelon")
  },
  {
    country: {
      de: "Grenada",
      en: "Grenada",
      fr: "Grenade"
    },
    zone: "America/Grenada",
    flag: "GD",
    cities: cityList.filter(city => city.country === "GD" && city.tz === "America/Grenada")
  },
  {
    country: {
      de: "Haiti",
      en: "Haiti",
      fr: "Haïti"
    },
    zone: "America/Port-au-Prince",
    flag: "HT",
    cities: cityList.filter(city => city.country === "HT" && city.tz === "America/Port-au-Prince")
  },
  {
    country: {
      de: "Jamaika",
      en: "Jamaica",
      fr: "Jamaïque"
    },
    zone: "America/Jamaica",
    flag: "JM",
    cities: cityList.filter(city => city.country === "JM" && city.tz === "America/Jamaica")
  },
  {
    country: {
      de: "Martinique (Frankreich)",
      en: "Martinique (France)",
      fr: "Martinique (France)"
    },
    zone: "America/Martinique",
    flag: "MQ",
    cities: cityList.filter(city => city.country === "MQ" && city.tz === "America/Martinique")
  },
  {
    country: {
      de: "Montserrat (Vereinigtes Königreich)",
      en: "Montserrat (United Kingdom)",
      fr: "Montserrat (Royaume-Uni)"
    },
    zone: "America/Montserrat",
    flag: "MS",
    cities: cityList.filter(city => city.country === "MS" && city.tz === "America/Montserrat")
  },
  {
    country: {
      de: "Bonaire, Saba, Sint Eustatius (Niederlande)",
      en: "Bonaire, Saba, Sint Eustatius (Netherlands)",
      fr: "Bonaire, Saba, Saint-Eustache (Pays-Bas)"
    },
    zone: "America/Kralendijk",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && city.tz === "America/Kralendijk")
  },
  {
    country: {
      de: "Puerto Rico (USA)",
      en: "Puerto Rico (United States)",
      fr: "Porto Rico (États-Unis)"
    },
    zone: "America/Puerto_Rico",
    flag: "PR",
    cities: cityList.filter(city => city.country === "PR" && city.tz === "America/Puerto_Rico")
  },
  {
    country: {
      de: "St. Kitts und Nevis",
      en: "Saint Kitts and Nevis",
      fr: "Saint-Christophe-et-Niévès"
    },
    zone: "America/St_Kitts",
    flag: "KN",
    cities: cityList.filter(city => city.country === "KN" && city.tz === "America/St_Kitts")
  },
  {
    country: {
      de: "St. Lucia",
      en: "Saint Lucia",
      fr: "Sainte-Lucie"
    },
    zone: "America/St_Lucia",
    flag: "LC",
    cities: cityList.filter(city => city.country === "LC" && city.tz === "America/St_Lucia")
  },
  {
    country: {
      de: "St. Vincent und die Grenadinen",
      en: "Saint Vincent and the Grenadines",
      fr: "Saint-Vincent-et-les-Grenadines"
    },
    zone: "America/St_Vincent",
    flag: "VC",
    cities: cityList.filter(city => city.country === "VC" && city.tz === "America/St_Vincent")
  },
  {
    country: {
      de: "Sint Maarten (Niederlande)",
      en: "Sint Maarten (Netherlands)",
      fr: "Saint-Martin (Pays-Bas)"
    },
    zone: "America/Lower_Princes",
    flag: "SX",
    cities: cityList.filter(city => city.country === "SX" && city.tz === "America/Lower_Princes")
  },
  {
    country: {
      de: "Trinidad und Tobago",
      en: "Trinidad and Tobago",
      fr: "Trinité-et-Tobago"
    },
    zone: "America/Port_of_Spain",
    flag: "TT",
    cities: cityList.filter(city => city.country === "TT" && city.tz === "America/Port_of_Spain")
  },
  {
    country: {
      de: "Turks- und Caicosinseln (Vereinigtes Königreich)",
      en: "Turks and Caicos Islands (United Kingdom)",
      fr: "Îles Turques-et-Caïques (Royaume-Uni)"
    },
    zone: "America/Grand_Turk",
    flag: "TC",
    cities: cityList.filter(city => city.country === "TC" && city.tz === "America/Grand_Turk")
  },
]

export default countryList