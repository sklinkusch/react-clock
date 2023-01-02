import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Algerien",
      en: "Algeria",
      fr: "Algérie"
    },
    zone: "Etc/GMT+0",
    flag: "DZ",
    cities: cityList.filter(city => city.country === "DZ")
  },
  {
    country: {
      de: "Angola",
      en: "Angola",
      fr: "Angola"
    },
    zone: "Etc/GMT-1",
    flag: "AO",
    cities: cityList.filter(city => city.country === "AO")
  },
  {
    country: {
      de: "Benin",
      en: "Benin",
      fr: "Bénin"
    },
    zone: "Etc/GMT+0",
    flag: "BJ",
    cities: cityList.filter(city => city.country === "BJ")
  },
  {
    country: {
      de: "Botswana",
      en: "Botswana",
      fr: "Botswana"
    },
    zone: "Etc/GMT-2",
    flag: "BW",
    cities: cityList.filter(city => city.country === "BW")
  },
  {
    country: {
      de: "Burkina Faso",
      en: "Burkina Faso",
      fr: "Burkina Faso"
    },
    zone: "Etc/GMT+0",
    flag: "BF",
    cities: cityList.filter(city => city.country === "BF")
  },
  {
    country: {
      de: "Burundi",
      en: "Burundi",
      fr: "Burundi"
    },
    zone: "Etc/GMT-2",
    flag: "BI",
    cities: cityList.filter(city => city.country === "BI")
  },
  {
    country: {
      de: "Kap Verde",
      en: "Cabo Verde",
      fr: "Cap-Vert"
    },
    zone: "Etc/GMT+2",
    flag: "CV",
    cities: cityList.filter(city => city.country === "CV")
  },
  {
    country: {
      de: "Kamerun",
      en: "Cameroon",
      fr: "Cameroun"
    },
    zone: "Etc/GMT-1",
    flag: "CM",
    cities: cityList.filter(city => city.country === "CM")
  },
  {
    country: {
      de: "Zentralafrikanische Republik",
      en: "Central African Republic",
      fr: "République centrafricaine"
    },
    zone: "Etc/GMT-1",
    flag: "CF",
    cities: cityList.filter(city => city.country === "CF")
  },
  {
    country: {
      de: "Tschad",
      en: "Chad",
      fr: "Tchad"
    },
    zone: "Etc/GMT-1",
    flag: "TD",
    cities: cityList.filter(city => city.country === "TD")
  },
  {
    country: {
      de: "Komoren",
      en: "Comoros",
      fr: "Comores"
    },
    zone: "Etc/GMT-3",
    flag: "KM",
    cities: cityList.filter(city => city.country === "KM")
  },
  {
    country: {
      de: "Elfenbeinküste",
      en: "Côte d'Ivoire",
      fr: "Côte d'Ivoire"
    },
    zone: "Etc/GMT+0",
    flag: "CI",
    cities: cityList.filter(city => city.country === "CI")
  },
  {
    country: {
      de: "Demokratische Republik Kongo",
      en: "Democratic Republic of the Congo",
      fr: "République démocratique du Congo"
    },
    subdiv: [
      {title: "Équateur"}, // 02
      {title: "Kasaï"}, // 18
      {title: "Kinshasa"}, // 06
      {title: "Kongo Central"}, // 08
      {title: "Kwango"}, // 19
      {title: "Kwilu"}, // 20
      {title: "Mai-Ndombe"}, // 24
      {title: "Mongala"}, // 25
      {title: "Nord-Ubangi"}, // 26
      {title: "Sud-Ubangi"}, // 28
      {title: "Tshuapa"} // 31
    ],
    zone: "Etc/GMT-1",
    flag: "CD",
    cities: cityList.filter(city => city.country === "CD" && ["02","06","08","18","19","20","24","25","26","28","31"].includes(city.adminCode))
  },
  {
    country: {
      de: "Demokratische Republik Kongo",
      en: "Democratic Republic of the Congo",
      fr: "République démocratique du Congo"
    },
    subdiv: [
      {title: "Bas-Uele"}, // 13
      {title: "Haut-Katanga"}, // 14 
      {title: "Haut-Lomami"}, // 15
      {title: "Haut-Uele"}, // 16
      {title: "Ituri"}, // 17
      {title: "Kasaï-Central"}, // 23
      {title: "Kasaï-Oriental"}, // 04
      {title: "Lomami"}, // 21
      {title: "Lualaba"}, // 22
      {title: "Maniema"}, // 10
      {title: "Nord-Kivu"}, // 11
      {title: "Sankuru"}, // 27
      {title: "Sud-Kivu"}, // 12
      {title: "Tanganjika"}, // 29
      {title: "Tshopo"}, // 30
    ],
    zone: "Etc/GMT-2",
    flag: "CD",
    cities: cityList.filter(city => city.country === "CD" && ["04","10","11","12","13","14","15","16","17","21","22","23","27","29","30"].includes(city.adminCode))
  },
  {
    country: {
      de: "Dschibuti",
      en: "Djibouti",
      fr: "Djibouti"
    },
    zone: "Etc/GMT-3",
    flag: "DJ",
    cities: cityList.filter(city => city.country === "DJ")
  },
  {
    country: {
      de: "Ägypten",
      en: "Egypt",
      fr: "Égypte"
    },
    zone: "Etc/GMT-2",
    flag: "EG",
    cities: cityList.filter(city => city.country === "EG")
  },
  {
    country: {
      de: "Äquatorialguinea",
      en: "Equatorial Guinea",
      fr: "Guinée équatoriale"
    },
    zone: "Etc/GMT-1",
    flag: "GQ",
    cities: cityList.filter(city => city.country === "GQ")
  },
  {
    country: {
      de: "Eritrea",
      en: "Eritrea",
      fr: "Érythrée"
    },
    zone: "Etc/GMT-3",
    flag: "ER",
    cities: cityList.filter(city => city.country === "ER")
  },
  {
    country: {
      de: "eSwatini",
      en: "eSwatini",
      fr: "Eswatini"
    },
    zone: "Etc/GMT-2",
    flag: "SZ",
    cities: cityList.filter(city => city.country === "SZ")
  },
  {
    country: {
      de: "Äthiopien",
      en: "Ethiopia",
      fr: "Éthiopie"
    },
    zone: "Etc/GMT-3",
    flag: "ET",
    cities: cityList.filter(city => city.country === "ET")
  },
  {
    country: {
      de: "Mayotte (Frankreich)",
      en: "Mayotte (France)",
      fr: "Mayotte (France)"
    },
    zone: "Etc/GMT-3",
    flag: "YT",
    cities: cityList.filter(city => city.country === "YT")
  },
  {
    country: {
      de: "La Réunion (Frankreich)",
      en: "La Réunion (France)",
      fr: "La Réunion (France)"
    },
    zone: "Etc/GMT-4",
    flag: "RE",
    cities: cityList.filter(city => city.country === "RE")
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)",
      fr: "Terres australes et antarctiques françaises (France)"
    },
    subdiv: [
      {
        title: {
          de: "Crozetinseln",
          en: "Crozet Islands",
          fr: "Archipel Crozet"
        }
      },
      {
        title: {
          de: "Îles Éparses",
          en: "Scattered Islands in the Indian Ocean",
          fr: "Îles Éparses de l'océan Indien"
        }
      },
    ],
    zone: "Etc/GMT-4",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["02","05"].includes(city.adminCode))
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)",
      fr: "Terres australes et antarctiques françaises (France)"
    },
    subdiv: [
      {
        title: {
          de: "Kerguelen-Archipel",
          en: "Kerguelen Islands",
          fr: "Îles Kerguelen"
        }
      },
      {
        title: {
          de: "Sankt Paul und Amsterdam",
          en: "St. Paul and Amsterdam Islands",
          fr: "Îles Saint-Paul et Nouvelle-Amsterdam"
        }
      },
    ],
    zone: "Etc/GMT-5",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["01","03"].includes(city.adminCode))
  },
  {
    country: {
      de: "Gabun",
      en: "Gabon",
      fr: "Gabon"
    },
    zone: "Etc/GMT-1",
    flag: "GA",
    cities: cityList.filter(city => city.country === "GA")
  },
  {
    country: {
      de: "Gambia",
      en: "The Gambia",
      fr: "Gambie"
    },
    zone: "Etc/GMT+1",
    flag: "GM",
    cities: cityList.filter(city => city.country === "GM")
  },
  {
    country: {
      de: "Ghana",
      en: "Ghana",
      fr: "Ghana"
    },
    zone: "Etc/GMT+0",
    flag: "GH",
    cities: cityList.filter(city => city.country === "GH")
  },
  {
    country: {
      de: "Guinea",
      en: "Guinea",
      fr: "Guinée"
    },
    zone: "Etc/GMT+1",
    flag: "GN",
    cities: cityList.filter(city => city.country === "GN")
  },
  {
    country: {
      de: "Guinea-Bissau",
      en: "Guinea-Bissau",
      fr: "Guinée-Bissau"
    },
    zone: "Etc/GMT+1",
    flag: "GW",
    cities: cityList.filter(city => city.country === "GW")
  },
  {
    country: {
      de: "Kenia",
      en: "Kenya",
      fr: "Kenya"
    },
    zone: "Etc/GMT-2",
    flag: "KE",
    cities: cityList.filter(city => city.country === "KE")
  },
  {
    country: {
      de: "Lesotho",
      en: "Lesotho",
      fr: "Lesotho"
    },
    zone: "Etc/GMT-2",
    flag: "LS",
    cities: cityList.filter(city => city.country === "LS")
  },
  {
    country: {
      de: "Liberia",
      en: "Liberia",
      fr: "Liberia"
    },
    zone: "Etc/GMT+1",
    flag: "LR",
    cities: cityList.filter(city => city.country === "LR")
  },
  {
    country: {
      de: "Libyen",
      en: "Libya",
      fr: "Libye"
    },
    zone: "Etc/GMT-1",
    flag: "LY",
    cities: cityList.filter(city => city.country === "LY")
  },
  {
    country: {
      de: "Madagaskar",
      en: "Madagascar",
      fr: "Madagascar"
    },
    zone: "Etc/GMT-3",
    flag: "MG",
    cities: cityList.filter(city => city.country === "MG")
  },
  {
    country: {
      de: "Malawi",
      en: "Malawi",
      fr: "Malawi"
    },
    zone: "Etc/GMT-2",
    flag: "MW",
    cities: cityList.filter(city => city.country === "MW")
  },
  {
    country: {
      de: "Mali",
      en: "Mali",
      fr: "Mali"
    },
    zone: "Etc/GMT+0",
    flag: "ML",
    cities: cityList.filter(city => city.country === "ML")
  },
  {
    country: {
      de: "Mauretanien",
      en: "Mauritania",
      fr: "Mauritanie"
    },
    zone: "Etc/GMT+1",
    flag: "MR",
    cities: cityList.filter(city => city.country === "MR")
  },
  {
    country: {
      de: "Mauritius",
      en: "Mauritius",
      fr: "Maurice"
    },
    zone: "Etc/GMT-4",
    flag: "MU",
    cities: cityList.filter(city => city.country === "MU")
  },
  {
    country: {
      de: "Marokko",
      en: "Morocco",
      fr: "Maroc"
    },
    zone: "Etc/GMT+0",
    flag: "MA",
    cities: cityList.filter(city => city.country === "MA")
  },
  {
    country: {
      de: "Mosambik",
      en: "Mozambique",
      fr: "Mozambique"
    },
    zone: "Etc/GMT-2",
    flag: "MZ",
    cities: cityList.filter(city => city.country === "MZ")
  },
  {
    country: {
      de: "Namibia",
      en: "Namibia",
      fr: "Namibie"
    },
    zone: "Etc/GMT-1",
    flag: "NA",
    cities: cityList.filter(city => city.country === "NA")
  },
  {
    country: {
      de: "Niger",
      en: "Niger",
      fr: "Niger"
    },
    zone: "Etc/GMT-1",
    flag: "NE",
    cities: cityList.filter(city => city.country === "NE")
  },
  {
    country: {
      de: "Nigeria",
      en: "Nigeria",
      fr: "Nigeria"
    },
    zone: "Etc/GMT-1",
    flag: "NG",
    cities: cityList.filter(city => city.country === "NG")
  },
  {
    country: {
      de: "Republik Kongo",
      en: "Republic of the Congo",
      fr: "République du Congo"
    },
    zone: "Etc/GMT-1",
    flag: "CG",
    cities: cityList.filter(city => city.country === "CG")
  },
  {
    country: {
      de: "Ruanda",
      en: "Rwanda",
      fr: "Rwanda"
    },
    zone: "Etc/GMT-2",
    flag: "RW",
    cities: cityList.filter(city => city.country === "RW")
  },
  {
    country: {
      de: "São Tomé und Príncipe",
      en: "São Tomé and Príncipe",
      fr: "Sao Tomé-et-Principe"
    },
    zone: "Etc/GMT+0",
    flag: "ST",
    cities: cityList.filter(city => city.country === "ST")
  },
  {
    country: {
      de: "Demokratische Arabische Republik Sahara",
      en: "Sahrawi Arab Democratic Republic",
      fr: "République arabe sahraouie démocratique"
    },
    zone: "Etc/GMT+1",
    flag: "EH",
    cities: cityList.filter(city => city.country === "EH")
  },
  {
    country: {
      de: "Senegal",
      en: "Senegal",
      fr: "Sénégal"
    },
    zone: "Etc/GMT+1",
    flag: "SN",
    cities: cityList.filter(city => city.country === "SN")
  },
  {
    country: {
      de: "Seychellen",
      en: "Seychelles",
      fr: "Seychelles"
    },
    zone: "Etc/GMT-3",
    flag: "SC",
    cities: cityList.filter(city => city.country === "SC")
  },
  {
    country: {
      de: "Sierra Leone",
      en: "Sierra Leone",
      fr: "Sierra Leone"
    },
    zone: "Etc/GMT+1",
    flag: "SL",
    cities: cityList.filter(city => city.country === "SL")
  },
  {
    country: {
      de: "Somalia",
      en: "Somalia",
      fr: "Somalie"
    },
    zone: "Etc/GMT-3",
    flag: "SO",
    cities: cityList.filter(city => city.country === "SO")
  },
  {
    country: {
      de: "Südafrika",
      en: "South Africa",
      fr: "Afrique du Sud"
    },
    subdiv: [
      {
        title: {
          de: "Nordkap",
          en: "Northern Cape",
          fr: "Cap-Nord"
        }
      }, // 08
      {
        title: {
          de: "Westkap",
          en: "Western Cape",
          fr: "Cap-Occidental"
        }
      }, // 11
    ],
    zone: "Etc/GMT-1",
    flag: "ZA",
    cities: cityList.filter(city => city.country === "ZA" && ["08","11"].includes(city.adminCode))
  },
  {
    country: {
      de: "Südafrika",
      en: "South Africa",
      fr: "Afrique du Sud"
    },
    subdiv: [
      {
        title: {
          de: "Ostkap",
          en: "Eastern Cape",
          fr: "Cap-Oriental"
        }
      }, // 05
      {
        title: {
          de: "Freistaat",
          en: "Free State",
          fr: "État libre"
        }
      }, //  03
      {
        title: {
          de: "Gauteng",
          en: "Gauteng",
          fr: "Gauteng"
        }
      }, // 06
      {
        title: {
          de: "KwaZulu-Natal",
          en: "KwaZulu-Natal",
          fr: "KwaZulu-Natal"
        }
      }, // 02
      {
        title: {
          de: "Limpopo",
          en: "Limpopo",
          fr: "Limpopo"
        }
      }, // 09
      {
        title: {
          de: "Mpumalanga",
          en: "Mpumalanga",
          fr: "Mpumalanga"
        }
      }, // 07
      {
        title: {
          de: "Nordwest",
          en: "North West",
          fr: "Nord-Ouest"
        }
      }, // 10
    ],
    zone: "Etc/GMT-2",
    flag: "ZA",
    cities: cityList.filter(city => city.country === "ZA" && ["02","03","05","06","07","09","10"].includes(city.adminCode))
  },
  {
    country: {
      de: "Südsudan",
      en: "South Sudan",
      fr: "Soudan du Sud"
    },
    zone: "Etc/GMT-2",
    flag: "SS",
    cities: cityList.filter(city => city.country === "SS")
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
          de: "Ceuta",
          en: "Ceuta",
          fr: "Ceuta"
        }
      }, 
      {
        title: {
          de: "Melilla",
          en: "Melilla",
          fr: "Melilla"
        }
      }
    ],
    zone: "Etc/GMT+0",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && ["CE", "ML"].includes(city.adminCode))
  },
  {
    country: {
      de: "Sudan",
      en: "Sudan",
      fr: "Soudan"
    },
    zone: "Etc/GMT-2",
    flag: "SD",
    cities: cityList.filter(city => city.country === "SD")
  },
  {
    country: {
      de: "Tansania",
      en: "Tanzania",
      fr: "Tanzanie"
    },
    zone: "Etc/GMT-2",
    flag: "TZ",
    cities: cityList.filter(city => city.country === "TZ")
  },
  {
    country: {
      de: "Togo",
      en: "Togo",
      fr: "Togo"
    },
    zone: "Etc/GMT+0",
    flag: "TG",
    cities: cityList.filter(city => city.country === "TG")
  },
  {
    country: {
      de: "Tunesien",
      en: "Tunisia",
      fr: "Tunisie"
    },
    zone: "Etc/GMT-1",
    flag: "TN",
    cities: cityList.filter(city => city.country === "TN")
  },
  {
    country: {
      de: "Uganda",
      en: "Uganda",
      fr: "Ouganda"
    },
    zone: "Etc/GMT-2",
    flag: "UG",
    cities: cityList.filter(city => city.country === "UG")
  },
  {
    country: {
      de: "Ascension (Vereinigtes Königreich)",
      en: "Ascension (United Kingdom)",
      fr: "Île de l'Ascension (Royaume-Uni)"
    },
    zone: "Etc/GMT+1",
    flag: "AC",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "01")
  },
  {
    country: {
      de: "St. Helena (Vereinigtes Königreich)",
      en: "St. Helena (United Kingdom)",
      fr: "Sainte-Hélène (Royaume-Uni)"
    },
    zone: "Etc/GMT+0",
    flag: "SH",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "02")
  },
  {
    country: {
      de: "Tristan da Cunha (Vereinigtes Königreich)",
      en: "Tristan da Cunha (United Kingdom)",
      fr: "Île Tristan da Cunha (Royaume-Uni)"
    },
    zone: "Etc/GMT+1",
    flag: "TA",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "03")
  },
  {
    country: {
      de: "Sambia",
      en: "Zambia",
      fr: "Zambie"
    },
    zone: "Etc/GMT-2",
    flag: "ZM",
    cities: cityList.filter(city => city.country === "ZM")
  },
  {
    country: {
      de: "Simbabwe",
      en: "Zimbabwe",
      fr: "Zimbabwe"
    },
    zone: "Etc/GMT-2",
    flag: "ZW",
    cities: cityList.filter(city => city.country === "ZW")
  }
]

export default countryList