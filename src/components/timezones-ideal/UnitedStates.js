import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Vereinigte Staaten",
      en: "United States"
    },
    subdiv: [
      {title: "Alaska", extra: "(west of 172.5° W)"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Alaska", extra: "(172.5° W – 157.5° W)"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Alaska", extra: "(157.5° W – 142.5° W)"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Alaska", extra: "(east of 142.5° W)"},
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
      en: "United States"
    },
    subdiv: [
      {title: "California"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Arizona"},
      {title: "Colorado"},
      {title: "Kansas"},
      {title: "Montana"},
      {title: "Nebraska"},
      {title: "New Mexico"},
      {title: "North Dakota"},
      {title: "Oklahoma"},
      {title: "South Dakota"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Alabama"},
      {title: "Arkansas"},
      {title: "Florida", extra: "(panhandle)"},
      {title: "Illinois"},
      {title: "Indiana"},
      {title: "Iowa"},
      {title: "Kentucky"},
      {title: "Louisiana"},
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
      en: "United States"
    },
    subdiv: [
      {title: "Connecticut"},
      {title: "Delaware"}, 
      {title: "District of Columbia"}, 
      {title: "Florida", extra: "(except panhandle)"},
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
      {title: "Vermont"},
      {title: "Virginia"},
      {title: "West Virginia"},
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