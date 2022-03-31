import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
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
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {title: "Kostanay Region"}
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
      {title: "Kyzylorda Region"}
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
      {title: "Aktobe Region"}
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
      {title: "Atyrau Region"}
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
      {title: "Mangystau Region"}
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
      {title: "West Kazakhstan Region"}
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