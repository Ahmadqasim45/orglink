import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HeroSectionOtherPages from "../../Components/Hero-Other-pages";
import FormSection from "../../Components/Form";
import FaqContact from "../../Components/Faqsection/Faqcontact";
import OrganLoader from "../../Components/Loader";


const ContactUs = () => {
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
          <HeroSectionOtherPages 
            title="Contact Us"
            subText="Orglink saves lives. By becoming an organ donor, you can help people in need and offer hope for a better future. Your generosity can make a life-changing difference."
          />
          <FormSection />
          <FaqContact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ContactUs;
