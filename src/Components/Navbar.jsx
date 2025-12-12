import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop dropdown
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // Mobile dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

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
          <img src="/images/ApexLogo.png" alt="logo" />
        </Link>
      </div>

      {/* DESKTOP LINKS */}
      <div className="Navbar-links-desktop">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/aboutpage" onClick={closeMenu}>
          About
        </Link>

        {/* Desktop Dropdown */}
        <div
          className="Navbar-dropdown"
          onMouseEnter={() => setDesktopDropdownOpen(true)}
          onMouseLeave={() => setDesktopDropdownOpen(false)}
        >
          <span className="Navbar-dropdown-title">Study Abroad ▾</span>

          <div
            className={`Navbar-dropdown-menu ${
              desktopDropdownOpen ? "show" : ""
            }`}
          >
            <Link className="desktopMenuA" to="/uk" onClick={closeMenu}>
              Australia
            </Link>
            <Link className="desktopMenuA" to="/canada" onClick={closeMenu}>
              UK
            </Link>
            <Link className="desktopMenuA" to="/usa" onClick={closeMenu}>
              China
            </Link>
            <Link className="desktopMenuA" to="/italy" onClick={closeMenu}>
              Canada
            </Link>
            <Link className="desktopMenuA" to="/australia" onClick={closeMenu}>
              New Zealand
            </Link>
          </div>
        </div>
        <Link to="/services" onClick={closeMenu}>
          BHM
        </Link>
        <Link to="/services" onClick={closeMenu}>
          DHM
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      {/* HAMBURGER ICON (Mobile Only) */}
      <div className="Navbar-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "line line-open-1" : "line"}></div>
        <div className={isOpen ? "line line-open-2" : "line"}></div>
        <div className={isOpen ? "line line-open-3" : "line"}></div>
      </div>

      {/* MOBILE MENU */}
      <div className={`Navbar-menu-mobile ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* Logo inside mobile menu */}
          <div className="Navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/images/ApexLogo.png" alt="logo" />
            </Link>
          </div>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/aboutpage" onClick={closeMenu}>
            About
          </Link>

          {/* MOBILE DROPDOWN */}
          <div
            className="Navbar-dropdown-mobile"
            onClick={toggleMobileDropdown}
          >
            <span className="Navbar-dropdown-title-mobile">Study Abroad ▾</span>

            <div
              className={`Navbar-dropdown-menu-mobile ${
                mobileDropdownOpen ? "open" : ""
              }`}
            >
              <Link className="mobileMenuA" to="/uk" onClick={closeMenu}>
                Australia
              </Link>
              <Link className="mobileMenuA" to="/canada" onClick={closeMenu}>
                UK
              </Link>
              <Link className="mobileMenuA" to="/usa" onClick={closeMenu}>
                China
              </Link>
              <Link className="mobileMenuA" to="/italy" onClick={closeMenu}>
                Canada
              </Link>
              <Link className="mobileMenuA" to="/australia" onClick={closeMenu}>
                New Zealand
              </Link>
            </div>
          </div>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`Navbar-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;
