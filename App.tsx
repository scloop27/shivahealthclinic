import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'doctor'>('home');

  if (currentView === 'doctor') {
    return <DoctorProfile onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MeetDoctor onKnowMore={() => setCurrentView('doctor')} />
      <Services />
      <Insurance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Assistant />
    </div>
  );
};

export default App;