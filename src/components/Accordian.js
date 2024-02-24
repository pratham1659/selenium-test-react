import React, { useState } from "react";
import { faqs } from "../api/data";
import { Toaster, toast } from "react-hot-toast";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
    toast.success(`Accordion ${index + 1} clicked!`);
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
    <>
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} index={index} />
        ))}
      </ul>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Accordion;
