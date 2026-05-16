import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import "./App.css";

/**
 * Scrolls to a hashed section when present, otherwise to the top on every
 * route change — so deep links and SPA navigation behave predictably.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Defer until the target route has rendered.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        {/* Unknown routes fall back to the homepage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
