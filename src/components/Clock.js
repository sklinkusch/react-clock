import React from "react";
import Flag from "react-world-flags";
import moment from "moment-timezone";
import "../styles/Clock.css";

const ClockTitle = ({ city }) => (<h2><span>{city}</span></h2>)

const ClockFlags = ({flags}) => (
    <div>
      {flags && Array.isArray(flags) && flags.length > 0 && flags.map((flag, index) => {
        return (
          <Flag key={index} code={flag.code} title={flag.title} height="20" />
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
    const sortedFlags = flags.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return +1
      }
      return 0
    })
    return (
      <div>
        <div className="album-item">
          <ClockTitle city={city} />
          <ClockFlags flags={sortedFlags} />
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
