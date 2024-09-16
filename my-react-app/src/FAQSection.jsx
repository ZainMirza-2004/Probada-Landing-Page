
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <img
          loading="lazy"
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/fa228e310031d34531d629528addb20cc709fc6ef18253d1b3175156a0a27514?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/8bda69436ddaccc4c9a8d1709b52815e1ba06ee2a0851604a0c2ec8477ed1e2f?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&"
          }
          className="faq-icon"
          alt=""
        />
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQSection;
