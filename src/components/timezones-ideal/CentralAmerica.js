import cityList from "./cityList"

export default [
  {
    country: "Belize",
    zone: "Etc/GMT+7",
    flag: "BZ",
    cities: cityList.filter(city => city.country === "BZ")
  },
  {
    country: "Costa Rica",
    zone: "Etc/GMT+6",
    flag: "CR",
    cities: cityList.filter(city => city.country === "CR")
  },
  {
    country: "El Salvador",
    zone: "Etc/GMT+6",
    flag: "SV",
    cities: cityList.filter(city => city.country === "SV")
  },
  {
    country: "Guatemala",
    zone: "Etc/GMT+6",
    flag: "GT",
    cities: cityList.filter(city => city.country === "GT")
  },
  {
    country: "Honduras",
    zone: "Etc/GMT+6",
    flag: "HN",
    cities: cityList.filter(city => city.country === "HN")
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Baja California"}, // 02
      {title: "Baja California Sur"}, // 03
      {title: "Revillagigedo Islands"} // nur 45 Einwohner, deshalb 
    ],
    zone: "Etc/GMT+8",
    flag: "MX",
    cities: cityList.filter(city => {
      if(city.country === "MX") {
        if(city.adminCode === "02") return true
        if(city.adminCode === "03") return true
        return false
      }
      return false
    })
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Aguascalientes"}, // 01
      {title: "Chihuahua"}, // 06
      {title: "Coahuila"}, // 07
      {title: "Colima"}, // 08
      {title: "Distrito Federal"}, // 09
      {title: "Durango"}, // 10
      {title: "Guanajuato"}, // 11
      {title: "Guerrero"}, // 12
      {title: "Hidalgo"}, // 13
      {title: "Jalisco"}, // 14
      {title: "México"}, // 15
      {title: "Michoacán"}, // 16
      {title: "Morelos"}, // 17
      {title: "Nayarit"}, // 18
      {title: "Nuevo León"}, // 19
      {title: "Puebla"}, // 21
      {title: "Querétaro"}, // 22
      {title: "San Luis Potosí"}, // 24 
      {title: "Sinaloa"}, // 25
      {title: "Sonora"}, // 26
      {title: "Tamaulipas"}, // 28
      {title: "Tlaxcala"}, // 29
      {title: "Zacatecas"} // 32
    ],
    zone: "Etc/GMT+7",
    flag: "MX",
    cities: cityList.filter(city => {
      if(city.country === "MX") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "06") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08") return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "15") return true
        if(city.adminCode === "16") return true
        if(city.adminCode === "17") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "19") return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "22") return true
        if(city.adminCode === "24") return true
        if(city.adminCode === "25") return true
        if(city.adminCode === "26") return true
        if(city.adminCode === "28") return true
        if(city.adminCode === "29") return true
        if(city.adminCode === "32") return true
        return false
      }
      return false
    })
  },
  {
    country: "Mexico",
    subdiv: [
      {title: "Campeche"}, // 04
      {title: "Chiapas"}, // 05
      {title: "Oaxaca"}, // 20
      {title: "Quintana Roo"}, // 23
      {title: "Tabasco"}, // 27
      {title: "Veracruz"}, // 30
      {title: "Yucatán"}, // 31
    ],
    zone: "Etc/GMT+6",
    flag: "MX",
    cities: cityList.filter(city => {
      if(city.country === "MX") {
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "20") return true
        if(city.adminCode === "23") return true
        if(city.adminCode === "27") return true
        if(city.adminCode === "30") return true
        if(city.adminCode === "31") return true
        return false
      }
      return false
    })
  },
  {
    country: "Nicaragua",
    zone: "Etc/GMT+6",
    flag: "NI",
    cities: cityList.filter(city => city.country === "NI")
  },
  {
    country: "Panama",
    zone: "Etc/GMT+5",
    flag: "PA",
    cities: cityList.filter(city => city.country === "PA")
  },
]
