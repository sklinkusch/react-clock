import cityList from "./cityList"

export default [
  {
    country: "American Samoa (United States)",
    zone: "Etc/GMT+11",
    flag: "AS",
    cities: cityList.filter(city => city.country === "AS")
  },
  {
    country: "Cook Islands (New Zealand)",
    zone: "Etc/GMT+11",
    flag: "CK",
    cities: cityList.filter(city => city.country === "CK")
  },
  {
    country: "Fiji",
    zone: "Etc/GMT-12",
    flag: "FJ",
    cities: cityList.filter(city => city.country === "FJ")
  },
  {
    country: "French Polynesia (France)",
    subdiv: [
      {title: "Austral Islands"}, // 05
      {title: "Society Islands"}, // 01, 02
      {title: "Tuamotus"} // part of 03
    ],
    zone: "Etc/GMT+10",
    flag: "PF",
    cities: cityList.filter(city => {
      if(city.country === "PF") {
        switch(city.adminCode) {
          case "01":
          case "02":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "French Polynesia (France)",
    subdiv: [
      {title: "Gambier Islands"} // part of 03
    ],
    zone: "Etc/GMT+9",
    flag: "PF"
  },
  {
    country: "French Polynesia (France)",
    subdiv: [
      {title: "Marquesas Islands"} // 04
    ],
    zone: "Etc/GMT+9",
    flag: "PF",
    cities: cityList.filter(city => city.country === "PF" && city.adminCode === "04")
  },
  {
    country: "Guam (United States)",
    zone: "Etc/GMT-10",
    flag: "GU",
    cities: cityList.filter(city => city.country === "GU")
  },
  {
    country: "Kiribati",
    subdiv: [
      {title: "Banaba"}, 
    ],
    zone: "Etc/GMT-11",
    flag: "KI"
  },
  {
    country: "Kiribati",
    subdiv: [
      {title: "Gilbert Islands"}
    ],
    zone: "Etc/GMT-12",
    flag: "KI",
    cities: cityList.filter(city => city.country === "KI" && city.adminCode === "01")
  },
  {
    country: "Kiribati",
    subdiv: [
      {title: "Phoenix Islands"}
    ],
    zone: "Etc/GMT-13",
    flag: "KI"
  },
  {
    country: "Kiribati",
    subdiv: [
      {title: "Kiritimati"}, 
      {title: "Line Islands"}
    ],
    zone: "Etc/GMT-14",
    flag: "KI"
  },
  {
    country: "Marshall Islands",
    zone: "Etc/GMT-11",
    flag: "MH",
    cities: cityList.filter(city => city.country === "MH")
  },
  {
    country: "Micronesia",
    subdiv: [
      {title: "Chuuk"}, // 03
      {title: "Yap"} // 04
    ],
    zone: "Etc/GMT-10",
    flag: "FM",
    cities: cityList.filter(city => {
      if(city.country === "FM") {
        switch(city.adminCode) {
          case "03":
          case "04":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "Micronesia",
    subdiv: [
      {title: "Kosrae"}, // 01
      {title: "Pohnpei"} // 02
    ],
    zone: "Etc/GMT-11",
    flag: "FM",
    cities: cityList.filter(city => {
      if(city.country === "FM") {
        switch(city.adminCode) {
          case "01":
          case "02":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "Nauru",
    zone: "Etc/GMT-11",
    flag: "NR",
    cities: cityList.filter(city => city.country === "NR")
  },
  {
    country: "New Caledonia (France)",
    zone: "Etc/GMT-11",
    flag: "NC",
    cities: cityList.filter(city => city.country === "NC")
  },
  {
    country: "New Zealand",
    subdiv: [
      {title: "Canterbury"}, // E9
      {title: "Marlborough"}, // F4
      {title: "Nelson"}, // F5
      {title: "Otago"}, // F7
      {title: "Southland"}, // F8
      {title: "West Coast"}, // G3
      {title: "Tasman"}, // TAS
    ],
    zone: "Etc/GMT-11",
    flag: "NZ",
    cities: cityList.filter(city => {
      if(city.country === "NZ") {
        switch(city.adminCode) {
          case "E9":
          case "F4":
          case "F5":
          case "F7":
          case "F8":
          case "G3":
          case "TAS":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "New Zealand",
    subdiv: [
      {title: "Auckland"}, // E7
      {title: "Bay of Plenty"}, // E8
      {title: "Gisborne"}, // F1
      {title: "Hawke's Bay"}, // F2
      {title: "Manawatu-Wanganui"}, // F3
      {title: "Northland"}, // F6
      {title: "Taranaki"}, // F9
      {title: "Waikato"}, // G1
      {title: "Wellington"}, // G2
    ],
    zone: "Etc/GMT-12",
    flag: "NZ",
    cities: cityList.filter(city => {
      if(city.country === "NZ") {
        switch(city.adminCode) {
          case "E7":
          case "E8":
          case "F1":
          case "F2":
          case "F3":
          case "F6":
          case "F9":
          case "G1":
          case "G2":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "New Zealand",
    subdiv: [
      {title: "Chatham Islands"} // 10
    ],
    zone: "Etc/GMT-12",
    flag: "NZ",
    cities: cityList.filter(city => city.country === "NZ" && city.adminCode === "10")
  },
  {
    country: "Niue (New Zealand)",
    zone: "Etc/GMT+11",
    flag: "NU",
    cities: cityList.filter(city => city.country === "NU")
  },
  {
    country: "Northern Mariana Islands (United States)",
    zone: "Etc/GMT-10",
    flag: "MP",
    cities: cityList.filter(city => city.country === "MP")
  },
  {
    country: "Palau",
    zone: "Etc/GMT-9",
    flag: "PW",
    cities: cityList.filter(city => city.country === "PW")
  },
  {
    country: "Papua New Guinea",
    zone: "Etc/GMT-10",
    flag: "PG",
    cities: cityList.filter(city => city.country === "PG")
  },
  {
    country: "Pitcairn Islands (United Kingdom)",
    zone: "Etc/GMT-9",
    flag: "PN",
    cities: cityList.filter(city => city.country === "PN")
  },
  {
    country: "Samoa",
    zone: "Etc/GMT-13",
    flag: "WS",
    cities: cityList.filter(city => city.country === "WS")
  },
  {
    country: "Solomon Islands",
    zone: "Etc/GMT-11",
    flag: "SB",
    cities: cityList.filter(city => city.country === "SB")
  },
  {
    country: "Tokelau (New Zealand)",
    zone: "Etc/GMT-13",
    flag: "TK",
    cities: cityList.filter(city => city.country === "TK")
  },
  {
    country: "Tonga",
    zone: "Etc/GMT-12",
    flag: "TO",
    cities: cityList.filter(city => city.country === "TO")
  },
  {
    country: "Tuvalu",
    zone: "Etc/GMT-12",
    flag: "TV",
    cities: cityList.filter(city => city.country === "TV")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Hawaii"}
    ],
    zone: "Etc/GMT+10",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.adminCode === "HI")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Midway Islands"} // 300
    ],
    zone: "Etc/GMT+12",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => {
      if(city.country === "UM") {
        switch(city.adminCode) {
          case "300":
            return true
          default:
            return false
        }
      }
      return false
    })
  },
  {
    country: "United States",
    subdiv: [
      {title: "Wake"}
    ],
    zone: "Etc/GMT-11",
    flag: "US", // eigentlich UM
    cities: cityList.filter(city => city.country === "UM" && city.adminCode === "450")
  },
  {
    country: "Vanuatu",
    zone: "Etc/GMT-11",
    flag: "VU",
    cities: cityList.filter(city => city.country === "VU")
  },
  {
    country: "Wallis and Futuna (France)",
    zone: "Etc/GMT-12",
    flag: "WF",
    cities: cityList.filter(city => city.country === "WF")
  }
]
