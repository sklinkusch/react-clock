import React from "react";
import Flag from "react-world-flags";
import "../styles/Clock.css";

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
    return (
      <div>
        <div className="album-item">
          <h2>{this.props.city}</h2>
          <div style={{ textAlign: "center" }}>
            {"flags" in this.props && this.props.flags && this.props.flags.map((flag, index) => {
            return (
              <Flag key={index} code={flag.code} title={flag.title} height="20" style={{marginInline: "5px", maxWidth: "35px"}} />
            )
            })}
          </div>
          <p>{this.state.date.toLocaleDateString("en-GB", {timeZone: this.props.zone})}</p>
          <p>{this.state.date.toLocaleTimeString("en-GB", { timeZone: this.props.zone})}</p>
        </div>
      </div>
      // <React.Fragment>
      //   <h2>{this.props.city}</h2>
      //   <p>
      //     It is{" "}
      //     {this.state.date.toLocaleString("en-GB", {
      //       timeZone: this.props.zone
      //     })}
      //   </p>
      // </React.Fragment>
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}
