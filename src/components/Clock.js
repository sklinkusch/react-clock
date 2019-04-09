import React, { Component } from "react";
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
  render() {
    return (
      <React.Fragment>
        <h2>Hello, world!</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </React.Fragment>
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}
