import React, { useState } from "react";  // Add useState here
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherpages from "../../Components/Hero-Other-pages";
import Statistic from "../../Components/Statistics";
import OrglinkAboutSection from "../../Components/Orglink-About-section";
import TransformingAboutSection from "../../Components/Transforming-About";
import SuccessStories from "../../Components/Success-Stories";
import PartnerSection from "../../Components/partner";
import OrganLoader from "../../Components/Loader";


const About = () => {
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
            title="About Us"
            subText="Orglink saves lives. By becoming an organ donor, you can help people in need and offer hope for a better future. Your generosity can make a life-changing difference."
          />
          <Statistic />
          <div className="set-alignment-container">
          <OrglinkAboutSection />
          </div>
          <TransformingAboutSection />
          <SuccessStories />
          <PartnerSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
