import React, { lazy } from "react";
import { getZonedTime, findTimeZone } from "timezone-support"
import "../styles/Clock.css";
import { ClockDate, ClockTime } from "./ClockHelpers"
const ClockTitle = lazy(() => import("./ClockTitle"))
const ClockFlags = lazy(() => import("./ClockFlags"))
const ClockCities = lazy(() => import("./ClockCities"))

const pad = (num) => (num < 10 ? `0${num}` : `${num}`)

const formatDate = (offset) => {
  const unixTime = Date.now()
  const add = offset * 60 * 1000
  const localUnixTime = unixTime + add
  const formattedDate = new Date(localUnixTime).toLocaleDateString("en-GB", { timeZone: "Etc/GMT+0"})
  const formattedTime = new Date(localUnixTime).toLocaleTimeString("en-GB", { timeZone: "Etc/GMT+0"})
  return { date: formattedDate, time: formattedTime }
}

const getFormattedDate = (date) => {
  const { year, month, day } = date
  return `${pad(day)}/${pad(month)}/${pad(year)}`
}

const getFormattedTime = (date) => {
  const { hours, minutes, seconds } = date
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export default class IdealClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formattedDate: this.props.offset ? formatDate(this.props.offset).date : getFormattedDate(getZonedTime(new Date(), findTimeZone(this.props.zone))),
      formattedTime: this.props.offset ? formatDate(this.props.offset).time : getFormattedTime(getZonedTime(new Date(), findTimeZone(this.props.zone))),
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
      formattedDate: this.props.offset ? formatDate(this.props.offset).date : getFormattedDate(getZonedTime(new Date(), findTimeZone(this.props.zone))),
      formattedTime: this.props.offset ? formatDate(this.props.offset).time : getFormattedTime(getZonedTime(new Date(), findTimeZone(this.props.zone))),
    });
  }
}
