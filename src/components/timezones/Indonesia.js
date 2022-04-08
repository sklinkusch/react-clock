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
          de: "Bali",
          en: "Bali"
        }
      }, 
      {
        title: {
          de: "Ostkalimantan",
          en: "East Kalimantan"
        }
      }, 
      {
        title: {
          de: "Ost-Nusa-Tenggara",
          en: "East Nusa Tenggara"
        }
      }, 
      {
        title: {
          de: "Nordkalimantan",
          en: "North Kalimantan"
        }
      }, 
      {
        title: {
          de: "Südkalimantan",
          en: "South Kalimantan"
        }
      }, 
      {
        title: {
          de: "Zentralsulawesi",
          en: "Central Sulawesi"
        }
      },
      {
        title: {
          de: "Westsulawesi",
          en: "West Sulawesi"
        }
      },
      {
        title: {
          de: "Südsulawesi",
          en: "South Sulawesi"
        }
      },
      {
        title: {
          de: "Südostsulawesi",
          en: "Southeast Sulawesi"
        }
      },
      {
        title: {
          de: "Nordsulawesi",
          en: "North Sulawesi"
        }
      },
      {
        title: {
          de: "Gorontalo",
          en: "Gorontalo"
        }
      }, 
      {
        title: {
          de: "West-Nusa-Tenggara",
          en: "West Nusa Tenggara"
        }
      }
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
      {
        title: {
          de: "Banten",
          en: "Banten"
        }
      },
      {
        title: {
          de: "Ostjava",
          en: "East Java"
        }
      },
      {
        title: {
          de: "Westjava",
          en: "West Java"
        }
      },
      {
        title: {
          de: "Zentraljava",
          en: "Central Java"
        }
      },
      {
        title: {
          de: "Jakarta",
          en: "Jakarta"
        }
      },
      {
        title: {
          de: "Yogyakarta",
          en: "Yogyakarta"
        }
      },
      {
        title: {
          de: "Bangka-Belitung",
          en: "Bangka Belitung"
        }
      },
      {
        title: {
          de: "Bengkulu",
          en: "Bengkulu"
        }
      },
      {
        title: {
          de: "Jambi",
          en: "Jambi"
        }
      },
      {
        title: {
          de: "Lampung",
          en: "Lampung"
        }
      },
      {
        title: {
          de: "Nordsumatra",
          en: "North Sumatra"
        }
      },
      {
        title: {
          de: "Riau",
          en: "Riau"
        }
      },
      {
        title: {
          de: "Riau-Inseln",
          en: "Riau Islands"
        }
      },
      {
        title: {
          de: "Südsumatra",
          en: "South Sumatra"
        }
      },
      {
        title: {
          de: "Westsumatra",
          en: "West Sumatra"
        }
      },
      {
        title: {
          de: "Aceh",
          en: "Aceh"
        }
      },
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
      {
        title: {
          de: "Zentralkalimantan",
          en: "Central Kalimantan"
        }
      },
      {
        title: {
          de: "Westkalimantan",
          en: "West Kalimantan"
        }
      },
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
      {
        title: {
          de: "Maluku",
          en: "Maluku"
        }
      }, 
      {
        title: {
          de: "Nordmaluku",
          en: "North Maluku"
        }
      }, 
      {
        title: {
          de: "Papua",
          en: "Papua"
        }
      }, 
      {
        title: {
          de: "Westpapua",
          en: "West Papua"
        }
      }
    ],
    zone: "Asia/Jayapura",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Jayapura")
  },
]

export default countryList