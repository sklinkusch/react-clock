import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {
        title: {
          de: "Aceh",
          en: "Aceh"
        }
      }, // 01
      {
        title: {
          de: "Bengkulu",
          en: "Bengkulu"
        }
      }, // 03
      {
        title: {
          de: "Jakarta",
          en: "Jakarta"
        }
      }, // 04
      {
        title: {
          de: "Jambi",
          en: "Jambi"
        }
      }, // 05
      {
        title: {
          de: "Zentraljava",
          en: "Central Java"
        }
      }, // 07
      {
        title: {
          de: "Ostjava",
          en: "East Java"
        }
      }, // 08
      {
        title: {
          de: "Yogyakarta",
          en: "Yogyakarta"
        }
      }, // 10
      {
        title: {
          de: "Westkalimantan",
          en: "West Kalimantan"
        }
      }, // 11
      {
        title: {
          de: "Zentralkalimantan",
          en: "Central Kalimantan"
        }
      }, // 13 
      {
        title: {
          de: "Lampung",
          en: "Lampung"
        }
      }, // 15
      {
        title: {
          de: "Westsumatra",
          en: "West Sumatra"
        }
      }, // 24
      {
        title: {
          de: "Nordsumatra",
          en: "North Sumatra"
        }
      }, // 26
      {
        title: {
          de: "Westjava",
          en: "West Java"
        }
      }, // 30
      {
        title: {
          de: "Südsumatra",
          en: "South Sumatra"
        }
      }, // 32
      {
        title: {
          de: "Banten",
          en: "Banten"
        }
      }, // 33
      {
        title: {
          de: "Bangka-Belitung",
          en: "Bangka Belitung"
        }
      }, // 35
      {
        title: {
          de: "Riau",
          en: "Riau"
        }
      }, // 37
      {
        title: {
          de: "Riau-Inseln",
          en: "Riau Islands"
        }
      }, // 40
    ],
    zone: "Etc/GMT-7",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "03") return true
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "15") return true
        if(city.adminCode === "24") return true
        if(city.adminCode === "26") return true
        if(city.adminCode === "30") return true
        if(city.adminCode === "32") return true
        if(city.adminCode === "33") return true
        if(city.adminCode === "35") return true
        if(city.adminCode === "37") return true
        if(city.adminCode === "40") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {
        title: {
          de: "Bali",
          en: "Bali"
        }
      }, // 02
      {
        title: {
          de: "Südkalimantan",
          en: "South Kalimantan"
        }
      }, // 12
      {
        title: {
          de: "Ostkalimantan",
          en: "East Kalimantan"
        }
      }, // 14 
      {
        title: {
          de: "West-Nusa-Tenggara",
          en: "West Nusa Tenggara"
        }
      }, // 17
      {
        title: {
          de: "Ost-Nusa-Tenggara",
          en: "East Nusa Tenggara"
        }
      }, // 18 
      {
        title: {
          de: "Zentralsulawesi",
          en: "Central Sulawesi"
        }
      }, // 21
      {
        title: {
          de: "Südostsulawesi",
          en: "Southeast Sulawesi"
        }
      }, // 22
      {
        title: {
          de: "Nordsulawesi",
          en: "North Sulawesi"
        }
      }, // 31
      {
        title: {
          de: "Gorontalo",
          en: "Gorontalo"
        }
      }, // 34
      {
        title: {
          de: "Südsulawesi",
          en: "South Sulawesi"
        }
      }, // 38
      {
        title: {
          de: "Westsulawesi",
          en: "West Sulawesi"
        }
      }, // 41
      {
        title: {
          de: "Nordkalimantan",
          en: "North Kalimantan"
        }
      }, // 42
    ],
    zone: "Etc/GMT-8",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "02") return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "17") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "22") return true
        if(city.adminCode === "31") return true
        if(city.adminCode === "34") return true
        if(city.adminCode === "38") return true
        if(city.adminCode === "41") return true
        if(city.adminCode === "42") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Indonesien",
      en: "Indonesia"
    },
    subdiv: [
      {
        title: {
          de: "Maluku",
          en: "Maluku"
        }
      }, // 28
      {
        title: {
          de: "Nordmaluku",
          en: "North Maluku"
        }
      }, // 29
      {
        title: {
          de: "Papua",
          en: "Papua"
        }
      }, // 36
      {
        title: {
          de: "Westpapua",
          en: "West Papua"
        }
      }, // 39
    ],
    zone: "Etc/GMT-9",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "28") return true
        if(city.adminCode === "29") return true
        if(city.adminCode === "36") return true
        if(city.adminCode === "39") return true
        return false
      }
      return false
    })
  },
]

export default countryList