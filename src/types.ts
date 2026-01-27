export interface Education {
  period: string;
  degree: string;
  school: string;
  major: string;
  status: string;
  advisor?: string;
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
}

export interface Language {
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
  note?: string; // e.g., "Poster", "Best Paper Award"
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
  nameKo: string;
  nameEn: string;
  nameCn: string;
  birthDate: string;
  email: string;
  website: string;
  phone: string;
  imagePlaceholder: boolean;
}