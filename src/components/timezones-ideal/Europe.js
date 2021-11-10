import cityList from "./cityList"

export default [
  {
    country: "Åland (Finland)",
    zone: "Etc/GMT-2",
    flag: "AX",
    cities: cityList.filter(city => city.country === "AX")
  },
  {
    country: "Albania",
    zone: "Etc/GMT-1",
    flag: "AL",
    cities: cityList.filter(city => city.country === "AL")
  },
  {
    country: "Andorra",
    zone: "Etc/GMT+0",
    flag: "AD",
    cities: cityList.filter(city => city.country === "AD")
  },
  {
    country: "Austria",
    zone: "Etc/GMT-1",
    flag: "AT",
    cities: cityList.filter(city => city.country === "AT")
  },
  {
    country: "Belarus",
    zone: "Etc/GMT-2",
    flag: "BY",
    cities: cityList.filter(city => city.country === "BY")
  },
  {
    country: "Belgium",
    zone: "Etc/GMT+0",
    flag: "BE",
    cities: cityList.filter(city => city.country === "BE")
  },
  {
    country: "Bosnia and Herzegovina",
    zone: "Etc/GMT-1",
    flag: "BA",
    cities: cityList.filter(city => city.country === "BA")
  },
  {
    country: "Bulgaria",
    zone: "Etc/GMT-2",
    flag: "BG",
    cities: cityList.filter(city => city.country === "BG")
  },
  {
    country: "Croatia",
    zone: "Etc/GMT-1",
    flag: "HR",
    cities: cityList.filter(city => city.country === "HR")
  },
  {
    country: "Cyprus",
    zone: "Etc/GMT-2",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY")
  },
  {
    country: "Czechia",
    zone: "Etc/GMT-1",
    flag: "CZ",
    cities: cityList.filter(city => city.country === "CZ")
  },
  {
    country: "Denmark",
    zone: "Etc/GMT-1",
    flag: "DK",
    cities: cityList.filter(city => city.country === "DK")
  },
  {
    country: "Estonia",
    zone: "Etc/GMT-2",
    flag: "EE",
    cities: cityList.filter(city => city.country === "EE")
  },
  {
    country: "Faroe Islands (Denmark)",
    zone: "Etc/GMT+0",
    flag: "FO",
    cities: cityList.filter(city => city.country === "FO")
  },
  {
    country: "Finland",
    zone: "Etc/GMT-2",
    flag: "FI",
    cities: cityList.filter(city => city.country === "FI")
  },
  {
    country: "France",
    zone: "Etc/GMT+0",
    flag: "FR",
    cities: cityList.filter(city => city.country === "FR")
  },
  {
    country: "Germany",
    zone: "Etc/GMT-1",
    flag: "DE",
    cities: cityList.filter(city => city.country === "DE")
  },
  {
    country: "Gibraltar (United Kingdom)",
    zone: "Etc/GMT+0",
    flag: "GI",
    cities: cityList.filter(city => city.country === "GI")
  },
  {
    country: "Greece",
    subdiv: [
      {title: "Epirus and Western Macedonia"}, // ESYE21, ESYE13
      {title: "Peloponnese, Western Greece and the Ionian"}, // ESYE25, ESYE23, ESYE22
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
    country: "Greece",
    subdiv: [
      {title: "Aegean"}, // ESYE41, ESYE42
      {title: "Attica"}, // ESYE31
      {title: "Crete"}, // ESYE43
      {title: "Macedonia and Thrace"}, // ESYE11, ESYE12
      {title: "Thessaly and Central Greece"}, // ESYE14, ESYE24
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
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Danmarkshavn"}
    ],
    zone: "Etc/GMT+1",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Danmarkshavn")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Ittoqqortoormit"}, 
      {title: "Scoresbysund"}
    ],
    zone: "Etc/GMT+1",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Scoresbysund")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Thule"}, 
      {title: "Pituffik"}
    ],
    zone: "Etc/GMT+4",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Thule")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Western Greenland"}
    ],
    zone: "Etc/GMT+3",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Nuuk")
  },
  {
    country: "Guernsey (United Kingdom)",
    zone: "Etc/GMT+0",
    flag: "GG",
    cities: cityList.filter(city => city.country === "GG")
  },
  {
    country: "Hungary",
    zone: "Etc/GMT-1",
    flag: "HU",
    cities: cityList.filter(city => city.country === "HU")
  },
  {
    country: "Iceland",
    zone: "Etc/GMT+1",
    flag: "IS",
    cities: cityList.filter(city => city.country === "IS")
  },
  {
    country: "Ireland",
    zone: "Etc/GMT+1",
    flag: "IE",
    cities: cityList.filter(city => city.country === "IE")
  },
  {
    country: "Isle of Man (United Kingdom)",
    zone: "Etc/GMT+0",
    flag: "IM",
    cities: cityList.filter(city => city.country === "IM")
  },
  {
    country: "Italy",
    zone: "Etc/GMT-1",
    flag: "IT",
    cities: cityList.filter(city => city.country === "IT")
  },
  {
    country: "Jersey (United Kingdom)",
    zone: "Etc/GMT+0",
    flag: "JE",
    cities: cityList.filter(city => city.country === "JE")
  },
  {
    country: "Kosovo",
    zone: "Etc/GMT-1",  // no explicit timezone for Kosovo/Pristina
    flag: "XK",
    cities: cityList.filter(city => city.country === "XK")
  },
  {
    country: "Latvia",
    zone: "Etc/GMT-2",
    flag: "LV",
    cities: cityList.filter(city => city.country === "LV")
  },
  {
    country: "Liechtenstein",
    zone: "Etc/GMT-1",
    flag: "LI",
    cities: cityList.filter(city => city.country === "LI")
  },
  {
    country: "Lithuania",
    zone: "Etc/GMT-2",
    flag: "LT",
    cities: cityList.filter(city => city.country === "LT")
  },
  {
    country: "Luxembourg",
    zone: "Etc/GMT+0",
    flag: "LU",
    cities: cityList.filter(city => city.country === "LU")
  },
  {
    country: "Malta",
    zone: "Etc/GMT-1",
    flag: "MT",
    cities: cityList.filter(city => city.country === "MT")
  },
  {
    country: "Moldova",
    zone: "Etc/GMT-2",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD")
  },
  {
    country: "Monaco",
    zone: "Etc/GMT+0",
    flag: "MC",
    cities: cityList.filter(city => city.country === "MC")
  },
  {
    country: "Montenegro",
    zone: "Etc/GMT-1",
    flag: "ME",
    cities: cityList.filter(city => city.country === "ME")
  },
  {
    country: "Netherlands",
    zone: "Etc/GMT+0",
    flag: "NL",
    cities: cityList.filter(city => city.country === "NL")
  },
  {
    country: "North Macedonia",
    zone: "Etc/GMT-1",
    flag: "MK",
    cities: cityList.filter(city => city.country === "MK")
  },
  {
    country: "Norway",
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
    country: "Norway",
    subdiv: [
      {title: "Jan Mayen"}
    ],
    zone: "Etc/GMT+1",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SJ" && city.adminCode === "22")
  },
  {
    country: "Norway",
    subdiv: [
      {title: "Svalbard"}
    ],
    zone: "Etc/GMT-1",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SJ" && city.adminCode === "21")
  },
  {
    country: "Poland",
    zone: "Etc/GMT-1",
    flag: "PL",
    cities: cityList.filter(city => city.country === "PL")
  },
  {
    country: "Portugal",
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
      {title: "Lisboa"}, // 14
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
    country: "Portugal",
    subdiv: [
      {title: "Madeira"} // 10
    ],
    zone: "Etc/GMT+1",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.adminCode === "10")
  },
  {
    country: "Portugal",
    subdiv: [
      {title: "Azores"} // 23
    ],
    zone: "Etc/GMT+2",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.adminCode === "23")
  },
  {
    country: "Romania",
    zone: "Etc/GMT-2",
    flag: "RO",
    cities: cityList.filter(city => city.country === "RO")
  },
  {
    country: "San Marino",
    zone: "Etc/GMT-1",
    flag: "SM",
    cities: cityList.filter(city => city.country === "SM")
  },
  {
    country: "Serbia",
    zone: "Etc/GMT-1",
    flag: "RS",
    cities: cityList.filter(city => city.country === "RS")
  },
  {
    country: "Slovakia",
    zone: "Etc/GMT-1",
    flag: "SK",
    cities: cityList.filter(city => city.country === "SK")
  },
  {
    country: "Slovenia",
    zone: "Etc/GMT-1",
    flag: "SI",
    cities: cityList.filter(city => city.country === "SI")
  },
  {
    country: "Spain",
    subdiv: [
      {title: "Andalucía"}, // 51
      {title: "Aragón"}, // 52
      {title: "Asturies"}, // 34
      {title: "Cantabria"}, // 39
      {title: "Castilla y León"}, // 55
      {title: "Castilla-La Mancha"}, // 54
      {title: "Catalunya"}, // 56
      {title: "Extremadura"}, // 57
      {title: "Galicia"}, // 58
      {title: "Illes Balears"}, // 07
      {title: "Murcia"}, // 31
      {title: "Comunidad de Madrid"}, // 29
      {title: "Navarra"}, // 32
      {title: "Euskal Autonomia Erkidegoa"}, // 59
      {title: "La Rioja"}, // 27
      {title: "Comunidad Valenciana"}, // 60
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
    country: "Spain",
    subdiv: [
      {title: "Canarias"} // 53
    ],
    zone: "Etc/GMT+1",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.adminCode === "53")
  },
  {
    country: "Sweden",
    zone: "Etc/GMT-1",
    flag: "SE",
    cities: cityList.filter(city => city.country === "SE")
  },
  {
    country: "Switzerland",
    zone: "Etc/GMT-1",
    flag: "CH",
    cities: cityList.filter(city => city.country === "CH")
  },
  {
    country: "United Kingdom",
    subdiv: [
      {title: "England"}, // ENG
      {title: "Scotland"}, // SCT
      {title: "Wales"} // WLS
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
    country: "United Kingdom",
    subdiv: [
      {title: "Northern Ireland"} // NIR
    ],
    zone: "Etc/GMT+1",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.adminCode === "NIR")
  },
  {
    country: "Ukraine",
    zone: "Etc/GMT-2",
    flag: "UA",
    cities: cityList.filter(city => city.country === "UA")
  },
  {
    country: "Vatican City",
    zone: "Etc/GMT-1",
    flag: "VA",
    cities: cityList.filter(city => city.country === "VA")
  }
]
