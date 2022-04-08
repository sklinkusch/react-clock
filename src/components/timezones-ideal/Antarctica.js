import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Casey (Australien)",
          en: "Casey (Australia)"
        }
      }
    ],
    zone: "Etc/GMT-11",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Casey")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Davis (Australien)",
          en: "Davis (Australia)"
        }
      }
    ],
    zone: "Etc/GMT-7",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Davis")
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)"
    },
    subdiv: [
      {
        title: {
          de: "Adélieland/Dumont-d'Urville-Station",
          en: "Adélie Land/Dumont-d'Urville Station"
        }
      }
    ],
    zone: "Etc/GMT-10",
    flag: "TF",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/DumontDUrville")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Mawson (Australien)",
          en: "Mawson (Australia)"
        }
      }
    ],
    zone: "Etc/GMT-5",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Mawson")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "McMurdo (USA)",
          en: "McMurdo (United States)"
        }
      }
    ],
    zone: "Etc/GMT-12",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/McMurdo")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Palmer (USA)",
          en: "Palmer (United States)"
        }
      }
    ],
    zone: "Etc/GMT+3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Palmer")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Rothera (Vereinigtes Königreich)",
          en: "Rothera (United Kingdom)"
        }
      }
    ],
    zone: "Etc/GMT+3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Rothera")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Shōwa (Japan)",
          en: "Shōwa (Japan)"
        }
      }
    ],
    zone: "Etc/GMT-3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Syowa")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Troll (Norwegen)",
          en: "Troll (Norway)"
        }
      }
    ],
    zone: "Etc/GMT+0",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Troll")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Wostok (Russland)",
          en: "Vostok (Russia)"
        }
      }
    ],
    zone: "Etc/GMT-6",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]

export default countryList