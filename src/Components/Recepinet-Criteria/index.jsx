import React from "react";
import './Recepinet-Criteria.css';

const RecipientCriteriaSection = () => {
    return (
        <div className="set-alignment-container">
  <div className="perent-donation-criteria">
    <div className="container eligibility-container">
      <div className="gallery__header">
        <div className="gallery__subtitle">
          Eligibility Criteria for Recipients
        </div>
        <h2 className="gallery__title">Organ Donation Recipient Criteria</h2>
      </div>
      {/* Grid of Cards for Recipient Criteria */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Kidney Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Kidney Recipient</h3>
              </div>
              <div className="card-body">
                <p>Key criteria for kidney recipients:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must be free from active infections.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must have a compatible blood type with the donor.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    No history of severe kidney disease.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Liver Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Liver Recipient</h3>
              </div>
              <div className="card-body">
                <p>Liver recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must be under a certain age to ensure long-term
                    recovery.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must have liver failure due to disease or genetic
                    conditions.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must pass a physical health assessment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Heart Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Heart Recipient</h3>
              </div>
              <div className="card-body">
                <p>Heart recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must have advanced heart failure.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be able to tolerate surgery and postoperative care.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must have compatible blood type and body size with the donor
                    heart.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Lung Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Lung Recipient</h3>
              </div>
              <div className="card-body">
                <p>Lung recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be a non-smoker for a certain period before the
                    transplant.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must have chronic lung disease or pulmonary
                    failure.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must have no active infections at the time of surgery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Pancreas Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Pancreas Recipient</h3>
              </div>
              <div className="card-body">
                <p>Pancreas recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must have type 1 diabetes and associated
                    complications.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be in good overall health, without cancer or
                    significant heart disease.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must pass a comprehensive evaluation, including blood work
                    and physical exams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bone Marrow Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Bone Marrow Recipient</h3>
              </div>
              <div className="card-body">
                <p>Bone marrow recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must have a blood disorder, such as leukemia or
                    lymphoma.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be in remission or stable condition prior to
                    transplant.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient should not have serious organ dysfunction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Eye Recipient */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Eye Recipient</h3>
              </div>
              <div className="card-body">
                <p>Eye recipient criteria:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient must have severe vision impairment, such as
                    corneal blindness.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must pass an eye health screening to ensure the donation
                    will be viable.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Recipient should be free of systemic infections that may
                    affect eye health.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default RecipientCriteriaSection;
