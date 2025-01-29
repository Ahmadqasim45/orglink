import React from "react";
import "./header.css";
import Logo from "../../../Assets/images/Green Natural Organic Logo.png"; // If it's in the 'Assets/images' folder
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="custom-navbar navbar navbar-expand-lg p-3 d-lg-none sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width={150} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarToggler"
          >
            <i id="barsIcon" className="fa-solid fa-bars" />
            <i
              id="crossIcon"
              className="fa-solid fa-x"
              style={{ display: "none" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="mobileNav">
            <ul className="navbar-nav ms-auto justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/how-to-donate"
                  activeClassName="active"
                >
                  How to Donate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/need-an-organ"
                  activeClassName="active"
                >
                  Need an Organ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact-us"
                  activeClassName="active"
                >
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
      {/* Desktop Navbar */}
      <nav className="custom-navbar navbar navbar-expand-lg px-4 g-3 d-none d-lg-flex fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Brand Logo */}
          <NavLink className="navbar-brand" to="/">
            <img className="img-fluid" src={Logo} alt="Logo" width="150px" />
          </NavLink>
          {/* Navigation Links and Button */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/how-to-donate"
                  activeClassName="active"
                >
                  How to Donate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/need-an-organ"
                  activeClassName="active"
                >
                  Need an Organ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact-us"
                  activeClassName="active"
                >
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
