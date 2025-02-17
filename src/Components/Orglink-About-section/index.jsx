import React from "react";
import "./Orglink-About-section.css";
import Img1 from '../../Assets/images/doctor.jpg'
import Img2 from '../../Assets/images/operation-540598_1920.jpg'


const OrglinkAboutSection = () => {
  return (
    <>
      <div className="gallery__header">
        <div className="gallery__subtitle" >
          About Us
        </div>
        <h2 className="gallery__title">About Orglink</h2>
      </div>

      <div className="org-about-section-container container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6 h-100">
            <div className="org-about-section-content-section">
              {/* Our Mission */}
              <div className="org-about-section-section-item">
                <div className="org-about-section-icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="org-about-section-section-content">
                  <h3>Our Mission</h3>
                  <p>
                    Orglink connects organ donors and recipients, ensuring
                    efficient, transparent processes to save lives and improve
                    transplant accessibility globally.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="org-about-section-section-item">
                <div className="org-about-section-icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="org-about-section-section-content">
                  <h3>Our Vision</h3>
                  <p>
                    Orglink envisions a world with widespread, efficient organ
                    donation systems, reducing patient waiting times and
                    promoting global awareness.
                  </p>
                </div>
              </div>

              {/* Our Values */}
              <div className="org-about-section-section-item">
                <div className="org-about-section-icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="org-about-section-section-content">
                  <h3>Our Values</h3>
                  <p>
                    Transparency, trust, compassion, and collaboration are core
                    values guiding Orglink’s efforts in creating a life-saving
                    organ donation system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 h-100">
            <div className="org-about-section-image-grid">
              {/* First Image */}
              <div className="org-about-section-image-card org-about-section-image-1">
                <img
                  className="img-fluid h-100 w-100"
                  src={Img1}
                  alt="Doctor"
                />
              </div>

              {/* Second Image */}
              <div className="org-about-section-image-card org-about-section-image-2">
                <img
                  className="img-fluid h-100 w-100"
                  src={Img2}

                  alt="Operation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrglinkAboutSection;
