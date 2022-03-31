import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {title: "Atyrau Region"}, // 06
      {title: "Mangystau Region"}, // 09
      {title: "West Kazakhstan Region"} // 07
    ],
    zone: "Etc/GMT-3",
    cities : cityList.filter(city => {
      if(city.country === "KZ") {
        if(city.adminCode === "06") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "09") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {title: "Aktobe Region"}, // 04
      {title: "Kostanay Region"}, // 13
      {title: "Kyzylorda Region"}, // 14
      {title: "Baykonyr"} // 18
    ],
    zone: "Etc/GMT-4",
    flag: "KZ",
    cities: cityList.filter(city => {
      if(city.country === "KZ") {
        if(city.adminCode === "04") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "18") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {title: "Akmola Region"}, // 03
      {title: "Almaty Region"}, // 01
      {title: "Almaty"}, // 02
      {title: "Nur-Sultan"}, // 05
      {title: "East Kazakhstan Region"}, // 15
      {title: "Jambyl Region"}, // 17
      {title: "Karaganda Region"}, // 12
      {title: "North Kazakhstan Region"}, // 16 
      {title: "Pavlodar Region"}, // 11
      {title: "Turkistan Region"}, // 10
      {title: "Shymkent"} // 1537272
    ],
    zone: "Etc/GMT-5",
    flag: "KZ",
    cities: cityList.filter(city => {
      if(city.country === "KZ") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "02") return true
        if(city.adminCode === "03") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "15") return true
        if(city.adminCode === "16") return true
        if(city.adminCode === "17") return true
        if(city.adminCode === "1537272") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Kirgisistan",
      en: "Kyrgyzstan"
    },
    zone: "Etc/GMT-5",
    flag: "KG",
    cities: cityList.filter(city => city.country === "KG")
  },
  {
    country: {
      de: "Tadschikistan",
      en: "Tajikistan"
    },
    zone: "Etc/GMT-5",
    flag: "TJ",
    cities: cityList.filter(city => city.country === "TJ")
  },
  {
    country: {
      de: "Turkmenistan",
      en: "Turkmenistan"
    },
    zone: "Etc/GMT-4",
    flag: "TM",
    cities: cityList.filter(city => city.country === "TM")
  },
  {
    country: {
      de: "Usbekistan",
      en: "Uzbekistan"
    },
    zone: "Etc/GMT-4",
    flag: "UZ",
    cities: cityList.filter(city => city.country === "UZ")
  },
]

export default countryList