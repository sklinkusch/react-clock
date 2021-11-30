import React, { Fragment } from "react"
import Flag from "./Flag"

const getSunTime = (city) => {
  const { lon } = city 
  const now = Date.now()
  const offsetRaw = lon * 4
  const offsetMs = offsetRaw * 60 * 1000
  const time = now + offsetMs
  const sunTime = new Date(time).toLocaleTimeString("en-GB", {timeZone: "Etc/GMT+0"}).split(":").slice(0,2).join(":")
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
              <li key={`city-${index}`} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ flexBasis: "65%", textAlign: "left" }}>{city.asciiname}</span>
                <Flag code={city.country} style={{ flexBasis: "35px", position: "relative", bottom: "4px" }}/>
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