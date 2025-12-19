import React, { useState, useEffect } from 'react';
import { Brain, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Clinic-focused imagery: Consultations, warm interactions, professional environment
  const backgroundImages = [
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2000&auto=format&fit=crop", 
      alt: "Doctor consulting with patient in a calm environment"
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop", 
      alt: "Pediatric checkup with family presence"
    },
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
      alt: "Clinic staff interacting warmly in the hallway"
    },
    {
       src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
       alt: "Attentive listening during medical consultation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <>
      <section id="about" className="relative w-full h-[650px] md:h-[550px] overflow-hidden bg-slate-900">

        {/* 1. Background Image Carousel - Content stays fixed, only images move */}
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear ${
                 index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* 2. Dark Gradient Overlay for Readability */}
        {/* Stronger on the left for text, lighter on right to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30 mix-blend-multiply"></div>

        {/* Additional subtle dark tint to ensure WCAG contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* 3. Fixed Content Overlay */}
        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left pt-10 md:pt-0">

            {/* Label */}
            <div className="mb-6 animate-fade-in">
               <span className="inline-block py-1.5 px-4 rounded-full border border-teal/30 bg-teal/10 backdrop-blur-md text-teal-light text-xs font-bold tracking-[0.2em] uppercase shadow-sm">
                 Core Philosophy
               </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
              Healing the individual to <span className="text-teal-light italic font-serif">transform society.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-gray-200 mb-12 font-light leading-relaxed max-w-xl drop-shadow-md mx-auto md:mx-0">
              We believe healthcare begins with the individual. 
              By nurturing a healthy mind and a healthy body, 
              we create stronger families, healthier communities, and lasting societal change.
            </p>

            {/* Philosophy Pillars */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 text-white/95 justify-center md:justify-start">
               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5 group-hover:bg-teal/20 transition-colors">
                      <Brain className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base">Healthy Mind</span>
               </div>

               <div className="hidden sm:block w-px h-8 bg-white/20"></div>

               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5 group-hover:bg-teal/20 transition-colors">
                      <Heart className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base">Healthy Body</span>
               </div>

               <div className="hidden sm:block w-px h-8 bg-white/20"></div>

               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5 group-hover:bg-teal/20 transition-colors">
                      <Users className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base">Healthy Community</span>
               </div>
            </div>

            {/* One-line reinforcement */}
            <p className="text-sm md:text-base text-gray-400 font-medium italic border-l-2 border-teal pl-4 ml-4 md:ml-0 inline-block">
              True care doesn’t stop at treatment — it extends into everyday life.
            </p>

          </div>
        </div>

      </section>

      {/* Stats Section Integrated Below Philosophy */}
      <div className="bg-white py-16 border-b border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">13+</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Years Experience</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">150+</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">5-Star Reviews</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Global</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Community Impact</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">100%</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Patient Focus</span>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;