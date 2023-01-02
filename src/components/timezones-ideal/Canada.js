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
          de: "Neufundland und Labrador",
          en: "Newfoundland and Labrador",
          fr: "Terre-Neuve et Labrador"
        }
      }, // 05
      {
        title: {
          de: "New Brunswick",
          en: "New Brunswick",
          fr: "Nouveau-Brunswick"
        }
      }, // 04
      {
        title: {
          de: "Nova Scotia",
          en: "Nova Scotia",
          fr: "Nouvelle-Écosse"
        }
      }, // 07
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        }, 
        extra: {
          de: "(östlich von 67.5° W)",
          en: "(east of 67.5° W)",
          fr: "(est de 67.5° O)"
        }
      }, // 14
      {
        title: {
          de: "Prince Edward Island",
          en: "Prince Edward Island",
          fr: "Île-du-Prince-Édouard"
        }
      }, // 09
      {
        title: {
          de: "Québec",
          en: "Quebec",
          fr: "Québec"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      } // 10
    ],
    zone: "Etc/GMT+4",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "10" && city.lon >= -67.5) return true
        if(city.adminCode === "14" && city.lon >= -67.5) return true
        return false
      }
      return false
    })
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
          de: "(82.5° W – 67.5° W)",
          en: "(82.5° W - 67.5° W)",
          fr: "(82.5° O - 67.5° O)"
        }
      }, // 14
      {
        title: {
          de: "Ontario",
          en: "Ontario",
          fr: "Ontario"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, // 08
      {
        title: {
          de: "Québec",
          en: "Quebec",
          fr: "Québec"
        },
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      } // 10
    ],
    zone: "Etc/GMT+5",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if (city.adminCode === "08" && city.lon >= -82.5) return true
        if (city.adminCode === "10" && city.lon < -67.5) return true
        if (city.adminCode === "14" && city.lon >= -82.5 && city.lon < -67.5) return true
        return false
      }
      return false
    })
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
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, // 03
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        },
        extra: {
          de: "(97.5° W – 82.5° W)",
          en: "(97.5° W - 82.5° W)",
          fr: "(97.5° O - 82.5° O)"
        }
      }, // 14
      {
        title: {
          de: "Ontario",
          en: "Ontario",
          fr: "Ontario"
        },
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      } // 08
    ],
    zone: "Etc/GMT+6",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if(city.adminCode === "03" && city.lon >= -97.5) return true
        if(city.adminCode === "08" && city.lon < -82.5) return true
        if(city.adminCode === "14" && city.lon >= -97.5 && city.lon < -82.5) return true
        return false
      }
      return false
    })
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
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      }, // 03
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories",
          fr: "Territoires du Nord-Ouest"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, // 13
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        },
        extra: {
          de: "(112.5° W – 97.5° W)",
          en: "(112.5° W - 97.5° W)",
          fr: "(112.5° O - 97.5° O)"
        }
      }, // 14
      {title: "Saskatchewan"} // 11
    ],
    zone: "Etc/GMT+7",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "03" && city.lon < -97.5) return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13" && city.lon >= -112.5) return true
        if(city.adminCode === "14" && city.lon >= -112.5 && city.lon < -97.5) return true
        return false
      }
      return false
    })
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
          de: "Alberta",
          en: "Alberta",
          fr: "Alberta"
        }
      }, // 01
      {
        title: {
          de: "British Columbia",
          en: "British Columbia",
          fr: "Colombie-Britannique"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, // 02
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories",
          fr: "Territoires du Nord-Ouest"
        }, 
        extra: {
          de: "(mittlerer Teil)",
          en: "(central part)",
          fr: "(central)"
        }
      }, // 13
      {
        title: {
          de: "Nunavut",
          en: "Nunavut",
          fr: "Nunavut"
        },
        extra: {
          de: "(westlich von 112.5° W)",
          en: "(west of 112.5° W)",
          fr: "(ouest de 112.5° O)"
        }
      } // 14
    ],
    zone: "Etc/GMT+8",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "02" && city.lon >= -127.5) return true
        if(city.adminCode === "13" && city.lon >= -127.5 && city.lon < -112.5) return true
        if(city.adminCode === "14" && city.lon < -112.5) return true
        return false
      }
      return false
    })
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
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      }, // 02
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories",
          fr: "Territoires du Nord-Ouest"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      }, // 13
      {
        title: {
          de: "Yukon",
          en: "Yukon",
          fr: "Yukon"
        }
      } // 12
    ],
    zone: "Etc/GMT+9",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if(city.adminCode === "02" && city.lon < -127.5) return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "13" && city.lon < -127.5) return true
        return false
      }
      return false
    })
  },
]

export default countryList