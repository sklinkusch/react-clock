import { useEffect } from 'react'
import { useDebugState } from "use-named-state";
import moment from "moment-timezone"

export const useGetData = (mode) => {
  const [lang, setLang] = useDebugState("lang", "")
  const [allTz, setAllTz] = useDebugState("allTz", [])
  const [filtVal, setFiltVal] = useDebugState("filterValue", "")
  const [timezones, setTimezones] = useDebugState("timezones", [])
  const fetchData = (currentLanguage) => {
    fetch(`https://worldtime-api.vercel.app/${mode}?lang=${currentLanguage}`)
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
        const Now = moment().utc().format("x")
        const {country, zone, flag, subdiv = [], cities = [], utcOffset = null } = tz
        const offset = zone ? moment().tz(zone).format("Z") : -1 * utcOffset
        const numericOffset = zone ? -1 * moment.tz.zone(zone).utcOffset(Now) : utcOffset
        return { country, zone, flag, offset, numericOffset, subdiv, cities }
    })
    const sortedStates = unsortedStates.sort((a,b) => (a.numericOffset - b.numericOffset))
    const timezoneObject = sortedStates.reduce((acc, curr) => {
      const obj = {...acc}
      const { flag: code, offset, country: title, zone, numericOffset, subdiv = [], cities = [] } = curr
      const isOffsetNumeric = typeof offset === 'number'
      const offsetSign = isOffsetNumeric
        ? offset === 0
          ? '±'
          : offset < 0
            ? '+'
            : '-'
        : null
      const offsetAbs = isOffsetNumeric
        ? Math.abs(offset)
        : null
      const offsetHours = isOffsetNumeric
        ? Math.floor(offsetAbs / 60)
        : null
      const offsetFormattedHours = isOffsetNumeric
        ? offsetHours < 10
          ? `0${offsetHours}`
          : `${offsetHours}`
        : null
      const offsetMinutes = isOffsetNumeric
        ? offsetAbs % 60
        : null
      const offsetFormattedMinutes = isOffsetNumeric
        ? offsetMinutes < 10
          ? `0${offsetMinutes}`
          : `${offsetMinutes}`
        : null
      const formattedOffset = isOffsetNumeric
        ? `UTC${offsetSign}${offsetFormattedHours}:${offsetFormattedMinutes}`
        : `UTC${offset}`
      const city = formattedOffset
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
      const currentLanguage = window.navigator.language.substring(0,2).toLowerCase()
      setLang(currentLanguage)
      fetchData(currentLanguage)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    lang,
    allTz,
    timezones,
    filtVal,
    setFiltVal,
    prepareZones,
  };
}