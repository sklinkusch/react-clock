import cityList from "./cityList"

export default [
  {
    country: "Brunei",
    zone: "Asia/Brunei",
    flag: "BN",
    cities: cityList.filter(city => city.country === "BN" && city.tz === "Asia/Brunei"),
  },
  {
    country: "Cambodia",
    zone: "Asia/Phnom_Penh",
    flag: "KH",
    cities: cityList.filter(city => city.country === "KH" && city.tz === "Asia/Phnom_Penh")
  },
  {
    country: "Christmas Island (Australia)",
    zone: "Indian/Christmas",
    flag: "CX",
    cities: cityList.filter(city => city.country === "CX" && city.tz === "Indian/Christmas")
  },
  {
    country: "Laos",
    zone: "Asia/Vientiane",
    flag: "LA",
    cities: cityList.filter(city => city.country === "LA" && city.tz === "Asia/Vientiane")
  },
  {
    country: "Malaysia",
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
    country: "Malaysia",
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
    country: "Philippines",
    zone: "Asia/Manila",
    flag: "PH",
    cities: cityList.filter(city => city.country === "PH" && city.tz === "Asia/Manila")
  },
  {
    country: "Singapore",
    zone: "Asia/Singapore",
    flag: "SG",
    cities: cityList.filter(city => city.country === "SG" && city.tz === "Asia/Singapore")
  },
  {
    country: "Thailand",
    zone: "Asia/Bangkok",
    flag: "TH",
    cities: cityList.filter(city => city.country === "TH" && city.tz === "Asia/Bangkok")
  },
  {
    country: "Timor-Leste",
    zone: "Asia/Dili",
    flag: "TL",
    cities: cityList.filter(city => city.country === "TL" && city.tz === "Asia/Dili")
  },
  {
    country: "Vietnam",
    zone: "Asia/Ho_Chi_Minh",
    flag: "VN",
    cities: cityList.filter(city => city.country === "VN" && city.tz === "Asia/Ho_Chi_Minh")
  }
]