import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Amerikanisch-Samoa (USA)",
      en: "American Samoa (United States)",
      fr: "Samoa américaines (États-Unis)"
    },
    zone: "Pacific/Pago_Pago",
    flag: "AS",
    cities: cityList.filter(city => city.country === "AS" && city.tz === "Pacific/Pago_Pago")
  },
  {
    country: {
      de: "Cookinseln (Neuseeland)",
      en: "Cook Islands (New Zealand)",
      fr: "Îles Cook (Nouvelle-Zélande)"
    },
    zone: "Pacific/Rarotonga",
    flag: "CK",
    cities: cityList.filter(city => city.country === "CK" && city.tz === "Pacific/Rarotonga")
  },
  {
    country: {
      de: "Fidschi",
      en: "Fiji",
      fr: "Fidji"
    },
    zone: "Pacific/Fiji",
    flag: "FJ",
    cities: cityList.filter(city => city.country === "FJ" && city.tz === "Pacific/Fiji")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)",
      fr: "Polynésie française (France)"
    },
    subdiv: [
      {
        title: {
          de: "Austral-Inseln",
          en: "Austral Islands",
          fr: "Îles Australes"
        }
      }, 
      {
        title: {
          de: "Gesellschaftsinseln",
          en: "Society Islands",
          fr: "Îles de la Societé"
        }
      }, 
      {
        title: {
          de: "Tuamotu-Archipel",
          en: "Tuamotus",
          fr: "Tuamotu"
        }
      }
    ],
    zone: "Pacific/Tahiti",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Tahiti")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)",
      fr: "Polynésie française (France)"
    },
    subdiv: [
      {
        title: {
          de: "Gambierinseln",
          en: "Gambier Islands",
          fr: "Îles Gambier"
        }
      }
    ],
    zone: "Pacific/Gambier",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Gambier")
  },
  {
    country: {
      de: "Französisch-Polynesien (Frankreich)",
      en: "French Polynesia (France)",
      fr: "Polynésie française (France)"
    },
    subdiv: [
      {
        title: {
          de: "Marquesasinseln",
          en: "Marquesas Islands",
          fr: "Îles Marquises"
        }
      }
    ],
    zone: "Pacific/Marquesas",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.tz === "Pacific/Marquesas")
  },
  {
    country: {
      de: "Guam (USA)",
      en: "Guam (United States)",
      fr: "Guam (États-Unis)"
    },
    zone: "Pacific/Guam",
    flag: "GU",
    cities: cityList.filter(city => city.country === "GU" && city.tz === "Pacific/Guam")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati",
      fr: "Kiribati"
    },
    subdiv: [
      {
        title: {
          de: "Banaba",
          en: "Banaba",
          fr: "Banaba"
        }
      }, 
      {
        title: {
          de: "Gilbertinseln",
          en: "Gilbert Islands",
          fr: "Îles Gilbert"
        }
      }
    ],
    zone: "Pacific/Tarawa",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Tarawa")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati",
      fr: "Kiribati"
    },
    subdiv: [
      {
        title: {
          de: "Kiritimati",
          en: "Kiritimati",
          fr: "Île Christmas"
        }
      }, 
      {
        title: {
          de: "Line Islands",
          en: "Line Islands",
          fr: "Îles de la Ligne"
        }
      }
    ],
    zone: "Pacific/Kiritimati",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Kiritimati")
  },
  {
    country: {
      de: "Kiribati",
      en: "Kiribati",
      fr: "Kiribati"
    },
    subdiv: [
      {
        title: {
          de: "Phoenixinseln",
          en: "Phoenix Islands",
          fr: "Îles Phœnix"
        }
      }
    ],
    zone: "Pacific/Enderbury",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.tz === "Pacific/Enderbury")
  },
  {
    country: {
      de: "Marshallinseln",
      en: "Marshall Islands",
      fr: "Îles Marshall"
    },
    subdiv: [
      {
        title: {
          de: "Kwajalein-Atoll",
          en: "Kwajalein Atoll",
          fr: "Atoll de Kwajalein"
        }
      }
    ],
    zone: "Pacific/Kwajalein",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH" && city.tz === "Pacific/Kwajalein")
  },
  {
    country: {
      de: "Marshallinseln",
      en: "Marshall Islands",
      fr: "Îles Marshall"
    },
    subdiv: [
      {
        title: {
          de: "Ailanglaplap-Atoll",
          en: "Ailanglaplap Atoll",
          fr: "Atoll d'Ailanglaplap"
        }
      },
      {
        title: {
          de: "Ailuk-Atoll",
          en: "Ailuk Atoll",
          fr: "Atoll d'Ailuk"
        }
      },
      {
        title: {
          de: "Arno-Atoll",
          en: "Arno Atoll",
          fr: "Atoll d'Arno"
        }
      },
      {
        title: {
          de: "Aur-Atoll",
          en: "Aur Atoll",
          fr: "Atoll d'Aur"
        }
      },
      {
        title: {
          de: "Ebon-Atoll",
          en: "Ebon Atoll",
          fr: "Atoll d'Ebon"
        }
      },
      {
        title: {
          de: "Enewetok und Ujelang",
          en: "Enewetok and Ujelang",
          fr: "Atolls d'Enewetok et d'Ujelang"
        }
      },
      {
        title: {
          de: "Jabat-Insel",
          en: "Jabat Island",
          fr: "Île de Jabat"
        }
      },
      {
        title: {
          de: "Jaluit-Atoll",
          en: "Jaluit Atoll",
          fr: "Atoll de Jaluit"
        }
      },
      {
        title: {
          de: "Kili-, Bikini- und Ejit-Atoll",
          en: "Atolls Kili, Bikini, and Ejit",
          fr: "Atolls de Kili, de Bikini et d'Ejit"
        }
      },
      {
        title: {
          de: "Lae-Atoll",
          en: "Lae Atoll",
          fr: "Atoll de Lae"
        }
      },
      {
        title: {
          de: "Lib-Insel",
          en: "Lib Island",
          fr: "Île Lib"
        }
      },
      {
        title: {
          de: "Likiep-Atoll",
          en: "Likiep Atoll",
          fr: "Atoll de Likiep"
        }
      },
      {
        title: {
          de: "Majuro-Atoll",
          en: "Majuro Atoll",
          fr: "Atoll de Majuro"
        }
      },
      {
        title: {
          de: "Maloelap-Atoll",
          en: "Maloelap Atoll",
          fr: "Atoll de Maloelap"
        }
      },
      {
        title: {
          de: "Mejit-Insel",
          en: "Mejit Island",
          fr: "Île Mejit"
        }
      },
      {
        title: {
          de: "Mili-Atoll",
          en: "Mili Atoll",
          fr: "Atoll de Mili"
        }
      },
      {
        title: {
          de: "Namorik-Atoll",
          en: "Namorik Atoll",
          fr: "Atoll de Namorik"
        }
      },
      {
        title: {
          de: "Namu-Atoll",
          en: "Namu Atoll",
          fr: "Atoll de Namu"
        }
      },
      {
        title: {
          de: "Rongelap-Atoll",
          en: "Rongelap Atoll",
          fr: "Atoll de Rongelap"
        }
      },
      {
        title: {
          de: "Ujae-Atoll",
          en: "Ujae Atoll",
          fr: "Atoll d'Ujae"
        }
      },
      {
        title: {
          de: "Utirik-Atoll",
          en: "Utirik Atoll",
          fr: "Atoll d'Utirik"
        }
      },
      {
        title: {
          de: "Wotho-Atoll",
          en: "Wotho Atoll",
          fr: "Atoll de Wotho"
        }
      },
      {
        title: {
          de: "Wotje-Atoll",
          en: "Wotje Atoll",
          fr: "Atoll de Wotje"
        }
      }
    ],
    zone: "Pacific/Majuro",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH" && city.tz === "Pacific/Majuro")
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia",
      fr: "États fédérés de Micronésie"
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
      en: "Federated States of Micronesia",
      fr: "États fédérés de Micronésie"
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
      en: "Federated States of Micronesia",
      fr: "États fédérés de Micronésie"
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
      en: "Nauru",
      fr: "Nauru"
    },
    zone: "Pacific/Nauru",
    flag: "NR",
    cities: cityList.filter(city => city.country === "NR" && city.tz === "Pacific/Nauru")
  },
  {
    country: {
      de: "Neukaledonien (Frankreich)",
      en: "New Caledonia (France)",
      fr: "Nouvelle-Calédonie (France)"
    },
    zone: "Pacific/Noumea",
    flag: "NC",
    cities: cityList.filter(city => city.country === "NC" && city.tz === "Pacific/Noumea")
  },
  {
    country: {
      de: "Neuseeland",
      en: "New Zealand",
      fr: "Nouvelle-Zélande"
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
      en: "New Zealand",
      fr: "Nouvelle-Zélande"
    },
    subdiv: [
      {
        title: {
          de: "Chathaminseln",
          en: "Chatham Islands",
          fr: "Îles Chatham"
        }
      }
    ],
    zone: "Pacific/Chatham",
    flag: "NZ",
    cities: cityList.filter(city => city.country === "NZ" && city.tz === "Pacific/Chatham")
  },
  {
    country: {
      de: "Niue (Neuseeland)",
      en: "Niue (New Zealand)",
      fr: "Niue (Nouvelle-Zélande)"
    },
    zone: "Pacific/Niue",
    flag: "NU",
    cities: cityList.filter(city => city.country === "NU" && city.tz === "Pacific/Niue")
  },
  {
    country: {
      de: "Nördliche Marianen (USA)",
      en: "Northern Mariana Islands (United States)",
      fr: "Îles Mariannes du Nord (États-Unis)"
    },
    zone: "Pacific/Saipan",
    flag: "MP",
    cities: cityList.filter(city => city.country === "MP" && city.tz === "Pacific/Saipan")
  },
  {
    country: {
      de: "Palau",
      en: "Palau",
      fr: "Palaos"
    },
    zone: "Pacific/Palau",
    flag: "PW",
    cities: cityList.filter(city => city.country === "PW" && city.tz === "Pacific/Palau")
  },
  {
    country: {
      de: "Papua-Neuguinea",
      en: "Papua New Guinea",
      fr: "Papouasie-Nouvelle-Guinée"
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
      en: "Papua New Guinea",
      fr: "Papouasie-Nouvelle-Guinée"
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
      en: "Pitcairn Islands (United Kingdom)",
      fr: "Îles Pitcairn (Royaume-Uni)"
    },
    zone: "Pacific/Pitcairn",
    flag: "PN",
    cities: cityList.filter(city => city.country === "PN" && city.tz === "Pacific/Pitcairn")
  },
  {
    country: {
      de: "Samoa",
      en: "Samoa",
      fr: "Samoa"
    },
    zone: "Pacific/Apia",
    flag: "WS",
    cities: cityList.filter(city => city.country === "WS" && city.tz === "Pacific/Apia")
  },
  {
    country: {
      de: "Salomonen",
      en: "Solomon Islands",
      fr: "Îles Salomon"
    },
    zone: "Pacific/Guadalcanal",
    flag: "SB",
    cities: cityList.filter(city => city.country === "SB" && city.tz === "Pacific/Guadalcanal")
  },
  {
    country: {
      de: "Tokelau (Neuseeland)",
      en: "Tokelau (New Zealand)",
      fr: "Tokelau (Nouvelle-Zélande)"
    },
    zone: "Pacific/Fakaofo",
    flag: "TK",
    cities: cityList.filter(city => city.country === "TK" && city.tz === "Pacific/Fakaofo")
  },
  {
    country: {
      de: "Tonga",
      en: "Tonga",
      fr: "Tonga"
    },
    zone: "Pacific/Tongatapu",
    flag: "TO",
    cities: cityList.filter(city => city.country === "TO" && city.tz === "Pacific/Tongatapu")
  },
  {
    country: {
      de: "Tuvalu",
      en: "Tuvalu",
      fr: "Tuvalu"
    },
    zone: "Pacific/Funafuti",
    flag: "TV",
    cities: cityList.filter(city => city.country === "TV" && city.tz === "Pacific/Funafuti")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: {
          de: "Hawaii",
          en: "Hawaii",
          fr: "Hawaï"
        }
      }
    ],
    zone: "Pacific/Honolulu",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "Pacific/Honolulu")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: {
          de: "Midwayinseln",
          en: "Midway Islands",
          fr: "Îles Midway"
        }
      }
    ],
    zone: "Pacific/Midway",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => city.country === "UM" && city.tz === "Pacific/Midway")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
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
      en: "Vanuatu",
      fr: "Vanuatu"
    },
    zone: "Pacific/Efate",
    flag: "VU",
    cities: cityList.filter(city => city.country === "VU" && city.tz === "Pacific/Efate")
  },
  {
    country: {
      de: "Wallis und Futuna (Frankreich)",
      en: "Wallis and Futuna (France)",
      fr: "Wallis-et-Futuna (France)"
    },
    zone: "Pacific/Wallis",
    flag: "WF",
    cities: cityList.filter(city => city.country === "WF" && city.tz === "Pacific/Wallis")
  }
]

export default countryList