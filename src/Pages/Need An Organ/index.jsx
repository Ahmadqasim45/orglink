import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherpages from "../../Components/Hero-Other-pages";
import RecipientconvenceSection from "../../Components/Recepient-Convence";
import TransoverviewSection from "../../Components/Trans-overview";
import RecipientCriteriaSection from "../../Components/Recepinet-Criteria";
import FaqRecipient from "../../Components/Faqsection/FaqRecepient";
import OrganLoader from "../../Components/Loader";


const NeedAnOrganPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false); // Set isLoading to false when the loader finishes
  };

  return (
    <div>
      {/* Show loader until the content is ready */}
      {isLoading && <OrganLoader onLoadComplete={handleLoadComplete} />}

      {/* Once loading is complete, render the main page content */}
      {!isLoading && (
        <>
          <Header />
          <HeroSectionOtherpages 
            title="Need an Organ"
            subText="If you or someone you know is in urgent need of an organ, OrgLink is here to help. Through our platform, we connect those in need with potential donors, offering a lifeline to those whose survival depends on receiving an organ transplant."
          />
          <RecipientconvenceSection />
          <TransoverviewSection />
          <RecipientCriteriaSection />
          <FaqRecipient />
          <Footer />
        </>
      )}
    </div>
  );
};

export default NeedAnOrganPage;
