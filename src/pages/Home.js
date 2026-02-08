import React, { lazy } from "react";
import "../styles/App.css";
import { getPermLocale } from "../components/getLocale";
import { useGetData } from "../hooks/useGetData";
const Clock = lazy(() => import("../components/Clock"));
/* eslint-disable react-hooks/exhaustive-deps */

export default function Home() {
  const { lang, timezones, setFiltVal, prepareZones, allTz } = useGetData('real');
  return (
    <div className="app">
      <div style={{ textAlign: "center", marginBottom: "24px", marginTop: "24px" }}>
        <input type="text" placeholder={getPermLocale("FilterCountries")} onChange={(e) => {
          setFiltVal(e.target.value)
          prepareZones(allTz, e.target.value, lang)
          }} />
      </div>
      <div className="row album sk-album"> 
      {timezones && timezones.length > 0 && timezones.map((time, index) => <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} cities={time.cities} />)}
      </div>
    </div>
  );
}
