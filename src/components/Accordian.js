import React, { useState } from "react";
import { faqs } from "../api/data";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const AccordionItem = ({ faq, index }) => {
    const { question, answer } = faq;
    const isOpen = index === openIndex;
    return (
      <div>
        <div className="accordianStyle">
          <li className={`accordion_item ${isOpen ? "open" : ""}`} onClick={() => toggleAccordion(index)}>
            <button className="button">
              {question}
              <span className="control">{isOpen ? " —" : " +"}</span>
            </button>
            {isOpen && (
              <div className="answer_wrapper">
                <div className="answer">{answer}</div>
              </div>
            )}
          </li>
        </div>
      </div>
    );
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} index={index} />
      ))}
    </ul>
  );
};

export default Accordion;
