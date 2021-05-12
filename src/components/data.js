import moment from "moment-timezone"
import Africa from "./timezones/Africa"
import Europe from "./timezones/Europe"

const timezonesRaw = [...Africa, ...Europe]

const Now = moment().utc().format("x")
const rawZones = timezonesRaw.map(tz => {
  const {country, zone, flag } = tz
  const offset = moment().tz(zone).format("Z")
  const numericOffset = -1 * moment.tz.zone(zone).utcOffset(Now)
  return { country, zone, flag, offset, numericOffset }
}).sort((a, b) => (a.numericOffset - b.numericOffset))
const timeZoneObject = rawZones.reduce((acc, curr) => {
  const obj = {...acc}
  const { flag: code, offset, country: title, zone, numericOffset } = curr
  const city = "UTC" + offset
  const flag = { code, title }
  if (obj.hasOwnProperty(city)) {
    obj[city].flags.push(flag)
  } else {
    obj[city] = { city, numericOffset, zone, flags: [flag] }
  }
  return obj
}, {})
const timeZoneArray = Object.values(timeZoneObject).sort((a,b) => (a.numericOffset - b.numericOffset))

export default timeZoneArray