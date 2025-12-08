import React from 'react';
import { INSURANCE_PLANS } from '../constants';
import { ShieldCheck, Check } from 'lucide-react';

const Insurance: React.FC = () => {
  return (
    <section id="insurance" className="py-24 bg-white border-t border-gray-50 scroll-mt-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-6 shadow-sm">
            Coverage
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-2xl mb-6">
            We accept most major insurance plans
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-normal leading-relaxed">
            We believe quality healthcare should be accessible. If you don't see your plan listed, please call us to verify coverage.
          </p>
        </div>
        
        {/* Insurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INSURANCE_PLANS.map((plan) => (
                <div key={plan.name} className="group flex flex-col p-6 rounded-[20px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,109,119,0.1)] hover:border-teal/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-teal/5 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Check className="w-5 h-5 text-teal" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{plan.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{plan.type}</p>
                </div>
            ))}
        </div>

        {/* Disclaimer / Additional Info */}
        <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm italic bg-gray-50 inline-block px-6 py-3 rounded-full">
                * Please check with your provider to verify your specific plan coverage and copay before your visit.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Insurance;