import React, { useState } from "react";
import "./header.css";
import Logo from "../../../Assets/images/Green Natural Organic Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile & Tablet Navbar (Visible only on small screens) */}
      <nav className="custom-navbar navbar navbar-expand-lg p-3 sticky-top d-lg-none">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width={150} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mobileNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <div className={`navbar-collapse ${isMenuOpen ? "show" : "collapse"}`} id="mobileNav">
            <ul className="navbar-nav ms-auto justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/how-to-donate">
                  How to Donate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/need-an-organ">
                  Need an Organ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-donor w-100 mt-2 px-4 py-2 rounded-pill ms-0">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar (Visible only on larger screens) */}
      <nav className="custom-navbar navbar navbar-expand-lg px-4 g-3 sticky-top d-none d-lg-flex">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Brand Logo */}
          <NavLink className="navbar-brand" to="/">
            <img className="img-fluid" src={Logo} alt="Logo" width="150px" />
          </NavLink>
          {/* Navigation Links and Button */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/how-to-donate">
                  How to Donate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/need-an-organ">
                  Need an Organ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-donor px-4 py-2 rounded-pill ms-0">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
