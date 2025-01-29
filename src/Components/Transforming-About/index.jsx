import React from "react";
import './Transforming-About.css'
import img from '../../Assets/images/kidney.jpeg'
const TransformingAboutSection =() =>{
    return(
        <div className="set-alignment-container">
        <div className="parent-transforming-container">
  <div className="container-fluid">
    <section className="orglink-hero">
      <div className="gallery__header ">
        <div
          className="gallery__subtitle"
          style={{ marginTop: "100px !important" }}
        >
          Transforming
        </div>
        <h2 className="gallery__title">
          Transforming Lives Through Organ Donation
        </h2>
      </div>
    </section>
    <section className="orglink-video-section">
      <div className="orglink-video-container">
        <a id="play-video" className="video-play-button" href="#">
          <span />
        </a>
      </div>
    </section>
    <section className="orglink-features">
      <div className="row">
        <div className="col-lg-4">
          <img
            className="img-fluid  rounded"
            src={img}
            alt=""
          />
        </div>
        <div className="col-lg-4">
          <div className="orglink-card">
            <h3 className="orglink-card-title">Become a Donor</h3>
            <p className="orglink-card-text">
              Join us in giving the gift of life. Register today to become an
              organ donor and make a lasting impact on those in need.
            </p>
            <a className="btn btn-donor  mt-2 px-5 py-2 rounded-pill  ">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="orglink-card">
            <h3 className="orglink-card-title">Save Lives</h3>
            <p className="orglink-card-text">
              Every organ donor has the potential to save multiple lives. Help
              us reach more people with this vital message.
            </p>
            <a className="btn btn-donor  mt-2 px-5 py-2 rounded-pill  ">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</div>
    )
}
export default TransformingAboutSection;