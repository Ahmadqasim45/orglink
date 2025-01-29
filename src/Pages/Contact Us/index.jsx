

import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherPages from "../../Components/Hero-Other-pages";
import FormSection from "../../Components/Form";
import FaqContact from "../../Components/Faqsection/Faqcontact";





const ContactUs = () => {
  return (
    
     
//   <header  />
<div>
      <Header />
      <HeroSectionOtherPages 
        title="Contact Us"
        subText="Orglink saves lives. By becoming an organ donor, you can help people in need and offer hope for a better future. Your generosity can make a life-changing difference.

"
      />
      <FormSection />
      <FaqContact />
  
     
<Footer />
</div>
  );
};

export default ContactUs;
