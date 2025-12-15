import React from 'react';
import { Heart, Brain, Globe, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="w-full py-24 bg-white scroll-mt-32"
    >
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Badge Column */}
            <div className="lg:col-span-2">
                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-teal-dark bg-teal/5 cursor-default">
                    Care Philosophy
                </span>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-10 flex flex-col gap-16">

                {/* Vision Text Content */}
                <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-sans font-medium text-gray-900 tracking-tight leading-[1.15] mb-8">
                        Healing the individual to <span className="text-teal font-serif italic">transform society</span>.
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-4xl">
                        <p>
                            Currently, our healthcare system faces significant challenges. Despite spending more on healthcare than any other nation, our investment is not translating into better overall health for our society. 
                        </p>
                        <p>
                            Dr. Gohokar envisions a transformative shift. We believe that true, complete health lies in nurturing both a <strong className="text-gray-800 font-semibold">healthy mind</strong> and a <strong className="text-gray-800 font-semibold">healthy body</strong>. 
                        </p>
                    </div>

                    {/* Care Philosophy Flow */}
                    <div className="mt-12 p-8 bg-gray-50/50 rounded-3xl border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-8 text-center md:text-left">Our Care Philosophy</h3>

                        <div className="flex flex-col md:flex-row items-center justify-start gap-4 select-none">
                            {/* Healthy Mind - Outlined */}
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-medium w-full md:w-auto justify-center">
                                <Brain className="w-5 h-5 text-teal" strokeWidth={2} /> 
                                <span>Healthy Mind</span>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-gray-300 rotate-90 md:rotate-0 shrink-0" />

                            {/* Healthy Body - Outlined */}
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-medium w-full md:w-auto justify-center">
                                <Heart className="w-5 h-5 text-teal" strokeWidth={2} /> 
                                <span>Healthy Body</span>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-gray-300 rotate-90 md:rotate-0 shrink-0" />

                            {/* Healthy Society - Filled (Outcome) */}
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-teal text-white font-bold shadow-lg shadow-teal/10 w-full md:w-auto justify-center border border-transparent">
                                <Globe className="w-5 h-5 text-white" strokeWidth={2} /> 
                                <span>Healthy Society</span>
                            </div>
                        </div>

                        {/* Explanatory Sentence */}
                        <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left">
                            By strengthening the individual first, we empower them to uplift their family, extend wellness into their community, and inspire a broader societal change.
                        </p>
                    </div>
                </div>

                {/* Stats / Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
                     <div className="flex flex-col gap-1">
                        <span className="text-4xl font-semibold text-gray-900 tracking-tight">13+</span>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">Years Experience</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-4xl font-semibold text-gray-900 tracking-tight">150+</span>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">5-Star Reviews</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-4xl font-semibold text-gray-900 tracking-tight">Global</span>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">Community Impact</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-4xl font-semibold text-gray-900 tracking-tight">100%</span>
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">Patient Focus</span>
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;