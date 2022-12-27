import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Antarktis",
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Casey (Australien)",
          en: "Casey (Australia)",
          fr: "Casey (Australie)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Davis (Australien)",
          en: "Davis (Australia)",
          fr: "Davis (Australie)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Dumont-d'Urville (Frankreich)",
          en: "Dumont-d'Urville (France)",
          fr: "Dumont-d'Urville (France)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Mawson (Australien)",
          en: "Mawson (Australia)",
          fr: "Mawson (Australie)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "McMurdo (USA)",
          en: "McMurdo (United States)",
          fr: "McMurdo (États-Unis)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Palmer (USA)",
          en: "Palmer (United States)",
          fr: "Palmer (États-Unis)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Rothera (Vereinigtes Königreich)",
          en: "Rothera (United Kingdom)",
          fr: "Rothera (Royaume-Uni)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Shōwa (Japan)",
          en: "Shōwa (Japan)",
          fr: "Shōwa (Japon)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Troll (Norwegen)",
          en: "Troll (Norway)",
          fr: "Troll (Norvège)"
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
      en: "Antarctica",
      fr: "Antarctique"
    },
    subdiv: [
      {
        title: {
          de: "Wostok (Russland)",
          en: "Vostok (Russia)",
          fr: "Vostok (Russie)"
        }
      }
    ],
    zone: "Antarctica/Vostok",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]

export default countryList