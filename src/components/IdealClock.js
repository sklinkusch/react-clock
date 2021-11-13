import React from "react";
import moment from "moment-timezone";
import ClockTitle from "./ClockTitle";
import ClockFlags from "./ClockFlags";
import ClockCities from "./ClockCities"
import "../styles/Clock.css";
import { ClockDate, ClockTime } from "./ClockHelpers"

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
          <ClockCities uniqueCities={uniqueCities} />
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
