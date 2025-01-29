import React from "react";
import './Donner-Criteria.css'
const DonnerCroteriaSection = () => {
    return(
        <div className="set-alignment-container">
  <div className="perent-donation-criteria">
    <div className="container eligibility-container">
      <div className="gallery__header">
        <div className="gallery__subtitle">Eligibility Criteria</div>
        <h2 className="gallery__title">Organ Donation Criteria</h2>
      </div>
      {/* Grid of Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Kidney Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Kidney Donation</h3>
              </div>
              <div className="card-body">
                <p>Key criteria for kidney donation:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free from chronic diseases like diabetes.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Healthy kidney function and no severe hypertension.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Can be a living or deceased donor.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="extra-content" style={{ display: "none" }}>
                <p>
                  Living kidney donors undergo a health screening to ensure
                  compatibility and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Liver Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Liver Donation</h3>
              </div>
              <div className="card-body">
                <p>Liver donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have no history of liver diseases like hepatitis.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Healthy BMI and no chronic alcohol use.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Liver regenerates after donation.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="extra-content" style={{ display: "none" }}>
                <p>
                  Living donors can donate a portion of their liver, which
                  regrows in size within weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Heart Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Heart Donation</h3>
              </div>
              <div className="card-body">
                <p>Heart donation requires:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Healthy heart function at the time of donation.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    No history of severe heart disease.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Only possible from deceased donors.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="extra-content" style={{ display: "none" }}>
                <p>
                  Heart donations are crucial in life-saving transplant
                  surgeries and require precise recipient matching.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Lung Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Lung Donation</h3>
              </div>
              <div className="card-body">
                <p>Criteria for lung donation:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must not have chronic respiratory diseases like COPD.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Healthy lung function with no severe scarring.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Can be donated by a living or deceased donor.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="extra-content" style={{ display: "none" }}>
                <p>
                  Living donors can provide a lung lobe; deceased donors often
                  donate both lungs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Stomach Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Stomach Donation</h3>
              </div>
              <div className="card-body">
                <p>Stomach donation is rare but possible:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be free from gastrointestinal diseases.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Can be transplanted into a recipient suffering from severe
                    stomach malfunction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Skin Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Skin Donation</h3>
              </div>
              <div className="card-body">
                <p>Skin donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have healthy skin without infections.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Skin can be used for burn victims or reconstructive
                    surgeries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Pancreas Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Pancreas Donation</h3>
              </div>
              <div className="card-body">
                <p>Criteria for pancreas donation:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free from pancreatic diseases like cancer.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Can be transplanted to treat type 1 diabetes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Large Intestine Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Large Intestine Donation</h3>
              </div>
              <div className="card-body">
                <p>Large intestine donation is uncommon but important:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must not have any chronic gastrointestinal issues.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Typically used to treat severe colon issues in recipients.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bladder Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Bladder Donation</h3>
              </div>
              <div className="card-body">
                <p>Bladder donation is possible in rare cases:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have healthy bladder function.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Can be donated to recipients with bladder failure.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Appendix Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Appendix Donation</h3>
              </div>
              <div className="card-body">
                <p>Appendix donation is less common:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have a healthy appendix.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Typically used for medical research and certain transplant
                    procedures.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Human Mouth Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Human Mouth Donation</h3>
              </div>
              <div className="card-body">
                <p>Criteria for human mouth donation include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Teeth and tissues can be used for reconstructive purposes.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have healthy oral tissue.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Nervous System Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Nervous System Donation</h3>
              </div>
              <div className="card-body">
                <p>Criteria for nervous system donation include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must have a healthy nervous system without
                    degenerative diseases.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Typically involves brain and spinal cord donations for
                    medical research or transplants.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bone Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Bone Donation</h3>
              </div>
              <div className="card-body">
                <p>Bone donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free from bone diseases like osteoporosis.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Bone can be donated for surgical use in orthopedic
                    procedures.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Rectum Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Rectum Donation</h3>
              </div>
              <div className="card-body">
                <p>Rectum donation is rare and typically used for:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used for reconstructive surgeries in some colorectal cancer
                    patients.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free of infections or diseases affecting the
                    gastrointestinal tract.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Thyroid Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Thyroid Donation</h3>
              </div>
              <div className="card-body">
                <p>Thyroid donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Must be free from thyroid diseases like thyroid cancer or
                    hypothyroidism.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor thyroid is used for patients with hypothyroidism.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Diaphragm Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Diaphragm Donation</h3>
              </div>
              <div className="card-body">
                <p>Diaphragm donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used in patients requiring lung transplants or surgery for
                    respiratory issues.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free of lung diseases or other respiratory
                    complications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Arteries Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Arteries Donation</h3>
              </div>
              <div className="card-body">
                <p>Artery donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used for vascular surgeries to replace damaged arteries in
                    patients.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor arteries must be free from atherosclerosis or other
                    vascular conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Adrenal Gland Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Adrenal Gland Donation</h3>
              </div>
              <div className="card-body">
                <p>Adrenal gland donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used for patients with adrenal gland failure or dysfunction.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must not have adrenal diseases like tumors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Eyes Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Eyes Donation</h3>
              </div>
              <div className="card-body">
                <p>Eyes donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used to treat corneal blindness or damage.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must not have eye diseases like glaucoma or cataracts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Lymph Node Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Lymph Node Donation</h3>
              </div>
              <div className="card-body">
                <p>Lymph node donation is used for:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used for research purposes in cancer studies and immune
                    disorders.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free from lymphatic diseases or cancers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Muscle Donation */}
        <div className="col">
          <div className="eligibility-card">
            <div>
              <div className="card-header">
                <h3>Muscle Donation</h3>
              </div>
              <div className="card-body">
                <p>Muscle donation criteria include:</p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Used for reconstructive surgeries, particularly for
                    traumatic injuries.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Donor must be free from muscle diseases such as muscular
                    dystrophy.
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

    )
}
export default DonnerCroteriaSection;