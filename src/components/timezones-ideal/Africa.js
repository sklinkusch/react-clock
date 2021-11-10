import cityList from "./cityList"

export default [
  {
    country: "Algeria",
    zone: "Etc/GMT+0",
    flag: "DZ",
    cities: cityList.filter(city => city.country === "DZ")
  },
  {
    country: "Angola",
    zone: "Etc/GMT-1",
    flag: "AO",
    cities: cityList.filter(city => city.country === "AO")
  },
  {
    country: "Benin",
    zone: "Etc/GMT+0",
    flag: "BJ",
    cities: cityList.filter(city => city.country === "BJ")
  },
  {
    country: "Botswana",
    zone: "Etc/GMT-2",
    flag: "BW",
    cities: cityList.filter(city => city.country === "BW")
  },
  {
    country: "Burkina Faso",
    zone: "Etc/GMT+0",
    flag: "BF",
    cities: cityList.filter(city => city.country === "BF")
  },
  {
    country: "Burundi",
    zone: "Etc/GMT-2",
    flag: "BI",
    cities: cityList.filter(city => city.country === "BI")
  },
  {
    country: "Cabo Verde",
    zone: "Etc/GMT+2",
    flag: "CV",
    cities: cityList.filter(city => city.country === "CV")
  },
  {
    country: "Cameroon",
    zone: "Etc/GMT-1",
    flag: "CM",
    cities: cityList.filter(city => city.country === "CM")
  },
  {
    country: "Central African Republic",
    zone: "Etc/GMT-1",
    flag: "CF",
    cities: cityList.filter(city => city.country === "CF")
  },
  {
    country: "Chad",
    zone: "Etc/GMT-1",
    flag: "TD",
    cities: cityList.filter(city => city.country === "TD")
  },
  {
    country: "Comoros",
    zone: "Etc/GMT-3",
    flag: "KM",
    cities: cityList.filter(city => city.country === "KM")
  },
  {
    country: "Côte d'Ivoire",
    zone: "Etc/GMT+0",
    flag: "CI",
    cities: cityList.filter(city => city.country === "CI")
  },
  {
    country: "Democratic Republic of the Congo",
    subdiv: [
      {title: "Équateur"}, // 02
      {title: "Kasaï"}, // 18
      {title: "Kinshasa"}, // 06
      {title: "Kongo Central"}, // 08
      {title: "Kwango"}, // 19
      {title: "Kwilu"}, // 20
      {title: "Mai-Ndombe"}, // 24
      {title: "Mongala"}, // 25
      {title: "Nord-Ubangi"}, // 26
      {title: "Sud-Ubangi"}, // 28
      {title: "Tshuapa"} // 31
    ],
    zone: "Etc/GMT-1",
    flag: "CD",
    cities: cityList.filter(city => city.country === "CD" && ["02","06","08","18","19","20","24","25","26","28","31"].includes(city.adminCode))
  },
  {
    country: "Democratic Republic of the Congo",
    subdiv: [
      {title: "Bas-Uele"}, // 13
      {title: "Haut-Katanga"}, // 14 
      {title: "Haut-Lomami"}, // 15
      {title: "Haut-Uele"}, // 16
      {title: "Ituri"}, // 17
      {title: "Kasaï-Central"}, // 23
      {title: "Kasaï-Oriental"}, // 04
      {title: "Lomami"}, // 21
      {title: "Lualaba"}, // 22
      {title: "Maniema"}, // 10
      {title: "Nord-Kivu"}, // 11
      {title: "Sankuru"}, // 27
      {title: "Sud-Kivu"}, // 12
      {title: "Tanganjika"}, // 29
      {title: "Tshopo"}, // 30
    ],
    zone: "Etc/GMT-2",
    flag: "CD",
    cities: cityList.filter(city => city.country === "CD" && ["04","10","11","12","13","14","15","16","17","21","22","23","27","29","30"].includes(city.adminCode))
  },
  {
    country: "Djibouti",
    zone: "Etc/GMT-3",
    flag: "DJ",
    cities: cityList.filter(city => city.country === "DJ")
  },
  {
    country: "Egypt",
    zone: "Etc/GMT-2",
    flag: "EG",
    cities: cityList.filter(city => city.country === "EG")
  },
  {
    country: "Equatorial Guinea",
    zone: "Etc/GMT-1",
    flag: "GQ",
    cities: cityList.filter(city => city.country === "GQ")
  },
  {
    country: "Eritrea",
    zone: "Etc/GMT-3",
    flag: "ER",
    cities: cityList.filter(city => city.country === "ER")
  },
  {
    country: "eSwatini",
    zone: "Etc/GMT-2",
    flag: "SZ",
    cities: cityList.filter(city => city.country === "SZ")
  },
  {
    country: "Ethiopia",
    zone: "Etc/GMT-3",
    flag: "ET",
    cities: cityList.filter(city => city.country === "ET")
  },
  {
    country: "France",
    subdiv: [
      {title: "Mayotte"}
    ],
    zone: "Etc/GMT-3",
    flag: "FR", // eigentlich YT aber gleiche Flagge
    cities: cityList.filter(city => city.country === "YT")
  },
  {
    country: "France",
    subdiv: [
      {title: "Réunion"}
    ],
    zone: "Etc/GMT-4",
    flag: "FR", // eigentlich RE aber gleiche Flagge
    cities: cityList.filter(city => city.country === "RE")
  },
  {
    country: "French Southern and Antarctic Lands (France)",
    subdiv: [
      {title: "Crozet Islands"},
      {title: "Scattered Islands in the Indian Ocean"},
    ],
    zone: "Etc/GMT-4",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["02","05"].includes(city.adminCode))
  },
  {
    country: "French Southern and Antarctic Lands (France)",
    subdiv: [
      {title: "Kerguelen Islands"},
      {title: "St. Paul and Amsterdam Islands"},
    ],
    zone: "Etc/GMT-5",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["01","03"].includes(city.adminCode))
  },
  {
    country: "Gabon",
    zone: "Etc/GMT-1",
    flag: "GA",
    cities: cityList.filter(city => city.country === "GA")
  },
  {
    country: "The Gambia",
    zone: "Etc/GMT+1",
    flag: "GM",
    cities: cityList.filter(city => city.country === "GM")
  },
  {
    country: "Ghana",
    zone: "Etc/GMT+0",
    flag: "GH",
    cities: cityList.filter(city => city.country === "GH")
  },
  {
    country: "Guinea",
    zone: "Etc/GMT+1",
    flag: "GN",
    cities: cityList.filter(city => city.country === "GN")
  },
  {
    country: "Guinea-Bissau",
    zone: "Etc/GMT+1",
    flag: "GW",
    cities: cityList.filter(city => city.country === "GW")
  },
  {
    country: "Kenya",
    zone: "Etc/GMT-2",
    flag: "KE",
    cities: cityList.filter(city => city.country === "KE")
  },
  {
    country: "Lesotho",
    zone: "Etc/GMT-2",
    flag: "LS",
    cities: cityList.filter(city => city.country === "LS")
  },
  {
    country: "Liberia",
    zone: "Etc/GMT+1",
    flag: "LR",
    cities: cityList.filter(city => city.country === "LR")
  },
  {
    country: "Libya",
    zone: "Etc/GMT-1",
    flag: "LY",
    cities: cityList.filter(city => city.country === "LY")
  },
  {
    country: "Madagascar",
    zone: "Etc/GMT-3",
    flag: "MG",
    cities: cityList.filter(city => city.country === "MG")
  },
  {
    country: "Malawi",
    zone: "Etc/GMT-2",
    flag: "MW",
    cities: cityList.filter(city => city.country === "MW")
  },
  {
    country: "Mali",
    zone: "Etc/GMT+0",
    flag: "ML",
    cities: cityList.filter(city => city.country === "ML")
  },
  {
    country: "Mauritania",
    zone: "Etc/GMT+1",
    flag: "MR",
    cities: cityList.filter(city => city.country === "MR")
  },
  {
    country: "Mauritius",
    zone: "Etc/GMT-4",
    flag: "MU",
    cities: cityList.filter(city => city.country === "MU")
  },
  {
    country: "Morocco",
    zone: "Etc/GMT+0",
    flag: "MA",
    cities: cityList.filter(city => city.country === "MA")
  },
  {
    country: "Mozambique",
    zone: "Etc/GMT-2",
    flag: "MZ",
    cities: cityList.filter(city => city.country === "MZ")
  },
  {
    country: "Namibia",
    zone: "Etc/GMT-1",
    flag: "NA",
    cities: cityList.filter(city => city.country === "NA")
  },
  {
    country: "Niger",
    zone: "Etc/GMT-1",
    flag: "NE",
    cities: cityList.filter(city => city.country === "NE")
  },
  {
    country: "Nigeria",
    zone: "Etc/GMT-1",
    flag: "NG",
    cities: cityList.filter(city => city.country === "NG")
  },
  {
    country: "Republic of the Congo",
    zone: "Etc/GMT-1",
    flag: "CG",
    cities: cityList.filter(city => city.country === "CG")
  },
  {
    country: "Rwanda",
    zone: "Etc/GMT-2",
    flag: "RW",
    cities: cityList.filter(city => city.country === "RW")
  },
  {
    country: "São Tomé and Príncipe",
    zone: "Etc/GMT+0",
    flag: "ST",
    cities: cityList.filter(city => city.country === "ST")
  },
  {
    country: "Sahrawi Arab Democratic Republic",
    zone: "Etc/GMT+1",
    flag: "EH",
    cities: cityList.filter(city => city.country === "EH")
  },
  {
    country: "Senegal",
    zone: "Etc/GMT+1",
    flag: "SN",
    cities: cityList.filter(city => city.country === "SN")
  },
  {
    country: "Seychelles",
    zone: "Etc/GMT-3",
    flag: "SC",
    cities: cityList.filter(city => city.country === "SC")
  },
  {
    country: "Sierra Leone",
    zone: "Etc/GMT+1",
    flag: "SL",
    cities: cityList.filter(city => city.country === "SL")
  },
  {
    country: "Somalia",
    zone: "Etc/GMT-3",
    flag: "SO",
    cities: cityList.filter(city => city.country === "SO")
  },
  {
    country: "South Africa",
    subdiv: [
      {title: "Northern Cape"}, // 08
      {title: "Western Cape"}, // 11
    ],
    zone: "Etc/GMT-1",
    flag: "ZA",
    cities: cityList.filter(city => city.country === "ZA" && ["08","11"].includes(city.adminCode))
  },
  {
    country: "South Africa",
    subdiv: [
      {title: "Eastern Cape"}, // 05
      {title: "Free State"}, //  03
      {title: "Gauteng"}, // 06
      {title: "KwaZulu-Natal"}, // 02
      {title: "Limpopo"}, // 09
      {title: "Mpumalanga"}, // 07
      {title: "North West"}, // 10
    ],
    zone: "Etc/GMT-2",
    flag: "ZA",
    cities: cityList.filter(city => city.country === "ZA" && ["02","03","05","06","07","09","10"].includes(city.adminCode))
  },
  {
    country: "South Sudan",
    zone: "Etc/GMT-2",
    flag: "SS",
    cities: cityList.filter(city => city.country === "SS")
  },
  {
    country: "Spain",
    subdiv: [
      {title: "Ceuta"}, 
      {title: "Melilla"}
    ],
    zone: "Etc/GMT+0",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && ["CE", "ML"].includes(city.adminCode))
  },
  {
    country: "Sudan",
    zone: "Etc/GMT-2",
    flag: "SD",
    cities: cityList.filter(city => city.country === "SD")
  },
  {
    country: "Tanzania",
    zone: "Etc/GMT-2",
    flag: "TZ",
    cities: cityList.filter(city => city.country === "TZ")
  },
  {
    country: "Togo",
    zone: "Etc/GMT+0",
    flag: "TG",
    cities: cityList.filter(city => city.country === "TG")
  },
  {
    country: "Tunisia",
    zone: "Etc/GMT-1",
    flag: "TN",
    cities: cityList.filter(city => city.country === "TN")
  },
  {
    country: "Uganda",
    zone: "Etc/GMT-2",
    flag: "UG",
    cities: cityList.filter(city => city.country === "UG")
  },
  {
    country: "United Kingdom",
    subdiv: [
      {title: "Ascension"}, 
      {title: "Tristan da Cunha"}
    ],
    zone: "Etc/GMT+1",
    flag: "GB", // eigentlich SH
    cities: cityList.filter(city => city.country === "SH" && ["01","03"].includes(city.adminCode))
  },
  {
    country: "United Kingdom",
    subdiv: [
      {title: "St. Helena"}, 
    ],
    zone: "Etc/GMT+0",
    flag: "GB", // eigentlich SH, aber Flagge hier die gleiche
    cities: cityList.filter(city => city.country === "SH" && city.adminCode === "02")
  },
  {
    country: "Zambia",
    zone: "Etc/GMT-2",
    flag: "ZM",
    cities: cityList.filter(city => city.country === "ZM")
  },
  {
    country: "Zimbabwe",
    zone: "Etc/GMT-2",
    flag: "ZW",
    cities: cityList.filter(city => city.country === "ZW")
  }
]