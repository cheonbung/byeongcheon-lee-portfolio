import React from 'react';
import { User, BookOpen, GraduationCap, Award, FileText, Menu, X, ScrollText } from 'lucide-react';
import { PROFILE } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'patents', label: 'Patents', icon: ScrollText },
    { id: 'awards', label: 'Awards & Activities', icon: Award },
    { id: 'coursework', label: 'Coursework', icon: FileText },
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
        <span className="font-bold text-lg text-slate-800">{PROFILE.nameEn}</span>
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
          no-print
        `}
      >
        <div className="p-6 border-b border-slate-700 hidden lg:block">
            <h1 className="text-xl font-bold">{PROFILE.nameEn}</h1>
            <p className="text-slate-400 text-sm mt-1">{PROFILE.nameKo}</p>
            <p className="text-xs text-slate-500 mt-2">{PROFILE.email}</p>
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
                      w-full flex items-center px-6 py-3 text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-blue-600 text-white border-r-4 border-blue-300' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
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

        <div className="p-6 border-t border-slate-700 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Byeongcheon Lee.
          <br /> All rights reserved.
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