import React from "react";
import './Contact.css'
const FormSection = () =>{
    return(
        <div className="parent-contact">
  <div className="container-fluid align-ment-horizontal">
    <div className="contact-section">
      <div className="row">
        <div className="col-lg-5">
          <div className="contact-left d-flex flex-column">
            <div>
              <h2 className="contact-heading">
                Share love,
                <br />
                donate hope.
              </h2>
              <p className="contact-text">
                Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend.
                Est eros facilisi aenean n...
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-address">
                <p>
                  8911 Tanglewood Ave.
                  <br />
                  Capitol Heights, MD 20743
                </p>
              </div>
              <ul className="contact-details">
                <li>
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  charity@email.net
                </li>
                <li>
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +863-267-3634
                </li>
                <li>
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Mon-Fri: 8:00am - 6:00pm
                </li>
              </ul>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default FormSection;