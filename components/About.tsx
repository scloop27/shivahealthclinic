import React from 'react';
import { ArrowUpRight, Heart, Brain, Activity, Stethoscope } from 'lucide-react';

const stats = [
    { value: "300K+", label: "Patients treated w/ care" },
    { value: "97%+", label: "Positive recovery" },
    { value: "20+", label: "Insurances Accepted" },
    { value: "24/7", label: "Active support" },
    { value: "110+", label: "Specialized services" },
    { value: "15+", label: "Years of experience" },
];

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="w-full h-min flex flex-col justify-center items-center py-[52px] bg-white overflow-hidden content-center flex-nowrap gap-[10px] scroll-mt-32"
    >
        <div className="max-w-[1200px] w-full px-[25px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Badge Column */}
            <div className="lg:col-span-2">
                <span className="inline-block px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors cursor-default">
                    About Clinic
                </span>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-10 flex flex-col gap-20">
                {/* Headline */}
                <h2 className="text-3xl md:text-[2.75rem] leading-[1.2] font-medium text-gray-900 tracking-tight">
                    We offer the largest and most advanced medical center        <span className="inline-flex items-center align-middle mx-3 bg-cream px-3 py-1.5 rounded-full gap-3 transform -translate-y-1">
                        <Activity className="w-5 h-5 text-teal" />
                        <Heart className="w-5 h-5 text-teal" />
                        <Brain className="w-5 h-5 text-teal" />
                        <Stethoscope className="w-5 h-5 text-teal" />
                    </span>  in a 100-mile radius, with the resources to offer comprehensive and advanced medical care.
              
                    At the same time, we are in tune with the specific health needs of our region.
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-3 group cursor-default">
                            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-teal transition-colors mb-1" />
                            <span className="text-5xl font-medium text-gray-900 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-gray-500 text-lg font-normal">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;