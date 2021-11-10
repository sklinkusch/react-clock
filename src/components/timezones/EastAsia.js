import cityList from "./cityList"

export default [
  {
    country: "China",
    zone: "Asia/Shanghai",
    flag: "CN",
    cities: cityList.filter(city => city.country === "CN" && city.tz === "Asia/Shanghai")
  },
  {
    country: "China",
    subdiv: [
      {title: "Xinjiang"}
    ],
    zone: "Asia/Urumqi",
    flag: "CN",
    cities: cityList.filter(city => city.country === "CN" && city.tz === "Asia/Urumqi")
  },
  {
    country: "Hong Kong (China)",
    zone: "Asia/Hong_Kong",
    flag: "HK",
    cities: cityList.filter(city => city.country === "HK" && city.tz === "Asia/Hong_Kong")
  },
  {
    country: "Japan",
    zone: "Asia/Tokyo",
    flag: "JP",
    cities: cityList.filter(city => city.country === "JP" && city.tz === "Asia/Tokyo")
  },
  {
    country: "Macau (China)",
    zone: "Asia/Macau",
    flag: "MO",
    cities: cityList.filter(city => city.country === "MO" && city.tz === "Asia/Macau")
  },
  {
    country: "Mongolia",
    subdiv: [
      {title: "Arkhangai"}, 
      {title: "Bayankhongor"}, 
      {title: "Bulgan"}, 
      {title: "Darkhan-Uul"}, 
      {title: "Dornogovi"}, 
      {title: "Dundgovi"}, 
      {title: "Govisümber"}, 
      {title: "Khentii"}, 
      {title: "Khövsgöl"}, 
      {title: "Orkhon"}, 
      {title: "Selenge"}, 
      {title: "Töv"}, 
      {title: "Ömnögovi"}, 
      {title: "Övörkhanghai"}
    ],
    zone: "Asia/Ulaanbaatar",
    flag: "MN",
    cities: cityList.filter(city => city.country === "MN" && city.tz === "Asia/Ulaanbaatar")
  },
  {
    country: "Mongolia",
    subdiv: [
      {title: "Dornod"}, 
      {title: "Sükhbaatar"}
    ],
    zone: "Asia/Choibalsan",
    flag: "MN",
    cities: cityList.filter(city => city.country === "MN" && city.tz === "Asia/Choibalsan")
  },
  {
    country: "Mongolia",
    subdiv: [
      {title: "Bayan-Ölgii"}, 
      {title: "Govi-Altai"}, 
      {title: "Khovd"}, 
      {title: "Uvs"}, 
      {title: "Zavkhan"}
    ],
    zone: "Asia/Hovd",
    flag: "MN",
    cities: cityList.filter(city => city.country === "MN" && city.tz === "Asia/Hovd")
  },
  {
    country: "North Korea",
    zone: "Asia/Pyongyang",
    flag: "KP",
    cities: cityList.filter(city => city.country === "KP" && city.tz === "Asia/Pyongyang")
  },
  {
    country: "South Korea",
    zone: "Asia/Seoul",
    flag: "KR",
    cities: cityList.filter(city => city.country === "KR" && city.tz === "Asia/Seoul")
  },
  {
    country: "Taiwan",
    zone: "Asia/Taipei",
    flag: "TW",
    cities: cityList.filter(city => city.country === "TW" && city.tz === "Asia/Taipei")
  }
]
