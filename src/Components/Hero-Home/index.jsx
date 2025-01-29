import React from "react";
import './Hero-home.css';

const HeroHome = () => {
  return (
    <div className="parent-hero padding-all-section">
      <div
        className="custom-hero-section d-sm-flex align-items-center justify-content-between"
        style={{ height: "100vh" }}
      >
        <div className="custom-hero-headline col-md-5 d-flex flex-column align-items-start justify-content-start">
          <div className="custom-hero-content">
            <span className="custom-hero-subheadline">
              Save Lives, Donate Organs
            </span>
            <h1 className="custom-hero-title">
              Become a Hero<span className="highlight"> and Save a Life</span>
            </h1>
          </div>
          <p>
            Orglink is an innovative organ donation system designed to connect
            donors and recipients seamlessly. It aims to save lives by ensuring a
            transparent, efficient, and secure platform for organ matching and
            transplantation. Join us in making a difference today.
          </p>
          <a
            href="#"
            className="custom-hero-button w-50 mt-2 px-4 mx-0 text-center py-2 rounded-pill"
          >
            Donate Now
          </a>
        </div>
        <div className="custom-hero-image col-md-7 h-100 clipped">
          {/* Video Play Button */}
          {/* <a id="play-video" class="video-play-button" href="#">
            <span></span>
          </a> */}
          {/* Video Overlay (Hidden by default) */}
          <div id="video-overlay" className="video-overlay">
            <a className="video-overlay-close">×</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
