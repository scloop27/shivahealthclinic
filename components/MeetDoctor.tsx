import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award } from 'lucide-react';

const MeetDoctor: React.FC = () => {
  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image (Alternating layout from Hero) */}
        <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-teal-light aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img 
                src="/2nd.png"
                onError={(e) => {
                    e.currentTarget.src = "/dr.webp";
                }}
                alt="Dr. Nikhil Gohokar" 
                className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent"></div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-sage rounded-[40px] -z-10 hidden lg:block"></div>
        </div>

        {/* Right Column: Content */}
        <div className="order-1 lg:order-2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                <Award className="w-4 h-4 text-teal" />
                <span className="text-sm font-semibold text-gray-700">Medical Director</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sans font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                Dr. Nikhil Gohokar, MD
            </h2>
            <p className="text-2xl text-teal font-serif italic mb-6">
                Board-Certified Family Physician
            </p>

            <div className="flex items-start gap-3 text-gray-500 mb-8 font-medium max-w-sm">
                <MapPin className="w-5 h-5 text-coral shrink-0 mt-1" />
                <span>415 Elsbree St, Ste 201, Fall River, MA</span>
            </div>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Dedicated to providing compassionate, comprehensive care for patients of all ages. Dr. Gohokar focuses on preventative medicine and long-term wellness strategies.
            </p>

            <Link 
                to="/aboutdr.nikhil"
                className="group bg-teal hover:bg-teal-dark text-white rounded-full px-8 py-4 font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
                Know more about Dr. Gohokar's extensive work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default MeetDoctor;