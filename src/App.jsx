import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import CountryDetails from "./Pages/CountryDetails";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    const onLoad = () => {
      AOS.init({
        duration: 600,
        once: false,
        mirror: false,
      });
      AOS.refreshHard();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/country/:slug" element={<CountryDetails />} />

        <Route path="/services" element={<h1>Services Coming Soon</h1>} />
        <Route path="/contact" element={<h1>Contact Coming Soon</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
