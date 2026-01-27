import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`scroll-mt-24 lg:scroll-mt-12 mb-12 ${className}`}>
      <div className="flex items-center mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        {children}
      </div>
    </section>
  );
};

export default Section;