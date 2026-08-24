import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Eula from "./pages/Eula";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
