import cityList from "./cityList"

export default [
  {
    country: "Indonesia",
    subdiv: [
      {title: "Aceh"}, // 01
      {title: "Bengkulu"}, // 03
      {title: "Jakarta Raya"}, // 04
      {title: "Jambi"}, // 05
      {title: "Jawa Tengah"}, // 07
      {title: "Jawa Timur"}, // 08
      {title: "Yogyakarta"}, // 10
      {title: "Kalimantan Barat"}, // 11
      {title: "Kalimantan Tengah"}, // 13 
      {title: "Lampung"}, // 15
      {title: "Sumatera Barat"}, // 24
      {title: "Sumatera Utara"}, // 26
      {title: "Jawa Barat"}, // 30
      {title: "Sumatera Selatan"}, // 32
      {title: "Banten"}, // 33
      {title: "Bangka-Belitung"}, // 35
      {title: "Riau"}, // 37
      {title: "Kepulauan Riau"}, // 40
    ],
    zone: "Etc/GMT-7",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "03") return true
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "08") return true
        if(city.adminCode === "10") return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13") return true
        if(city.adminCode === "15") return true
        if(city.adminCode === "24") return true
        if(city.adminCode === "26") return true
        if(city.adminCode === "30") return true
        if(city.adminCode === "32") return true
        if(city.adminCode === "33") return true
        if(city.adminCode === "35") return true
        if(city.adminCode === "37") return true
        if(city.adminCode === "40") return true
        return false
      }
      return false
    })
  },
  {
    country: "Indonesia",
    subdiv: [
      {title: "Bali"}, // 02
      {title: "Kalimantan Selatan"}, // 12
      {title: "Kalimantan"}, // 14 
      {title: "Nusa Tenggara Barat"}, // 17
      {title: "Nusa Tenggara Timur"}, // 18 
      {title: "Sulawesi Tengah"}, // 21
      {title: "Sulawesi Tenggara"}, // 22
      {title: "Sulawesi Utara"}, // 31
      {title: "Gorontalo"}, // 34
      {title: "Sulawesi Selatan"}, // 38
      {title: "Sulawesi Barat"}, // 41
      {title: "Kalimantan Utara"}, // 42
    ],
    zone: "Etc/GMT-8",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "02") return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "14") return true
        if(city.adminCode === "17") return true
        if(city.adminCode === "18") return true
        if(city.adminCode === "21") return true
        if(city.adminCode === "22") return true
        if(city.adminCode === "31") return true
        if(city.adminCode === "34") return true
        if(city.adminCode === "38") return true
        if(city.adminCode === "41") return true
        if(city.adminCode === "42") return true
        return false
      }
      return false
    })
  },
  {
    country: "Indonesia",
    subdiv: [
      {title: "Maluku"}, // 28
      {title: "Maluku Utara"}, // 29
      {title: "Papua"}, // 36
      {title: "West Papua"}, // 39
    ],
    zone: "Etc/GMT-9",
    flag: "ID",
    cities: cityList.filter(city => {
      if(city.country === "ID") {
        if(city.adminCode === "28") return true
        if(city.adminCode === "29") return true
        if(city.adminCode === "36") return true
        if(city.adminCode === "39") return true
        return false
      }
      return false
    })
  },
]
