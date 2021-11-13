import React from "react";
import Flag from "react-world-flags";
import moment from "moment-timezone";
import ClockTitle from "./ClockTitle";
import ClockFlags from "./ClockFlags";
import "../styles/Clock.css";

const ClockDate = ({date}) => (<p>{date}</p>)

const ClockTime = ({date}) => (<p>{date}</p>)

export default class Clock extends React.Component {
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
  render() {
    const { city, flags, cities } = this.props
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
    return (
      <div>
        <div className="album-item">
          <ClockTitle city={city} />
          <ClockFlags flags={reducedFlags} />
          {cities && cities.length > 0 ? (
            <details style={{ width: "95%", paddingLeft: "2.5%", paddingRight: "2.5%"}}>
              <summary>Major cities</summary>
              <ul>
                {cities.sort((a,b) => {
                  if(a.asciiname.toLowerCase() < b.asciiname.toLowerCase()) return -1
                  if(b.asciiname.toLowerCase() < a.asciiname.toLowerCase()) return +1
                  if(a.country.toLowerCase() < b.country.toLowerCase()) return -1
                  if(b.country.toLowerCase() < a.country.toLowerCase()) return +1
                  if(a.adminCode.toLowerCase() < b.adminCode.toLowerCase()) return -1
                  if(b.adminCode.toLowerCase() < a.adminCode.toLowerCase()) return +1
                  return 0
                }).map((city, index) => (
                <li key={`city-${index}`} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <span>{city.asciiname}</span>
                  <Flag code={city.country} />
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
