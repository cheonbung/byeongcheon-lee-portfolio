import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { 
  PROFILE, EDUCATION, GRAD_COURSES, UNDERGRAD_COURSES, 
  LANGUAGES, CERTIFICATIONS, PUBLICATIONS, CONFERENCES, 
  PATENTS, AWARDS 
} from './constants';
import { 
  Mail, ExternalLink, Calendar, MapPin, Download, CheckCircle, 
  Award as AwardIcon, Book, Building2 
} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [courseworkTab, setCourseworkTab] = useState<'grad' | 'undergrad'>('grad');

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'publications', 'patents', 'awards', 'coursework'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Helper to highlight author name
  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMe = author.includes('이병천') || author.includes('Byeongcheon Lee') || author.includes('B. Lee');
      return (
        <React.Fragment key={index}>
          {index > 0 && ', '}
          <span className={isMe ? "font-bold text-slate-900 underline decoration-slate-400 underline-offset-2" : "text-slate-600"}>
            {author}
          </span>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans text-slate-700">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        activeSection={activeSection} 
      />

      <main className="flex-1 lg:ml-64 p-4 lg:p-12 pt-20 lg:pt-12 transition-all duration-300 max-w-5xl mx-auto w-full">
        
        {/* About / Header Section */}
        <Section id="about" title="Profile">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 md:w-48 md:h-64 bg-slate-200 rounded-lg shadow-inner flex items-center justify-center shrink-0 overflow-hidden self-center md:self-start">
               <img 
                 src="https://picsum.photos/200/300" 
                 alt="Profile Placeholder" 
                 className="w-full h-full object-cover opacity-80"
               />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{PROFILE.nameEn}</h1>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl text-slate-700 font-medium">{PROFILE.nameKo}</span>
                  <span className="text-slate-500 text-sm">({PROFILE.nameCn})</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" />
                  <span>{PROFILE.birthDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" />
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 transition-colors">{PROFILE.email}</a>
                </div>
                {PROFILE.website !== '-' && (
                  <div className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-blue-600" />
                    <a href={PROFILE.website} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Website</a>
                  </div>
                )}
              </div>

              {/* Skills/Languages Summary */}
              <div className="pt-4 border-t border-slate-100 mt-4">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle size={16} /> Languages & Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                      {lang.name}: {lang.testName} {lang.score}
                    </span>
                  ))}
                  {CERTIFICATIONS.map((cert, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-10 py-2">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{edu.school}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{edu.period}</span>
                </div>
                <div className="text-slate-700 font-medium">{edu.degree} - {edu.major}</div>
                <div className="flex gap-4 text-sm text-slate-500 mt-1">
                  <span className="flex items-center gap-1">Status: {edu.status}</span>
                  {edu.advisor && edu.advisor !== '-' && (
                    <span className="flex items-center gap-1">Advisor: {edu.advisor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Book size={20} className="text-blue-600" />
                Journal Papers (SCIE/SSCI/Domestic)
              </h3>
              <div className="space-y-4">
                {PUBLICATIONS.map((pub, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-semibold text-slate-800 text-base leading-snug">{pub.title}</h4>
                      <span className={`shrink-0 px-2 py-0.5 text-xs font-bold rounded ${
                        pub.type === 'SCIE' ? 'bg-orange-100 text-orange-700' : 
                        pub.type === 'SSCI' ? 'bg-purple-100 text-purple-700' : 
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      {formatAuthors(pub.authors)}
                    </p>
                    <div className="flex justify-between items-center mt-3 text-xs md:text-sm text-slate-500">
                      <span className="italic font-medium text-blue-800">{pub.journalOrConference}</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Building2 size={20} className="text-blue-600" />
                Conference Presentations
              </h3>
              <div className="space-y-4">
                {CONFERENCES.map((conf, idx) => (
                  <div key={idx} className="group relative pl-4 border-l-2 border-slate-200 hover:border-blue-400 transition-colors py-1">
                    <h4 className="font-medium text-slate-800 text-sm md:text-base">{conf.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">{formatAuthors(conf.authors)}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-slate-400">
                      <span className="font-medium text-slate-600">{conf.journalOrConference}</span>
                      <span>{conf.date}</span>
                      {conf.note && (
                        <span className="text-amber-600 font-medium flex items-center gap-1 bg-amber-50 px-1 rounded">
                          <AwardIcon size={10} /> {conf.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Patents Section */}
        <Section id="patents" title="Patents">
           <div className="grid grid-cols-1 gap-4">
            {PATENTS.map((patent, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 p-4 border border-slate-100 rounded-lg bg-white hover:shadow-md transition-shadow">
                 <div className="shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                      patent.type === 'PCT' ? 'bg-indigo-500' : 'bg-slate-500'
                    }`}>
                      {patent.type}
                    </div>
                 </div>
                 <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">{patent.title}</h4>
                    <div className="text-sm text-slate-600 mb-2">
                      Inventors: {formatAuthors(patent.inventors)}
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                         <span className="font-medium">No:</span> {patent.number}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                         <span className="font-medium">Date:</span> {patent.date}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                         <span className="font-medium">Applicant:</span> {patent.applicant}
                      </span>
                    </div>
                 </div>
              </div>
            ))}
           </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" title="Awards & Honors">
          <ul className="space-y-4">
            {AWARDS.map((award, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="mt-1 p-1.5 bg-yellow-50 text-yellow-600 rounded-full">
                  <AwardIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{award.title}</h4>
                  <div className="flex gap-2 text-sm text-slate-500 mt-1">
                    <span>{award.issuer}</span>
                    <span>•</span>
                    <span>{award.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Coursework Section */}
        <Section id="coursework" title="Coursework">
          <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-lg inline-flex">
            <button
              onClick={() => setCourseworkTab('grad')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                courseworkTab === 'grad' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Graduate ({GRAD_COURSES.gpa})
            </button>
            <button
              onClick={() => setCourseworkTab('undergrad')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                courseworkTab === 'undergrad' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Undergraduate ({UNDERGRAD_COURSES.gpa})
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 font-medium">Period</th>
                  <th className="px-6 py-3 font-medium">Course Name</th>
                  <th className="px-6 py-3 font-medium text-center">Credits</th>
                  <th className="px-6 py-3 font-medium text-right">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(courseworkTab === 'grad' ? GRAD_COURSES : UNDERGRAD_COURSES).courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 font-mono text-slate-500 text-xs">{course.period}</td>
                    <td className="px-6 py-3 font-medium text-slate-800">{course.name}</td>
                    <td className="px-6 py-3 text-center text-slate-600">{course.credits}</td>
                    <td className="px-6 py-3 text-right font-mono text-slate-700">{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <div className="mt-12 mb-8 text-center text-slate-400 text-sm">
          <p>Designed for academic & professional presentation.</p>
        </div>

      </main>
    </div>
  );
}

export default App;