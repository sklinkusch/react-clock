import cityList from "./cityList"

export default [
  {
    country: "Canada",
    subdiv: [
      {title: "Newfoundland and Labrador"}, // 05
      {title: "New Brunswick"}, // 04
      {title: "Nova Scotia"}, // 07
      {title: "Nunavut", extra: "(east of 67.5° W)"}, // 14
      {title: "Prince Edward Island"}, // 09
      {title: "Québec", extra: "(eastern part)"} // 10
    ],
    zone: "Etc/GMT+4",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "04") return true
        if(city.adminCode === "05") return true
        if(city.adminCode === "07") return true
        if(city.adminCode === "09") return true
        if(city.adminCode === "10" && city.lon >= -67.5) return true
        if(city.adminCode === "14" && city.lon >= -67.5) return true
        return false
      }
      return false
    })
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Nunavut", extra: "(82.5°W – 67.5°W)"}, // 14
      {title: "Ontario", extra: "(eastern part)"}, // 08
      {title: "Québec", extra: "(western part)"} // 10
    ],
    zone: "Etc/GMT+5",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if (city.adminCode === "08" && city.lon >= -82.5) return true
        if (city.adminCode === "10" && city.lon < -67.5) return true
        if (city.adminCode === "14" && city.lon >= -82.5 && city.lon < -67.5) return true
        return false
      }
      return false
    })
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Manitoba", extra: "(eastern part)"}, // 03
      {title: "Nunavut", extra: "(97.5°W – 82.5°W)"}, // 14
      {title: "Ontario", extra: "(western part)"} // 08
    ],
    zone: "Etc/GMT+6",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if(city.adminCode === "03" && city.lon >= -97.5) return true
        if(city.adminCode === "08" && city.lon < -82.5) return true
        if(city.adminCode === "14" && city.lon >= -97.5 && city.lon < -82.5) return true
        return false
      }
      return false
    })
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Manitoba", extra: "(western part)"}, // 03
      {title: "Northwest Territories", extra: "(eastern part)"}, // 13
      {title: "Nunavut", extra: "(112.5°W – 97.5°W)"}, // 14
      {title: "Saskatchewan"} // 11
    ],
    zone: "Etc/GMT+7",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "03" && city.lon < -97.5) return true
        if(city.adminCode === "11") return true
        if(city.adminCode === "13" && city.lon >= -112.5) return true
        if(city.adminCode === "14" && city.lon >= -112.5 && city.lon < -97.5) return true
        return false
      }
      return false
    })
  },
  {
    country: "Canada",
    subdiv: [
      {title: "Alberta"}, // 01
      {title: "British Columbia", extra: "(eastern part)"}, // 02
      {title: "Northwest Territories", extra: "(central part)"}, // 13
      {title: "Nunavut", extra: "(west of 112.5°W)"} // 14
    ],
    zone: "Etc/GMT+8",
    flag: "CA",
    cities: cityList.filter(city => {
      if (city.country === "CA") {
        if(city.adminCode === "01") return true
        if(city.adminCode === "02" && city.lon >= -127.5) return true
        if(city.adminCode === "13" && city.lon >= -127.5 && city.lon < -112.5) return true
        if(city.adminCode === "14" && city.lon < -112.5) return true
        return false
      }
      return false
    })
  },
  {
    country: "Canada",
    subdiv: [
      {title: "British Columbia", extra: "(western part)"}, // 02
      {title: "Northwest Territories", extra: "(western part)"}, // 13
      {title: "Yukon"} // 12
    ],
    zone: "Etc/GMT+9",
    flag: "CA",
    cities: cityList.filter(city => {
      if(city.country === "CA") {
        if(city.adminCode === "02" && city.lon < -127.5) return true
        if(city.adminCode === "12") return true
        if(city.adminCode === "13" && city.lon < -127.5) return true
        return false
      }
      return false
    })
  },
]