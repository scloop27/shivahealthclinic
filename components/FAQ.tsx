import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How soon can I make an appointment with Dr. Nikhil Gohokar?",
    answer: "Generally, Dr. Nikhil Gohokar has appointments available on Zocdoc within 1 week. You can see Dr. Gohokar's earliest availability on Zocdoc and make an appointment online."
  },
  {
    question: "Is Dr. Nikhil Gohokar accepting new patients?",
    answer: "Dr. Nikhil Gohokar generally accepts new patients on Zocdoc. You can see Dr. Gohokar's earliest availability on Zocdoc and schedule an appointment online."
  },
  {
    question: "Does Dr. Nikhil Gohokar accept my insurance?",
    answer: "Choose your insurance plan to verify if Dr. Gohokar is in-network. We accept most major providers including Blue Cross Blue Shield, UnitedHealthcare, Medicare, and MassHealth."
  },
  {
    question: "Can I make an appointment with Dr. Nikhil Gohokar online?",
    answer: "Yes, you can make an appointment online with Dr. Gohokar using Zocdoc. It’s simple, secure, and free."
  },
  {
    question: "What practice does Dr. Nikhil Gohokar work with?",
    answer: "Dr. Nikhil Gohokar works with Blessings Medical Clinic."
  },
  {
    question: "Where is Dr. Nikhil Gohokar's office located?",
    answer: "Dr. Nikhil Gohokar's primary office is located at 415 Elsbree St, Suite 201, Fall River, MA. Please check our contact section for more details."
  },
  {
    question: "Which board certifications does Dr. Nikhil Gohokar have?",
    answer: "Dr. Nikhil Gohokar is certified by the American Board of Family Medicine."
  },
  {
    question: "What are common reasons for patients to see Dr. Nikhil Gohokar?",
    answer: "Dr. Nikhil Gohokar frequently sees patients for Annual Physical, ENT Consultation, Foot Consultation, Illness, and Psychiatry Consultation. You can see other visit reasons for Dr. Nikhil Gohokar on their profile."
  },
  {
    question: "What languages does Dr. Nikhil Gohokar speak?",
    answer: "Dr. Nikhil Gohokar speaks English and Hindi."
  },
  {
    question: "How do patients rate Dr. Nikhil Gohokar in reviews?",
    answer: "136 patients have reviewed Dr. Nikhil Gohokar. The overall rating for this doctor is 4.76/5. They have a 4.85/5 rating for bedside manner and a 4.57/5 rating for wait time. You can read individual reviews and ratings on their profile."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-6 shadow-sm">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] mb-6">
            Answers to your questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-normal">
            Get quick, clear information about our services, appointments, support, and more
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 last:border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className={`text-xl font-medium transition-colors duration-200 ${openIndex === index ? 'text-teal' : 'text-gray-900 group-hover:text-teal'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-teal text-white rotate-180' : 'bg-teal/10 text-teal'}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 leading-relaxed text-lg pr-12">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;