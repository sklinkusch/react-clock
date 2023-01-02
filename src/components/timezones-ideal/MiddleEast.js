import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Afghanistan",
      en: "Afghanistan",
      fr: "Afghanistan"
    },
    utcOffset: 270,
    flag: "AF",
    cities: cityList.filter(city => city.country === "AF")
  },
  {
    country: {
      de: "Armenien",
      en: "Armenia",
      fr: "Arménie"
    },
    zone: "Etc/GMT-3",
    flag: "AM",
    cities: cityList.filter(city => city.country === "AM")
  },
  {
    country: {
      de: "Aserbaidschan",
      en: "Azerbaijan",
      fr: "Azerbaïdjan"
    },
    zone: "Etc/GMT-3",
    flag: "AZ",
    cities: cityList.filter(city => city.country === "AZ")
  },
  {
    country: {
      de: "Bahrain",
      en: "Bahrain",
      fr: "Bahreïn"
    },
    zone: "Etc/GMT-3",
    flag: "BH",
    cities: cityList.filter(city => city.country === "BH")
  },
  {
    country: {
      de: "Georgien",
      en: "Georgia",
      fr: "Géorgie"
    },
    zone: "Etc/GMT-3",
    flag: "GE",
    cities: cityList.filter(city => city.country === "GE")
  },
  {
    country: {
      de: "Iran",
      en: "Iran",
      fr: "Iran"
    },
    utcOffset: 210,
    flag: "IR",
    cities: cityList.filter(city => city.country === "IR")
  },
  {
    country: {
      de: "Irak",
      en: "Iraq",
      fr: "Irak"
    },
    zone: "Etc/GMT-3",
    flag: "IQ",
    cities: cityList.filter(city => city.country === "IQ")
  },
  {
    country: {
      de: "Israel",
      en: "Israel",
      fr: "Israël"
    },
    zone: "Etc/GMT-2",
    flag: "IL",
    cities: cityList.filter(city => city.country === "IL")
  },
  {
    country: {
      de: "Jordanien",
      en: "Jordan",
      fr: "Jordanie"
    },
    zone: "Etc/GMT-2",
    flag: "JO",
    cities: cityList.filter(city => city.country === "JO")
  },
  {
    country: {
      de: "Kuwait",
      en: "Kuwait",
      fr: "Koweït"
    },
    zone: "Etc/GMT-3",
    flag: "KW",
    cities: cityList.filter(city => city.country === "KW")
  },
  {
    country: {
      de: "Libanon",
      en: "Lebanon",
      fr: "Liban"
    },
    zone: "Etc/GMT-2",
    flag: "LB",
    cities: cityList.filter(city => city.country === "LB")
  },
  {
    country: {
      de: "Oman",
      en: "Oman",
      fr: "Oman"
    },
    zone: "Etc/GMT-4",
    flag: "OM",
    cities: cityList.filter(city => city.country === "OM")
  },
  {
    country: {
      de: "Palästina",
      en: "Palestine",
      fr: "Palestine"
    },
    zone: "Etc/GMT-2",
    flag: "PS",
    cities: cityList.filter(city => city.country === "PS")
  },
  {
    country: {
      de: "Katar",
      en: "Qatar",
      fr: "Qatar"
    },
    zone: "Etc/GMT-3",
    flag: "QA",
    cities: cityList.filter(city => city.country === "QA")
  },
  {
    country: {
      de: "Saudi-Arabien",
      en: "Saudi Arabia",
      fr: "Arabie saoudite"
    },
    zone: "Etc/GMT-3",
    flag: "SA",
    cities: cityList.filter(city => city.country === "SA")
  },
  {
    country: {
      de: "Syrien",
      en: "Syria",
      fr: "Syrie"
    },
    zone: "Etc/GMT-3",
    flag: "SY",
    cities: cityList.filter(city => city.country === "SY")
  },
  {
    country: {
      de: "Türkei",
      en: "Turkey",
      fr: "Turquie"
    },
    subdiv: [
      {title: "Adana"}, // 81
      {title: "Afyonkarahisar"}, // 03
      {title: "Aksaray"}, // 75
      {title: "Amasya"}, // 05
      {title: "Ankara"}, // 68
      {title: "Antalya"}, // 07
      {title: "Aydin"}, // 09
      {title: "Balıkesir"}, // 10
      {title: "Bartın"}, // 87
      {title: "Bilecik"}, // 11
      {title: "Bolu"}, // 14
      {title: "Burdur"}, // 15
      {title: "Bursa"}, // 16
      {title: "Çanakkale"}, // 17
      {title: "Çankırı"}, // 82
      {title: "Çorum"}, // 19
      {title: "Denizli"}, // 20
      {title: "Düzce"}, // 93
      {title: "Edirne"}, // 22
      {title: "Eskişehir"}, // 26
      {title: "Hatay"}, // 31
      {title: "Isparta"}, // 33
      {title: "Mersin"}, // 32
      {title: "İstanbul"}, // 34
      {title: "İzmir"}, // 35
      {title: "Kahramanmaraş"}, // 46
      {title: "Karabük"}, // 89
      {title: "Karaman"}, // 78
      {title: "Kastamonu"}, // 37
      {title: "Kayseri"}, // 38
      {title: "Kırıkkale"}, // 79
      {title: "Kırklareli"}, // 39
      {title: "Kırşehir"}, // 40
      {title: "Kocaeli"}, // 41
      {title: "Konya"}, // 71
      {title: "Kütahya"}, // 43
      {title: "Manisa"}, // 45
      {title: "Muğla"}, // 48
      {title: "Nevşehir"}, // 50
      {title: "Niğde"}, // 73
      {title: "Osmaniye"}, // 91
      {title: "Sakarya"}, // 54
      {title: "Samsun"}, // 55
      {title: "Sinop"}, // 57
      {title: "Sivas"}, // 58
      {title: "Tekirdağ"}, // 59
      {title: "Tokat"}, // 60
      {title: "Uşak"}, // 64
      {title: "Yalova"}, // 92
      {title: "Yozgat"}, // 66
      {title: "Zonguldak"}, // 85
    ],
    zone: "Etc/GMT-2",
    flag: "TR",
    cities: cityList.filter(city => {
      if(city.country === "TR") {
        switch(city.adminCode) {
          case "03":
          case "05":
          case "07":
          case "09":
          case "10":
          case "11":
          case "14":
          case "15":
          case "16":
          case "17":
          case "19":
          case "20":
          case "22":
          case "26":
          case "31":
          case "32":
          case "33":
          case "34":
          case "35":
          case "37":
          case "38":
          case "39":
          case "40":
          case "41":
          case "43":
          case "45":
          case "46":
          case "48":
          case "50":
          case "54":
          case "55":
          case "57":
          case "58":
          case "59":
          case "60":
          case "64":
          case "66":
          case "68":
          case "71":
          case "73":
          case "75":
          case "78":
          case "79":
          case "81":
          case "82":
          case "85":
          case "87":
          case "89":
          case "91":
          case "92":
          case "93":
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
      de: "Türkei",
      en: "Turkey",
      fr: "Turquie"
    },
    subdiv: [
      {title: "Adıyaman"}, // 02
      {title: "Ağrı"}, // 04
      {title: "Ardahan"}, // 86
      {title: "Artvin"}, // 08
      {title: "Batman"}, // 76
      {title: "Bayburt"}, // 77
      {title: "Bingöl"}, // 12
      {title: "Bitlis"}, // 13
      {title: "Diyarbakır"}, // 21
      {title: "Elazığ"}, // 23
      {title: "Erzincan"}, // 24
      {title: "Erzurum"}, // 25
      {title: "Gaziantep"}, // 83
      {title: "Giresun"}, // 28
      {title: "Gümüşhane"}, // 69
      {title: "Hakkari"}, // 70
      {title: "Iğdır"}, // 88
      {title: "Kars"}, // 84
      {title: "Kilis"}, // 90
      {title: "Malatya"}, // 44
      {title: "Mardin"}, // 72
      {title: "Muş"}, // 49
      {title: "Ordu"}, // 52
      {title: "Rize"}, // 53
      {title: "Şanlıurfa"}, // 63
      {title: "Siirt"}, // 74
      {title: "Şırnak"}, // 80
      {title: "Trabzon"}, // 61
      {title: "Tunceli"}, // 62
      {title: "Van"}, // 65
    ],
    zone: "Etc/GMT-3",
    flag: "TR",
    cities: cityList.filter(city => {
      if(city.country === "TR") {
        switch(city.adminCode) {
          case "02":
          case "04":
          case "08":
          case "12":
          case "13":
          case "21":
          case "23":
          case "24":
          case "25":
          case "28":
          case "44":
          case "49":
          case "52":
          case "53":
          case "61":
          case "62":
          case "63":
          case "65":
          case "69":
          case "70":
          case "72":
          case "74":
          case "76":
          case "77":
          case "80":
          case "83":
          case "84":
          case "86":
          case "88":
          case "90":
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
      de: "Vereinigte Arabische Emirate",
      en: "United Arab Emirates",
      fr: "Émirats arabes unis"
    },
    utcOffset: 210,
    flag: "AE",
    cities: cityList.filter(city => city.country === "AE")
  },
  {
    country: {
      de: "Jemen",
      en: "Yemen",
      fr: "Yémen"
    },
    zone: "Etc/GMT-3",
    flag: "YE",
    cities: cityList.filter(city => city.country === "YE")
  }
]

export default countryList