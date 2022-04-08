import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Kanada",
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Neufundland und Labrador",
          en: "Newfoundland and Labrador"
        }
      }, // 05
      {
        title: {
          de: "New Brunswick",
          en: "New Brunswick"
        }
      }, // 04
      {
        title: {
          de: "Nova Scotia",
          en: "Nova Scotia"
        }
      }, // 07
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        }, 
        extra: {
          de: "(östlich von 67.5° W)",
          en: "(east of 67.5° W)"
        }
      }, // 14
      {
        title: {
          de: "Prince Edward Island",
          en: "Prince Edward Island"
        }
      }, // 09
      {
        title: {
          de: "Québec",
          en: "Quebec"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        },
        extra: "(82.5°W – 67.5°W)"
      }, // 14
      {
        title: {
          de: "Ontario",
          en: "Ontario"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }, // 08
      {
        title: {
          de: "Québec",
          en: "Quebec"
        },
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Manitoba",
          en: "Manitoba"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }, // 03
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        },
        extra: "(97.5°W – 82.5°W)"
      }, // 14
      {
        title: {
          de: "Ontario",
          en: "Ontario"
        },
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Manitoba",
          en: "Manitoba"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
        }
      }, // 03
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }, // 13
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        },
        extra: "(112.5°W – 97.5°W)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Alberta",
          en: "Alberta"
        }
      }, // 01
      {
        title: {
          de: "British Columbia",
          en: "British Columbia"
        },
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }, // 02
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories"
        }, 
        extra: {
          de: "(mittlerer Teil)",
          en: "(central part)"
        }
      }, // 13
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        },
        extra: {
          de: "(westlich von 112.5° W)",
          en: "(west of 112.5° W)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "British Columbia",
          en: "British Columbia"
        },
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
        }
      }, // 02
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
        }
      }, // 13
      {
        title: {
          de: "Yukon",
          en: "Yukon"
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