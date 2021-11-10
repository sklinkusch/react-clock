import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
const Home = lazy(() => import("../pages/Home"));
const Ideal = lazy (() => import("../pages/Ideal"));

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/ideal">
            <Ideal />
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App