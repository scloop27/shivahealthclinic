import React from 'react';
import { Heart, Activity, Truck, Plus, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-6 shadow-sm">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-2xl">
            Comprehensive medical care tailored to your needs
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: 2x2 Grid of Feature Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Primary Care */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#006d77] rounded-[14px] flex items-center justify-center mb-6 text-white shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Care</h3>
              <p className="text-gray-500 leading-relaxed">
                Comprehensive health management, annual physicals, and preventative care for long-term wellness.
              </p>
            </div>

            {/* Card 2: Pain Management */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#006d77] rounded-[14px] flex items-center justify-center mb-6 text-white shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pain Management</h3>
              <p className="text-gray-500 leading-relaxed">
                Specialized joint injections for knee, shoulder, back, hip bursitis, and neck pain relief.
              </p>
            </div>

            {/* Card 3: DOT Physicals */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#006d77] rounded-[14px] flex items-center justify-center mb-6 text-white shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DOT / CDL Physicals</h3>
              <p className="text-gray-500 leading-relaxed">
                Certified medical examinations for commercial drivers to ensure safety and compliance.
              </p>
            </div>

            {/* Card 4: Urgent Care */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-[#006d77] rounded-[14px] flex items-center justify-center mb-6 text-white shrink-0">
                <Plus className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Urgent Care & Addiction</h3>
              <p className="text-gray-500 leading-relaxed">
                Immediate care for illnesses, office-based procedures, and DATA-waived addiction treatment.
              </p>
            </div>
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:col-span-1 bg-[#006d77] rounded-[32px] p-8 relative overflow-hidden flex flex-col text-white min-h-[500px] lg:min-h-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Top Action Button */}
            <div className="relative z-10 mb-8">
               <a href="#contact" className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                 <ArrowRight className="w-5 h-5 text-white" />
               </a>
            </div>

            {/* Content */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl font-semibold mb-4 leading-tight">Expert care close to home</h3>
              <p className="text-teal-100 text-lg opacity-90 leading-relaxed">
                Dr. Gohokar provides specialized medical services tailored to your personal health journey.
              </p>
            </div>

            {/* Image/Phone Mockup */}
            <div className="relative z-10 mt-auto mx-auto w-full max-w-[240px] translate-y-8">
              <div className="relative bg-gray-900 rounded-[30px] border-[6px] border-gray-900 shadow-2xl overflow-hidden aspect-[9/18]">
                 <img 
                    src="/dr.webp" 
                    onError={(e) => {
                        e.currentTarget.src = "/dr.png";
                    }}
                    alt="Dr. Nikhil Gohokar" 
                    className="w-full h-full object-cover"
                 />
                 {/* Glossy Reflection */}
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;