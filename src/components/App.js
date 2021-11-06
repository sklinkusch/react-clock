import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "../pages/Home";
import Ideal from "../pages/Ideal";

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      <Switch>
        <Route path="/ideal">
          <Ideal />
        </Route>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App