import React from 'react';

export type Language = 'KO' | 'EN';

export interface BaseData {
  period: string;
  status: string;
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  major: string;
  status: string;
  advisor?: string;
  advisorLabel?: string;
}

export interface Course {
  period: string;
  name: string;
  credits: number;
  grade: string;
}

export interface CourseSection {
  title: string;
  gpa: string;
  courses: Course[];
  headers: {
    period: string;
    name: string;
    credits: string;
    grade: string;
  }
}

export interface LanguageItem {
  name: string;
  testName: string;
  score: string;
  date: string;
  issuer: string;
}

export interface Certification {
  date: string;
  name: string;
  issuer: string;
}

export type PublicationType = 'SCIE' | 'SSCI' | 'Domestic' | 'International Conference' | 'Domestic Conference' | 'Patent' | 'PCT';

export interface Publication {
  date: string;
  type: PublicationType;
  title: string;
  authors: string[];
  journalOrConference: string;
  note?: string;
}

export interface Patent {
  type: 'Domestic' | 'PCT';
  date: string;
  number: string;
  title: string;
  inventors: string[];
  applicant: string;
}

export interface Award {
  date: string;
  title: string;
  issuer: string;
  rank?: string;
}

export interface Profile {
  name: string;
  role?: string;
  affiliation?: string; // [추가] 소속 (학과 등)
  lab?: string;         // 연구실 이름
  labUrl?: string;      // 연구실 링크
  birthDate: string;
  email: string;
  website: string;
  phone: string;
  imagePath: string;
  github: string;
  linkedin: string;
  interests: string[];
  bio: React.ReactNode; // [수정] string -> React.ReactNode (줄바꿈/볼드 처리를 위해)
}

export interface UIStrings {
  about: string;
  education: string;
  publications: string;
  patents: string;
  awards: string;
  coursework: string;
  contact: string;
  languages: string;
  certifications: string;
  downloadResume: string;
  journalPapers: string;
  confPresentations: string;
  gradCourses: string;
  undergradCourses: string;
  designedBy: string;
  lastUpdated: string;
  lastUpdatedDate: string;
  stats: {
    journals: string;
    conferences: string;
    patents: string;
  }
}

export interface PortfolioData {
  ui: UIStrings;
  profile: Profile;
  education: Education[];
  gradCourses: CourseSection;
  undergradCourses: CourseSection;
  languages: LanguageItem[];
  certifications: Certification[];
  publications: Publication[];
  conferences: Publication[];
  patents: Patent[];
  awards: Award[];
}