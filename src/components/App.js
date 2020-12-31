import React from "react";
import Clock from "./Clock";
import "../styles/App.css";

const times = [
  {
    city: "American Samoa",
    zone: "Pacific/Pago_Pago"
  },
  {
    city: "Hawaii",
    zone: "Pacific/Honolulu"
  },
  {
    city: "Alaska",
    zone: "America/Anchorage"
  },
  {
    city: "North America (Pacific)",
    zone: "America/Los_Angeles"
  },
  {
    city: "North America (Mountain)",
    zone: "America/Denver"
  },
  {
    city: "North America (Central)",
    zone: "America/Chicago"
  },
  {
    city: "North America (Eastern)",
    zone: "America/New_York"
  },
  {
    city: "North America (Atlantic)",
    zone: "America/Halifax"
  },
  {
    city: "Argentina",
    zone: "America/Buenos_Aires"
  },
  {
    city: "Western Europe",
    zone: "Europe/London"
  },
  {
    city: "Central Europe",
    zone: "Europe/Berlin"
  },
  {
    city: "Eastern Europe",
    zone: "Europe/Bucharest"
  },
  {
    city: "Russia (Moscow Region)",
    zone: "Europe/Moscow"
  },
  {
    city: "Iran",
    zone: "Asia/Tehran"
  },
  {
    city: "Caucasus",
    zone: "Asia/Baku"
  },
  {
    city: "Pakistan",
    zone: "Asia/Karachi"
  },
  {
    city: "India",
    zone: "Asia/Kolkata"
  },
  {
    city: "Kazakhstan",
    zone: "Asia/Almaty"
  },
  {
    city: "Indochina",
    zone: "Asia/Bangkok"
  },
  {
    city: "China",
    zone: "Asia/Shanghai"
  },
  {
    city: "Japan",
    zone: "Asia/Tokyo"
  },
  {
    city: "Australia (Central)",
    zone: "Australia/Darwin"
  },
  {
    city: "Australia (Eastern)",
    zone: "Australia/Sydney"
  },
  {
    city: "Papua New Guinea",
    zone: "Pacific/Port_Moresby"
  },
  // {
  //   city: "Fiji",
  //   zone: "Pacific/Suva"
  // },
  // {
  //   city: "Tonga",
  //   zone: "Pacific/Nukualofa"
  // }
]

export default function App() {
  return (
    <div className="app">
      {times.map((time, index) => <Clock key={index} city={time.city} zone={time.zone} />)}
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
