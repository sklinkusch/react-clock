import React from "react";
import Flag from "react-world-flags";
import moment from "moment-timezone";
import ClockTitle from "./ClockTitle";
import "../styles/Clock.css";

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

function getMultiTitle(flagTitle, flagSubdiv){
  if(flagSubdiv.length === 1) {
    const [subdiv] = flagSubdiv
    const {title, extra} = subdiv
    if(extra) {
      return `${flagTitle}: ${title} ${extra}`
    } else {
      return `${flagTitle}: ${title}`
    }
  } else {
    const sortedSubdiv = flagSubdiv.sort((a,b) => a.title.localeCompare(b.title,"de",{sensitivy: "base"}))
    const text = sortedSubdiv.map(item => item.extra ? `${item.title} ${item.extra}` : `${item.title}`).join(", ")
    return `${flagTitle}: ${text}`
  }
}

const ClockFlags = ({flags}) => (
    <div>
      {flags && Array.isArray(flags) && flags.length > 0 && flags.map((flag, index) => {
        const flagTitle = flag.subdiv.length > 0 
          ? getMultiTitle(flag.title, flag.subdiv)
          : flag.title
        return (
          <Flag key={index} code={flag.code} title={flagTitle} height="20" />
        )
      })}
    </div>
  )

const ClockDate = ({date}) => (<p>{date}</p>)

const ClockTime = ({date}) => (<p>{date}</p>)

export default class IdealClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: moment(),
      formattedDate: this.props.offset ? moment().utcOffset(this.props.offset).format("DD/MM/YYYY") : moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: this.props.offset ? moment().utcOffset(this.props.offset).format("HH:mm:ss") : moment().tz(this.props.zone).format("HH:mm:ss"),
      formattedZone: "UTC" + moment.tz(this.props.zone).format("Z"),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(props) {
    const { city = "", flags = [], cities = [] } = this.props
    const { formattedDate, formattedTime } = this.state
    const sortedFlags = flags.sort((a, b) => a.title.localeCompare(b.title, "de", {sensitivy: "base"}))
    const reducedFlags = sortedFlags.reduce((acc, curr) => {
      const arr = [...acc]
      const flagIndexes = arr.map(flag => flag.code)
      if(flagIndexes.includes(curr.code)) {
        const index = flagIndexes.indexOf(curr.code)
        const element = arr[index]
        curr.subdiv.forEach(item => {
          if(!element.subdiv.includes(item)) {
            element.subdiv.push(item)
          }
        })
        const sortedSubdiv = element.subdiv.sort((a,b) => a.title.localeCompare(b.title,"de",{ sensitivy: "base"}))
        arr[index].subdiv = sortedSubdiv
      } else {
        arr.push(curr)
      }
      return arr
    }, [])
    const uniqueCities = [ ...new Set(cities) ]
    return (
      <div>
        <div className="album-item">
          <ClockTitle city={city} />
          <ClockFlags flags={reducedFlags} />
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
          <ClockDate date={formattedDate} />
          <ClockTime date={formattedTime} />
        </div>
      </div>
    );
  }
  tick() {
    this.setState({
      date: moment(),
      formattedDate: this.props.offset ? moment().utcOffset(this.props.offset).format("DD/MM/YYYY") : moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: this.props.offset ? moment().utcOffset(this.props.offset).format("HH:mm:ss") : moment().tz(this.props.zone).format("HH:mm:ss"),
      formattedZone: "UTC" + moment.tz(this.props.zone).format("Z")
    });
  }
}
