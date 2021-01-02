import React from "react";
import Clock from "./Clock";
import times from "./data"
import "../styles/App.css";

export default function App() {
  const formatDate = data => {
    const [date, time] = data.split(",")
    const [day, month, year] = date.trim().split(".")
    const [hour, minute] = time.trim().split(":")
    const newMonth = month < 10 ? `0${month}` : `${month}`
    const newDay = day < 10 ? `0${day}` : `${day}`
    return `${year}-${newMonth}-${newDay}T${hour}:${minute}`
  }
  const zones = times.sort((a, b) => {
    const { city: aCity, zone: aZone } = a
    const { city: bCity, zone: bZone } = b
    const aDate = formatDate((new Date()).toLocaleString("de-DE", { timeZone: aZone }))
    const bDate = formatDate((new Date()).toLocaleString("de-DE", { timeZone: bZone }))
    if( aDate < bDate ){
      return -1;
    } else if( bDate < aDate ){
      return +1;
    } else if( aCity.toLowerCase() < bCity.toLowerCase() ){
      return -1;
    } else if( bCity.toLowerCase() < aCity.toLowerCase() ){
      return +1;
    } else {
      return 0;
    }
  })
  return (
    <div className="app">
      <h1>World Time Clock</h1>
      <div className="row album"> 
      {zones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} />)}
      </div>
    </div>
  );
}
