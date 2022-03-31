import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Argentinien",
      en: "Argentina"
    },
    zone: "Etc/GMT+4",
    flag: "AR",
    cities: cityList.filter(city => city.country === "AR")
  },
  {
    country: {
      de: "Bolivien",
      en: "Bolivia"
    },
    zone: "Etc/GMT+4",
    flag: "BO",
    cities: cityList.filter(city => city.country === "BO")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Acre"}, // 01
      {title: "Amazonas", extra: "(western part)"} // 04
    ],
    zone: "Etc/GMT+5",
    flag: "BR",
    cities: cityList.filter(city => {
      if(city.country === "BR") {
        switch(city.adminCode) {
          case "01":
            return true
          case "04":
            if(city.lon < -67.5) return true
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
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Amazonas", extra: "(eastern part)"}, // 04
      {title: "Mato Grosso"}, // 14
      {title: "Mato Grosso do Sul"}, // 11
      {title: "Pará", extra: "(west of 52.5° W)"}, // 16
      {title: "Rio Grande do Sul"}, // 23
      {title: "Rondônia"}, // 24
      {title: "Roraima"}, // 25
    ],
    zone: "Etc/GMT+4",
    flag: "BR",
    cities: cityList.filter(city => {
      if(city.country === "BR") {
        switch(city.adminCode) {
          case "11":
          case "14":
          case "23":
          case "24":
          case "25":
            return true
          case "04":
            if(city.lon >= -67.5) return true
            return false
          case "16":
            if(city.lon < -52.5) return true
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
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Amapá"}, // 03
      {title: "Bahia"}, // 05
      {title: "Ceará"},  // 06
      {title: "Distrito Federal"}, // 07
      {title: "Espírito Santo"},  // 08
      {title: "Goiás"}, // 29 
      {title: "Maranhão"}, // 13
      {title: "Minas Gerais"}, // 15
      {title: "Pará", extra: "(east of 52.5° W)"}, // 16
      {title: "Paraná"}, // 18
      {title: "Pernambuco"}, // 30
      {title: "Piauí"}, // 20
      {title: "Rio de Janeiro"}, // 21
      {title: "Santa Catarina"}, // 26
      {title: "São Paulo"}, // 27
      {title: "Tocantins"}, // 31
    ],
    zone: "Etc/GMT+3",
    flag: "BR",
    cities: cityList.filter(city => {
      if(city.country === "BR") {
        switch(city.adminCode) {
          case "03":
          case "05":
          case "06":
          case "07":
          case "08":
          case "13":
          case "15":
          case "18":
          case "20":
          case "21":
          case "26":
          case "27":
          case "29":
          case "30":
          case "31":
            return true
          case "16":
            if(city.lon >= -52.5) return true
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
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Alagoas"}, // 02
      {title: "Fernando de Noronha"}, 
      {title: "Paraíba"}, // 17
      {title: "Rio Grande do Norte"}, // 22
      {title: "Sergipe"}, // 28
    ],
    zone: "Etc/GMT+2",
    flag: "BR",
    cities: cityList.filter(city => {
      if(city.country === "BR") {
        if(city.tz === "America/Noronha") return true
        switch(city.adminCode) {
          case "02":
          case "17":
          case "22":
          case "28":
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
      de: "Chile",
      en: "Chile"
    },
    subdiv: [
      {title: "Easter Island"}
    ],
    zone: "Etc/GMT+7",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "Pacific/Easter")
  },
  {
    country: {
      de: "Chile",
      en: "Chile"
    },
    subdiv: [
      {title: "Aisén"},
      {title: "Antofagasta"},
      {title: "Araucanía"},
      {title: "Arica and Parinacota"},
      {title: "Atacama"},
      {title: "Biobío"},
      {title: "Coquimbo"},
      {title: "Los Lagos"},
      {title: "Los Ríos"},
      {title: "Magallanes and Antártica Chilena Region"},
      {title: "Maule"},
      {title: "Ñuble"},
      {title: "Región del Libertador Bernardo O'Higgins"},
      {title: "Santiago"},
      {title: "Tarapacá"},
      {title: "Valparaíso", extra: "(continental part)"},
    ],
    zone: "Etc/GMT+5",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz !== "Pacific/Easter")
  },
  {
    country: {
      de: "Kolumbien",
      en: "Colombia"
    },
    zone: "Etc/GMT+5",
    flag: "CO",
    cities: cityList.filter(city => city.country === "CO")
  },
  {
    country: {
      de: "Ecuador",
      en: "Ecuador"
    },
    subdiv: [
      {title: "Azuay"},
      {title: "Bolívar"},
      {title: "Cañar"},
      {title: "Carchi"},
      {title: "Chimborazo"},
      {title: "Cotopaxi"},
      {title: "El Oro"},
      {title: "Esmeraldas"},
      {title: "Guayas"},
      {title: "Imbabura"},
      {title: "Loja"},
      {title: "Los Ríos"},
      {title: "Manabí"},
      {title: "Morona Santiago"},
      {title: "Napo"},
      {title: "Orellana"},
      {title: "Pastaza"},
      {title: "Pichincha"},
      {title: "Santa Elena"},
      {title: "Santo Domingo de los Tsáchilas"},
      {title: "Sucumbíos"},
      {title: "Tungurahua"},
      {title: "Zamora Chinchipe"}
    ],
    zone: "Etc/GMT+5",
    flag: "EC",
    cities: cityList.filter(city => city.country === "CL" && city.tz !== "Pacific/Galapagos")
  },
  {
    country: {
      de: "Ecuador",
      en: "Ecuador"
    },
    subdiv: [
      {title: "Galápagos"}
    ],
    zone: "Etc/GMT+6",
    flag: "EC",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "Pacific/Galapagos")
  },
  {
    country: {
      de: "Falklandinseln (Vereinigtes Königreich)",
      en: "Falkland Islands (United Kingdom)"
    },
    zone: "Etc/GMT+4",
    flag: "FK",
    cities: cityList.filter(city => city.country === "FK")
  },
  {
    country: {
      de: "Französisch-Guayana (Frankreich)",
      en: "French Guiana (France)"
    },
    zone: "Etc/GMT+4",
    flag: "GF",
    cities: cityList.filter(city => city.country === "GF")
  },
  {
    country: {
      de: "Guyana",
      en: "Guyana"
    },
    zone: "Etc/GMT+4",
    flag: "GY",
    cities: cityList.filter(city => city.country === "GY")
  },
  {
    country: {
      de: "Paraguay",
      en: "Paraguay"
    },
    zone: "Etc/GMT+4",
    flag: "PY",
    cities: cityList.filter(city => city.country === "PY")
  },
  {
    country: {
      de: "Peru",
      en: "Peru"
    },
    zone: "Etc/GMT+5",
    flag: "PE",
    cities: cityList.filter(city => city.country === "PE")
  },
  {
    country: {
      de: "Südgeorgien und die Südlichen Sandwichinseln (Vereinigtes Königreich)",
      en: "South Georgia and the South Sandwich Islands (United Kingdom)"
    },
    zone: "Etc/GMT+2",
    flag: "GS",
    cities: cityList.filter(city => city.country === "GS")
  },
  {
    country: {
      de: "Suriname",
      en: "Suriname"
    },
    zone: "Etc/GMT+4",
    flag: "SR",
    cities: cityList.filter(city => city.country === "SR")
  },
  {
    country: {
      de: "Uruguay",
      en: "Uruguay"
    },
    zone: "Etc/GMT+4",
    flag: "UY",
    cities: cityList.filter(city => city.country === "UY")
  },
  {
    country: {
      de: "Venezuela",
      en: "Venezuela"
    },
    zone: "Etc/GMT+4",
    flag: "VE",
    cities: cityList.filter(city => city.country === "VE")
  }
]

export default countryList