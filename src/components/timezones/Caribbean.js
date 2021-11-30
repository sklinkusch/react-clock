import cityList from "./cityList"

export default [
  {
    country: "American Virgin Islands (United States)",
    zone: "America/St_Thomas",
    flag: "VI",
    cities: cityList.filter(city => city.country === "VI" && city.tz === "America/St_Thomas")
  },
  {
    country: "Anguilla (United Kingdom)",
    zone: "America/Anguilla",
    flag: "AI",
    cities: cityList.filter(city => city.country === "AI" && city.tz === "America/Anguilla")
  },
  {
    country: "Antigua and Barbuda",
    zone: "America/Antigua",
    flag: "AG",
    cities: cityList.filter(city => city.country === "AG" && city.tz === "America/Antigua")
  },
  {
    country: "Aruba (Netherlands)",
    zone: "America/Aruba",
    flag: "AW",
    cities: cityList.filter(city => city.country === "AW" && city.tz === "America/Aruba")
  },
  {
    country: "Bahamas",
    zone: "America/Nassau",
    flag: "BS",
    cities: cityList.filter(city => city.country === "BS" && city.tz === "America/Nassau")
  },
  {
    country: "Barbados",
    zone: "America/Barbados",
    flag: "BB",
    cities: cityList.filter(city => city.country === "BB" && city.tz === "America/Barbados")
  },
  {
    country: "Bermuda (United Kingdom)",
    zone: "Atlantic/Bermuda",
    flag: "BM",
    cities: cityList.filter(city => city.country === "BM" && city.tz === "America/Bermuda")
  },
  {
    country: "British Virgin Islands (United Kingdom)",
    zone: "America/Tortola",
    flag: "VG",
    cities: cityList.filter(city => city.country === "VG" && city.tz === "America/Tortola")
  },
  {
    country: "Cayman Islands (United Kingdom)",
    zone: "America/Cayman",
    flag: "KY",
    cities: cityList.filter(city => city.country === "KY" && city.tz === "America/Cayman")
  },
  {
    country: "Cuba",
    zone: "America/Havana",
    flag: "CU",
    cities: cityList.filter(city => city.country === "CU" && city.tz === "America/Havana")
  },
  {
    country: "Curaçao (Netherlands)",
    zone: "America/Curacao",
    flag: "CW",
    cities: cityList.filter(city => city.country === "CW" && city.tz === "America/Curacao")
  },
  {
    country: "Dominica",
    zone: "America/Dominica",
    flag: "DM",
    cities: cityList.filter(city => city.country === "DM" && city.tz === "America/Dominica")
  },
  {
    country: "Dominican Republic",
    zone: "America/Santo_Domingo",
    flag: "DO",
    cities: cityList.filter(city => city.country === "DO" && city.tz === "America/Santo_Domingo")
  },
  {
    country: "France",
    subdiv: [
      {title: "Guadeloupe"}
    ],
    zone: "America/Guadeloupe",
    flag: "FR", // eigentlich GP
    cities: cityList.filter(city => city.country === "GP" && city.tz === "America/Guadeloupe")
  },
  {
    country: "France",
    subdiv: [
      {title: "Saint-Martin"}
    ],
    zone: "America/Marigot",
    flag: "FR", // eigentlich MF
    cities: cityList.filter(city => city.country === "MF" && city.tz === "America/Marigot")
  },
  {
    country: "Saint-Barthélemy (France)",
    zone: "America/St_Barthelemy",
    flag: "BL",
    cities: cityList.filter(city => city.country === "BL" && city.tz === "America/St_Barthelemy")
  },
  {
    country: "France",
    subdiv: [
      {title: "Saint-Pierre and Miquelon"}
    ],
    zone: "America/Miquelon",
    flag: "FR", // eigentlich DF
    cities: cityList.filter(city => city.country === "DF" && city.tz === "America/Miquelon")
  },
  {
    country: "Grenada",
    zone: "America/Grenada",
    flag: "GD",
    cities: cityList.filter(city => city.country === "GD" && city.tz === "America/Grenada")
  },
  {
    country: "Haiti",
    zone: "America/Port-au-Prince",
    flag: "HT",
    cities: cityList.filter(city => city.country === "HT" && city.tz === "America/Port-au-Prince")
  },
  {
    country: "Jamaica",
    zone: "America/Jamaica",
    flag: "JM",
    cities: cityList.filter(city => city.country === "JM" && city.tz === "America/Jamaica")
  },
  {
    country: "Martinique (France)",
    zone: "America/Martinique",
    flag: "MQ",
    cities: cityList.filter(city => city.country === "MQ" && city.tz === "America/Martinique")
  },
  {
    country: "Montserrat (United Kingdom)",
    zone: "America/Montserrat",
    flag: "MS",
    cities: cityList.filter(city => city.country === "MS" && city.tz === "America/Montserrat")
  },
  {
    country: "Bonaire, Saba, Sint Eustatius",
    zone: "America/Kralendijk",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && city.tz === "America/Kralendijk")
  },
  {
    country: "Puerto Rico (United States)",
    zone: "America/Puerto_Rico",
    flag: "PR",
    cities: cityList.filter(city => city.country === "PR" && city.tz === "America/Puerto_Rico")
  },
  {
    country: "Saint Kitts and Nevis",
    zone: "America/St_Kitts",
    flag: "KN",
    cities: cityList.filter(city => city.country === "KN" && city.tz === "America/St_Kitts")
  },
  {
    country: "Saint Lucia",
    zone: "America/St_Lucia",
    flag: "LC",
    cities: cityList.filter(city => city.country === "LC" && city.tz === "America/St_Lucia")
  },
  {
    country: "Saint Vincent and the Grenadines",
    zone: "America/St_Vincent",
    flag: "VC",
    cities: cityList.filter(city => city.country === "VC" && city.tz === "America/St_Vincent")
  },
  {
    country: "Sint Maarten (Netherlands)",
    zone: "America/Lower_Princes",
    flag: "SX",
    cities: cityList.filter(city => city.country === "SX" && city.tz === "America/Lower_Princes")
  },
  {
    country: "Trinidad and Tobago",
    zone: "America/Port_of_Spain",
    flag: "TT",
    cities: cityList.filter(city => city.country === "TT" && city.tz === "America/Port_of_Spain")
  },
  {
    country: "Turks and Caicos Islands (United Kingdom)",
    zone: "America/Grand_Turk",
    flag: "TC",
    cities: cityList.filter(city => city.country === "TC" && city.tz === "America/Grand_Turk")
  },
]
