import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Argentinien",
      en: "Argentina",
      fr: "Argentine"
    },
    zone: "Etc/GMT+4",
    flag: "AR",
    cities: cityList.filter(city => city.country === "AR")
  },
  {
    country: {
      de: "Bolivien",
      en: "Bolivia",
      fr: "Bolivie"
    },
    zone: "Etc/GMT+4",
    flag: "BO",
    cities: cityList.filter(city => city.country === "BO")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil",
      fr: "Brésil"
    },
    subdiv: [
      {title: "Acre"}, // 01
      {
        title: "Amazonas", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      } // 04
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
      en: "Brazil",
      fr: "Brésil"
    },
    subdiv: [
      {
        title: "Amazonas", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
        }
      }, // 04
      {title: "Mato Grosso"}, // 14
      {title: "Mato Grosso do Sul"}, // 11
      {
        title: "Pará", 
        extra: {
          de: "(westlich von 52.5° W)",
          en: "(west of 52.5° W)",
          fr: "(ouest de 52.5° O)"
        }
      }, // 16
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
      en: "Brazil",
      fr: "Brésil"
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
      {
        title: "Pará", 
        extra: {
          de: "(östlich von 52.5° W)",
          en: "(east of 52.5° W)",
          fr: "(est de 52.5° O)"
        }
      }, // 16
      {title: "Paraná"}, // 18
      {
        title: {
          de: "Pernambuco",
          en: "Pernambuco",
          fr: "Pernambouc"
        }
      }, // 30
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
      en: "Brazil",
      fr: "Brésil"
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
      en: "Chile",
      fr: "Chili"
    },
    subdiv: [
      {
        title: {
          de: "Osterinsel/Rapa Nui",
          en: "Easter Island/Rapa Nui",
          fr: "Île de Paques/Rapa Nui"
        }
      }
    ],
    zone: "Etc/GMT+7",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "Pacific/Easter")
  },
  {
    country: {
      de: "Chile",
      en: "Chile",
      fr: "Chili"
    },
    subdiv: [
      {
        title: {
          de: "Aisén",
          en: "Aisén",
          fr: "Aysén"
        }
      },
      {title: "Antofagasta"},
      {
        title: {
          de: "Araucanía",
          en: "Araucanía",
          fr: "Araucanie"
        }
      },
      {
        title: {
          de: "Arica und Parinacota",
          en: "Arica and Parinacota",
          fr: "Arica et Parinacota"
        }
      },
      {title: "Atacama"},
      {title: "Biobío"},
      {title: "Coquimbo"},
      {
        title: {
          de: "Los Lagos",
          en: "Los Lagos",
          fr: "Lacs"
        }
      },
      {
        title: {
          de: "Los Ríos",
          en: "Los Ríos",
          fr: "Fleuves"
        }
      },
      {
        title: {
          de: "Magallanes and Antártica Chilena Region",
          en: "Magallanes and Antártica Chilena Region",
          fr: "Région de Magallanes et de l'Antarctique chilien"
        }
      },
      {title: "Maule"},
      {title: "Ñuble"},
      {
        title: {
          de: "Región del Libertador Bernardo O'Higgins",
          en: "Región del Libertador Bernardo O'Higgins",
          fr: "Région du Libérateur Général Bernardo O'Higgins"
        }
      },
      {title: "Santiago"},
      {title: "Tarapacá"},
      {
        title: "Valparaíso", 
        extra: {
          de: "(Festland)",
          en: "(continental part)",
          fr: "(terre ferme)"
        }
      },
    ],
    zone: "Etc/GMT+5",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz !== "Pacific/Easter")
  },
  {
    country: {
      de: "Kolumbien",
      en: "Colombia",
      fr: "Colombie"
    },
    zone: "Etc/GMT+5",
    flag: "CO",
    cities: cityList.filter(city => city.country === "CO")
  },
  {
    country: {
      de: "Ecuador",
      en: "Ecuador",
      fr: "Équateur"
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
      en: "Ecuador",
      fr: "Équateur"
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
      en: "Falkland Islands (United Kingdom)",
      fr: "Îles Malouines (Royaume-Uni)"
    },
    zone: "Etc/GMT+4",
    flag: "FK",
    cities: cityList.filter(city => city.country === "FK")
  },
  {
    country: {
      de: "Französisch-Guayana (Frankreich)",
      en: "French Guiana (France)",
      fr: "Guyane Française (France)"
    },
    zone: "Etc/GMT+4",
    flag: "GF",
    cities: cityList.filter(city => city.country === "GF")
  },
  {
    country: {
      de: "Guyana",
      en: "Guyana",
      fr: "Guyana"
    },
    zone: "Etc/GMT+4",
    flag: "GY",
    cities: cityList.filter(city => city.country === "GY")
  },
  {
    country: {
      de: "Paraguay",
      en: "Paraguay",
      fr: "Paraguay"
    },
    zone: "Etc/GMT+4",
    flag: "PY",
    cities: cityList.filter(city => city.country === "PY")
  },
  {
    country: {
      de: "Peru",
      en: "Peru",
      fr: "Pérou"
    },
    zone: "Etc/GMT+5",
    flag: "PE",
    cities: cityList.filter(city => city.country === "PE")
  },
  {
    country: {
      de: "Südgeorgien und die Südlichen Sandwichinseln (Vereinigtes Königreich)",
      en: "South Georgia and the South Sandwich Islands (United Kingdom)",
      fr: "Géorgie du Sud-et-les îles Sandwich du Sud (Royaume-Uni)"
    },
    zone: "Etc/GMT+2",
    flag: "GS",
    cities: cityList.filter(city => city.country === "GS")
  },
  {
    country: {
      de: "Suriname",
      en: "Suriname",
      fr: "Suriname"
    },
    zone: "Etc/GMT+4",
    flag: "SR",
    cities: cityList.filter(city => city.country === "SR")
  },
  {
    country: {
      de: "Uruguay",
      en: "Uruguay",
      fr: "Uruguay"
    },
    zone: "Etc/GMT+4",
    flag: "UY",
    cities: cityList.filter(city => city.country === "UY")
  },
  {
    country: {
      de: "Venezuela",
      en: "Venezuela",
      fr: "Venezuela"
    },
    zone: "Etc/GMT+4",
    flag: "VE",
    cities: cityList.filter(city => city.country === "VE")
  }
]

export default countryList