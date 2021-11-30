import cityList from "./cityList"

export default [
  {
    country: "Antarctica",
    subdiv: [
      {title: "Casey (Australia)"}
    ],
    zone: "Etc/GMT-11",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Casey")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Davis (Australia)"}
    ],
    zone: "Etc/GMT-7",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Davis")
  },
  {
    country: "French Southern and Antarctic Lands (France)",
    subdiv: [
      {title: "Adélie Land/Dumont-d'Urville Station"}
    ],
    zone: "Etc/GMT-10",
    flag: "TF",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/DumontDUrville")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Mawson (Australia)"}
    ],
    zone: "Etc/GMT-5",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Mawson")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "McMurdo (United States)"}
    ],
    zone: "Etc/GMT-12",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/McMurdo")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Palmer (United States)"}
    ],
    zone: "Etc/GMT+3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Palmer")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Rothera (United Kingdom)"}
    ],
    zone: "Etc/GMT+3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Rothera")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Shōwa (Japan)"}
    ],
    zone: "Etc/GMT-3",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Syowa")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Troll (Norway)"}
    ],
    zone: "Etc/GMT+0",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Troll")
  },
  {
    country: "Antarctica",
    subdiv: [
      {title: "Vostok (Russia)"}
    ],
    zone: "Etc/GMT-6",
    flag: "AQ",
    cities: cityList.filter(city => city.country === "AQ" && city.tz === "Antarctica/Vostok")
  }
]