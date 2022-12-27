import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Algerien",
      en: "Algeria",
      fr: "Algérie"
    },
    zone: "Africa/Algiers",
    flag: "DZ",
    cities: cityList.filter(city => city.country === "DZ" && city.tz === "Africa/Algiers")
  },
  {
    country: {
      de: "Angola",
      en: "Angola",
      fr: "Angola"
    },
    zone: "Africa/Luanda",
    flag: "AO",
    cities: cityList.filter(city => city.country === "AO" && city.tz === "Africa/Luanda")
  },
  {
    country: {
      de: "Benin",
      en: "Benin",
      fr: "Bénin"
    },
    zone: "Africa/Porto-Novo",
    flag: "BJ",
    cities: cityList.filter(city => city.country === "BJ" && city.tz === "Africa/Porto-Novo")
  },
  {
    country: {
      de: "Botswana",
      en: "Botswana",
      fr: "Botswana"
    },
    zone: "Africa/Gaborone",
    flag: "BW",
    cities: cityList.filter(city => city.country === "BW" && city.tz === "Africa/Gaborone")
  },
  {
    country: {
      de: "Burkina Faso",
      en: "Burkina Faso",
      fr: "Burkina Faso"
    },
    zone: "Africa/Ouagadougou",
    flag: "BF",
    cities: cityList.filter(city => city.country === "BF" && city.tz === "Africa/Ouagadougou")
  },
  {
    country: {
      de: "Burundi",
      en: "Burundi",
      fr: "Burundi"
    },
    zone: "Africa/Bujumbura",
    flag: "BI",
    cities: cityList.filter(city => city.country === "BI" && city.tz === "Africa/Bujumbura")
  },
  {
    country: {
      de: "Kap Verde",
      en: "Cabo Verde",
      fr: "Cap-Vert"
    },
    zone: "Atlantic/Cape_Verde",
    flag: "CV",
    cities: cityList.filter(city => city.country === "CV" && city.tz === "Atlantic/Cape_Verde")
  },
  {
    country: {
      de: "Kamerun",
      en: "Cameroon",
      fr: "Cameroun"
    },
    zone: "Africa/Douala",
    flag: "CM",
    cities: cityList.filter(city => city.country === "CM" && city.tz === "Africa/Douala")
  },
  {
    country: {
      de: "Zentralafrikanische Republik",
      en: "Central African Republic",
      fr: "République centrafricaine"
    },
    zone: "Africa/Bangui",
    flag: "CF",
    cities: cityList.filter(city => city.country === "CF" && city.tz === "Africa/Bangui")
  },
  {
    country: {
      de: "Tschad",
      en: "Chad",
      fr: "Tchad"
    },
    zone: "Africa/Ndjamena",
    flag: "TD",
    cities: cityList.filter(city => city.country === "TD" && city.tz === "Africa/Ndjamena")
  },
  {
    country: {
      de: "Komoren",
      en: "Comoros",
      fr: "Comores"
    },
    zone: "Indian/Comoro",
    flag: "KM",
    cities: cityList.filter(city => city.country === "KM" && city.tz === "Indian/Comoro")
  },
  {
    country: {
      de: "Elfenbeinküste",
      en: "Côte d'Ivoire",
      fr: "Côte d'Ivoire"
    },
    zone: "Africa/Abidjan",
    flag: "CI",
    cities: cityList.filter(city => city.country === "CI" && city.tz === "Africa/Abidjan")
  },
  {
    country: {
      de: "Demokratische Republik Kongo",
      en: "Democratic Republic of the Congo",
      fr: "République démocratique du Congo"
    },
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
    cities: cityList.filter(city => city.country === "CD" && city.tz === "Africa/Kinshasa")
  },
  {
    country: {
      de: "Demokratische Republik Kongo",
      en: "Democratic Republic of the Congo"
    },
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
    cities: cityList.filter(city => city.country === "CD" && city.tz === "Africa/Lubumbashi")
  },
  {
    country: {
      de: "Dschibuti",
      en: "Djibouti",
      fr: "Djibouti"
    },
    zone: "Africa/Djibouti",
    flag: "DJ",
    cities: cityList.filter(city => city.country === "DJ" && city.tz === "Africa/Djibouti")
  },
  {
    country: {
      de: "Ägypten",
      en: "Egypt",
      fr: "Égypte"
    },
    zone: "Africa/Cairo",
    flag: "EG",
    cities: cityList.filter(city => city.country === "EG" && city.tz === "Africa/Cairo")
  },
  {
    country: {
      de: "Äquatorialguinea",
      en: "Equatorial Guinea",
      fr: "Guinée équatoriale"
    },
    zone: "Africa/Malabo",
    flag: "GQ",
    cities: cityList.filter(city => city.country === "GQ" && city.tz === "Africa/Malabo")
  },
  {
    country: {
      de: "Eritrea",
      en: "Eritrea",
      fr: "Érythrée"
    },
    zone: "Africa/Asmara",
    flag: "ER",
    cities: cityList.filter(city => city.country === "ER" && city.tz === "Africa/Asmara")
  },
  {
    country: {
      de: "eSwatini",
      en: "eSwatini",
      fr: "Eswatini"
    },
    zone: "Africa/Mbabane",
    flag: "SZ",
    cities: cityList.filter(city => city.country === "SZ" && city.tz === "Africa/Mbabane")
  },
  {
    country: {
      de: "Äthiopien",
      en: "Ethiopia",
      fr: "Éthiopie"
    },
    zone: "Africa/Addis_Ababa",
    flag: "ET",
    cities: cityList.filter(city => city.country === "ET" && city.tz === "Africa/Addis_Ababa")
  },
  {
    country: {
      de: "Mayotte (Frankreich)",
      en: "Mayotte (France)",
      fr: "Mayotte (France)"
    },
    zone: "Indian/Mayotte",
    flag: "YT",
    cities: cityList.filter(city => city.country === "YT" && city.tz === "Indian/Mayotte")
  },
  {
    country: {
      de: "La Réunion (Frankreich)",
      en: "La Réunion (France)",
      fr: "La Réunion (France)"
    },
    zone: "Indian/Reunion",
    flag: "RE",
    cities: cityList.filter(city => city.country === "RE" && city.tz === "Indian/Reunion")
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)",
      fr: "Terres australes et antarctiques françaises (France)"
    },
    subdiv: [
      {
        title: {
          de: "Îles Éparses",
          en: "Scattered Islands in the Indian Ocean",
          fr: "Îles Éparses de l'océan Indien"
        }
      },
    ],
    zone: "Indian/Mayotte",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["02","05"].includes(city.adminCode))
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)",
      fr: "Terres australes et antarctiques françaises (France)"
    },
    subdiv: [
      {
        title: {
          de: "Crozetinseln",
          en: "Crozet Islands",
          fr: "Archipel Crozet"
        }
      },
    ],
    zone: "Indian/Reunion",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && ["02","05"].includes(city.adminCode))
  },
  {
    country: {
      de: "Französische Süd- und Antarktisgebiete (Frankreich)",
      en: "French Southern and Antarctic Lands (France)",
      fr: "Terres australes et antarctiques françaises (France)"
    },
    subdiv: [
      {
        title: {
          de: "Kerguelen-Archipel",
          en: "Kerguelen Islands",
          fr: "Îles Kerguelen"
        }
      },
      {
        title: {
          de: "Sankt Paul und Amsterdam",
          en: "St. Paul and Amsterdam Islands",
          fr: "Îles Saint-Paul et Nouvelle-Amsterdam"
        }
      },
    ],
    zone: "Indian/Kerguelen",
    flag: "TF",
    cities: cityList.filter(city => city.country === "TF" && city.tz === "Indian/Kerguelen")
  },
  {
    country: {
      de: "Gabun",
      en: "Gabon",
      fr: "Gabon"
    },
    zone: "Africa/Libreville",
    flag: "GA",
    cities: cityList.filter(city => city.country === "GA" && city.tz === "Africa/Libreville")
  },
  {
    country: {
      de: "Gambia",
      en: "The Gambia",
      fr: "Gambie"
    },
    zone: "Africa/Banjul",
    flag: "GM",
    cities: cityList.filter(city => city.country === "GM" && city.tz === "Africa/Banjul")
  },
  {
    country: {
      de: "Ghana",
      en: "Ghana",
      fr: "Ghana"
    },
    zone: "Africa/Accra",
    flag: "GH",
    cities: cityList.filter(city => city.country === "GH" && city.tz === "Africa/Accra")
  },
  {
    country: {
      de: "Guinea",
      en: "Guinea",
      fr: "Guinée"
    },
    zone: "Africa/Conakry",
    flag: "GN",
    cities: cityList.filter(city => city.country === "GN" && city.tz === "Africa/Conakry")
  },
  {
    country: {
      de: "Guinea-Bissau",
      en: "Guinea-Bissau",
      fr: "Guinée-Bissau"
    },
    zone: "Africa/Bissau",
    flag: "GW",
    cities: cityList.filter(city => city.country === "GW" && city.tz === "Africa/Bissau")
  },
  {
    country: {
      de: "Kenia",
      en: "Kenya",
      fr: "Kenya"
    },
    zone: "Africa/Nairobi",
    flag: "KE",
    cities: cityList.filter(city => city.country === "KE" && city.tz === "Africa/Nairobi")
  },
  {
    country: {
      de: "Lesotho",
      en: "Lesotho",
      fr: "Lesotho"
    },
    zone: "Africa/Maseru",
    flag: "LS",
    cities: cityList.filter(city => city.country === "LS" && city.tz === "Africa/Maseru")
  },
  {
    country: {
      de: "Liberia",
      en: "Liberia",
      fr: "Liberia"
    },
    zone: "Africa/Monrovia",
    flag: "LR",
    cities: cityList.filter(city => city.country === "LR" && city.tz === "Africa/Monrovia")
  },
  {
    country: {
      de: "Libyen",
      en: "Libya",
      fr: "Libye"
    },
    zone: "Africa/Tripoli",
    flag: "LY",
    cities: cityList.filter(city => city.country === "LY" && city.tz === "Africa/Tripoli")
  },
  {
    country: {
      de: "Madagaskar",
      en: "Madagascar",
      fr: "Madagascar"
    },
    zone: "Indian/Antananarivo",
    flag: "MG",
    cities: cityList.filter(city => city.country === "MG" && city.tz === "Indian/Antananarivo")
  },
  {
    country: {
      de: "Malawi",
      en: "Malawi",
      fr: "Malawi"
    },
    zone: "Africa/Blantyre",
    flag: "MW",
    cities: cityList.filter(city => city.country === "MW" && city.tz === "Africa/Blantyre")
  },
  {
    country: {
      de: "Mali",
      en: "Mali",
      fr: "Mali"
    },
    zone: "Africa/Bamako",
    flag: "ML",
    cities: cityList.filter(city => city.country === "ML" && city.tz === "Africa/Bamako")
  },
  {
    country: {
      de: "Mauretanien",
      en: "Mauritania",
      fr: "Mauritanie"
    },
    zone: "Africa/Nouakchott",
    flag: "MR",
    cities: cityList.filter(city => city.country === "MR" && city.tz === "Africa/Nouakchott")
  },
  {
    country: {
      de: "Mauritius",
      en: "Mauritius",
      fr: "Maurice"
    },
    zone: "Indian/Mauritius",
    flag: "MU",
    cities: cityList.filter(city => city.country === "MU" && city.tz === "Indian/Mauritius")
  },
  {
    country: {
      de: "Marokko",
      en: "Morocco",
      fr: "Maroc"
    },
    zone: "Africa/Casablanca",
    flag: "MA",
    cities: cityList.filter(city => city.country === "MA" && city.tz === "Africa/Casablanca")
  },
  {
    country: {
      de: "Mosambik",
      en: "Mozambique",
      fr: "Mozambique"
    },
    zone: "Africa/Maputo",
    flag: "MZ",
    cities: cityList.filter(city => city.country === "MZ" && city.tz === "Africa/Maputo")
  },
  {
    country: {
      de: "Namibia",
      en: "Namibia",
      fr: "Namibie"
    },
    zone: "Africa/Windhoek",
    flag: "NA",
    cities: cityList.filter(city => city.country === "NA" && city.tz === "Africa/Windhoek")
  },
  {
    country: {
      de: "Niger",
      en: "Niger",
      fr: "Niger"
    },
    zone: "Africa/Niamey",
    flag: "NE",
    cities: cityList.filter(city => city.country === "NE" && city.tz === "Africa/Niamey")
  },
  {
    country: {
      de: "Nigeria",
      en: "Nigeria",
      fr: "Nigeria"
    },
    zone: "Africa/Lagos",
    flag: "NG",
    cities: cityList.filter(city => city.country === "NG" && city.tz === "Africa/Lagos")
  },
  {
    country: {
      de: "Republik Kongo",
      en: "Republic of the Congo",
      fr: "République du Congo"
    },
    zone: "Africa/Brazzaville",
    flag: "CG",
    cities: cityList.filter(city => city.country === "CG" && city.tz === "Africa/Brazzaville")
  },
  {
    country: {
      de: "Ruanda",
      en: "Rwanda",
      fr: "Rwanda"
    },
    zone: "Africa/Kigali",
    flag: "RW",
    cities: cityList.filter(city => city.country === "RW" && city.tz === "Africa/Kigali")
  },
  {
    country: {
      de: "São Tomé und Príncipe",
      en: "São Tomé and Príncipe",
      fr: "Sao Tomé-et-Principe"
    },
    zone: "Africa/Sao_Tome",
    flag: "ST",
    cities: cityList.filter(city => city.country === "ST" && city.tz === "Africa/Sao_Tome")
  },
  {
    country: {
      de: "Demokratische Arabische Republik Sahara",
      en: "Sahrawi Arab Democratic Republic",
      fr: "République arabe sahraouie démocratique"
    },
    zone: "Africa/El_Aaiun",
    flag: "EH",
    cities: cityList.filter(city => city.country === "EH" && city.tz === "Africa/El_Aaiun")
  },
  {
    country: {
      de: "Senegal",
      en: "Senegal",
      fr: "Sénégal"
    },
    zone: "Africa/Dakar",
    flag: "SN",
    cities: cityList.filter(city => city.country === "SN" && city.tz === "Africa/Dakar")
  },
  {
    country: {
      de: "Seychellen",
      en: "Seychelles",
      fr: "Seychelles"
    },
    zone: "Indian/Mahe",
    flag: "SC",
    cities: cityList.filter(city => city.country === "SC" && city.tz === "Indian/Mahe")
  },
  {
    country: {
      de: "Sierra Leone",
      en: "Sierra Leone",
      fr: "Sierra Leone"
    },
    zone: "Africa/Freetown",
    flag: "SL",
    cities: cityList.filter(city => city.country === "SL" && city.tz === "Africa/Freetown")
  },
  {
    country: {
      de: "Somalia",
      en: "Somalia",
      fr: "Somalie"
    },
    zone: "Africa/Mogadishu",
    flag: "SO",
    cities: cityList.filter(city => city.country === "SO" && city.tz === "Africa/Mogadishu")
  },
  {
    country: {
      de: "Südafrika",
      en: "South Africa",
      fr: "Afrique du Sud"
    },
    zone: "Africa/Johannesburg",
    flag: "ZA",
    cities: cityList.filter(city => city.country === "ZA" && city.tz === "Africa/Johannesburg")
  },
  {
    country: {
      de: "Südsudan",
      en: "South Sudan",
      fr: "Soudan du Sud"
    },
    zone: "Africa/Juba",
    flag: "SS",
    cities: cityList.filter(city => city.country === "SS" && city.tz === "Africa/Juba")
  },
  {
    country: {
      de: "Spanien",
      en: "Spain",
      fr: "Espagne"
    },
    subdiv: [
      {
        title: {
          de: "Ceuta",
          en: "Ceuta",
          fr: "Ceuta"
        }
      }, 
      {
        title: {
          de: "Melilla",
          en: "Melilla",
          fr: "Melilla"
        }
      }
    ],
    zone: "Africa/Ceuta",
    flag: "ES",
    cities: cityList.filter(city => city.country === "ES" && city.tz === "Africa/Ceuta")
  },
  {
    country: {
      de: "Sudan",
      en: "Sudan",
      fr: "Soudan"
    },
    zone: "Africa/Khartoum",
    flag: "SD",
    cities: cityList.filter(city => city.country === "SD" && city.tz === "Africa/Khartoum")
  },
  {
    country: {
      de: "Tansania",
      en: "Tanzania",
      fr: "Tanzanie"
    },
    zone: "Africa/Dar_es_Salaam",
    flag: "TZ",
    cities: cityList.filter(city => city.country === "TZ" && city.tz === "Africa/Dar_es_Salaam")
  },
  {
    country: {
      de: "Togo",
      en: "Togo",
      fr: "Togo"
    },
    zone: "Africa/Lome",
    flag: "TG",
    cities: cityList.filter(city => city.country === "TG" && city.tz === "Africa/Lome")
  },
  {
    country: {
      de: "Tunesien",
      en: "Tunisia",
      fr: "Tunisie"
    },
    zone: "Africa/Tunis",
    flag: "TN",
    cities: cityList.filter(city => city.country === "TN" && city.tz === "Africa/Tunis")
  },
  {
    country: {
      de: "Uganda",
      en: "Uganda",
      fr: "Ouganda"
    },
    zone: "Africa/Kampala",
    flag: "UG",
    cities: cityList.filter(city => city.country === "UG" && city.tz === "Africa/Kampala")
  },
  {
    country: {
      de: "Ascension (Vereinigtes Königreich)",
      en: "Ascension (United Kingdom)",
      fr: "Île de l'Ascension (Royaume-Uni)"
    },
    zone: "Atlantic/St_Helena",
    flag: "AC",
    cities: cityList.filter(city => city.country === "AC" && city.tz === "Atlantic/St_Helena")
  },
  {
    country: {
      de: "St. Helena (Vereinigtes Königreich)",
      en: "St. Helena (United Kingdom)",
      fr: "Sainte-Hélène (Royaume-Uni)"
    },
    zone: "Atlantic/St_Helena",
    flag: "SH",
    cities: cityList.filter(city => city.country === "SH" && city.tz === "Atlantic/St_Helena")
  },
  {
    country: {
      de: "Tristan da Cunha (Vereinigtes Königreich)",
      en: "Tristan da Cunha (United Kingdom)",
      fr: "Île Tristan da Cunha (Royaume-Uni)"
    },
    zone: "Atlantic/St_Helena",
    flag: "TA",
    cities: cityList.filter(city => city.country === "TA" && city.tz === "Atlantic/St_Helena")
  },
  {
    country: {
      de: "Sambia",
      en: "Zambia",
      fr: "Zambie"
    },
    zone: "Africa/Lusaka",
    flag: "ZM",
    cities: cityList.filter(city => city.country === "ZM" && city.tz === "Africa/Lusaka")
  },
  {
    country: {
      de: "Simbabwe",
      en: "Zimbabwe",
      fr: "Zimbabwe"
    },
    zone: "Africa/Harare",
    flag: "ZW",
    cities: cityList.filter(city => city.country === "ZW" && city.tz === "Africa/Harare")
  }
]

export default countryList