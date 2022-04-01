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
          en: "Western Australia"
        }
      } // 08
    ],
    zone: "Etc/GMT-8",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && city.adminCode === "08")
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
      }, // 03
      {
        title: {
          de: "Südaustralien",
          en: "South Australia"
        }
      }, // 05
    ],
    zone: "Etc/GMT-9",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && ["03","05"].includes(city.adminCode))
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
      }, // 01
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales"
        }
      }, // 02
      {
        title: {
          de: "Queensland",
          en: "Queensland"
        }
      }, // 04
      {
        title: {
          de: "Tasmanien",
          en: "Tasmania"
        }
      }, // 06
      {
        title: {
          de: "Victoria",
          en: "Victoria"
        }
      } // 07
    ],
    zone: "Etc/GMT-10",
    flag: "AU",
    cities: cityList.filter(city => city.country === "AU" && ["01","02","04","06","07"].includes(city.adminCode))
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
      },
      {
        title: {
          de: "Norfolkinsel",
          en: "Norfolk Island"
        }
      }
    ],
    zone: "Etc/GMT-11",
    flag: "AU",
    cities: []
  },
]

export default countryList