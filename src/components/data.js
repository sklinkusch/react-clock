import Africa from "./timezones/Africa"
import Antarctica from "./timezones/Antarctica"
import Australia from "./timezones/Australia"
import Canada from "./timezones/Canada"
import Caribbean from "./timezones/Caribbean"
import CentralAmerica from "./timezones/CentralAmerica"
import CentralAsia from "./timezones/CentralAsia"
import EastAsia from "./timezones/EastAsia"
import Europe from "./timezones/Europe"
import Indonesia from "./timezones/Indonesia"
import MiddleEast from "./timezones/MiddleEast"
import Oceania from "./timezones/Oceania"
import Russia from "./timezones/Russia"
import SouthAmerica from "./timezones/SouthAmerica"
import SouthAsia from "./timezones/SouthAsia"
import SouthEastAsia from "./timezones/SouthEastAsia"
import UnitedStates from "./timezones/UnitedStates"

const countries = {
  AC: {
    de: "Ascension (Vereinigtes Königreich)",
    en: "Ascension (United Kingdom)"
  },
  AD: {
    de: "Andorra",
    en: "Andorra"
  },
  AE: {
    de: "Vereinigte Arabische Emirate",
    en: "United Arab Emirates"
  },
  AF: {
    de: "Afghanistan",
    en: "Afghanistan"
  },
  AG: {
    de: "Antigua und Barbuda",
    en: "Antigua and Barbuda"
  },
  AI: {
    de: "ANguilla (Vereinigtes Königreich)",
    en: "Anguilla (United Kingdom)"
  },
  AL: {
    de: "Albanien",
    en: "Albania"
  },
  AM: {
    de: "Armenien",
    en: "Armenia"
  },
  AO: {
    de: "Angola",
    en: "Angola"
  },
  AQ: {
    de: "Antarktis",
    en: "Antarctica"
  },
  AR: {
    de: "Argentinien",
    en: "Argentina"
  },
  AS: {
    de: "Amerikanisch-Samoa (USA)",
    en: "American Samoa (United States)"
  },
  AT: {
    de: "Österreich",
    en: "Austria"
  },
  AU: {
    de: "Australien",
    en: "Australia"
  },
  AW: {
    de: "Aruba (Niederlande)",
    en: "Aruba (Netherlands)"
  },
  AX: {
    de: "Åland (Finnland)",
    en: "Åland (Finland)"
  },
  AZ: {
    de: "Aserbaidschan",
    en: "Azerbaijan"
  },
  BA: {
    de: "Bosnien und Herzegowina",
    en: "Bosnia and Herzegovina"
  },
  BB: {
    de: "Barbados",
    en: "Barbados"
  },
  BD: {
    de: "Bangladesch",
    en: "Bangladesh"
  },
  BE: {
    de: "Belgien",
    en: "Belgium"
  },
  BF: {
    de: "Burkina Faso",
    en: "Burkina Faso"
  },
  BG: {
    de: "Bulgarien",
    en: "Bulgaria"
  },
  BH: {
    de: "Bahrain",
    en: "Bahrain"
  },
  BI: {
    de: "Burundi",
    en: "Burundi"
  },
  BJ: {
    de: "Benin",
    en: "Benin"
  },
  BL: {
    de: "Saint-Barthélemy (Frankreich)",
    en: "Saint-Barthélemy (France)"
  },
  BM: {
    de: "Bermuda (Vereinigtes Königreich)",
    en: "Bermuda (United Kingdom)"
  },
  BN: {
    de: "Brunei",
    en: "Brunei"
  },
  BO: {
    de: "Bolivien",
    en: "Bolivia"
  },
  BQ: {
    de: "Bonaire, Saba, Sint Eustatius (Niederlande)",
    en: "Bonaire, Saba, Sint Eustatius (Netherlands)"
  },
  BR: {
    de: "Brasilien",
    en: "Brazil"
  },
  BS: {
    de: "Bahamas",
    en: "Bahamas"
  },
  BT: {
    de: "Bhutan",
    en: "Bhutan"
  },
  BW: {
    de: "Botswana",
    en: "Botswana"
  },
  BY: {
    de: "Belarus",
    en: "Belarus"
  },
  BZ: {
    de: "Belize",
    en: "Belize"
  },
  CA: {
    de: "Kanada",
    en: "Canada"
  },
  CC: {
    de: "Kokosinseln (Australien)",
    en: "Cocos Islands (Australia)"
  },
  CD: {
    de: "Demokratische Republik Kongo",
    en: "Democratic Republic of the Congo"
  },
  CF: {
    de: "Zentralafrikanische Republik",
    en: "Central African Republic"
  },
  CG: {
    de: "Republik Kongo",
    en: "Republic of the Congo"
  },
  CH: {
    de: "Schweiz",
    en: "Switzerland"
  },
  CI: {
    de: "Elfenbeinküste",
    en: "Côte d'Ivoire"
  },
  CK: {
    de: "Cookinseln (Neuseeland)",
    en: "Cook Islands (New Zealand)"
  },
  CL: {
    de: "Chile",
    en: "Chile"
  },
  CM: {
    de: "Kamerun",
    en: "Cameroon"
  },
  CN: {
    de: "Volksrepublik China",
    en: "People's Republic of China"
  },
  CO: {
    de: "Kolumbien",
    en: "Colombia"
  },
  CR: {
    de: "Costa Rica",
    en: "Costa Rica"
  },
  CU: {
    de: "Kuba",
    en: "Cuba"
  },
  CV: {
    de: "Kap Verde",
    en: "Cabo Verde"
  },
  CW: {
    de: "Curaçao (Niederlande)",
    en: "Curaçao (Netherlands)"
  },
  CX: {
    de: "Weihnachtsinsel (Australien)",
    en: "Christmas Island (Australia)"
  },
  CY: {
    de: "Zypern",
    en: "Cyprus"
  },
  CZ: {
    de: "Tschechien",
    en: "Czechia"
  },
  DE: {
    de: "Deutschland",
    en: "Germany"
  },
  DJ: {
    de: "Dschibuti",
    en: "Djibouti"
  },
  DK: {
    de: "Dänemark",
    en: "Denmark"
  },
  DM: {
    de: "Dominica",
    en: "Dominica"
  },
  DO: {
    de: "Dominikanische Republik",
    en: "Dominican Republic"
  },
  DZ: {
    de: "Algerien",
    en: "Algeria"
  },
  EC: {
    de: "Ecuador",
    en: "Ecuador"
  },
  EE: {
    de: "Estland",
    en: "Estonia"
  },
  EG: {
    de: "Ägypten",
    en: "Egypt"
  },
  EH: {
    de: "Demokratische Arabische Republik Sahara",
    en: "Sahrawi Arab Democratic Republic"
  },
  ER: {
    de: "Eritrea",
    en: "Eritrea"
  },
  ES: {
    de: "Spanien",
    en: "Spain"
  },
  ET: {
    de: "Äthiopien",
    en: "Ethiopia"
  },
  FI: {
    de: "Finnland",
    en: "Finland"
  },
  FJ: {
    de: "Fidschi",
    en: "Fiji"
  },
  FK: {
    de: "Falklandinseln (Vereinigtes Königreich)",
    en: "Falkland Islands (United Kingdom)"
  },
  FM: {
    de: "Mikronesien",
    en: "Micronesia"
  },
  FO: {
    de: "Färöer (Dänemark)",
    en: "Faroe Islands (Denmark)"
  },
  FR: {
    de: "Frankreich",
    en: "France"
  },
  GA: {
    de: "Gabun",
    en: "Gabon"
  },
  GB: {
    de: "Vereinigtes Königreich",
    en: "United Kingdom"
  },
  GD: {
    de: "Grenada",
    en: "Grenada"
  },
  GE: {
    de: "Georgien",
    en: "Georgia"
  },
  GF: {
    de: "Französisch-Guayana (Frankreich)",
    en: "French Guiana (France)"
  },
  GG: {
    de: "Guernsey (Vereinigtes Königreich)",
    en: "Guernsey (United Kingdom)"
  },
  GH: {
    de: "Ghana",
    en: "Ghana"
  },
  GI: {
    de: "Gibraltar (Vereinigtes Königreich)",
    en: "Gibraltar (United Kingdom)"
  },
  GL: {
    de: "Grönland (Dänemark)",
    en: "Greenland (Denmark)"
  },
  GM: {
    de: "Gambia",
    en: "Gambia"
  },
  GN: {
    de: "Guinea",
    en: "Guinea"
  },
  GP: {
    de: "Guadeloupe (Frankreich)",
    en: "Guadeloupe (France)"
  },
  GQ: {
    de: "Äquatorialguinea",
    en: "Equatorial Guinea"
  },
  GR: {
    de: "Griechenland",
    en: "Greece"
  },
  GS: {
    de: "Südgeorgien und die südlichen Sandwichinseln (Vereinigtes Königreich)",
    en: "South Georgia and the South Sandwich Islands (United Kingdom)"
  },
  GT: {
    de: "Guatemala",
    en: "Guatemala"
  },
  GU: {
    de: "Guam (USA)",
    en: "Guam (United States)"
  },
  GW: {
    de: "Guinea-Bissau",
    en: "Guinea-Bissau"
  },
  GY: {
    de: "Guyana",
    en: "Guyana"
  },
  HK: {
    de: "Hongkong (VR China",
    en: "Hong Kong (PR of China)"
  },
  HN: {
    de: "Honduras",
    en: "Honduras"
  },
  HR: {
    de: "Kroatien",
    en: "Croatia"
  },
  HT: {
    de: "Haiti",
    en: "Haiti"
  },
  HU: {
    de: "Ungarn",
    en: "Hungary"
  },
  IC: {
    de: "Kanarische Inseln (Spanien)",
    en: "Canary Islands (Spain)"
  },
  ID: {
    de: "Indonesien",
    en: "Indonesia"
  },
  IE: {
    de: "Irland",
    en: "Ireland"
  },
  IL: {
    de: "Israel",
    en: "Israel"
  },
  IM: {
    de: "Isle of Man (Vereinigtes Königreich)",
    en: "Isle of Man (United Kingdom)"
  },
  IN: {
    de: "Indien",
    en: "India"
  },
  IO: {
    de: "Britisches Territorium im Indischen Ozean (Vereinigtes Königreich)",
    en: "British Indian Ocean Territory (United Kingdom)"
  },
  IQ: {
    de: "Irak",
    en: "Iraq"
  },
  IR: {
    de: "Iran",
    en: "Iran"
  },
  IS: {
    de: "Island",
    en: "Iceland"
  },
  IT: {
    de: "Italien",
    en: "Italy"
  },
  JE: {
    de: "Jersey (Vereinigtes Königreich)",
    en: "Jersey (United Kingdom)"
  },
  JM: {
    de: "Jamaika",
    en: "Jamaica"
  },
  JO: {
    de: "Jordanien",
    en: "Jordan"
  },
  JP: {
    de: "Japan",
    en: "Japan"
  },
  KE: {
    de: "Kenia",
    en: "Kenya"
  },
  KG: {
    de: "Kirgisistan",
    en: "Kyrgyzstan"
  },
  KH: {
    de: "Kambodscha",
    en: "Cambodia"
  },
  KI: {
    de: "Kiribati",
    en: "Kiribati"
  },
  KM: {
    de: "Komoren",
    en: "Comoros"
  },
  KN: {
    de: "St. Kitts und Nevis",
    en: "St. Kitts and Nevis"
  },
  KP: {
    de: "Nordkorea",
    en: "North Korea"
  },
  KR: {
    de: "Südkorea",
    en: "South Korea"
  },
  KW: {
    de: "Kuwait",
    en: "Kuwait"
  },
  KY: {
    de: "Cayman Islands (Vereinigtes Königreich)",
    en: "Cayman Islands (United Kingdom)"
  },
  KZ: {
    de: "Kasachstan",
    en: "Kazakhstan"
  },
  LA: {
    de: "Laos",
    en: "Laos"
  },
  LB: {
    de: "Libanon",
    en: "Lebanon"
  },
  LC: {
    de: "St. Lucia",
    en: "St. Lucia"
  },
  LI: {
    de: "Liechtenstein",
    en: "Liechtenstein"
  },
  LK: {
    de: "Sri Lanka",
    en: "Sri Lanka"
  },
  LR: {
    de: "Liberia",
    en: "Liberia"
  },
  LS: {
    de: "Lesotho",
    en: "Lesotho"
  },
  LT: {
    de: "Litauen",
    en: "Lithuania"
  },
  LU: {
    de: "Luxemburg",
    en: "Luxembourg"
  },
  LV: {
    de: "Lettland",
    en: "Latvia"
  },
  LY: {
    de: "Libyen",
    en: "Libya"
  },
  MA: {
    de: "Marokko",
    en: "Morocco"
  },
  MC: {
    de: "Monaco",
    en: "Monaco"
  },
  MD: {
    de: "Moldau",
    en: "Moldova"
  },
  ME: {
    de: "Montenegro",
    en: "Montenegro"
  },
  MF: {
    de: "Saint-Martin (Frankreich)",
    en: "Saint-Martin (France)"
  },
  MG: {
    de: "Madagaskar",
    en: "Madagascar"
  },
  MH: {
    de: "Marshallinseln",
    en: "Marshall Islands"
  },
  MK: {
    de: "Nordmazedonien",
    en: "North Macedonia"
  },
  ML: {
    de: "Mali",
    en: "Mali"
  },
  MM: {
    de: "Myanmar",
    en: "Myanmar"
  },
  MN: {
    de: "Mongolei",
    en: "Mongolia"
  },
  MO: {
    de: "Macau (VR China)",
    en: "Macao (China)"
  },
  MP: {
    de: "Nördliche Marianen (USA)",
    en: "Northern Mariana Islands (United States)"
  },
  MQ: {
    de: "Martinique (Frankreich)",
    en: "Martinique (France)"
  },
  MR: {
    de: "Mauretanien",
    en: "Mauritania"
  },
  MS: {
    de: "Montserrat (Vereinigtes Königreich)",
    en: "Montserrat (United Kingdom)"
  },
  MT: {
    de: "Malta",
    en: "Malta"
  },
  MU: {
    de: "Mauritius",
    en: "Mauritius"
  },
  MV: {
    de: "Malediven",
    en: "Maldives"
  },
  MW: {
    de: "Malawi",
    en: "Malawi"
  },
  MX: {
    de: "Mexiko",
    en: "Mexico"
  },
  MY: {
    de: "Malaysia",
    en: "Malaysia"
  },
  MZ: {
    de: "Mosambik",
    en: "Mozambique"
  },
  NA: {
    de: "Namibia",
    en: "Namibia"
  },
  NC: {
    de: "Neukaledonien (Frankreich)",
    en: "New Caledonia (France)"
  },
  NE: {
    de: "Niger",
    en: "Niger"
  },
  NF: {
    de: "Norfolkinsel (Australien)",
    en: "Norfolk Island (Australia)"
  },
  NG: {
    de: "Nigeria",
    en: "Nigeria"
  },
  NI: {
    de: "Nicaragua",
    en: "Nicaragua"
  },
  NL: {
    de: "Niederlande",
    en: "Netherlands"
  },
  NO: {
    de: "Norwegen",
    en: "Norway"
  },
  NP: {
    de: "Nepal",
    en: "Nepal"
  },
  NR: {
    de: "Nauru",
    en: "Nauru"
  },
  NU: {
    de: "Niue (Neuseeland)",
    en: "Niue (New Zealand)"
  },
  NZ: {
    de: "Neuseeland",
    en: "New Zealand"
  },
  OM: {
    de: "Oman",
    en: "Oman"
  },
  PA: {
    de: "Panama",
    en: "Panama"
  },
  PE: {
    de: "Peru",
    en: "Peru"
  },
  PF: {
    de: "Französisch-Polynesien (Frankreich)",
    en: "French Polynesia (France)"
  },
  PG: {
    de: "Papua-Neuguinea",
    en: "Papua New Guinea"
  },
  PH: {
    de: "Philippinen",
    en: "Philippines"
  },
  PK: {
    de: "Pakistan",
    en: "Pakistan"
  },
  PL: {
    de: "Polen",
    en: "Poland"
  },
  PM: {
    de: "Saint-Pierre und Miquelon (Frankreich)",
    en: "Saint-Pierre et Miquelon (France)"
  },
  PN: {
    de: "Pitcairninseln (Vereinigtes Königreich)",
    en: "Pitcairn Islands (United Kingdom)"
  },
  PR: {
    de: "Puerto Rico (USA)",
    en: "Puerto Rico (United States)"
  },
  PS: {
    de: "Palästina",
    en: "Palestine"
  },
  PT: {
    de: "Portugal",
    en: "Portugal"
  },
  PW: {
    de: "Palau",
    en: "Palau"
  },
  PY: {
    de: "Paraguay",
    en: "Paraguay"
  },
  QA: {
    de: "Katar",
    en: "Qatar"
  },
  RE: {
    de: "La Réunion (Frankreich)",
    en: "La Réunion (France)"
  },
  RO: {
    de: "Rumänien",
    en: "Romania"
  },
  RS: {
    de: "Serbien",
    en: "Serbia"
  },
  RU: {
    de: "Russland",
    en: "Russia"
  },
  RW: {
    de: "Ruanda",
    en: "Rwanda"
  },
  SA: {
    de: "Saudi-Arabien",
    en: "Saudi Arabia"
  },
  SB: {
    de: "Salomonen",
    en: "Solomon Islands"
  },
  SC: {
    de: "Seychellen",
    en: "Seychelles"
  },
  SD: {
    de: "Sudan",
    en: "Sudan"
  },
  SE: {
    de: "Schweden",
    en: "Sweden"
  },
  SG: {
    de: "Singapur",
    en: "Singapore"
  },
  SH: {
    de: "St. Helena (Vereinigtes Königreich)",
    en: "St. Helena (United Kingdom)"
  },
  SI: {
    de: "Slowenien",
    en: "Slovenia"
  },
  SJ: {
    de: "Svalbard und Jan Mayen (Norwegen)",
    en: "Svalbard and Jan Mayen (Norway)"
  },
  SK: {
    de: "Slowakei",
    en: "Slovakia"
  },
  SL: {
    de: "Sierra Leone",
    en: "Sierra Leone"
  },
  SM: {
    de: "San Marino",
    en: "San Marino"
  },
  SN: {
    de: "Senegal",
    en: "Senegal"
  },
  SO: {
    de: "Somalia",
    en: "Somalia"
  },
  SR: {
    de: "Suriname",
    en: "Suriname"
  }, 
  SS: {
    de: "Südsudan",
    en: "South Sudan"
  },
  ST: {
    de: "São Tomé und Príncipe",
    en: "São Tomé and Príncipe"
  },
  SV: {
    de: "El Salvador",
    en: "El Salvador"
  },
  SX: {
    de: "Sint Maarten (Niederlande)",
    en: "Sint Maarten (Netherlands)"
  },
  SY: {
    de: "Syrien",
    en: "Syria"
  },
  SZ: {
    de: "eSwatini",
    en: "eSwatini"
  },
  TC: {
    de: "Turks- und Caicosinseln (Vereinigtes Königreich)",
    en: "Turks and Caicos Islands (United Kingdom)"
  },
  TD: {
    de: "Tschad",
    en: "Chad"
  },
  TF: {
    de: "Französische Süd- und Antarktisgebiete (Frankreich)",
    en: "French Southern and Antarctic Lands (France)"
  },
  TG: {
    de: "Togo",
    en: "Togo"
  },
  TH: {
    de: "Thailand",
    en: "Thailand"
  },
  TJ: {
    de: "Tadschikistan",
    en: "Tajikistan"
  },
  TK: {
    de: "Tokelau (Neuseeland)",
    en: "Tokelau (New Zealand)"
  },
  TL: {
    de: "Osttimor",
    en: "Timor-Leste"
  },
  TM: {
    de: "Turkmenistan",
    en: "Turkmenistan"
  },
  TN: {
    de: "Tunesien",
    en: "Tunisia"
  },
  TO: {
    de: "Tonga",
    en: "Tonga"
  },
  TR: {
    de: "Türkei",
    en: "Turkey"
  },
  TT: {
    de: "Trinidad und Tobago",
    en: "Trinidad and Tobago"
  },
  TV: {
    de: "Tuvalu",
    en: "Tuvalu"
  },
  TW: {
    de: "Taiwan",
    en: "Taiwan"
  },
  TZ: {
    de: "Tansania",
    en: "Tanzania"
  },
  UA: {
    de: "Ukraine",
    en: "Ukraine"
  },
  UG: {
    de: "Uganda",
    en: "Uganda"
  },
  UM: {
    de: "Kleinere abgelegene Inseln der Vereinigten Staaten (USA)",
    en: "United States Minor Outlying Islands (United States)"
  },
  US: {
    de: "Vereinigte Staaten",
    en: "United States"
  },
  UY: {
    de: "Uruguay",
    en: "Uruguay"
  },
  UZ: {
    de: "Usbekistan",
    en: "Uzbekistan"
  },
  VA: {
    de: "Vatikanstadt",
    en: "Vatican City"
  },
  VC: {
    de: "St. Vincent und die Grenadinen",
    en: "St. Vincent and the Grenadines"
  },
  VE: {
    de: "Venezuela",
    en: "Venezuela"
  },
  VG: {
    de: "Britische Jungferninseln (Vereinigtes Königreich)",
    en: "British Virgin Islands (United Kingdom)"
  },
  VI: {
    de: "Amerikanische Jungferninseln (USA)",
    en: "United States Virgin Islands (United States)"
  },
  VN: {
    de: "Vietnam",
    en: "Vietnam"
  },
  VU: {
    de: "Vanuatu",
    en: "Vanuatu"
  },
  WF: {
    de: "Wallis und Futuna (Frankreich)",
    en: "Wallis and Futuna (France)"
  },
  WS: {
    de: "Samoa",
    en: "Samoa"
  },
  XK: {
    de: "Kosovo",
    en: "Kosovo"
  },
  YE: {
    de: "Jemen",
    en: "Yemen"
  },
  YT: {
    de: "Mayotte (Frankreich)",
    en: "Mayotte (France)"
  },
  ZA: {
    de: "Südafrika",
    en: "South Africa"
  },
  ZM: {
    de: "Sambia",
    en: "Zambia"
  },
  ZW: {
    de: "Simbabwe",
    en: "Zimbabwe"
  }
}

export { countries }
const tzlist = [
  ...Africa, 
  ...Antarctica,
  ...Australia,
  ...Canada,
  ...Caribbean,
  ...CentralAmerica,
  ...CentralAsia, 
  ...EastAsia, 
  ...Europe, 
  ...Indonesia,
  ...MiddleEast,
  ...Oceania, 
  ...Russia, 
  ...SouthAmerica,
  ...SouthAsia,
  ...SouthEastAsia,
  ...UnitedStates
]

export default tzlist