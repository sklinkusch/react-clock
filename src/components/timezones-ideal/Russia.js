import cityList from "./cityList"

export default [
  {
    country: "Russia",
    subdiv: [
      {title: "Kaliningrad Oblast"} //23
    ],
    zone: "Etc/GMT-1",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.adminCode === "23")
  },
  {
    country: "Russia",
    subdiv: [
      {title: "Saint Petersburg"}, // 66
      {title: "Karelia"}, // 28
      {title: "Belgorod Oblast"}, // 09
      {title: "Bryansk Oblast"}, // 10
      {title: "Kaluga Oblast"}, // 25
      {title: "Kursk Oblast"}, // 41
      {title: "Leningrad Oblast"}, // 42
      {title: "Murmansk Oblast"}, // 49
      {title: "Novgorod Oblast"}, // 52
      {title: "Oryol Oblast"}, // 56
      {title: "Pskov Oblast"}, // 60
      {title: "Smolensk Oblast"}, // 69
      {title: "Tula Oblast"}, // 76
      {title: "Tver Oblast"}, // 77
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
    country: "Russia",
    subdiv: [
      {title: "Moscow"}, // 48 
      {title: "Adygea"}, // 01
      {title: "Chechnya"}, // 12
      {title: "Chuvashia"}, // 16
      {title: "Dagestan"}, // 17
      {title: "Ingushetia"},  // 19
      {title: "Kabardino-Balkaria"}, // 22 
      {title: "Kalmykia"}, // 24
      {title: "Karachay-Cherkessia"}, // 27
      {title: "Mari El"}, // 45
      {title: "Mordovia"}, // 46
      {title: "North Ossetia-Alania"}, // 68
      {title: "Tatarstan"}, // 73
      {title: "Udmurtia"}, // 80
      {title: "Krasnodar Region"}, // 38
      {title: "Stavropol Region"}, // 70
      {title: "Arkhangelsk Oblast"}, // 06
      {title: "Astrakhan Oblast"}, // 07
      {title: "Ivanovo Oblast"}, // 21
      {title: "Kirov Oblast"}, // 33
      {title: "Kostroma Oblast"}, // 37
      {title: "Lipetsk Oblast"}, // 43
      {title: "Moscow Oblast"}, // 47
      {title: "Nizhnyi Novgorod Oblast"}, // 51
      {title: "Penza Oblast"}, // 57
      {title: "Rostov Oblast"}, // 61
      {title: "Ryazan Oblast"}, // 62
      {title: "Samara Oblast"}, // 65
      {title: "Saratov Oblast"}, // 67
      {title: "Tambov Oblast"}, // 72
      {title: "Ulyanovsk Oblast"}, // 81
      {title: "Vladimir Oblast"}, // 83
      {title: "Volgograd Oblast"}, // 84
      {title: "Vologda Oblast"}, // 85
      {title: "Voronezh Oblast"}, // 86
      {title: "Yaroslavl Oblast"}, // 88
      {title: "Nenets Autonomous Okrug", extra: "(west of 52.5° E)"} // 50
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
    country: "Russia",
    subdiv: [
      {title: "Bashkortostan"}, // 08
      {title: "Komi"}, // 34
      {title: "Perm Region"}, // 90
      {title: "Chelyabinsk Oblast"}, // 13
      {title: "Kurgan Oblast"}, // 40
      {title: "Orenburg Oblast"}, // 55
      {title: "Sverdlovsk Oblast"}, // 71
      {title: "Nenets Autonomous Okrug", extra: "(east of 52.5° E)"} // 50
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
    country: "Russia",
    subdiv: [
      {title: "Altai Region"}, // 04
      {title: "Novosibirsk Oblast"}, // 53
      {title: "Omsk Oblast"}, // 54
      {title: "Tyumen Oblast"}, // 78
      {title: "Khanty-Mansi Autonomous Okrug"}, // 32
      {title: "Yamalo-Nenets Autonomous Okrug"}, // 87
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
    country: "Russia",
    subdiv: [
      {title: "Altai Republic"}, // 03
      {title: "Khakassia"}, // 31
      {title: "Tuva Republic"}, // 79
      {title: "Krasnoyarsk Region", extra: "(west of 97.5° E)"}, // 91
      {title: "Kemerovo Oblast"}, // 29
      {title: "Tomsk Oblast"}, // 75
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
    country: "Russia",
    subdiv: [
      {title: "Buryatia"}, // 11
      {title: "Sakha", extra: "(west of 112.5° E)"}, // 63
      {title: "Krasnoyarsk Region", extra: "(east of 97.5°E)"}, // 91
      {title: "Irkutsk Oblast", extra: "(west of 112.5° E)"}, // 20
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
    country: "Russia",
    subdiv: [
      {title: "Sakha", extra: "(112.5° E – 127.5° E)"}, // 63
      {title: "Amur Oblast"}, // 05
      {title: "Irkutsk Oblast", extra: "(east of 112.5° E)"}, // 20
      {title: "Zabaykalsky Krai"}, // 93
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
    country: "Russia",
    subdiv: [
      {title: "Sakha", extra: "(127.5°E – 142.5° E)"}, // 63
      {title: "Khabarovsk Region"}, // 30
      {title: "Primorsky Krai"}, // 59
      {title: "Sakhalin Oblast"}, // 64
      {title: "Jewish Autonomous Oblast"}, // 89
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
    country: "Russia",
    subdiv: [
      {title: "Sakha", extra: "(east of 142.5° E)"}, // 63
      {title: "Magadan Oblast", extra: "(west of 157.5° E)"} // 44
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
    country: "Russia",
    subdiv: [
      {title: "Magadan Oblast", extra: "(east of 157.5° E)"}, // 44
      {title: "Kamchatka"}, // 92
      {title: "Chukotka Autonomous Okrug", extra: "(west of 172.5° E)"}, // 15
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
    country: "Russia",
    subdiv: [
      {title: "Chukotka Autonomous Okrug", extra: "(east of 172.5° E)"},
    ],
    zone: "Etc/GMT-12",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.adminCode === "15" && city.lon >= 172.5)
  },
]