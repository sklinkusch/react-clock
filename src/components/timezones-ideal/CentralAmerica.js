import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Belize",
      en: "Belize",
      fr: "Belize"
    },
    zone: "Etc/GMT+7",
    flag: "BZ",
    cities: cityList.filter(city => city.country === "BZ")
  },
  {
    country: {
      de: "Costa Rica",
      en: "Costa Rica",
      fr: "Costa Rica"
    },
    zone: "Etc/GMT+6",
    flag: "CR",
    cities: cityList.filter(city => city.country === "CR")
  },
  {
    country: {
      de: "El Salvador",
      en: "El Salvador",
      fr: "Salvador"
    },
    zone: "Etc/GMT+6",
    flag: "SV",
    cities: cityList.filter(city => city.country === "SV")
  },
  {
    country: {
      de: "Guatemala",
      en: "Guatemala",
      fr: "Guatemala"
    },
    zone: "Etc/GMT+6",
    flag: "GT",
    cities: cityList.filter(city => city.country === "GT")
  },
  {
    country: {
      de: "Honduras",
      en: "Honduras",
      fr: "Honduras"
    },
    zone: "Etc/GMT+6",
    flag: "HN",
    cities: cityList.filter(city => city.country === "HN")
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
      }, // 02
      {
        title: {
          de: "Baja California Sur",
          en: "Baja California Sur",
          fr: "Basse-Californie du Sud"
        }
      }, // 03
      {
        title: {
          de: "Revillagigedo-Inseln",
          en: "Revillagigedo Islands",
          fr: "Îles Revillagigedo"
        }
      } // nur 45 Einwohner, deshalb 
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
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
    subdiv: [
      {title: "Aguascalientes"}, // 01
      {title: "Chihuahua"}, // 06
      {title: "Coahuila"}, // 07
      {title: "Colima"}, // 08
      {title: "Durango"}, // 10
      {title: "Guanajuato"}, // 11
      {title: "Guerrero"}, // 12
      {title: "Hidalgo"}, // 13
      {title: "Jalisco"}, // 14
      {title: "México"}, // 15
      {
        title: {
          de: "Mexiko-Stadt",
          en: "Mexico City",
          fr: "Ville de Mexico"
        }
      }, // 09
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
    country: {
      de: "Mexiko",
      en: "Mexico",
      fr: "Mexique"
    },
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
    country: {
      de: "Nicaragua",
      en: "Nicaragua",
      fr: "Nicaragua"
    },
    zone: "Etc/GMT+6",
    flag: "NI",
    cities: cityList.filter(city => city.country === "NI")
  },
  {
    country: {
      de: "Panama",
      en: "Panama",
      fr: "Panama"
    },
    zone: "Etc/GMT+5",
    flag: "PA",
    cities: cityList.filter(city => city.country === "PA")
  },
]

export default countryList