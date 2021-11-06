import cityList from "./cityList"

export default [
  {
    country: "Antarctica",
    subdiv: [
      {title: "Casey (Australia)"}
    ],
    zone: "Antarctica/Casey",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Casey")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Davis (Australia)"}
    ],
    zone: "Antarctica/Davis",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Davis")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Dumont-d'Urville (France)"}
    ],
    zone: "Antarctica/DumontDUrville",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/DumontDUrville")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Mawson (Australia)"}
    ],
    zone: "Antarctica/Mawson",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Mawson")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "McMurdo (United States)"}
    ],
    zone: "Antarctica/McMurdo",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/McMurdo")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Palmer (United States)"}
    ],
    zone: "Antarctica/Palmer",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Palmer")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Rothera (United Kingdom)"}
    ],
    zone: "Antarctica/Rothera",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Rothera")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Shōwa (Japan)"}
    ],
    zone: "Antarctica/Syowa",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Syowa")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Troll (Norway)"}
    ],
    zone: "Antarctica/Troll",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Troll")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Vostok (Russia)"}
    ],
    zone: "Antarctica/Vostok",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]