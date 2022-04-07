import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Afghanistan",
      en: "Afghanistan"
    },
    zone: "Asia/Kabul",
    flag: "AF",
    cities: cityList.filter(city => city.country === "AF" && city.tz === "Asia/Kabul")
  },
  {
    country: {
      de: "Armenien",
      en: "Armenia"
    },
    zone: "Asia/Yerevan",
    flag: "AM",
    cities: cityList.filter(city => city.country === "AM" && city.tz === "Asia/Yerevan")
  },
  {
    country: {
      de: "Aserbaidschan",
      en: "Azerbaijan"
    },
    zone: "Asia/Baku",
    flag: "AZ",
    cities: cityList.filter(city => city.country === "AZ" && city.tz === "Asia/Baku")
  },
  {
    country: {
      de: "Bahrain",
      en: "Bahrain"
    },
    zone: "Asia/Bahrain",
    flag: "BH",
    cities: cityList.filter(city => city.country === "BH" && city.tz === "Asia/Bahrain")
  },
  {
    country: {
      de: "Georgien",
      en: "Georgia"
    },
    subdiv: [
      {
        title: {
          de: "Adscharien",
          en: "Ajaria"
        }
      },
      {
        title: {
          de: "Gurien",
          en: "Guria"
        }
      },
      {
        title: {
          de: "Imeretien",
          en: "Imereti"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)"
        }
      },
      {
        title: {
          de: "Kachetien",
          en: "Kakheti"
        }
      },
      {
        title: {
          de: "Niederkartlien",
          en: "Kvemo Kartli"
        }
      },
      {
        title: {
          de: "Mzcheta-Mtianeti",
          en: "Mtskheta-Mtianeti"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)"
        }
      },
      {
        title: {
          de: "Ratscha-Letschchumi und Niederswanetien",
          en: "Racha Lechkhumi and Kvemo Svaneti"
        },
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)"
        }
      },
      {
        title: {
          de: "Samzche-Dschawachetien",
          en: "Samtskhe-Javakheti"
        }
      },
      {
        title: {
          de: "Innerkartlien",
          en: "Shida Kartli"
        }, 
        extra: {
          de: "(nur teilweise unter georgischer Kontrolle)",
          en: "(only partly controlled by Georgia)"
        }
      },
      {
        title: {
          de: "Mingrelien und Oberswanetien",
          en: "Samegrelo-Zemo Svaneti"
        }
      },
      {
        title: {
          de: "Tiflis",
          en: "Tbilisi"
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
          en: "Abkhazia"
        }, 
        extra: {
          de: "(unter russischer/abchasischer Kontrolle)",
          en: "(controlled by Russia/Abkhazia)"
        }
      },
      {
        title: {
          de: "Imeretien",
          en: "Imereti"
        },
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)"
        }
      },
      {
        title: {
          de: "Mzcheta-Mtianeti",
          en: "Mtskheta-Mtianeti"
        },
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)"
        }
      },
      {
        title: {
          de: "Ratscha-Letschchumi und Niederswanetien",
          en: "Racha Lechkhumi and Kvemo Svaneti"
        },
        extra: {
          de: "(teilweise unter russischer/südössetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)"
        }
      },
      {
        title: {
          de: "Innerkartlien",
          en: "Shida Kartli"
        }, 
        extra: {
          de: "(teilweise unter russischer/südossetischer Kontrolle)",
          en: "(partly controlled by Russia/South Ossetia)"
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
      en: "Iran"
    },
    zone: "Asia/Tehran",
    flag: "IR",
    cities: cityList.filter(city => city.country === "IR" && city.tz === "Asia/Tehran")
  },
  {
    country: {
      de: "Irak",
      en: "Iraq"
    },
    zone: "Asia/Baghdad",
    flag: "IQ",
    cities: cityList.filter(city => city.country === "IQ" && city.tz === "Asia/Baghdad")
  },
  {
    country: {
      de: "Israel",
      en: "Israel"
    },
    zone: "Asia/Jerusalem",
    flag: "IL",
    cities: cityList.filter(city => city.country === "IL" && city.tz === "Asia/Jerusalem")
  },
  {
    country: {
      de: "Jordanien",
      en: "Jordan"
    },
    zone: "Asia/Amman",
    flag: "JO",
    cities: cityList.filter(city => city.country === "JO" && city.tz === "Asia/Amman")
  },
  {
    country: {
      de: "Kuwait",
      en: "Kuwait"
    },
    zone: "Asia/Kuwait",
    flag: "KW",
    cities: cityList.filter(city => city.country === "KW" && city.tz === "Asia/Kuwait")
  },
  {
    country: {
      de: "Libanon",
      en: "Lebanon"
    },
    zone: "Asia/Beirut",
    flag: "LB",
    cities: cityList.filter(city => city.country === "LB" && city.tz === "Asia/Beirut")
  },
  {
    country: {
      de: "Oman",
      en: "Oman"
    },
    zone: "Asia/Muscat",
    flag: "OM",
    cities: cityList.filter(city => city.country === "OM" && city.tz === "Asia/Muscat")
  },
  {
    country: {
      de: "Palästina",
      en: "Palestine"
    },
    subdiv: [
      {
        title: {
          de: "Gazastreifen",
          en: "Gaza Strip"
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
      en: "Palestine"
    },
    subdiv: [
      {
        title: {
          de: "Westjordanland",
          en: "West Bank"
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
      en: "Qatar"
    },
    zone: "Asia/Qatar",
    flag: "QA",
    cities: cityList.filter(city => city.country === "QA" && city.tz === "Asia/Qatar")
  },
  {
    country: {
      de: "Saudi-Arabien",
      en: "Saudi Arabia"
    },
    zone: "Asia/Riyadh",
    flag: "SA",
    cities: cityList.filter(city => city.country === "SA" && city.tz === "Asia/Riyadh")
  },
  {
    country: {
      de: "Syrien",
      en: "Syria"
    },
    zone: "Asia/Damascus",
    flag: "SY",
    cities: cityList.filter(city => city.country === "SY" && city.tz === "Asia/Damascus")
  },
  {
    country: {
      de: "Türkei",
      en: "Turkey"
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
      en: "United Arab Emirates"
    },
    zone: "Asia/Dubai",
    flag: "AE",
    cities: cityList.filter(city => city.country === "AE" && city.tz === "Asia/Dubai")
  },
  {
    country: {
      de: "Jemen",
      en: "Yemen"
    },
    zone: "Asia/Aden",
    flag: "YE",
    cities: cityList.filter(city => city.country === "YE" && city.tz === "Asia/Aden")
  }
]

export default countryList