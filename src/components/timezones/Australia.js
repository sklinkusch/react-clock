import cityList from "./cityList"

export default [
  {
    country: "Australia",
    subdiv: [
      {title: "Western Australia", extra: "(most of state)"}
    ],
    zone: "Australia/Perth",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Perth")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Western Australia", extra: "(Eucla)"}
    ],
    zone: "Australia/Eucla",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Eucla")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Northern Territory"}
    ],
    zone: "Australia/Darwin",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Darwin")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Queensland"}
    ],
    zone: "Australia/Brisbane",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Brisbane")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "South Australia"}
    ],
    zone: "Australia/Adelaide",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Adelaide")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "New South Wales", extra: "(most of state)"}
    ],
    zone: "Australia/Sydney",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Sydney")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Australian Capital Territory"}
    ],
    zone: "Australia/Canberra",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Canberra")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "New South Wales", extra: "(Yancowinna)"}
    ],
    zone: "Australia/Broken_Hill",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Broken_Hill")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Victoria"}
    ],
    zone: "Australia/Melbourne",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Melbourne")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Tasmania"}
    ],
    zone: "Australia/Hobart",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Hobart")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Lord Howe Island"}
    ],
    zone: "Australia/Lord_Howe",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Lord_Howe")
  },
  {
    country: "Australia",
    subdiv: [
      {title: "Norfolk Island"}
    ],
    zone: "Pacific/Norfolk",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Norfolk")
  },
]
