import React, { useState } from "react";
import FaqSectionPages from "./index";


const FaqRecipient = () => {
  const [faqData] = useState({
    subText: "Find answers to your questions about receiving an organ transplant with OrgLink.",
    title: "Recipient FAQ",
    
    faqs: [
      {
        question: "How does OrgLink match recipients with donors?",
        answer:
          "OrgLink uses advanced algorithms to match recipients with suitable donors based on medical compatibility, urgency, and ethical considerations. The process ensures fairness and efficiency in organ allocation.",
      },
      {
        question: "What are the eligibility criteria for receiving an organ?",
        answer:
          "Eligibility is based on various factors including medical condition, severity of illness, and compatibility with available donors. A transplant specialist will assess your case to determine if you qualify.",
      },
      {
        question: "How long does it take to receive a transplant?",
        answer:
          "The waiting time varies based on organ availability, compatibility, and medical urgency. OrgLink continuously updates recipients about their status and potential matches.",
      },
      {
        question: "What should I do while waiting for a transplant?",
        answer:
          "Follow your doctor’s advice, maintain a healthy lifestyle, and keep your medical records updated. Staying prepared improves your chances of a successful transplant when an organ becomes available.",
      },
      {
        question: "What is the recovery process after receiving an organ?",
        answer:
          "Recovery depends on the type of transplant and individual health. It usually involves post-surgery monitoring, medication, and lifestyle adjustments. OrgLink provides guidance to help recipients adapt to their new organ.",
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

export default FaqRecipient;
