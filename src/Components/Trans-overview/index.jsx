import React from "react";
import './Trans-overview.css';
 const TransoverviewSection = () =>{
    return(
<section className="transplant-overview-clean">
  <div className="gallery__header">
    <div className="gallery__subtitle">Organ Donation Process</div>
    <h2 className="gallery__title">Lives Transformed Through Generosity</h2>
  </div>
  <div className="container-fluid">
    <div className="transplant-steps">
      {/* Step 1 */}
      <div className="step-card">
        <div className="step-number">1</div>
        <div className="step-content">
          <h3>Medical Evaluation</h3>
          <p>
            Start by undergoing a thorough medical examination to assess your
            eligibility for an organ transplant.
          </p>
        </div>
      </div>
      {/* Step 2 */}
      <div className="step-card">
        <div className="step-number">2</div>
        <div className="step-content">
          <h3>Finding the Match</h3>
          <p>
            Our advanced systems match you with the best possible donor based on
            medical and genetic compatibility.
          </p>
        </div>
      </div>
      {/* Step 3 */}
      <div className="step-card">
        <div className="step-number">3</div>
        <div className="step-content">
          <h3>Organ Availability</h3>
          <p>
            Once a suitable organ is available, the transplant team will notify
            you to proceed with the surgery.
          </p>
        </div>
      </div>
      {/* Step 4 */}
      <div className="step-card">
        <div className="step-number">4</div>
        <div className="step-content">
          <h3>Transplant Surgery</h3>
          <p>
            During the surgery, the donor organ will be carefully implanted into
            your body by our expert medical team.
          </p>
        </div>
      </div>
      {/* Step 5 */}
      <div className="step-card">
        <div className="step-number">5</div>
        <div className="step-content">
          <h3>Recovery &amp; Care</h3>
          <p>
            Post-surgery, you will receive personalized care to ensure the
            transplant is successful and recovery is smooth.
          </p>
        </div>
      </div>
      {/* Step 6 */}
      <div className="step-card">
        <div className="step-number">6</div>
        <div className="step-content">
          <h3>Long-Term Monitoring</h3>
          <p>
            We will continue to monitor your health through regular check-ups to
            ensure the success of the transplant in the long run.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
 }
 export default TransoverviewSection;