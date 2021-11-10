import cityList from "./cityList"

export default [
  {
    country: "Bangladesh",
    zone: "Asia/Dhaka",
    flag: "BD",
    cities: cityList.filter(city => city.country === "BD" && city.tz === "Asia/Dhaka")
  },
  {
    country: "Bhutan",
    zone: "Asia/Thimphu",
    flag: "BT",
    cities: cityList.filter(city => city.country === "BT" && city.tz === "Asia/Thimphu")
  },
  {
    country: "British Indian Ocean Territory (United Kingdom)",
    zone: "Indian/Chagos",
    flag: "IO",
    cities: cityList.filter(city => city.country === "IO" && city.tz === "Indian/Chagos")
  },
  {
    country: "Cocos Islands (Australia)",
    zone: "Indian/Cocos",
    flag: "CC",
    cities: cityList.filter(city => city.country === "CC" && city.tz === "Indian/Cocos")
  },
  {
    country: "India",
    zone: "Asia/Kolkata",
    flag: "IN",
    cities: cityList.filter(city => city.country === "IN" && city.tz === "Asia/Kolkata")
  },
  {
    country: "Myanmar",
    zone: "Asia/Yangon",
    flag: "MM",
    cities: cityList.filter(city => city.country === "MM" && city.tz === "Asia/Yangon")
  },
  {
    country: "Nepal",
    zone: "Asia/Kathmandu",
    flag: "NP",
    cities: cityList.filter(city => city.country === "NP" && city.tz === "Asia/Kathmandu")
  },
  {
    country: "Maldives",
    zone: "Indian/Maldives",
    flag: "MV",
    cities: cityList.filter(city => city.country === "MV" && city.tz === "Indian/Maldives")
  },
  {
    country: "Pakistan",
    zone: "Asia/Karachi",
    flag: "PK",
    cities: cityList.filter(city => city.country === "PK" && city.tz === "Asia/Karachi")
  },
  {
    country: "Sri Lanka",
    zone: "Asia/Colombo",
    flag: "LK",
    cities: cityList.filter(city => city.country === "LK" && city.tz === "Asia/Colombo")
  }
]
