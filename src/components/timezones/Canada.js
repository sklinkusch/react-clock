import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Alberta",
          en: "Alberta",
          fr: "Alberta"
        }
      }, 
      {
        title: {
          de: "British Columbia",
          en: "British Columbia",
          fr: "Colombie-Britannique"
        }, 
        extra: {
          de: "(südöstlicher Teil)",
          en: "(southeast)",
          fr: "(sud-est)"
        }
      }
    ],
    zone: "America/Edmonton",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Edmonton")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "British Columbia",
          en: "British Columbia",
          fr: "Colombie-Britannique"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)",
          fr: "(plupart de la province)"
        }
      }
    ],
    zone: "America/Vancouver",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Vancouver")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Labrador",
          en: "Labrador",
          fr: "Labrador"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)",
          fr: "(plupart de la province)"
        }
      }
    ],
    zone: "America/Goose_Bay",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Goose_Bay")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Manitoba",
          en: "Manitoba",
          fr: "Manitoba"
        }
      }
    ],
    zone: "America/Winnipeg",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Winnipeg")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "New Brunswick",
          en: "New Brunswick",
          fr: "Nouveau-Brunswick"
        }
      }
    ],
    zone: "America/Moncton",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Moncton")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Neufundland",
          en: "Newfoundland",
          fr: "Terre-Neuve"
        }
      }, 
      {
        title: {
          de: "Labrador",
          en: "Labrador",
          fr: "Labrador"
        }, 
        extra: {
          de: "(südöstlicher Teil)",
          en: "(southeast)",
          fr: "(sud-est)"
        }
      }
    ],
    zone: "America/St_Johns",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/St_Johns")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories",
          fr: "Territoires du Nord-Ouest"
        }
      }
    ],
    zone: "America/Yellowknife",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Yellowknife")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nova Scotia",
          en: "Nova Scotia",
          fr: "Nouvelle-Écosse"
        }
      }, 
      {
        title: {
          de: "Prince Edward Island",
          en: "Prince Edward Island",
          fr: "Île-du-Prince-Édouard"
        }
      }
    ],
    zone: "America/Halifax",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Halifax")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        }, 
        extra: {
          de: "(westlich von 102° W, Region Kitikmeot)",
          en: "(west of 102° W, Kitikmeot Region)",
          fr: "(ouest de 102° O, Région de Kitikmeot)"
        }
      }
    ],
    zone: "America/Cambridge_Bay",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Cambridge_Bay")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        }, 
        extra: {
          de: "(102° W - 85° W, Resolute und Region Kivalliq)",
          en: "(102° W – 85° W, Resolute, Kivalliq Region)",
          fr: "(102° O - 85° O, Resolute, Région de Kivalliq)"
        }
      }
    ],
    zone: "America/Rankin_Inlet",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Rankin_Inlet")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        }, 
        extra: {
          de: "(östlich von 85° W, Region Qikiqtaaluk)",
          en: "(east of 85° W, Qikiqtaaluk Region)",
          fr: "(est de 85° O, Région de Qikiqtaaluk)"
        }
      }
    ],
    zone: "America/Pangnirtung",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Pangnirtung")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        }, 
        extra: {
          de: "(Coral Harbour)",          
          en: "(Coral Harbour)",
          fr: "(Coral Harbour)"
        }
      }, 
      {
        title: {
          de: "Ontario",
          en: "Ontario",
          fr: "Ontario"
        }, 
        extra: {
          de: "(Atikokan)",
          en: "(Atikokan)",
          fr: "(Atikokan)"
        }
      }
    ],
    zone: "America/Atikokan",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Atikokan")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Ontario",
          en: "Ontario",
          fr: "Ontario"
        }, 
        extra: {
          de: "(westlich von 90° W)",
          en: "(west of 90° W)",
          fr: "(ouest de 90° O)"
        }
      }
    ],
    zone: "America/Rainy_River",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Rainy_River")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Ontario",
          en: "Ontario",
          fr: "Ontario"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)",
          fr: "(plupart de la province)"
        }
      }, 
      {
        title: {
          de: "Québec",
          en: "Quebec",
          fr: "Québec"
        }, 
        extra: {
          de: "(westlich von 63° W)",
          en: "(west of 63° W)",
          fr: "(ouest de 63° O)"
        }
      }
    ],
    zone: "America/Toronto",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Toronto")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Québec",
          en: "Quebec",
          fr: "Québec"
        }, 
        extra: {
          de: "(östlich von 63° W)",
          en: "(east of 63° W)",
          fr: "(est de 63° O)"
        }
      }
    ],
    zone: "America/Blanc-Sablon",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Blanc-Sablon")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Saskatchewan",
          en: "Saskatchewan",
          fr: "Saskatchewan"
        }
      }
    ],
    zone: "America/Regina",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Regina")
  },
  {
    country: {
      de: "Kanada",
      en: "Canada",
      fr: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Yukon",
          en: "Yukon",
          fr: "Yukon"
        }
      }
    ],
    zone: "America/Whitehorse",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Whitehorse")
  },
]

export default countryList