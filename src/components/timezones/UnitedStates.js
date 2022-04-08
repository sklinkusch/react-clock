import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {title: "Alabama"}, 
      {title: "Arkansas"}, 
      {
        title: "Florida", 
        extra: {
          de: "(westlich des Appalachicola River)",
          en: "(west of Appalachicola River)"
        }
      }, 
      {title: "Illinois"}, 
      {title: "Iowa"}, 
      {
        title: "Kansas", 
        extra: {
          de: "(überwiegend)",
          en: "(most of state)"
        }
      }, 
      {
        title: "Kentucky", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western 40%)"
        }
      }, 
      {title: "Louisiana"}, 
      {title: "Minnesota"}, 
      {title: "Mississippi"}, 
      {title: "Missouri"}, 
      {
        title: "Nebraska", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
        }
      }, 
      {title: "Oklahoma"}, 
      {
        title: "South Dakota", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern half)"
        }
      }, 
      {
        title: "Tennessee", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
        }
      }, 
      {
        title: "Texas", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Alaska", 
        extra: {
          de: "(westlich von 169.5° W)",
          en: "(west of 169.5° W)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Alaska", 
        extra: {
          de: "(östlich von 169.5° W)",
          en: "(east of 169.5° W)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Arizona", 
        extra: {
          de: "(außer Navajo Nation Reservation)",
          en: "(except Navajo Nation Reservation)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Arizona", 
        extra: {
          de: "(Navajo Nation Reservation)",
          en: "(Navajo Nation Reservation)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: {
          de: "Kalifornien",
          en: "California"
        }
      }, 
      {
        title: "Nevada", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
        }
      }, 
      {
        title: "Oregon", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "United States"
    },
    subdiv: [
      {title: "Colorado"}, 
      {
        title: "Kansas", 
        extra: {
          de: "(Gemeinden an der Westgrenze)",
          en: "(western border counties)"
        }
      }, 
      {title: "Montana"}, 
      {
        title: "Nebraska", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western third)"
        }
      }, 
      {
        title: "Nevada", 
        extra: "(West Wendover)"
      }, 
      {title: "New Mexico"}, 
      {
        title: "North Dakota", 
        extra: {
          de: "(südwestlicher Teil)",
          en: "(southwestern part)"
        }
      }, 
      {
        title: "South Dakota", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western half)"
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
      en: "United States"
    },
    subdiv: [
      {title: "Connecticut"}, 
      {title: "Delaware"}, 
      {title: "District of Columbia"}, 
      {
        title: "Florida", 
        extra: {
          de: "(östlich des Appalachicola River)",
          en: "(east of Appalachicola River)"
        }
      }, 
      {title: "Georgia"}, 
      {title: "Maine"}, 
      {title: "Maryland"}, 
      {title: "Massachusetts"}, 
      {title: "New Hampshire"}, 
      {title: "New Jersey"}, 
      {title: "New York"}, 
      {title: "North Carolina"}, 
      {title: "Ohio"}, 
      {title: "Pennsylvania"}, 
      {title: "Rhode Island"}, 
      {title: "South Carolina"}, 
      {
        title: "Tennessee", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }, 
      {title: "Vermont"}, 
      {title: "Virginia"}, 
      {title: "West Virginia"}
    ],
    zone: "America/New_York",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/New_York")
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {
        title: "Idaho", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Indiana", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Indiana", 
        extra: {
          de: "(Gemeinden im Nordwesten und Südwesten)",
          en: "(northwest and southwest)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Kentucky", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern 60%)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Michigan", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "Michigan", 
        extra: {
          de: "(Gemeinden an der Grenze zu Wisconsin)",
          en: "(counties bordering Wisconsin)"
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
      en: "United States"
    },
    subdiv: [
      {
        title: "North Dakota", 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
        }
      }
    ],
    zone: "America/North_Dakota/Center",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/North_Dakota/Center")
  },
]

export default countryList