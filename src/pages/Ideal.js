import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Clock from "../components/Clock";
import timezonesRaw from "../components/data-ideal"
import "../styles/App.css";

export default function Ideal() {
  const [allStates] = useState(timezonesRaw)
  const [filtVal, setFiltVal] = useState("")
  const [timezones, setTimezones] = useState(null)
  const prepareZones = (filterVal) => {
    const filterValue = filterVal ? filterVal : filtVal
    const Now = moment().utc().format("x")
    const filteredStates = filterValue !== ""  ? allStates.filter(tz => {
      const { country, subdiv = [] } = tz
      const title = `${country}: ${subdiv.map(item => item.title).join(", ")}`
      if(filterVal !== ""){
        if(title.toLowerCase().includes(filterValue.toLowerCase())) {
          return true
        }
        return false
      }
      return true
    }) : allStates
    const unsortedStates = filteredStates.map(tz => {
      const {country, zone, flag, subdiv, utcOffset = undefined } = tz 
      if (utcOffset) {
        const prefix = utcOffset < 0 ? "-" : "+"
        const hours = Math.floor(Math.abs(utcOffset)/60)
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`
        const minutes = Math.abs(utcOffset) - (60 * hours)
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const offset = `${prefix}${formattedHours}:${formattedMinutes}`
        const numericOffset = utcOffset
        return { country, zone: null, flag, offset, numericOffset, subdiv }
      }
      const offset = moment().tz(zone).format("Z")
      const numericOffset = -1 * moment.tz.zone(zone).utcOffset(Now)
      return { country, zone, flag, offset, numericOffset, subdiv }
    })
    const sortedStates = unsortedStates.sort((a,b) => (a.numericOffset - b.numericOffset))
    const timezoneObject = sortedStates.reduce((acc, curr) => {
      const obj = {...acc}
      const { flag: code, offset, country: title, zone, numericOffset, subdiv = [] } = curr
      const city = "UTC" + offset
      const flag = { code, title, subdiv }
      if (obj.hasOwnProperty(city)) {
        obj[city].flags.push(flag)
      } else {
        obj[city] = { city, numericOffset, zone, flags: [flag] }
      }
      return obj
    }, {})
    const timezoneArray = Object.values(timezoneObject).sort((a,b) => (a.numericOffset - b.numericOffset))
    setTimezones(timezoneArray)
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
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} offset={time.numericOffset} />)}
      </div>
    </div>
  );
}
