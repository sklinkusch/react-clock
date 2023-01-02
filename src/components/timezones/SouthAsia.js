import cityList from "./cityList"

const countryList = [
  {
    country: {
      de: "Bangladesch",
      en: "Bangladesh",
      fr: "Bangladesh"
    },
    zone: "Asia/Dhaka",
    flag: "BD",
    cities: cityList.filter(city => city.country === "BD" && city.tz === "Asia/Dhaka")
  },
  {
    country: {
      de: "Bhutan",
      en: "Bhutan",
      fr: "Bhoutan"
    },
    zone: "Asia/Thimphu",
    flag: "BT",
    cities: cityList.filter(city => city.country === "BT" && city.tz === "Asia/Thimphu")
  },
  {
    country: {
      de: "Britisches Territorium im Indischen Ozean (Vereinigtes Territorium)",
      en: "British Indian Ocean Territory (United Kingdom)",
      fr: "Territoire britannique de l'océan Indien (Royaume-Uni)"
    },
    zone: "Indian/Chagos",
    flag: "IO",
    cities: cityList.filter(city => city.country === "IO" && city.tz === "Indian/Chagos")
  },
  {
    country: {
      de: "Kokosinseln (Australien)",
      en: "Cocos Islands (Australia)",
      fr: "Îles Cocos (Australie)"
    },
    zone: "Indian/Cocos",
    flag: "CC",
    cities: cityList.filter(city => city.country === "CC" && city.tz === "Indian/Cocos")
  },
  {
    country: {
      de: "Indien",
      en: "India",
      fr: "Inde"
    },
    zone: "Asia/Kolkata",
    flag: "IN",
    cities: cityList.filter(city => city.country === "IN" && city.tz === "Asia/Kolkata")
  },
  {
    country: {
      de: "Myanmar",
      en: "Myanmar",
      fr: "Birmanie"
    },
    zone: "Asia/Yangon",
    flag: "MM",
    cities: cityList.filter(city => city.country === "MM" && city.tz === "Asia/Yangon")
  },
  {
    country: {
      de: "Nepal",
      en: "Nepal",
      fr: "Népal"
    },
    zone: "Asia/Kathmandu",
    flag: "NP",
    cities: cityList.filter(city => city.country === "NP" && city.tz === "Asia/Kathmandu")
  },
  {
    country: {
      de: "Malediven",
      en: "Maldives",
      fr: "Maldives"
    },
    zone: "Indian/Maldives",
    flag: "MV",
    cities: cityList.filter(city => city.country === "MV" && city.tz === "Indian/Maldives")
  },
  {
    country: {
      de: "Pakistan",
      en: "Pakistan",
      fr: "Pakistan"
    },
    zone: "Asia/Karachi",
    flag: "PK",
    cities: cityList.filter(city => city.country === "PK" && city.tz === "Asia/Karachi")
  },
  {
    country: {
      de: "Sri Lanka",
      en: "Sri Lanka",
      fr: "Sri Lanka"
    },
    zone: "Asia/Colombo",
    flag: "LK",
    cities: cityList.filter(city => city.country === "LK" && city.tz === "Asia/Colombo")
  }
]

export default countryList