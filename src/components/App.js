import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"
const Home = lazy(() => import("../pages/Home"));
const Ideal = lazy (() => import("../pages/Ideal"));

function App() {
  let pathProps
  switch (process.env.NODE_ENV) {
    case "development":
      pathProps = { basename: process.env.PUBLIC_URL }
      break
    case "production":
      pathProps = { basename: process.env.PUBLIC_URL }
      break
    default:
      pathProps = { basename: process.env.PUBLIC_URL }
  }
  return (
    <Router { ...pathProps }>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/ideal" element={<Ideal />} />
          <Route path="" exact={true} element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App