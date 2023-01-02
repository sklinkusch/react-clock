import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Indonesien",
      en: "Indonesia",
      fr: "Indonésie"
    },
    subdiv: [
      {
        title: {
          de: "Aceh",
          en: "Aceh",
          fr: "Aceh"
        }
      }, // 01
      {
        title: {
          de: "Bengkulu",
          en: "Bengkulu",
          fr: "Bengkulu"
        }
      }, // 03
      {
        title: {
          de: "Jakarta",
          en: "Jakarta",
          fr: "Jakarta"
        }
      }, // 04
      {
        title: {
          de: "Jambi",
          en: "Jambi",
          fr: "Jambi"
        }
      }, // 05
      {
        title: {
          de: "Zentraljava",
          en: "Central Java",
          fr: "Java central"
        }
      }, // 07
      {
        title: {
          de: "Ostjava",
          en: "East Java",
          fr: "Java oriental"
        }
      }, // 08
      {
        title: {
          de: "Yogyakarta",
          en: "Yogyakarta",
          fr: "Yogyakarta"
        }
      }, // 10
      {
        title: {
          de: "Westkalimantan",
          en: "West Kalimantan",
          fr: "Kalimantan occidental"
        }
      }, // 11
      {
        title: {
          de: "Zentralkalimantan",
          en: "Central Kalimantan",
          fr: "Kalimantan central"
        }
      }, // 13 
      {
        title: {
          de: "Lampung",
          en: "Lampung",
          fr: "Lampung"
        }
      }, // 15
      {
        title: {
          de: "Westsumatra",
          en: "West Sumatra",
          fr: "Sumatra occidental"
        }
      }, // 24
      {
        title: {
          de: "Nordsumatra",
          en: "North Sumatra",
          fr: "Sumatra du Nord"
        }
      }, // 26
      {
        title: {
          de: "Westjava",
          en: "West Java",
          fr: "Java occidental"
          
        }
      }, // 30
      {
        title: {
          de: "Südsumatra",
          en: "South Sumatra",
          fr: "Sumatra du Sud"
        }
      }, // 32
      {
        title: {
          de: "Banten",
          en: "Banten",
          fr: "Banten"
        }
      }, // 33
      {
        title: {
          de: "Bangka-Belitung",
          en: "Bangka Belitung",
          fr: "Îles Bangka Belitung"
        }
      }, // 35
      {
        title: {
          de: "Riau",
          en: "Riau",
          fr: "Riau"
        }
      }, // 37
      {
        title: {
          de: "Riau-Inseln",
          en: "Riau Islands",
          fr: "Îles Riau"
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
      en: "Indonesia",
      fr: "Indonésie"
    },
    subdiv: [
      {
        title: {
          de: "Bali",
          en: "Bali",
          fr: "Bali"
        }
      }, // 02
      {
        title: {
          de: "Südkalimantan",
          en: "South Kalimantan",
          fr: "Kalimantan du Sud"
        }
      }, // 12
      {
        title: {
          de: "Ostkalimantan",
          en: "East Kalimantan",
          fr: "Kalimantan oriental"
        }
      }, // 14 
      {
        title: {
          de: "West-Nusa-Tenggara",
          en: "West Nusa Tenggara",
          fr: "Petites îles de la Sonde occidentales"
        }
      }, // 17
      {
        title: {
          de: "Ost-Nusa-Tenggara",
          en: "East Nusa Tenggara",
          fr: "Petites îles de la Sonde orientales"
        }
      }, // 18 
      {
        title: {
          de: "Zentralsulawesi",
          en: "Central Sulawesi",
          fr: "Sulawesi central"
        }
      }, // 21
      {
        title: {
          de: "Südostsulawesi",
          en: "Southeast Sulawesi",
          fr: "Sulawesi du Sud-Est"
        }
      }, // 22
      {
        title: {
          de: "Nordsulawesi",
          en: "North Sulawesi",
          fr: "Kalimantan du Nord"
        }
      }, // 31
      {
        title: {
          de: "Gorontalo",
          en: "Gorontalo",
          fr: "Gorontalo"
        }
      }, // 34
      {
        title: {
          de: "Südsulawesi",
          en: "South Sulawesi",
          fr: "Sulawesi du Sud"
        }
      }, // 38
      {
        title: {
          de: "Westsulawesi",
          en: "West Sulawesi",
          fr: "Sulawesi occidental"
        }
      }, // 41
      {
        title: {
          de: "Nordkalimantan",
          en: "North Kalimantan",
          fr: "Kalimantan du Nord"
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
      en: "Indonesia",
      fr: "Indonésie"
    },
    subdiv: [
      {
        title: {
          de: "Maluku",
          en: "Maluku",
          fr: "Moluques"
        }
      }, // 28
      {
        title: {
          de: "Nordmaluku",
          en: "North Maluku",
          fr: "Moluques du Nord"
        }
      }, // 29
      {
        title: {
          de: "Papua",
          en: "Papua",
          fr: "Papouasie"
        }
      }, // 36
      {
        title: {
          de: "Westpapua",
          en: "West Papua",
          fr: "Papouasie occidentale"
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