import cityList from "./cityList"

export default [
  {
    country: "Canada",
    subdiv: [
      {title: "Alberta"}, 
      {title: "British Columbia", extra: "(southeast)"}
    ],
    zone: "America/Edmonton",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Edmonton")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "British Columbia", extra: "(most of province)"}
    ],
    zone: "America/Vancouver",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Vancouver")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Labrador", extra: "(most of province)"}
    ],
    zone: "America/Goose_Bay",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Goose_Bay")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Manitoba"}
    ],
    zone: "America/Winnipeg",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Winnipeg")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "New Brunswick"}
    ],
    zone: "America/Moncton",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Moncton")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Newfoundland"}, 
      {title: "Labrador", extra: "(southeast)"}
    ],
    zone: "America/St_Johns",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/St_Johns")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Northwest Territories"}
    ],
    zone: "America/Yellowknife",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Yellowknife")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nova Scotia"}, 
      {title: "Prince Edward Island"}
    ],
    zone: "America/Halifax",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Halifax")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nunavut", extra: "(west of 102° W, Kitikmeot Region)"}
    ],
    zone: "America/Cambridge_Bay",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Cambridge_Bay")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nunavut", extra: "(102° W – 85° W, Resolute, Kivalliq Region)"}
    ],
    zone: "America/Rankin_Inlet",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Rankin_Inlet")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nunavut", extra: "(east of 85° W, Qikiqtaaluk Region)"}
    ],
    zone: "America/Pangnirtung",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Pangnirtung")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nunavut", extra: "(Coral Harbour)"}, 
      {title: "Ontario", extra: "(Atikokan)"}
    ],
    zone: "America/Atikokan",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Atikokan")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Ontario", extra: "(west of 90° W)"}
    ],
    zone: "America/Rainy_River",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Rainy_River")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Ontario", extra: "(most of province)"}, 
      {title: "Québec", extra: "(west of 63° W)"}
    ],
    zone: "America/Toronto",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Toronto")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Québec", extra: "(east of 63° W)"}
    ],
    zone: "America/Blanc-Sablon",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Blanc-Sablon")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Saskatchewan"}
    ],
    zone: "America/Regina",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Regina")
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Yukon"}
    ],
    zone: "America/Whitehorse",
    flag: "CA",
    cities: cityList.filter(city => city.country === "CA" && city.tz === "America/Whitehorse")
  },
]