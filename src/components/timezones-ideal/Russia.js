import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Kaliningrad",
          en: "Kaliningrad Oblast"
        }
      } //23
    ],
    zone: "Etc/GMT-1",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.adminCode === "23")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "St. Petersburg",
          en: "Saint Petersburg"
        }
      }, // 66
      {
        title: {
          de: "Republik Karelien",
          en: "Karelia"
        }
      }, // 28
      {
        title: {
          de: "Oblast Belgorod",
          en: "Belgorod Oblast"
        }
      }, // 09
      {
        title: {
          de: "Oblast Brjansk",
          en: "Bryansk Oblast"
        }
      }, // 10
      {
        title: {
          de: "Oblast Kaluga",
          en: "Kaluga Oblast"
        }
      }, // 25
      {
        title: {
          de: "Oblast Kursk",
          en: "Kursk Oblast"
        }
      }, // 41
      {
        title: {
          de: "Oblast Leningrad",
          en: "Leningrad Oblast"
        }
      }, // 42
      {
        title: {
          de: "Oblast Murmansk",
          en: "Murmansk Oblast"
        }
      }, // 49
      {
        title: {
          de: "Oblast Nowgorod",
          en: "Novgorod Oblast"
        }
      }, // 52
      {
        title: {
          de: "Oblast Orjol",
          en: "Oryol Oblast"
        }
      }, // 56
      {
        title: {
          de: "Oblast Pskow",
          en: "Pskov Oblast"
        }
      }, // 60
      {
        title: {
          de: "Oblast Smolensk",
          en: "Smolensk Oblast"
        }
      }, // 69
      {
        title: {
          de: "Oblast Tula",
          en: "Tula Oblast"
        }
      }, // 76
      {
        title: {
          de: "Oblast Twer",
          en: "Tver Oblast"
        }
      }, // 77
    ],
    zone: "Etc/GMT-2",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "09":
          case "10":
          case "25":
          case "28":
          case "41":
          case "42":
          case "49":
          case "52":
          case "56":
          case "60":
          case "66":
          case "69":
          case "76":
          case "77":
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Moskau",
          en: "Moscow"
        }
      }, // 48 
      {
        title: {
          de: "Republik Adygeja",
          en: "Adygea"
        }
      }, // 01
      {
        title: {
          de: "Republik Tschetschenien",
          en: "Chechnya"
        }
      }, // 12
      {
        title: {
          de: "Republik Tschuwaschien",
          en: "Chuvashia"
        }
      }, // 16
      {
        title: {
          de: "Republik Dagestan",
          en: "Dagestan"
        }
      }, // 17
      {
        title: {
          de: "Republik Inguschetien",
          en: "Ingushetia"
        }
      },  // 19
      {
        title: {
          de: "Republik Kabardino-Balkarien",
          en: "Kabardino-Balkaria"
        }
      }, // 22 
      {
        title: {
          de: "Republik Kalmückien",
          en: "Kalmykia"
        }
      }, // 24
      {
        title: {
          de: "Republik Karatschai-Tscherkessien",
          en: "Karachay-Cherkessia"
        }
      }, // 27
      {
        title: {
          de: "Republik Mari El",
          en: "Mari El"
        }
      }, // 45
      {
        title: {
          de: "Republik Mordwinien",
          en: "Mordovia"
        }
      }, // 46
      {
        title: {
          de: "Republik Nordossetien-Alanien",
          en: "North Ossetia-Alania"
        }
      }, // 68
      {
        title: {
          de: "Republik Tatarstan",
          en: "Tatarstan"
        }
      }, // 73
      {
        title: {
          de: "Republik Udmurtien",
          en: "Udmurtia"
        }
      }, // 80
      {
        title: {
          de: "Region Krasnodar",
          en: "Krasnodar Region"
        }
      }, // 38
      {
        title: {
          de: "Region Stawropol",
          en: "Stavropol Region"
        }
      }, // 70
      {
        title: {
          de: "Oblast Archangelsk",
          en: "Arkhangelsk Oblast"
        }
      }, // 06
      {
        title: {
          de: "Oblast Astrachan",
          en: "Astrakhan Oblast"
        }
      }, // 07
      {
        title: {
          de: "Oblast Iwanowo",
          en: "Ivanovo Oblast"
        }
      }, // 21
      {
        title: {
          de: "Oblast Kirow",
          en: "Kirov Oblast"
        }
      }, // 33
      {
        title: {
          de: "Oblast Kostroma",
          en: "Kostroma Oblast"
        }
      }, // 37
      {
        title: {
          de: "Oblast Lipezk",
          en: "Lipetsk Oblast"
        }
      }, // 43
      {
        title: {
          de: "Oblast Moskau",
          en: "Moscow Oblast"
        }
      }, // 47
      {
        title: {
          de: "Oblast Nischni Nowgorod",
          en: "Nizhnyi Novgorod Oblast"
        }
      }, // 51
      {
        title: {
          de: "Oblast Pensa",
          en: "Penza Oblast"
        }
      }, // 57
      {
        title: {
          de: "Oblast Rostow",
          en: "Rostov Oblast"
        }
      }, // 61
      {
        title: {
          de: "Oblast Rjasan",
          en: "Ryazan Oblast"
        }
      }, // 62
      {
        title: {
          de: "Oblast Samara",
          en: "Samara Oblast"
        }
      }, // 65
      {
        title: {
          de: "Oblast Saratow",
          en: "Saratov Oblast"
        }
      }, // 67
      {
        title: {
          de: "Oblast Tambow",
          en: "Tambov Oblast"
        }
      }, // 72
      {
        title: {
          de: "Oblast Uljanowsk",
          en: "Ulyanovsk Oblast"
        }
      }, // 81
      {
        title: {
          de: "Oblast Wladimir",
          en: "Vladimir Oblast"
        }
      }, // 83
      {
        title: {
          de: "Oblast Wolgograd",
          en: "Volgograd Oblast"
        }
      }, // 84
      {
        title: {
          de: "Oblast Wologda",
          en: "Vologda Oblast"
        }
      }, // 85
      {
        title: {
          de: "Oblast Woronesch",
          en: "Voronezh Oblast"
        }
      }, // 86
      {
        title: {
          de: "Oblast Jaroslawl",
          en: "Yaroslavl Oblast"
        }
      }, // 88
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug"
        }, 
        extra: {
          de: "(westlich von 52.5° E)",
          en: "(west of 52.5° E)"
        }
      } // 50
    ],
    zone: "Etc/GMT-3",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "01":
          case "06":
          case "07":
          case "12":
          case "16":
          case "17":
          case "19":
          case "21":
          case "22":
          case "24":
          case "27":
          case "33":
          case "37":
          case "38":
          case "43":
          case "45":
          case "46":
          case "47":
          case "48":
          case "51":
          case "57":
          case "61":
          case "62":
          case "65":
          case "67":
          case "68":
          case "70":
          case "72":
          case "73":
          case "80":
          case "81":
          case "83":
          case "84":
          case "85":
          case "86":
          case "88":
            return true
          case "50":
            if(city.lon < 52.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Baschkortostan",
          en: "Bashkortostan"
        }
      }, // 08
      {
        title: {
          de: "Republik Komi",
          en: "Komi"
        }
      }, // 34
      {
        title: {
          de: "Region Perm",
          en: "Perm Region"
        }
      }, // 90
      {
        title: {
          de: "Oblast Tscheljabinsk",
          en: "Chelyabinsk Oblast"
        }
      }, // 13
      {
        title: {
          de: "Oblast Kurgan",
          en: "Kurgan Oblast"
        }
      }, // 40
      {
        title: {
          de: "Oblast Orenburg",
          en: "Orenburg Oblast"
        }
      }, // 55
      {
        title: {
          de: "Oblast Swerdlowsk",
          en: "Sverdlovsk Oblast"
        }
      }, // 71
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug"
        }, 
        extra: {
          de: "(östlich von 52.5° E)",
          en: "(east of 52.5° E)"
        }
      } // 50
    ],
    zone: "Etc/GMT-4",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "08":
          case "13":
          case "34":
          case "40":
          case "55":
          case "71":
          case "90":
            return true
          case "50":
            if(city.lon >= 52.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Region Altai",
          en: "Altai Region"
        }
      }, // 04
      {
        title: {
          de: "Oblast Nowosibirsk",
          en: "Novosibirsk Oblast"
        }
      }, // 53
      {
        title: {
          de: "Oblast Omsk",
          en: "Omsk Oblast"
        }
      }, // 54
      {
        title: {
          de: "Oblast Tjumen",
          en: "Tyumen Oblast"
        }
      }, // 78
      {
        title: {
          de: "Autonomer Kreis der Chanten und Mansen",
          en: "Khanty-Mansi Autonomous Okrug"
        }
      }, // 32
      {
        title: {
          de: "Autonomer Kreis der Jamal-Nenzen",
          en: "Yamalo-Nenets Autonomous Okrug"
        }
      }, // 87
    ],
    zone: "Etc/GMT-5",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "04":
          case "32":
          case "53":
          case "54":
          case "78":
          case "87":
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Altai",
          en: "Altai Republic"
        }
      }, // 03
      {
        title: {
          de: "Republik Chakassien",
          en: "Khakassia"
        }
      }, // 31
      {
        title: {
          de: "Republik Tuwa",
          en: "Tuva Republic"
        }
      }, // 79
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region"
        }, 
        extra: {
          de: "(westlich von 97.5° E)",
          en: "(west of 97.5° E)"
        }
      }, // 91
      {
        title: {
          de: "Oblast Kemerowo",
          en: "Kemerovo Oblast"
        }
      }, // 29
      {
        title: {
          de: "Oblast Tomsk",
          en: "Tomsk Oblast"
        }
      }, // 75
    ],
    zone: "Etc/GMT-6",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "03":
          case "29":
          case "31":
          case "75":
          case "79":
            return true
          case "91":
            if(city.lon < 97.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Burjatien",
          en: "Buryatia"
        }
      }, // 11
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: {
          de: "(westlich von 112.5° E)",
          en: "(west of 112.5° E)"
        }
      }, // 63
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region"
        }, 
        extra: {
          de: "(östlich von 97.5° E)",
          en: "(east of 97.5°E)"
        }
      }, // 91
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast"
        }, 
        extra: {
          de: "(westlich von 112.5° E)",
          en: "(west of 112.5° E)"
        }
      }, // 20
    ],
    zone: "Etc/GMT-7",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "11":
            return true
          case "91":
            if(city.lon >= 97.5) return true
            return false
          case "20":
          case "63":
            if(city.lon < 112.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: "(112.5° E – 127.5° E)"
      }, // 63
      {
        title: {
          de: "Oblast Amur",
          en: "Amur Oblast"
        }
      }, // 05
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast"
        }, 
        extra: {
          de: "(östlich von 112.5° E)",
          en: "(east of 112.5° E)"
        }
      }, // 20
      {
        title: {
          de: "Region Transbaikalien",
          en: "Zabaykalsky Krai"
        }
      }, // 93
    ],
    zone: "Etc/GMT-8",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "05":
          case "93":
            return true
          case "20":
            if(city.lon >= 112.5) return true
            return false
          case "63":
            if(city.lon >= 112.5 && city.lon < 127.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: "(127.5°E – 142.5° E)"
      }, // 63
      {
        title: {
          de: "Region Chabarowsk",
          en: "Khabarovsk Region"
        }
      }, // 30
      {
        title: {
          de: "Region Primorje",
          en: "Primorsky Krai"
        }
      }, // 59
      {
        title: {
          de: "Oblast Sachalin",
          en: "Sakhalin Oblast"
        }
      }, // 64
      {
        title: {
          de: "Jüdische Autonome Oblast",
          en: "Jewish Autonomous Oblast"
        }
      }, // 89
    ],
    zone: "Etc/GMT-9",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "30":
          case "59":
          case "64":
          case "89":
            return true
          case "63":
            if(city.lon >= 127.5 && city.lon < 142.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        },
        extra: {
          de: "(östlich von 142.5° E)",
          en: "(east of 142.5° E)"
        }
      }, // 63
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast"
        }, 
        extra: {
          de: "(westlich von 157.5° E)",
          en: "(west of 157.5° E)"
        }
      } // 44
    ],
    zone: "Etc/GMT-10",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "44":
            if(city.lon < 157.5) return true
            return false
          case "63":
            if(city.lon >= 142.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast"
        },
        extra: {
          de: "(östlich von 157.5° E)",
          en: "(east of 157.5° E)"
        }
      }, // 44
      {
        title: {
          de: "Region Kamtschatka",
          en: "Kamchatka"
        }
      }, // 92
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug"
        }, 
        extra: {
          de: "(westlich von 172.5° E)",
          en: "(west of 172.5° E)"
        }
      }, // 15
    ],
    zone: "Etc/GMT-11",
    flag: "RU",
    cities: cityList.filter(city => {
      if(city.country === "RU") {
        switch(city.adminCode) {
          case "92":
            return true
          case "15":
            if(city.lon < 172.5) return true
            return false
          case "44":
            if(city.lon >= 157.5) return true
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
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug"
        },
        extra: {
          de: "(östlich von 172.5° E)",
          en: "(east of 172.5° E)"
        }
      },
    ],
    zone: "Etc/GMT-12",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.adminCode === "15" && city.lon >= 172.5)
  },
]

export default countryList