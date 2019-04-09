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
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </React.Fragment>
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}
