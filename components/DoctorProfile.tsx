import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Stethoscope, Award, Calendar, Briefcase, Globe, ScrollText, Users, HeartHandshake, Heart, BookOpen, Syringe, TrendingDown, Building, Phone } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen animate-fade-in font-sans text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="group flex items-center text-gray-600 hover:text-teal font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* SECTION 1: HERO HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="relative shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-amber-400/30 shadow-2xl relative z-10">
                <img 
                  src="/dr.webp"
                  onError={(e) => {
                    e.currentTarget.src = "/dr.png";
                  }}
                  alt="Dr. Nikhil Gohokar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-amber-400/20 scale-110 z-0 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                12+ Years
              </div>
            </div>

            {/* Headline Info */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold mb-4 border border-amber-500/30">
                <Award className="w-4 h-4" /> Board-Certified Family Physician
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">Dr. Nikhil Gohokar</h1>
              <p className="text-xl md:text-2xl text-amber-300 font-medium mb-2">President, My Village My Dream Foundation</p>
              <p className="text-3xl md:text-4xl font-serif italic text-teal-200 mb-8">"Compassionate Local Care. Deep Global Impact."</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
                <span className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
                  <Globe className="w-4 h-4 mr-2 text-amber-400"/> English, Hindi, Marathi, Urdu
                </span>
                <span className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
                  <ScrollText className="w-4 h-4 mr-2 text-amber-400"/> NRCME Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NARRATIVE BIO */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-semibold mb-4">About Dr. Gohokar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Physician With Purpose</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p className="text-xl leading-relaxed">
              Dr. Nikhil Gohokar is a Board-Certified Family Physician and NRCME-certified provider with over 12 years of experience in primary care, urgent care, hospitalist services, and addiction treatment (DATA-waived). He has dedicated his career to improving patient outcomes through innovative clinical models, preventive care, and community-focused initiatives.
            </p>
            <p>
              In addition to his clinical work, Dr. Gohokar has significant experience in healthcare administration, research, and education. He has served as a Pod Lead at Brockton Neighborhood Health Center, designed value-based care programs like the <strong className="text-teal">ER Can Wait</strong> initiative, and contributed to research in neurology at Henry Ford Hospital.
            </p>
            <p>
              Dr. Gohokar is also deeply committed to global community health. As the President of <strong className="text-amber-600">My Village My Dream Foundation</strong>, a nonprofit organization in Chandrapur, India, he leads programs in health, education, and socioeconomic development for underserved populations. Through initiatives like village mini clinics, alcohol cessation programs, and educational support for children, he has positively impacted thousands of lives in rural communities.
            </p>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-teal/5 via-amber-50/50 to-teal/5 border-l-4 border-amber-500 pl-6 py-6 pr-6 rounded-r-2xl">
            <p className="text-xl italic text-gray-700 font-serif leading-relaxed">
              "Fluent in English, Hindi, Marathi, and Urdu, Dr. Gohokar combines cross-cultural communication skills with a patient-centered approach. He is passionate about creating sustainable, high-impact healthcare solutions that empower individuals and communities alike."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MISSION - COMMUNITY & GLOBAL IMPACT */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">The Heart of the Practice</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Global & Community Mission</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Dr. Gohokar's work extends far beyond the clinic walls, touching lives across continents through innovative healthcare and education initiatives.</p>
          </div>

          {/* Subsection A: My Village My Dream - India */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">My Village My Dream</h3>
                <p className="text-amber-400 font-medium">Impact in India</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-10 max-w-3xl">
              Dr. Gohokar is deeply committed to global community health as the President of My Village My Dream Foundation in Chandrapur, India. He leads programs in health, education, and socioeconomic development for underserved populations, impacting thousands of lives.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Card 1: Health Screenings */}
              <div className="group bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-teal-900/50 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent"></div>
                  <div className="text-center z-10">
                    <HeartHandshake className="w-16 h-16 text-teal-400 mx-auto mb-2" />
                    <span className="text-sm text-teal-300 font-medium">Village Health Screening</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Stethoscope className="w-5 h-5 text-amber-400" />
                    <h4 className="text-lg font-bold text-white">Village Mini Clinics</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Screening 9,500 people for BP, diabetes, and malnutrition across 7 villages. Diagnosed 900 new patients with hypertension or diabetes.</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full">7 Villages</span>
                    <span className="text-xs bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full">9,500+ Screened</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Joint Injection Camps */}
              <div className="group bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-amber-900/30 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
                  <div className="text-center z-10">
                    <Syringe className="w-16 h-16 text-amber-400 mx-auto mb-2" />
                    <span className="text-sm text-amber-300 font-medium">Pain Relief Program</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-amber-400" />
                    <h4 className="text-lg font-bold text-white">Joint Injection Camps</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Providing long-term pain relief in underserved areas through specialized camps in Pandharkawda.</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full">2014, 2018, 2023, 2024</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Education & Wellness */}
              <div className="group bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-emerald-900/30 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
                  <div className="text-center z-10">
                    <BookOpen className="w-16 h-16 text-emerald-400 mx-auto mb-2" />
                    <span className="text-sm text-emerald-300 font-medium">Education & Wellness</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-bold text-white">Education & Wellness Programs</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Tuition programs with 30 teachers across 10 villages. Breathing exercises (SKY) program teaching stress management to 2,000+ students.</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full">30 Teachers</span>
                    <span className="text-xs bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full">2,000+ Students</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Alcohol Cessation */}
              <div className="group bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                  <div className="text-center z-10">
                    <Users className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                    <span className="text-sm text-purple-300 font-medium">Community Support</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <HeartHandshake className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">Alcohol Cessation Program</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Implemented with Alcoholics Anonymous in Vihirgaon, helping participants successfully quit alcohol through community support.</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">AA Partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsection B: Innovation at Home (USA) */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Innovation at Home</h3>
                <p className="text-teal-400 font-medium">Impact in the USA</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-900/50 via-slate-800 to-teal-900/50 rounded-3xl p-8 md:p-12 border border-teal-700/50">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/20 rounded-full text-teal-300 text-sm font-bold mb-4">
                    <TrendingDown className="w-4 h-4" /> Value-Based Care Success
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">ER Can Wait Program</h4>
                  <p className="text-gray-300 text-lg mb-6">
                    A groundbreaking value-based care program designed to reduce emergency department visits through proactive patient management and coordinated care.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
                      <div className="text-4xl font-bold text-amber-400 mb-1">78%</div>
                      <div className="text-sm text-gray-400">Reduction in ED Visits</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
                      <div className="text-4xl font-bold text-teal-400 mb-1">78%</div>
                      <div className="text-sm text-gray-400">Fewer Hospital Admissions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Presented as a "Great Session" at the Massachusetts League of Community Health Centers Conference, May 2024</span>
                  </div>
                </div>
                <div className="lg:w-80 shrink-0">
                  <div className="aspect-square bg-gradient-to-br from-teal-800/50 to-slate-900 rounded-3xl flex items-center justify-center relative overflow-hidden border border-teal-700/30">
                    <div className="text-center p-6">
                      <TrendingDown className="w-20 h-20 text-teal-400 mx-auto mb-4" />
                      <span className="text-lg text-teal-300 font-bold">ER Can Wait</span>
                      <p className="text-sm text-gray-400 mt-2">Team Achievement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Outreach */}
            <div className="mt-8 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Sharon Town Health Awareness Initiative</h5>
                  <p className="text-gray-400 text-sm">Youth substance abuse education and community health awareness programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL FOUNDATIONS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-semibold mb-4">Credentials & Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Foundations</h2>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-teal mr-3" /> Experience Timeline
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-amber-400 to-sage"></div>
              
              <div className="space-y-8">
                {/* Present */}
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full mb-3">PRESENT</span>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900">President, My Village My Dream Foundation</h4>
                        <p className="text-sm text-gray-500">Leading health, education, and development programs in India</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Owner/Provider, Blessings Medical Clinic</h4>
                        <p className="text-sm text-gray-500">Fall River, MA | June 2024 – Present</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Primary Care/Urgent Care Physician</h4>
                        <p className="text-sm text-gray-500">Brockton Neighborhood Health Center | July 2012 – Present</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Past Experience */}
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-3">10+ YEARS</span>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900">Hospitalist (Per Diem)</h4>
                        <p className="text-sm text-gray-500">Brockton Hospital, Brockton, MA | Feb 2013 – Jan 2023</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Pod Lead</h4>
                        <p className="text-sm text-gray-500">Brockton Neighborhood Health Center | 2014 – 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-teal mr-3" /> Education & Training
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal/20 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Family Medicine Residency</h4>
                <p className="text-sm text-gray-600 mb-3">Wayne State University / Crittenton Hospital, MI</p>
                <span className="text-xs text-gray-400 font-mono">2009 – 2012</span>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-200/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">M.S. Healthcare Administration</h4>
                <p className="text-sm text-gray-600 mb-3">Midwestern State University, TX & Oklahoma City University</p>
                <span className="text-xs text-gray-400 font-mono">2005 – 2008</span>
              </div>

              <div className="bg-gradient-to-br from-sage/20 to-white p-6 rounded-2xl border border-sage/30 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-sage" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">MBBS</h4>
                <p className="text-sm text-gray-600 mb-3">Government Medical College, Nagpur, India</p>
                <span className="text-xs text-gray-400 font-mono">1999 – 2005</span>
              </div>
            </div>
          </div>

          {/* Licensure & Awards Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Licensure */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ScrollText className="w-5 h-5 text-teal mr-2" /> Licensure & Expertise
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Award, text: "Board-Certified Family Physician" },
                  { icon: ScrollText, text: "Physician Licence – Massachusetts" },
                  { icon: Heart, text: "DATA-waived Buprenorphine (Suboxone) Prescriber" },
                  { icon: Briefcase, text: "Certified Medical Examiner (FMCSA)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 text-amber-500 mr-2" /> Honors & Awards
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Graduate Merit Scholarship", org: "Midwestern State University" },
                  { title: "Best Intern Nominee", org: "Government Medical College" },
                  { title: "Top 20% of Class", org: "Government Medical College" },
                  { title: "Academic Scholarships", org: "Government Medical College (1999–2004)" }
                ].map((award, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-white p-4 rounded-xl border border-amber-100">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium block">{award.title}</span>
                      <span className="text-sm text-gray-500">{award.org}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience Compassionate Care</h3>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Dr. Gohokar is currently accepting new patients at Blessings Medical Clinic. Experience healthcare from a physician who truly listens and cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:617-251-5065" 
              className="inline-flex items-center justify-center bg-white text-teal font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 617-251-5065
            </a>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center bg-amber-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-amber-400 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
