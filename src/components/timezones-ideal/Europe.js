import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Åland (Finnland)",
      en: "Åland (Finland)"
    },
    zone: "Etc/GMT-2",
    flag: "AX",
    cities: cityList.filter(city => city.country === "AX")
  },
  {
    country: {
      de: "Albanien",
      en: "Albania"
    },
    zone: "Etc/GMT-1",
    flag: "AL",
    cities: cityList.filter(city => city.country === "AL")
  },
  {
    country: {
      de: "Andorra",
      en: "Andorra"
    },
    zone: "Etc/GMT+0",
    flag: "AD",
    cities: cityList.filter(city => city.country === "AD")
  },
  {
    country: {
      de: "Österreich",
      en: "Austria"
    },
    zone: "Etc/GMT-1",
    flag: "AT",
    cities: cityList.filter(city => city.country === "AT")
  },
  {
    country: {
      de: "Belarus",
      en: "Belarus"
    },
    zone: "Etc/GMT-2",
    flag: "BY",
    cities: cityList.filter(city => city.country === "BY")
  },
  {
    country: {
      de: "Belgien",
      en: "Belgium"
    },
    zone: "Etc/GMT+0",
    flag: "BE",
    cities: cityList.filter(city => city.country === "BE")
  },
  {
    country: {
      de: "Bosnien und Herzegowina",
      en: "Bosnia and Herzegovina"
    },
    zone: "Etc/GMT-1",
    flag: "BA",
    cities: cityList.filter(city => city.country === "BA")
  },
  {
    country: {
      de: "Bulgarien",
      en: "Bulgaria"
    },
    zone: "Etc/GMT-2",
    flag: "BG",
    cities: cityList.filter(city => city.country === "BG")
  },
  {
    country: {
      de: "Kroatien",
      en: "Croatia"
    },
    zone: "Etc/GMT-1",
    flag: "HR",
    cities: cityList.filter(city => city.country === "HR")
  },
  {
    country: {
      de: "Zypern",
      en: "Cyprus"
    },
    zone: "Etc/GMT-2",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY")
  },
  {
    country: {
      de: "Tschechien",
      en: "Czechia"
    },
    zone: "Etc/GMT-1",
    flag: "CZ",
    cities: cityList.filter(city => city.country === "CZ")
  },
  {
    country: {
      de: "Dänemark",
      en: "Denmark"
    },
    zone: "Etc/GMT-1",
    flag: "DK",
    cities: cityList.filter(city => city.country === "DK")
  },
  {
    country: {
      de: "Estland",
      en: "Estonia"
    },
    zone: "Etc/GMT-2",
    flag: "EE",
    cities: cityList.filter(city => city.country === "EE")
  },
  {
    country: {
      de: "Färöer (Dänemark)",
      en: "Faroe Islands (Denmark)"
    },
    zone: "Etc/GMT+0",
    flag: "FO",
    cities: cityList.filter(city => city.country === "FO")
  },
  {
    country: {
      de: "Finnland",
      en: "Finland"
    },
    zone: "Etc/GMT-2",
    flag: "FI",
    cities: cityList.filter(city => city.country === "FI")
  },
  {
    country: {
      de: "Frankreich",
      en: "France"
    },
    zone: "Etc/GMT+0",
    flag: "FR",
    cities: cityList.filter(city => city.country === "FR")
  },
  {
    country: {
      de: "Deutschland",
      en: "Germany"
    },
    zone: "Etc/GMT-1",
    flag: "DE",
    cities: cityList.filter(city => city.country === "DE")
  },
  {
    country: {
      de: "Gibraltar (Vereinigtes Königreich)",
      en: "Gibraltar (United Kingdom)"
    },
    zone: "Etc/GMT+0",
    flag: "GI",
    cities: cityList.filter(city => city.country === "GI")
  },
  {
    country: {
      de: "Griechenland",
      en: "Greece"
    },
    subdiv: [
      {
        title: {
          de: "Epirus",
          en: "Epirus"
        }
      }, // ESYE21
      {
        title: {
          de: "Westmakedonien",
          en: "Western Macedonia"
        }
      }, // ESYE13
      {
        title: {
          de: "Peloponnes",
          en: "Peloponnese"
        }
      }, // ESYE25
      {
        title: {
          de: "Westgriechenland",
          en: "Western Greece"
        }
      }, // ESYE23
      {
        title: {
          de: "Ionische Inseln",
          en: "Ionian"
        }
      }, // ESYE22
    ],
    zone: "Etc/GMT-1",
    flag: "GR",
    cities: cityList.filter(city => {
      if(city.country === "GR") {
        if(city.adminCode === "ESYE13") return true
        if(city.adminCode === "ESYE21") return true
        if(city.adminCode === "ESYE22") return true
        if(city.adminCode === "ESYE23") return true
        if(city.adminCode === "ESYE25") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Griechenland",
      en: "Greece"
    },
    subdiv: [
      {
        title: {
          de: "Nördliche Ägäis",
          en: "Northern Aegean"
        }
      }, // ESYE41
      {
        title: {
          de: "Südliche Ägäis",
          en: "Southern Aegean"
        }
      }, // ESYE42
      {
        title: {
          de: "Attika",
          en: "Attica"
        }
      }, // ESYE31
      {
        title: {
          de: "Kreta",
          en: "Crete"
        }
      }, // ESYE43
      {
        title: {
          de: "Ostmakedonien und Thrakien",
          en: "Eastern Macedonia and Thrace"
        }
      }, // ESYE11
      {
        title: {
          de: "Zentralmakedonien",
          en: "Central Macedonia"
        }
      }, // ESYE12
      {
        title: {
          de: "Thessalien",
          en: "Thessaly"
        }
      }, // ESYE14
      {
        title: {
          de: "Mittelgriechenland",
          en: "Central Greece"
        }
      }, // ESYE24
    ],
    zone: "Etc/GMT-2",
    flag: "GR",
    cities: cityList.filter(city => {
      if(city.country === "GR") {
        if(city.adminCode === "ESYE11") return true
        if(city.adminCode === "ESYE12") return true
        if(city.adminCode === "ESYE14") return true
        if(city.adminCode === "ESYE24") return true
        if(city.adminCode === "ESYE31") return true
        if(city.adminCode === "ESYE41") return true
        if(city.adminCode === "ESYE42") return true
        if(city.adminCode === "ESYE43") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)"
    },
    subdiv: [
      {title: "Danmarkshavn"}
    ],
    zone: "Etc/GMT+1",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Danmarkshavn")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)"
    },
    subdiv: [
      {title: "Ittoqqortoormit"}, 
      {title: "Scoresbysund"}
    ],
    zone: "Etc/GMT+1",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Scoresbysund")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)"
    },
    subdiv: [
      {title: "Thule"}, 
      {title: "Pituffik"}
    ],
    zone: "Etc/GMT+4",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Thule")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)"
    },
    subdiv: [
      {
        title: {
          de: "Westgrönland",
          en: "Western Greenland"
        }
      }
    ],
    zone: "Etc/GMT+3",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Nuuk")
  },
  {
    country: {
      de: "Guernsey (Vereinigtes Königreich)",
      en: "Guernsey (United Kingdom)"
    },
    zone: "Etc/GMT+0",
    flag: "GG",
    cities: cityList.filter(city => city.country === "GG")
  },
  {
    country: {
      de: "Ungarn",
      en: "Hungary"
    },
    zone: "Etc/GMT-1",
    flag: "HU",
    cities: cityList.filter(city => city.country === "HU")
  },
  {
    country: {
      de: "Island",
      en: "Iceland"
    },
    zone: "Etc/GMT+1",
    flag: "IS",
    cities: cityList.filter(city => city.country === "IS")
  },
  {
    country: {
      de: "Irland",
      en: "Ireland"
    },
    zone: "Etc/GMT+1",
    flag: "IE",
    cities: cityList.filter(city => city.country === "IE")
  },
  {
    country: {
      de: "Isle of Man (Vereinigtes Königreich)",
      en: "Isle of Man (United Kingdom)"
    },
    zone: "Etc/GMT+0",
    flag: "IM",
    cities: cityList.filter(city => city.country === "IM")
  },
  {
    country: {
      de: "Italien",
      en: "Italy"
    },
    zone: "Etc/GMT-1",
    flag: "IT",
    cities: cityList.filter(city => city.country === "IT")
  },
  {
    country: {
      de: "Jersey (Vereinigtes Königreich)",
      en: "Jersey (United Kingdom)"
    },
    zone: "Etc/GMT+0",
    flag: "JE",
    cities: cityList.filter(city => city.country === "JE")
  },
  {
    country: {
      de: "Kosovo",
      en: "Kosovo"
    },
    zone: "Etc/GMT-1",  // no explicit timezone for Kosovo/Pristina
    flag: "XK",
    cities: cityList.filter(city => city.country === "XK")
  },
  {
    country: {
      de: "Lettland",
      en: "Latvia"
    },
    zone: "Etc/GMT-2",
    flag: "LV",
    cities: cityList.filter(city => city.country === "LV")
  },
  {
    country: {
      de: "Liechtenstein",
      en: "Liechtenstein"
    },
    zone: "Etc/GMT-1",
    flag: "LI",
    cities: cityList.filter(city => city.country === "LI")
  },
  {
    country: {
      de: "Litauen",
      en: "Lithuania"
    },
    zone: "Etc/GMT-2",
    flag: "LT",
    cities: cityList.filter(city => city.country === "LT")
  },
  {
    country: {
      de: "Luxemburg",
      en: "Luxembourg"
    },
    zone: "Etc/GMT+0",
    flag: "LU",
    cities: cityList.filter(city => city.country === "LU")
  },
  {
    country: {
      de: "Malta",
      en: "Malta"
    },
    zone: "Etc/GMT-1",
    flag: "MT",
    cities: cityList.filter(city => city.country === "MT")
  },
  {
    country: {
      de: "Moldau",
      en: "Moldova"
    },
    zone: "Etc/GMT-2",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD")
  },
  {
    country: {
      de: "Monaco",
      en: "Monaco"
    },
    zone: "Etc/GMT+0",
    flag: "MC",
    cities: cityList.filter(city => city.country === "MC")
  },
  {
    country: {
      de: "Montenegro",
      en: "Montenegro"
    },
    zone: "Etc/GMT-1",
    flag: "ME",
    cities: cityList.filter(city => city.country === "ME")
  },
  {
    country: {
      de: "Niederlande",
      en: "Netherlands"
    },
    zone: "Etc/GMT+0",
    flag: "NL",
    cities: cityList.filter(city => city.country === "NL")
  },
  {
    country: {
      de: "Nordmazedonien",
      en: "North Macedonia"
    },
    zone: "Etc/GMT-1",
    flag: "MK",
    cities: cityList.filter(city => city.country === "MK")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway"
    },
    subdiv: [
      {title: "Agder"},
      {title: "Innlandet"},
      {title: "Møre og Romsdal"},
      {title: "Nordland"},
      {title: "Oslo"},
      {title: "Rogaland"},
      {title: "Troms og Finnmark"},
      {title: "Trøndelag"},
      {title: "Vestfold og Telemark"},
      {title: "Vestland"},
      {title: "Viken"},
    ],
    zone: "Etc/GMT-1",
    flag: "NO",
    cities: cityList.filter(city => city.country === "NO")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway"
    },
    subdiv: [
      {title: "Jan Mayen"}
    ],
    zone: "Etc/GMT+1",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SJ" && city.adminCode === "22")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway"
    },
    subdiv: [
      {title: "Svalbard"}
    ],
    zone: "Etc/GMT-1",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SJ" && city.adminCode === "21")
  },
  {
    country: {
      de: "Polen",
      en: "Poland"
    },
    zone: "Etc/GMT-1",
    flag: "PL",
    cities: cityList.filter(city => city.country === "PL")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {title: "Aveiro"}, // 02
      {title: "Beja"}, // 03
      {title: "Braga"}, // 04
      {title: "Bragança"}, // 05
      {title: "Castelo Branco"}, // 06
      {title: "Coimbra"}, // 07
      {title: "Évora"}, // 08
      {title: "Faro"}, // 09
      {title: "Guarda"}, // 11
      {title: "Leiria"}, // 13
      {
        title: {
          de: "Lissabon",
          en: "Lisbon"
        }
      }, // 14
      {title: "Portalegre"}, // 16
      {title: "Porto"}, // 17
      {title: "Santarém"}, // 18
      {title: "Setúbal"}, // 19
      {title: "Viana do Castelo"}, // 20
      {title: "Vila Real"}, // 21
      {title: "Viseu"}, // 22
    ],
    zone: "Etc/GMT+1",
    flag: "PT",
    cities: cityList.filter(city => {
      if(city.country === "PT") {
        if(city.adminCode === "02") return true
        if(city.adminCode === "03") return true
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "06") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08") return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "16") return true
        if(city.adminCode === "17") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "19") return true
        if(city.adminCode === "20") return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "22") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {title: "Madeira"} // 10
    ],
    zone: "Etc/GMT+1",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.adminCode === "10")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {
        title: {
          de: "Azoren",
          en: "Azores"
        }
      } // 23
    ],
    zone: "Etc/GMT+2",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.adminCode === "23")
  },
  {
    country: {
      de: "Rumänien",
      en: "Romania"
    },
    zone: "Etc/GMT-2",
    flag: "RO",
    cities: cityList.filter(city => city.country === "RO")
  },
  {
    country: {
      de: "San Marino",
      en: "San Marino"
    },
    zone: "Etc/GMT-1",
    flag: "SM",
    cities: cityList.filter(city => city.country === "SM")
  },
  {
    country: {
      de: "Serbien",
      en: "Serbia"
    },
    zone: "Etc/GMT-1",
    flag: "RS",
    cities: cityList.filter(city => city.country === "RS")
  },
  {
    country: {
      de: "Slowakei",
      en: "Slovakia"
    },
    zone: "Etc/GMT-1",
    flag: "SK",
    cities: cityList.filter(city => city.country === "SK")
  },
  {
    country: {
      de: "Slowenien",
      en: "Slovenia"
    },
    zone: "Etc/GMT-1",
    flag: "SI",
    cities: cityList.filter(city => city.country === "SI")
  },
  {
    country: {
      de: "Spanien",
      en: "Spain"
    },
    subdiv: [
      {
        title: {
          de: "Andalusien",
          en: "Andalusia"
        }
      }, // 51
      {title: "Aragón"}, // 52
      {
        title: {
          de: "Asturien",
          en: "Asturias"
        }
      }, // 34
      {
        title: {
          de: "Kantabrien",
          en: "Cantabria"
        }
      }, // 39
      {
        title: {
          de: "Kastilien und León",
          en: "Castile and León"
        }
      }, // 55
      {
        title: {
          de: "Kastilien-La Mancha",
          en: "Castilla-La Mancha"
        }
      }, // 54
      {
        title: {
          de: "Katalonien",
          en: "Catalonia"
        }
      }, // 56
      {title: "Extremadura"}, // 57
      {
        title: {
          de: "Galicien",
          en: "Galicia"
        }
      }, // 58
      {
        title: {
          de: "Balearische Inseln",
          en: "Balearic Islands"
        }
      }, // 07
      {title: "Murcia"}, // 31
      {
        title: {
          de: "Autonome Gemeinschaft Madrid",
          en: "Community of Madrid"
        }
      }, // 29
      {
        title: {
          de: "Navarra",
          en: "Navarre"
        }
      }, // 32
      {
        title: {
          de: "Baskenland",
          en: "Basque Country"
        }
      }, // 59
      {title: "La Rioja"}, // 27
      {
        title: {
          de: "Valencianische Gemeinschaft",
          en: "Valencian Community"
        }
      }, // 60
    ],
    zone: "Etc/GMT+0",
    flag: "ES",
    cities: cityList.filter(city => {
      if(city.country === "ES") {
        if(city.adminCode === "07") return true
        if(city.adminCode === "27") return true
        if(city.adminCode === "29") return true
        if(city.adminCode === "31") return true
        if(city.adminCode === "32") return true
        if(city.adminCode === "34") return true
        if(city.adminCode === "39") return true
        if(city.adminCode === "51") return true
        if(city.adminCode === "52") return true
        if(city.adminCode === "54") return true
        if(city.adminCode === "55") return true
        if(city.adminCode === "56") return true
        if(city.adminCode === "57") return true
        if(city.adminCode === "58") return true
        if(city.adminCode === "59") return true
        if(city.adminCode === "60") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Spanien",
      en: "Spain"
    },
    subdiv: [
      {
        title: {
          de: "Kanarische Inseln",
          en: "Canary Islands"
        }
      } // 53
    ],
    zone: "Etc/GMT+1",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.adminCode === "53")
  },
  {
    country: {
      de: "Schweden",
      en: "Sweden"
    },
    zone: "Etc/GMT-1",
    flag: "SE",
    cities: cityList.filter(city => city.country === "SE")
  },
  {
    country: {
      de: "Schweiz",
      en: "Switzerland"
    },
    zone: "Etc/GMT-1",
    flag: "CH",
    cities: cityList.filter(city => city.country === "CH")
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom"
    },
    subdiv: [
      {
        title: {
          de: "England",
          en: "England"
        }
      }, // ENG
      {
        title: {
          de: "Schottland",
          en: "Scotland"
        }
      }, // SCT
      {
        title: {
          de: "Wales",
          en: "Wales"
        }
      } // WLS
    ],
    zone: "Etc/GMT+0",
    flag: "GB",
    cities: cityList.filter(city => {
      if(city.country === "GB") {
        if(city.adminCode === "ENG") return true
        if(city.adminCode === "SCT") return true
        if(city.adminCode === "WLS") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom"
    },
    subdiv: [
      {
        title: {
          de: "Nordirland",
          en: "Northern Ireland"
        }
      } // NIR
    ],
    zone: "Etc/GMT+1",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.adminCode === "NIR")
  },
  {
    country: {
      de: "Ukraine",
      en: "Ukraine"
    },
    zone: "Etc/GMT-2",
    flag: "UA",
    cities: cityList.filter(city => city.country === "UA")
  },
  {
    country: {
      de: "Vatikanstadt",
      en: "Vatican City"
    },
    zone: "Etc/GMT-1",
    flag: "VA",
    cities: cityList.filter(city => city.country === "VA")
  }
]

export default countryList