import React, { useEffect } from "react";
import { useDebugState } from "use-named-state";
import Clock from "../components/Clock";
import timezonesRaw from "../components/data"
import { findTimeZone, getZonedTime } from "timezone-support"
import "../styles/App.css";

const pad = (num) => (num < 10 ? `0${num}` : `${num}`)

const getOffset = (number) => {
  const sign = (number > 0) ? "+" : "-"
  const offset = Math.abs(number)
  const hours = pad(Math.floor(offset/60))
  const minutes = pad(offset % 60)
  return `${sign}${hours}:${minutes}`
}

export default function Home() {
  const [allStates] = useDebugState("allStates", timezonesRaw)
  const [filtVal, setFiltVal] = useDebugState("filterValue", "")
  const [timezones, setTimezones] = useDebugState("timezones", null)
  const prepareZones = (filterVal) => {
    const unsortedStates = allStates.map(tz => {
      const {country, zone, flag, subdiv = [], cities = [] } = tz
      const timezone = findTimeZone(zone)
      const now = getZonedTime(Date.now(), timezone)
      const numericOffset = -1 * now.zone.offset
      const offset = getOffset(numericOffset)
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
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} cities={time.cities} />)}
      </div>
    </div>
  );
}