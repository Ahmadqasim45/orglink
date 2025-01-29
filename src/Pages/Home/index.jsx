

import React from "react";



import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroHome from "../../Components/Hero-Home";
import DonationSystem from "../../Components/Donation-System";
import WorkStation from "../../Components/work-station";
import Statistic from "../../Components/Statistics";
import SuccessStories from "../../Components/Success-Stories";
import TestimonialSection from "../../Components/Testimonials";
import PartnerSection from "../../Components/partner";

const Home = () => {
  return (
    
     
//   <header  />
<div>
      <Header />
      <HeroHome />
      <DonationSystem />
      <WorkStation />
      <Statistic />
      <SuccessStories />
      <TestimonialSection />
      <PartnerSection />
<Footer />
</div>
  );
};

export default Home;
