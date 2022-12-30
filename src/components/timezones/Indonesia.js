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
          de: "Bali",
          en: "Bali",
          fr: "Bali"
        }
      }, 
      {
        title: {
          de: "Ostkalimantan",
          en: "East Kalimantan",
          fr: "Kalimantan oriental"
        }
      }, 
      {
        title: {
          de: "Ost-Nusa-Tenggara",
          en: "East Nusa Tenggara",
          fr: "Petites îles de la Sonde orientales"
        }
      }, 
      {
        title: {
          de: "Nordkalimantan",
          en: "North Kalimantan",
          fr: "Kalimantan du Nord"
        }
      }, 
      {
        title: {
          de: "Südkalimantan",
          en: "South Kalimantan",
          fr: "Kalimantan du Sud"
        }
      }, 
      {
        title: {
          de: "Zentralsulawesi",
          en: "Central Sulawesi",
          fr: "Sulawesi central"
        }
      },
      {
        title: {
          de: "Westsulawesi",
          en: "West Sulawesi",
          fr: "Sulawesi occidental"
        }
      },
      {
        title: {
          de: "Südsulawesi",
          en: "South Sulawesi",
          fr: "Sulawesi du Sud"
        }
      },
      {
        title: {
          de: "Südostsulawesi",
          en: "Southeast Sulawesi",
          fr: "Sulawesi du Sud-Est"
        }
      },
      {
        title: {
          de: "Nordsulawesi",
          en: "North Sulawesi",
          fr: "Sulawesi du Nord"
        }
      },
      {
        title: {
          de: "Gorontalo",
          en: "Gorontalo",
          fr: "Gorontalo"
        }
      }, 
      {
        title: {
          de: "West-Nusa-Tenggara",
          en: "West Nusa Tenggara",
          fr: "Petites îles de la Sonde occidentales"
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
      en: "Indonesia",
      fr: "Indonésie"
    },
    subdiv: [
      {
        title: {
          de: "Banten",
          en: "Banten",
          fr: "Banten"
        }
      },
      {
        title: {
          de: "Ostjava",
          en: "East Java",
          fr: "Java oriental"
        }
      },
      {
        title: {
          de: "Westjava",
          en: "West Java",
          fr: "Java occidental"
        }
      },
      {
        title: {
          de: "Zentraljava",
          en: "Central Java",
          fr: "Java central"
        }
      },
      {
        title: {
          de: "Jakarta",
          en: "Jakarta",
          fr: "Jakarta"
        }
      },
      {
        title: {
          de: "Yogyakarta",
          en: "Yogyakarta",
          fr: "Yogyakarta"
        }
      },
      {
        title: {
          de: "Bangka-Belitung",
          en: "Bangka Belitung",
          fr: "Îles Bangka Belitung"
        }
      },
      {
        title: {
          de: "Bengkulu",
          en: "Bengkulu",
          fr: "Bengkulu"
        }
      },
      {
        title: {
          de: "Jambi",
          en: "Jambi",
          fr: "Jambi"
        }
      },
      {
        title: {
          de: "Lampung",
          en: "Lampung",
          fr: "Lampung"
        }
      },
      {
        title: {
          de: "Nordsumatra",
          en: "North Sumatra",
          fr: "Sumatra du Nord"
        }
      },
      {
        title: {
          de: "Riau",
          en: "Riau",
          fr: "Riau"
        }
      },
      {
        title: {
          de: "Riau-Inseln",
          en: "Riau Islands",
          fr: "Îles Riau"
        }
      },
      {
        title: {
          de: "Südsumatra",
          en: "South Sumatra",
          fr: "Sumatra du Sud"
        }
      },
      {
        title: {
          de: "Westsumatra",
          en: "West Sumatra",
          fr: "Sumatra occidental"
        }
      },
      {
        title: {
          de: "Aceh",
          en: "Aceh",
          fr: "Aceh"
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
      en: "Indonesia",
      fr: "Indonésie"
    },
    subdiv: [
      {
        title: {
          de: "Zentralkalimantan",
          en: "Central Kalimantan",
          fr: "Kalimantan central"
        }
      },
      {
        title: {
          de: "Westkalimantan",
          en: "West Kalimantan",
          fr: "Kalimantan occidental"
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
      }, 
      {
        title: {
          de: "Nordmaluku",
          en: "North Maluku",
          fr: "Moluques du Nord"
        }
      }, 
      {
        title: {
          de: "Papua",
          en: "Papua",
          fr: "Papouasie"
        }
      }, 
      {
        title: {
          de: "Westpapua",
          en: "West Papua",
          fr: "Papouasie occidentale"
        }
      }
    ],
    zone: "Asia/Jayapura",
    flag: "ID",
    cities: cityList.filter(city => city.country === "ID" && city.tz === "Asia/Jayapura")
  },
]

export default countryList