"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Toingg?",
    answer:
      "Toingg is a conversational AI platform that enables businesses to create and deploy voice-enabled virtual agents for customer service, sales, and other applications.",
  },
  {
    id: 2,
    question: "Why is Toingg better than others?",
    answer:
      "Toingg offers advanced features such as ultra-fast response, smart interruption management, and advanced memory recall, making it superior to other conversational AI platforms.",
  },
  {
    id: 3,
    question: "Does Toingg support your existing database?",
    answer:
      "Yes, Toingg can integrate with your existing database and other systems through APIs, allowing your virtual agents to access customer records and knowledge bases in real-time.",
  },
  {
    id: 4,
    question: "How does Toingg ensure security?",
    answer:
      "Toingg follows industry-standard security protocols and employs advanced encryption techniques to ensure the security and privacy of your data.",
  },
  {
    id: 5,
    question: "What is Toingg’s pricing model?",
    answer:
      "Toingg offers flexible pricing plans based on the number of virtual agents and the level of support required. Contact us for more details.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (id:any) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="mx-[300px] my-[30px] w-[90%] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-lg ">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-6 md:border md:border-black md:rounded-xl md:p-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(faq.id)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === faq.id ? "-" : "+"}
              </span>
            </div>
            {activeIndex === faq.id && (
              <div className="mt-2">
                <p className="text-base">{faq.answer}</p>
              </div>
            )}
            {faq.id !== faqs.length && <hr className="my-4 md:hidden" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
