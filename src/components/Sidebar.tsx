import React from 'react';
import { User, BookOpen, GraduationCap, Award, FileText, Menu, X, ScrollText, Globe } from 'lucide-react';
import { PortfolioData, Language } from '../types';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeSection: string;
  data: PortfolioData;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen, toggleSidebar, activeSection, data, language, setLanguage
}) => {
  const ui = data.ui;

  const navItems = [
    { id: 'about', label: ui.about, icon: User },
    { id: 'education', label: ui.education, icon: GraduationCap },
    { id: 'publications', label: ui.publications, icon: BookOpen },
    { id: 'patents', label: ui.patents, icon: ScrollText },
    { id: 'awards', label: ui.awards, icon: Award },
    { id: 'coursework', label: ui.coursework, icon: FileText },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <span className="font-bold text-lg text-slate-800">{data.profile.name}</span>
        <button onClick={toggleSidebar} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-slate-900 text-white z-40 transition-transform duration-300 ease-in-out w-64
          lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
          no-print shadow-2xl
        `}
      >
        <div className="p-6 border-b border-slate-700 hidden lg:block">
          <h1 className="text-xl font-bold tracking-tight">{data.profile.name}</h1>
          <p className="text-slate-400 text-sm mt-1">{data.profile.role}</p>
          <p className="text-xs text-slate-500 mt-2 font-light">{data.profile.email}</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center px-6 py-3 text-sm font-medium transition-all duration-200
                      ${isActive
                        ? 'bg-blue-600 text-white border-r-4 border-blue-400'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                    `}
                  >
                    <Icon size={18} className="mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language Toggle & Footer */}
        <div className="p-6 border-t border-slate-700 bg-slate-900">
          <div className="flex items-center justify-between mb-4 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setLanguage('KO')}
              className={`flex-1 text-xs font-bold py-1.5 rounded-md transition-colors ${language === 'KO' ? 'bg-slate-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              한글
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`flex-1 text-xs font-bold py-1.5 rounded-md transition-colors ${language === 'EN' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              ENG
            </button>
          </div>
          <div className="text-xs text-slate-500 text-center leading-relaxed">
            &copy; {new Date().getFullYear()} {data.profile.name}.
            <br /> All rights reserved.
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;