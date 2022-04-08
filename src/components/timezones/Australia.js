import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Australien",
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Westaustralien",
          en: "Western Australia",
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Westaustralien",
          en: "Western Australia"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Nordterritorium",
          en: "Northern Territory"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Queensland",
          en: "Queensland"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Südaustralien",
          en: "South Australia"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales"
        }, 
        extra: {
          de: "(größtenteils)",
          en: "(most of state)"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Australisches Hauptstadtterritorium",
          en: "Australian Capital Territory"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Victoria",
          en: "Victoria"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Tasmanien",
          en: "Tasmania"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Lord-Howe-Inselgruppe",
          en: "Lord Howe Island"
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
      en: "Australia"
    },
    subdiv: [
      {
        title: {
          de: "Norfolkinsel",
          en: "Norfolk Island"
        }
      }
    ],
    zone: "Pacific/Norfolk",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.tz === "Australia/Norfolk")
  },
]

export default countryList