import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Amerikanische Jungferninseln (USA)",
      en: "American Virgin Islands (United States)"
    },
    zone: "Etc/GMT+4",
    flag: "VI",
    cities: cityList.filter(city => city.country === "VI")
  },
  {
    country: {
      de: "Anguilla (Vereinigtes Königreich)",
      en: "Anguilla (United Kingdom)"
    },
    zone: "Etc/GMT+4",
    flag: "AI",
    cities: cityList.filter(city => city.country === "AI")
  },
  {
    country: {
      de: "Antigua und Barbuda",
      en: "Antigua and Barbuda"
    },
    zone: "Etc/GMT+4",
    flag: "AG",
    cities: cityList.filter(city => city.country === "AG")
  },
  {
    country: {
      de: "Aruba (Niederlande)",
      en: "Aruba (Netherlands)"
    },
    zone: "Etc/GMT+5",
    flag: "AW",
    cities: cityList.filter(city => city.country === "AW")
  },
  {
    country: {
      de: "Bahamas",
      en: "Bahamas"
    },
    zone: "Etc/GMT+5",
    flag: "BS",
    cities: cityList.filter(city => city.country === "BS")
  },
  {
    country: {
      de: "Barbados",
      en: "Barbados"
    },
    zone: "Etc/GMT+4",
    flag: "BB",
    cities: cityList.filter(city => city.country === "BB")
  },
  {
    country: {
      de: "Bermuda (Vereinigtes Königreich)",
      en: "Bermuda (United Kingdom)"
    },
    zone: "Etc/GMT+4",
    flag: "BM",
    cities: cityList.filter(city => city.country === "BM")
  },
  {
    country: {
      de: "Britische Jungferninseln (Vereinigtes Königreich)",
      en: "British Virgin Islands (United Kingdom)"
    },
    zone: "Etc/GMT+4",
    flag: "VG",
    cities: cityList.filter(city => city.country === "VG")
  },
  {
    country: {
      de: "Cayman Islands (Vereinigtes Königreich)",
      en: "Cayman Islands (United Kingdom)"
    },
    zone: "Etc/GMT+5",
    flag: "KY",
    cities: cityList.filter(city => city.country === "KY")
  },
  {
    country: {
      de: "Kuba",
      en: "Cuba"
    },
    zone: "Etc/GMT+5",
    flag: "CU",
    cities: cityList.filter(city => city.country === "CU")
  },
  {
    country: {
      de: "Curaçao (Niederlande)",
      en: "Curaçao (Netherlands)"
    },
    zone: "Etc/GMT+5",
    flag: "CW",
    cities: cityList.filter(city => city.country === "CW")
  },
  {
    country: {
      de: "Dominica",
      en: "Dominica"
    },
    zone: "Etc/GMT+4",
    flag: "DM",
    cities: cityList.filter(city => city.country === "DM")
  },
  {
    country: {
      de: "Dominikanische Republik",
      en: "Dominican Republic"
    },
    zone: "Etc/GMT+5",
    flag: "DO",
    cities: cityList.filter(city => city.country === "DO")
  },
  {
    country: {
      de: "Guadeloupe (Frankreich)",
      en: "Guadeloupe (France)"
    },
    zone: "Etc/GMT+4",
    flag: "GP",
    cities: cityList.filter(city => city.country === "GP")
  },
  {
    country: {
      de: "Frankreich",
      en: "France"
    },
    subdiv: [
      {title: "Saint-Martin"}
    ],
    zone: "Etc/GMT+4",
    flag: "FR", // eigentlich MF
    cities: cityList.filter(city => city.country === "MF")
  },
  {
    country: {
      de: "Saint-Barthélemy (Frankreich)",
      en: "Saint-Barthélemy (France)"
    },
    zone: "Etc/GMT+4",
    flag: "BL",
    cities: cityList.filter(city => city.country === "BL")
  },
  {
    country: {
      de: "Saint-Pierre und Miquelon (Frankreich)",
      en: "Saint-Pierre and Miquelon (France)"
    },
    zone: "Etc/GMT+4",
    flag: "PM",
    cities: cityList.filter(city => city.country === "PM")
  },
  {
    country: {
      de: "Grenada",
      en: "Grenada"
    },
    zone: "Etc/GMT+4",
    flag: "GD",
    cities: cityList.filter(city => city.country === "GD")
  },
  {
    country: {
      de: "Haiti",
      en: "Haiti"
    },
    zone: "Etc/GMT+5",
    flag: "HT",
    cities: cityList.filter(city => city.country === "HT")
  },
  {
    country: {
      de: "Jamaika",
      en: "Jamaica"
    },
    zone: "Etc/GMT+5",
    flag: "JM",
    cities: cityList.filter(city => city.country === "JM")
  },
  {
    country: {
      de: "Martinique (Frankreich)",
      en: "Martinique (France)"
    },
    zone: "Etc/GMT+4",
    flag: "MQ",
    cities: cityList.filter(city => city.country === "MQ")
  },
  {
    country: {
      de: "Montserrat (Vereinigtes Königreich)",
      en: "Montserrat (United Kingdom)"
    },
    zone: "Etc/GMT+4",
    flag: "MS",
    cities: cityList.filter(city => city.country === "MS")
  },
  {
    country: {
      de: "Bonaire, Saba, Sint Eustatius (Niederlande)",
      en: "Bonaire, Saba, Sint Eustatius (Netherlands)"
    },
    subdiv: [
      {title: "Bonaire"}, 
    ],
    zone: "Etc/GMT+5",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && city.adminCode === "BO")
  },
  {
    country: {
      de: "Bonaire, Saba, Sint Eustatius (Niederlande)",
      en: "Bonaire, Saba, Sint Eustatius (Netherlands)"
    },
    subdiv: [
      {title: "Saba"}, 
      {title: "Sint Eustatius"}
    ],
    zone: "Etc/GMT+4",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && ["SB", "SE"].includes(city.adminCode))
  },
  {
    country: {
      de: "Puerto Rico (USA)",
      en: "Puerto Rico (United States)"
    },
    zone: "Etc/GMT+4",
    flag: "PR",
    cities: cityList.filter(city => city.country === "PR")
  },
  {
    country: {
      de: "St. Kitts und Nevis",
      en: "Saint Kitts and Nevis"
    },
    zone: "Etc/GMT+4",
    flag: "KN",
    cities: cityList.filter(city => city.country === "KN")
  },
  {
    country: {
      de: "St. Lucia",
      en: "Saint Lucia"
    },
    zone: "Etc/GMT+4",
    flag: "LC",
    cities: cityList.filter(city => city.country === "LC")
  },
  {
    country: {
      de: "St. Vincent und die Grenadinen",
      en: "Saint Vincent and the Grenadines"
    },
    zone: "Etc/GMT+4",
    flag: "VC",
    cities: cityList.filter(city => city.country === "VC")
  },
  {
    country: {
      de: "Sint Maarten (Niederlande)",
      en: "Sint Maarten (Netherlands)"
    },
    zone: "Etc/GMT+4",
    flag: "SX",
    cities: cityList.filter(city => city.country === "SX")
  },
  {
    country: {
      de: "Trinidad und Tobago",
      en: "Trinidad and Tobago"
    },
    zone: "Etc/GMT+4",
    flag: "TT",
    cities: cityList.filter(city => city.country === "TT")
  },
  {
    country: {
      de: "Turks- und Caicosinseln (Vereinigtes Königreich)",
      en: "Turks and Caicos Islands (United Kingdom)"
    },
    zone: "Etc/GMT+5",
    flag: "TC",
    cities: cityList.filter(city => city.country === "TC")
  },
]

export default countryList