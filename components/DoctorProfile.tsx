import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Stethoscope, Award, Calendar, Briefcase, Globe, ScrollText, Users, HeartHandshake } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  // Scroll to top when mounted
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

      {/* Hero Header */}
      <section className="bg-cream pt-16 pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="relative shrink-0">
               <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl relative z-10">
                <img 
                    src="/dr.webp"
                    onError={(e) => {
                        e.currentTarget.src = "/dr.png";
                    }}
                    alt="Dr. Nikhil Gohokar" 
                    className="w-full h-full object-cover"
                />
               </div>
               {/* Decorative Ring */}
               <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-teal/20 scale-110 z-0 animate-pulse-slow"></div>
            </div>

            {/* Headline Info */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-bold mb-4">
                <Award className="w-4 h-4" /> Board-Certified Family Physician
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">Dr. Nikhil Gohokar, MD</h1>
              <p className="text-xl md:text-2xl text-teal font-serif italic mb-6">Primary Care & Urgent Care Provider</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium text-gray-600">
                 <span className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><Briefcase className="w-4 h-4 mr-2 text-teal"/> 12+ Years Experience</span>
                 <span className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><Globe className="w-4 h-4 mr-2 text-teal"/> English, Hindi, Marathi, Urdu</span>
                 <span className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"><ScrollText className="w-4 h-4 mr-2 text-teal"/> NRCME Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* About / Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Stethoscope className="w-8 h-8 text-teal mr-3" /> About Dr. Gohokar
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                    <p>
                        Dr. Nikhil Gohokar is a Board-Certified Family Physician and NRCME-certified provider with over 12 years of experience in primary care, urgent care, hospitalist services, and addiction treatment (DATA-waived). He has dedicated his career to improving patient outcomes through innovative clinical models, preventive care, and community-focused initiatives.
                    </p>
                    <p>
                        In addition to his clinical work, Dr. Gohokar has significant experience in healthcare administration, research, and education. He has served as a Pod Lead at Brockton Neighborhood Health Center, designed value-based care programs like the ER Can Wait initiative, and contributed to research in neurology at Henry Ford Hospital.
                    </p>
                    <p>
                        Dr. Gohokar is also deeply committed to global community health. He is the President of <strong>My Village My Dream Foundation</strong>, a nonprofit organization in Chandrapur, India, where he leads programs in health, education, and socioeconomic development for underserved populations. Through initiatives like village mini clinics, alcohol cessation programs, and educational support for children, he has positively impacted thousands of lives in rural communities.
                    </p>
                    <p className="italic border-l-4 border-teal pl-4 bg-gray-50 py-2 rounded-r-lg">
                        "Fluent in English, Hindi, Marathi, and Urdu, Dr. Gohokar combines cross-cultural communication skills with a patient-centered approach. He is passionate about creating sustainable, high-impact healthcare solutions that empower individuals and communities alike."
                    </p>
                </div>
            </div>
            
            {/* Quick Summary Box */}
            <div className="lg:col-span-1">
                <div className="bg-sage/10 rounded-3xl p-8 border border-sage/20 h-full">
                    <h3 className="text-xl font-bold text-teal-dark mb-4">Professional Summary</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0"></div>
                            <p className="text-sm text-gray-700">Board-certified family physician with extensive experience in primary care, urgent care, hospitalist services, and addiction treatment.</p>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0"></div>
                            <p className="text-sm text-gray-700">Experienced leader in healthcare administration, community health initiatives, and nonprofit development.</p>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0"></div>
                            <p className="text-sm text-gray-700">Committed to improving patient outcomes through innovative clinical models, preventive care, and education.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Experience & Education Grid */}
        <section className="grid md:grid-cols-2 gap-12">
            
            {/* Experience Column */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center border-b border-gray-100 pb-4">
                    <Briefcase className="w-6 h-6 text-teal mr-3" /> Employment Experience
                </h3>
                <div className="space-y-8 pl-2">
                    {[
                        { role: "Primary Care / Urgent Care Provider", company: "Blessings Medical Clinic, Fall River, MA", date: "June 2024 – Present" },
                        { role: "Primary Care / Urgent Care / DATA-waived Physician", company: "Brockton Neighborhood Health Center, MA", date: "July 2012 – Present" },
                        { role: "Hospitalist (Per Diem)", company: "Brockton Hospital, Brockton, MA", date: "Feb 2013 – Jan 2023" },
                        { role: "Graduate Teaching Assistant", company: "Midwestern State University, TX", date: "May 2006 – May 2008" },
                        { role: "Clinical Intern", company: "Government Medical College, Nagpur, India", date: "Jan 2004 – Jan 2005" }
                    ].map((job, idx) => (
                        <div key={idx} className="relative pl-8 border-l-2 border-gray-200 hover:border-teal transition-colors group">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-teal transition-colors"></div>
                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{job.role}</h4>
                            <p className="text-teal font-medium mb-1">{job.company}</p>
                            <p className="text-sm text-gray-500 font-mono uppercase tracking-wide">{job.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Column */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center border-b border-gray-100 pb-4">
                    <GraduationCap className="w-6 h-6 text-teal mr-3" /> Education
                </h3>
                <div className="space-y-6">
                    {[
                        { degree: "Family Medicine Residency", school: "Wayne State University / Crittenton Hospital, MI", date: "July 2009 – June 2012" },
                        { degree: "Master of Science in Healthcare Administration", school: "Midwestern State University, TX", date: "Jan 2006 – May 2008" },
                        { degree: "Master of Science in Healthcare Administration", school: "Oklahoma City University, OK", date: "Aug – Dec 2005" },
                        { degree: "MBBS", school: "Government Medical College, Nagpur, India", date: "July 1999 – May 2005" }
                    ].map((edu, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.school}</p>
                            <p className="text-xs text-gray-400 mt-2 font-mono">{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Community & Global Impact - Highlight Section */}
        <section className="bg-teal/5 rounded-[40px] p-8 md:p-12">
            <h3 className="text-3xl font-bold text-teal-dark mb-10 text-center flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3" /> Community Work & Global Initiatives
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center text-white mb-4"><HeartHandshake className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">My Village My Dream Foundation</h4>
                    <p className="text-sm text-gray-600 mb-2">President | Dec 2024 – Present</p>
                    <p className="text-sm text-gray-500">Implemented health, education, and income improvement programs in underserved villages in India. Created a 9-member core team for structured NGO operations.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center text-white mb-4"><Users className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">Village Mini Clinics</h4>
                    <p className="text-sm text-gray-600 mb-2">Chandrapur District, India</p>
                    <p className="text-sm text-gray-500">Screening & monitoring for BP, diabetes, malnutrition in 7 villages; reaching 9,500 people. Diagnosed 900 new patients with hypertension or diabetes.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center text-white mb-4"><Stethoscope className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">Joint Injection Camps</h4>
                    <p className="text-sm text-gray-600 mb-2">Pandharkawda, India</p>
                    <p className="text-sm text-gray-500">Provided long-term pain relief in underserved areas through specialized camps in 2014, 2018, 2023, and 2024.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center text-white mb-4"><Briefcase className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">ER Can Wait Initiative</h4>
                    <p className="text-sm text-gray-600 mb-2">Brockton Neighborhood Health Center</p>
                    <p className="text-sm text-gray-500">Value-based care program reducing ED visits and hospital admissions by 78%; presented at MA League of Community Health Centers Conference.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center text-white mb-4"><Award className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">Alcohol Cessation Program</h4>
                    <p className="text-sm text-gray-600 mb-2">Vihirgaon, India</p>
                    <p className="text-sm text-gray-500">Implemented with Alcoholics Anonymous; helping participants successfully quit alcohol through community support.</p>
                </div>

                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10">
                    <div className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center text-white mb-4"><GraduationCap className="w-6 h-6"/></div>
                    <h4 className="font-bold text-lg mb-2">Education Support</h4>
                    <p className="text-sm text-gray-600 mb-2">Student & Teacher Programs</p>
                    <p className="text-sm text-gray-500">Teaching stress management to 2,000+ students. Partnered with Pahel NGO to enhance education quality in 10 villages.</p>
                </div>
            </div>
        </section>

        {/* Licenses, Awards, & Leadership */}
        <section className="grid md:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <ScrollText className="w-5 h-5 text-teal mr-2" /> Licensure & Certification
                </h3>
                <ul className="space-y-3">
                    {[
                        "Physician Licence – Massachusetts",
                        "Controlled Substance License – Massachusetts",
                        "DATA-waived Buprenorphine (Suboxone) Prescriber",
                        "Certified Medical Examiner – Federal Motor Carrier Safety Administration"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-teal mt-2 mr-3 shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 text-teal mr-2" /> Leadership & Committees
                </h3>
                 <ul className="space-y-3">
                    {[
                        "President, My Village My Dream Foundation",
                        "Owner, Blessings Medical Clinic",
                        "Pod Lead, Brockton Neighborhood Health Center (2014-2025)",
                        "Incident Command, Technological Disruption Event (2024)",
                        "Code Committee | BNHC",
                        "Practice Transformation Committee | BNHC"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                             <span className="w-2 h-2 rounded-full bg-sage mt-2 mr-3 shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-5 h-5 text-teal mr-2" /> Honors & Awards
                </h3>
                 <ul className="space-y-4">
                    {[
                        { title: "Graduate Merit Scholarship", org: "Midwestern State University", year: "2006" },
                        { title: "Best Intern Nominee", org: "Government Medical College", year: "2004" },
                        { title: "Top 20% of Class", org: "Government Medical College", year: "2003" },
                        { title: "Academic Scholarships", org: "Government Medical College", year: "1999–2004" }
                    ].map((award, i) => (
                        <li key={i} className="bg-gray-50 px-4 py-3 rounded-lg flex justify-between items-center border border-gray-100">
                            <span className="font-medium text-gray-800">{award.title}</span>
                            <span className="text-sm text-gray-500">{award.year}</span>
                        </li>
                    ))}
                </ul>

                 <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6 flex items-center">
                    <Users className="w-5 h-5 text-teal mr-2" /> Professional Societies
                </h3>
                <div className="flex items-center gap-3 bg-white p-4 border border-gray-100 rounded-lg shadow-sm">
                    <div className="bg-teal/10 p-2 rounded-full text-teal font-bold">MMS</div>
                    <div>
                        <p className="font-bold text-gray-900">Massachusetts Medical Society</p>
                        <p className="text-sm text-gray-500">Member since 2012</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <div className="bg-teal rounded-3xl p-8 md:p-16 text-center text-white mt-12 shadow-xl">
             <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
             <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to prioritize your health?</h3>
             <p className="text-teal-100 mb-10 max-w-2xl mx-auto text-lg">Dr. Gohokar is currently accepting new patients. Experience compassionate care from a doctor who truly listens.</p>
             <Link to="/" className="inline-block bg-white text-teal font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105">
               Schedule Appointment
             </Link>
        </div>

      </div>
    </div>
  );
};

export default DoctorProfile;