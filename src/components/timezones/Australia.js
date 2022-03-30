import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Western Australia", extra: "(most of state)"}
    ],
    zone: "Australia/Perth",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Perth")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Western Australia", extra: "(Eucla)"}
    ],
    zone: "Australia/Eucla",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Eucla")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Northern Territory"}
    ],
    zone: "Australia/Darwin",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Darwin")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Queensland"}
    ],
    zone: "Australia/Brisbane",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Brisbane")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "South Australia"}
    ],
    zone: "Australia/Adelaide",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Adelaide")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "New South Wales", extra: "(most of state)"}
    ],
    zone: "Australia/Sydney",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Sydney")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Australian Capital Territory"}
    ],
    zone: "Australia/Canberra",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Canberra")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "New South Wales", extra: "(Yancowinna)"}
    ],
    zone: "Australia/Broken_Hill",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Broken_Hill")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Victoria"}
    ],
    zone: "Australia/Melbourne",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Melbourne")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Tasmania"}
    ],
    zone: "Australia/Hobart",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Hobart")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Lord Howe Island"}
    ],
    zone: "Australia/Lord_Howe",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Lord_Howe")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Norfolk Island"}
    ],
    zone: "Pacific/Norfolk",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Norfolk")
  },
]

export default countryList