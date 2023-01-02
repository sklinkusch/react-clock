import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Russland",
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Kaliningrad",
          en: "Kaliningrad Oblast",
          fr: "Oblast de Kaliningrad"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "St. Petersburg",
          en: "Saint Petersburg",
          fr: "Saint-Pétersbourg"
        }
      }, // 66
      {
        title: {
          de: "Republik Karelien",
          en: "Karelia",
          fr: "République de Carélie"
        }
      }, // 28
      {
        title: {
          de: "Oblast Belgorod",
          en: "Belgorod Oblast",
          fr: "Oblast de Belgorod"
        }
      }, // 09
      {
        title: {
          de: "Oblast Brjansk",
          en: "Bryansk Oblast",
          fr: "Oblast de Briansk"
        }
      }, // 10
      {
        title: {
          de: "Oblast Kaluga",
          en: "Kaluga Oblast",
          fr: "Oblast de Kalouga"
        }
      }, // 25
      {
        title: {
          de: "Oblast Kursk",
          en: "Kursk Oblast",
          fr: "Oblast de Koursk"
        }
      }, // 41
      {
        title: {
          de: "Oblast Leningrad",
          en: "Leningrad Oblast",
          fr: "Oblast de Leningrad"
        }
      }, // 42
      {
        title: {
          de: "Oblast Murmansk",
          en: "Murmansk Oblast",
          fr: "Oblast de Mourmansk"
        }
      }, // 49
      {
        title: {
          de: "Oblast Nowgorod",
          en: "Novgorod Oblast",
          fr: "Oblast de Novgorod"
        }
      }, // 52
      {
        title: {
          de: "Oblast Orjol",
          en: "Oryol Oblast",
          fr: "Oblast d'Orel"
        }
      }, // 56
      {
        title: {
          de: "Oblast Pskow",
          en: "Pskov Oblast",
          fr: "Oblast de Pskov"
        }
      }, // 60
      {
        title: {
          de: "Oblast Smolensk",
          en: "Smolensk Oblast",
          fr: "Oblast de Smolensk"
        }
      }, // 69
      {
        title: {
          de: "Oblast Tula",
          en: "Tula Oblast",
          fr: "Oblast de Toula"
        }
      }, // 76
      {
        title: {
          de: "Oblast Twer",
          en: "Tver Oblast",
          fr: "Oblast de Tver"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Moskau",
          en: "Moscow",
          fr: "Moscou"
        }
      }, // 48 
      {
        title: {
          de: "Republik Adygeja",
          en: "Adygea",
          fr: "République d'Adyguée"
        }
      }, // 01
      {
        title: {
          de: "Republik Tschetschenien",
          en: "Chechnya",
          fr: "République de Tchétchénie"
        }
      }, // 12
      {
        title: {
          de: "Republik Tschuwaschien",
          en: "Chuvashia",
          fr: "République de Tchouvashie"
        }
      }, // 16
      {
        title: {
          de: "Republik Dagestan",
          en: "Dagestan",
          fr: "République de Daghestan"
        }
      }, // 17
      {
        title: {
          de: "Republik Inguschetien",
          en: "Ingushetia",
          fr: "République d'Ingushie"
        }
      },  // 19
      {
        title: {
          de: "Republik Kabardino-Balkarien",
          en: "Kabardino-Balkaria",
          fr: "République de Kabardino-Balkarie"
        }
      }, // 22 
      {
        title: {
          de: "Republik Kalmückien",
          en: "Kalmykia",
          fr: "République de Kalmoukie"
        }
      }, // 24
      {
        title: {
          de: "Republik Karatschai-Tscherkessien",
          en: "Karachay-Cherkessia",
          fr: "République de Karatchaïévo-Tcherkessie"
        }
      }, // 27
      {
        title: {
          de: "Republik Mari El",
          en: "Mari El",
          fr: "République des Maris"
        }
      }, // 45
      {
        title: {
          de: "Republik Mordwinien",
          en: "Mordovia",
          fr: "République de Mordovie"
        }
      }, // 46
      {
        title: {
          de: "Republik Nordossetien-Alanien",
          en: "North Ossetia-Alania",
          fr: "République d'Ossétie du Nord-Alanie"
        }
      }, // 68
      {
        title: {
          de: "Republik Tatarstan",
          en: "Tatarstan",
          fr: "République de Tatarstan"
        }
      }, // 73
      {
        title: {
          de: "Republik Udmurtien",
          en: "Udmurtia",
          fr: "République d'Oudmourtie"
        }
      }, // 80
      {
        title: {
          de: "Region Krasnodar",
          en: "Krasnodar Region",
          fr: "Kraï de Krasnodar"
        }
      }, // 38
      {
        title: {
          de: "Region Stawropol",
          en: "Stavropol Region",
          fr: "Kraï de Stavropol"
        }
      }, // 70
      {
        title: {
          de: "Oblast Archangelsk",
          en: "Arkhangelsk Oblast",
          fr: "Oblast d'Arkhangelsk"
        }
      }, // 06
      {
        title: {
          de: "Oblast Astrachan",
          en: "Astrakhan Oblast",
          fr: "Oblast d'Astrakhan"
        }
      }, // 07
      {
        title: {
          de: "Oblast Iwanowo",
          en: "Ivanovo Oblast",
          fr: "Oblast d'Ivanovo"
        }
      }, // 21
      {
        title: {
          de: "Oblast Kirow",
          en: "Kirov Oblast",
          fr: "Oblast de Kirov"
        }
      }, // 33
      {
        title: {
          de: "Oblast Kostroma",
          en: "Kostroma Oblast",
          fr: "Oblast de Kostroma"
        }
      }, // 37
      {
        title: {
          de: "Oblast Lipezk",
          en: "Lipetsk Oblast",
          fr: "Oblast de Lipetsk"
        }
      }, // 43
      {
        title: {
          de: "Oblast Moskau",
          en: "Moscow Oblast",
          fr: "Oblast de Moscou"
        }
      }, // 47
      {
        title: {
          de: "Oblast Nischni Nowgorod",
          en: "Nizhnyi Novgorod Oblast",
          fr: "Oblast de Nijni Novgorod"
        }
      }, // 51
      {
        title: {
          de: "Oblast Pensa",
          en: "Penza Oblast",
          fr: "Oblast de Penza"
        }
      }, // 57
      {
        title: {
          de: "Oblast Rostow",
          en: "Rostov Oblast",
          fr: "Oblast de Rostov"
        }
      }, // 61
      {
        title: {
          de: "Oblast Rjasan",
          en: "Ryazan Oblast",
          fr: "Oblast de Riazan"
        }
      }, // 62
      {
        title: {
          de: "Oblast Samara",
          en: "Samara Oblast",
          fr: "Oblast de Samara"
        }
      }, // 65
      {
        title: {
          de: "Oblast Saratow",
          en: "Saratov Oblast",
          fr: "Oblast de Saratov"
        }
      }, // 67
      {
        title: {
          de: "Oblast Tambow",
          en: "Tambov Oblast",
          fr: "Oblast de Tambov"
        }
      }, // 72
      {
        title: {
          de: "Oblast Uljanowsk",
          en: "Ulyanovsk Oblast",
          fr: "Oblast d'Oulianovsk"
        }
      }, // 81
      {
        title: {
          de: "Oblast Wladimir",
          en: "Vladimir Oblast",
          fr: "Oblast de Vladimir"
        }
      }, // 83
      {
        title: {
          de: "Oblast Wolgograd",
          en: "Volgograd Oblast",
          fr: "Oblast de Volgograd"
        }
      }, // 84
      {
        title: {
          de: "Oblast Wologda",
          en: "Vologda Oblast",
          fr: "Oblast de Vologda"
        }
      }, // 85
      {
        title: {
          de: "Oblast Woronesch",
          en: "Voronezh Oblast",
          fr: "Oblast de Voronej"
        }
      }, // 86
      {
        title: {
          de: "Oblast Jaroslawl",
          en: "Yaroslavl Oblast",
          fr: "Oblast d'Iaroslavl"
        }
      }, // 88
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug",
          fr: "District autonome de Nénétsie"
        }, 
        extra: {
          de: "(westlich von 52.5° O)",
          en: "(west of 52.5° E)",
          fr: "(ouest de 52.5° E)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Baschkortostan",
          en: "Bashkortostan",
          fr: "République de Bachkirie"
        }
      }, // 08
      {
        title: {
          de: "Republik Komi",
          en: "Komi",
          fr: "République de Komis"
        }
      }, // 34
      {
        title: {
          de: "Region Perm",
          en: "Perm Region",
          fr: "Kraï de Perm"
        }
      }, // 90
      {
        title: {
          de: "Oblast Tscheljabinsk",
          en: "Chelyabinsk Oblast",
          fr: "Oblast de Tcheliabinsk"
        }
      }, // 13
      {
        title: {
          de: "Oblast Kurgan",
          en: "Kurgan Oblast",
          fr: "Oblast de Kourgan"
        }
      }, // 40
      {
        title: {
          de: "Oblast Orenburg",
          en: "Orenburg Oblast",
          fr: "Oblast d'Orenbourg"
        }
      }, // 55
      {
        title: {
          de: "Oblast Swerdlowsk",
          en: "Sverdlovsk Oblast",
          fr: "Oblast de Sverdlovsk"
        }
      }, // 71
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug",
          fr: "District autonome de Nénétsie"
        }, 
        extra: {
          de: "(östlich von 52.5° O)",
          en: "(east of 52.5° E)",
          fr: "(est de 52.5° E)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Region Altai",
          en: "Altai Region",
          fr: "Kraï d'Altaï"
        }
      }, // 04
      {
        title: {
          de: "Oblast Nowosibirsk",
          en: "Novosibirsk Oblast",
          fr: "Oblast de Novossibirsk"
        }
      }, // 53
      {
        title: {
          de: "Oblast Omsk",
          en: "Omsk Oblast",
          fr: "Oblast d'Omsk"
        }
      }, // 54
      {
        title: {
          de: "Oblast Tjumen",
          en: "Tyumen Oblast",
          fr: "Oblast de Tioumen"
        }
      }, // 78
      {
        title: {
          de: "Autonomer Kreis der Chanten und Mansen",
          en: "Khanty-Mansi Autonomous Okrug",
          fr: "District autonome des Khantys-Mansis-Iougra"
        }
      }, // 32
      {
        title: {
          de: "Autonomer Kreis der Jamal-Nenzen",
          en: "Yamalo-Nenets Autonomous Okrug",
          fr: "District autonome de Iamalo-Nénétsie"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Altai",
          en: "Altai Republic",
          fr: "République d'Altaï"
        }
      }, // 03
      {
        title: {
          de: "Republik Chakassien",
          en: "Khakassia",
          fr: "République de Khakassie"
        }
      }, // 31
      {
        title: {
          de: "Republik Tuwa",
          en: "Tuva Republic",
          fr: "République de Touva"
        }
      }, // 79
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region",
          fr: "Kraï de Krasnoïarsk"
        }, 
        extra: {
          de: "(westlich von 97.5° O)",
          en: "(west of 97.5° E)",
          fr: "(ouest de 97.5° E)"
        }
      }, // 91
      {
        title: {
          de: "Oblast Kemerowo",
          en: "Kemerovo Oblast",
          fr: "Oblast de Kemerovo"
        }
      }, // 29
      {
        title: {
          de: "Oblast Tomsk",
          en: "Tomsk Oblast",
          fr: "Oblast de Tomsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Burjatien",
          en: "Buryatia",
          fr: "République de Bouriatie"
        }
      }, // 11
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(westlich von 112.5° O)",
          en: "(west of 112.5° E)",
          fr: "(ouest de 112.5 E)"
        }
      }, // 63
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region",
          fr: "Kraï de Krasnoïarsk"
        }, 
        extra: {
          de: "(östlich von 97.5° O)",
          en: "(east of 97.5° E)",
          fr: "(est de 97.5° E)"
        }
      }, // 91
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast",
          fr: "Oblast de Irkoutsk"
        }, 
        extra: {
          de: "(westlich von 112.5° O)",
          en: "(west of 112.5° E)",
          fr: "(ouest de 112.5° E)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(112.5° O – 127.5° O)",
          en: "(112.5° E – 127.5° E)",
          fr: "(112.5° E – 127.5° E)"
        }
      }, // 63
      {
        title: {
          de: "Oblast Amur",
          en: "Amur Oblast",
          fr: "Oblast d'Amour"
        }
      }, // 05
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast",
          fr: "Oblast de Irkoutsk"
        }, 
        extra: {
          de: "(östlich von 112.5° O)",
          en: "(east of 112.5° E)",
          fr: "(est de 112.5° E)"
        }
      }, // 20
      {
        title: {
          de: "Region Transbaikalien",
          en: "Zabaykalsky Krai",
          fr: "Kraï de Transbaïkalie"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(127.5° O – 142.5° O)",
          en: "(127.5° E – 142.5° E)",
          fr: "(127.5° E – 142.5° E)"
        }
      }, // 63
      {
        title: {
          de: "Region Chabarowsk",
          en: "Khabarovsk Region",
          fr: "Kraï de Khabarovsk"
        }
      }, // 30
      {
        title: {
          de: "Region Primorje",
          en: "Primorsky Krai",
          fr: "Kraï de Primorié"
        }
      }, // 59
      {
        title: {
          de: "Oblast Sachalin",
          en: "Sakhalin Oblast",
          fr: "Oblast de Sakhaline"
        }
      }, // 64
      {
        title: {
          de: "Jüdische Autonome Oblast",
          en: "Jewish Autonomous Oblast",
          fr: "Oblast autonome juif"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        },
        extra: {
          de: "(östlich von 142.5° O)",
          en: "(east of 142.5° E)",
          fr: "(est de 142.5° E)"
        }
      }, // 63
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast",
          fr: "Oblast de Magadan"
        }, 
        extra: {
          de: "(westlich von 157.5° O)",
          en: "(west of 157.5° E)",
          fr: "(ouest de 157.5° E)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast",
          fr: "Oblast de Magadan"
        },
        extra: {
          de: "(östlich von 157.5° O)",
          en: "(east of 157.5° E)",
          fr: "(est de 157.5° E)"
        }
      }, // 44
      {
        title: {
          de: "Region Kamtschatka",
          en: "Kamchatka",
          fr: "Kraï de Kamtchatka"
        }
      }, // 92
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug",
          fr: "District autonome de Tchoukotka"
        }, 
        extra: {
          de: "(westlich von 172.5° O)",
          en: "(west of 172.5° E)",
          fr: "(ouest de 172.5° E)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug",
          fr: "District autonome de Tchoukotka"
        },
        extra: {
          de: "(östlich von 172.5° O)",
          en: "(east of 172.5° E)",
          fr: "(est de 172.5° E)"
        }
      },
    ],
    zone: "Etc/GMT-12",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.adminCode === "15" && city.lon >= 172.5)
  },
]

export default countryList