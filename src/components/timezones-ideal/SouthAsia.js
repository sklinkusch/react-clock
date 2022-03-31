import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Bangladesch",
      en: "Bangladesh"
    },
    zone: "Etc/GMT-6",
    flag: "BD",
    cities: cityList.filter(city => city.country === "BD")
  },
  {
    country: {
      de: "Bhutan",
      en: "Bhutan"
    },
    zone: "Etc/GMT-6",
    flag: "BT",
    cities: cityList.filter(city => city.country === "BT")
  },
  {
    country: {
      de: "Britisches Territorium im Indischen Ozean (Vereinigtes Territorium)",
      en: "British Indian Ocean Territory (United Kingdom)"
    },
    zone: "Etc/GMT-5",
    flag: "IO",
    cities: cityList.filter(city => city.country === "IO")
  },
  {
    country: {
      de: "Kokosinseln (Australien)",
      en: "Cocos Islands (Australia)"
    },
    zone: "Etc/GMT-6",
    flag: "CC",
    cities: cityList.filter(city => city.country === "CC")
  },
  {
    country: {
      de: "Indien",
      en: "India"
    },
    subdiv: [
      {title: "Andhra Pradesh"}, // 02
      {title: "Chhattisgarh"}, // 37
      {title: "Goa"}, // 33
      {title: "Gujarat"}, // 09
      {title: "Haryana"}, // 10
      {title: "Himachal Pradesh"}, // 11
      {title: "Karnataka"}, // 19
      {title: "Kerala"}, // 13
      {title: "Madhya Pradesh"}, // 35
      {title: "Maharashtra"}, // 16
      {title: "Punjab"}, // 23
      {title: "Rajasthan"}, // 24
      {title: "Tamil Nadu"}, // 25
      {title: "Telangana"}, // 40
      {title: "Uttarakhand"}, // 39
      {title: "Uttar Pradesh"}, // 36
      {title: "Dadra and Nagar Haveli and Daman and Du"}, // 52
      {title: "Delhi"}, // 07
      {title: "Jammu and Kashmir"}, // 12
      {title: "Ladakh"}, // 41
      {title: "Lakshadweep"}, // 14
      {title: "Puducherry"}, // 22
    ],
    zone: "Etc/GMT-5",
    flag: "IN",
    cities: cityList.filter(city => {
      if(city.country === "IN") {
        switch(city.adminCode) {
          case "02":
          case "07":
          case "09":
          case "10":
          case "11":
          case "12":
          case "13":
          case "14":
          case "16":
          case "19":
          case "22":
          case "23":
          case "24":
          case "25":
          case "33":
          case "35":
          case "36":
          case "37":
          case "39":
          case "40":
          case "41":
          case "52":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Indien",
      en: "India"
    },
    subdiv: [
      {title: "Arunachal Pradesh"}, // 30
      {title: "Assam"}, // 03
      {title: "Bihar"}, // 34
      {title: "Jharkhand"}, // 38
      {title: "Manipur"}, // 17
      {title: "Meghalaya"}, // 18
      {title: "Mizoram"}, // 31
      {title: "Nagaland"}, // 20
      {title: "Odisha"}, // 21
      {title: "Sikkim"}, // 29
      {title: "Tripura"}, // 26
      {title: "West Bengal"}, // 28
      {title: "Andaman and Nicobar Islands"}, // 01
      {title: "Chandigarh"}, // 05
    ],
    zone: "Etc/GMT-6",
    flag: "IN",
    cities: cityList.filter(city => {
      if(city.country === "IN") {
        switch(city.adminCode) {
          case "01":
          case "03":
          case "05":
          case "17":
          case "18":
          case "20":
          case "21":
          case "26":
          case "28":
          case "29":
          case "30":
          case "31":
          case "34":
          case "38":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Myanmar",
      en: "Myanmar"
    },
    utcOffset: 390,
    flag: "MM",
    cities: cityList.filter(city => city.country === "MM")
  },
  {
    country: {
      de: "Nepal",
      en: "Nepal"
    },
    zone: "Etc/GMT-5",
    flag: "NP",
    cities: cityList.filter(city => city.country === "NP")
  },
  {
    country: {
      de: "Malediven",
      en: "Maldives"
    },
    zone: "Etc/GMT-5",
    flag: "MV",
    cities: cityList.filter(city => city.country === "MV")
  },
  {
    country: {
      de: "Pakistan",
      en: "Pakistan"
    },
    subdiv: [
      {title: "Balochistan"}, // 02
    ],
    zone: "Etc/GMT-4",
    flag: "PK",
    cities: cityList.filter(city => city.country === "PK" && city.adminCode === "02")
  },
  {
    country: {
      de: "Pakistan",
      en: "Pakistan"
    },
    subdiv: [
      {title: "Azad Jammu and Kashmir"}, // 06
      {title: "Gilgit-Baltistan"}, // 07
      {title: "Islamabad Capital Territory"}, // 08
      {title: "Khyber Pakhtunkhwa"}, // 03
      {title: "Punjab"}, // 04
      {title: "Sindh"}, // 05
    ],
    zone: "Etc/GMT-5",
    flag: "PK",
    cities: cityList.filter(city => {
      if(city.country === "PK") {
        switch(city.adminCode) {
          case "03":
          case "04":
          case "05":
          case "06":
          case "07":
          case "08":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Sri Lanka",
      en: "Sri Lanka"
    },
    zone: "Etc/GMT-5",
    flag: "LK",
    cities: cityList.filter(city => city.country === "LK")
  }
]

export default countryList
