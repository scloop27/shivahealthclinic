import React from 'react';
import { Star, Quote, Phone, Calendar } from 'lucide-react';

const reviews = [
  {
    text: "Doctor was extremely patient with me. I was so comfortable with him. He understood my reason for my appointment and I am so happy I picked him as my PCP since moving back to Massachusetts",
    author: "Ana F.",
    date: "Nov 18, 2025",
    initial: "A"
  },
  {
    text: "He was very responsive and action oriented, immediately gave me a referral for a G.I doctor because of my GERD and hiatal hernia, and ordered blood work, listened to my concerns and explained previous diagnoses that other doctors didn't bother to explain. Highly recommend him!!!!",
    author: "Tatiana M.",
    date: "Nov 7, 2025",
    initial: "T"
  },
  {
    text: "Excellent I was seeing right away the office contacted me ahead of time so they could be prepared for my appointment and the doctor sent prescriptions in immediately and also scheduled a follow-up so I would highly recommend him",
    author: "Rachel D.",
    date: "Oct 27, 2025",
    initial: "R"
  },
  {
    text: "Dr. Gohokar was very friendly and informational, had a great visit.",
    author: "Michael B.",
    date: "Nov 15, 2025",
    initial: "M"
  },
  {
    text: "Very caring understanding and clearly conveyed his suggestions",
    author: "Ronald K.",
    date: "Nov 2, 2025",
    initial: "R"
  },
  {
    text: "Excellent care!",
    author: "Glenn A.",
    date: "Recent Visit",
    initial: "G"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-white shadow-sm mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-3xl">
            What our patients say about their care experience
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-normal">
            Real stories and honest reviews from those we've had the privilege to serve.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[24px] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#FF9E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Text */}
              <div className="mb-8 flex-grow relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal/10 -z-10 transform -scale-x-100" />
                <p className="text-gray-600 leading-relaxed font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center text-lg shrink-0 mr-3">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                  <p className="text-xs text-gray-400 font-medium">Verified Patient • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Your Visit Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
                href="tel:617-251-5065"
                className="bg-teal hover:bg-teal-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
                <Phone className="w-5 h-5" />
                Call to Schedule Your Visit
            </a>
            <a 
                href="#contact"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
                <Calendar className="w-5 h-5 text-teal" />
                Contact Us
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
