"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "How long does it take to get pre-approved?",
      answer:
        "Most pre-approvals are processed instantly. In rare case, it can take upto 24 hours if additional verification needed",
    },
    {
      question: "Does a pre-approval affect my credit score?",
      answer:
        "A pre-approval typically involves a soft credit check, which doesn't affect your credit score. However, when you formally apply for a mortgage, a hard credit check will be performed.",
    },
    {
      question: "Can I Use it with any bank?",
      answer:
        "Yes, you can use your pre-approval letter with any lender or bank. It demonstrates your creditworthiness and helps streamline the mortgage application process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Got Questions? We've got Answers
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We've answered the most common question about mortgage Pre-approvals
          so you can feel confident and informed
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-2xl border border-green-100 overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-inset"
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 pb-5">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
