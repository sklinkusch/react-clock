import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Kaliningrad Oblast"}
    ],
    zone: "Europe/Kaliningrad",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Kaliningrad")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Moscow"}, 
      {title: "Saint Petersburg"}, 
      {title: "Karelia"}, 
      {title: "Komi"}, 
      {title: "Arkhangelsk Oblast"}, 
      {title: "Bryansk Oblast"}, 
      {title: "Ivanovo Oblast"}, 
      {title: "Kaluga Oblast"}, 
      {title: "Kostroma Oblast"}, 
      {title: "Leningrad Oblast"}, 
      {title: "Moscow Oblast"}, 
      {title: "Murmansk Oblast"}, 
      {title: "Novgorod Oblast"}, 
      {title: "Oryol Oblast"}, 
      {title: "Pskov Oblast"}, 
      {title: "Ryazan Oblast"}, 
      {title: "Smolensk Oblast"}, 
      {title: "Tula Oblast"}, 
      {title: "Tver Oblast"}, 
      {title: "Vladimir Oblast"}, 
      {title: "Vologda Oblast"}, 
      {title: "Yaroslavl Oblast"}, 
      {title: "Nenets Autonomous Okrug"}
    ],
    zone: "Europe/Moscow",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Moscow")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Adygea"}, 
      {title: "Chechnya"}, 
      {title: "Dagestan"}, 
      {title: "Ingushetia"}, 
      {title: "Kabardino-Balkaria"}, 
      {title: "Kalmykia"}, 
      {title: "Karachay-Cherkessia"}, 
      {title: "North Ossetia-Alania"}, 
      {title: "Krasnodar Region"}, 
      {title: "Stavropol Region"}, 
      {title: "Astrakhan Oblast"}, 
      {title: "Rostov Oblast"}, 
      {title: "Volgograd Oblast"}
    ],
    zone: "Europe/Astrakhan",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Astrakhan")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Chuvashia"}, 
      {title: "Tatarstan"}, 
      {title: "Mari El"}, 
      {title: "Mordovia"}, 
      {title: "Kirov Oblast"}, 
      {title: "Nizhnyi Novgorod Oblast"}
    ],
    zone: "Europe/Kirov",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Kirov")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Belgorod Oblast"}, 
      {title: "Kursk Oblast"}, 
      {title: "Lipetsk Oblast"}, 
      {title: "Penza Oblast"}, 
      {title: "Saratov Oblast"}, 
      {title: "Tambov Oblast"}, 
      {title: "Voronezh Oblast"}
    ],
    zone: "Europe/Saratov",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Saratov")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Udmurtia"}, 
      {title: "Samara Oblast"}, 
      {title: "Ulyanovsk Oblast"}
    ],
    zone: "Europe/Samara",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Samara")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Bashkortostan"}, 
      {title: "Perm Region"}, 
      {title: "Chelyabinsk Oblast"}, 
      {title: "Kurgan Oblast"}, 
      {title: "Orenburg Oblast"}, 
      {title: "Sverdlovsk Oblast"}, 
      {title: "Tyumen Oblast"}, 
      {title: "Khanty-Mansi Autonomous Okrug"}, 
      {title: "Yamalo-Nenets Autonomous Okrug"}
    ],
    zone: "Asia/Yekaterinburg",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Yekaterinburg")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Omsk Oblast"}
    ],
    zone: "Asia/Omsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Omsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Altai Republic"}, 
      {title: "Altai Region"}
    ],
    zone: "Asia/Barnaul",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Barnaul")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Khakassia"}, 
      {title: "Tuva Republic"}, 
      {title: "Krasnoyarsk Region"}
    ],
    zone: "Asia/Krasnoyarsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Krasnoyarsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Kemerovo Oblast"}
    ],
    zone: "Asia/Novokuznetsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Novokuznetsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Novosibirsk Oblast"}
    ],
    zone: "Asia/Novosibirsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Novosibirsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Tomsk Oblast"}
    ],
    zone: "Asia/Tomsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Tomsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Buryatia"}, 
      {title: "Irkutsk Oblast"}
    ],
    zone: "Asia/Irkutsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Irkutsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Sakha", extra: "(western part)"}, 
      {title: "Amur Oblast"}
    ],
    zone: "Asia/Yakutsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Yakutsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Zabaykalsky Krai"}
    ],
    zone: "Asia/Chita",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Chita")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Khabarovsk Region"}, 
      {title: "Primorsky Krai"}, 
      {title: "Jewish Autonomous Oblast"}
    ],
    zone: "Asia/Vladivostok",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Vladivostok")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Sakha", extra: "(central part)"}
    ],
    zone: "Asia/Ust-Nera",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Ust-Nera")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Sakha", extra: "(eastern part)"}
    ],
    zone: "Asia/Srednekolymsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Srednekolymsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Magadan Oblast"}
    ],
    zone: "Asia/Magadan",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Magadan")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Sakhalin Oblast"}
    ],
    zone: "Asia/Sakhalin",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Sakhalin")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Kamchatka"}
    ],
    zone: "Asia/Kamchatka",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Kamchatka")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {title: "Chukotka Autonomous Okrug"}
    ],
    zone: "Asia/Anadyr",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Anadyr")
  }
]

export default countryList