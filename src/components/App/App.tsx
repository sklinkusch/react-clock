import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
const Home = lazy(() => import('@pages/Home/Home'));
const Ideal = lazy(() => import('@pages/Ideal/Ideal'));

function App() {
  let pathProps;
  switch (import.meta.env.NODE_ENV) {
    case 'development':
      pathProps = { basename: import.meta.env.PUBLIC_URL };
      break;
    case 'production':
      pathProps = { basename: import.meta.env.PUBLIC_URL };
      break;
    default:
      pathProps = { basename: import.meta.env.PUBLIC_URL };
  }
  return (
    <Router {...pathProps}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/ideal" element={<Ideal />} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
