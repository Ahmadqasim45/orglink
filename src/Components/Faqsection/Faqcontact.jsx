import React, { useState } from "react";
import FaqSectionPages from "./index";

const FaqContact = () => {
  const [faqData] = useState({
    subText: "Find answers to your questions about contacting OrgLink for support and inquiries.",
    title: "Contact FAQ",
    
    faqs: [
      {
        question: "How can I contact OrgLink for support?",
        answer:
          "You can reach out to OrgLink via our official website's contact form, email, or phone support. Our team is available to assist you with any inquiries.",
      },
      {
        question: "What are OrgLink's customer support hours?",
        answer:
          "Our customer support is available Monday to Friday, from 9 AM to 6 PM. Emergency support may be available for urgent cases.",
      },
      {
        question: "How long does it take to receive a response from OrgLink?",
        answer:
          "We strive to respond to all inquiries within 24 to 48 hours. Urgent matters are prioritized to ensure timely assistance.",
      },
      {
        question: "Can I visit OrgLink's office for assistance?",
        answer:
          "Yes, you can visit our office during working hours. We recommend scheduling an appointment in advance for personalized support.",
      },
      {
        question: "What information should I provide when contacting support?",
        answer:
          "Please include your full name, contact details, and a clear description of your inquiry to help us assist you more efficiently.",
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

export default FaqContact;