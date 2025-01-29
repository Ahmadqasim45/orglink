

import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherpages from "../../Components/Hero-Other-pages";
import DonorconvenceSection from "../../Components/Donor-convence";
import OrganDonationTypesSection from "../../Components/Organ-Donation-Types";
import DonnerCroteriaSection from "../../Components/Donner-Criteria";
import FaqDonner from "../../Components/Faqsection/FaqDonner";




const HowToDonate = () => {
  return (
    
     
//   <header  />
<div>
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
</div>
  );
};

export default HowToDonate;
