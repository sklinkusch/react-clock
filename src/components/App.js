import React from "react";
import Clock from "./Clock";
import "../styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Clock key="0" city="Berlin" zone="Europe/Berlin" />
      <Clock key="1" city="London" zone="Europe/London" />
      <Clock key="2" city="Beijing" zone="Asia/Shanghai" />
      <Clock key="3" city="Kolkata" zone="Asia/Kolkata" />
      <Clock key="4" city="Sydney" zone="Australia/Sydney" />
      <Clock key="5" city="Tokyo" zone="Asia/Tokyo" />
      <Clock key="6" city="Chicago" zone="America/Chicago" />
      <Clock key="7" city="Moscow" zone="Europe/Moscow" />
      <Clock key="8" city="New York" zone="America/New_York" />
      <Clock key="9" city="Los Angeles" zone="America/Los_Angeles" />
    </div>
  );
}
