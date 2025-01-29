import React, { useState } from "react";
import FaqSectionPages from "./index";


const FaqDonner = () => {
  const [faqData] = useState({
    subText: "Find answers to your questions about becoming an organ donor with OrgLink.",
    title: "Donor FAQ",
    
    faqs: [
      {
        question: "What is the process of donating through OrgLink?",
        answer:
          "Donating through OrgLink is simple and secure. Create an account, provide your basic details, and indicate the organs or tissues you wish to donate. The platform guides you through the process step by step.",
      },
      {
        question: "How can I become an organ donor through OrgLink?",
        answer:
          "To become an organ donor, simply create an account on OrgLink, provide your health information, and indicate your willingness to donate organs. Our platform ensures privacy and security of your data.",
      },
      {
        question: "What happens after I register as a donor?",
        answer:
          "Once you register, your profile is securely stored. When an organ is needed, OrgLink matches you with potential recipients based on medical compatibility. You will be notified about the process if you’re a match.",
      },
      {
        question: "Can I choose which organs to donate?",
        answer:
          "Yes, you can specify which organs you are willing to donate. You have full control over your donation preferences, and OrgLink ensures your decisions are respected.",
      },
      {
        question: "How does OrgLink ensure the safety of the donation process?",
        answer:
          "OrgLink follows strict ethical and medical guidelines to ensure all donations are made safely and securely. Our platform is transparent and monitors every step of the process to protect both donors and recipients.",
      },
    ],
  });

  return (
    <FaqSectionPages
      title={faqData.title}
      subText={faqData.subText}
      faqs={faqData.faqs}
    />
  );
};

export default FaqDonner;
