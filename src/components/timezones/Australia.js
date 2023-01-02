import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Westaustralien",
          en: "Western Australia",
          fr: "Australie occidentale"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }
    ],
    zone: "Australia/Perth",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Perth")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Westaustralien",
          en: "Western Australia",
          fr: "Australie occidentale"
        }, 
        extra: "(Eucla)"
      }
    ],
    zone: "Australia/Eucla",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Eucla")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Nordterritorium",
          en: "Northern Territory",
          fr: "Territoire du Nord"
        }
      }
    ],
    zone: "Australia/Darwin",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Darwin")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Queensland",
          en: "Queensland",
          fr: "Queensland"
        }
      }
    ],
    zone: "Australia/Brisbane",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Brisbane")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Südaustralien",
          en: "South Australia",
          fr: "Australie méridionale"
        }
      }
    ],
    zone: "Australia/Adelaide",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Adelaide")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales",
          fr: "Nouvelle-Galles du Sud"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)",
          fr: "(plupart de l'état)"
        }
      }
    ],
    zone: "Australia/Sydney",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Sydney")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Australisches Hauptstadtterritorium",
          en: "Australian Capital Territory",
          fr: "Territoire de la capitale australienne"
        }
      }
    ],
    zone: "Australia/Canberra",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Canberra")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales",
          fr: "Nouvelle-Galles du Sud"
        }, 
        extra: "(Yancowinna)"
      }
    ],
    zone: "Australia/Broken_Hill",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Broken_Hill")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Victoria",
          en: "Victoria",
          fr: "Victoria"
        }
      }
    ],
    zone: "Australia/Melbourne",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Melbourne")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Tasmanien",
          en: "Tasmania",
          fr: "Tasmanie"
        }
      }
    ],
    zone: "Australia/Hobart",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Hobart")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Lord-Howe-Inselgruppe",
          en: "Lord Howe Island",
          fr: "Île Lord Howe"
        }
      }
    ],
    zone: "Australia/Lord_Howe",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Lord_Howe")
  },
  {
    country: {
      de: "Australien",
      en: "Australia",
      fr: "Australie"
    },
    subdiv: [
      {
        title: {
          de: "Norfolkinsel",
          en: "Norfolk Island",
          fr: "Île Norfolk"
        }
      }
    ],
    zone: "Pacific/Norfolk",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Norfolk")
  },
]

export default countryList