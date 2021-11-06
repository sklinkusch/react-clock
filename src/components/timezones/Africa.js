import cityList from "cities15000-json"

export default [
  {
    country: "Algeria",
    zone: "Africa/Algiers",
    flag: "DZ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "DZ" && city.tz === "Africa/Algiers")
  },
  {
    country: "Angola",
    zone: "Africa/Luanda",
    flag: "AO",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "AO" && city.tz === "Africa/Luanda")
  },
  {
    country: "Benin",
    zone: "Africa/Porto-Novo",
    flag: "BJ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "BJ" && city.tz === "Africa/Porto-Novo")
  },
  {
    country: "Botswana",
    zone: "Africa/Gaborone",
    flag: "BW",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "BW" && city.tz === "Africa/Gaborone")
  },
  {
    country: "Burkina Faso",
    zone: "Africa/Ouagadougou",
    flag: "BF",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "BF" && city.tz === "Africa/Ouagadougou")
  },
  {
    country: "Burundi",
    zone: "Africa/Bujumbura",
    flag: "BI",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "BI" && city.tz === "Africa/Bujumbura")
  },
  {
    country: "Cabo Verde",
    zone: "Atlantic/Cape_Verde",
    flag: "CV",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CV" && city.tz === "Atlantic/Cape_Verde")
  },
  {
    country: "Cameroon",
    zone: "Africa/Douala",
    flag: "CM",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CM" && city.tz === "Africa/Douala")
  },
  {
    country: "Central African Republic",
    zone: "Africa/Bangui",
    flag: "CF",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CF" && city.tz === "Africa/Bangui")
  },
  {
    country: "Chad",
    zone: "Africa/Ndjamena",
    flag: "TD",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "TD" && city.tz === "Africa/Ndjamena")
  },
  {
    country: "Comoros",
    zone: "Indian/Comoro",
    flag: "KM",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "KM" && city.tz === "Indian/Comoro")
  },
  {
    country: "Côte d'Ivoire",
    zone: "Africa/Abidjan",
    flag: "CI",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CI" && city.tz === "Africa/Abidjan")
  },
  {
    country: "Democratic Republic of the Congo",
    subdiv: [
      {title: "Équateur"}, 
      {title: "Kinshasa"}, 
      {title: "Kongo Central"}, 
      {title: "Kwango"}, 
      {title: "Kwilu"}, 
      {title: "Mai-Ndombe"}, 
      {title: "Mongala"}, 
      {title: "Nord-Ubangi"}, 
      {title: "Sud-Ubangi"}, 
      {title: "Tshuapa"}
    ],
    zone: "Africa/Kinshasa",
    flag: "CD",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CD" && city.tz === "Africa/Kinshasa")
  },
  {
    country: "Democratic Republic of the Congo",
    subdiv: [
      {title: "Bas-Uele"}, 
      {title: "Haut-Katanga"}, 
      {title: "Haut-Lomami"}, 
      {title: "Haut-Uele"},
      {title: "Ituri"}, 
      {title: "Kasaï"}, 
      {title: "Kasaï-Central"}, 
      {title: "Kasaï-Oriental"}, 
      {title: "Lomami"}, 
      {title: "Lualaba"}, 
      {title: "Maniema"}, 
      {title: "Nord-Kivu"}, 
      {title: "Sankuru"}, 
      {title: "Sud-Kivu"}, 
      {title: "Tanganjika"}, 
      {title: "Tshopo"}
    ],
    zone: "Africa/Lubumbashi",
    flag: "CD",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CD" && city.tz === "Africa/Lubumbashi")
  },
  {
    country: "Djibouti",
    zone: "Africa/Djibouti",
    flag: "DJ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "DJ" && city.tz === "Africa/Djibouti")
  },
  {
    country: "Egypt",
    zone: "Africa/Cairo",
    flag: "EG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "EG" && city.tz === "Africa/Cairo")
  },
  {
    country: "Equatorial Guinea",
    zone: "Africa/Malabo",
    flag: "GQ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GQ" && city.tz === "Africa/Malabo")
  },
  {
    country: "Eritrea",
    zone: "Africa/Asmara",
    flag: "ER",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ER" && city.tz === "Africa/Asmara")
  },
  {
    country: "eSwatini",
    zone: "Africa/Mbabane",
    flag: "SZ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SZ" && city.tz === "Africa/Mbabane")
  },
  {
    country: "Ethiopia",
    zone: "Africa/Addis_Ababa",
    flag: "ET",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ET" && city.tz === "Africa/Addis_Ababa")
  },
  {
    country: "France",
    subdiv: [
      {title: "Mayotte"}
    ],
    zone: "Indian/Mayotte",
    flag: "FR", // eigentlich YT aber gleiche Flagge
    cities: cityList.filter(city => city.population >= 500000 && city.country === "YT" && city.tz === "Indian/Mayotte")
  },
  {
    country: "France",
    subdiv: [
      {title: "Réunion"}
    ],
    zone: "Indian/Reunion",
    flag: "FR", // eigentlich RE aber gleiche Flagge
    cities: cityList.filter(city => city.population >= 500000 && city.country === "RE" && city.tz === "Indian/Reunion")
  },
  {
    country: "French Southern and Antarctic Lands (France)",
    zone: "Indian/Kerguelen",
    flag: "TF",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "TF" && city.tz === "Indian/Kerguelen")
  },
  {
    country: "Gabon",
    zone: "Africa/Libreville",
    flag: "GA",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GA" && city.tz === "Africa/Libreville")
  },
  {
    country: "The Gambia",
    zone: "Africa/Banjul",
    flag: "GM",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GM" && city.tz === "Africa/Banjul")
  },
  {
    country: "Ghana",
    zone: "Africa/Accra",
    flag: "GH",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GH" && city.tz === "Africa/Accra")
  },
  {
    country: "Guinea",
    zone: "Africa/Conakry",
    flag: "GN",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GN" && city.tz === "Africa/Conakry")
  },
  {
    country: "Guinea-Bissau",
    zone: "Africa/Bissau",
    flag: "GW",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "GW" && city.tz === "Africa/Bissau")
  },
  {
    country: "Kenya",
    zone: "Africa/Nairobi",
    flag: "KE",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "KE" && city.tz === "Africa/Nairobi")
  },
  {
    country: "Lesotho",
    zone: "Africa/Maseru",
    flag: "LS",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "LS" && city.tz === "Africa/Maseru")
  },
  {
    country: "Liberia",
    zone: "Africa/Monrovia",
    flag: "LR",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "LR" && city.tz === "Africa/Monrovia")
  },
  {
    country: "Libya",
    zone: "Africa/Tripoli",
    flag: "LY",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "LY" && city.tz === "Africa/Tripoli")
  },
  {
    country: "Madagascar",
    zone: "Indian/Antananarivo",
    flag: "MG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MG" && city.tz === "Indian/Antananarivo")
  },
  {
    country: "Malawi",
    zone: "Africa/Blantyre",
    flag: "MW",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MW" && city.tz === "Africa/Blantyre")
  },
  {
    country: "Mali",
    zone: "Africa/Bamako",
    flag: "ML",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ML" && city.tz === "Africa/Bamako")
  },
  {
    country: "Mauritania",
    zone: "Africa/Nouakchott",
    flag: "MR",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MR" && city.tz === "Africa/Nouakchott")
  },
  {
    country: "Mauritius",
    zone: "Indian/Mauritius",
    flag: "MU",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MU" && city.tz === "Indian/Mauritius")
  },
  {
    country: "Morocco",
    zone: "Africa/Casablanca",
    flag: "MA",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MA" && city.tz === "Africa/Casablanca")
  },
  {
    country: "Mozambique",
    zone: "Africa/Maputo",
    flag: "MZ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "MZ" && city.tz === "Africa/Maputo")
  },
  {
    country: "Namibia",
    zone: "Africa/Windhoek",
    flag: "NA",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "NA" && city.tz === "Africa/Windhoek")
  },
  {
    country: "Niger",
    zone: "Africa/Niamey",
    flag: "NE",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "NE" && city.tz === "Africa/Niamey")
  },
  {
    country: "Nigeria",
    zone: "Africa/Lagos",
    flag: "NG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "NG" && city.tz === "Africa/Lagos")
  },
  {
    country: "Republic of the Congo",
    zone: "Africa/Brazzaville",
    flag: "CG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "CG" && city.tz === "Africa/Brazzaville")
  },
  {
    country: "Rwanda",
    zone: "Africa/Kigali",
    flag: "RW",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "RW" && city.tz === "Africa/Kigali")
  },
  {
    country: "São Tomé and Príncipe",
    zone: "Africa/Sao_Tome",
    flag: "ST",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ST" && city.tz === "Africa/Sao_Tome")
  },
  {
    country: "Sahrawi Arab Democratic Republic",
    zone: "Africa/El_Aaiun",
    flag: "EH",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "EH" && city.tz === "Africa/El_Aaiun")
  },
  {
    country: "Senegal",
    zone: "Africa/Dakar",
    flag: "SN",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SN" && city.tz === "Africa/Dakar")
  },
  {
    country: "Seychelles",
    zone: "Indian/Mahe",
    flag: "SC",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SC" && city.tz === "Indian/Mahe")
  },
  {
    country: "Sierra Leone",
    zone: "Africa/Freetown",
    flag: "SL",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SL" && city.tz === "Africa/Freetown")
  },
  {
    country: "Somalia",
    zone: "Africa/Mogadishu",
    flag: "SO",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SO" && city.tz === "Africa/Mogadishu")
  },
  {
    country: "South Africa",
    zone: "Africa/Johannesburg",
    flag: "ZA",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ZA" && city.tz === "Africa/Johannesburg")
  },
  {
    country: "South Sudan",
    zone: "Africa/Juba",
    flag: "SS",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SS" && city.tz === "Africa/Juba")
  },
  {
    country: "Spain",
    subdiv: [
      {title: "Ceuta"}, 
      {title: "Melilla"}
    ],
    zone: "Africa/Ceuta",
    flag: "ES",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ES" && city.tz === "Africa/Ceuta")
  },
  {
    country: "Sudan",
    zone: "Africa/Khartoum",
    flag: "SD",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SD" && city.tz === "Africa/Khartoum")
  },
  {
    country: "Tanzania",
    zone: "Africa/Dar_es_Salaam",
    flag: "TZ",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "TZ" && city.tz === "Africa/Dar_es_Salaam")
  },
  {
    country: "Togo",
    zone: "Africa/Lome",
    flag: "TG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "TG" && city.tz === "Africa/Lome")
  },
  {
    country: "Tunisia",
    zone: "Africa/Tunis",
    flag: "TN",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "TN" && city.tz === "Africa/Tunis")
  },
  {
    country: "Uganda",
    zone: "Africa/Kampala",
    flag: "UG",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "UG" && city.tz === "Africa/Kampala")
  },
  {
    country: "United Kingdom",
    subdiv: [
      {title: "Ascension"}, 
      {title: "St. Helena"}, 
      {title: "Tristan da Cunha"}
    ],
    zone: "Atlantic/St_Helena",
    flag: "GB", // eigentlich SH, aber Flagge hier die gleiche
    cities: cityList.filter(city => city.population >= 500000 && city.country === "SH" && city.tz === "Atlantic/St_Helena")
  },
  {
    country: "Zambia",
    zone: "Africa/Lusaka",
    flag: "ZM",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ZM" && city.tz === "Africa/Lusaka")
  },
  {
    country: "Zimbabwe",
    zone: "Africa/Harare",
    flag: "ZW",
    cities: cityList.filter(city => city.population >= 500000 && city.country === "ZW" && city.tz === "Africa/Harare")
  }
]