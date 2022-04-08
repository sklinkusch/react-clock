import React, { lazy } from "react";
import moment from "moment-timezone"
import "../styles/Clock.css";
import { ClockDate, ClockTime } from "./ClockHelpers"
const ClockTitle = lazy(() => import("./ClockTitle"))
const ClockFlags = lazy(() => import("./ClockFlags"))
const ClockCities = lazy(() => import("./ClockCities"))

export default class IdealClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formattedDate: this.props.offset ? moment().utcOffset(this.props.offset).format("DD/MM/YYYY") : moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: this.props.offset ? moment().utcOffset(this.props.offset).format("HH:mm:ss") : moment().tz(this.props.zone).format("HH:mm:ss"),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(props) {
    const lang = window.navigator.language
    const { city = "", flags = [], cities = [] } = this.props
    const { formattedDate, formattedTime } = this.state
    const sortedFlags = flags.sort((a, b) => {
      const aTitle = typeof a.title === "object"
        ? a.title.hasOwnProperty(lang)
          ? a.title[lang] 
          : a.title["en"]
        : a.title
        const bTitle = typeof b.title === "object"
        ? b.title.hasOwnProperty(lang)
          ? b.title[lang] 
          : b.title["en"]
        : b.title
      return aTitle.localeCompare(bTitle, "de", {sensitivy: "base"})
    })
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
        const sortedSubdiv = element.subdiv.sort((a,b) => {
          const aTitle = typeof a.title === "object"
        ? a.title.hasOwnProperty(lang)
          ? a.title[lang] 
          : a.title["en"]
        : a.title
        const bTitle = typeof b.title === "object"
        ? b.title.hasOwnProperty(lang)
          ? b.title[lang] 
          : b.title["en"]
        : b.title
      return aTitle.localeCompare(bTitle, "de", {sensitivy: "base"})
        })
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
          <ClockDate date={formattedDate} />
          <ClockTime date={formattedTime} />
          <ClockFlags flags={reducedFlags} />
          <ClockCities uniqueCities={uniqueCities} />
        </div>
      </div>
    );
  }
  tick() {
    this.setState({
      formattedDate: this.props.offset ? moment().utcOffset(this.props.offset).format("DD/MM/YYYY") : moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: this.props.offset ? moment().utcOffset(this.props.offset).format("HH:mm:ss") : moment().tz(this.props.zone).format("HH:mm:ss"),
    });
  }
}
