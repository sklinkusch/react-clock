import React from "react";
import Clock from "./Clock";
import times from "./data"
import "../styles/App.css";

export default function App() {
  return (
    <div className="app">
      <div className="row album"> 
      {times.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} />)}
      </div>
      {/* <Clock key="0" city="Hawaii" zone="Pacific/Honolulu" />
      <Clock key="1" city="Los Angeles" zone="America/Los_Angeles" />
      <Clock key="2" city="Chicago" zone="America/Chicago" />
      <Clock key="3" city="New York" zone="America/New_York" />
      <Clock key="4" city="London" zone="Europe/London" />
      <Clock key="5" city="Berlin" zone="Europe/Berlin" />
      <Clock key="6" city="Moscow" zone="Europe/Moscow" />
      <Clock key="7" city="Kolkata" zone="Asia/Kolkata" />
      <Clock key="8" city="Beijing" zone="Asia/Shanghai" />
      <Clock key="9" city="Tokyo" zone="Asia/Tokyo" />
      <Clock key="10" city="Sydney" zone="Australia/Sydney" /> */}
    </div>
  );
}
