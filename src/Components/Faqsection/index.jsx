import React from "react";
import './Faqsection.css';
const FaqSectionPages = ({ title, subText, faqs }) => {
  return (
    <div className="parent-faq mt-5">
      <div className="container">
        <div className="faq-header text-center">
        <p className="gallery__subtitle">{subText}</p>
          <h1 className="gallery__title">{title}</h1>
          
        </div>

        <div className="accordion mt-4" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                  aria-expanded="false"
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                </button>
              </h3>
              <div
                id={`faq-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSectionPages;