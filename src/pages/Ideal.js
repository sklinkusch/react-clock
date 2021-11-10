import React, { useEffect } from "react";
import { useDebugState } from "use-named-state";
import moment from "moment-timezone";
import IdealClock from "../components/IdealClock";
import timezonesRaw from "../components/data-ideal"
import "../styles/App.css";

export default function Ideal() {
  const [allStates] = useDebugState("allStates", timezonesRaw)
  const [filtVal, setFiltVal] = useDebugState("filterValue","")
  const [timezones, setTimezones] = useDebugState("timezones",null)
  const prepareZones = (filterVal) => {
    const unsortedStates = allStates.map(tz => {
      const Now = moment().utc().format("x")
      const {country, zone, flag, subdiv, utcOffset = undefined, cities = [] } = tz 
      if (utcOffset) {
        const prefix = utcOffset < 0 ? "-" : "+"
        const hours = Math.floor(Math.abs(utcOffset)/60)
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`
        const minutes = Math.abs(utcOffset) - (60 * hours)
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const offset = `${prefix}${formattedHours}:${formattedMinutes}`
        const numericOffset = utcOffset
        return { country, zone: null, flag, offset, numericOffset, subdiv, cities }
      }
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
    const filterValue = filterVal != null ? filterVal : filtVal
    const filteredStates = filterValue !== ""  ? timezoneArray.filter(tz => {
      const { flags, cities } = tz
      const filteredFlags = flags.filter(flag => {
        const { title: country, subdiv = [] } = flag
        const title = subdiv.length > 0 ? `${country}: ${subdiv.map(item => item.title).join(", ")}` : country
        if(filterValue !== ""){
          if(title.toLowerCase().includes(filterValue.toLowerCase())) return true
          return false
        }
        return true
      })
      if(filteredFlags.length > 0) return true
      const filteredCities = cities.filter(city => city.asciiname.toLowerCase().includes(filterValue.toLowerCase()))
      if(filteredCities.length > 0) return true
      return false
    }) : timezoneArray
    setTimezones(filteredStates)
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
      {timezones && timezones.length > 0 && timezones.map((time, index) => <IdealClock key={index} flags={time.flags} city={time.city} zone={time.zone} offset={time.numericOffset} cities={time.cities} />)}
      </div>
    </div>
  );
}
