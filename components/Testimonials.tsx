import React from 'react';
import { Star, Quote, Phone, Heart, Activity } from 'lucide-react';

// Define types for our grid items
type ReviewItem = {
  type: 'review';
  text: string;
  author: string;
  date: string;
  initial: string;
};

type ImageItem = {
  type: 'image';
  src: string;
  alt: string;
  label: string;
  icon: React.ReactNode;
};

type GridItem = ReviewItem | ImageItem;

const items: GridItem[] = [
  {
    type: 'review',
    text: "Doctor was extremely patient with me. I was so comfortable with him. He understood my reason for my appointment and I am so happy I picked him as my PCP since moving back to Massachusetts",
    author: "Ana F.",
    date: "Nov 18, 2025",
    initial: "A"
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    alt: "Happy patient exercising outdoors",
    label: "Active Living",
    icon: <Activity className="w-5 h-5" />
  },
  {
    type: 'review',
    text: "He was very responsive and action oriented, immediately gave me a referral for a G.I doctor because of my GERD and hiatal hernia, and ordered blood work, listened to my concerns... Highly recommend him!!!!",
    author: "Tatiana M.",
    date: "Nov 7, 2025",
    initial: "T"
  },
  {
    type: 'review',
    text: "Excellent I was seeing right away the office contacted me ahead of time so they could be prepared for my appointment and the doctor sent prescriptions in immediately.",
    author: "Rachel D.",
    date: "Oct 27, 2025",
    initial: "R"
  },
  {
    type: 'image',
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    alt: "Portrait of a smiling woman",
    label: "Compassionate Care",
    icon: <Heart className="w-5 h-5" />
  },
  {
    type: 'review',
    text: "Dr. Gohokar was very friendly and informational, had a great visit. Very caring understanding and clearly conveyed his suggestions.",
    author: "Michael B.",
    date: "Nov 15, 2025",
    initial: "M"
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-fr">
          {items.map((item, index) => {
            if (item.type === 'image') {
              return (
                <div 
                  key={index}
                  className="relative group rounded-[24px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full min-h-[320px]"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>

                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center gap-2 mb-2 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.icon}
                      {item.label}
                    </div>
                    <p className="font-serif italic text-lg opacity-95">"Wellness for life"</p>
                  </div>
                </div>
              );
            }

            return (
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
                    "{item.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center text-lg shrink-0 mr-3">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-400 font-medium">Verified Patient • {item.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Booking CTA */}
        <div className="flex justify-center">
            <a 
                href="#contact" 
                className="bg-teal hover:bg-teal-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group transform hover:scale-105"
            >
                Schedule Your Visit Today
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;