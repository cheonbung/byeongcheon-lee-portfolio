import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { DATA_KO, DATA_EN } from './constants';
import { Language } from './types';
import {
  Mail, ExternalLink, Calendar, CheckCircle,
  Award as AwardIcon, Book, Building2, Github, Linkedin, ScrollText, ArrowUpRight, Quote
} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState<Language>('KO');
  const [courseworkTab, setCourseworkTab] = useState<'grad' | 'undergrad'>('grad');

  const data = language === 'KO' ? DATA_KO : DATA_EN;

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

  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMe = author.includes('이병천') || author.includes('Byeongcheon Lee') || author.includes('B. Lee');
      return (
        <React.Fragment key={index}>
          {index > 0 && ', '}
          <span className={isMe ? "font-bold text-slate-900 underline decoration-blue-400 underline-offset-4" : "text-slate-600"}>
            {author}
          </span>
        </React.Fragment>
      );
    });
  };

  // 실적 카운트 데이터
  const stats = [
    { label: data.ui.stats.journals, count: data.publications.length, icon: Book },
    { label: data.ui.stats.conferences, count: data.conferences.length, icon: Building2 },
    { label: data.ui.stats.patents, count: data.patents.length, icon: ScrollText },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans text-slate-700">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        data={data}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="flex-1 lg:ml-64 p-4 lg:p-12 pt-20 lg:pt-12 transition-all duration-300 max-w-5xl mx-auto w-full">

        {/* Profile Section */}
        <Section id="about" title={data.ui.about}>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start">

            {/* Left Column: Image & Stats */}
            <div className="flex flex-col gap-5 shrink-0 w-full md:w-auto items-center md:items-stretch">
              {/* Profile Image - 부드러운 그림자 적용 */}
              <div className="w-48 h-64 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 relative self-center">
                <img
                  src={data.profile.imagePath}
                  alt={data.profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Cards - 디자인 강화 (PC View) */}
              <div className="hidden md:flex flex-col gap-3 w-full">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                      <div className="flex items-center gap-3 text-slate-500 font-bold uppercase text-xs tracking-wider">
                        <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                          <Icon size={16} className="group-hover:text-blue-600" />
                        </div>
                        {stat.label}
                      </div>
                      <div className="text-2xl font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors">{stat.count}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Profile Info */}
            <div className="flex-1 space-y-7 w-full">

              {/* Header: Name, Role, Lab */}
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{data.profile.name}</h1>
                <div className="mt-3 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-lg">
                    <span className="text-blue-600 font-bold">{data.profile.role}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-700 font-medium">{data.profile.affiliation}</span>
                  </div>
                  {data.profile.lab && (
                    <a href={data.profile.labUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium group text-sm">
                      <div className="p-1 bg-slate-100 rounded group-hover:bg-blue-50 transition-colors"><Building2 size={14} /></div>
                      <span>{data.profile.lab}</span>
                      <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bio (Self Introduction) - [수정됨] 아이콘과 텍스트 분리 */}
              <div className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <Quote className="absolute top-6 left-5 text-blue-100 w-8 h-8 fill-blue-50" />
                {/* pl-10을 주어 텍스트가 아이콘을 피하도록 설정 */}
                <div className="relative z-10 text-slate-700 leading-8 text-base break-keep pl-10">
                  {data.profile.bio}
                </div>
              </div>

              {/* Research Interests Tags - 디자인 다듬기 */}
              <div className="flex flex-wrap gap-2.5">
                {data.profile.interests.map((interest, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-indigo-50/80 text-indigo-600 rounded-full text-sm font-semibold border border-indigo-100/50 hover:bg-indigo-100 transition-colors cursor-default">
                    #{interest}
                  </span>
                ))}
              </div>

              {/* Contact & Info Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-blue-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</span>
                    <a href={`mailto:${data.profile.email}`} className="text-sm font-bold text-slate-700 hover:text-blue-600 truncate">{data.profile.email}</a>
                  </div>
                </div>

                {data.profile.github && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-blue-100 transition-all">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                      <Github size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">GitHub</span>
                      <a href={data.profile.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1">
                        Visit Profile <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm sm:col-span-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle size={18} />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Languages & Certifications</span>
                    <div className="flex flex-wrap gap-2">
                      {data.languages.map((lang, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md text-xs font-semibold border border-slate-200">
                          {lang.name}: <span className="text-blue-600">{lang.score}</span>
                        </span>
                      ))}
                      {data.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md text-xs font-semibold border border-slate-200">
                          {cert.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats for Mobile only */}
              <div className="grid grid-cols-3 gap-3 md:hidden pt-4 border-t border-slate-100">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white p-3 rounded-xl text-center border border-slate-100 shadow-sm">
                      <div className="flex justify-center mb-1 text-slate-400"><Icon size={20} /></div>
                      <div className="text-2xl font-extrabold text-blue-600">{stat.count}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title={data.ui.education}>
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-12 py-2">
            {data.education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:border-blue-600 group-hover:scale-110 transition-all"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{edu.school}</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{edu.period}</span>
                </div>
                <div className="text-slate-800 font-medium text-base">
                  {edu.degree}
                  {edu.major && edu.major !== "" && (
                    <> - <span className="text-slate-600 font-normal">{edu.major}</span></>
                  )}
                </div>
                <div className="flex gap-4 text-sm text-slate-500 mt-2">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">{edu.status}</span>
                  {edu.advisor && edu.advisor !== '-' && (
                    <span className="flex items-center gap-1 text-slate-600">
                      <span className="font-semibold text-slate-400">{edu.advisorLabel}:</span> {edu.advisor}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title={data.ui.publications}>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Book size={22} className="text-blue-600" />
                {data.ui.journalPapers}
              </h3>
              <div className="grid gap-4">
                {data.publications.map((pub, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-2">
                      <h4 className="font-bold text-slate-800 text-base leading-snug whitespace-pre-line">{pub.title}</h4>
                      <span className={`shrink-0 px-2.5 py-1 text-[10px] uppercase tracking-wide font-bold rounded-full ${pub.type === 'SCIE' ? 'bg-orange-100 text-orange-700' :
                          pub.type === 'SSCI' ? 'bg-purple-100 text-purple-700' :
                            'bg-slate-100 text-slate-600'
                        }`}>
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                      {formatAuthors(pub.authors)}
                    </p>
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="font-semibold text-blue-700 italic">{pub.journalOrConference}</span>
                      <span className="text-slate-400 font-mono">{pub.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building2 size={22} className="text-blue-600" />
                {data.ui.confPresentations}
              </h3>
              <div className="space-y-4">
                {data.conferences.map((conf, idx) => (
                  <div key={idx} className="group relative pl-5 border-l-2 border-slate-200 hover:border-blue-400 transition-colors py-1">
                    <h4 className="font-medium text-slate-800 text-sm md:text-base leading-snug group-hover:text-blue-700 transition-colors whitespace-pre-line">{conf.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">{formatAuthors(conf.authors)}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-400">
                      <span className="font-medium text-slate-600">{conf.journalOrConference}</span>
                      <span>{conf.date}</span>
                      {conf.note && (
                        <span className="text-amber-600 font-bold flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded">
                          <AwardIcon size={12} /> {conf.note}
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
        <Section id="patents" title={data.ui.patents}>
          <div className="grid grid-cols-1 gap-4">
            {data.patents.map((patent, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-5 p-5 border border-slate-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <div className="shrink-0">
                  <div className={`w-auto px-3 min-w-[3rem] h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-sm ${patent.type === 'PCT' ? 'bg-indigo-500' : 'bg-slate-500'
                    }`}>
                    {patent.type}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-2 leading-snug whitespace-pre-line">{patent.title}</h4>
                  <div className="text-sm text-slate-600 mb-3">
                    {formatAuthors(patent.inventors)}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      <span className="font-bold text-slate-400">No:</span> {patent.number}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      <span className="font-bold text-slate-400">Date:</span> {patent.date}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      <span className="font-bold text-slate-400">Applicant:</span> {patent.applicant}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" title={data.ui.awards}>
          <ul className="space-y-4">
            {data.awards.map((award, idx) => (
              <li key={idx} className="flex gap-4 items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="mt-1 p-2 bg-yellow-50 text-yellow-600 rounded-full shadow-sm">
                  <AwardIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{award.title}</h4>
                  <div className="flex gap-2 text-sm text-slate-500 mt-1 font-medium">
                    <span>{award.issuer}</span>
                    <span className="text-slate-300">•</span>
                    <span>{award.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Coursework Section */}
        <Section id="coursework" title={data.ui.coursework}>
          <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-lg inline-flex">
            <button
              onClick={() => setCourseworkTab('grad')}
              className={`px-5 py-2 rounded-md text-sm font-bold transition-all shadow-sm ${courseworkTab === 'grad' ? 'bg-white text-blue-600' : 'text-slate-500 hover:text-slate-700 bg-transparent shadow-none'
                }`}
            >
              {data.ui.gradCourses} ({data.gradCourses.gpa})
            </button>
            <button
              onClick={() => setCourseworkTab('undergrad')}
              className={`px-5 py-2 rounded-md text-sm font-bold transition-all shadow-sm ${courseworkTab === 'undergrad' ? 'bg-white text-blue-600' : 'text-slate-500 hover:text-slate-700 bg-transparent shadow-none'
                }`}
            >
              {data.ui.undergradCourses} ({data.undergradCourses.gpa})
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 font-semibold">{courseworkTab === 'grad' ? data.gradCourses.headers.period : data.undergradCourses.headers.period}</th>
                  <th className="px-6 py-3 font-semibold">{courseworkTab === 'grad' ? data.gradCourses.headers.name : data.undergradCourses.headers.name}</th>
                  <th className="px-6 py-3 font-semibold text-center">{courseworkTab === 'grad' ? data.gradCourses.headers.credits : data.undergradCourses.headers.credits}</th>
                  <th className="px-6 py-3 font-semibold text-right">{courseworkTab === 'grad' ? data.gradCourses.headers.grade : data.undergradCourses.headers.grade}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {(courseworkTab === 'grad' ? data.gradCourses : data.undergradCourses).courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 font-mono text-slate-500 text-xs">{course.period}</td>
                    <td className="px-6 py-3 font-medium text-slate-800">{course.name}</td>
                    <td className="px-6 py-3 text-center text-slate-600">{course.credits}</td>
                    <td className="px-6 py-3 text-right font-bold text-slate-700">{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <div className="mt-16 mb-8 text-center text-slate-400 text-xs font-medium">
          <p>{data.ui.designedBy}</p>
        </div>

      </main>
    </div>
  );
}

export default App;