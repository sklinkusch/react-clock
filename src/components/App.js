import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ideal from "../pages/Ideal";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/ideal">
          <Ideal />
        </Route>
      </Switch>
    </Router>
  );
}
