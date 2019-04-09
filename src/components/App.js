import React from "react";
import Clock from "./Clock";
import "../styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Clock key="0" city="Los Angeles" zone="America/Los_Angeles" />
      <Clock key="1" city="Chicago" zone="America/Chicago" />
      <Clock key="2" city="New York" zone="America/New_York" />
      <Clock key="3" city="London" zone="Europe/London" />
      <Clock key="4" city="Berlin" zone="Europe/Berlin" />
      <Clock key="5" city="Moscow" zone="Europe/Moscow" />
      <Clock key="6" city="Kolkata" zone="Asia/Kolkata" />
      <Clock key="7" city="Beijing" zone="Asia/Shanghai" />
      <Clock key="8" city="Tokyo" zone="Asia/Tokyo" />
      <Clock key="9" city="Sydney" zone="Australia/Sydney" />
    </div>
  );
}
