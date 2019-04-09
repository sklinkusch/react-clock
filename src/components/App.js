import React from "react";
import Clock from "./Clock";
import "../styles/App.css";

export default function App() {
  return (
    <div className="app">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
        <Clock key={val} />
      ))}
    </div>
  );
}
