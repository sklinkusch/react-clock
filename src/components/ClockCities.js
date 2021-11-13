import React, { Fragment } from "react"
import Flag from "react-world-flags"
import moment from "moment-timezone"

const getSunTime = (city) => {
  const { lon } = city 
  const offsetRaw = lon * 4
  const offsetSign = offsetRaw > 0 ? "+" : "-"
  const offsetHours = Math.floor(Math.abs(offsetRaw)/60)
  const offsetMins = Math.abs(offsetRaw) % 60
  const offset = `${offsetSign}${offsetHours < 10 ? `0${offsetHours}` : `${offsetHours}`}:${offsetMins < 10 ? `0${offsetMins}` : `${offsetMins}`}`
  const sunTime = moment().utcOffset(offset).format("HH:mm")
  return sunTime
}

const ClockCities = ({uniqueCities}) => {
  return (
    <Fragment>
      {uniqueCities && uniqueCities.length > 0 ? (
        <details style={{ width: "95%", paddingLeft: "2.5%", paddingRight: "2.5%"}}>
          <summary>Major cities</summary>
          <ul>
            {uniqueCities.sort((a,b) => {
              if(a.asciiname.toLowerCase() < b.asciiname.toLowerCase()) return -1
              if(b.asciiname.toLowerCase() < a.asciiname.toLowerCase()) return +1
              if(a.country.toLowerCase() < b.country.toLowerCase()) return -1
              if(b.country.toLowerCase() < a.country.toLowerCase()) return +1
              if(a.adminCode.toLowerCase() < b.adminCode.toLowerCase()) return -1
              if(b.adminCode.toLowerCase() < a.adminCode.toLowerCase()) return +1
              return 0
            }).map((city, index) => (
              <li key={`city-${index}`} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <span style={{ flexBasis: "65%", textAlign: "left" }}>{city.asciiname}</span>
                <Flag code={city.country} style={{ flexBasis: "35px" }}/>
                <span>{getSunTime(city)}</span>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <div style={{ height: "24.5px"}} />
      )}
    </Fragment>
  )
}

export default ClockCities