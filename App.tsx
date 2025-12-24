import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MeetDoctor from './components/MeetDoctor';
import Services from './components/Services';
import Insurance from './components/Insurance';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import DoctorProfile from './components/DoctorProfile';
import AnimatedSection from './components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <MeetDoctor />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Insurance />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Contact />
      </AnimatedSection>
      <Assistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/nikhil" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;