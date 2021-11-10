import React, { useEffect } from "react";
import { useDebugState } from "use-named-state";
import moment from "moment-timezone";
import Clock from "../components/Clock";
import timezonesRaw from "../components/data"
import "../styles/App.css";

export default function Home() {
  const [allStates] = useDebugState("allStates", timezonesRaw)
  const [filtVal, setFiltVal] = useDebugState("filterValue", "")
  const [timezones, setTimezones] = useDebugState("timezones", null)
  const prepareZones = (filterVal) => {
    const unsortedStates = allStates.map(tz => {
      const Now = moment().utc().format("x")
      const {country, zone, flag, subdiv = [], cities = [] } = tz
      const offset = moment().tz(zone).format("Z")
      const numericOffset = -1 * moment.tz.zone(zone).utcOffset(Now)
      return { country, zone, flag, offset, numericOffset, subdiv, cities }
    })
    const sortedStates = unsortedStates.sort((a,b) => (a.numericOffset - b.numericOffset))
    const timezoneObject = sortedStates.reduce((acc, curr) => {
      const obj = {...acc}
      const { flag: code, offset, country: title, zone, numericOffset, subdiv = [], cities = [] } = curr
      const city = "UTC" + offset
      const flag = { code, title, subdiv }
      if (obj.hasOwnProperty(city)) {
        obj[city].flags.push(flag)
        obj[city].cities = obj[city].cities.concat(cities)
      } else {
        obj[city] = { city, numericOffset, zone, flags: [flag], cities }
      }
      return obj
    }, {})
    const timezoneArray = Object.values(timezoneObject).sort((a,b) => (a.numericOffset - b.numericOffset))
    const filterValue = filterVal ? filterVal : filtVal
    const filteredZones = filterValue !== ""  ? timezoneArray.filter(timezone => {
      const { country, subdiv = [], cities = [] } = timezone
      const title = `${country}: ${subdiv.map(item => item.title).join(", ")}`
      if(filterVal !== ""){
        if(title.toLowerCase().includes(filterValue.toLowerCase())) {
          return true
        }
        const filteredCities = cities.filter(city => city.asciiname.toLowerCase().includes(filterValue.toLowerCase()))
        if(filteredCities.length > 0) return true
        return false
      }
      return true
    }) : timezoneArray
    setTimezones(filteredZones)
  }
  useEffect(() => {
    prepareZones()
    setInterval(1000,prepareZones)
  }, [])
  return (
    <div className="app">
      <div style={{ textAlign: "center", marginBottom: "24px", marginTop: "24px" }}>
        <input type="text" placeholder="Filter countries" onChange={(e) => {
          setFiltVal(e.target.value)
          prepareZones(e.target.value)
          }} />
      </div>
      <div className="row album sk-album"> 
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} cities={time.cities} />)}
      </div>
    </div>
  );
}
