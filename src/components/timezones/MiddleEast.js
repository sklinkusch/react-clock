import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Afghanistan",
      en: "Afghanistan",
      fr: "Afghanistan"
    },
    zone: "Asia/Kabul",
    flag: "AF",
    cities: cityList.filter(city => city.country === "AF" && city.tz === "Asia/Kabul")
  },
  {
    country: {
      de: "Armenien",
      en: "Armenia",
      fr: "Arménie"
    },
    zone: "Asia/Yerevan",
    flag: "AM",
    cities: cityList.filter(city => city.country === "AM" && city.tz === "Asia/Yerevan")
  },
  {
    country: {
      de: "Aserbaidschan",
      en: "Azerbaijan",
      fr: "Azerbaïdjan"
    },
    zone: "Asia/Baku",
    flag: "AZ",
    cities: cityList.filter(city => city.country === "AZ" && city.tz === "Asia/Baku")
  },
  {
    country: {
      de: "Bahrain",
      en: "Bahrain",
      fr: "Bahreïn"
    },
    zone: "Asia/Bahrain",
    flag: "BH",
    cities: cityList.filter(city => city.country === "BH" && city.tz === "Asia/Bahrain")
  },
  {
    country: {
      de: "Georgien",
      en: "Georgia",
      fr: "Géorgie"
    },
    subdiv: [
      {
        title: {
          de: "Adscharien",
          en: "Ajaria",
          fr: "Adjarie"
        }
      },
      {
        title: {
          de: "Gurien",
          en: "Guria",
          fr: "Gourie"
        }
      },
      {
        title: {
          de: "Imeretien",
          en: "Imereti",
          fr: "Iméréthie"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)",
          fr: "(en partie contrôlé par la Géorgie)"
        }
      },
      {
        title: {
          de: "Kachetien",
          en: "Kakheti",
          fr: "Kakhétie"
        }
      },
      {
        title: {
          de: "Niederkartlien",
          en: "Kvemo Kartli",
          fr: "Basse Kartlie"
        }
      },
      {
        title: {
          de: "Mzcheta-Mtianeti",
          en: "Mtskheta-Mtianeti",
          fr: "Mtskhéta-Mtianétie"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)",
          fr: "(en partie contrôlé par la Géorgie)"
        }
      },
      {
        title: {
          de: "Ratscha-Letschchumi und Niederswanetien",
          en: "Racha Lechkhumi and Kvemo Svaneti",
          fr: "Ratcha-Letchkhoumie et Basse Svanétie"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)",
          fr: "(en partie contrôlé par la Géorgie)"
        }
      },
      {
        title: {
          de: "Samzche-Dschawachetien",
          en: "Samtskhe-Javakheti",
          fr: "Samtskhé-Djavakhétie"
        }
      },
      {
        title: {
          de: "Innerkartlien",
          en: "Shida Kartli",
          fr: "Kartlie intérieure"
        }, 
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)",
          fr: "(en partie contrôlé par la Géorgie)"
        }
      },
      {
        title: {
          de: "Mingrelien und Oberswanetien",
          en: "Samegrelo-Zemo Svaneti",
          fr: "Mingrélie-et-Haute-Svanétie"
        }
      },
      {
        title: {
          de: "Tiflis",
          en: "Tbilisi",
          fr: "Tbilissi"
        }
      }
    ],
    zone: "Asia/Tbilisi",
    flag: "GE",
    cities: cityList.filter(city => city.country === "GE" && city.tz === "Asia/Tbilisi" && city.adminCode !== "02")
  },
  {
    country: {
      de: "Georgien",
      en: "Georgia"
    },
    subdiv: [
      {
        title: {
          de: "Abchasien",
          en: "Abkhazia",
          fr: "Abkhazie"
        }, 
        extra: {
          de: "(unter russischer/abchasischer Kontrolle)",
          en: "(controlled by Russia/Abkhazia)",
          fr: "(contrôlé par la Russie/Abkhazie)"
        }
      },
      {
        title: {
          de: "Imeretien",
          en: "Imereti",
          fr: "Iméréthie"
        },
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)",
          fr: "(en partie contrôlé par la Russie/Ossétie du Sud)"
        }
      },
      {
        title: {
          de: "Mzcheta-Mtianeti",
          en: "Mtskheta-Mtianeti",
          fr: "Mtskhéta-Mtianétie"
        },
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)",
          fr: "(en partie contrôlé par la Russie/Ossétie du Sud)"
        }
      },
      {
        title: {
          de: "Ratscha-Letschchumi und Niederswanetien",
          en: "Racha Lechkhumi and Kvemo Svaneti",
          fr: "Ratcha-Letchkhoumie et Basse-Svanétie"
        },
        extra: {
          de: "(teilweise unter russischer/südössetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)",
          fr: "(en partie contrôlé par la Russie/Ossétie du Sud)"
        }
      },
      {
        title: {
          de: "Innerkartlien",
          en: "Shida Kartli",
          fr: "Kartlie intérieure"
        }, 
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)",
          fr: "(en partie contrôlé par la Russie/Ossétie du Sud)"
        }
      }
    ],
    zone: "Europe/Moscow",
    flag: "GE",
    cities: cityList.filter(city => city.country === "GE" && city.adminCode === "02")
  },
  {
    country: {
      de: "Iran",
      en: "Iran",
      fr: "Iran"
    },
    zone: "Asia/Tehran",
    flag: "IR",
    cities: cityList.filter(city => city.country === "IR" && city.tz === "Asia/Tehran")
  },
  {
    country: {
      de: "Irak",
      en: "Iraq",
      fr: "Irak"
    },
    zone: "Asia/Baghdad",
    flag: "IQ",
    cities: cityList.filter(city => city.country === "IQ" && city.tz === "Asia/Baghdad")
  },
  {
    country: {
      de: "Israel",
      en: "Israel",
      fr: "Israël"
    },
    zone: "Asia/Jerusalem",
    flag: "IL",
    cities: cityList.filter(city => city.country === "IL" && city.tz === "Asia/Jerusalem")
  },
  {
    country: {
      de: "Jordanien",
      en: "Jordan",
      fr: "Jordanie"
    },
    zone: "Asia/Amman",
    flag: "JO",
    cities: cityList.filter(city => city.country === "JO" && city.tz === "Asia/Amman")
  },
  {
    country: {
      de: "Kuwait",
      en: "Kuwait",
      fr: "Koweït"
    },
    zone: "Asia/Kuwait",
    flag: "KW",
    cities: cityList.filter(city => city.country === "KW" && city.tz === "Asia/Kuwait")
  },
  {
    country: {
      de: "Libanon",
      en: "Lebanon",
      fr: "Liban"
    },
    zone: "Asia/Beirut",
    flag: "LB",
    cities: cityList.filter(city => city.country === "LB" && city.tz === "Asia/Beirut")
  },
  {
    country: {
      de: "Oman",
      en: "Oman",
      fr: "Oman"
    },
    zone: "Asia/Muscat",
    flag: "OM",
    cities: cityList.filter(city => city.country === "OM" && city.tz === "Asia/Muscat")
  },
  {
    country: {
      de: "Palästina",
      en: "Palestine",
      fr: "Palestine"
    },
    subdiv: [
      {
        title: {
          de: "Gazastreifen",
          en: "Gaza Strip",
          fr: "Bande de Gaza"
        }
      }
    ],
    zone: "Asia/Gaza",
    flag: "PS",
    cities: cityList.filter(city => city.country === "PS" && city.tz === "Asia/Gaza")
  },
  {
    country: {
      de: "Palästina",
      en: "Palestine",
      fr: "Palestine"
    },
    subdiv: [
      {
        title: {
          de: "Westjordanland",
          en: "West Bank",
          fr: "Cisjordanie"
        }
      }
    ],
    zone: "Asia/Hebron",
    flag: "PS",
    cities: cityList.filter(city => city.country === "PS" && city.tz === "Asia/Hebron")
  },
  {
    country: {
      de: "Katar",
      en: "Qatar",
      fr: "Qatar"
    },
    zone: "Asia/Qatar",
    flag: "QA",
    cities: cityList.filter(city => city.country === "QA" && city.tz === "Asia/Qatar")
  },
  {
    country: {
      de: "Saudi-Arabien",
      en: "Saudi Arabia",
      fr: "Arabie saoudite"
    },
    zone: "Asia/Riyadh",
    flag: "SA",
    cities: cityList.filter(city => city.country === "SA" && city.tz === "Asia/Riyadh")
  },
  {
    country: {
      de: "Syrien",
      en: "Syria",
      fr: "Syrie"
    },
    zone: "Asia/Damascus",
    flag: "SY",
    cities: cityList.filter(city => city.country === "SY" && city.tz === "Asia/Damascus")
  },
  {
    country: {
      de: "Türkei",
      en: "Turkey",
      fr: "Turquie"
    },
    zone: "Europe/Istanbul",
    flag: "TR",
    cities: cityList.filter(city => {
      if(city.country === "TR") {
        switch(city.tz) {
          case "Asia/Istanbul":
          case "Europe/Istanbul":
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
      de: "Vereinigte Arabische Emirate",
      en: "United Arab Emirates",
      fr: "Émirats arabes unis"
    },
    zone: "Asia/Dubai",
    flag: "AE",
    cities: cityList.filter(city => city.country === "AE" && city.tz === "Asia/Dubai")
  },
  {
    country: {
      de: "Jemen",
      en: "Yemen",
      fr: "Yémen"
    },
    zone: "Asia/Aden",
    flag: "YE",
    cities: cityList.filter(city => city.country === "YE" && city.tz === "Asia/Aden")
  }
]

export default countryList