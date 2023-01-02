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
      }, // 03
      {
        title: {
          de: "Südaustralien",
          en: "South Australia",
          fr: "Australie méridionale"
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
      }, // 01
      {
        title: {
          de: "Neusüdwales",
          en: "New South Wales",
          fr: "Nouvelle-Galles du Sud"
        }
      }, // 02
      {
        title: {
          de: "Queensland",
          en: "Queensland",
          fr: "Queensland"
        }
      }, // 04
      {
        title: {
          de: "Tasmanien",
          en: "Tasmania",
          fr: "Tasmanie"
        }
      }, // 06
      {
        title: {
          de: "Victoria",
          en: "Victoria",
          fr: "Victoria"
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
      },
      {
        title: {
          de: "Norfolkinsel",
          en: "Norfolk Island",
          fr: "Île Norfolk"
        }
      }
    ],
    zone: "Etc/GMT-11",
    flag: "AU",
    cities: []
  },
]

export default countryList