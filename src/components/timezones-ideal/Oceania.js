import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Amerikanisch-Samoa (USA)",
      en: "American Samoa (United States)",
      fr: "Samoa américaines (États-Unis)"
    },
    zone: "Etc/GMT+11",
    flag: "AS",
    cities: cityList.filter(city => city.country === "AS")
  },
  {
    country: {
      de: "Cookinseln (Neuseeland)",
      en: "Cook Islands (New Zealand)",
      fr: "Îles Cook (Nouvelle-Zélande)"
    },
    zone: "Etc/GMT+11",
    flag: "CK",
    cities: cityList.filter(city => city.country === "CK")
  },
  {
    country: {
      de: "Fidschi",
      en: "Fiji",
      fr: "Fidji"
    },
    zone: "Etc/GMT-12",
    flag: "FJ",
    cities: cityList.filter(city => city.country === "FJ")
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
      }, // 05
      {
        title: {
          de: "Gesellschaftsinseln",
          en: "Society Islands",
          fr: "Îles de la Societé"
        }
      }, // 01, 02
      {
        title: {
          de: "Tuamotu-Archipel",
          en: "Tuamotus",
          fr: "Tuamotu"
        }
      } // part of 03
    ],
    zone: "Etc/GMT+10",
    flag: "PF",
    cities: cityList.filter(city => {
      if(city.country === "PF") {
        switch(city.adminCode) {
          case "01":
          case "02":
            return true
          default:
            return false
        }
      }
      return false
    })
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
      } // part of 03
    ],
    zone: "Etc/GMT+9",
    flag: "PF"
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
      } // 04
    ],
    zone: "Etc/GMT+9",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.adminCode === "04")
  },
  {
    country: {
      de: "Guam (USA)",
      en: "Guam (United States)",
      fr: "Guam (États-Unis)"
    },
    zone: "Etc/GMT-10",
    flag: "GU",
    cities: cityList.filter(city => city.country === "GU")
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
    ],
    zone: "Etc/GMT-11",
    flag: "KI"
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
          de: "Gilbertinseln",
          en: "Gilbert Islands",
          fr: "Îles Gilbert"
        }
      }
    ],
    zone: "Etc/GMT-12",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.adminCode === "01")
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
    zone: "Etc/GMT-13",
    flag: "KI"
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
    zone: "Etc/GMT-14",
    flag: "KI"
  },
  {
    country: {
      de: "Marshallinseln",
      en: "Marshall Islands",
      fr: "Îles Marshall"
    },
    zone: "Etc/GMT-11",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH")
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia",
      fr: "États fédérés de Micronésie"
    },
    subdiv: [
      {title: "Chuuk"}, // 03
      {title: "Yap"} // 04
    ],
    zone: "Etc/GMT-10",
    flag: "FM",
    cities: cityList.filter(city => {
      if(city.country === "FM") {
        switch(city.adminCode) {
          case "03":
          case "04":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Föderierte Staaten von Mikronesien",
      en: "Federated States of Micronesia",
      fr: "États fédérés de Micronésie"
    },
    subdiv: [
      {title: "Kosrae"}, // 01
      {title: "Pohnpei"} // 02
    ],
    zone: "Etc/GMT-11",
    flag: "FM",
    cities: cityList.filter(city => {
      if(city.country === "FM") {
        switch(city.adminCode) {
          case "01":
          case "02":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Nauru",
      en: "Nauru",
      fr: "Nauru"
    },
    zone: "Etc/GMT-11",
    flag: "NR",
    cities: cityList.filter(city => city.country === "NR")
  },
  {
    country: {
      de: "Neukaledonien (Frankreich)",
      en: "New Caledonia (France)",
      fr: "Nouvelle-Calédonie (France)"
    },
    zone: "Etc/GMT-11",
    flag: "NC",
    cities: cityList.filter(city => city.country === "NC")
  },
  {
    country: {
      de: "Neuseeland",
      en: "New Zealand",
      fr: "Nouvelle-Zélande"
    },
    subdiv: [
      {title: "Canterbury"}, // E9
      {title: "Marlborough"}, // F4
      {title: "Nelson"}, // F5
      {title: "Otago"}, // F7
      {title: "Southland"}, // F8
      {title: "West Coast"}, // G3
      {title: "Tasman"}, // TAS
    ],
    zone: "Etc/GMT-11",
    flag: "NZ",
    cities: cityList.filter(city => {
      if(city.country === "NZ") {
        switch(city.adminCode) {
          case "E9":
          case "F4":
          case "F5":
          case "F7":
          case "F8":
          case "G3":
          case "TAS":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Neuseeland",
      en: "New Zealand",
      fr: "Nouvelle-Zélande"
    },
    subdiv: [
      {title: "Auckland"}, // E7
      {title: "Bay of Plenty"}, // E8
      {title: "Gisborne"}, // F1
      {title: "Hawke's Bay"}, // F2
      {title: "Manawatu-Wanganui"}, // F3
      {title: "Northland"}, // F6
      {title: "Taranaki"}, // F9
      {title: "Waikato"}, // G1
      {title: "Wellington"}, // G2
    ],
    zone: "Etc/GMT-12",
    flag: "NZ",
    cities: cityList.filter(city => {
      if(city.country === "NZ") {
        switch(city.adminCode) {
          case "E7":
          case "E8":
          case "F1":
          case "F2":
          case "F3":
          case "F6":
          case "F9":
          case "G1":
          case "G2":
            return true
          default:
            return false
        }
      }
      return false
    })
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
      } // 10
    ],
    zone: "Etc/GMT-12",
    flag: "NZ",
    cities: cityList.filter(city => city.country === "NZ" && city.adminCode === "10")
  },
  {
    country: {
      de: "Niue (Neuseeland)",
      en: "Niue (New Zealand)",
      fr: "Niue (Nouvelle-Zélande)"
    },
    zone: "Etc/GMT+11",
    flag: "NU",
    cities: cityList.filter(city => city.country === "NU")
  },
  {
    country: {
      de: "Nördliche Marianen (USA)",
      en: "Northern Mariana Islands (United States)",
      fr: "Îles Mariannes du Nord (États-Unis)"
    },
    zone: "Etc/GMT-10",
    flag: "MP",
    cities: cityList.filter(city => city.country === "MP")
  },
  {
    country: {
      de: "Palau",
      en: "Palau",
      fr: "Palaos"
    },
    zone: "Etc/GMT-9",
    flag: "PW",
    cities: cityList.filter(city => city.country === "PW")
  },
  {
    country: {
      de: "Papua-Neuguinea",
      en: "Papua New Guinea",
      fr: "Papouasie-Nouvelle-Guinée"
    },
    zone: "Etc/GMT-10",
    flag: "PG",
    cities: cityList.filter(city => city.country === "PG")
  },
  {
    country: {
      de: "Pitcairninseln (Vereinigtes Königreich)",
      en: "Pitcairn Islands (United Kingdom)",
      fr: "Îles Pitcairn (Royaume-Uni)"
    },
    zone: "Etc/GMT-9",
    flag: "PN",
    cities: cityList.filter(city => city.country === "PN")
  },
  {
    country: {
      de: "Samoa",
      en: "Samoa",
      fr: "Samoa"
    },
    zone: "Etc/GMT-13",
    flag: "WS",
    cities: cityList.filter(city => city.country === "WS")
  },
  {
    country: {
      de: "Salomonen",
      en: "Solomon Islands",
      fr: "Îles Salomon"
    },
    zone: "Etc/GMT-11",
    flag: "SB",
    cities: cityList.filter(city => city.country === "SB")
  },
  {
    country: {
      de: "Tokelau (Neuseeland)",
      en: "Tokelau (New Zealand)",
      fr: "Tokelau (Nouvelle-Zélande)"
    },
    zone: "Etc/GMT-13",
    flag: "TK",
    cities: cityList.filter(city => city.country === "TK")
  },
  {
    country: {
      de: "Tonga",
      en: "Tonga",
      fr: "Tonga"
    },
    zone: "Etc/GMT-12",
    flag: "TO",
    cities: cityList.filter(city => city.country === "TO")
  },
  {
    country: {
      de: "Tuvalu",
      en: "Tuvalu",
      fr: "Tuvalu"
    },
    zone: "Etc/GMT-12",
    flag: "TV",
    cities: cityList.filter(city => city.country === "TV")
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
    zone: "Etc/GMT+10",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.adminCode === "HI")
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
      } // 300
    ],
    zone: "Etc/GMT+12",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => {
      if(city.country === "UM") {
        switch(city.adminCode) {
          case "300":
            return true
          default:
            return false
        }
      }
      return false
    })
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
    zone: "Etc/GMT-11",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => city.country === "UM" && city.adminCode === "450")
  },
  {
    country: {
      de: "Vanuatu",
      en: "Vanuatu",
      fr: "Vanuatu"
    },
    zone: "Etc/GMT-11",
    flag: "VU",
    cities: cityList.filter(city => city.country === "VU")
  },
  {
    country: {
      de: "Wallis und Futuna (Frankreich)",
      en: "Wallis and Futuna (France)",
      fr: "Wallis-et-Futuna (France)"
    },
    zone: "Etc/GMT-12",
    flag: "WF",
    cities: cityList.filter(city => city.country === "WF")
  }
]

export default countryList