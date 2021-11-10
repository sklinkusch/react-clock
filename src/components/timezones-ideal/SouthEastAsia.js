import cityList from "./cityList"

export default [
  {
    country: "Brunei",
    zone: "Etc/GMT-8",
    flag: "BN",
    cities: cityList.filter(city => city.country === "BN")
  },
  {
    country: "Cambodia",
    zone: "Etc/GMT-7",
    flag: "KH",
    cities: cityList.filter(city => city.country === "KH")
  },
  {
    country: "Christmas Island (Australia)",
    zone: "Etc/GMT-7",
    flag: "CX",
    cities: cityList.filter(city => city.country === "CX")
  },
  {
    country: "Laos",
    zone: "Etc/GMT-7",
    flag: "LA",
    cities: cityList.filter(city => city.country === "LA")
  },
  {
    country: "Malaysia",
    subdiv: [
      {title: "Johor"}, // 01
      {title: "Kedah"}, // 02
      {title: "Kelantan"}, // 03
      {title: "Kuala Lumpur"}, // 14
      {title: "Malacca"}, // 04
      {title: "Negeri Sembilan"}, // 05
      {title: "Pahang"}, // 06
      {title: "Penang"}, // 09
      {title: "Perak"}, // 07
      {title: "Perlis"}, // 08
      {title: "Putrajaya"}, // 17
      {title: "Selangor"}, // 12
      {title: "Terengganu"}, // 13
    ],
    zone: "Etc/GMT-7",
    flag: "MY",
    cities: cityList.filter(city => {
      if(city.country === "MY") {
        switch(city.adminCode) {
          case "01":
          case "02":
          case "03":
          case "04":
          case "05":
          case "06":
          case "07":
          case "08":
          case "09":
          case "12":
          case "13":
          case "14":
          case "17":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "Malaysia",
    subdiv: [
      {title: "Labuan"}, // 15
      {title: "Sabah"},  // 16
      {title: "Sarawak"} // 11
    ],
    zone: "Etc/GMT-8",
    flag: "MY",
    cities: cityList.filter(city => {
      if(city.country === "MY") {
        switch(city.adminCode) {
          case "11":
          case "15":
          case "16":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "Philippines",
    zone: "Etc/GMT-8",
    flag: "PH",
    cities: cityList.filter(city => city.country === "PH")
  },
  {
    country: "Singapore",
    zone: "Etc/GMT-7",
    flag: "SG",
    cities: cityList.filter(city => city.country === "SG")
  },
  {
    country: "Thailand",
    zone: "Etc/GMT-7",
    flag: "TH",
    cities: cityList.filter(city => city.country === "TH")
  },
  {
    country: "Timor-Leste",
    zone: "Etc/GMT-8",
    flag: "TL",
    cities: cityList.filter(city => city.country === "TL")
  },
  {
    country: "Vietnam",
    zone: "Etc/GMT-7",
    flag: "VN",
    cities: cityList.filter(city => city.country === "VN")
  }
]