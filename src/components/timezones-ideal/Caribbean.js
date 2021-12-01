import cityList from "./cityList"

export default [
  {
    country: "American Virgin Islands (United States)",
    zone: "Etc/GMT+4",
    flag: "VI",
    cities: cityList.filter(city => city.country === "VI")
  },
  {
    country: "Anguilla (United Kingdom)",
    zone: "Etc/GMT+4",
    flag: "AI",
    cities: cityList.filter(city => city.country === "AI")
  },
  {
    country: "Antigua and Barbuda",
    zone: "Etc/GMT+4",
    flag: "AG",
    cities: cityList.filter(city => city.country === "AG")
  },
  {
    country: "Aruba (Netherlands)",
    zone: "Etc/GMT+5",
    flag: "AW",
    cities: cityList.filter(city => city.country === "AW")
  },
  {
    country: "Bahamas",
    zone: "Etc/GMT+5",
    flag: "BS",
    cities: cityList.filter(city => city.country === "BS")
  },
  {
    country: "Barbados",
    zone: "Etc/GMT+4",
    flag: "BB",
    cities: cityList.filter(city => city.country === "BB")
  },
  {
    country: "Bermuda (United Kingdom)",
    zone: "Etc/GMT+4",
    flag: "BM",
    cities: cityList.filter(city => city.country === "BM")
  },
  {
    country: "British Virgin Islands (United Kingdom)",
    zone: "Etc/GMT+4",
    flag: "VG",
    cities: cityList.filter(city => city.country === "VG")
  },
  {
    country: "Cayman Islands (United Kingdom)",
    zone: "Etc/GMT+5",
    flag: "KY",
    cities: cityList.filter(city => city.country === "KY")
  },
  {
    country: "Cuba",
    zone: "Etc/GMT+5",
    flag: "CU",
    cities: cityList.filter(city => city.country === "CU")
  },
  {
    country: "Curaçao (Netherlands)",
    zone: "Etc/GMT+5",
    flag: "CW",
    cities: cityList.filter(city => city.country === "CW")
  },
  {
    country: "Dominica",
    zone: "Etc/GMT+4",
    flag: "DM",
    cities: cityList.filter(city => city.country === "DM")
  },
  {
    country: "Dominican Republic",
    zone: "Etc/GMT+5",
    flag: "DO",
    cities: cityList.filter(city => city.country === "DO")
  },
  {
    country: "Guadeloupe (France)",
    zone: "Etc/GMT+4",
    flag: "GP",
    cities: cityList.filter(city => city.country === "GP")
  },
  {
    country: "France",
    subdiv: [
      {title: "Saint-Martin"}
    ],
    zone: "Etc/GMT+4",
    flag: "FR", // eigentlich MF
    cities: cityList.filter(city => city.country === "MF")
  },
  {
    country: "Saint-Barthélemy (France)",
    zone: "Etc/GMT+4",
    flag: "BL",
    cities: cityList.filter(city => city.country === "BL")
  },
  {
    country: "Saint-Pierre and Miquelon (France)",
    zone: "Etc/GMT+4",
    flag: "PM",
    cities: cityList.filter(city => city.country === "PM")
  },
  {
    country: "Grenada",
    zone: "Etc/GMT+4",
    flag: "GD",
    cities: cityList.filter(city => city.country === "GD")
  },
  {
    country: "Haiti",
    zone: "Etc/GMT+5",
    flag: "HT",
    cities: cityList.filter(city => city.country === "HT")
  },
  {
    country: "Jamaica",
    zone: "Etc/GMT+5",
    flag: "JM",
    cities: cityList.filter(city => city.country === "JM")
  },
  {
    country: "Martinique (France)",
    zone: "Etc/GMT+4",
    flag: "MQ",
    cities: cityList.filter(city => city.country === "MQ")
  },
  {
    country: "Montserrat (United Kingdom)",
    zone: "Etc/GMT+4",
    flag: "MS",
    cities: cityList.filter(city => city.country === "MS")
  },
  {
    country: "Bonaire, Saba, and Sint Eustatius (Netherlands)",
    subdiv: [
      {title: "Bonaire"}, 
    ],
    zone: "Etc/GMT+5",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && city.adminCode === "BO")
  },
  {
    country: "Bonaire, Saba, and Sint Eustatius (Netherlands)",
    subdiv: [
      {title: "Saba"}, 
      {title: "Sint Eustatius"}
    ],
    zone: "Etc/GMT+4",
    flag: "BQ",
    cities: cityList.filter(city => city.country === "BQ" && ["SB", "SE"].includes(city.adminCode))
  },
  {
    country: "Puerto Rico (United States)",
    zone: "Etc/GMT+4",
    flag: "PR",
    cities: cityList.filter(city => city.country === "PR")
  },
  {
    country: "Saint Kitts and Nevis",
    zone: "Etc/GMT+4",
    flag: "KN",
    cities: cityList.filter(city => city.country === "KN")
  },
  {
    country: "Saint Lucia",
    zone: "Etc/GMT+4",
    flag: "LC",
    cities: cityList.filter(city => city.country === "LC")
  },
  {
    country: "Saint Vincent and the Grenadines",
    zone: "Etc/GMT+4",
    flag: "VC",
    cities: cityList.filter(city => city.country === "VC")
  },
  {
    country: "Sint Maarten (Netherlands)",
    zone: "Etc/GMT+4",
    flag: "SX",
    cities: cityList.filter(city => city.country === "SX")
  },
  {
    country: "Trinidad and Tobago",
    zone: "Etc/GMT+4",
    flag: "TT",
    cities: cityList.filter(city => city.country === "TT")
  },
  {
    country: "Turks and Caicos Islands (United Kingdom)",
    zone: "Etc/GMT+5",
    flag: "TC",
    cities: cityList.filter(city => city.country === "TC")
  },
]
