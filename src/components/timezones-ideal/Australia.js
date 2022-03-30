import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Western Australia"} // 08
    ],
    zone: "Etc/GMT-8",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.adminCode === "08")
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Northern Territory"}, // 03
      {title: "South Australia"}, // 05
    ],
    zone: "Etc/GMT-9",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && ["03","05"].includes(city.adminCode))
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Australian Capital Territory"}, // 01
      {title: "New South Wales"}, // 02
      {title: "Queensland"}, // 04
      {title: "Tasmania"}, // 06
      {title: "Victoria"} // 07
    ],
    zone: "Etc/GMT-10",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && ["01","02","04","06","07"].includes(city.adminCode))
  },
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {title: "Lord Howe Island"},
      {title: "Norfolk Island"}
    ],
    zone: "Etc/GMT-11",
    flag: "AU",
    cities: []
  },
]

export default countryList