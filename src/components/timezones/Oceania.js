import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Amerikanisch-Samoa (USA)",
      en: "American Samoa (United States)"
    },
    zone: "Pacific/Pago_Pago",
    flag: "AS",
    cities: cityList.filter(city => city.country === "AS" && city.tz === "Pacific/Pago_Pago")
  },
  {
    country: {
      de: "Cookinseln (Neuseeland)",
      en: "Cook Islands (New Zealand)"
    },
    zone: "Pacific/Rarotonga",
    flag: "CK",
    cities: cityList.filter(city => city.country === "CK" && city.tz === "Pacific/Rarotonga")
  },
  {
    country: {
      de: "Fidschi",
      en: "Fiji"
    },
    zone: "Pacific/Fiji",
    flag: "FJ",
    cities: cityList.filter(city => city.country === "FJ" && city.tz === "Pacific/Fiji")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)"
    },
    subdiv: [
      {title: "Austral Islands"}, 
      {title: "Society Islands"}, 
      {title: "Tuamotus"}
    ],
    zone: "Pacific/Tahiti",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Tahiti")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)"
    },
    subdiv: [
      {title: "Gambier Islands"}
    ],
    zone: "Pacific/Gambier",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Gambier")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)"
    },
    subdiv: [
      {title: "Marquesas Islands"}
    ],
    zone: "Pacific/Marquesas",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Marquesas")
  },
  {
    country: {
      de: "Guam (USA)",
      en: "Guam (United States)"
    },
    zone: "Pacific/Guam",
    flag: "GU",
    cities: cityList.filter(city => city.country === "GU" && city.tz === "Pacific/Guam")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati"
    },
    subdiv: [
      {title: "Banaba"}, 
      {title: "Gilbert Islands"}
    ],
    zone: "Pacific/Tarawa",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Tarawa")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati"
    },
    subdiv: [
      {title: "Kiritimati"}, 
      {title: "Line Islands"}
    ],
    zone: "Pacific/Kiritimati",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Kiritimati")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati"
    },
    subdiv: [
      {title: "Phoenix Islands"}
    ],
    zone: "Pacific/Enderbury",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Enderbury")
  },
  {
    country: {
      de: "Marshallinseln",
      en: "Marshall Islands"
    },
    subdiv: [
      {title: "Kwajalein Atoll"}
    ],
    zone: "Pacific/Kwajalein",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH" && city.tz === "Pacific/Kwajalein")
  },
  {
    country: {
      de: "Marshallinseln",
      en: "Marshall Islands"
    },
    subdiv: [
      {title: "Ailanglaplap Atoll"},
      {title: "Ailuk Atoll"},
      {title: "Arno Atoll"},
      {title: "Aur Atoll"},
      {title: "Ebon Atoll"},
      {title: "Enewetok / Ujelang"},
      {title: "Jabat Island"},
      {title: "Jaluit Atoll"},
      {title: "Kili / Bikini / Ejit"},
      {title: "Lae Atoll"},
      {title: "Lib Island"},
      {title: "Likiep Atoll"},
      {title: "Majuro Atoll"},
      {title: "Maloelap Atoll"},
      {title: "Mejit Island"},
      {title: "Mili Atoll"},
      {title: "Namorik Atoll"},
      {title: "Namu Atoll"},
      {title: "Rongelap Atoll"},
      {title: "Ujae Atoll"},
      {title: "Utirik Atoll"},
      {title: "Wotho Atoll"},
      {title: "Wotje Atoll"}
    ],
    zone: "Pacific/Majuro",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH" && city.tz === "Pacific/Majuro")
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia"
    },
    subdiv: [
      {title: "Chuuk"}, 
      {title: "Yap"}
    ],
    zone: "Pacific/Chuuk",
    flag: "FM",
    cities: cityList.filter(city => city.country === "FM" && city.tz === "Pacific/Chuuk")
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia"
    },
    subdiv: [
      {title: "Kosrae"}
    ],
    zone: "Pacific/Kosrae",
    flag: "FM",
    cities: cityList.filter(city => city.country === "FM" && city.tz === "Pacific/Kosrae")
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia"
    },
    subdiv: [
      {title: "Pohnpei"}
    ],
    zone: "Pacific/Pohnpei",
    flag: "FM",
    cities: cityList.filter(city => city.country === "FM" && city.tz === "Pacific/Pohnpei")
  },
  {
    country: {
      de: "Nauru",
      en: "Nauru"
    },
    zone: "Pacific/Nauru",
    flag: "NR",
    cities: cityList.filter(city => city.country === "NR" && city.tz === "Pacific/Nauru")
  },
  {
    country: {
      de: "Neukaledonien (Frankreich)",
      en: "New Caledonia (France)"
    },
    zone: "Pacific/Noumea",
    flag: "NC",
    cities: cityList.filter(city => city.country === "NC" && city.tz === "Pacific/Noumea")
  },
  {
    country: {
      de: "Neuseeland",
      en: "New Zealand"
    },
    subdiv: [
      {title: "Auckland"},
      {title: "Bay of Plenty"},
      {title: "Canterbury"},
      {title: "Gisborne"},
      {title: "Hawke's Bay"},
      {title: "Manawatu-Wanganui"},
      {title: "Marlborough"},
      {title: "Nelson"},
      {title: "Northland"},
      {title: "Otago"},
      {title: "Southland"},
      {title: "Taranaki"},
      {title: "Tasman"},
      {title: "Waikato"},
      {title: "West Coast"},
      {title: "Wellington"}
    ],
    zone: "Pacific/Auckland",
    flag: "NZ",
    cities: cityList.filter(city => city.country === "NZ" && city.tz === "Pacific/Auckland")
  },
  {
    country: {
      de: "Neuseeland",
      en: "New Zealand"
    },
    subdiv: [
      {title: "Chatham Islands"}
    ],
    zone: "Pacific/Chatham",
    flag: "NZ",
    cities: cityList.filter(city => city.country === "NZ" && city.tz === "Pacific/Chatham")
  },
  {
    country: {
      de: "Niue (Neuseeland)",
      en: "Niue (New Zealand)"
    },
    zone: "Pacific/Niue",
    flag: "NU",
    cities: cityList.filter(city => city.country === "NU" && city.tz === "Pacific/Niue")
  },
  {
    country: {
      de: "Nördliche Marianen (USA)",
      en: "Northern Mariana Islands (United States)"
    },
    zone: "Pacific/Saipan",
    flag: "MP",
    cities: cityList.filter(city => city.country === "MP" && city.tz === "Pacific/Saipan")
  },
  {
    country: {
      de: "Palau",
      en: "Palau"
    },
    zone: "Pacific/Palau",
    flag: "PW",
    cities: cityList.filter(city => city.country === "PW" && city.tz === "Pacific/Palau")
  },
  {
    country: {
      de: "Papua-Neuguinea",
      en: "Papua New Guinea"
    },
    subdiv: [
      {title: "Bougainville"}
    ],
    zone: "Pacific/Bougainville",
    flag: "PG",
    cities: cityList.filter(city => city.country === "PG" && city.tz === "Pacific/Bougainville")
  },
  {
    country: {
      de: "Papua-Neuguinea",
      en: "Papua New Guinea"
    },
    subdiv: [
      {title: "Central"},
      {title: "Chimbu"},
      {title: "Eastern Highlands"},
      {title: "East New Britain"},
      {title: "East Sepik"},
      {title: "Enga"},
      {title: "Guff"},
      {title: "Hela"},
      {title: "Jiwaka"},
      {title: "Madang"},
      {title: "Manus"},
      {title: "Milne Bay"},
      {title: "Morobe"},
      {title: "National Capital District"},
      {title: "New Ireland"},
      {title: "Northern"},
      {title: "Southern Highlands"},
      {title: "Western Highlands"},
      {title: "Western Province"},
      {title: "West New Britain"},
      {title: "West Sepik"},
    ],
    zone: "Pacific/Port_Moresby",
    flag: "PG",
    cities: cityList.filter(city => city.country === "PG" && city.tz === "Pacific/Port_Moresby")
  },
  {
    country: {
      de: "Pitcairninseln (Vereinigtes Königreich)",
      en: "Pitcairn Islands (United Kingdom)"
    },
    zone: "Pacific/Pitcairn",
    flag: "PN",
    cities: cityList.filter(city => city.country === "PN" && city.tz === "Pacific/Pitcairn")
  },
  {
    country: {
      de: "Samoa",
      en: "Samoa"
    },
    zone: "Pacific/Apia",
    flag: "WS",
    cities: cityList.filter(city => city.country === "WS" && city.tz === "Pacific/Apia")
  },
  {
    country: {
      de: "Salomonen",
      en: "Solomon Islands"
    },
    zone: "Pacific/Guadalcanal",
    flag: "SB",
    cities: cityList.filter(city => city.country === "SB" && city.tz === "Pacific/Guadalcanal")
  },
  {
    country: {
      de: "Tokelau (Neuseeland)",
      en: "Tokelau (New Zealand)"
    },
    zone: "Pacific/Fakaofo",
    flag: "TK",
    cities: cityList.filter(city => city.country === "TK" && city.tz === "Pacific/Fakaofo")
  },
  {
    country: {
      de: "Tonga",
      en: "Tonga"
    },
    zone: "Pacific/Tongatapu",
    flag: "TO",
    cities: cityList.filter(city => city.country === "TO" && city.tz === "Pacific/Tongatapu")
  },
  {
    country: {
      de: "Tuvalu",
      en: "Tuvalu"
    },
    zone: "Pacific/Funafuti",
    flag: "TV",
    cities: cityList.filter(city => city.country === "TV" && city.tz === "Pacific/Funafuti")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {title: "Hawaii"}
    ],
    zone: "Pacific/Honolulu",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "Pacific/Honolulu")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {title: "Midway Islands"}
    ],
    zone: "Pacific/Midway",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => city.country === "UM" && city.tz === "Pacific/Midway")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {title: "Wake"}
    ],
    zone: "Pacific/Wake",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => city.country === "UM" && city.tz === "Pacific/Wake")
  },
  {
    country: {
      de: "Vanuatu",
      en: "Vanuatu"
    },
    zone: "Pacific/Efate",
    flag: "VU",
    cities: cityList.filter(city => city.country === "VU" && city.tz === "Pacific/Efate")
  },
  {
    country: {
      de: "Wallis und Futuna (Frankreich)",
      en: "Wallis and Futuna (France)"
    },
    zone: "Pacific/Wallis",
    flag: "WF",
    cities: cityList.filter(city => city.country === "WF" && city.tz === "Pacific/Wallis")
  }
]

export default countryList