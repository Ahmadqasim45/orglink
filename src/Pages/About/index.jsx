

import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherpages from "../../Components/Hero-Other-pages";
import Statistic from "../../Components/Statistics";
import OrglinkAboutSection from "../../Components/Orglink-About-section";
import TransformingAboutSection from "../../Components/Transforming-About";
import SuccessStories from "../../Components/Success-Stories";
import PartnerSection from "../../Components/partner";



const About = () => {
  return (
    
     
//   <header  />
<div>
      <Header />
      <HeroSectionOtherpages 
        title="About Us"
        subText="Orglink saves lives. By becoming an organ donor, you can help people in need and offer hope for a better future. Your generosity can make a life-changing difference."
      />
      <Statistic />
      <OrglinkAboutSection />

    <TransformingAboutSection />
    <SuccessStories />

    <PartnerSection />
     
<Footer />
</div>
  );
};

export default About;
