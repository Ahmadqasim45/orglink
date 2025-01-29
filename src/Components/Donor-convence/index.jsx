import React  from "react";
import './Donor-convence.css';
const DonorconvenceSection = () => {
    return(
        <section className="od-section">
  <div className="container-fluid">
    {/* Navigation (Tabs) */}
    <ul className="od-nav__list" id="odTabs" role="tablist">
      <li className="od-nav__item" role="presentation">
        <a
          className="od-nav__link active"
          id="od-donor-tab"
          data-bs-toggle="pill"
          href="#od-donor"
          role="tab"
          aria-controls="od-donor"
          aria-selected="true"
        >
          <i className="fa-solid fa-heart-circle-plus" /> Donate Now
        </a>
      </li>
      <li className="od-nav__item" role="presentation">
        <a
          className="od-nav__link"
          id="od-importance-tab"
          data-bs-toggle="pill"
          href="#od-importance"
          role="tab"
          aria-controls="od-importance"
          aria-selected="false"
        >
          <i className="fa-solid fa-heart" /> Why Donate?
        </a>
      </li>
      <li className="od-nav__item" role="presentation">
        <a
          className="od-nav__link "
          id="od-facts-tab"
          data-bs-toggle="pill"
          href="#od-facts"
          role="tab"
          aria-controls="od-facts"
          aria-selected="false"
        >
          <i className="fa-solid fa-info-circle" /> Facts For You
        </a>
      </li>
      {/* New Tab 1 for Shocking Stats */}
      <li className="od-nav__item" role="presentation">
        <a
          className="od-nav__link"
          id="od-shocking-stats-tab"
          data-bs-toggle="pill"
          href="#od-shocking-stats"
          role="tab"
          aria-controls="od-shocking-stats"
          aria-selected="false"
        >
          <i className="fa-solid fa-exclamation-triangle" /> Urgent Need{" "}
        </a>
      </li>
      {/* New Tab 2 for Surprising Facts */}
      <li className="od-nav__item" role="presentation">
        <a
          className="od-nav__link"
          id="od-surprising-facts-tab"
          data-bs-toggle="pill"
          href="#od-surprising-facts"
          role="tab"
          aria-controls="od-surprising-facts"
          aria-selected="false"
        >
          <i className="fa-solid fa-lightbulb" /> Surprising
        </a>
      </li>
    </ul>
    {/* Tab Content */}
    <div className="tab-content" id="odTabContent">
      {/* Become a Donor Section */}
      <div
        className="tab-pane fade show active"
        id="od-donor"
        role="tabpanel"
        aria-labelledby="od-donor-tab"
      >
        <div className="od-grid">
          {/* Step 1 */}
          <div className="od-card">
            <i className="fas fa-clipboard-list od-card__icon" />
            <h4 className="od-card__title">Step 1: Register</h4>
            <p className="od-card__text">
              Sign up today to become an organ donor and make a life-saving
              difference.
            </p>
          </div>
          {/* Step 2 */}
          <div className="od-card">
            <i className="fas fa-search-plus od-card__icon" />
            <h4 className="od-card__title">Step 2: Match</h4>
            <p className="od-card__text">
              We'll match you with someone in need of your organ to save their
              life.
            </p>
          </div>
          {/* Step 3 */}
          <div className="od-card">
            <i className="fas fa-hand-holding-heart od-card__icon" />
            <h4 className="od-card__title">Step 3: Donate</h4>
            <p className="od-card__text">
              Your donation saves lives. Be the reason someone gets a second
              chance.
            </p>
          </div>
        </div>
      </div>
      {/* Importance of Organ Donation Section */}
      <div
        className="tab-pane fade"
        id="od-importance"
        role="tabpanel"
        aria-labelledby="od-importance-tab"
      >
        <div className="od-grid">
          {/* Card 1 */}
          <div className="od-card">
            <i className="fas fa-clipboard-list od-card__icon" />
            <h4 className="od-card__title">Life-Saving Impact</h4>
            <p className="od-card__text">
              Organ donation is the gift of life. It offers a chance for others
              to survive and thrive.
            </p>
          </div>
          {/* Card 2 */}
          <div className="od-card">
            <i className="fas fa-heartbeat od-card__icon" />
            <h4 className="od-card__title">A Legacy of Hope</h4>
            <p className="od-card__text">
              One donation can save multiple lives, leaving behind a powerful
              legacy of hope.
            </p>
          </div>
          {/* Card 3 */}
          <div className="od-card">
            <i className="fas fa-users od-card__icon" />
            <h4 className="od-card__title">Help Families</h4>
            <p className="od-card__text">
              Your donation brings hope to families waiting for a life-saving
              organ transplant.
            </p>
          </div>
        </div>
      </div>
      {/* Facts about Organ Donation Section */}
      <div
        className="tab-pane fade"
        id="od-facts"
        role="tabpanel"
        aria-labelledby="od-facts-tab"
      >
        <div className="od-grid">
          {/* Card 1 */}
          <div className="od-card">
            <i className="fas fa-clipboard-list od-card__icon" />
            <h4 className="od-card__title">Shocking Statistics</h4>
            <p className="od-card__text">
              Over 100,000 people are on the waiting list for organ transplants.
              The need is urgent.
            </p>
          </div>
          {/* Card 2 */}
          <div className="od-card">
            <i className="fas fa-heartbeat od-card__icon" />
            <h4 className="od-card__title">Save Multiple Lives</h4>
            <p className="od-card__text">
              A single donor can save up to 8 lives. Every donor matters.
            </p>
          </div>
          {/* Card 3 */}
          <div className="od-card">
            <i className="fas fa-hand-holding-heart od-card__icon" />
            <h4 className="od-card__title">No Cost to Donors</h4>
            <p className="od-card__text">
              Donating organs costs nothing to you, but provides life-saving
              benefits to others.
            </p>
          </div>
        </div>
      </div>
      {/* Shocking Stats Section */}
      <div
        className="tab-pane fade"
        id="od-shocking-stats"
        role="tabpanel"
        aria-labelledby="od-shocking-stats-tab"
      >
        <div className="od-grid">
          {/* Card 1 */}
          <div className="od-card">
            <i className="fas fa-exclamation-triangle od-card__icon" />
            <h4 className="od-card__title">Over 20 People Die Each Day</h4>
            <p className="od-card__text">
              Over 20 people die every day waiting for a life-saving organ
              transplant in the U.S. alone.
            </p>
          </div>
          {/* Card 2 */}
          <div className="od-card">
            <i className="fas fa-heart od-card__icon" />
            <h4 className="od-card__title">High Demand, Low Supply</h4>
            <p className="od-card__text">
              Less than 40% of the people who need an organ transplant will get
              one due to the shortage of donors.
            </p>
          </div>
        </div>
      </div>
      {/* Surprising Facts Section */}
      <div
        className="tab-pane fade"
        id="od-surprising-facts"
        role="tabpanel"
        aria-labelledby="od-surprising-facts-tab"
      >
        <div className="od-grid">
          {/* Card 1 */}
          <div className="od-card">
            <i className="fas fa-lightbulb od-card__icon" />
            <h4 className="od-card__title">One Donor, Many Lives Saved</h4>
            <p className="od-card__text">
              A single organ donor can save up to 8 lives and enhance over 50
              more.
            </p>
          </div>
          {/* Card 2 */}
          <div className="od-card">
            <i className="fas fa-clock od-card__icon" />
            <h4 className="od-card__title">Time is Critical</h4>
            <p className="od-card__text">
              Organs need to be transplanted within hours or days, making timely
              donations crucial.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default DonorconvenceSection;