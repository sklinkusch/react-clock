import cityList from "./cityList"

export default [
  {
    country: "Belize",
    zone: "America/Belize",
    flag: "BZ",
    cities: cityList.filter(city => city.country === "BZ" && city.tz === "America/Belize")
  },
  {
    country: "Costa Rica",
    zone: "America/Costa_Rica",
    flag: "CR",
    cities: cityList.filter(city => city.country === "CR" && city.tz === "America/Costa_Rica")
  },
  {
    country: "El Salvador",
    zone: "America/El_Salvador",
    flag: "SV",
    cities: cityList.filter(city => city.country === "SV" && city.tz === "America/El_Salvador")
  },
  {
    country: "Guatemala",
    zone: "America/Guatemala",
    flag: "GT",
    cities: cityList.filter(city => city.country === "GT" && city.tz === "America/Guatemala")
  },
  {
    country: "Honduras",
    zone: "America/Tegucigalpa",
    flag: "HN",
    cities: cityList.filter(city => city.country === "HN" && city.tz === "America/Tegucigalpa")
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Aguascalientes"}, 
      {title: "Campeche"}, 
      {title: "Chiapas"}, 
      {title: "Coahuila"}, 
      {title: "Colima"}, 
      {title: "Distrito Federal"}, 
      {title: "Durango"}, 
      {title: "Guanajuato"}, 
      {title: "Guerrero"}, 
      {title: "Hidalgo"}, 
      {title: "Jalisco"}, 
      {title: "México"}, 
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
    country: "Mexico",
    subdiv: [
      {title: "Baja California"}
    ],
    zone: "America/Tijuana",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Tijuana")
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Baja California Sur"},
      {title: "Chihuahua"},
      {title: "Nayarit"},
      {title: "Sinaloa"}
    ],
    zone: "America/Mazatlan",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Mazatlan")
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Quintana Roo"}
    ],
    zone: "America/Cancun",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Cancun")
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Sonora"},
      {title: "Revillagigedo Islands"}
    ],
    zone: "America/Hermosillo",
    flag: "MX",
    cities: cityList.filter(city => city.country === "MX" && city.tz === "America/Hermosillo")
  },
  {
    country: "Nicaragua",
    zone: "America/Managua",
    flag: "NI",
    cities: cityList.filter(city => city.country === "NI" && city.tz === "America/Managua")
  },
  {
    country: "Panama",
    zone: "America/Panama",
    flag: "PA",
    cities: cityList.filter(city => city.country === "PA" && city.tz === "America/Panama")
  },
]
