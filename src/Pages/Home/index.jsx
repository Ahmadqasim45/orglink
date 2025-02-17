import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroHome from "../../Components/Hero-Home";
import DonationSystem from "../../Components/Donation-System";
import WorkStation from "../../Components/work-station";
import Statistic from "../../Components/Statistics";
import SuccessStories from "../../Components/Success-Stories";
import TestimonialSection from "../../Components/Testimonials";
import PartnerSection from "../../Components/partner";
import OrganLoader from "../../Components/Loader";

const Home = () => {
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
          <HeroHome />
          <DonationSystem />
          <WorkStation />
          <Statistic />
          <SuccessStories />
          <TestimonialSection />
          <PartnerSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
