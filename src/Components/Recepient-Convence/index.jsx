import React  from "react";
import './recepient-convence.css';
const RecipientconvenceSection = () => {
    return(
        <section className="od-section">
        <div className="container-fluid">
          {/* Navigation (Tabs) */}
          <ul className="od-nav__list" id="odTabs" role="tablist">
            <li className="od-nav__item" role="presentation">
              <a
                className="od-nav__link active"
                id="od-recipients-tab"
                data-bs-toggle="pill"
                href="#od-recipients"
                role="tab"
                aria-controls="od-recipients"
                aria-selected="true"
              >
                <i className="fa-solid fa-heart-circle-plus" /> Need an Organ
              </a>
            </li>
            <li className="od-nav__item" role="presentation">
              <a
                className="od-nav__link"
                id="od-eligibility-tab"
                data-bs-toggle="pill"
                href="#od-eligibility"
                role="tab"
                aria-controls="od-eligibility"
                aria-selected="false"
              >
                <i className="fa-solid fa-check-circle" /> Eligibility Criteria
              </a>
            </li>
            <li className="od-nav__item" role="presentation">
              <a
                className="od-nav__link"
                id="od-waiting-list-tab"
                data-bs-toggle="pill"
                href="#od-waiting-list"
                role="tab"
                aria-controls="od-waiting-list"
                aria-selected="false"
              >
                <i className="fa-solid fa-hourglass" /> Waiting List Process
              </a>
            </li>
            <li className="od-nav__item" role="presentation">
              <a
                className="od-nav__link"
                id="od-apply-tab"
                data-bs-toggle="pill"
                href="#od-apply"
                role="tab"
                aria-controls="od-apply"
                aria-selected="false"
              >
                <i className="fa-solid fa-file-circle-check" /> How to Apply
              </a>
            </li>
          </ul>
          {/* Tab Content */}
          <div className="tab-content" id="odTabContent">
            {/* Need an Organ Section */}
            <div
              className="tab-pane fade show active"
              id="od-recipients"
              role="tabpanel"
              aria-labelledby="od-recipients-tab"
            >
              <div className="od-grid">
                {/* Card 1 */}
                <div className="od-card">
                  <i className="fas fa-heartbeat od-card__icon" />
                  <h3 className="od-card__title">Urgent Need for Organs</h3>
                  <p className="od-card__text">
                    Over 100,000 people are on the waiting list for organ transplants
                    in the U.S. alone. The demand far exceeds the supply.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="od-card">
                  <i className="fas fa-heart od-card__icon" />
                  <h3 className="od-card__title">Critical Conditions</h3>
                  <p className="od-card__text">
                    Time is of the essence. Each day, patients wait for vital organs
                    like hearts, kidneys, and livers, which can save their lives.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="od-card">
                  <i className="fas fa-users od-card__icon" />
                  <h3 className="od-card__title">A Lifeline</h3>
                  <p className="od-card__text">
                    Organ transplants are life-saving procedures. Your wait for a
                    match could be the difference between life and death.
                  </p>
                </div>
              </div>
            </div>
            {/* Eligibility Criteria Section */}
            <div
              className="tab-pane fade"
              id="od-eligibility"
              role="tabpanel"
              aria-labelledby="od-eligibility-tab"
            >
              <div className="od-grid">
                {/* Card 1 */}
                <div className="od-card">
                  <i className="fas fa-clipboard-list od-card__icon" />
                  <h3 className="od-card__title">Eligibility Requirements</h3>
                  <p className="od-card__text">
                    To be eligible for an organ transplant, patients must meet certain
                    medical criteria. This includes the severity of your condition and
                    your overall health.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="od-card">
                  <i className="fas fa-heart od-card__icon" />
                  <h3 className="od-card__title">Age and Health Conditions</h3>
                  <p className="od-card__text">
                    While there is no strict age limit, your chances may be influenced
                    by factors such as age, comorbidities, and the availability of a
                    suitable organ.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="od-card">
                  <i className="fas fa-users od-card__icon" />
                  <h3 className="od-card__title">Tissue Compatibility</h3>
                  <p className="od-card__text">
                    Organ compatibility depends on factors such as blood type, tissue
                    type, and overall health condition, which determine your
                    eligibility for a transplant.
                  </p>
                </div>
              </div>
            </div>
            {/* Waiting List Process Section */}
            <div
              className="tab-pane fade"
              id="od-waiting-list"
              role="tabpanel"
              aria-labelledby="od-waiting-list-tab"
            >
              <div className="od-grid">
                {/* Card 1 */}
                <div className="od-card">
                  <i className="fas fa-hourglass od-card__icon" />
                  <h3 className="od-card__title">Waiting List Overview</h3>
                  <p className="od-card__text">
                    After your eligibility is confirmed, you will be placed on the
                    waiting list, where your priority will depend on medical urgency
                    and availability of organs.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="od-card">
                  <i className="fas fa-heartbeat od-card__icon" />
                  <h3 className="od-card__title">Priority System</h3>
                  <p className="od-card__text">
                    The priority for receiving an organ depends on factors like your
                    condition's severity, age, and time on the waiting list.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="od-card">
                  <i className="fas fa-search-plus od-card__icon" />
                  <h3 className="od-card__title">Tracking Your Status</h3>
                  <p className="od-card__text">
                    You can track your status on the waiting list by contacting the
                    transplant center where you're registered.
                  </p>
                </div>
              </div>
            </div>
            {/* How to Apply Section */}
            <div
              className="tab-pane fade"
              id="od-apply"
              role="tabpanel"
              aria-labelledby="od-apply-tab"
            >
              <div className="od-grid">
                {/* Card 1 */}
                <div className="od-card">
                  <i className="fas fa-file-circle-check od-card__icon" />
                  <h3 className="od-card__title">Application Process</h3>
                  <p className="od-card__text">
                    To apply for an organ transplant, you'll need to fill out an
                    application, submit medical records, and undergo an evaluation to
                    determine your eligibility.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="od-card">
                  <i className="fas fa-stethoscope od-card__icon" />
                  <h3 className="od-card__title">Medical Evaluation</h3>
                  <p className="od-card__text">
                    A thorough medical evaluation will help assess whether you are a
                    good candidate for organ transplantation and ensure you receive
                    the right type of organ.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="od-card">
                  <i className="fas fa-paper-plane od-card__icon" />
                  <h3 className="od-card__title">Submit Your Application</h3>
                  <p className="od-card__text">
                    Once the necessary steps are completed, submit your application to
                    be placed on the transplant waiting list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default RecipientconvenceSection;