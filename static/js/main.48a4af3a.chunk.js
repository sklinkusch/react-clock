(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),o=t.n(i),n=t(4),l=t.n(n),c=(t(15),t(1)),r=t(5),s=t(6),d=t(9),u=t(8),g=t(2),m=t(7),A=t.n(m);t(16);function h(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,i=Object(g.a)(e);if(a){var o=Object(g.a)(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return Object(u.a)(this,t)}}var y=function(e){var a=e.city;return o.a.createElement("h2",null,o.a.createElement("span",null,a))},f=function(e){var a=e.flags;return o.a.createElement("div",null,a&&Array.isArray(a)&&a.length>0&&a.map(function(e,a){return o.a.createElement(A.a,{key:a,code:e.code,title:e.title,height:"20"})}))},S=function(e){var a=e.date,t=e.zone;return o.a.createElement("p",null,a.toLocaleDateString("en-GB",{timeZone:t}))},b=function(e){var a=e.date,t=e.zone;return o.a.createElement("p",null,a.toLocaleTimeString("en-GB",{timeZone:t}))},C=function(e){Object(d.a)(t,e);var a=h(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).state={date:new Date},i}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(e){var a=this.props,t=a.city,i=a.flags,n=a.zone,l=this.state.date;return o.a.createElement("div",null,o.a.createElement("div",{className:"album-item"},o.a.createElement(y,{city:t}),o.a.createElement(f,{flags:i}),o.a.createElement(S,{date:l,zone:n}),o.a.createElement(b,{date:l,zone:n})))}},{key:"tick",value:function(){this.setState({date:new Date})}}]),t}(o.a.Component),k=[{city:"Afghanistan",zone:"Asia/Kabul",flags:[{title:"Afghanistan",code:"AF"}]},{city:"Alaska",zone:"America/Anchorage",flags:[{title:"United States: Alaska (east of 169\xb030' W)",code:"US"}]},{city:"Aleutian Islands",zone:"America/Atka",flags:[{title:"United States: Alaska (west of 169\xb030' W)",code:"US"}]},{city:"American Samoa",zone:"Pacific/Pago_Pago",flags:[{title:"American Samoa (United States)",code:"AS"},{title:"United States Minor Outlying Islands: Midway Islands, Palmyra Atoll",code:"UM"},{title:"Niue (New Zealand)",code:"NU"}]},{city:"Antilles",zone:"America/Barbados",flags:[{title:"American Virgin Islands (United States)",code:"VI"},{title:"Anguilla (United Kingdom)",code:"AI"},{title:"Antigua and Barbuda",code:"AG"},{title:"Aruba (Netherlands)",code:"AW"},{title:"Barbados",code:"BB"},{title:"British Virgin Islands (United Kingdom)",code:"VG"},{title:"Cura\xe7ao (Netherlands)",code:"CW"},{title:"Dominica",code:"DM"},{title:"Dominican Republic",code:"DO"},{title:"France: Guadeloupe, Saint Martin, Saint Barth\xe9lemy",code:"GP"},{title:"Grenada",code:"GD"},{title:"Martinique (France)",code:"MQ"},{title:"Montserrat (United Kingdom)",code:"MS"},{title:"Netherlands: Bonaire, Saba, Sint Eustatius",code:"BQ"},{title:"Puerto Rico (United States)",code:"PR"},{title:"Saint Kitts and Nevis",code:"KN"},{title:"Saint Lucia",code:"LC"},{title:"Saint Vincent and the Grenadines",code:"VC"},{title:"Sint Maarten (Netherlands)",code:"SX"},{title:"Trinidad and Tobago",code:"TT"}]},{city:"Arabia",zone:"Asia/Riyadh",flags:[{title:"Bahrain",code:"BH"},{title:"Iraq",code:"IQ"},{title:"Kuwait",code:"KW"},{title:"Qatar",code:"QA"},{title:"Saudi Arabia",code:"SA"},{title:"Yemen",code:"YE"}]},{city:"Arizona",zone:"America/Phoenix",flags:[{title:"Canada: Yukon",code:"CA"},{title:"Mexico: Sonora, Revillagigedo Islands",code:"MX"},{title:"United States: Arizona (excluding Navajo Nation Reservation)",code:"US"}]},{city:"Atlantic Ocean",zone:"Atlantic/Azores",flags:[{title:"Greenland (Denmark): Ittoqqortoormit",code:"GL"},{title:"Portugal: Azores",code:"PT"}]},{city:"Bangladesh",zone:"Asia/Dhaka",flags:[{title:"Bangladesh",code:"BD"},{title:"Bhutan",code:"BT"},{title:"British Indian Ocean Territory (United Kingdom)",code:"IO"}]},{city:"Brazilian Islands",zone:"America/Noronha",flags:[{title:"Brazil: Atol das Rocas, Fernando de Noronha, Martim Vaz, Trinidade, Saint Peter and Saint Paul Archipelago",code:"BR"},{title:"South Georgia and the South Sandwich Islands (United Kingdom)",code:"GS"}]},{city:"Cabo Verde",zone:"Atlantic/Cape_Verde",flags:[{title:"Cabo Verde",code:"CV"}]},{city:"Central",zone:"America/Chicago",flags:[{title:"Canada: Manitoba, Nunavut, Ontario",code:"CA"},{title:"Mexico: Aguascalientes, Campeche, Chiapas, Coahuila, Colima, Distrito Federal, Durango, Guanajuato, Guerrero, Hidalgo, Jalisco, M\xe9xico, Michoac\xe1n, Morelos, Nuevo Le\xf3n, Oaxaca, Puebla, Quer\xe9taro, San Luis Potos\xed, Tabasco, Tamaulipas, Tlaxcala, Veracruz, Yucat\xe1n, Zacatecas",code:"MX"},{title:"United States: Alabama, Arkansas, Florida (west of Appalachicola River), Illinois, Indiana (northwest and southwest), Iowa, Kansas (most of state), Kentucky (western 40%), Louisiana, Michigan (upper peninsula bordering Wisconsin), Minnesota, Mississippi, Missouri, Nebraska (most of state), North Dakota (east of Missouri River), Oklahoma, South Dakota (eastern half), Tennessee (most of state), Texas (most of state), Wisconsin",code:"US"}]},{city:"Eastern Central Africa",zone:"Africa/Cairo",flags:[{title:"Botswana",code:"BW"},{title:"Burundi",code:"BI"},{title:"Democratic Republic of the Congo: Bas-Uele, Haut-Katanga, Haut-Lomami, Haut-Uele, Ituri, Kasa\xef, Kasa\xef-Central, Kasa\xef-Oriental, Lomami, Lualaba, Maniema, Nord-Kivu, Sankuru, Sud-Kivu, Tanganjika, Tshopo",code:"CD"},{title:"Egypt",code:"EG"},{title:"eSwatini",code:"SZ"},{title:"Lesotho",code:"LS"},{title:"Libya",code:"LY"},{title:"Malawi",code:"MW"},{title:"Mozambique",code:"MZ"},{title:"Namibia",code:"NA"},{title:"Rwanda",code:"RW"},{title:"South Africa",code:"ZA"},{title:"South Sudan",code:"SS"},{title:"Sudan",code:"SD"},{title:"Zambia",code:"ZM"},{title:"Zimbabwe",code:"ZW"}]},{city:"Central America",zone:"America/El_Salvador",flags:[{title:"Belize",code:"BZ"},{title:"Canada: Saskatchewan",code:"CA"},{title:"Chile: Easter Island",code:"CL"},{title:"Costa Rica",code:"CR"},{title:"Ecuador: Gal\xe1pagos",code:"EC"},{title:"El Salvador",code:"SV"},{title:"Guatemala",code:"GT"},{title:"Honduras",code:"HN"},{title:"Nicaragua",code:"NI"}]},{city:"Central Europe",zone:"Europe/Berlin",flags:[{title:"Albania",code:"AL"},{title:"Andorra",code:"AD"},{title:"Austria",code:"AT"},{title:"Belgium",code:"BE"},{title:"Bosnia and Herzegovina",code:"BA"},{title:"Croatia",code:"HR"},{title:"Czechia",code:"CZ"},{title:"Denmark: mainland",code:"DK"},{title:"France",code:"FR"},{title:"Germany",code:"DE"},{title:"Gibraltar (United Kingdom)",code:"GI"},{title:"Hungary",code:"HU"},{title:"Italy",code:"IT"},{title:"Kosovo",code:"XK"},{title:"Liechtenstein",code:"LI"},{title:"Luxembourg",code:"LU"},{title:"Malta",code:"MT"},{title:"Monaco",code:"MC"},{title:"Montenegro",code:"ME"},{title:"Netherlands",code:"NL"},{title:"North Macedonia",code:"MK"},{title:"Norway",code:"NO"},{title:"Poland",code:"PL"},{title:"San Marino",code:"SM"},{title:"Serbia",code:"RS"},{title:"Slovakia",code:"SK"},{title:"Slovenia",code:"SI"},{title:"Spain: mainland",code:"ES"},{title:"Sweden",code:"SE"},{title:"Switzerland",code:"CH"},{title:"Vatican City",code:"VA"}]},{city:"Central Indonesia",zone:"Asia/Makassar",flags:[{title:"Australia: Western Australia",code:"AU"},{title:"Brunei",code:"BN"},{title:"Indonesia: Bali, East Kalimantan, East Nusa Tenggara, North Kalimantan, South Kalimantan, Sulawesi, West Nusa Tenggara",code:"ID"},{title:"Malaysia",code:"MY"},{title:"Philippines",code:"PH"},{title:"Singapore",code:"SG"}]},{city:"Central South America",zone:"America/Caracas",flags:[{title:"Bolivia",code:"BO"},{title:"Brazil: Amazonas (eastern part), Mato Grosso, Mato Grosso do Sul, Rond\xf4nia, Roraima",code:"BR"},{title:"Guyana",code:"GY"},{title:"Venezuela",code:"VE"}]},{city:"Chatham",zone:"Pacific/Chatham",flags:[{title:"New Zealand: Chatham Islands",code:"NZ"}]},{city:"Chile",zone:"America/Santiago",flags:[{title:"Chile: mainland",code:"CL"}]},{city:"China",zone:"Asia/Shanghai",flags:[{title:"China",code:"CN"},{title:"Hong Kong (China)",code:"HK"},{title:"Macau (China)",code:"MO"},{title:"Mongolia: main part",code:"MN"},{title:"Russia: Buryatia, Irkutsk Oblast",code:"RU"},{title:"Taiwan",code:"TW"}]},{city:"Colombia",zone:"America/Bogota",flags:[{title:"Brazil: Acre, Amazonas (western part)",code:"BR"},{title:"Cayman Islands",code:"KY"},{title:"Colombia",code:"CO"},{title:"Ecuador",code:"EC"},{title:"Jamaica",code:"JM"},{title:"Mexico: Quintana Roo",code:"MX"},{title:"Panama",code:"PA"},{title:"Peru",code:"PE"}]},{city:"C\xf4te-Nord",zone:"America/Blanc-Sablon",flags:[{title:"Canada: Qu\xe9bec (east of 63\xb0 W)",code:"CA"}]},{city:"Cuba",zone:"America/Havana",flags:[{title:"Cuba",code:"CU"}]},{city:"Eastern",zone:"America/New_York",flags:[{title:"Bahamas",code:"BS"},{title:"Canada: Nunavut, Ontario, Qu\xe9bec (west of 63\xb0 W)",code:"CA"},{title:"Haiti",code:"HT"},{title:"Turks and Caicos Islands (United Kingdom)",code:"TC"},{title:"United States: Connecticut, Delaware, District of Columbia, Florida (east of Appalachicola River), Georgia, Indiana (most of state), Kentucky (eastern 60%), Maine, Maryland, Massachusetts, Michigan (most of state), New Hampshire, New Jersey, New York, North Carolina, Ohio, Pennsylvania, Rhode Island, South Carolina, Tennessee (east of state), Vermont, Virginia, West Virginia",code:"US"}]},{city:"East Africa",zone:"Africa/Addis_Ababa",flags:[{title:"Comoros",code:"KM"},{title:"Djibouti",code:"DJ"},{title:"Eritrea",code:"ER"},{title:"Ethiopia",code:"ET"},{title:"France: Mayotte",code:"YT"},{title:"Kenya",code:"KE"},{title:"Madagascar",code:"MG"},{title:"Somalia",code:"SO"},{title:"Tanzania",code:"TZ"},{title:"Uganda",code:"UG"}]},{city:"Eastern Australia",zone:"Australia/Sydney",flags:[{title:"Australia: Australian Capital Territory, New South Wales, Tasmania, Victoria",code:"AU"}]},{city:"Eastern Europe",zone:"Europe/Bucharest",flags:[{title:"Bulgaria",code:"BG"},{title:"Cyprus",code:"CY"},{title:"Estonia",code:"EE"},{title:"Finland",code:"FI"},{title:"Greece",code:"GR"},{title:"Latvia",code:"LV"},{title:"Lithuania",code:"LT"},{title:"Moldova",code:"MD"},{title:"Romania",code:"RO"},{title:"Ukraine",code:"UA"}]},{city:"Eastern Indonesia",zone:"Asia/Jayapura",flags:[{title:"Indonesia: Maluku, North Maluku, Papua, West Papua",code:"ID"},{title:"Palau",code:"PW"},{title:"Timor-Leste",code:"TL"}]},{city:"Eastern Kiribati",zone:"Pacific/Kiritimati",flags:[{title:"Kiribati: Kiritimati, Line Islands",code:"KI"}]},{city:"Eastern South America",zone:"America/Buenos_Aires",flags:[{title:"Argentina",code:"AR"},{title:"Brazil: Alagoas, Amap\xe1, Bahia, Cear\xe1, Distrito Federal, Esp\xedrito Santo, Goi\xe1s, Maranh\xe3o, Minas Gerais, Par\xe1, Para\xedba, Paran\xe1, Pernambuco, Piau\xed, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Santa Catarina, S\xe3o Paulo, Sergipe, Tocantins",code:"BR"},{title:"Chile: Magellan and Antarctic region",code:"CL"},{title:"Falkland Islands",code:"FK"},{title:"French Guiana",code:"GF"},{title:"Suriname",code:"SR"},{title:"Uruguay",code:"UY"}]},{city:"Fiji",zone:"Pacific/Fiji",flags:[{title:"Fiji",code:"FJ"}]},{city:"Gambier Islands",zone:"Pacific/Gambier",flags:[{title:"French Polynesia (France): Gambier Islands",code:"PF"}]},{city:"Hawaii",zone:"Pacific/Honolulu",flags:[{title:"Cook Islands (New Zealand)",code:"CK"},{title:"French Polynesia (France): Austral Islands, Society Islands, Tuamotus",code:"PF"},{title:"United States: Hawaii",code:"US"},{title:"United States Minor Outlying Islands: Johnston Atoll",code:"UM"}]},{city:"India",zone:"Asia/Kolkata",flags:[{title:"India",code:"IN"},{title:"Sri Lanka",code:"LK"}]},{city:"Indian Ocean",zone:"Indian/Reunion",flags:[{title:"France: R\xe9union",code:"RE"},{title:"Mauritius",code:"MU"},{title:"Oman",code:"OM"},{title:"Seychelles",code:"SC"},{title:"United Arab Emirates",code:"AE"}]},{city:"Iran",zone:"Asia/Tehran",flags:[{title:"Iran",code:"IR"}]},{city:"Israel",zone:"Asia/Jerusalem",flags:[{title:"Israel",code:"IL"}]},{city:"Japan/Korea",zone:"Asia/Tokyo",flags:[{title:"Japan",code:"JP"},{title:"North Korea",code:"KP"},{title:"Russia: Sakha (western part), Zabaykalsky Krai, Amur Oblast",code:"RU"},{title:"South Korea",code:"KR"}]},{city:"Jordan/Syria",zone:"Asia/Amman",flags:[{title:"Jordan",code:"JO"},{title:"Syria",code:"SY"}]},{city:"Kaliningrad",zone:"Europe/Kaliningrad",flags:[{title:"Russia: Oblast Kaliningrad",code:"RU"}]},{city:"Kamchatka",zone:"Asia/Kamchatka",flags:[{title:"Russia: Kamchatka, Chukotka Autonomous Okrug",code:"RU"}]},{city:"Krasnoyarsk",zone:"Asia/Krasnoyarsk",flags:[{title:"Mongolia: Bayan-\xd6lgii, Govi-Altai, Khovd, Uvs, Zavkhan",code:"MN"},{title:"Russia: Altai Republic, Khakassia, Tuva Republic, Altai Region, Krasnoyarsk Region, Kemerovo Oblast, Novosibirsk Oblast, Tomsk Oblast",code:"RU"}]},{city:"Lebanon",zone:"Asia/Beirut",flags:[{title:"Lebanon",code:"LB"}]},{city:"Lord Howe Island",zone:"Australia/Lord_Howe",flags:[{title:"Australia: Lord Howe Island",code:"AU"}]},{city:"Marquesas Islands",zone:"Pacific/Marquesas",flags:[{title:"French Polynesia (France): Marquesas Islands",code:"PF"}]},{city:"Western Central Africa",zone:"Africa/Luanda",flags:[{title:"Algeria",code:"DZ"},{title:"Angola",code:"AO"},{title:"Benin",code:"BJ"},{title:"Cameroon",code:"CM"},{title:"Central African Republic",code:"CF"},{title:"Chad",code:"TD"},{title:"Democratic Republic of the Congo: \xc9quateur, Kinshasa, Kongo Central, Kwango, Kwilu, Mai-Ndombe, Mongala, Nord-Ubangi, Sud-Ubangi, Tshuapa",code:"CD"},{title:"Equatorial Guinea",code:"GQ"},{title:"Gabon",code:"GA"},{title:"Morocco",code:"MA"},{title:"Niger",code:"NE"},{title:"Nigeria",code:"NG"},{title:"Republic of the Congo",code:"CG"},{title:"Sahrawi Arab Democratic Republic",code:"EH"},{title:"Tunisia",code:"TN"}]},{city:"Moscow",zone:"Europe/Moscow",flags:[{title:"Belarus",code:"BY"},{title:"Russia: Moscow, Saint Petersburg, Sevastopol, Adygea, Chechnya, Chuvashia, Dagestan, Ingushetia, Kabardino-Balkaria, Kalmykia, Karachay-Cherkessia, Karelia, Komi, Mari El, Mordovia, North Ossetia-Alania, Tatarstan, Krasnodar Region, Stavropol Region, Arkhangelsk Oblast, Belgorod Oblast, Bryansk Oblast, Ivanovo Oblast, Kaluga Oblast, Kirov Oblast, Kostroma Oblast, Kursk Oblast, Leningrad Oblast, Lipetsk Oblast, Moscow Oblast, Murmansk Oblast, Nizhnyi Novgorod Oblast, Novgorod Oblast, Oryol Oblast, Penza Oblast, Pskov Oblast, Ryazan Oblast, Smolensk Oblast, Tambov Oblast, Tula Oblast, Tver Oblast, Vladimir Oblast, Vologda Oblast, Voronezh Oblast, Yaroslavl Oblast, Nenets Autonomous Okrug, Crimea",code:"RU"},{title:"Turkey",code:"TR"}]},{city:"Mountain",zone:"America/Denver",flags:[{title:"Canada: Alberta, British Columbia, Northwest Territories, Nunavut",code:"CA"},{title:"Mexico: Baja California Sur, Chihuahua, Nayarit, Sinaloa",code:"MX"},{title:"United States: Arizona (only Navajo Nation Reservation), Colorado, Idaho (most of state), Kansas (western border), Montana, Nebraska (panhandle), Nevada (West Wendover), New Mexico, North Dakota (west of Missouri River), Oregon (eastern border), South Dakota (western half), Texas (El Paso, Hudspeth), Utah, Wyoming",code:"US"}]},{city:"Myanmar",zone:"Asia/Rangoon",flags:[{title:"Cocos Islands (Australia)",code:"CC"},{title:"Myanmar",code:"MM"}]},{city:"Nepal",zone:"Asia/Kathmandu",flags:[{title:"Nepal",code:"NP"}]},{city:"Newfoundland",zone:"America/St_Johns",flags:[{title:"Canada: Newfoundland",code:"CA"}]},{city:"New Zealand",zone:"Pacific/Auckland",flags:[{title:"New Zealand",code:"NZ"}]},{city:"Norfolk Island",zone:"Pacific/Norfolk",flags:[{title:"Australia: Norfolk Island",code:"AU"}]},{city:"North Atlantic",zone:"Atlantic/Reykjavik",flags:[{title:"Greenland (Denmark): Danmarkshavn",code:"GL"},{title:"Iceland",code:"IS"}]},{city:"Northern Australia",zone:"Australia/Darwin",flags:[{title:"Australia: Northern Territory",code:"AU"}]},{city:"Northwestern Atlantic",zone:"America/Halifax",flags:[{title:"Bermuda (United Kingdom)",code:"BM"},{title:"Canada: New Brunswick, Labrador, Nova Scotia, Prince Edward Island, Qu\xe9bec",code:"CA"},{title:"Greenland: Thule Air Base",code:"GL"}]},{city:"Oceania",zone:"Pacific/Wake",flags:[{title:"Kiribati: Banaba, Gilbert Islands",code:"KI"},{title:"Marshall Islands",code:"MH"},{title:"Nauru",code:"NR"},{title:"Tuvalu",code:"TV"},{title:"United States Minor Outlying Islands: Wake",code:"UM"},{title:"Wallis and Futuna (France)",code:"WF"}]},{city:"Omsk",zone:"Asia/Omsk",flags:[{title:"Kazakhstan: Akmola Region, Almaty Region, East Kazakhstan Region, Jambyl Region, Karaganda Region, Kostanay Region, Kyzylorda Region, North Kazakhstan Region, Pavlodar Region, Turkistan Region",code:"KZ"},{title:"Kyrgyzstan",code:"KG"},{title:"Russia: Omsk Oblast",code:"RU"}]},{city:"Pacific",zone:"America/Los_Angeles",flags:[{title:"Canada: British Columbia, Northwest Territories",code:"CA"},{title:"Mexico: Baja California",code:"MX"},{title:"United States: California, Idaho (panhandle), Nevada (most of state), Oregon (most of state), Washington",code:"US"}]},{city:"Pakistan",zone:"Asia/Karachi",flags:[{title:"Maldives",code:"MV"},{title:"Pakistan",code:"PK"}]},{city:"Palestine",zone:"Asia/Hebron",flags:[{title:"Palestine",code:"PS"}]},{city:"Papua New Guinea",zone:"Pacific/Port_Moresby",flags:[{title:"Guam (United States)",code:"GU"},{title:"Micronesia: Chuuk, Yap",code:"FM"},{title:"Northern Mariana Islands (United States)",code:"MP"},{title:"Papua New Guinea: main part",code:"PG"}]},{city:"Paraguay",zone:"America/Asuncion",flags:[{title:"Paraguay",code:"PY"}]},{city:"Pitcairn Islands",zone:"Pacific/Pitcairn",flags:[{title:"Pitcairn Islands (United Kingdom)",code:"PN"}]},{city:"Queensland",zone:"Australia/Brisbane",flags:[{title:"Australia: Queensland",code:"AU"}]},{city:"St. Pierre et Miquelon",zone:"America/Miquelon",flags:[{title:"Saint-Pierre and Miquelon (France)",code:"PM"}]},{city:"Samara",zone:"Europe/Samara",flags:[{title:"Armenia",code:"AM"},{title:"Azerbaijan",code:"AZ"},{title:"Georgia",code:"GE"},{title:"Russia: Udmurtia, Astrakhan Oblast, Samara Oblast, Saratov Oblast, Ulyanovsk Oblast, Volgograd Oblast",code:"RU"}]},{city:"Samoa",zone:"Pacific/Apia",flags:[{title:"Samoa",code:"WS"}]},{city:"Srednekolymsk",zone:"Asia/Srednekolymsk",flags:[{title:"Russia: Sakha (eastern part), Magadan Oblast, Sakhalin Oblast",code:"RU"}]},{city:"South Australia",zone:"Australia/Adelaide",flags:[{title:"Australia: South Australia",code:"AU"}]},{city:"Tonga",zone:"Pacific/Tongatapu",flags:[{title:"Kiribati: Phoenix Islands",code:"KI"},{title:"Tokelau (New Zealand)",code:"TK"},{title:"Tonga",code:"TO"}]},{city:"Vladivostok",zone:"Asia/Vladivostok",flags:[{title:"Russia: Sakha (central part), Khabarovsk Region, Primorsky Krai, Jewish Autonomous Oblast",code:"RU"}]},{city:"West Africa",zone:"Africa/Bamako",flags:[{title:"Burkina Faso",code:"BF"},{title:"C\xf4te d'Ivoire",code:"CI"},{title:"The Gambia",code:"GM"},{title:"Ghana",code:"GH"},{title:"Guinea",code:"GN"},{title:"Guinea-Bissau",code:"GW"},{title:"Liberia",code:"LR"},{title:"Mali",code:"ML"},{title:"Mauritania",code:"MR"},{title:"Sahrawi Arab Democratic Republic",code:"EH"},{title:"S\xe3o Tom\xe9 and Pr\xedncipe",code:"ST"},{title:"Senegal",code:"SN"},{title:"Sierra Leone",code:"SL"},{title:"Togo",code:"TG"},{title:"United Kingdom: St. Helena, Ascension, and Tristan da Cunha",code:"SH"}]},{city:"Western Europe",zone:"Europe/London",flags:[{title:"Faroe Islands (Denmark)",code:"FO"},{title:"Guernsey (United Kingdom)",code:"GG"},{title:"Ireland",code:"IE"},{title:"Isle of Man (United Kingdom)",code:"IM"},{title:"Jersey (United Kingdom)",code:"JE"},{title:"Portugal: mainland, Madeira",code:"PT"},{title:"Spain: Canary Islands",code:"ES"},{title:"United Kingdom: England, Scotland, Northern Ireland, Wales",code:"GB"}]},{city:"Western Greenland",zone:"America/Godthab",flags:[{title:"Greenland (Denmark): Western Greenland",code:"GL"}]},{city:"Western Indonesia",zone:"Asia/Jakarta",flags:[{title:"Cambodia",code:"KH"},{title:"Christmas Island (Australia)",code:"CX"},{title:"Indonesia: Central Kalimantan, Java, Sumatra, West Kalimantan",code:"ID"},{title:"Laos",code:"LA"},{title:"Thailand",code:"TH"},{title:"Vietnam",code:"VN"}]},{city:"Western Oceania",zone:"Pacific/Bougainville",flags:[{title:"Micronesia: Kosrae, Pohnpei",code:"FM"},{title:"New Caledonia (France)",code:"NC"},{title:"Papua New Guinea: Bougainville",code:"PG"},{title:"Solomon Islands",code:"SB"},{title:"Vanuatu",code:"VU"}]},{city:"Yekaterinburg",zone:"Asia/Yekaterinburg",flags:[{title:"Kazakhstan: Aktobe Region, Atyrau Region, Mangystau Region, West Kazakhstan Region",code:"KZ"},{title:"Russia: Bashkortostan, Perm Region, Chelyabinsk Oblast, Kurgan Oblast, Orenburg Oblast, Sverdlovsk Oblast, Tyumen Oblast, Khanty-Mansi Autonomous Okrug, Yamalo-Nenets Autonomous Okrug",code:"RU"},{title:"Tajikistan",code:"TJ"},{title:"Turkmenistan",code:"TM"},{title:"Uzbekistan",code:"UZ"}]}];t(17);function M(){var e=function(e){var a=e.split(","),t=Object(c.a)(a,2),i=t[0],o=t[1],n=i.trim().split("."),l=Object(c.a)(n,3),r=l[0],s=l[1],d=l[2],u=o.trim().split(":"),g=Object(c.a)(u,2),m=g[0],A=g[1],h=s<10?"0".concat(s):"".concat(s),y=r<10?"0".concat(r):"".concat(r);return"".concat(d,"-").concat(h,"-").concat(y,"T").concat(m,":").concat(A)},a=k.sort(function(a,t){var i=a.city,o=a.zone,n=t.city,l=t.zone,c=e((new Date).toLocaleString("de-DE",{timeZone:o})),r=e((new Date).toLocaleString("de-DE",{timeZone:l}));return c<r?-1:r<c?1:i.toLowerCase()<n.toLowerCase()?-1:n.toLowerCase()<i.toLowerCase()?1:0});return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"World Time Clock"),o.a.createElement("div",{className:"row album sk-album"},a.map(function(e,a){return o.a.createElement(C,{key:a,flags:e.flags,city:e.city,zone:e.zone})})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.48a4af3a.chunk.js.map