import moment from "moment-timezone"
import Africa from "./timezones/Africa"
import Australia from "./timezones/Australia"
import Canada from "./timezones/Canada"
import Caribbean from "./timezones/Caribbean"
import CentralAmerica from "./timezones/CentralAmerica"
import CentralAsia from "./timezones/CentralAsia"
import EastAsia from "./timezones/EastAsia"
import Europe from "./timezones/Europe"
import Indonesia from "./timezones/Indonesia"
import MiddleEast from "./timezones/MiddleEast"
import Oceania from "./timezones/Oceania"
import Russia from "./timezones/Russia"
import SouthAmerica from "./timezones/SouthAmerica"
import SouthAsia from "./timezones/SouthAsia"
import SouthEastAsia from "./timezones/SouthEastAsia"
import UnitedStates from "./timezones/UnitedStates"

const timezonesRaw = [
  ...Africa, 
  ...Australia,
  ...Canada,
  ...Caribbean,
  ...CentralAmerica,
  ...CentralAsia, 
  ...EastAsia, 
  ...Europe, 
  ...Indonesia,
  ...MiddleEast,
  ...Oceania, 
  ...Russia, 
  ...SouthAmerica,
  ...SouthAsia,
  ...SouthEastAsia,
  ...UnitedStates
]

const Now = moment().utc().format("x")
const rawZones = timezonesRaw.map(tz => {
  const {country, zone, flag, subdiv } = tz
  const offset = moment().tz(zone).format("Z")
  const numericOffset = -1 * moment.tz.zone(zone).utcOffset(Now)
  return { country, zone, flag, offset, numericOffset, subdiv }
}).sort((a, b) => (a.numericOffset - b.numericOffset))
const timeZoneObject = rawZones.reduce((acc, curr) => {
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
const timeZoneArray = Object.values(timeZoneObject).sort((a,b) => (a.numericOffset - b.numericOffset))

export default timeZoneArray