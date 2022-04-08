import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China"
    },
    subdiv: [
      {
        title: "Tibet", 
        extra: {
          de: "(westlich von 82.5° E)",
          en: "(west of 82.5° E)"
        }
      }, // 14
      {
        title: "Xinjiang", 
        extra: {
          de: "(westlich von 82.5° E)",
          en: "(west of 82.5° E)"
        }
      }, // 13
    ],
    zone: "Etc/GMT-5",
    flag: "CN",
    cities: cityList.filter(city => {
      if(city.country === "CN") {
        if(city.adminCode === "13" && city.lon < 82.5) return true
        if(city.adminCode === "14" && city.lon < 82.5) return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China"
    },
    subdiv: [
      {
        title: "Gansu", 
        extra: {
          de: "(westlich von 97.5° E)",
          en: "(west of 97.5° E)"
        }
      }, // 15
      {
        title: "Qinghai", 
        extra: {
          de: "(westlich von 97.5° E)",
          en: "(west of 97.5° E)"
        }
      }, // 06
      {
        title: "Tibet", 
        extra: {
          de: "(östlich von 82.5° E)",
          en: "(east of 82.5° E)"
        }
      }, // 14
      {
        title: "Xinjiang", 
        extra: {
          de: "(östlich von 82.5° E)",
          en: "(east of 82.5° E)"
        }
      }, // 13
    ],
    zone: "Etc/GMT-6",
    flag: "CN",
    cities: cityList.filter(city => {
      if(city.country === "CN") {
        if(city.adminCode === "06" && city.lon < 97.5) return true
        if(city.adminCode === "13" && city.lon >= 82.5) return true
        if(city.adminCode === "14" && city.lon >= 82.5) return true
        if(city.adminCode === "15" && city.lon < 97.5) return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China"
    },
    subdiv: [
      {title: "Chongqing"}, // 33
      {
        title: "Gansu", 
        extra: {
          de: "(östlich von 97.5° E)",
          en: "(east of 97.5° E)"
        }
      }, // 15
      {
        title: "Guangdong", 
        extra: {
          de: "(westlich von 112.5° E)",
          en: "(west of 112.5° E)"
        }
      }, // 30
      {title: "Guangxi Zhuang"}, // 16
      {title: "Guizhou"}, // 18
      {title: "Hainan"}, // 31
      {
        title: "Hubei", 
        extra: {
          de: "(westlich von 112.5° E)",
          en: "(west of 112.5° E)"
        }
      }, // 12
      {title: "Hunan"}, // 11
      {
        title: {
          de: "Innere Mongolei",
          en: "Inner Mongolia"
        }, 
        extra: {
          de: "(westlich von 112.5° E)",
          en: "(west of 112.5° E)"
        }
      }, // 20
      {title: "Ningxia"}, // 21
      {
        title: "Qinghai", 
        extra: {
          de: "(östlich von 97.5° E)",
          en: "(east of 97.5° E)"
        }
      }, // 06
      {title: "Shaanxi"}, // 26
      {title: "Shanxi"}, // 24
      {title: "Sichuan"}, // 32
      {title: "Yunnan"}, // 29
    ],
    zone: "Etc/GMT-7",
    flag: "CN",
    cities: cityList.filter(city => {
      if(city.country === "CN") {
        if(city.adminCode === "06" && city.lon >= 97.5) return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "12" && city.lon < 112.5) return true
        if(city.adminCode === "15" && city.lon >= 97.5) return true
        if(city.adminCode === "16") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "20" && city.lon < 112.5) return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "24") return true
        if(city.adminCode === "26") return true
        if(city.adminCode === "29") return true
        if(city.adminCode === "30" && city.lon < 112.5) return true
        if(city.adminCode === "31") return true
        if(city.adminCode === "32") return true
        if(city.adminCode === "33") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China"
    },
    subdiv: [
      {title: "Anhui"}, // 01
      {
        title: {
          de: "Peking",
          en: "Beijing"
        }
      }, // 22
      {title: "Fujian"}, // 07
      {
        title: "Guangdong", 
        extra: {
          de: "(östlich von 112.5° E)",
          en: "(east of 112.5° E)"
        }
      }, // 30
      {title: "Hebei"}, // 10
      {title: "Henan"}, // 09
      {
        title: "Hubei", 
        extra: {
          de: "(östlich von 112.5° E)",
          en: "(east of 112.5° E)"
        }
      }, // 12
      {
        title: "Heilongjiang", 
        extra: {
          de: "(westlich von 127.5° E)",
          en: "(west of 127.5° E)"
        }
      }, // 08
      {
        title: {
          de: "Innere Mongolei",
          en: "Inner Mongolia"
        }, 
        extra: {
          de: "(östlich von 112.5° E)",
          en: "(east of 112.5° E)"
        }
      }, // 20
      {title: "Jiangsu"}, // 04
      {title: "Jiangxi"}, // 03
      {
        title: "Jilin", 
        extra: {
          de: "(westlich von 127.5° E)",
          en: "(west of 127.5° E)"
        }
      }, // 05
      {title: "Liaoning"}, // 19
      {title: "Shandong"}, // 25
      {
        title: {
          de: "Schanghai",
          en: "Shanghai"
        }
      }, // 23
      {title: "Tianjin"}, // 28
      {title: "Zhejiang"}, // 02
    ],
    zone: "Etc/GMT-8",
    flag: "CN",
    cities: cityList.filter(city => {
      if(city.country === "CN") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "02") return true
        if(city.adminCode === "03") return true
        if(city.adminCode === "04") return true
        if(city.adminCode === "05" && city.lon < 127.5) return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08" && city.lon < 127.5) return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "12" && city.lon >= 112.5) return true
        if(city.adminCode === "19") return true
        if(city.adminCode === "20" && city.lon >= 112.5) return true
        if(city.adminCode === "22") return true
        if(city.adminCode === "23") return true
        if(city.adminCode === "25") return true
        if(city.adminCode === "28") return true
        if(city.adminCode === "30" && city.lon >= 112.5) return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China"
    },
    subdiv: [
      {
        title: "Heilongjiang", 
        extra: {
          de: "(östlich von 127.5° E)",
          en: "(east of 127.5° E)"
        }
      }, // 08
      {
        title: "Jilin", 
        extra: {
          de: "(östlich von 127.5° E)",
          en: "(east of 127.5° E)"
        }
      }, // 05
    ],
    zone: "Etc/GMT-9",
    flag: "CN",
    cities: cityList.filter(city => {
      if(city.country === "CN") {
        if(city.adminCode === "05" && city.lon >= 127.5) return true
        if(city.adminCode === "08" && city.lon >= 127.5) return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Hongkong (VR China)",
      en: "Hong Kong (PR of China)"
    },
    zone: "Etc/GMT-8",
    flag: "HK",
    cities: cityList.filter(city => city.country === "HK")
  },
  {
    country: {
      de: "Japan",
      en: "Japan"
    },
    zone: "Etc/GMT-9",
    flag: "JP",
    cities: cityList.filter(city => city.country === "JP")
  },
  {
    country: {
      de: "Macau (VR China)",
      en: "Macau (PR of China)"
    },
    zone: "Etc/GMT-8",
    flag: "MO",
    cities: cityList.filter(city => city.country === "MO")
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia"
    },
    subdiv: [
      {title: "Bayan-Ölgii"}, // 03
      {title: "Govi-Altai"}, // 10
      {title: "Khovd"}, // 12
      {title: "Uvs"}, // 19
      {title: "Zavkhan"} // 09
    ],
    zone: "Etc/GMT-6",
    flag: "MN",
    cities: cityList.filter(city => {
      if(city.country === "MN") {
        if(city.adminCode === "03") return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "19") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia"
    },
    subdiv: [
      {title: "Arkhangai"}, // 01
      {title: "Bayankhongor"}, // 02
      {title: "Bulgan"}, // 21
      {title: "Darkhan-Uul"}, // 23
      {title: "Dornogovi"}, // 07
      {title: "Dundgovi"}, // 08
      {title: "Govisümber"}, // 24
      {title: "Khentii"}, // 11
      {title: "Khövsgöl"}, // 13
      {title: "Orkhon"}, // 25
      {title: "Selenge"}, // 16
      {title: "Töv"}, // 18
      {title: "Ömnögovi"}, // 14
      {title: "Övörkhanghai"} // 15
    ],
    zone: "Etc/GMT-7",
    flag: "MN",
    cities: cityList.filter(city => {
      if(city.country === "MN") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "02") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "15") return true
        if(city.adminCode === "16") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "23") return true
        if(city.adminCode === "24") return true
        if(city.adminCode === "25") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia"
    },
    subdiv: [
      {title: "Dornod"}, // 06
      {title: "Sükhbaatar"} // 17
    ],
    zone: "Etc/GMT-8",
    flag: "MN",
    cities: cityList.filter(city => {
      if(city.country === "MN") {
        if(city.adminCode === "06") return true
        if(city.adminCode === "17") return true
        return false
      }
      return false
    })
  },
  {
    country: {
      de: "Nordkorea",
      en: "North Korea"
    },
    zone: "Etc/GMT-9",
    flag: "KP",
    cities: cityList.filter(city => city.country === "KP")
  },
  {
    country: {
      de: "Südkorea",
      en: "South Korea"
    },
    zone: "Etc/GMT-9",
    flag: "KR",
    cities: cityList.filter(city => city.country === "KR")
  },
  {
    country: {
      de: "Taiwan",
      en: "Taiwan"
    },
    zone: "Etc/GMT-8",
    flag: "TW",
    cities: cityList.filter(city => city.country === "TW")
  }
]

export default countryList