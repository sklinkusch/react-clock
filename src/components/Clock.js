import React from "react";
import Flag from "react-world-flags";
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

const ClockDate = ({date, zone}) => (<p>{date.toLocaleDateString("en-GB", {timeZone: zone})}</p>)

const ClockTime = ({date, zone}) => (<p>{date.toLocaleTimeString("en-GB", { timeZone: zone})}</p>)

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render(props) {
    const { city, flags, zone } = this.props
    const { date } = this.state
    return (
      <div>
        <div className="album-item">
          <ClockTitle city={city} />
          <ClockFlags flags={flags} />
          <ClockDate date={date} zone={zone} />
          <ClockTime date={date} zone={zone} />
        </div>
      </div>
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}
