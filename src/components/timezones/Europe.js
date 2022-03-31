import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Åland (Finnland)",
      en: "Åland (Finland)"
    },
    zone: "Europe/Mariehamn",
    flag: "AX",
    cities: cityList.filter(city => city.country === "AX" && city.tz === "Europe/Mariehamn")
  },
  {
    country: {
      de: "Albanien",
      en: "Albania"
    },
    zone: "Europe/Tirane",
    flag: "AL",
    cities: cityList.filter(city => city.country === "AL" && city.tz === "Europe/Tirane")
  },
  {
    country: {
      de: "Andorra",
      en: "Andorra"
    },
    zone: "Europe/Andorra",
    flag: "AD",
    cities: cityList.filter(city => city.country === "AD" && city.tz === "Europe/Andorra")
  },
  {
    country: {
      de: "Österreich",
      en: "Austria"
    },
    zone: "Europe/Vienna",
    flag: "AT",
    cities: cityList.filter(city => city.country === "AT" && city.tz === "Europe/Vienna")
  },
  {
    country: {
      de: "Belarus",
      en: "Belarus"
    },
    zone: "Europe/Minsk",
    flag: "BY",
    cities: cityList.filter(city => city.country === "BY" && city.tz === "Europe/Minsk")
  },
  {
    country: {
      de: "Belgien",
      en: "Belgium"
    },
    zone: "Europe/Brussels",
    flag: "BE",
    cities: cityList.filter(city => city.country === "BE" && city.tz === "Europe/Brussels")
  },
  {
    country: {
      de: "Bosnien und Herzegowina",
      en: "Bosnia and Herzegovina"
    },
    zone: "Europe/Sarajevo",
    flag: "BA",
    cities: cityList.filter(city => city.country === "BA" && city.tz === "Europe/Sarajevo")
  },
  {
    country: {
      de: "Bulgarien",
      en: "Bulgaria"
    },
    zone: "Europe/Sofia",
    flag: "BG",
    cities: cityList.filter(city => city.country === "BG" && city.tz === "Europe/Sofia")
  },
  {
    country: {
      de: "Kroatien",
      en: "Croatia"
    },
    zone: "Europe/Zagreb",
    flag: "HR",
    cities: cityList.filter(city => city.country === "HR" && city.tz === "Europe/Zagreb")
  },
  {
    country: {
      de: "Zypern",
      en: "Cyprus"
    },
    subdiv: [
      {title: "Republic of Cyprus"}
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
      {title: "Turkish Republic of Northern Cyprus"}
    ],
    zone: "Asia/Famagusta",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY" && city.tz === "Asia/Famagusta")
  },
  {
    country: {
      de: "Tschechien",
      en: "Czechia"
    },
    zone: "Europe/Prague",
    flag: "CZ",
    cities: cityList.filter(city => city.country === "CZ" && city.tz === "Europe/Prague")
  },
  {
    country: {
      de: "Dänemark",
      en: "Denmark"
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
      en: "Estonia"
    },
    zone: "Europe/Tallinn",
    flag: "EE",
    cities: cityList.filter(city => city.country === "EE" && city.tz === "Europe/Tallinn")
  },
  {
    country: {
      de: "Färöer (Dänemark)",
      en: "Faroe Islands (Denmark)"
    },
    zone: "Atlantic/Faroe",
    flag: "FO",
    cities: cityList.filter(city => city.country === "FO" && city.tz === "Atlantic/Faroe")
  },
  {
    country: {
      de: "Finnland",
      en: "Finland"
    },
    zone: "Europe/Helsinki",
    flag: "FI",
    cities: cityList.filter(city => city.country === "FI" && city.tz === "Europe/Helsinki")
  },
  {
    country: {
      de: "Frankreich",
      en: "France"
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
      en: "Germany"
    },
    zone: "Europe/Berlin",
    flag: "DE",
    cities: cityList.filter(city => city.country === "DE" && city.tz === "Europe/Berlin")
  },
  {
    country: {
      de: "Gibraltar (Vereinigtes Königreich)",
      en: "Gibraltar (United Kingdom)"
    },
    zone: "Europe/Gibraltar",
    flag: "GI",
    cities: cityList.filter(city => city.country === "GI" && city.tz === "Europe/Gibraltar")
  },
  {
    country: {
      de: "Griechenland",
      en: "Greece"
    },
    zone: "Europe/Athens",
    flag: "GR",
    cities: cityList.filter(city => city.country === "GR" && city.tz === "Europe/Athens")
  },
  {
    country: {
      de: "Grönland (Dänemark)",
      en: "Greenland (Denmark)"
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
      en: "Greenland (Denmark)"
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
      en: "Greenland (Denmark)"
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
      en: "Greenland (Denmark)"
    },
    subdiv: [
      {title: "Western Greenland"}
    ],
    zone: "America/Godthab",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Nuuk")
  },
  {
    country: {
      de: "Guernsey (Vereinigtes Königreich)",
      en: "Guernsey (United Kingdom)"
    },
    zone: "Europe/Guernsey",
    flag: "GG",
    cities: cityList.filter(city => city.country === "GG" && city.tz === "Europe/Guernsey")
  },
  {
    country: {
      de: "Ungarn",
      en: "Hungary"
    },
    zone: "Europe/Budapest",
    flag: "HU",
    cities: cityList.filter(city => city.country === "HU" && city.tz === "Europe/Budapest")
  },
  {
    country: {
      de: "Island",
      en: "Iceland"
    },
    zone: "Atlantic/Reykjavik",
    flag: "IS",
    cities: cityList.filter(city => city.country === "IS" && city.tz === "Atlantic/Reykjavik")
  },
  {
    country: {
      de: "Irland",
      en: "Ireland"
    },
    zone: "Europe/Dublin",
    flag: "IE",
    cities: cityList.filter(city => city.country === "IE" && city.tz === "Europe/Dublin")
  },
  {
    country: {
      de: "Isle of Man (Vereinigtes Königreich)",
      en: "Isle of Man (United Kingdom)"
    },
    zone: "Europe/Isle_of_Man",
    flag: "IM",
    cities: cityList.filter(city => city.country === "IM" && city.tz === "Europe/Isle_of_Man")
  },
  {
    country: {
      de: "Italien",
      en: "Italy"
    },
    zone: "Europe/Rome",
    flag: "IT",
    cities: cityList.filter(city => city.country === "IT" && city.tz === "Europe/Rome")
  },
  {
    country: {
      de: "Jersey (Vereinigtes Königreich)",
      en: "Jersey (United Kingdom)"
    },
    zone: "Europe/Jersey",
    flag: "JE",
    cities: cityList.filter(city => city.country === "JE" && city.tz === "Europe/Jersey")
  },
  {
    country: {
      de: "Kosovo",
      en: "Kosovo"
    },
    zone: "Europe/Belgrade",  // no explicit timezone for Kosovo/Pristina
    flag: "XK",
    cities: cityList.filter(city => city.country === "XK" && city.tz === "Europe/Belgrade")
  },
  {
    country: {
      de: "Lettland",
      en: "Latvia"
    },
    zone: "Europe/Riga",
    flag: "LV",
    cities: cityList.filter(city => city.country === "LV" && city.tz === "Europe/Riga")
  },
  {
    country: {
      de: "Liechtenstein",
      en: "Liechtenstein"
    },
    zone: "Europe/Vaduz",
    flag: "LI",
    cities: cityList.filter(city => city.country === "LI" && city.tz === "Europe/Vaduz")
  },
  {
    country: {
      de: "Litauen",
      en: "Lithuania"
    },
    zone: "Europe/Vilnius",
    flag: "LT",
    cities: cityList.filter(city => city.country === "LT" && city.tz === "Europe/Vilnius")
  },
  {
    country: {
      de: "Luxemburg",
      en: "Luxembourg"
    },
    zone: "Europe/Luxembourg",
    flag: "LU",
    cities: cityList.filter(city => city.country === "LU" && city.tz === "Europe/Luxembourg")
  },
  {
    country: {
      de: "Malta",
      en: "Malta"
    },
    zone: "Europe/Malta",
    flag: "MT",
    cities: cityList.filter(city => city.country === "MT" && city.tz === "Europe/Malta")
  },
  {
    country: {
      de: "Moldau",
      en: "Moldova"
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
      en: "Moldova"
    },
    subdiv: [
      {title: "Bender", extra: "(controlled by Russia/Transnistria)"}, 
      {title: "Tiraspol", extra: "(controlled by Russia/Transnistria)"}
    ],
    zone: "Europe/Tiraspol",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD" && city.tz === "Europe/Tiraspol")
  },
  {
    country: {
      de: "Monaco",
      en: "Monaco"
    },
    zone: "Europe/Monaco",
    flag: "MC",
    cities: cityList.filter(city => city.country === "MC" && city.tz === "Europe/Monaco")
  },
  {
    country: {
      de: "Montenegro",
      en: "Montenegro"
    },
    zone: "Europe/Podgorica",
    flag: "ME",
    cities: cityList.filter(city => city.country === "ME" && city.tz === "Europe/Podgorica")
  },
  {
    country: {
      de: "Niederlande",
      en: "Netherlands"
    },
    zone: "Europe/Amsterdam",
    flag: "NL",
    cities: cityList.filter(city => city.country === "NL" && city.tz === "Europe/Amsterdam")
  },
  {
    country: {
      de: "Nordmazedonien",
      en: "North Macedonia"
    },
    zone: "Europe/Skopje",
    flag: "MK",
    cities: cityList.filter(city => city.country === "MK" && city.tz === "Europe/Skopje")
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
    zone: "Europe/Oslo",
    flag: "NO",
    cities: cityList.filter(city => city.country === "NO" && city.tz === "Europe/Oslo")
  },
  {
    country: {
      de: "Svalbard und Jan Mayen (Norwegen)",
      en: "Svalbard and Jan Mayen (Norway)"
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
      de: "Svalbard und Jan Mayen (Norwegen)",
      en: "Svalbard and Jan Mayen (Norway)"
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
      en: "Poland"
    },
    zone: "Europe/Warsaw",
    flag: "PL",
    cities: cityList.filter(city => city.country === "PL" && city.tz === "Europe/Warsaw")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {title: "Alentejo Region"},
      {title: "Algarve"},
      {title: "Central Portugal"},
      {title: "Lisboa Region"},
      {title: "Northern Portugal"},
    ],
    zone: "Europe/Lisbon",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Europe/Lisbon")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {title: "Madeira"}
    ],
    zone: "Atlantic/Madeira",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Madeira")
  },
  {
    country: {
      de: "Portugal",
      en: "Portugal"
    },
    subdiv: [
      {title: "Azores"}
    ],
    zone: "Atlantic/Azores",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Azores")
  },
  {
    country: {
      de: "Rumänien",
      en: "Romania"
    },
    zone: "Europe/Bucharest",
    flag: "RO",
    cities: cityList.filter(city => city.country === "RO" && city.tz === "Europe/Bucharest")
  },
  {
    country: {
      de: "San Marino",
      en: "San Marino"
    },
    zone: "Europe/San_Marino",
    flag: "SM",
    cities: cityList.filter(city => city.country === "SM" && city.tz === "Europe/San_Marino")
  },
  {
    country: {
      de: "Serbien",
      en: "Serbia"
    },
    zone: "Europe/Belgrade",
    flag: "RS",
    cities: cityList.filter(city => city.country === "RS" && city.tz === "Europe/Belgrade")
  },
  {
    country: {
      de: "Slowakei",
      en: "Slovakia"
    },
    zone: "Europe/Bratislava",
    flag: "SK",
    cities: cityList.filter(city => city.country === "SK" && city.tz === "Europe/Bratislava")
  },
  {
    country: {
      de: "Slowenien",
      en: "Slovenia"
    },
    zone: "Europe/Ljubljana",
    flag: "SI"
  },
  {
    country: {
      de: "Spanien",
      en: "Spain"
    },
    subdiv: [
      {title: "Andalusia"},
      {title: "Aragon"},
      {title: "Balearic Islands"},
      {title: "Basque Country"},
      {title: "Cantabria"},
      {title: "Castile and León"},
      {title: "Castilla-La Mancha"},
      {title: "Catalonia"},
      {title: "Chartered Community of Navarre"},
      {title: "Community of Madrid"},
      {title: "Extremadura"},
      {title: "Galicia"},
      {title: "La Rioja"},
      {title: "Principality of Asturias"},
      {title: "Region of Murcia"},
      {title: "Valencian Community"},
    ],
    zone: "Europe/Madrid",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Europe/Madrid")
  },
  {
    country: {
      de: "Spanien",
      en: "Spain"
    },
    subdiv: [
      {title: "Canary Islands"}
    ],
    zone: "Atlantic/Canary",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Atlantic/Canary")
  },
  {
    country: {
      de: "Schweden",
      en: "Sweden"
    },
    zone: "Europe/Stockholm",
    flag: "SE",
    cities: cityList.filter(city => city.country === "SE" && city.tz === "Europe/Stockholm")
  },
  {
    country: {
      de: "Schweiz",
      en: "Switzerland"
    },
    zone: "Europe/Zurich",
    flag: "CH",
    cities: cityList.filter(city => city.country === "CH" && city.tz === "Europe/Zurich")
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom"
    },
    subdiv: [
      {title: "England"}, 
      {title: "Scotland"}, 
      {title: "Wales"}
    ],
    zone: "Europe/London",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.tz === "Europe/London")
  },
  {
    country: {
      de: "Vereinigtes Königreich",
      en: "United Kingdom"
    },
    subdiv: [
      {title: "Northern Ireland"}
    ],
    zone: "Europe/Belfast",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.tz === "Europe/Belfast")
  },
  {
    country: {
      de: "Ukraine",
      en: "Ukraine"
    },
    subdiv: [
      {title: "Cherkasy Oblast"}, // 01
      {title: "Chernihiv Oblast"}, // 02
      {title: "Chernivtsi Oblast"}, // 03
      {title: "Dnipro Oblast"}, // 04
      {title: "Donetsk Oblast", extra: "(only partly controlled by Ukraine)"}, // 05
      {title: "Ivano-Frankivsk Oblast"}, // 06
      {title: "Kharkiv Oblast"}, // 07
      {title: "Kherson Oblast"}, // 08
      {title: "Khmelnytskyy Oblast"}, // 09
      {title: "Kirovohrad Oblast"}, // 10
      {title: "Kyyiv"}, // 12
      {title: "Kyiv Oblast"}, // 13
      {title: "Luhansk Oblast", extra: "(only partly controlled by Ukraine)"}, // 14
      {title: "Lviv Oblast"}, // 15
      {title: "Mykolayiv Oblast"}, // 16
      {title: "Odesa Oblast"}, // 17
      {title: "Poltava Oblast"}, // 18
      {title: "Rivne Oblast"}, // 19
      {title: "Sumy Oblast"}, // 21
      {title: "Ternopil Oblast"}, // 22
      {title: "Vinnitsya Oblast"}, // 23
      {title: "Volyn Oblast"}, // 24
      {title: "Zakarpattya Oblast"}, // 25
      {title: "Zaporizhzhya Oblast"}, // 26
      {title: "Zhytomyr Oblast"}, // 27
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
      en: "Ukraine"
    },
    subdiv: [
      {title: "Sevastopol", extra: "(controlled by Russia)"}, 
      {title: "Crimea Autonomous Republic", extra: "(controlled by Russia)"}
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
      {title: "Donetsk Oblast", extra: "(partly controlled by Russia/Donetsk People's Republic)"}, // 05
      {title: "Luhansk Oblast", extra: "(partly controlled by Russia/Luhansk People's Republic)"}, // 14
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
      en: "Vatican City"
    },
    zone: "Europe/Vatican",
    flag: "VA",
    cities: cityList.filter(city => city.country === "VA" && city.tz === "Europe/Vatican")
  }
]

export default countryList