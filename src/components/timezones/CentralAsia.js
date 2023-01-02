import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Akmola",
          en: "Akmola Region",
          fr: "Oblys d'Aqmola"
        }
      },
      {
        title: {
          de: "Almaty",
          en: "Almaty",
          fr: "Almaty"
        }
      },
      {
        title: {
          de: "Oblys Almaty",
          en: "Almaty Region",
          fr: "Oblys d'Almaty"
        }
      }, 
      {
        title: {
          de: "Oblys Ostkasachstan",
          en: "East Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Oriental"
        }
      }, 
      {
        title: {
          de: "Oblys Schambyl",
          en: "Jambyl Region",
          fr: "Oblys de Jambıl"
        }
      }, 
      {
        title: {
          de: "Oblys Qaraghandy",
          en: "Karaganda Region",
          fr: "Oblys de Karaganda"
        }
      }, 
      {
        title: {
          de: "Oblys Nordkasachstan",
          en: "North Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Septentrional"
        }
      },
      {
        title: {
          de: "Astana",
          en: "Astana",
          fr: "Astana"
        }
      },
      {
        title: {
          de: "Oblys Pawlodar",
          en: "Pavlodar Region",
          fr: "Oblys de Pavlodar"
        }
      }, 
      {
        title: {
          de: "Schymkent",
          en: "Shymkent",
          fr: "Chimkent"
        }
      },
      {
        title: {
          de: "Oblys Türkistan",
          en: "Turkistan Region",
          fr: "Oblys de Turkestan"
        }
      }
    ],
    zone: "Asia/Almaty",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Almaty")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Qostonai",
          en: "Kostanay Region",
          fr: "Oblys de Kostanaï"
        }
      }
    ],
    zone: "Asia/Qostanay",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Qostanay")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Qysylorda",
          en: "Kyzylorda Region",
          fr: "Oblys de Qızılorda"
        }
      },
      {
        title: {
          de: "Baikonur",
          en: "Baykonyr",
          fr: "Baïkonour"
        }
      } // 18
    ],
    zone: "Asia/Qyzylorda",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Qyzylorda")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Aqtöbe",
          en: "Aktobe Region",
          fr: "Oblys d'Aqtöbe"
        }
      }
    ],
    zone: "Asia/Aqtobe",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Aqtobe")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Atyrau",
          en: "Atyrau Region",
          fr: "Oblys d'Atyraw"
        }
      }
    ],
    zone: "Asia/Atyrau",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Atyrau")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Mangghystau",
          en: "Mangystau Region",
          fr: "Oblys de Mañğıstaw"
        }
      }
    ],
    zone: "Asia/Aqtau",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Aqtau")
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Westkasachstan",
          en: "West Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Occidental"
        }
      }
    ],
    zone: "Asia/Oral",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Oral")
  },
  {
    country: {
      de: "Kirgisistan",
      en: "Kyrgyzstan",
      fr: "Kirghizistan"
    },
    zone: "Asia/Bishkek",
    flag: "KG",
    cities: cityList.filter(city => city.country === "KG" && city.tz === "Asia/Bishkek")
  },
  {
    country: {
      de: "Tadschikistan",
      en: "Tajikistan",
      fr: "Tadjikistan"
    },
    zone: "Asia/Dushanbe",
    flag: "TJ",
    cities: cityList.filter(city => city.country === "TJ" && city.tz === "Asia/Dushanbe")
  },
  {
    country: {
      de: "Turkmenistan",
      en: "Turkmenistan",
      fr: "Turkménistan"
    },
    zone: "Asia/Ashgabat",
    flag: "TM",
    cities: cityList.filter(city => city.country === "TM" && city.tz === "Asia/Ashgabat")
  },
  {
    country: {
      de: "Usbekistan",
      en: "Uzbekistan",
      fr: "Ouzbékistan"
    },
    zone: "Asia/Tashkent",
    flag: "UZ",
    cities: cityList.filter(city => city.country === "UZ" && city.tz === "Asia/Tashkent")
  },
]

export default countryList