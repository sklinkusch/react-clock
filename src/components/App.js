import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ideal from "../pages/Ideal";

export default function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Switch>
        <Route path="/ideal">
          <Ideal />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
