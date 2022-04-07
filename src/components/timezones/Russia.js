import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Kaliningrad",
          en: "Kaliningrad Oblast"
        }
      }
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
      {
        title: {
          de: "Moskau",
          en: "Moscow"
        }
      },
      {
        title: {
          de: "St. Petersburg",
          en: "Saint Petersburg"
        }
      },
      {
        title: {
          de: "Republik Karelien",
          en: "Karelia"
        }
      }, 
      {
        title: {
          de: "Republik Komi",
          en: "Komi"
        }
      },
      {
        title: {
          de: "Oblast Archangelsk",
          en: "Arkhangelsk Oblast"
        }
      },
      {
        title: {
          de: "Oblast Belgorod",
          en: "Belgorod Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Brjansk",
          en: "Bryansk Oblast"
        }
      },
      {
        title: {
          de: "Oblast Iwanowo",
          en: "Ivanovo Oblast"
        }
      },
      {
        title: {
          de: "Oblast Jaroslawl",
          en: "Yaroslavl Oblast"
        }
      },
      {
        title: {
          de: "Oblast Kaluga",
          en: "Kaluga Oblast"
        }
      },
      {
        title: {
          de: "Oblast Kostroma",
          en: "Kostroma Oblast"
        }
      },
      {
        title: {
          de: "Oblast Kursk",
          en: "Kursk Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Leningrad",
          en: "Leningrad Oblast"
        }
      },
      {
        title: {
          de: "Oblast Lipezk",
          en: "Lipetsk Oblast"
        }
      },
      {
        title: {
          de: "Oblast Moskau",
          en: "Moscow Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Murmansk",
          en: "Murmansk Oblast"
        }
      },
      {
        title: {
          de: "Oblast Nowgorod",
          en: "Novgorod Oblast"
        }
      },
      {
        title: {
          de: "Oblast Orjol",
          en: "Oryol Oblast"
        }
      },
      {
        title: {
          de: "Oblast Pskow",
          en: "Pskov Oblast"
        }
      },
      {
        title: {
          de: "Oblast Rjasan",
          en: "Ryazan Oblast"
        }
      },
      {
        title: {
          de: "Oblast Smolensk",
          en: "Smolensk Oblast"
        }
      },
      {
        title: {
          de: "Oblast Tambow",
          en: "Tambov Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Tula",
          en: "Tula Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Twer",
          en: "Tver Oblast"
        }
      },
      {
        title: {
          de: "Oblast Wladimir",
          en: "Vladimir Oblast"
        }
      },
      {
        title: {
          de: "Oblast Wologda",
          en: "Vologda Oblast"
        }
      },
      {
        title: {
          de: "Oblast Woronesch",
          en: "Voronezh Oblast"
        }
      },
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug"
        }
      }
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
      {
        title: {
          de: "Republik Adygeja",
          en: "Adygea"
        }
      },
      {
        title: {
          de: "Republik Dagestan",
          en: "Dagestan"
        }
      },
      {
        title: {
          de: "Republik Inguschetien",
          en: "Ingushetia"
        }
      },
      {
        title: {
          de: "Republik Kabardino-Balkarien",
          en: "Kabardino-Balkaria"
        }
      },
      {
        title: {
          de: "Republik Kalmückien",
          en: "Kalmykia"
        }
      },
      {
        title: {
          de: "Republik Karatschai-Tscherkessien",
          en: "Karachay-Cherkessia"
        }
      },
      {
        title: {
          de: "Region Krasnodar",
          en: "Krasnodar Region"
        }
      },
      {
        title: {
          de: "Republik Nordossetien-Alanien",
          en: "North Ossetia-Alania"
        }
      },
      {
        title: {
          de: "Republik Tschetschenien",
          en: "Chechnya"
        }
      },
      {
        title: {
          de: "Region Stawropol",
          en: "Stavropol Region"
        }
      },
      {
        title: {
          de: "Oblast Rostow",
          en: "Rostov Oblast"
        }
      },
      {
        title: {
          de: "Oblast Wolgograd",
          en: "Volgograd Oblast"
        }
      }
    ],
    zone: "Europe/Volgograd",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Moscow")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Tschuwaschien",
          en: "Chuvashia"
        }
      }, 
      {
        title: {
          de: "Republik Tatarstan",
          en: "Tatarstan"
        }
      }, 
      {
        title: {
          de: "Republik Mari El",
          en: "Mari El"
        }
      }, 
      {
        title: {
          de: "Republik Mordwinien",
          en: "Mordovia"
        }
      }, 
      {
        title: {
          de: "Oblast Kirow",
          en: "Kirov Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Nischni Nowgorod",
          en: "Nizhnyi Novgorod Oblast"
        }
      },
      {
        title: {
          de: "Oblast Pensa",
          en: "Penza Oblast"
        }
      }, 
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
      {
        title: {
          de: "Oblast Astrachan",
          en: "Astrakhan Oblast"
        }
      },  
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
      {
        title: {
          de: "Oblast Saratow",
          en: "Saratov Oblast"
        }
      }, 
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
      {
        title: {
          de: "Republik Udmurtien",
          en: "Udmurtia"
        }
      }, 
      {
        title: {
          de: "Oblast Samara",
          en: "Samara Oblast"
        }
      }
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
      {
        title: {
          de: "Oblast Uljanowsk",
          en: "Ulyanovsk Oblast"
        }
      }
    ],
    zone: "Europe/Ulyanovsk",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Europe/Ulyanovsk")
  },
  {
    country: {
      de: "Russland",
      en: "Russia"
    },
    subdiv: [
      {
        title: {
          de: "Republik Baschkortostan",
          en: "Bashkortostan"
        }
      }, 
      {
        title: {
          de: "Region Perm",
          en: "Perm Region"
        }
      }, 
      {
        title: {
          de: "Oblast Tscheljabinsk",
          en: "Chelyabinsk Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Kurgan",
          en: "Kurgan Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Orenburg",
          en: "Orenburg Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Swerdlowsk",
          en: "Sverdlovsk Oblast"
        }
      }, 
      {
        title: {
          de: "Oblast Tjumen",
          en: "Tyumen Oblast"
        }
      }, 
      {
        title: {
          de: "Autonomer Kreis der Chanten und Mansen",
          en: "Khanty-Mansi Autonomous Okrug"
        }
      }, 
      {
        title: {
          de: "Autonomer Kreis der Jamal-Nenzen",
          en: "Yamalo-Nenets Autonomous Okrug"
        }
      }
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
      {
        title: {
          de: "Oblast Omsk",
          en: "Omsk Oblast"
        }
      }
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
      {
        title: {
          de: "Republik Altai",
          en: "Altai Republic"
        }
      }, 
      {
        title: {
          de: "Region Altai",
          en: "Altai Region"
        }
      }
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
      {
        title: {
          de: "Republik Chakassien",
          en: "Khakassia"
        }
      }, 
      {
        title: {
          de: "Republik Tuwa",
          en: "Tuva Republic"
        }
      }, 
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region"
        }
      }
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
      {
        title: {
          de: "Oblast Kemerowo",
          en: "Kemerovo Oblast"
        }
      }
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
      {
        title: {
          de: "Oblast Nowosibirsk",
          en: "Novosibirsk Oblast"
        }
      }
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
      {
        title: {
          de: "Oblast Tomsk",
          en: "Tomsk Oblast"
        }
      }
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
      {
        title: {
          de: "Republik Burjatien",
          en: "Buryatia"
        }
      }, 
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast"
        }
      }
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
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)"
        }
      }, 
      {
        title: {
          de: "Oblast Amur",
          en: "Amur Oblast"
        }
      }
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
      {
        title: {
          de: "Region Transbaikalien",
          en: "Zabaykalsky Krai"
        }
      }
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
      {
        title: {
          de: "Region Chabarowsk",
          en: "Khabarovsk Region"
        }
      }, 
      {
        title: {
          de: "Region Primorje",
          en: "Primorsky Krai"
        }
      }, 
      {
        title: {
          de: "Jüdische Autonome Oblast",
          en: "Jewish Autonomous Oblast"
        }
      }
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
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: {
          de: "(mittlerer Teil)",
          en: "(central part)"
        }
      }
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
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)"
        }
      }
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
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast"
        }
      }
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
      {
        title: {
          de: "Oblast Sachalin",
          en: "Sakhalin Oblast"
        }
      }
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
      {
        title: {
          de: "Region Kamtschatka",
          en: "Kamchatka"
        }
      }
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
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug"
        }
      }
    ],
    zone: "Asia/Anadyr",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Anadyr")
  }
]

export default countryList