import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Russland",
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Kaliningrad",
          en: "Kaliningrad Oblast",
          fr: "Oblast de Kaliningrad"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Moskau",
          en: "Moscow",
          fr: "Moscou"
        }
      },
      {
        title: {
          de: "St. Petersburg",
          en: "Saint Petersburg",
          fr: "Saint-Pétersbourg"
        }
      },
      {
        title: {
          de: "Republik Karelien",
          en: "Karelia",
          fr: "République de Carélie"
        }
      }, 
      {
        title: {
          de: "Republik Komi",
          en: "Komi",
          fr: "République de Komis"
        }
      },
      {
        title: {
          de: "Oblast Archangelsk",
          en: "Arkhangelsk Oblast",
          fr: "Oblast d'Arkhangelsk"
        }
      },
      {
        title: {
          de: "Oblast Belgorod",
          en: "Belgorod Oblast",
          fr: "Oblast de Belgorod"
        }
      }, 
      {
        title: {
          de: "Oblast Brjansk",
          en: "Bryansk Oblast",
          fr: "Oblast de Briansk"
        }
      },
      {
        title: {
          de: "Oblast Iwanowo",
          en: "Ivanovo Oblast",
          fr: "Oblast d'Ivanovo"
        }
      },
      {
        title: {
          de: "Oblast Jaroslawl",
          en: "Yaroslavl Oblast",
          fr: "Oblast d'Iaroslavl"
        }
      },
      {
        title: {
          de: "Oblast Kaluga",
          en: "Kaluga Oblast",
          fr: "Oblast de Kalouga"
        }
      },
      {
        title: {
          de: "Oblast Kostroma",
          en: "Kostroma Oblast",
          fr: "Oblast de Kostroma"
        }
      },
      {
        title: {
          de: "Oblast Kursk",
          en: "Kursk Oblast",
          fr: "Oblast de Koursk"
        }
      }, 
      {
        title: {
          de: "Oblast Leningrad",
          en: "Leningrad Oblast",
          fr: "Oblast de Leningrad"
        }
      },
      {
        title: {
          de: "Oblast Lipezk",
          en: "Lipetsk Oblast",
          fr: "Oblast de Lipetsk"
        }
      },
      {
        title: {
          de: "Oblast Moskau",
          en: "Moscow Oblast",
          fr: "Oblast de Moscou"
        }
      }, 
      {
        title: {
          de: "Oblast Murmansk",
          en: "Murmansk Oblast",
          fr: "Oblast de Mourmansk"
        }
      },
      {
        title: {
          de: "Oblast Nowgorod",
          en: "Novgorod Oblast",
          fr: "Oblast de Novgorod"
        }
      },
      {
        title: {
          de: "Oblast Orjol",
          en: "Oryol Oblast",
          fr: "Oblast d'Orel"
        }
      },
      {
        title: {
          de: "Oblast Pskow",
          en: "Pskov Oblast",
          fr: "Oblast de Pskov"
        }
      },
      {
        title: {
          de: "Oblast Rjasan",
          en: "Ryazan Oblast",
          fr: "Oblast de Riazan"
        }
      },
      {
        title: {
          de: "Oblast Smolensk",
          en: "Smolensk Oblast",
          fr: "Oblast de Smolensk"
        }
      },
      {
        title: {
          de: "Oblast Tambow",
          en: "Tambov Oblast",
          fr: "Oblast de Tambov"
        }
      }, 
      {
        title: {
          de: "Oblast Tula",
          en: "Tula Oblast",
          fr: "Oblast de Toula"
        }
      }, 
      {
        title: {
          de: "Oblast Twer",
          en: "Tver Oblast",
          fr: "Oblast de Tver"
        }
      },
      {
        title: {
          de: "Oblast Wladimir",
          en: "Vladimir Oblast",
          fr: "Oblast de Vladimir"
        }
      },
      {
        title: {
          de: "Oblast Wologda",
          en: "Vologda Oblast",
          fr: "Oblast de Vologda"
        }
      },
      {
        title: {
          de: "Oblast Woronesch",
          en: "Voronezh Oblast",
          fr: "Oblast de Voronej"
        }
      },
      {
        title: {
          de: "Autonomer Kreis der Nenzen",
          en: "Nenets Autonomous Okrug",
          fr: "District autonome de Nénétsie"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Adygeja",
          en: "Adygea",
          fr: "République d'Adyguée"
        }
      },
      {
        title: {
          de: "Republik Dagestan",
          en: "Dagestan",
          fr: "République de Daghestan"
        }
      },
      {
        title: {
          de: "Republik Inguschetien",
          en: "Ingushetia",
          fr: "République d'Ingushie"
        }
      },
      {
        title: {
          de: "Republik Kabardino-Balkarien",
          en: "Kabardino-Balkaria",
          fr: "République de Kabardino-Balkarie"
        }
      },
      {
        title: {
          de: "Republik Kalmückien",
          en: "Kalmykia",
          fr: "République de Kalmoukie"
        }
      },
      {
        title: {
          de: "Republik Karatschai-Tscherkessien",
          en: "Karachay-Cherkessia",
          fr: "République de Karatchaïévo-Tcherkessie"
        }
      },
      {
        title: {
          de: "Region Krasnodar",
          en: "Krasnodar Region",
          fr: "Kraï de Krasnodar"
        }
      },
      {
        title: {
          de: "Republik Nordossetien-Alanien",
          en: "North Ossetia-Alania",
          fr: "République d'Ossétie du Nord-Alanie"
        }
      },
      {
        title: {
          de: "Republik Tschetschenien",
          en: "Chechnya",
          fr: "République de Tchétchénie"
        }
      },
      {
        title: {
          de: "Region Stawropol",
          en: "Stavropol Region",
          fr: "Kraï de Stavropol"
        }
      },
      {
        title: {
          de: "Oblast Rostow",
          en: "Rostov Oblast",
          fr: "Oblast de Rostov"
        }
      },
      {
        title: {
          de: "Oblast Wolgograd",
          en: "Volgograd Oblast",
          fr: "Oblast de Volgograd"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Tschuwaschien",
          en: "Chuvashia",
          fr: "République de Tchouvashie"
        }
      }, 
      {
        title: {
          de: "Republik Tatarstan",
          en: "Tatarstan",
          fr: "République de Tatarstan"
        }
      }, 
      {
        title: {
          de: "Republik Mari El",
          en: "Mari El",
          fr: "République des Maris"
        }
      }, 
      {
        title: {
          de: "Republik Mordwinien",
          en: "Mordovia",
          fr: "République de Mordovie"
        }
      }, 
      {
        title: {
          de: "Oblast Kirow",
          en: "Kirov Oblast",
          fr: "Oblast de Kirov"
        }
      }, 
      {
        title: {
          de: "Oblast Nischni Nowgorod",
          en: "Nizhnyi Novgorod Oblast",
          fr: "Oblast de Nijni Novgorod"
        }
      },
      {
        title: {
          de: "Oblast Pensa",
          en: "Penza Oblast",
          fr: "Oblast de Penza"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [          
      {
        title: {
          de: "Oblast Astrachan",
          en: "Astrakhan Oblast",
          fr: "Oblast d'Astrakhan"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Saratow",
          en: "Saratov Oblast",
          fr: "Oblast de Saratov"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Udmurtien",
          en: "Udmurtia",
          fr: "République d'Oudmourtie"
        }
      }, 
      {
        title: {
          de: "Oblast Samara",
          en: "Samara Oblast",
          fr: "Oblast de Samara"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Uljanowsk",
          en: "Ulyanovsk Oblast",
          fr: "Oblast d'Oulianovsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Baschkortostan",
          en: "Bashkortostan",
          fr: "République de Bachkirie"
        }
      }, 
      {
        title: {
          de: "Region Perm",
          en: "Perm Region",
          fr: "Kraï de Perm"
        }
      }, 
      {
        title: {
          de: "Oblast Tscheljabinsk",
          en: "Chelyabinsk Oblast",
          fr: "Oblast de Tcheliabinsk"
        }
      }, 
      {
        title: {
          de: "Oblast Kurgan",
          en: "Kurgan Oblast",
          fr: "Oblast de Kourgan"
        }
      }, 
      {
        title: {
          de: "Oblast Orenburg",
          en: "Orenburg Oblast",
          fr: "Oblast d'Orenbourg"
        }
      }, 
      {
        title: {
          de: "Oblast Swerdlowsk",
          en: "Sverdlovsk Oblast",
          fr: "Oblast de Sverdlovsk"
        }
      }, 
      {
        title: {
          de: "Oblast Tjumen",
          en: "Tyumen Oblast",
          fr: "Oblast de Tioumen"
        }
      }, 
      {
        title: {
          de: "Autonomer Kreis der Chanten und Mansen",
          en: "Khanty-Mansi Autonomous Okrug",
          fr: "District autonome des Khantys-Mansis-Iougra"
        }
      }, 
      {
        title: {
          de: "Autonomer Kreis der Jamal-Nenzen",
          en: "Yamalo-Nenets Autonomous Okrug",
          fr: "District autonome de Iamalo-Nénétsie"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Omsk",
          en: "Omsk Oblast",
          fr: "Oblast d'Omsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Altai",
          en: "Altai Republic",
          fr: "République d'Altaï"
        }
      }, 
      {
        title: {
          de: "Region Altai",
          en: "Altai Region",
          fr: "Kraï d'Altaï"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Chakassien",
          en: "Khakassia",
          fr: "République de Khakassie"
        }
      }, 
      {
        title: {
          de: "Republik Tuwa",
          en: "Tuva Republic",
          fr: "République de Touva"
        }
      }, 
      {
        title: {
          de: "Region Krasnojarsk",
          en: "Krasnoyarsk Region",
          fr: "Kraï de Krasnoïarsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Kemerowo",
          en: "Kemerovo Oblast",
          fr: "Oblast de Kemerovo"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Nowosibirsk",
          en: "Novosibirsk Oblast",
          fr: "Oblast de Novossibirsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Tomsk",
          en: "Tomsk Oblast",
          fr: "Oblast de Tomsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Burjatien",
          en: "Buryatia",
          fr: "République de Bouriatie"
        }
      }, 
      {
        title: {
          de: "Oblast Irkutsk",
          en: "Irkutsk Oblast",
          fr: "Oblast de Irkoutsk"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(westlicher Teil)",
          en: "(western part)",
          fr: "(ouest)"
        }
      }, 
      {
        title: {
          de: "Oblast Amur",
          en: "Amur Oblast",
          fr: "Oblast d'Amour"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Region Transbaikalien",
          en: "Zabaykalsky Krai",
          fr: "Kraï de Transbaïkalie"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Region Chabarowsk",
          en: "Khabarovsk Region",
          fr: "Kraï de Khabarovsk"
        }
      }, 
      {
        title: {
          de: "Region Primorje",
          en: "Primorsky Krai",
          fr: "Kraï de Primorié"
        }
      }, 
      {
        title: {
          de: "Jüdische Autonome Oblast",
          en: "Jewish Autonomous Oblast",
          fr: "Oblast autonome juif"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(mittlerer Teil)",
          en: "(central part)",
          fr: "(moyen)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Republik Sacha",
          en: "Sakha",
          fr: "République de Sakha"
        }, 
        extra: {
          de: "(östlicher Teil)",
          en: "(eastern part)",
          fr: "(est)"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Magadan",
          en: "Magadan Oblast",
          fr: "Oblast de Magadan"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Oblast Sachalin",
          en: "Sakhalin Oblast",
          fr: "Oblast de Sakhaline"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Region Kamtschatka",
          en: "Kamchatka",
          fr: "Kraï de Kamtchatka"
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
      en: "Russia",
      fr: "Russie"
    },
    subdiv: [
      {
        title: {
          de: "Autonomer Kreis der Tschuktschen",
          en: "Chukotka Autonomous Okrug",
          fr: "District autonome de Tchoukotka"
        }
      }
    ],
    zone: "Asia/Anadyr",
    flag: "RU",
    cities: cityList.filter(city => city.country === "RU" && city.tz === "Asia/Anadyr")
  }
]

export default countryList