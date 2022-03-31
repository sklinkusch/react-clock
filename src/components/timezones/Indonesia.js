import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {title: "Bali"}, 
      {title: "East Kalimantan"}, 
      {title: "East Nusa Tenggara"}, 
      {title: "North Kalimantan"}, 
      {title: "South Kalimantan"}, 
      {title: "Sulawesi"}, 
      {title: "West Nusa Tenggara"}
    ],
    zone: "Asia/Makassar",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Makassar")
  },
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {title: "Java"}, 
      {title: "Sumatra"}
    ],
    zone: "Asia/Jakarta",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Jakarta")
  },
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {title: "Central Kalimantan"}, 
      {title: "West Kalimantan"}
    ],
    zone: "Asia/Pontianak",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Pontianak")
  },
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {title: "Maluku"}, 
      {title: "North Maluku"}, 
      {title: "Papua"}, 
      {title: "West Papua"}
    ],
    zone: "Asia/Jayapura",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Jayapura")
  },
]

export default countryList