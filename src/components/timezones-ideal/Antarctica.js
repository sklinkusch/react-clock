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
    zone: "Etc/GMT-11",
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
    zone: "Etc/GMT-7",
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
    zone: "Etc/GMT-10",
    flag: "TF",
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
    zone: "Etc/GMT-5",
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
    zone: "Etc/GMT-12",
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
    zone: "Etc/GMT+3",
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
    zone: "Etc/GMT+3",
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
    zone: "Etc/GMT-3",
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
    zone: "Etc/GMT+0",
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
    zone: "Etc/GMT-6",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]

export default countryList