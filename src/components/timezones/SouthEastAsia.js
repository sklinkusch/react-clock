import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Brunei",
      en: "Brunei"
    },
    zone: "Asia/Brunei",
    flag: "BN",
    cities: cityList.filter(city => city.country === "BN" && city.tz === "Asia/Brunei"),
  },
  {
    country: {
      de: "Kambodscha",
      en: "Cambodia"
    },
    zone: "Asia/Phnom_Penh",
    flag: "KH",
    cities: cityList.filter(city => city.country === "KH" && city.tz === "Asia/Phnom_Penh")
  },
  {
    country: {
      de: "Weihnachtsinsel (Australien)",
      en: "Christmas Island (Australia)"
    },
    zone: "Indian/Christmas",
    flag: "CX",
    cities: cityList.filter(city => city.country === "CX" && city.tz === "Indian/Christmas")
  },
  {
    country: {
      de: "Laos",
      en: "Laos"
    },
    zone: "Asia/Vientiane",
    flag: "LA",
    cities: cityList.filter(city => city.country === "LA" && city.tz === "Asia/Vientiane")
  },
  {
    country: {
      de: "Malaysia",
      en: "Malaysia"
    },
    subdiv: [
      {title: "Johor"},
      {title: "Kedah"},
      {title: "Kelantan"},
      {title: "Kuala Lumpur"},
      {title: "Malacca"},
      {title: "Negeri Sembilan"},
      {title: "Pahang"},
      {title: "Penang"},
      {title: "Perak"},
      {title: "Perlis"},
      {title: "Putrajaya"},
      {title: "Selangor"},
      {title: "Terengganu"},
    ],
    zone: "Asia/Kuala_Lumpur",
    flag: "MY",
    cities: cityList.filter(city => city.country === "MY" && city.tz === "Asia/Kuala_Lumpur")
  },
  {
    country: {
      de: "Malaysia",
      en: "Malaysia"
    },
    subdiv: [
      {title: "Labuan"},
      {title: "Sabah"}, 
      {title: "Sarawak"}
    ],
    zone: "Asia/Kuching",
    flag: "MY",
    cities: cityList.filter(city => city.country === "MY" && city.tz === "Asia/Kuching")
  },
  {
    country: {
      de: "Philippinen",
      en: "Philippines"
    },
    zone: "Asia/Manila",
    flag: "PH",
    cities: cityList.filter(city => city.country === "PH" && city.tz === "Asia/Manila")
  },
  {
    country: {
      de: "Singapur",
      en: "Singapore"
    },
    zone: "Asia/Singapore",
    flag: "SG",
    cities: cityList.filter(city => city.country === "SG" && city.tz === "Asia/Singapore")
  },
  {
    country: {
      de: "Thailand",
      en: "Thailand"
    },
    zone: "Asia/Bangkok",
    flag: "TH",
    cities: cityList.filter(city => city.country === "TH" && city.tz === "Asia/Bangkok")
  },
  {
    country: {
      de: "Osttimor",
      en: "Timor-Leste"
    },
    zone: "Asia/Dili",
    flag: "TL",
    cities: cityList.filter(city => city.country === "TL" && city.tz === "Asia/Dili")
  },
  {
    country: {
      de: "Vietnam",
      en: "Vietnam"
    },
    zone: "Asia/Ho_Chi_Minh",
    flag: "VN",
    cities: cityList.filter(city => city.country === "VN" && city.tz === "Asia/Ho_Chi_Minh")
  }
]

export default countryList