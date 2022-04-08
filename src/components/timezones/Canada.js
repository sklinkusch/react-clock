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
          de: "Alberta",
          en: "Alberta"
        }
      }, 
      {
        title: {
          de: "British Columbia",
          en: "British Columbia"
        }, 
        extra: {
          de: "(südöstlicher Teil)",
          en: "(southeast)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "British Columbia",
          en: "British Columbia"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Labrador",
          en: "Labrador"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Manitoba",
          en: "Manitoba"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "New Brunswick",
          en: "New Brunswick"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Neufundland",
          en: "Newfoundland"
        }
      }, 
      {
        title: {
          de: "Labrador",
          en: "Labrador"
        }, 
        extra: {
          de: "(südöstlicher Teil)",
          en: "(southeast)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nordwest-Territorien",
          en: "Northwest Territories"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nova Scotia",
          en: "Nova Scotia"
        }
      }, 
      {
        title: {
          de: "Prince Edward Island",
          en: "Prince Edward Island"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        }, 
        extra: {
          de: "(westlich von 102° W, Region Kitikmeot)",
          en: "(west of 102° W, Kitikmeot Region)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        }, 
        extra: {
          de: "(102° W - 85° W, Resolute und Region Kivalliq)",
          en: "(102° W – 85° W, Resolute, Kivalliq Region)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        }, 
        extra: {
          de: "(östlich von 85° W, Region Qikiqtaaluk)",
          en: "(east of 85° W, Qikiqtaaluk Region)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Nunavut",
          en: "Nunavut"
        }, 
        extra: {
          de: "(Coral Harbour)",          
          en: "(Coral Harbour)"
        }
      }, 
      {
        title: {
          de: "Ontario",
          en: "Ontario"
        }, 
        extra: {
          de: "(Atikokan)",
          en: "(Atikokan)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Ontario",
          en: "Ontario"
        }, 
        extra: {
          de: "(westlich von 90° W)",
          en: "(west of 90° W)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Ontario",
          en: "Ontario"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of province)"
        }
      }, 
      {
        title: {
          de: "Québec",
          en: "Quebec"
        }, 
        extra: {
          de: "(westlich von 63° W)",
          en: "(west of 63° W)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Québec",
          en: "Quebec"
        }, 
        extra: {
          de: "(östlich von 63° W)",
          en: "(east of 63° W)"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Saskatchewan",
          en: "Saskatchewan"
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
      en: "Canada"
    },
    subdiv: [
      {
        title: {
          de: "Yukon",
          en: "Yukon"
        }
      }
    ],
    zone: "America/Whitehorse",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Whitehorse")
  },
]

export default countryList