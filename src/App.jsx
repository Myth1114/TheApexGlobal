import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Section/About";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    // Wait for full load (fixes Netlify timing issues)
    const onLoad = () => {
      AOS.init({
        duration: 600,
        once: false,
        mirror: false,
      });
      AOS.refreshHard(); // VERY IMPORTANT in production
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<h1>Services Coming Soon</h1>} />
        <Route path="/contact" element={<h1>Contact Coming Soon</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
