import React from "react";
import Clock from "./Clock";
import times from "./data"
import "../styles/App.css";

export default function App() {
  return (
    <div className="app">
      <h1>World Time Clock</h1>
      <div className="row album sk-album"> 
      {times.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} />)}
      </div>
    </div>
  );
}
