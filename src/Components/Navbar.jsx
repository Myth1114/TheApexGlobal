import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`Navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="Navbar-logo">
        <Link to="/" onClick={closeMenu}>
          The Apex Global
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="Navbar-links-desktop">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="Navbar-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "line line-open-1" : "line"}></div>
        <div className={isOpen ? "line line-open-2" : "line"}></div>
        <div className={isOpen ? "line line-open-3" : "line"}></div>
      </div>

      {/* Mobile Menu */}
      <div className={`Navbar-menu-mobile ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>

      {/* Blur Overlay */}
      <div
        className={`Navbar-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;
