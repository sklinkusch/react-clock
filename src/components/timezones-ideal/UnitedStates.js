import cityList from "./cityList"

const countryList = [
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
          de: "(westlich von 172.5° W)",
          en: "(west of 172.5° W)",
          fr: "(ouest de 172.5° O)"
        }
      },
    ],
    zone: "Etc/GMT+12",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AK":
            if(city.lon < -172.5) return true
            if(city.lon >= 172.5) return true
            return false
          default:
            return false
        }
      }
      return false
    })
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
          de: "(172.5° W – 157.5° W)",
          en: "(172.5° W - 157.5° W)",
          fr: "(172.5° O - 157.5° O)"
        }
      },
    ],
    zone: "Etc/GMT+11",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AK":
            if(city.lon >= -172.5 && city.lon < -157.5) return true
            return false
          default:
            return false
        }
      }
      return false
    })
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
          de: "(157.5° W – 142.5° W)",
          en: "(157.5° W - 142.5° W)",
          fr: "(157.5° O - 142.5° O)"
        }
      },
    ],
    zone: "Etc/GMT+10",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AK":
            if(city.lon >= -157.5 && city.lon < -142.5) return true
            return false
          default:
            return false
        }
      }
      return false
    })
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
          de: "(östlich von 142.5° W)",
          en: "(east of 142.5° W)",
          fr: "(est de 142.5° O)"
        }
      },
    ],
    zone: "Etc/GMT+9",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AK":
            if(city.lon >= -142.5) return true
            return false
          default:
            return false
        }
      }
      return false
    })
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
      {title: "Idaho"},
      {title: "Nevada"},
      {title: "Oregon"},
      {title: "Washington"},
    ],
    zone: "Etc/GMT+8",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "CA":
          case "ID":
          case "NV":
          case "OR":
          case "WA":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States",
      fr: "États-Unis"
    },
    subdiv: [
      {title: "Arizona"},
      {title: "Colorado"},
      {title: "Kansas"},
      {title: "Montana"},
      {title: "Nebraska"},
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
        }
      },
      {title: "Oklahoma"},
      {
        title: {
          de: "South Dakota",
          en: "South Dakota",
          fr: "Dakota du Sud"
        }
      },
      {title: "Texas"},
      {title: "Utah"},
      {title: "Wyoming"},
    ],
    zone: "Etc/GMT+7",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AZ":
          case "CO":
          case "KS":
          case "MT":
          case "NE":
          case "NM":
          case "ND":
          case "OK":
          case "SD":
          case "TX":
          case "UT":
          case "WY":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
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
          de: "(westlicher Zipfel)",
          en: "(panhandle)",
          fr: "(panhandle)"
        }
      },
      {title: "Illinois"},
      {title: "Indiana"},
      {title: "Iowa"},
      {title: "Kentucky"},
      {
        title: {
          de: "Louisiana",
          en: "Louisiana",
          fr: "Louisiane"
        }
      },
      {title: "Michigan"},
      {title: "Minnesota"},
      {title: "Mississippi"},
      {title: "Missouri"},
      {title: "Tennessee"},
      {title: "Wisconsin"},
    ],
    zone: "Etc/GMT+6",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "AL":
          case "AR":
          case "IL":
          case "IN":
          case "IA":
          case "KY":
          case "LA":
          case "MI":
          case "MN":
          case "MS":
          case "MO":
          case "TN":
          case "WI":
            return true
          case "FL":
            if(city.lon < -84) return true
            return false
          default:
            return false
        }
      }
      return false
    })
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
          de: "(Hauptteil)",
          en: "(except panhandle)",
          fr: "(sauf panhandle)"
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
      },
    ],
    zone: "Etc/GMT+5",
    flag: "US",
    cities: cityList.filter(city => {
      if(city.country === "US") {
        switch(city.adminCode) {
          case "CT":
          case "DE":
          case "DC":
          case "GE":
          case "ME":
          case "MD":
          case "MA":
          case "NH":
          case "NJ":
          case "NY":
          case "NC":
          case "OH":
          case "PA":
          case "RI":
          case "SC":
          case "VT":
          case "VA":
          case "WV":
            return true
          case "FL":
            if(city.lon >= -84) return true
            return false
          default:
            return false
        }
      }
      return false
    })
  },
]

export default countryList