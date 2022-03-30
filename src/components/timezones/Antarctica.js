import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Antarktis",
      en: "Antarctica"
    },
    subdiv: [
      {title: "Casey (Australia)"}
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
      {title: "Davis (Australia)"}
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
      {title: "Dumont-d'Urville (France)"}
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
      {title: "Mawson (Australia)"}
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
      {title: "McMurdo (United States)"}
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
      {title: "Palmer (United States)"}
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
      {title: "Rothera (United Kingdom)"}
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
      {title: "Shōwa (Japan)"}
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
      {title: "Troll (Norway)"}
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
      {title: "Vostok (Russia)"}
    ],
    zone: "Antarctica/Vostok",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]

export default countryList