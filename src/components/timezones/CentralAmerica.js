import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Belize",
      en: "Belize",
      fr: "Belize"
    },
    zone: "America/Belize",
    flag: "BZ",
    cities: cityList.filter(city => city.country === "BZ" && city.tz === "America/Belize")
  },
  {
    country: {
      de: "Costa Rica",
      en: "Costa Rica",
      fr: "Costa Rica"
    },
    zone: "America/Costa_Rica",
    flag: "CR",
    cities: cityList.filter(city => city.country === "CR" && city.tz === "America/Costa_Rica")
  },
  {
    country: {
      de: "El Salvador",
      en: "El Salvador",
      fr: "Salvador"
    },
    zone: "America/El_Salvador",
    flag: "SV",
    cities: cityList.filter(city => city.country === "SV" && city.tz === "America/El_Salvador")
  },
  {
    country: {
      de: "Guatemala",
      en: "Guatemala",
      fr: "Guatemala"
    },
    zone: "America/Guatemala",
    flag: "GT",
    cities: cityList.filter(city => city.country === "GT" && city.tz === "America/Guatemala")
  },
  {
    country: {
      de: "Honduras",
      en: "Honduras",
      fr: "Honduras"
    },
    zone: "America/Tegucigalpa",
    flag: "HN",
    cities: cityList.filter(city => city.country === "HN" && city.tz === "America/Tegucigalpa")
  },
  {
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {title: "Aguascalientes"}, 
      {title: "Campeche"}, 
      {title: "Chiapas"}, 
      {title: "Coahuila"}, 
      {title: "Colima"}, 
      {title: "Durango"}, 
      {title: "Guanajuato"}, 
      {title: "Guerrero"}, 
      {title: "Hidalgo"}, 
      {title: "Jalisco"}, 
      {title: "México"}, 
      {
        title: {
          de: "Mexiko-Stadt",
          en: "Mexico City",
          fr: "Ville de Mexico"
        }
      }, 
      {title: "Michoacán"}, 
      {title: "Morelos"}, 
      {title: "Nuevo León"}, 
      {title: "Oaxaca"}, 
      {title: "Puebla"}, 
      {title: "Querétaro"}, 
      {title: "San Luis Potosí"}, 
      {title: "Tabasco"}, 
      {title: "Tamaulipas"}, 
      {title: "Tlaxcala"}, 
      {title: "Veracruz"}, 
      {title: "Yucatán"}, 
      {title: "Zacatecas"}
    ],
    zone: "America/Mexico_City",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Mexico_City")
  },
  {
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {
        title: {
          de: "Baja California",
          en: "Baja California",
          fr: "Basse-Californie"
        }
      }
    ],
    zone: "America/Tijuana",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Tijuana")
  },
  {
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {
        title: {
          de: "Baja California Sur",
          en: "Baja California Sur",
          fr: "Basse-Californie du Sud"
        }
      },
      {title: "Chihuahua"},
      {title: "Nayarit"},
      {title: "Sinaloa"}
    ],
    zone: "America/Mazatlan",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Mazatlan")
  },
  {
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {title: "Quintana Roo"}
    ],
    zone: "America/Cancun",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Cancun")
  },
  {
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {title: "Sonora"},
      {
        title: {
          de: "Revillagigedo-Inseln",
          en: "Revillagigedo Islands",
          fr: "Îles Revillagigedo"
        }
      }
    ],
    zone: "America/Hermosillo",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Hermosillo")
  },
  {
    country: {
      de: "Nicaragua",
      en: "Nicaragua",
      fr: "Nicaragua"
    },
    zone: "America/Managua",
    flag: "NI",
    cities: cityList.filter(city => city.country === "NI" && city.tz === "America/Managua")
  },
  {
    country: {
      de: "Panama",
      en: "Panama",
      fr: "Panama"
    },
    zone: "America/Panama",
    flag: "PA",
    cities: cityList.filter(city => city.country === "PA" && city.tz === "America/Panama")
  },
]

export default countryList