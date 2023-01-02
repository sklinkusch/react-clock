import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {title: "Alabama"}, 
      {title: "Arkansas"}, 
      {
        title: {
          de: "Florida",
          en: "Florida",
          fr: "Floride"
      }, 
        extra: {
          de: "(westlich des Appalachicola River)",
          en: "(west of Appalachicola River)",
          fr: "(ouest de l'Appalachicola)"
        }
      }, 
      {title: "Illinois"}, 
      {title: "Iowa"}, 
      {
        title: "Kansas", 
        extra: {
          de: "(überwiegend)",
          en: "(most of state)",
          fr: "(plupart d'état)"
        }
      }, 
      {
        title: "Kentucky", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western 40%)",
          fr: "(ouest)"
        }
      }, 
      {
        title: {
          de: "Louisiana",
          en: "Louisiana",
          fr: "Louisiane"
        }
      }, 
      {title: "Minnesota"}, 
      {title: "Mississippi"}, 
      {title: "Missouri"}, 
      {
        title: "Nebraska", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {title: "Oklahoma"}, 
      {
        title: {
          de: "South Dakota",
          en: "South Dakota",
          fr: "Dakota du Sud"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern half)",
          fr: "(est)"
        }
      }, 
      {
        title: "Tennessee", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {
        title: "Texas", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {title: "Wisconsin"}
    ],
    zone: "America/Chicago",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Chicago")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Alaska", 
        extra: {
          de: "(westlich von 169.5° W)",
          en: "(west of 169.5° W)",
          fr: "(ouest de 169.5° O)"
        }
      }
    ],
    zone: "America/Adak",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Adak")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Alaska", 
        extra: {
          de: "(östlich von 169.5° W)",
          en: "(east of 169.5° W)",
          fr: "(est de 169.5° O)"
        }
      }
    ],
    zone: "America/Anchorage",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Anchorage")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Arizona", 
        extra: {
          de: "(außer Navajo Nation Reservation)",
          en: "(except Navajo Nation Reservation)",
          fr: "(excepté la Nation navajo)"
        }
      }
    ],
    zone: "America/Phoenix",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Phoenix")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Arizona", 
        extra: {
          de: "(Navajo Nation Reservation)",
          en: "(Navajo Nation Reservation)",
          fr: "(Nation navajo)"
        }
      }
    ],
    zone: "America/Shiprock",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Shiprock")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: {
          de: "Kalifornien",
          en: "California",
          fr: "Californie"
        }
      }, 
      {
        title: "Nevada", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {
        title: "Oregon", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {title: "Washington"}
    ],
    zone: "America/Los_Angeles",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Los_Angeles")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {title: "Colorado"}, 
      {
        title: "Kansas", 
        extra: {
          de: "(Gemeinden an der Westgrenze)",
          en: "(western border counties)",
          fr: "(municipalités à la frontière de l'ouest)"
        }
      }, 
      {title: "Montana"}, 
      {
        title: "Nebraska", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western third)",
          fr: "(ouest)"
        }
      }, 
      {
        title: "Nevada", 
        extra: "(West Wendover)"
      }, 
      {
        title: {
          de: "New Mexico",
          en: "New Mexico",
          fr: "Nouveau-Mexique"
        }
      }, 
      {
        title: {
          de: "North Dakota",
          en: "North Dakota",
          fr: "Dakota du Nord"
        }, 
        extra: {
          de: "(südwestlicher Teil)",
          en: "(southwestern part)",
          fr: "(sud-ouest)"
        }
      }, 
      {
        title: {
          de: "South Dakota",
          en: "South Dakota",
          fr: "Dakota du Sud"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western half)",
          fr: "(ouest)"
        }
      }, 
      {
        title: "Texas", 
        extra: "(El Paso, Hudspeth)"
      }, 
      {title: "Utah"}, 
      {title: "Wyoming"}
    ],
    zone: "America/Denver",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Denver")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {title: "Connecticut"}, 
      {title: "Delaware"}, 
      {
        title: {
          de: "District of Columbia",
          en: "District of Columbia",
          fr: "District de Columbia"
        }
      }, 
      {
        title: {
          de: "Florida",
          en: "Florida",
          fr: "Floride"
        }, 
        extra: {
          de: "(östlich des Appalachicola River)",
          en: "(east of Appalachicola River)",
          fr: "(est de l'Appalachicola)"
        }
      }, 
      {
        title: {
          de: "Georgia",
          en: "Georgia",
          fr: "Géorgie"
        }
      }, 
      {title: "Maine"}, 
      {title: "Maryland"}, 
      {title: "Massachusetts"}, 
      {title: "New Hampshire"}, 
      {title: "New Jersey"}, 
      {title: "New York"}, 
      {
        title: {
          de: "North Carolina",
          en: "North Carolina",
          fr: "Caroline du Nord"
        }
      }, 
      {title: "Ohio"}, 
      {
        title: {
          de: "Pennsylvania",
          en: "Pennsylvania",
          fr: "Pennsylvanie"
        }
      }, 
      {title: "Rhode Island"}, 
      {
        title: {
          de: "South Carolina",
          en: "South Carolina",
          fr: "Caroline du Sud"
        }
      }, 
      {
        title: "Tennessee", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, 
      {title: "Vermont"}, 
      {
        title: {
          de: "Virginia",
          en: "Virginia",
          fr: "Virginie"
        }
      }, 
      {
        title: {
          de: "West Virginia",
          en: "West Virginia",
          fr: "Virginie-Occidentale"
        }
      }
    ],
    zone: "America/New_York",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/New_York")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Idaho", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }, 
      {title: "Oregon", extra: "(Malheur County)"}
    ],
    zone: "America/Boise",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Boise")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Indiana", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }
    ],
    zone: "America/Indiana/Indianapolis",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Indiana/Indianapolis")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Indiana", 
        extra: {
          de: "(Gemeinden im Nordwesten und Südwesten)",
          en: "(northwest and southwest)",
          fr: "(nord-ouest et sud-ouest)"
        }
      }
    ],
    zone: "America/Indiana/Knox",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Indiana/Knox")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Kentucky", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern 60%)",
          fr: "(est)"
        }
      }
    ],
    zone: "America/Kentucky/Louisville",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Kentucky/Louisville")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Michigan", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }
    ],
    zone: "America/Detroit",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Detroit")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: "Michigan", 
        extra: {
          de: "(Gemeinden an der Grenze zu Wisconsin)",
          en: "(counties bordering Wisconsin)",
          fr: "(municipalités à la frontière avec le Wisconsin)"
        }
      }
    ],
    zone: "America/Menominee",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Menominee")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {
        title: {
          de: "North Dakota",
          en: "North Dakota",
          fr: "Dakota du Nord"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }
    ],
    zone: "America/North_Dakota/Center",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/North_Dakota/Center")
  },
]

export default countryList