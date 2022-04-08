import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Argentinien",
      en: "Argentina"
    },
    zone: "America/Argentina/Buenos_Aires",
    flag: "AR",
    cities: cityList.filter(city => city.country === "AR" && city.tz.startsWith("America/Argentina"))
  },
  {
    country: {
      de: "Bolivien",
      en: "Bolivia"
    },
    zone: "America/La_Paz",
    flag: "BO",
    cities: cityList.filter(city => city.country === "BO" && city.tz === "America/La_Paz")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Acre"}
    ],
    zone: "America/Rio_Branco",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Rio_Branco")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {
        title: "Amazonas", 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
        }
      }
    ],
    zone: "America/Eirunepe",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Eirunepe")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Distrito Federal"}, 
      {title: "Espírito Santo"}, 
      {title: "Goiás"}, 
      {title: "Minas Gerais"}, 
      {title: "Paraná"}, 
      {title: "Rio de Janeiro"}, 
      {title: "Rio Grande do Sul"}, 
      {title: "Santa Catarina"}, 
      {title: "São Paulo"}
    ],
    zone: "America/Sao_Paulo",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Sao_Paulo")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Alagoas"}, 
      {title: "Sergipe"}
    ],
    zone: "America/Maceio",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Maceio")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Amapá"}
    ],
    zone: "America/Belem",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Belem")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Bahia"}
    ],
    zone: "America/Bahia",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Bahia")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Ceará"}, 
      {title: "Maranhão"}, 
      {title: "Paraíba"}, 
      {title: "Piauí"}, 
      {title: "Rio Grande do Norte"}
    ],
    zone: "America/Fortaleza",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Fortaleza")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Pará"}
    ],
    zone: "America/Santarem",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Santarem")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Pernambuco"}
    ],
    zone: "America/Recife",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Recife")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Tocantins"}
    ],
    zone: "America/Araguaina",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Araguaina")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {
        title: "Amazonas", 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }
    ],
    zone: "America/Manaus",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Manaus")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Mato Grosso"}
    ],
    zone: "America/Cuiaba",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Cuiaba")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Mato Grosso do Sul"}
    ],
    zone: "America/Campo_Grande",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Campo_Grande")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Rondônia"}
    ],
    zone: "America/Porto_Velho",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Porto_Velho")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Roraima"}
    ],
    zone: "America/Boa_Vista",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Boa_Vista")
  },
  {
    country: {
      de: "Brasilien",
      en: "Brazil"
    },
    subdiv: [
      {title: "Fernando de Noronha"}, 
      {title: 
        {
          de: "Sankt-Peter-und-Sankt-Pauls-Felsen",
          en: "Saint Peter and Saint Paul Archipelago"
        }
      }
    ],
    zone: "America/Noronha",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Noronha")
  },
  {
    country: {
      de: "Chile",
      en: "Chile"
    },
    subdiv: [
      {
        title: {
          de: "Osterinsel",
          en: "Easter Island"
        }
      }
    ],
    zone: "Pacific/Easter",
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
      {title: "Maule"},
      {title: "Ñuble"},
      {title: "Región del Libertador Bernardo O'Higgins"},
      {title: "Santiago"},
      {title: "Tarapacá"},
      {
        title: "Valparaíso", 
        extra: {
          de: "(Festland)",
          en: "(continental part)"
        }
      },
    ],
    zone: "America/Santiago",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "America/Santiago")
  },
  {
    country: {
      de: "Chile",
      en: "Chile"
    },
    subdiv: [
      {title: "Magallanes and Antártica Chilena Region"}
    ],
    zone: "America/Punta_Arenas",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "America/Punta_Arenas")
  },
  {
    country: {
      de: "Kolumbien",
      en: "Colombia"
    },
    zone: "America/Bogota",
    flag: "CO",
    cities: cityList.filter(city => city.country === "CO" && city.tz === "America/Bogota")
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
    zone: "America/Guayaquil",
    flag: "EC",
    cities: cityList.filter(city => city.country === "EC" && city.tz === "America/Guayaquil")
  },
  {
    country: {
      de: "Ecuador",
      en: "Ecuador"
    },
    subdiv: [
      {title: "Galápagos"}
    ],
    zone: "Pacific/Galapagos",
    flag: "EC",
    cities: cityList.filter(city => city.country === "EC" && city.tz === "Pacific/Galapagos")
  },
  {
    country: {
      de: "Falklandinseln (Vereinigtes Königreich)",
      en: "Falkland Islands (United Kingdom)"
    },
    zone: "Atlantic/Stanley",
    flag: "FK",
    cities: cityList.filter(city => city.country === "FK" && city.tz === "Atlantic/Stanley")
  },
  {
    country: {
      de: "Französisch-Guayana (Frankreich)",
      en: "French Guiana (France)"
    },
    zone: "America/Cayenne",
    flag: "GF",
    cities: cityList.filter(city => city.country === "GF" && city.tz === "America/Cayenne")
  },
  {
    country: {
      de: "Guyana",
      en: "Guyana"
    },
    zone: "America/Guyana",
    flag: "GY",
    cities: cityList.filter(city => city.country === "GY" && city.tz === "America/Guyana")
  },
  {
    country: {
      de: "Paraguay",
      en: "Paraguay"
    },
    zone: "America/Asuncion",
    flag: "PY",
    cities: cityList.filter(city => city.country === "PY" && city.tz === "America/Asuncion")
  },
  {
    country: {
      de: "Peru",
      en: "Peru"
    },
    zone: "America/Lima",
    flag: "PE",
    cities: cityList.filter(city => city.country === "PE" && city.tz === "America/Lima")
  },
  {
    country: {
      de: "Südgeorgien und die Südlichen Sandwichinseln (Vereinigtes Königreich)",
      en: "South Georgia and the South Sandwich Islands (United Kingdom)"
    },
    zone: "Atlantic/South_Georgia",
    flag: "GS",
    cities: cityList.filter(city => city.country === "GS" && city.tz === "Atlantic/South_Georgia")
  },
  {
    country: {
      de: "Suriname",
      en: "Suriname"
    },
    zone: "America/Paramaribo",
    flag: "SR",
    cities: cityList.filter(city => city.country === "SR" && city.tz === "America/Paramaribo")
  },
  {
    country: {
      de: "Uruguay",
      en: "Uruguay"
    },
    zone: "America/Montevideo",
    flag: "UY",
    cities: cityList.filter(city => city.country === "UY" && city.tz === "America/Montevideo")
  },
  {
    country: {
      de: "Venezuela",
      en: "Venezuela"
    },
    zone: "America/Caracas",
    flag: "VE",
    cities: cityList.filter(city => city.country === "VE" && city.tz === "America/Caracas")
  }
]

export default countryList