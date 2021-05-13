import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Clock from "./Clock";
import timezonesRaw from "./data"
import "../styles/App.css";

export default function App() {
  const [timezones, setTimezones] = useState(null)
  const prepareZones = () => {
    const Now = moment().utc().format("x")
    const unsortedStates = timezonesRaw.map(tz => {
      const {country, zone, flag, subdiv } = tz
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
      <h1>World Time Clock</h1>
      <div className="row album sk-album"> 
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} />)}
      </div>
    </div>
  );
}
