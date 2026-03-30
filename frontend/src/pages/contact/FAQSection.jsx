import { useState } from "react";

const faqs = [
  {
    q: "How quickly will I get a response?",
    a: "Our team responds to all inquiries within 30 minutes during business hours and within 4 hours outside business hours."
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes! Your first 30-minute consultation with our experts is completely free with no obligation."
  },
  {
    q: "Do you serve international clients?",
    a: "Absolutely! We serve clients from USA, UK, UAE, Australia, Singapore, and 20+ countries worldwide."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, bank transfers, UPI, and international payments via PayPal/Stripe."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.q}
                  </h4>

                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
