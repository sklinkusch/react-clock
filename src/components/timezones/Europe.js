import cityList from "./cityList"

export default [
  {
    country: "Åland (Finland)",
    zone: "Europe/Mariehamn",
    flag: "AX",
    cities: cityList.filter(city => city.country === "AX" && city.tz === "Europe/Mariehamn")
  },
  {
    country: "Albania",
    zone: "Europe/Tirane",
    flag: "AL",
    cities: cityList.filter(city => city.country === "AL" && city.tz === "Europe/Tirane")
  },
  {
    country: "Andorra",
    zone: "Europe/Andorra",
    flag: "AD",
    cities: cityList.filter(city => city.country === "AD" && city.tz === "Europe/Andorra")
  },
  {
    country: "Austria",
    zone: "Europe/Vienna",
    flag: "AT",
    cities: cityList.filter(city => city.country === "AT" && city.tz === "Europe/Vienna")
  },
  {
    country: "Belarus",
    zone: "Europe/Minsk",
    flag: "BY",
    cities: cityList.filter(city => city.country === "BY" && city.tz === "Europe/Minsk")
  },
  {
    country: "Belgium",
    zone: "Europe/Brussels",
    flag: "BE",
    cities: cityList.filter(city => city.country === "BE" && city.tz === "Europe/Brussels")
  },
  {
    country: "Bosnia and Herzegovina",
    zone: "Europe/Sarajevo",
    flag: "BA",
    cities: cityList.filter(city => city.country === "BA" && city.tz === "Europe/Sarajevo")
  },
  {
    country: "Bulgaria",
    zone: "Europe/Sofia",
    flag: "BG",
    cities: cityList.filter(city => city.country === "BG" && city.tz === "Europe/Sofia")
  },
  {
    country: "Croatia",
    zone: "Europe/Zagreb",
    flag: "HR",
    cities: cityList.filter(city => city.country === "HR" && city.tz === "Europe/Zagreb")
  },
  {
    country: "Cyprus",
    subdiv: [
      {title: "Republic of Cyprus"}
    ],
    zone: "Asia/Nicosia",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY" && city.tz === "Asia/Nicosia")
  },
  {
    country: "Cyprus",
    subdiv: [
      {title: "Turkish Republic of Northern Cyprus"}
    ],
    zone: "Asia/Famagusta",
    flag: "CY",
    cities: cityList.filter(city => city.country === "CY" && city.tz === "Asia/Famagusta")
  },
  {
    country: "Czechia",
    zone: "Europe/Prague",
    flag: "CZ",
    cities: cityList.filter(city => city.country === "CZ" && city.tz === "Europe/Prague")
  },
  {
    country: "Denmark",
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
    country: "Estonia",
    zone: "Europe/Tallinn",
    flag: "EE",
    cities: cityList.filter(city => city.country === "EE" && city.tz === "Europe/Tallinn")
  },
  {
    country: "Faroe Islands (Denmark)",
    zone: "Atlantic/Faroe",
    flag: "FO",
    cities: cityList.filter(city => city.country === "FO" && city.tz === "Atlantic/Faroe")
  },
  {
    country: "Finland",
    zone: "Europe/Helsinki",
    flag: "FI",
    cities: cityList.filter(city => city.country === "FI" && city.tz === "Europe/Helsinki")
  },
  {
    country: "France",
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
    country: "Germany",
    zone: "Europe/Berlin",
    flag: "DE",
    cities: cityList.filter(city => city.country === "DE" && city.tz === "Europe/Berlin")
  },
  {
    country: "Gibraltar (United Kingdom)",
    zone: "Europe/Gibraltar",
    flag: "GI",
    cities: cityList.filter(city => city.country === "GI" && city.tz === "Europe/Gibraltar")
  },
  {
    country: "Greece",
    zone: "Europe/Athens",
    flag: "GR",
    cities: cityList.filter(city => city.country === "GR" && city.tz === "Europe/Athens")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Danmarkshavn"}
    ],
    zone: "America/Danmarkshavn",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Danmarkshavn")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Ittoqqortoormit"}, 
      {title: "Scoresbysund"}
    ],
    zone: "America/Scoresbysund",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Scoresbysund")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Thule"}, 
      {title: "Pituffik"}
    ],
    zone: "America/Thule",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Thule")
  },
  {
    country: "Greenland (Denmark)",
    subdiv: [
      {title: "Western Greenland"}
    ],
    zone: "America/Godthab",
    flag: "GL",
    cities: cityList.filter(city => city.country === "GL" && city.tz === "America/Nuuk")
  },
  {
    country: "Guernsey (United Kingdom)",
    zone: "Europe/Guernsey",
    flag: "GG",
    cities: cityList.filter(city => city.country === "GG" && city.tz === "Europe/Guernsey")
  },
  {
    country: "Hungary",
    zone: "Europe/Budapest",
    flag: "HU",
    cities: cityList.filter(city => city.country === "HU" && city.tz === "Europe/Budapest")
  },
  {
    country: "Iceland",
    zone: "Atlantic/Reykjavik",
    flag: "IS",
    cities: cityList.filter(city => city.country === "IS" && city.tz === "Atlantic/Reykjavik")
  },
  {
    country: "Ireland",
    zone: "Europe/Dublin",
    flag: "IE",
    cities: cityList.filter(city => city.country === "IE" && city.tz === "Europe/Dublin")
  },
  {
    country: "Isle of Man (United Kingdom)",
    zone: "Europe/Isle_of_Man",
    flag: "IM",
    cities: cityList.filter(city => city.country === "IM" && city.tz === "Europe/Isle_of_Man")
  },
  {
    country: "Italy",
    zone: "Europe/Rome",
    flag: "IT",
    cities: cityList.filter(city => city.country === "IT" && city.tz === "Europe/Rome")
  },
  {
    country: "Jersey (United Kingdom)",
    zone: "Europe/Jersey",
    flag: "JE",
    cities: cityList.filter(city => city.country === "JE" && city.tz === "Europe/Jersey")
  },
  {
    country: "Kosovo",
    zone: "Europe/Belgrade",  // no explicit timezone for Kosovo/Pristina
    flag: "XK",
    cities: cityList.filter(city => city.country === "XK" && city.tz === "Europe/Belgrade")
  },
  {
    country: "Latvia",
    zone: "Europe/Riga",
    flag: "LV",
    cities: cityList.filter(city => city.country === "LV" && city.tz === "Europe/Riga")
  },
  {
    country: "Liechtenstein",
    zone: "Europe/Vaduz",
    flag: "LI",
    cities: cityList.filter(city => city.country === "LI" && city.tz === "Europe/Vaduz")
  },
  {
    country: "Lithuania",
    zone: "Europe/Vilnius",
    flag: "LT",
    cities: cityList.filter(city => city.country === "LT" && city.tz === "Europe/Vilnius")
  },
  {
    country: "Luxembourg",
    zone: "Europe/Luxembourg",
    flag: "LU",
    cities: cityList.filter(city => city.country === "LU" && city.tz === "Europe/Luxembourg")
  },
  {
    country: "Malta",
    zone: "Europe/Malta",
    flag: "MT",
    cities: cityList.filter(city => city.country === "MT" && city.tz === "Europe/Malta")
  },
  {
    country: "Moldova",
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
    country: "Moldova",
    subdiv: [
      {title: "Bender"}, 
      {title: "Tiraspol"}
    ],
    zone: "Europe/Tiraspol",
    flag: "MD",
    cities: cityList.filter(city => city.country === "MD" && city.tz === "Europe/Tiraspol")
  },
  {
    country: "Monaco",
    zone: "Europe/Monaco",
    flag: "MC",
    cities: cityList.filter(city => city.country === "MC" && city.tz === "Europe/Monaco")
  },
  {
    country: "Montenegro",
    zone: "Europe/Podgorica",
    flag: "ME",
    cities: cityList.filter(city => city.country === "ME" && city.tz === "Europe/Podgorica")
  },
  {
    country: "Netherlands",
    zone: "Europe/Amsterdam",
    flag: "NL",
    cities: cityList.filter(city => city.country === "NL" && city.tz === "Europe/Amsterdam")
  },
  {
    country: "North Macedonia",
    zone: "Europe/Skopje",
    flag: "MK",
    cities: cityList.filter(city => city.country === "MK" && city.tz === "Europe/Skopje")
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
    zone: "Europe/Oslo",
    flag: "NO",
    cities: cityList.filter(city => city.country === "NO" && city.tz === "Europe/Oslo")
  },
  {
    country: "Svalbard and Jan Mayen (Norway)",
    subdiv: [
      {title: "Jan Mayen"}
    ],
    zone: "Atlantic/Jan_Mayen",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SV" && city.tz === "Atlantic/Jan_Mayen")
  },
  {
    country: "Svalbard and Jan Mayen (Norway)",
    subdiv: [
      {title: "Svalbard"}
    ],
    zone: "Arctic/Longyearbyen",
    flag: "NO", // eigentlich SJ
    cities: cityList.filter(city => city.country === "SV" && city.tz === "Arctic/Longyearbyen")
  },
  {
    country: "Poland",
    zone: "Europe/Warsaw",
    flag: "PL",
    cities: cityList.filter(city => city.country === "PL" && city.tz === "Europe/Warsaw")
  },
  {
    country: "Portugal",
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
    country: "Portugal",
    subdiv: [
      {title: "Madeira"}
    ],
    zone: "Atlantic/Madeira",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Madeira")
  },
  {
    country: "Portugal",
    subdiv: [
      {title: "Azores"}
    ],
    zone: "Atlantic/Azores",
    flag: "PT",
    cities: cityList.filter(city => city.country === "PT" && city.tz === "Atlantic/Azores")
  },
  {
    country: "Romania",
    zone: "Europe/Bucharest",
    flag: "RO",
    cities: cityList.filter(city => city.country === "RO" && city.tz === "Europe/Bucharest")
  },
  {
    country: "San Marino",
    zone: "Europe/San_Marino",
    flag: "SM",
    cities: cityList.filter(city => city.country === "SM" && city.tz === "Europe/San_Marino")
  },
  {
    country: "Serbia",
    zone: "Europe/Belgrade",
    flag: "RS",
    cities: cityList.filter(city => city.country === "RS" && city.tz === "Europe/Belgrade")
  },
  {
    country: "Slovakia",
    zone: "Europe/Bratislava",
    flag: "SK",
    cities: cityList.filter(city => city.country === "SK" && city.tz === "Europe/Bratislava")
  },
  {
    country: "Slovenia",
    zone: "Europe/Ljubljana",
    flag: "SI"
  },
  {
    country: "Spain",
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
    country: "Spain",
    subdiv: [
      {title: "Canary Islands"}
    ],
    zone: "Atlantic/Canary",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Atlantic/Canary")
  },
  {
    country: "Sweden",
    zone: "Europe/Stockholm",
    flag: "SE",
    cities: cityList.filter(city => city.country === "SE" && city.tz === "Europe/Stockholm")
  },
  {
    country: "Switzerland",
    zone: "Europe/Zurich",
    flag: "CH",
    cities: cityList.filter(city => city.country === "CH" && city.tz === "Europe/Zurich")
  },
  {
    country: "United Kingdom",
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
    country: "United Kingdom",
    subdiv: [
      {title: "Northern Ireland"}
    ],
    zone: "Europe/Belfast",
    flag: "GB",
    cities: cityList.filter(city => city.country === "GB" && city.tz === "Europe/Belfast")
  },
  {
    country: "Ukraine",
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
    cities: cityList.filter(city => city.country === "UA" && city.tz === "Europe/Kiev")
  },
  {
    country: "Ukraine",
    subdiv: [
      {title: "Sevastopol", extra: "(controlled by Russia)"}, 
      {title: "Crimea Autonomous Republic", extra: "(controlled by Russia)"}
    ],
    zone: "Europe/Simferopol",
    flag: "UA",
    cities: cityList.filter(city => city.country === "UA" && city.tz === "Europe/Simferopol")
  },
  {
    country: "Vatican City",
    zone: "Europe/Vatican",
    flag: "VA",
    cities: cityList.filter(city => city.country === "VA" && city.tz === "Europe/Vatican")
  }
]
