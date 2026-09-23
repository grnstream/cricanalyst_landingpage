import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

const Eula = lazy(() => import("./pages/Eula"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure content has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [pathname, hash]);

  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-[#00B786] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eula" element={<Eula />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
