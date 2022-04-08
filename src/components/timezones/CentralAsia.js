import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Akmola",
          en: "Akmola Region"
        }
      },
      {
        title: {
          de: "Almaty",
          en: "Almaty"
        }
      },
      {
        title: {
          de: "Oblys Almaty",
          en: "Almaty Region"
        }
      }, 
      {
        title: {
          de: "Oblys Ostkasachstan",
          en: "East Kazakhstan Region"
        }
      }, 
      {
        title: {
          de: "Oblys Schambyl",
          en: "Jambyl Region"
        }
      }, 
      {
        title: {
          de: "Oblys Qaraghandy",
          en: "Karaganda Region"
        }
      }, 
      {
        title: {
          de: "Oblys Nordkasachstan",
          en: "North Kazakhstan Region"
        }
      },
      {
        title: {
          de: "Nur-Sultan",
          en: "Nur-Sultan"
        }
      },
      {
        title: {
          de: "Oblys Pawlodar",
          en: "Pavlodar Region"
        }
      }, 
      {
        title: {
          de: "Schymkent",
          en: "Shymkent"
        }
      },
      {
        title: {
          de: "Oblys Türkistan",
          en: "Turkistan Region"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Qostonai",
          en: "Kostanay Region"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Qysylorda",
          en: "Kyzylorda Region"
        }
      },
      {
        title: {
          de: "Baikonur",
          en: "Baykonyr"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Aqtöbe",
          en: "Aktobe Region"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Atyrau",
          en: "Atyrau Region"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Mangghystau",
          en: "Mangystau Region"
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
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Westkasachstan",
          en: "West Kazakhstan Region"
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
      en: "Kyrgyzstan"
    },
    zone: "Asia/Bishkek",
    flag: "KG",
    cities: cityList.filter(city => city.country === "KG" && city.tz === "Asia/Bishkek")
  },
  {
    country: {
      de: "Tadschikistan",
      en: "Tajikistan"
    },
    zone: "Asia/Dushanbe",
    flag: "TJ",
    cities: cityList.filter(city => city.country === "TJ" && city.tz === "Asia/Dushanbe")
  },
  {
    country: {
      de: "Turkmenistan",
      en: "Turkmenistan"
    },
    zone: "Asia/Ashgabat",
    flag: "TM",
    cities: cityList.filter(city => city.country === "TM" && city.tz === "Asia/Ashgabat")
  },
  {
    country: {
      de: "Usbekistan",
      en: "Uzbekistan"
    },
    zone: "Asia/Tashkent",
    flag: "UZ",
    cities: cityList.filter(city => city.country === "UZ" && city.tz === "Asia/Tashkent")
  },
]

export default countryList