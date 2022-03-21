import cityList from "./cityList"

export default [
  {
    country: "Argentina",
    zone: "America/Argentina/Buenos_Aires",
    flag: "AR",
    cities: cityList.filter(city => city.country === "AR" && city.tz.startsWith("America/Argentina"))
  },
  {
    country: "Bolivia",
    zone: "America/La_Paz",
    flag: "BO",
    cities: cityList.filter(city => city.country === "BO" && city.tz === "America/La_Paz")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Acre"}
    ],
    zone: "America/Rio_Branco",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Rio_Branco")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Amazonas", extra: "(western part)"}
    ],
    zone: "America/Eirunepe",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Eirunepe")
  },
  {
    country: "Brazil",
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
    country: "Brazil",
    subdiv: [
      {title: "Alagoas"}, 
      {title: "Sergipe"}
    ],
    zone: "America/Maceio",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Maceio")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Amapá"}
    ],
    zone: "America/Belem",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Belem")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Bahia"}
    ],
    zone: "America/Bahia",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Bahia")
  },
  {
    country: "Brazil",
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
    country: "Brazil",
    subdiv: [
      {title: "Pará"}
    ],
    zone: "America/Santarem",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Santarem")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Pernambuco"}
    ],
    zone: "America/Recife",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Recife")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Tocantins"}
    ],
    zone: "America/Araguaina",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Araguaina")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Amazonas", extra: "(eastern part)"}
    ],
    zone: "America/Manaus",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Manaus")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Mato Grosso"}
    ],
    zone: "America/Cuiaba",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Cuiaba")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Mato Grosso do Sul"}
    ],
    zone: "America/Campo_Grande",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Campo_Grande")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Rondônia"}
    ],
    zone: "America/Porto_Velho",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Porto_Velho")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Roraima"}
    ],
    zone: "America/Boa_Vista",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Boa_Vista")
  },
  {
    country: "Brazil",
    subdiv: [
      {title: "Fernando de Noronha"}, 
      {title: "Saint Peter and Saint Paul Archipelago"}
    ],
    zone: "America/Noronha",
    flag: "BR",
    cities: cityList.filter(city => city.country === "BR" && city.tz === "America/Noronha")
  },
  {
    country: "Chile",
    subdiv: [
      {title: "Easter Island"}
    ],
    zone: "Pacific/Easter",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "Pacific/Easter")
  },
  {
    country: "Chile",
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
      {title: "Valparaíso", extra: "(continental part)"},
    ],
    zone: "America/Santiago",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "America/Santiago")
  },
  {
    country: "Chile",
    subdiv: [
      {title: "Magallanes and Antártica Chilena Region"}
    ],
    zone: "America/Punta_Arenas",
    flag: "CL",
    cities: cityList.filter(city => city.country === "CL" && city.tz === "America/Punta_Arenas")
  },
  {
    country: "Colombia",
    zone: "America/Bogota",
    flag: "CO",
    cities: cityList.filter(city => city.country === "CO" && city.tz === "America/Bogota")
  },
  {
    country: "Ecuador",
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
    country: "Ecuador",
    subdiv: [
      {title: "Galápagos"}
    ],
    zone: "Pacific/Galapagos",
    flag: "EC",
    cities: cityList.filter(city => city.country === "EC" && city.tz === "America/Galapagos")
  },
  {
    country: "Falkland Islands (United Kingdom)",
    zone: "Atlantic/Stanley",
    flag: "FK",
    cities: cityList.filter(city => city.country === "FK" && city.tz === "Atlantic/Stanley")
  },
  {
    country: "French Guiana (France)",
    zone: "America/Cayenne",
    flag: "GF",
    cities: cityList.filter(city => city.country === "GF" && city.tz === "America/Cayenne")
  },
  {
    country: "Guyana",
    zone: "America/Guyana",
    flag: "GY",
    cities: cityList.filter(city => city.country === "GY" && city.tz === "America/Guyana")
  },
  {
    country: "Paraguay",
    zone: "America/Asuncion",
    flag: "PY",
    cities: cityList.filter(city => city.country === "PY" && city.tz === "America/Asuncion")
  },
  {
    country: "Peru",
    zone: "America/Lima",
    flag: "PE",
    cities: cityList.filter(city => city.country === "PE" && city.tz === "America/Lima")
  },
  {
    country: "South Georgia and the South Sandwich Islands (United Kingdom)",
    zone: "Atlantic/South_Georgia",
    flag: "GS",
    cities: cityList.filter(city => city.country === "GS" && city.tz === "Atlantic/South_Georgia")
  },
  {
    country: "Suriname",
    zone: "America/Paramaribo",
    flag: "SR",
    cities: cityList.filter(city => city.country === "SR" && city.tz === "America/Paramaribo")
  },
  {
    country: "Uruguay",
    zone: "America/Montevideo",
    flag: "UY",
    cities: cityList.filter(city => city.country === "UY" && city.tz === "America/Montevideo")
  },
  {
    country: "Venezuela",
    zone: "America/Caracas",
    flag: "VE",
    cities: cityList.filter(city => city.country === "VE" && city.tz === "America/Caracas")
  }
]