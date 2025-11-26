import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import TopNavbar from "./Components/TopNavbar";
import Homepage from "./Pages/Homepage";
import About from "./Section/About";
const App = () => {
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
