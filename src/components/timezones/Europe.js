import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Åland (Finnland)",
      en: "Åland (Finland)",
      fr: "Åland (Finlande)"
    },
    zone: "Europe/Mariehamn",
    flag: "AX",
    cities: cityList.filter(city => city.country === "AX" && city.tz === "Europe/Mariehamn")
  },
  {
    country: {
      de: "Albanien",
      en: "Albania",
      fr: "Albanie"
    },
    zone: "Europe/Tirane",
    flag: "AL",
    cities: cityList.filter(city => city.country === "AL" && city.tz === "Europe/Tirane")
  },
  {
    country: {
      de: "Andorra",
      en: "Andorra",
      fr: "Andorre"
    },
    zone: "Europe/Andorra",
    flag: "AD",
    cities: cityList.filter(city => city.country === "AD" && city.tz === "Europe/Andorra")
  },
  {
    country: {
      de: "Österreich",
      en: "Austria",
      fr: "Autriche"
    },
    zone: "Europe/Vienna",
    flag: "AT",
    cities: cityList.filter(city => city.country === "AT" && city.tz === "Europe/Vienna")
  },
  {
    country: {
      de: "Belarus",
      en: "Belarus",
      fr: "Bélarus"
    },
    zone: "Europe/Minsk",
    flag: "BY",
    cities: cityList.filter(city => city.country === "BY" && city.tz === "Europe/Minsk")
  },
  {
    country: {
      de: "Belgien",
      en: "Belgium",
      fr: "Belgique"
    },
    zone: "Europe/Brussels",
    flag: "BE",
    cities: cityList.filter(city => city.country === "BE" && city.tz === "Europe/Brussels")
  },
  {
    country: {
      de: "Bosnien und Herzegowina",
      en: "Bosnia and Herzegovina",
      fr: "Bosnie et Herzégovine"
    },
    zone: "Europe/Sarajevo",
    flag: "BA",
    cities: cityList.filter(city => city.country === "BA" && city.tz === "Europe/Sarajevo")
  },
  {
    country: {
      de: "Bulgarien",
      en: "Bulgaria",
      fr: "Bulgarie"
    },
    zone: "Europe/Sofia",
    flag: "BG",
    cities: cityList.filter(city => city.country === "BG" && city.tz === "Europe/Sofia")
  },
  {
    country: {
      de: "Kroatien",
      en: "Croatia",
      fr: "Croatie"
    },
    zone: "Europe/Zagreb",
    flag: "HR",
    cities: cityList.filter(city => city.country === "HR" && city.tz === "Europe/Zagreb")
  },
  {
    country: {
      de: "Zypern",
      en: "Cyprus",
      fr: "Chypre"
    },
    subdiv: [
      {
        title: {
          de: "Republik Zypern",
          en: "Republic of Cyprus",
          fr: "République de Chypre"
        }
      }
    ],
    zone: "Asia/Nicosia",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY" && city.tz === "Asia/Nicosia")
  },
  {
    country: {
      de: "Zypern",
      en: "Cyprus"
    },
    subdiv: [
      {
        title: {
          de: "Türkische Republik Nordzypern",
          en: "Turkish Republic of Northern Cyprus",
          fr: "République turque de Chypre du Nord"
        }
      }
    ],
    zone: "Asia/Famagusta",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY" && city.tz === "Asia/Famagusta")
  },
  {
    country: {
      de: "Tschechien",
      en: "Czechia",
      fr: "Tchéquie"
    },
    zone: "Europe/Prague",
    flag: "CZ",
    cities: cityList.filter(city => city.country === "CZ" && city.tz === "Europe/Prague")
  },
  {
    country: {
      de: "Dänemark",
      en: "Denmark",
      fr: "Danemark"
    },
    subdiv: [
      {title: "Hovedstaden"},
      {title: "Midtjylland"},
      {title: "Nordjylland"},
      {title: "Sjælland"},
      {title: "Syddanmark"},
    ],
    zone: "Europe/Copenhagen",
    flag: "DK",
    cities: cityList.filter(city => city.country === "DK" && city.tz === "Europe/Copenhagen")
  },
  {
    country: {
      de: "Estland",
      en: "Estonia",
      fr: "Estonie"
    },
    zone: "Europe/Tallinn",
    flag: "EE",
    cities: cityList.filter(city => city.country === "EE" && city.tz === "Europe/Tallinn")
  },
  {
    country: {
      de: "Färöer (Dänemark)",
      en: "Faroe Islands (Denmark)",
      fr: "Îles Féroé (Danemark)"
    },
    zone: "Atlantic/Faroe",
    flag: "FO",
    cities: cityList.filter(city => city.country === "FO" && city.tz === "Atlantic/Faroe")
  },
  {
    country: {
      de: "Finnland",
      en: "Finland",
      fr: "Finlande"
    },
    zone: "Europe/Helsinki",
    flag: "FI",
    cities: cityList.filter(city => city.country === "FI" && city.tz === "Europe/Helsinki")
  },
  {
    country: {
      de: "Frankreich",
      en: "France",
      fr: "France"
    },
    subdiv: [
      {title: "Auvergne-Rhône-Alpes"},
      {title: "Bourgogne-Franche-Comté"},
      {title: "Bretagne"},
      {title: "Centre-Val de Loire"},
      {title: "Corse"},
      {title: "Grand Est"},
      {title: "Hauts-de-France"},
      {title: "Île-de-France"},
      {title: "Normandie"},
      {title: "Nouvelle-Aquitaine"},
      {title: "Occitanie"},
      {title: "Pays de la Loire"},
      {title: "Provence-Alpes-Côte d'Azur"}
    ],
    zone: "Europe/Paris",
    flag: "FR",
    cities: cityList.filter(city => city.country === "FR" && city.tz === "Europe/Paris")
  },
  {
    country: {
      de: "Deutschland",
      en: "Germany",
      fr: "Allemagne"
    },
    zone: "Europe/Berlin",
    flag: "DE",
    cities: cityList.filter(city => city.country === "DE" && city.tz === "Europe/Berlin")
  },
  {
    country: {
      de: "Gibraltar (Vereinigtes Königreich)",
      en: "Gibraltar (United Kingdom)",
      fr: "Gibraltar (Royaume-Uni)"
    },
    zone: "Europe/Gibraltar",
    flag: "GI",
    cities: cityList.filter(city => city.country === "GI" && city.tz === "Europe/Gibraltar")
  },
  {
    country: {
      de: "Griechenland",
      en: "Greece",
      fr: "Grèce"
    },
    zone: "Europe/Athens",
    flag: "GR",
    cities: cityList.filter(city => city.country === "GR" && city.tz === "Europe/Athens")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)",
      fr: "Groenland (Danemark)"
    },
    subdiv: [
      {title: "Danmarkshavn"}
    ],
    zone: "America/Danmarkshavn",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Danmarkshavn")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)",
      fr: "Groenland (Danemark)"
    },
    subdiv: [
      {title: "Ittoqqortoormit"}, 
      {title: "Scoresbysund"}
    ],
    zone: "America/Scoresbysund",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Scoresbysund")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)",
      fr: "Groenland (Danemark)"
    },
    subdiv: [
      {title: "Thule"}, 
      {title: "Pituffik"}
    ],
    zone: "America/Thule",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Thule")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)",
      fr: "Groenland (Danemark)"
    },
    subdiv: [
      {
        title: {
          de: "Westgrönland",
          en: "Western Greenland",
          fr: "Groenland-Occidentale"
        }
      }
    ],
    zone: "America/Godthab",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Nuuk")
  },
  {
    country: {
      de: "Guernsey (Vereinigtes Königreich)",
      en: "Guernsey (United Kingdom)",
      fr: "Guernesey (Royaume-Uni)"
    },
    zone: "Europe/Guernsey",
    flag: "GG",
    cities: cityList.filter(city => city.country === "GG" && city.tz === "Europe/Guernsey")
  },
  {
    country: {
      de: "Ungarn",
      en: "Hungary",
      fr: "Hongrie"
    },
    zone: "Europe/Budapest",
    flag: "HU",
    cities: cityList.filter(city => city.country === "HU" && city.tz === "Europe/Budapest")
  },
  {
    country: {
      de: "Island",
      en: "Iceland",
      fr: "Islande"
    },
    zone: "Atlantic/Reykjavik",
    flag: "IS",
    cities: cityList.filter(city => city.country === "IS" && city.tz === "Atlantic/Reykjavik")
  },
  {
    country: {
      de: "Irland",
      en: "Ireland",
      fr: "Irlande"
    },
    zone: "Europe/Dublin",
    flag: "IE",
    cities: cityList.filter(city => city.country === "IE" && city.tz === "Europe/Dublin")
  },
  {
    country: {
      de: "Isle of Man (Vereinigtes Königreich)",
      en: "Isle of Man (United Kingdom)",
      fr: "Île de Man (Royaume-Uni)"
    },
    zone: "Europe/Isle_of_Man",
    flag: "IM",
    cities: cityList.filter(city => city.country === "IM" && city.tz === "Europe/Isle_of_Man")
  },
  {
    country: {
      de: "Italien",
      en: "Italy",
      fr: "Italie"
    },
    zone: "Europe/Rome",
    flag: "IT",
    cities: cityList.filter(city => city.country === "IT" && city.tz === "Europe/Rome")
  },
  {
    country: {
      de: "Jersey (Vereinigtes Königreich)",
      en: "Jersey (United Kingdom)",
      fr: "Jersey (Royaume-Uni)"
    },
    zone: "Europe/Jersey",
    flag: "JE",
    cities: cityList.filter(city => city.country === "JE" && city.tz === "Europe/Jersey")
  },
  {
    country: {
      de: "Kosovo",
      en: "Kosovo",
      fr: "Kosovo"
    },
    zone: "Europe/Belgrade",  // no explicit timezone for Kosovo/Pristina
    flag: "XK",
    cities: cityList.filter(city => city.country === "XK" && city.tz === "Europe/Belgrade")
  },
  {
    country: {
      de: "Lettland",
      en: "Latvia",
      fr: "Lettonie"
    },
    zone: "Europe/Riga",
    flag: "LV",
    cities: cityList.filter(city => city.country === "LV" && city.tz === "Europe/Riga")
  },
  {
    country: {
      de: "Liechtenstein",
      en: "Liechtenstein",
      fr: "Liechtenstein"
    },
    zone: "Europe/Vaduz",
    flag: "LI",
    cities: cityList.filter(city => city.country === "LI" && city.tz === "Europe/Vaduz")
  },
  {
    country: {
      de: "Litauen",
      en: "Lithuania",
      fr: "Lituanie"
    },
    zone: "Europe/Vilnius",
    flag: "LT",
    cities: cityList.filter(city => city.country === "LT" && city.tz === "Europe/Vilnius")
  },
  {
    country: {
      de: "Luxemburg",
      en: "Luxembourg",
      fr: "Luxembourg"
    },
    zone: "Europe/Luxembourg",
    flag: "LU",
    cities: cityList.filter(city => city.country === "LU" && city.tz === "Europe/Luxembourg")
  },
  {
    country: {
      de: "Malta",
      en: "Malta",
      fr: "Malte"
    },
    zone: "Europe/Malta",
    flag: "MT",
    cities: cityList.filter(city => city.country === "MT" && city.tz === "Europe/Malta")
  },
  {
    country: {
      de: "Moldau",
      en: "Moldova",
      fr: "Moldavie"
    },
    subdiv: [
      {title: "Bălți"}, 
      {title: "Chişinău"}, 
      {title: "Comrat"}
    ],
    zone: "Europe/Chisinau",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD" && city.tz === "Europe/Chisinau")
  },
  {
    country: {
      de: "Moldau",
      en: "Moldova",
      fr: "Moldavie"
    },
    subdiv: [
      {
        title: "Bender", 
        extra: {
          de: "(unter russischer/transnistrischer Kontrolle)",
          en: "(controlled by Russia/Transnistria)",
          fr: "(controllé par la Russie/Transnistrie)"
        }
      }, 
      {
        title: "Tiraspol", 
        extra: {
          de: "(unter russischer/transnistrischer Kontrolle)",
          en: "(controlled by Russia/Transnistria)",
          fr: "(controllé par la Russie/Transnistrie)"
        }
      }
    ],
    zone: "Europe/Tiraspol",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD" && city.tz === "Europe/Tiraspol")
  },
  {
    country: {
      de: "Monaco",
      en: "Monaco",
      fr: "Monaco"
    },
    zone: "Europe/Monaco",
    flag: "MC",
    cities: cityList.filter(city => city.country === "MC" && city.tz === "Europe/Monaco")
  },
  {
    country: {
      de: "Montenegro",
      en: "Montenegro",
      fr: "Monténégro"
    },
    zone: "Europe/Podgorica",
    flag: "ME",
    cities: cityList.filter(city => city.country === "ME" && city.tz === "Europe/Podgorica")
  },
  {
    country: {
      de: "Niederlande",
      en: "Netherlands",
      fr: "Pays-Bas"
    },
    zone: "Europe/Amsterdam",
    flag: "NL",
    cities: cityList.filter(city => city.country === "NL" && city.tz === "Europe/Amsterdam")
  },
  {
    country: {
      de: "Nordmazedonien",
      en: "North Macedonia",
      fr: "Macédoine du Nord"
    },
    zone: "Europe/Skopje",
    flag: "MK",
    cities: cityList.filter(city => city.country === "MK" && city.tz === "Europe/Skopje")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway",
      fr: "Norvège"
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
    zone: "Europe/Oslo",
    flag: "NO",
    cities: cityList.filter(city => city.country === "NO" && city.tz === "Europe/Oslo")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway",
      fr: "Norvège"
    },
    subdiv: [
      {title: "Jan Mayen"}
    ],
    zone: "Atlantic/Jan_Mayen",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SV" && city.tz === "Atlantic/Jan_Mayen")
  },
  {
    country: {
      de: "Norwegen",
      en: "Norway",
      fr: "Norvège"
    },
    subdiv: [
      {title: "Svalbard"}
    ],
    zone: "Arctic/Longyearbyen",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SV" && city.tz === "Arctic/Longyearbyen")
  },
  {
    country: {
      de: "Polen",
      en: "Poland",
      fr: "Pologne"
    },
    zone: "Europe/Warsaw",
    flag: "PL",
    cities: cityList.filter(city => city.country === "PL" && city.tz === "Europe/Warsaw")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal",
      fr: "Portugal"
    },
    subdiv: [
      {
        title: {
          de: "Region Alentejo",
          en: "Alentejo Region",
          fr: "Alentejo"
        }
      },
      {
        title: "Algarve"
      },
      {
        title: {
          de: "Zentralportugal",
          en: "Central Portugal",
          fr: "Centre"
        }
      },
      {
        title: {
          de: "Metropolregion Lissabon",
          en: "Lisbon Region",
          fr: "Lisbonne"
        }
      },
      {
        title: {
          de: "Nordportugal",
          en: "Northern Portugal",
          fr: "Nord"
        }
      },
    ],
    zone: "Europe/Lisbon",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Europe/Lisbon")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal",
      fr: "Portugal"
    },
    subdiv: [
      {
        title: {
          de: "Madeira",
          en: "Madeira",
          fr: "Madère"
        }
      }
    ],
    zone: "Atlantic/Madeira",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Madeira")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal",
      fr: "Portugal"
    },
    subdiv: [
      {
        title: {
          de: "Azoren",
          en: "Azores",
          fr: "Açores"
        }
      }
    ],
    zone: "Atlantic/Azores",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Azores")
  },
  {
    country: {
      de: "Rumänien",
      en: "Romania",
      fr: "Roumanie"
    },
    zone: "Europe/Bucharest",
    flag: "RO",
    cities: cityList.filter(city => city.country === "RO" && city.tz === "Europe/Bucharest")
  },
  {
    country: {
      de: "San Marino",
      en: "San Marino",
      fr: "Saint-Marin"
    },
    zone: "Europe/San_Marino",
    flag: "SM",
    cities: cityList.filter(city => city.country === "SM" && city.tz === "Europe/San_Marino")
  },
  {
    country: {
      de: "Serbien",
      en: "Serbia",
      fr: "Serbie"
    },
    zone: "Europe/Belgrade",
    flag: "RS",
    cities: cityList.filter(city => city.country === "RS" && city.tz === "Europe/Belgrade")
  },
  {
    country: {
      de: "Slowakei",
      en: "Slovakia",
      fr: "Slovaquie"
    },
    zone: "Europe/Bratislava",
    flag: "SK",
    cities: cityList.filter(city => city.country === "SK" && city.tz === "Europe/Bratislava")
  },
  {
    country: {
      de: "Slowenien",
      en: "Slovenia",
      fr: "Slovénie"
    },
    zone: "Europe/Ljubljana",
    flag: "SI"
  },
  {
    country: {
      de: "Spanien",
      en: "Spain",
      fr: "Espagne"
    },
    subdiv: [
      {
        title: {
          de: "Andalusien",
          en: "Andalusia",
          fr: "Andalousie"
        }
      },
      {title: "Aragon"},
      {
        title: {
          de: "Balearische Inseln",
          en: "Balearic Islands",
          fr: "Îles Baléares"
        }
      },
      {
        title: {
          de: "Baskenland",
          en: "Basque Country",
          fr: "Pays Basque"
        }
      },
      {
        title: {
          de: "Kantabrien",
          en: "Cantabria",
          fr: "Cantabrie"
        }
      },
      {
        title: {
          de: "Kastilien und León",
          en: "Castile and León",
          fr: "Castille-et-León"
        }
      },
      {
        title: {
          de: "Kastilien-La Mancha",
          en: "Castilla-La Mancha",
          fr: "Castille-La Manche"
        }
      },
      {
        title: {
          de: "Katalonien",
          en: "Catalonia",
          fr: "Catalogne"
        }
      },
      {
        title: {
          de: "Navarra",
          en: "Navarre",
          fr: "Navarre"
        }
      },
      {
        title: {
          de: "Autonome Gemeinschaft Madrid",
          en: "Community of Madrid",
          fr: "Communauté de Madrid"
        }
      },
      {
        title: {
          de: "Extremadura",
          en: "Extremadura",
          fr: "Extrémadure"
        }
      },
      {
        title: {
          de: "Galicien",
          en: "Galicia",
          fr: "Galice"
        }
      },
      {title: "La Rioja"},
      {
        title: {
          de: "Asturien",
          en: "Asturias",
          fr: "Asturies"
        }
      },
      {
        title: {
          de: "Murcia",
          en: "Murcia",
          fr: "Murcie"
        }
      },
      {
        title: {
          de: "Valencianische Gemeinschaft",
          en: "Valencian Community",
          fr: "Communauté valencienne"
        }
      },
    ],
    zone: "Europe/Madrid",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Europe/Madrid")
  },
  {
    country: {
      de: "Spanien",
      en: "Spain",
      fr: "Espagne"
    },
    subdiv: [
      {
        title: {
          de: "Kanarische Inseln",
          en: "Canary Islands",
          fr: "Îles Canaries"
        }
      }
    ],
    zone: "Atlantic/Canary",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Atlantic/Canary")
  },
  {
    country: {
      de: "Schweden",
      en: "Sweden",
      fr: "Suède"
    },
    zone: "Europe/Stockholm",
    flag: "SE",
    cities: cityList.filter(city => city.country === "SE" && city.tz === "Europe/Stockholm")
  },
  {
    country: {
      de: "Schweiz",
      en: "Switzerland",
      fr: "Suisse"
    },
    zone: "Europe/Zurich",
    flag: "CH",
    cities: cityList.filter(city => city.country === "CH" && city.tz === "Europe/Zurich")
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom",
      fr: "Royaume-Uni"
    },
    subdiv: [
      {
        title: {
          de: "England",
          en: "England",
          fr: "Angleterre"
        }
      }, 
      {
        title: {
          de: "Schottland",
          en: "Scotland",
          fr: "Écosse"
        }
      }, 
      {
        title: {
          de: "Wales",
          en: "Wales",
          fr: "Pays de Galles"
        }
      }
    ],
    zone: "Europe/London",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.tz === "Europe/London")
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom",
      fr: "Royaume-Uni"
    },
    subdiv: [
      {
        title: {
          de: "Nordirland",
          en: "Northern Ireland",
          fr: "Irlande du Nord"
        }
      }
    ],
    zone: "Europe/Belfast",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.tz === "Europe/Belfast")
  },
  {
    country: {
      de: "Ukraine",
      en: "Ukraine",
      fr: "Ukraine"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Tscherkassy",
          en: "Cherkasy Oblast",
          fr: "Oblast de Tcherkassy"
        }
      }, // 01
      {
        title: {
          de: "Oblast Tschernihiw",
          en: "Chernihiv Oblast",
          fr: "Oblast de Tchernihiv"
        }
      }, // 02
      {
        title: {
          de: "Oblast Tscherniwzi",
          en: "Chernivtsi Oblast",
          fr: "Oblast de Tchernivtsi"
        }
      }, // 03
      {
        title: {
          de: "Oblast Dnipropetrowsk",
          en: "Dnipro Oblast",
          fr: "Oblast de Dnipropetrovsk"
        }
      }, // 04
      {
        title: {
          de: "Oblast Donezk",
          en: "Donetsk Oblast",
          fr: "Oblast de Donetsk"
        }, 
        extra: {
          de: "(nur teilweise unter ukrainischer Kontrolle)",
          en: "(only partly controlled by Ukraine)",
          fr: "(en partie contrôlé par l'Ukraine)"
        }
      }, // 05
      {
        title: {
          de: "Oblast Iwano-Frankiwsk",
          en: "Ivano-Frankivsk Oblast",
          fr: "Oblast d'Ivano-Frankivsk"
        }
      }, // 06
      {
        title: {
          de: "Oblast Charkiw",
          en: "Kharkiv Oblast",
          fr: "Oblast de Kharkiv"
        }
      }, // 07
      {
        title: {
          de: "Oblast Cherson",
          en: "Kherson Oblast",
          fr: "Oblast de Kherson"
        },
        extra: {
          de: "(nur teilweise unter ukrainischer Kontrolle)",
          en: "(only partly controlled by Ukraine)",
          fr: "(en partie contrôlé par l'Ukraine)"
        }
      }, // 08
      {
        title: {
          de: "Oblast Chmelnyzkyj",
          en: "Khmelnytskyy Oblast",
          fr: "Oblast de Khmelnytskyï"
        }
      }, // 09
      {
        title: {
          de: "Oblast Kirovohrad",
          en: "Kirovohrad Oblast",
          fr: "Oblast de Kirovohrad"
        }
      }, // 10
      {
        title: {
          de: "Kyjiw",
          en: "Kyiv",
          fr: "Kyiv"
        }
      }, // 12
      {
        title: {
          de: "Oblast Kijiw",
          en: "Kyiv Oblast",
          fr: "Oblast de Kyiv"
        }
      }, // 13
      {
        title: {
          de: "Oblast Luhansk",
          en: "Luhansk Oblast",
          fr: "Oblast de Louhansk"
        }, 
        extra: {
          de: "(nur teilweise unter ukrainischer Kontrolle)",
          en: "(only partly controlled by Ukraine)",
          fr: "(en partie contrôlé par l'Ukraine)"
        }
      }, // 14
      {
        title: {
          de: "Oblast Lwiw",
          en: "Lviv Oblast",
          fr: "Oblast de Lviv"
        }
      }, // 15
      {
        title: {
          de: "Oblast Mykolajiw",
          en: "Mykolayiv Oblast",
          fr: "Oblast de Mykolaïv"
        }
      }, // 16
      {
        title: {
          de: "Oblast Odessa",
          en: "Odesa Oblast",
          fr: "Oblast d'Odessa"
        }
      }, // 17
      {
        title: {
          de: "Oblast Poltawa",
          en: "Poltava Oblast",
          fr: "Oblast de Poltava"
        }
      }, // 18
      {
        title: {
          de: "Oblast Riwne",
          en: "Rivne Oblast",
          fr: "Oblast de Rivne"
        }
      }, // 19
      {
        title: {
          de: "Oblast Sumy",
          en: "Sumy Oblast",
          fr: "Oblast de Soumy"
        }
      }, // 21
      {
        title: {
          de: "Oblast Ternopil",
          en: "Ternopil Oblast",
          fr: "Oblast de Ternopil"
        }
      }, // 22
      {
        title: {
          de: "Oblast Winnyzja",
          en: "Vinnitsya Oblast",
          fr: "Oblast de Vinnytsia"
        }
      }, // 23
      {
        title: {
          de: "Oblast Wolyn",
          en: "Volyn Oblast",
          fr: "Oblast de Volhynie"
        }
      }, // 24
      {
        title: {
          de: "Oblast Transkarpatien",
          en: "Zakarpattya Oblast",
          fr: "Oblast de Transcarpatie"
        }
      }, // 25
      {
        title: {
          de: "Oblast Saporischschja",
          en: "Zaporizhzhya Oblast",
          fr: "Oblast de Zaporijjia"
        },
        extra: {
          de: "(nur teilweise unter ukrainischer Kontrolle)",
          en: "(only partly controlled by Ukraine)",
          fr: "(en partie contrôlé par l'Ukraine)"
        }
      }, // 26
      {
        title: {
          de: "Oblast Schytomyr",
          en: "Zhytomyr Oblast",
          fr: "Oblast de Jytomyr"
        }
      }, // 27
    ],
    zone: "Europe/Kiev",
    flag: "UA",
    cities: cityList.filter(city => {
      if(city.country === "UA") {
        if(city.tz === "Europe/Kiev") {
          switch(city.adminCode) {
            case "01":
            case "02":
            case "03":
            case "04":
            case "06":
            case "07":
            case "08":
            case "09":
            case "10":
            case "12":
            case "13":
            case "15":
            case "16":
            case "17":
            case "18":
            case "19":
            case "21":
            case "22":
            case "23":
            case "24":
            case "25":
            case "26":
            case "27":
              return true
            case "05":
              if(city.asciiname === "Donetsk") {
                return false
              } else {
                return true
              }
            case "14":
              return false
            default:
              return true
          }
        } else {
          return false
        }
      } else {
        return false
      }
    })
  },
  {
    country: {
      de: "Ukraine",
      en: "Ukraine",
      fr: "Ukraine"
    },
    subdiv: [
      {
        title: {
          de: "Sewastopol",
          en: "Sevastopol",
          fr: "Sébastopol"
        }, 
        extra: {
          de: "(unter russischer Kontrolle)",
          en: "(controlled by Russia)",
          fr: "(contrôlé par la Russie)"
        }
      }, 
      {
        title: {
          de: "Autonome Republik Krim",
          en: "Crimea Autonomous Republic",
          fr: "République autonome de Crimée"
        }, 
        extra: {
          de: "(unter russischer Kontrolle)",
          en: "(controlled by Russia)",
          fr: "(contrôlé par la Russie)"
        }
      }
    ],
    zone: "Europe/Simferopol",
    flag: "UA",
    cities: cityList.filter(city => city.country === "UA" && city.tz === "Europe/Simferopol")
  },
  {
    country: {
      de: "Ukraine",
      en: "Ukraine"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Donezk",
          en: "Donetsk Oblast",
          fr: "Oblast de Donetsk"
        }, 
        extra: {
          de: "(teils unter der Kontrolle Russlands)",
          en: "(partly controlled by Russia)",
          fr: "(en partie contrôlé par la Russie)"
        }
      }, // 05
      {
        title: {
          de: "Oblast Cherson",
          en: "Kherson Oblast",
          fr: "Oblast de Kherson"
        },
        extra: {
          de: "(teils unter der Kontrolle Russlands)",
          en: "(partly controlled by Russia)",
          fr: "(en partie contrôlé par la Russie)"
        }
      }, // 08
      {
        title: {
          de: "Oblast Luhansk",
          en: "Luhansk Oblast",
          fr: "Oblast de Louhansk"
        }, 
        extra: {
          de: "(teils unter der Kontrolle Russlands)",
          en: "(partly controlled by Russia)",
          fr: "(en partie contrôlé par la Russie)"
        }
      }, // 14
      {
        title: {
          de: "Oblast Saporischschja",
          en: "Zaporizhzhya Oblast",
          fr: "Oblast de Zaporijjia"
        },
        extra: {
          de: "(teils unter der Kontrolle Russlands)",
          en: "(partly controlled by Russia)",
          fr: "(en partie contrôlé par la Russie)"
        }
      }, // 26
    ],
    zone: "Europe/Moscow",
    flag: "UA",
    cities: cityList.filter(city => {
      if(city.country === "UA") {
        switch(city.adminCode) {
          case "14":
            return true
          case "05":
            if(city.asciiname === "Donetsk") {
              return true
            } else {
              return false
            }
          default:
            return false
        }      
      } else {
        return false
      }
    })
  },
  {
    country: {
      de: "Vatikanstadt",
      en: "Vatican City",
      fr: "Vatican"
    },
    zone: "Europe/Vatican",
    flag: "VA",
    cities: cityList.filter(city => city.country === "VA" && city.tz === "Europe/Vatican")
  }
]

export default countryList