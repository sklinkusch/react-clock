import cityList from "./cityList"

export default [
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Akmola Region"}, 
      {title: "Almaty Region"}, 
      {title: "East Kazakhstan Region"}, 
      {title: "Jambyl Region"}, 
      {title: "Karaganda Region"}, 
      {title: "North Kazakhstan Region"}, 
      {title: "Pavlodar Region"}, 
      {title: "Turkistan Region"}
    ],
    zone: "Asia/Almaty",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Almaty")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Kostanay Region"}
    ],
    zone: "Asia/Qostanay",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Qostanay")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Kyzylorda Region"}
    ],
    zone: "Asia/Qyzylorda",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Qyzylorda")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Aktobe Region"}
    ],
    zone: "Asia/Aqtobe",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Aqtobe")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Atyrau Region"}
    ],
    zone: "Asia/Atyrau",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Atyrau")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "Mangystau Region"}
    ],
    zone: "Asia/Aqtau",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Aqtau")
  },
  {
    country: "Kazakhstan",
    subdiv: [
      {title: "West Kazakhstan Region"}
    ],
    zone: "Asia/Oral",
    flag: "KZ",
    cities: cityList.filter(city => city.country === "KZ" && city.tz === "Asia/Oral")
  },
  {
    country: "Kyrgyzstan",
    zone: "Asia/Bishkek",
    flag: "KG",
    cities: cityList.filter(city => city.country === "KG" && city.tz === "Asia/Bishkek")
  },
  {
    country: "Tajikistan",
    zone: "Asia/Dushanbe",
    flag: "TJ",
    cities: cityList.filter(city => city.country === "TJ" && city.tz === "Asia/Dushanbe")
  },
  {
    country: "Turkmenistan",
    zone: "Asia/Ashgabat",
    flag: "TM",
    cities: cityList.filter(city => city.country === "TM" && city.tz === "Asia/Ashgabat")
  },
  {
    country: "Uzbekistan",
    zone: "Asia/Tashkent",
    flag: "UZ",
    cities: cityList.filter(city => city.country === "UZ" && city.tz === "Asia/Tashkent")
  },
]
