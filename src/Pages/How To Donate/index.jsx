import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherpages from "../../Components/Hero-Other-pages";
import DonorconvenceSection from "../../Components/Donor-convence";
import OrganDonationTypesSection from "../../Components/Organ-Donation-Types";
import DonnerCroteriaSection from "../../Components/Donner-Criteria";
import FaqDonner from "../../Components/Faqsection/FaqDonner";
import OrganLoader from "../../Components/Loader";


const HowToDonate = () => {
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
            title="How To Donate Organs"
            subText="Orglink saves lives. By becoming an organ donor, you can help people in need and offer hope for a better future. Your generosity can make a life-changing difference."
          />
          <DonorconvenceSection />
          <OrganDonationTypesSection />
          <DonnerCroteriaSection />
          <FaqDonner />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HowToDonate;
