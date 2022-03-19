import cityList from "./cityList"

export default [
  {
    country: "Afghanistan",
    zone: "Asia/Kabul",
    flag: "AF",
    cities: cityList.filter(city => city.country === "AF" && city.tz === "Asia/Kabul")
  },
  {
    country: "Armenia",
    zone: "Asia/Yerevan",
    flag: "AM",
    cities: cityList.filter(city => city.country === "AM" && city.tz === "Asia/Yerevan")
  },
  {
    country: "Azerbaijan",
    zone: "Asia/Baku",
    flag: "AZ",
    cities: cityList.filter(city => city.country === "AZ" && city.tz === "Asia/Baku")
  },
  {
    country: "Bahrain",
    zone: "Asia/Bahrain",
    flag: "BH",
    cities: cityList.filter(city => city.country === "BH" && city.tz === "Asia/Bahrain")
  },
  {
    country: "Georgia",
    subdiv: [
      {title: "Ajaria"},
      {title: "Guria"},
      {title: "Imereti"},
      {title: "Kakheti"},
      {title: "Kvemo Kartli"},
      {title: "Mtskheta-Mtianeti"},
      {title: "Racha Lechkhumi and Kvemo Svaneti"},
      {title: "Samtskhe-Javakheti"},
      {title: "Shida Kartli", extra: "(only partly controlled by Georgia)"},
      {title: "Samegrelo-Zemo Svaneti"},
      {title: "Tbilisi"}
    ],
    zone: "Asia/Tbilisi",
    flag: "GE",
    cities: cityList.filter(city => city.country === "GE" && city.tz === "Asia/Tbilisi" && city.adminCode !== "02")
  },
  {
    country: "Georgia",
    subdiv: [
      {title: "Abkhazia", extra: "(controlled by Russia/Abkhazia)"},
      {title: "Shida Kartli", extra: "(partly controlled by Russia/South Ossetia)"}
    ],
    zone: "Europe/Moscow",
    flag: "GE",
    cities: cityList.filter(city => city.country === "GE" && city.adminCode === "02")
  },
  {
    country: "Iran",
    zone: "Asia/Tehran",
    flag: "IR",
    cities: cityList.filter(city => city.country === "IR" && city.tz === "Asia/Tehran")
  },
  {
    country: "Iraq",
    zone: "Asia/Baghdad",
    flag: "IQ",
    cities: cityList.filter(city => city.country === "IQ" && city.tz === "Asia/Baghdad")
  },
  {
    country: "Israel",
    zone: "Asia/Jerusalem",
    flag: "IL",
    cities: cityList.filter(city => city.country === "IL" && city.tz === "Asia/Jerusalem")
  },
  {
    country: "Jordan",
    zone: "Asia/Amman",
    flag: "JO",
    cities: cityList.filter(city => city.country === "JO" && city.tz === "Asia/Amman")
  },
  {
    country: "Kuwait",
    zone: "Asia/Kuwait",
    flag: "KW",
    cities: cityList.filter(city => city.country === "KW" && city.tz === "Asia/Kuwait")
  },
  {
    country: "Lebanon",
    zone: "Asia/Beirut",
    flag: "LB",
    cities: cityList.filter(city => city.country === "LB" && city.tz === "Asia/Beirut")
  },
  {
    country: "Oman",
    zone: "Asia/Muscat",
    flag: "OM",
    cities: cityList.filter(city => city.country === "OM" && city.tz === "Asia/Muscat")
  },
  {
    country: "Palestine",
    subdiv: [
      {title: "Gaza Strip"}
    ],
    zone: "Asia/Gaza",
    flag: "PS",
    cities: cityList.filter(city => city.country === "PS" && city.tz === "Asia/Gaza")
  },
  {
    country: "Palestine",
    subdiv: [
      {title: "West Bank"}
    ],
    zone: "Asia/Hebron",
    flag: "PS",
    cities: cityList.filter(city => city.country === "PS" && city.tz === "Asia/Hebron")
  },
  {
    country: "Qatar",
    zone: "Asia/Qatar",
    flag: "QA",
    cities: cityList.filter(city => city.country === "QA" && city.tz === "Asia/Qatar")
  },
  {
    country: "Saudi Arabia",
    zone: "Asia/Riyadh",
    flag: "SA",
    cities: cityList.filter(city => city.country === "SA" && city.tz === "Asia/Riyadh")
  },
  {
    country: "Syria",
    zone: "Asia/Damascus",
    flag: "SY",
    cities: cityList.filter(city => city.country === "SY" && city.tz === "Asia/Damascus")
  },
  {
    country: "Turkey",
    zone: "Europe/Istanbul",
    flag: "TR",
    cities: cityList.filter(city => {
      if(city.country === "TR") {
        switch(city.tz) {
          case "Asia/Istanbul":
          case "Europe/Istanbul":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "United Arab Emirates",
    zone: "Asia/Dubai",
    flag: "AE",
    cities: cityList.filter(city => city.country === "AE" && city.tz === "Asia/Dubai")
  },
  {
    country: "Yemen",
    zone: "Asia/Aden",
    flag: "YE",
    cities: cityList.filter(city => city.country === "YE" && city.tz === "Asia/Aden")
  }
]
