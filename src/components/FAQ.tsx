'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What markets do you trade?",
      answer: "US30 (Dow Jones), NAS100 (Nasdaq), and Gold (XAUUSD) during the New York session."
    },
    {
      question: "What times are the live sessions?",
      answer: "Every weekday morning, 9:15 AM - 11:00 AM Eastern."
    },
    {
      question: "Do I need experience to join?",
      answer: "No. The education section covers everything from scratch. The signals are easy to follow regardless of experience."
    },
    {
      question: "How do the signals work?",
      answer: "I post exact entry, stop loss, and take profit levels in the Discord and Telegram before the move. The AI bot tracks every result automatically."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Cancel anytime through Whop. No contracts, no commitments."
    },
    {
      question: "What makes EQT different from other trading communities?",
      answer: "Full transparency. Every trade is tracked by AI. I show my wins AND losses. I trade live on camera every morning. No fake screenshots, no rented cars."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 section-alt">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-primary-teal">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="fade-in bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl overflow-hidden glow-border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`text-primary-teal text-2xl transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}