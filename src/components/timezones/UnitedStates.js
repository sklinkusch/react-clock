import cityList from "./cityList"

export default [
  {
    country: "United States",
    subdiv: [
      {title: "Alabama"}, 
      {title: "Arkansas"}, 
      {title: "Florida", extra: "(west of Appalachicola River)"}, 
      {title: "Illinois"}, 
      {title: "Iowa"}, 
      {title: "Kansas", extra: "(most of state)"}, 
      {title: "Kentucky", extra: "(western 40%)"}, 
      {title: "Louisiana"}, 
      {title: "Minnesota"}, 
      {title: "Mississippi"}, 
      {title: "Missouri"}, 
      {title: "Nebraska", extra: "(most of state)"}, 
      {title: "Oklahoma"}, 
      {title: "South Dakota", extra: "(eastern half)"}, 
      {title: "Tennessee", extra: "(most of state)"}, 
      {title: "Texas", extra: "(most of state)"}, 
      {title: "Wisconsin"}
    ],
    zone: "America/Chicago",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Chicago")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Alaska", extra: "(west of 169°30' W)"}
    ],
    zone: "America/Adak",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Adak")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Alaska", extra: "(east of 169°30' W)"}
    ],
    zone: "America/Anchorage",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Anchorage")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Arizona", extra: "(except Navajo Nation Reservation)"}
    ],
    zone: "America/Phoenix",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Phoenix")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Arizona", extra: "(Navajo Nation Reservation)"}
    ],
    zone: "America/Shiprock",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Shiprock")
  },
  {
    country: "United States",
    subdiv: [
      {title: "California"}, 
      {title: "Nevada", extra: "(most of state)"}, 
      {title: "Oregon", extra: "(most of state)"}, 
      {title: "Washington"}
    ],
    zone: "America/Los_Angeles",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Los_Angeles")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Colorado"}, 
      {title: "Kansas", extra: "(western border counties)"}, 
      {title: "Montana"}, 
      {title: "Nebraska", extra: "(western third)"}, 
      {title: "Nevada", extra: "(West Wendover)"}, 
      {title: "New Mexico"}, 
      {title: "North Dakota", extra: "(southwestern part)"}, 
      {title: "South Dakota", extra: "(western half)"}, 
      {title: "Texas", extra: "(El Paso, Hudspeth)"}, 
      {title: "Utah"}, 
      {title: "Wyoming"}
    ],
    zone: "America/Denver",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Denver")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Connecticut"}, 
      {title: "Delaware"}, 
      {title: "District of Columbia"}, 
      {title: "Florida", extra: "(east of Appalachicola River)"}, 
      {title: "Georgia"}, 
      {title: "Maine"}, 
      {title: "Maryland"}, 
      {title: "Massachusetts"}, 
      {title: "New Hampshire"}, 
      {title: "New Jersey"}, 
      {title: "New York"}, 
      {title: "North Carolina"}, 
      {title: "Ohio"}, 
      {title: "Pennsylvania"}, 
      {title: "Rhode Island"}, 
      {title: "South Carolina"}, 
      {title: "Tennessee", extra: "(eastern part)"}, 
      {title: "Vermont"}, 
      {title: "Virginia"}, 
      {title: "West Virginia"}
    ],
    zone: "America/New_York",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/New_York")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Idaho", extra: "(most of state)"}, 
      {title: "Oregon", extra: "(Malheur County)"}
    ],
    zone: "America/Boise",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Boise")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Indiana", extra: "(most of state)"}
    ],
    zone: "America/Indiana/Indianapolis",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Indiana/Indianapolis")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Indiana", extra: "(northwest and southwest)"}
    ],
    zone: "America/Indiana/Knox",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Indiana/Knox")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Kentucky", extra: "(eastern 60%)"}
    ],
    zone: "America/Kentucky/Louisville",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Kentucky/Louisville")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Michigan", extra: "(most of state)"}
    ],
    zone: "America/Detroit",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Detroit")
  },
  {
    country: "United States",
    subdiv: [
      {title: "Michigan", extra: "(counties bordering Wisconsin)"}
    ],
    zone: "America/Menominee",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/Menominee")
  },
  {
    country: "United States",
    subdiv: [
      {title: "North Dakota", extra: "(most of state)"}
    ],
    zone: "America/North_Dakota/Center",
    flag: "US",
    cities: cityList.filter(city => city.country === "US" && city.tz === "America/North_Dakota/Center")
  },
]