import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Algerien",
      en: "Algeria",
    },
    zone: "Etc/GMT+0",
    flag: "DZ",
    cities: cityList.filter(city => city.country === "DZ")
  },
  {
    country: {
      de: "Angola",
      en: "Angola",
    },
    zone: "Etc/GMT-1",
    flag: "AO",
    cities: cityList.filter(city => city.country === "AO")
  },
  {
    country: {
      de: "Benin",
      en: "Benin",
    },
    zone: "Etc/GMT+0",
    flag: "BJ",
    cities: cityList.filter(city => city.country === "BJ")
  },
  {
    country: {
      de: "Botswana",
      en: "Botswana"
    },
    zone: "Etc/GMT-2",
    flag: "BW",
    cities: cityList.filter(city => city.country === "BW")
  },
  {
    country: {
      de: "Burkina Faso",
      en: "Burkina Faso"
    },
    zone: "Etc/GMT+0",
    flag: "BF",
    cities: cityList.filter(city => city.country === "BF")
  },
  {
    country: {
      de: "Burundi",
      en: "Burundi"
    },
    zone: "Etc/GMT-2",
    flag: "BI",
    cities: cityList.filter(city => city.country === "BI")
  },
  {
    country: {
      de: "Kap Verde",
      en: "Cabo Verde"
    },
    zone: "Etc/GMT+2",
    flag: "CV",
    cities: cityList.filter(city => city.country === "CV")
  },
  {
    country: {
      de: "Kamerun",
      en: "Cameroon"
    },
    zone: "Etc/GMT-1",
    flag: "CM",
    cities: cityList.filter(city => city.country === "CM")
  },
  {
    country: {
      de: "Zentralafrikanische Republik",
      en: "Central African Republic"
    },
    zone: "Etc/GMT-1",
    flag: "CF",
    cities: cityList.filter(city => city.country === "CF")
  },
  {
    country: {
      de: "Tschad",
      en: "Chad"
    },
    zone: "Etc/GMT-1",
    flag: "TD",
    cities: cityList.filter(city => city.country === "TD")
  },
  {
    country: {
      de: "Komoren",
      en: "Comoros"
    },
    zone: "Etc/GMT-3",
    flag: "KM",
    cities: cityList.filter(city => city.country === "KM")
  },
  {
    country: {
      de: "Elfenbeinküste",
      en: "Côte d'Ivoire"
    },
    zone: "Etc/GMT+0",
    flag: "CI",
    cities: cityList.filter(city => city.country === "CI")
  },
  {
    country: {
      de: "Demokratische Republik Kongo",
      en: "Democratic Republic of the Congo"
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
      en: "Democratic Republic of the Congo"
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
      en: "Djibouti"
    },
    zone: "Etc/GMT-3",
    flag: "DJ",
    cities: cityList.filter(city => city.country === "DJ")
  },
  {
    country: {
      de: "Ägypten",
      en: "Egypt"
    },
    zone: "Etc/GMT-2",
    flag: "EG",
    cities: cityList.filter(city => city.country === "EG")
  },
  {
    country: {
      de: "Äquatorialguinea",
      en: "Equatorial Guinea"
    },
    zone: "Etc/GMT-1",
    flag: "GQ",
    cities: cityList.filter(city => city.country === "GQ")
  },
  {
    country: {
      de: "Eritrea",
      en: "Eritrea"
    },
    zone: "Etc/GMT-3",
    flag: "ER",
    cities: cityList.filter(city => city.country === "ER")
  },
  {
    country: {
      de: "eSwatini",
      en: "eSwatini"
    },
    zone: "Etc/GMT-2",
    flag: "SZ",
    cities: cityList.filter(city => city.country === "SZ")
  },
  {
    country: {
      de: "Äthiopien",
      en: "Ethiopia"
    },
    zone: "Etc/GMT-3",
    flag: "ET",
    cities: cityList.filter(city => city.country === "ET")
  },
  {
    country: {
      de: "Mayotte (Frankreich)",
      en: "Mayotte (France)"
    },
    zone: "Etc/GMT-3",
    flag: "YT",
    cities: cityList.filter(city => city.country === "YT")
  },
  {
    country: {
      de: "La Réunion (Frankreich)",
      en: "La Réunion (France)"
    },
    zone: "Etc/GMT-4",
    flag: "RE",
    cities: cityList.filter(city => city.country === "RE")
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)"
    },
    subdiv: [
      {
        title: {
          de: "Crozetinseln",
          en: "Crozet Islands"
        }
      },
      {
        title: {
          de: "Îles Éparses",
          en: "Scattered Islands in the Indian Ocean"
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
      en: "French Southern and Antarctic Lands (France)"
    },
    subdiv: [
      {
        title: {
          de: "Kerguelen-Archipel",
          en: "Kerguelen Islands"
        }
      },
      {
        title: {
          de: "Sankt Paul und Amsterdam",
          en: "St. Paul and Amsterdam Islands"
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
      en: "Gabon"
    },
    zone: "Etc/GMT-1",
    flag: "GA",
    cities: cityList.filter(city => city.country === "GA")
  },
  {
    country: {
      de: "Gambia",
      en: "The Gambia"
    },
    zone: "Etc/GMT+1",
    flag: "GM",
    cities: cityList.filter(city => city.country === "GM")
  },
  {
    country: {
      de: "Ghana",
      en: "Ghana"
    },
    zone: "Etc/GMT+0",
    flag: "GH",
    cities: cityList.filter(city => city.country === "GH")
  },
  {
    country: {
      de: "Guinea",
      en: "Guinea"
    },
    zone: "Etc/GMT+1",
    flag: "GN",
    cities: cityList.filter(city => city.country === "GN")
  },
  {
    country: {
      de: "Guinea-Bissau",
      en: "Guinea-Bissau"
    },
    zone: "Etc/GMT+1",
    flag: "GW",
    cities: cityList.filter(city => city.country === "GW")
  },
  {
    country: {
      de: "Kenia",
      en: "Kenya"
    },
    zone: "Etc/GMT-2",
    flag: "KE",
    cities: cityList.filter(city => city.country === "KE")
  },
  {
    country: {
      de: "Lesotho",
      en: "Lesotho"
    },
    zone: "Etc/GMT-2",
    flag: "LS",
    cities: cityList.filter(city => city.country === "LS")
  },
  {
    country: {
      de: "Liberia",
      en: "Liberia"
    },
    zone: "Etc/GMT+1",
    flag: "LR",
    cities: cityList.filter(city => city.country === "LR")
  },
  {
    country: {
      de: "Libyen",
      en: "Libya"
    },
    zone: "Etc/GMT-1",
    flag: "LY",
    cities: cityList.filter(city => city.country === "LY")
  },
  {
    country: {
      de: "Madagaskar",
      en: "Madagascar"
    },
    zone: "Etc/GMT-3",
    flag: "MG",
    cities: cityList.filter(city => city.country === "MG")
  },
  {
    country: {
      de: "Malawi",
      en: "Malawi"
    },
    zone: "Etc/GMT-2",
    flag: "MW",
    cities: cityList.filter(city => city.country === "MW")
  },
  {
    country: {
      de: "Mali",
      en: "Mali"
    },
    zone: "Etc/GMT+0",
    flag: "ML",
    cities: cityList.filter(city => city.country === "ML")
  },
  {
    country: {
      de: "Mauretanien",
      en: "Mauritania"
    },
    zone: "Etc/GMT+1",
    flag: "MR",
    cities: cityList.filter(city => city.country === "MR")
  },
  {
    country: {
      de: "Mauritius",
      en: "Mauritius"
    },
    zone: "Etc/GMT-4",
    flag: "MU",
    cities: cityList.filter(city => city.country === "MU")
  },
  {
    country: {
      de: "Marokko",
      en: "Morocco"
    },
    zone: "Etc/GMT+0",
    flag: "MA",
    cities: cityList.filter(city => city.country === "MA")
  },
  {
    country: {
      de: "Mosambik",
      en: "Mozambique"
    },
    zone: "Etc/GMT-2",
    flag: "MZ",
    cities: cityList.filter(city => city.country === "MZ")
  },
  {
    country: {
      de: "Namibia",
      en: "Namibia"
    },
    zone: "Etc/GMT-1",
    flag: "NA",
    cities: cityList.filter(city => city.country === "NA")
  },
  {
    country: {
      de: "Niger",
      en: "Niger"
    },
    zone: "Etc/GMT-1",
    flag: "NE",
    cities: cityList.filter(city => city.country === "NE")
  },
  {
    country: {
      de: "Nigeria",
      en: "Nigeria"
    },
    zone: "Etc/GMT-1",
    flag: "NG",
    cities: cityList.filter(city => city.country === "NG")
  },
  {
    country: {
      de: "Republik Kongo",
      en: "Republic of the Congo"
    },
    zone: "Etc/GMT-1",
    flag: "CG",
    cities: cityList.filter(city => city.country === "CG")
  },
  {
    country: {
      de: "Ruanda",
      en: "Rwanda"
    },
    zone: "Etc/GMT-2",
    flag: "RW",
    cities: cityList.filter(city => city.country === "RW")
  },
  {
    country: {
      de: "São Tomé und Príncipe",
      en: "São Tomé and Príncipe"
    },
    zone: "Etc/GMT+0",
    flag: "ST",
    cities: cityList.filter(city => city.country === "ST")
  },
  {
    country: {
      de: "Demokratische Arabische Republik Sahara",
      en: "Sahrawi Arab Democratic Republic"
    },
    zone: "Etc/GMT+1",
    flag: "EH",
    cities: cityList.filter(city => city.country === "EH")
  },
  {
    country: {
      de: "Senegal",
      en: "Senegal"
    },
    zone: "Etc/GMT+1",
    flag: "SN",
    cities: cityList.filter(city => city.country === "SN")
  },
  {
    country: {
      de: "Seychellen",
      en: "Seychelles"
    },
    zone: "Etc/GMT-3",
    flag: "SC",
    cities: cityList.filter(city => city.country === "SC")
  },
  {
    country: {
      de: "Sierra Leone",
      en: "Sierra Leone"
    },
    zone: "Etc/GMT+1",
    flag: "SL",
    cities: cityList.filter(city => city.country === "SL")
  },
  {
    country: {
      de: "Somalia",
      en: "Somalia"
    },
    zone: "Etc/GMT-3",
    flag: "SO",
    cities: cityList.filter(city => city.country === "SO")
  },
  {
    country: {
      de: "Südafrika",
      en: "South Africa"
    },
    subdiv: [
      {
        title: {
          de: "Nordkap",
          en: "Northern Cape"
        }
      }, // 08
      {
        title: {
          de: "Westkap",
          en: "Western Cape"
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
      en: "South Africa"
    },
    subdiv: [
      {
        title: {
          de: "Ostkap",
          en: "Eastern Cape"
        }
      }, // 05
      {
        title: {
          de: "Freistaat",
          en: "Free State"
        }
      }, //  03
      {
        title: {
          de: "Gauteng",
          en: "Gauteng"
        }
      }, // 06
      {
        title: {
          de: "KwaZulu-Natal",
          en: "KwaZulu-Natal"
        }
      }, // 02
      {
        title: {
          de: "Limpopo",
          en: "Limpopo"
        }
      }, // 09
      {
        title: {
          de: "Mpumalanga",
          en: "Mpumalanga"
        }
      }, // 07
      {
        title: {
          de: "Nordwest",
          en: "North West"
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
      en: "South Sudan"
    },
    zone: "Etc/GMT-2",
    flag: "SS",
    cities: cityList.filter(city => city.country === "SS")
  },
  {
    country: {
      de: "Spanien",
      en: "Spain"
    },
    subdiv: [
      {
        title: {
          de: "Ceuta",
          en: "Ceuta"
        }
      }, 
      {
        title: {
          de: "Melilla",
          en: "Melilla"
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
      en: "Sudan"
    },
    zone: "Etc/GMT-2",
    flag: "SD",
    cities: cityList.filter(city => city.country === "SD")
  },
  {
    country: {
      de: "Tansania",
      en: "Tanzania"
    },
    zone: "Etc/GMT-2",
    flag: "TZ",
    cities: cityList.filter(city => city.country === "TZ")
  },
  {
    country: {
      de: "Togo",
      en: "Togo"
    },
    zone: "Etc/GMT+0",
    flag: "TG",
    cities: cityList.filter(city => city.country === "TG")
  },
  {
    country: {
      de: "Tunesien",
      en: "Tunisia"
    },
    zone: "Etc/GMT-1",
    flag: "TN",
    cities: cityList.filter(city => city.country === "TN")
  },
  {
    country: {
      de: "Uganda",
      en: "Uganda"
    },
    zone: "Etc/GMT-2",
    flag: "UG",
    cities: cityList.filter(city => city.country === "UG")
  },
  {
    country: {
      de: "Ascension (Vereinigtes Königreich)",
      en: "Ascension (United Kingdom)"
    },
    zone: "Etc/GMT+1",
    flag: "AC",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "01")
  },
  {
    country: {
      de: "St. Helena (Vereinigtes Königreich)",
      en: "St. Helena (United Kingdom)"
    },
    zone: "Etc/GMT+0",
    flag: "SH",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "02")
  },
  {
    country: {
      de: "Tristan da Cunha (Vereinigtes Königreich)",
      en: "Tristan da Cunha (United Kingdom)"
    },
    zone: "Etc/GMT+1",
    flag: "TA",
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "03")
  },
  {
    country: {
      de: "Sambia",
      en: "Zambia"
    },
    zone: "Etc/GMT-2",
    flag: "ZM",
    cities: cityList.filter(city => city.country === "ZM")
  },
  {
    country: {
      de: "Simbabwe",
      en: "Zimbabwe"
    },
    zone: "Etc/GMT-2",
    flag: "ZW",
    cities: cityList.filter(city => city.country === "ZW")
  }
]

export default countryList