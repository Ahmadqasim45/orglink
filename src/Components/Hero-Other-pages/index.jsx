import React from 'react'; // Correct capitalization for React
import './Hero-Other-pages.css'; // Ensure this file exists and the path is correct

const HeroSectionOtherPages = ({ title, subText }) => {
  return (
    <div className="parent-other-hero ">
      <header className="other-pages-hero-header-section">
        <div className="other-pages-container">
          <h1>{title}</h1>
          <p className="other-pages-hero-sub-text">{subText}</p>
        </div>
      </header>
    </div>
  );
};

export default HeroSectionOtherPages;
