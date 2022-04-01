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
    zone: "Antarctica/Casey",
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
    zone: "Antarctica/Davis",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Davis")
  },
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {
        title: {
          de: "Dumont-d'Urville (Frankreich)",
          en: "Dumont-d'Urville (France)"
        }
      }
    ],
    zone: "Antarctica/DumontDUrville",
    flag: "AQ",
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
    zone: "Antarctica/Mawson",
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
    zone: "Antarctica/McMurdo",
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
    zone: "Antarctica/Palmer",
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
    zone: "Antarctica/Rothera",
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
    zone: "Antarctica/Syowa",
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
    zone: "Antarctica/Troll",
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
    zone: "Antarctica/Vostok",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]

export default countryList