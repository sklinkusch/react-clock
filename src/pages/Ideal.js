import React, { useEffect, lazy } from "react";
import { useDebugState } from "use-named-state";
import "../styles/App.css";
import moment from 'moment-timezone';
import { getPermLocale } from "../components/getLocale";
const Clock = lazy(() => import("../components/Clock"))
/* eslint-disable react-hooks/exhaustive-deps */

export default function Ideal() {
  const [lang, setLang] = useDebugState("lang", "")
  const [allTz, setAllTz] = useDebugState("allTz", [])
  const [filtVal, setFiltVal] = useDebugState("filterValue", "")
  const [timezones, setTimezones] = useDebugState("timezones", [])
  const fetchData = (currentLanguage) => {
    fetch(`https://worldtime-api.vercel.app/ideal?lang=${currentLanguage}`)
    .then(response => response.json())
    .then(data => {
      setAllTz(data)
      prepareZones(data, filtVal, currentLanguage)
      setInterval(1000, () => prepareZones(allTz, filtVal, currentLanguage))
    })
    .catch(error => console.error(error))
  } 
  const prepareZones = (data, filterVal = "", currentLanguage) => {
    const myData = data ? data : allTz
    const unsortedStates = myData.map(tz => {
      const {country, flag, subdiv = [], cities = [], zone = null, utcOffset = null } = tz
      const Now = moment().utc().format("x")
      const offset = zone ? moment().tz(zone).format("Z") : -1 * utcOffset
      const numericOffset = zone ? -1 * moment.tz.zone(zone).utcOffset(Now) : utcOffset
      return { country, flag, offset, zone, numericOffset, subdiv, cities }
    })
    const sortedStates = unsortedStates.sort((a,b) => (a.numericOffset - b.numericOffset))
    const timezoneObject = sortedStates.reduce((acc, curr) => {
      const obj = {...acc}
      const { flag: code, offset, country: title, numericOffset, subdiv = [], cities = [] } = curr
      const city = numericOffset === 0 ? "UTC±00:00" : "UTC" + offset
      const flag = { code, title, subdiv }
      if (obj.hasOwnProperty(city)) {
        obj[city].flags.push(flag)
        obj[city].cities = obj[city].cities.concat(cities)
      } else {
        obj[city] = { city, numericOffset, flags: [flag], cities }
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
    const currentLanguage = window.navigator.language.substring(0,2).toLowerCase()
    setLang(currentLanguage)
    fetchData(currentLanguage)
  }, [])
  return (
    <div className="app">
      <div style={{ textAlign: "center", marginBottom: "24px", marginTop: "24px" }}>
        <input type="text" placeholder={getPermLocale("FilterCountries")} onChange={(e) => {
          setFiltVal(e.target.value)
          prepareZones(allTz, e.target.value, lang)
          }} />
      </div>
      <div className="row album sk-album"> 
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} offset={time.numericOffset} cities={time.cities} />)}
      </div>
    </div>
  );
}
