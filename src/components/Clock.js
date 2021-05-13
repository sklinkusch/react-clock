import React from "react";
import Flag from "react-world-flags";
import moment from "moment-timezone";
import "../styles/Clock.css";

const ClockTitle = ({ city }) => {
  const correctedCity = city.replace("-","–")
  return (
    <h2>
      <span>
        {correctedCity}
      </span>
    </h2>
  )
}

const ClockFlags = ({flags}) => (
    <div>
      {flags && Array.isArray(flags) && flags.length > 0 && flags.map((flag, index) => {
        const flagTitle = flag.subdiv.length > 0 
          ? `${flag.title}: ${flag.subdiv.sort((a,b) => a.localeCompare(b, "de", {sensitivity: "base"})).join(", ")}` 
          : flag.title
        return (
          <Flag key={index} code={flag.code} title={flagTitle} height="20" />
        )
      })}
    </div>
  )

const ClockDate = ({date}) => (<p>{date}</p>)

const ClockTime = ({date}) => (<p>{date}</p>)

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: moment(),
      formattedDate: moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: moment().tz(this.props.zone).format("HH:mm:ss"),
      formattedZone: "UTC" + moment.tz(this.props.zone).format("Z")
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(props) {
    const { city, flags } = this.props
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
        const sortedSubdiv = element.subdiv.sort((a,b) => a.localeCompare(b,"de",{ sensitivy: "base"}))
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
          <ClockDate date={formattedDate} />
          <ClockTime date={formattedTime} />
        </div>
      </div>
    );
  }
  tick(zone) {
    this.setState({
      date: moment(),
      formattedDate: moment().tz(this.props.zone).format("DD/MM/YYYY"),
      formattedTime: moment().tz(this.props.zone).format("HH:mm:ss"),
      formattedZone: "UTC" + moment.tz(this.props.zone).format("Z")
    });
  }
}
