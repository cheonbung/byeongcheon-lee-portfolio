import { PortfolioData } from './types';

// =============================================================================
// COMMON DATA (Languages, Certifications)
// =============================================================================

const COMMON_LANGUAGES = [
  {
    name: "English",
    testName: "TOEIC Speaking",
    score: "150 (IH)",
    date: "2025.08.17",
    issuer: "YBM"
  }
];

const COMMON_CERTIFICATIONS = [
  {
    date: "2021.09.24",
    name: "ADsP (Data Analysis Semi-Professional)",
    issuer: "K-Data"
  }
];

// =============================================================================
// KOREAN DATA (DATA_KO)
// =============================================================================

export const DATA_KO: PortfolioData = {
  ui: {
    about: "프로필",
    education: "학력",
    publications: "연구 논문",
    patents: "특허",
    awards: "수상 및 활동",
    coursework: "수강 과목",
    contact: "연락처",
    languages: "언어",
    certifications: "자격증",
    downloadResume: "이력서 다운로드",
    journalPapers: "저널 논문 (SCIE/SSCI/국내)",
    confPresentations: "학술대회 발표",
    gradCourses: "대학원",
    undergradCourses: "학부",
    designedBy: "Designed for academic presentation."
  },
  profile: {
    name: "이병천",
    role: "석사 과정",
    birthDate: "1999.02.08",
    email: "qudcjs0208@cau.ac.kr",
    website: "-",
    phone: "-",
    imagePath: "/byeongcheon-lee-portfolio/images/profile.jpg"
  },
  education: [
    {
      period: "2024.03 ~ 2026.02 (예정)",
      degree: "석사",
      school: "중앙대학교",
      major: "융합보안학과 산업보안기술전공",
      status: "졸업",
      advisor: "노승민",
      advisorLabel: "지도교수"
    },
    {
      period: "2018.03 ~ 2024.02",
      degree: "학사",
      school: "순천향대학교",
      major: "AI·빅데이터학과",
      status: "졸업",
      advisor: "문지훈",
      advisorLabel: "지도교수"
    },
    {
      period: "2015.03 ~ 2018.02",
      degree: "고교",
      school: "안성고등학교",
      major: "이공계열",
      status: "졸업",
      advisor: "-"
    }
  ],
  gradCourses: {
    title: "대학원 주요 수강과목",
    gpa: "4.25 / 4.5",
    headers: { period: "기간", name: "과목명", credits: "학점", grade: "성적" },
    courses: [
      { period: "2024.03~2024.06", name: "산업보안학", credits: 3, grade: "4.5/4.5" },
      { period: "2024.03~2024.06", name: "융합보안학", credits: 3, grade: "4/4.5" },
      { period: "2024.03~2024.06", name: "보안시스템공학", credits: 3, grade: "4.5/4.5" },
      { period: "2024.03~2024.06", name: "빅데이터보안분석", credits: 3, grade: "4.5/4.5" },
      { period: "2024.09~2024.12", name: "최신 SW·IT 보안 세미나", credits: 3, grade: "4.5/4.5" },
      { period: "2024.09~2024.12", name: "모빌리티 보안", credits: 3, grade: "4/4.5" },
      { period: "2024.09~2024.12", name: "인공지능 규제와 신뢰성", credits: 3, grade: "4/4.5" },
      { period: "2024.09~2024.12", name: "디지털 금융서비스와 보안", credits: 3, grade: "4.5/4.5" },
      { period: "2025.03~2025.06", name: "AI 프로그래밍", credits: 3, grade: "4.5/4.5" },
    ]
  },
  undergradCourses: {
    title: "학부 주요 수강과목",
    gpa: "3.65 / 4.5",
    headers: { period: "기간", name: "과목명", credits: "학점", grade: "성적" },
    courses: [
      { period: "2018.03~2018.06", name: "파이썬프로그래밍", credits: 3, grade: "3.5/4.5" },
      { period: "2018.09~2018.12", name: "컴퓨터개론", credits: 3, grade: "4/4.5" },
      { period: "2018.09~2018.12", name: "R 프로그래밍", credits: 3, grade: "3.5/4.5" },
      { period: "2019.03~2019.06", name: "탐색적데이터분석", credits: 3, grade: "3.5/4.5" },
      { period: "2021.09~2021.12", name: "데이터베이스개론", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "데이터마이닝", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "이산수학", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "자료구조", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "머신러닝", credits: 3, grade: "3.5/4.5" },
      { period: "2022.03~2022.06", name: "소셜네트워크분석", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "시계열분석", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "하둡", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "텍스트마이닝", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "분산시스템과클라우드컴퓨팅", credits: 3, grade: "3.5/4.5" },
      { period: "2022.09~2022.12", name: "다변량분석", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "딥러닝과응용", credits: 3, grade: "4.5/4.5" },
      { period: "2023.03~2023.06", name: "컴퓨터비전과패턴인식", credits: 3, grade: "4/4.5" },
      { period: "2023.03~2023.06", name: "설명가능한인공지능", credits: 3, grade: "3.5/4.5" },
      { period: "2023.09~2023.12", name: "고급딥러닝", credits: 3, grade: "4/4.5" },
    ]
  },
  languages: COMMON_LANGUAGES,
  certifications: COMMON_CERTIFICATIONS,
  awards: [
    {
      date: "2025.11.29",
      title: "한국전자거래학회 2025 추계학술대회 대학(원)생 아이디어 공모전 (최우수상)",
      issuer: "한국전자거래학회"
    },
    {
      date: "2025.11.29",
      title: "한국전자거래학회 2025 추계학술대회 (우수논문상)",
      issuer: "한국전자거래학회"
    },
    {
      date: "2024.11.27",
      title: "DID(Decentralized Identity) 비즈니스 모델 특허 아이디어 공모전 (장려상)",
      issuer: "한국전자거래학회"
    },
    {
      date: "2023.05.19",
      title: "ASK 2023 학부생논문경진대회 (동상)",
      issuer: "한국정보처리학회"
    },
    {
      date: "2022.12.16",
      title: "한국전자거래학회 2022 추계학술대회 (우수논문상)",
      issuer: "한국전자거래학회"
    }
  ],
  publications: [
    {
      date: "2025.12",
      type: "Domestic",
      title: "비가시성 워터마킹과 선택적 클래스 언러닝을 통합한 이미지 생성 프레임워크\n(An Image Generation Framework Integrating Invisible Watermarking and Selective Class Unlearning)",
      authors: ["박성우", "이병천", "김상민", "채승엽", "이미영", "노승민"],
      journalOrConference: "Journal of Platform Technology"
    },
    {
      date: "2025.08",
      type: "Domestic",
      title: "기상데이터를 결합한 경부고속도로 시계열 교통량 예측 모델링\n(Time Series-Based Traffic Volume Forecasting on the Gyeongbu Expressway with Weather Data)",
      authors: ["이병천", "노승민"],
      journalOrConference: "한국전자거래학회지"
    },
    {
      date: "2025.05.30",
      type: "SCIE",
      title: "Detection of online grooming on social networking services using a deep learning-based natural language processing model and optical character recognition",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Jihoon Moon", "Seungmin Rho"],
      journalOrConference: "Computer Modeling in Engineering & Sciences (CMES)"
    },
    {
      date: "2024.10.15",
      type: "SCIE",
      title: "Advancing Autoencoder Architectures for Enhanced Anomaly Detection in Multivariate Industrial Time Series",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Muazzam Maqsood", "Jihoon Moon", "Seungmin Rho"],
      journalOrConference: "Computers, Materials & Continua (CMC)"
    },
    {
      date: "2024.06.24",
      type: "SCIE",
      title: "A Multifaceted Approach to Stock Market Trading Using Reinforcement Learning",
      authors: ["Yasmeen Ansari", "Saira Gillani", "Maryam Bukhari", "Byeongcheon Lee", "Muazzam Maqsood", "Seungmin Rho"],
      journalOrConference: "IEEE Access"
    },
    {
      date: "2023.05",
      type: "Domestic",
      title: "텍스트 마이닝 기반의 국내 빅데이터 처리 및 분석 사례 연구: 아마존 웹 서비스를 중심으로\n(A Case Study on Big Data Processing and Analysis Based on Text Mining: Focusing on Amazon Web Services in South Korea)",
      authors: ["이병천", "오진영", "임수빈", "손우진", "문지훈"],
      journalOrConference: "한국전자거래학회지"
    },
    {
      date: "2023.04.20",
      type: "SSCI",
      title: "RAID: Robust and Interpretable Daily Peak Load Forecasting via Multiple Deep Neural Networks and Shapley Values",
      authors: ["Joohyun Jang", "Woonyoung Jeong", "Sangmin Kim", "Byeongcheon Lee", "Miyoung Lee", "Jihoon Moon"],
      journalOrConference: "Sustainability"
    }
  ],
  conferences: [
    {
      date: "2025.11.29",
      type: "Domestic Conference",
      title: "패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크\n(A Class-Selective Unlearning Framework for Pattern-Preserving Generative Models)",
      authors: ["김상민", "이병천", "박성우", "이미영", "노승민"],
      journalOrConference: "한국전자거래학회 2025 추계학술대회",
      note: "우수논문상 수상"
    },
    {
      date: "2025.10.25",
      type: "International Conference",
      title: "Discriminator-Guided Unlearning A Framework for Selective Forgetting in Conditional GANs\n(패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크)",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park", "Seungmin Rho", "Miyoung Lee"],
      journalOrConference: "28th European Conference on Artificial Intelligence (ECAI2025)",
      note: "Workshop Paper (TRUST-AI)"
    },
    {
      date: "2025.09.15",
      type: "International Conference",
      title: "A Framework for Machine Unlearning Using Selective Knowledge Distillation into Soft Decision Tree",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Sungwoo Park", "Miyoung Lee", "Seungmin Rho"],
      journalOrConference: "20th Conference on Computer Science and Intelligence Systems (FedCSIS2025)"
    },
    {
      date: "2025.08.25",
      type: "International Conference",
      title: "Machine Unlearning via Distillation into Soft Decision Tree",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Sungwoo Park", "Seungmin Rho", "Mi Young Lee"],
      journalOrConference: "2025 International Conference on Platform Technology and Service (PlatCon-25)"
    },
    {
      date: "2025.08.25",
      type: "International Conference",
      title: "Selective Forgetting in ACGANs via Discriminator-Guided Unlearning",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park", "Seungmin Rho", "Mi Young Lee"],
      journalOrConference: "2025 International Conference on Platform Technology and Service (PlatCon-25)"
    },
    {
      date: "2025.05.02",
      type: "Domestic Conference",
      title: "시계열 딥러닝 모델을 활용한 한국 경부고속도로 교통량 예측 모델링\n(Traffic Volume Forecasting On The Gyeongbu Expressway Using Time Series Deep Learning Models)",
      authors: ["이병천", "김상민", "박성우", "이미영", "노승민"],
      journalOrConference: "한국전자거래학회 2025 춘계학술대회"
    },
    {
      date: "2025.01.15",
      type: "International Conference",
      title: "An Online Grooming Detection System",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Seungmin Rho"],
      journalOrConference: "The 39th International Conference on Information Networking (ICOIN 2025)",
      note: "Poster"
    },
    {
      date: "2024.08.26",
      type: "International Conference",
      title: "Voice Phishing Detection Using Deep Learning-Based NLP and Knowledge Distillation Techniques",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Hyeonwoo Kim", "Seungmin Rho"],
      journalOrConference: "2024 International Conference on Platform Technology and Service (PlatCon-24)"
    },
    {
      date: "2024.08.26",
      type: "International Conference",
      title: "Enhancing Trust and Transparency in Machine Learning with Explainable AI: Applications to the Bank Marketing Dataset",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Hyeonwoo Kim", "Seungmin Rho"],
      journalOrConference: "2024 International Conference on Platform Technology and Service (PlatCon-24)"
    },
    {
      date: "2023.09",
      type: "Domestic Conference",
      title: "교통안전시설물 및 보행자 유무에 따른 차량 속도와의 관계 연구\n(A Study on the Relationship between Vehicle Speed and the Presence of Traffic Safety Infrastructure and Pedestrians)",
      authors: ["김성훈", "이병천", "김상민", "노병준"],
      journalOrConference: "한국통신학회 제 4회 한국인공지능학술대회"
    },
    {
      date: "2023.06.02",
      type: "Domestic Conference",
      title: "강건한 일사량 예측을 위한 딥러닝과 특징 공학의 통합 접근법\n(An Integrated Approach of Deep Learning and Feature Engineering for Robust Solar Irradiance Forecasting)",
      authors: ["소다영", "오진영", "이병천", "하휘영", "문지훈"],
      journalOrConference: "한국정보보호학회 하계 종합학술대회"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "생체신호 기반의 T-SNE 를 활용한 대화 내 감정 인식\n(Physiological Signal-Based Emotion Recognition in Conversations Using T-SNE)",
      authors: ["임수빈", "이병천", "문지훈"],
      journalOrConference: "한국정보처리학회 ASK 2023 춘계학술대회"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "전이 학습 및 SHAP 분석을 활용한 트랜스포머 기반 감정 분류 모델\n(Transformer-Based Emotion Classification Model Using Transfer Learning and SHAP Analysis)",
      authors: ["임수빈", "이병천", "문지훈"],
      journalOrConference: "한국정보처리학회 ASK 2023 춘계학술대회"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "얼굴 표정 인식 기술의 동향과 향후 방향: 텍스트 마이닝 분석을 중심으로\n(Trends and Future Directions in Facial Expression Recognition Technology: A Text Mining Analysis Approach)",
      authors: ["전인수", "이병천", "문지훈"],
      journalOrConference: "한국정보처리학회 ASK 2023 춘계학술대회"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "태양 위치 정보를 고려한 AutoML 기반의 태양광 발전량 예측\n(Automated Machine Learning-Based Solar PV Forecasting Considering Solar Position Information)",
      authors: ["오진영", "소다영", "이병천", "문지훈"],
      journalOrConference: "한국정보처리학회 ASK 2023 춘계학술대회",
      note: "학부생 논문 경진대회 수상 (동상)"
    },
    {
      date: "2023.02.13",
      type: "International Conference",
      title: "A Literature Review on AWS-Based Cloud Computing: A Case in South Korea",
      authors: ["B. Lee", "J. Oh", "W. Shon", "J. Moon"],
      journalOrConference: "2023 IEEE International Conference on Big Data and Smart Computing (BigComp2023)",
      note: "Workshop Paper"
    },
    {
      date: "2022.12.16",
      type: "Domestic Conference",
      title: "Multimedia Big Data Analytics: A Survey and Data Analytics for Bioinformatics and Biomedical Discoveries",
      authors: ["B. Lee", "E. Kim", "Y. Lee", "J. Seo", "J. Moon"],
      journalOrConference: "한국전자거래학회 2022 추계학술대회",
      note: "우수논문상 수상"
    },
    {
      date: "2022.12.16",
      type: "Domestic Conference",
      title: "Towards a Big Data System in Public Health: A Case Study of AWS and Data Visualization for Personalized Services",
      authors: ["J. Seo", "J. Jang", "T. Han", "B. Lee", "J. Moon"],
      journalOrConference: "한국전자거래학회 2022 추계학술대회"
    },
    {
      date: "2022.01.14",
      type: "Domestic Conference",
      title: "감성대화 말뭉치로 보는 청소년의 문제 도출\n(Identifying issues facing youth through emotional dialogue corpus)",
      authors: ["김상민", "이병천", "우지영"],
      journalOrConference: "한국컴퓨터정보학회 2022 동계학술대회"
    }
  ],
  patents: [
    {
      date: "2025-09-17",
      number: "10-2025-0133282",
      type: "Domestic",
      title: "판별기 기반 조건부 생성적 적대 신경망에서의 선택적 데이터 망각 방법 및 시스템\n(Method for selective data forgetting in discriminator-based conditional generative adversarial networks)",
      inventors: ["이미영", "노승민", "이병천", "김상민", "박성우"],
      applicant: "중앙대학교 산학협력단"
    },
    {
      date: "2025-08-08",
      number: "10-2025-0109528",
      type: "Domestic",
      title: "선택적 지식 증류를 이용한 소프트 의사결정 트리 기반 머신 언러닝 방법, 이를 수행하는 장치 및 컴퓨터 프로그램\n(Machine unlearning method based on soft decision tree using selective knowledge distillation, apparatus and computer program for performing the method)",
      inventors: ["이미영", "노승민", "이병천", "김상민", "박성우"],
      applicant: "중앙대학교 산학협력단"
    },
    {
      date: "2025-04-10",
      number: "PCT/KR2025/004854",
      type: "PCT",
      title: "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법\n(APPARATUS AND METHOD FOR REAL-TIME RECOGNITION OF VOICE PHISHING CONTEXT DURING A CALL)",
      inventors: ["노병준", "김상민", "이병천", "정운영"],
      applicant: "순천향대학교 산학협력단"
    },
    {
      date: "2024-11-14",
      number: "10-2024-0161756",
      type: "Domestic",
      title: "다변수 산업 사물 단말 관련 시계열 데이터에서 딥 러닝 모델을 기초로 한, 이상 탐지 방법 그 장치\n(METHOD FOR ANOMALY DETECTING BASED ON DEEP LEARNING MODEL IN TIME SERIES DATA RELATED TO MULTIVARIATE INDUSTRIAL THINGS TERMINALS, AND APPARATUS THEREOF)",
      inventors: ["김상민", "이병천", "문지훈", "노승민", "무아잠 마쿠수드"],
      applicant: "중앙대학교 산학협력단"
    },
    {
      date: "2024-11-14",
      number: "10-2024-0161744",
      type: "Domestic",
      title: "딥 러닝 기반 자연어 처리 모델을 활용한, 온라인 그루밍 범죄 탐지 방법 및 그 장치\n(METHOD FOR DETECTING ONLINE GROOMING CRIMES USING DEEP LEARNING-BASED NATURAL LANGUAGE PROCESSING MODELS, AND APPARATUS THEREOF)",
      inventors: ["김상민", "이병천", "문지훈", "노승민", "무아잠 마쿠수드"],
      applicant: "중앙대학교 산학협력단"
    },
    {
      date: "2024-04-11",
      number: "10-2024-0048439",
      type: "Domestic",
      title: "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법",
      inventors: ["노병준", "김상민", "이병천", "정운영"],
      applicant: "순천향대학교 산학협력단"
    }
  ]
};

// =============================================================================
// ENGLISH DATA (DATA_EN)
// =============================================================================

export const DATA_EN: PortfolioData = {
  ui: {
    about: "Profile",
    education: "Education",
    publications: "Publications",
    patents: "Patents",
    awards: "Awards & Activities",
    coursework: "Coursework",
    contact: "Contact",
    languages: "Languages",
    certifications: "Certifications",
    downloadResume: "Download CV",
    journalPapers: "Journal Papers (SCIE/SSCI/Domestic)",
    confPresentations: "Conference Presentations",
    gradCourses: "Graduate",
    undergradCourses: "Undergraduate",
    designedBy: "Designed for academic presentation."
  },
  profile: {
    name: "Byeongcheon Lee",
    role: "M.S. Candidate",
    birthDate: "1999.02.08",
    email: "qudcjs0208@cau.ac.kr",
    website: "-",
    phone: "-",
    imagePath: "/byeongcheon-lee-portfolio/images/profile.jpg"
  },
  education: [
    {
      period: "2024.03 ~ 2026.02 (Expected)",
      degree: "Master's Degree",
      school: "Chung-Ang University",
      major: "Dept. of Convergence Security (Industrial Security Tech)",
      status: "Graduation",
      advisor: "Seungmin Rho",
      advisorLabel: "Advisor"
    },
    {
      period: "2018.03 ~ 2024.02",
      degree: "Bachelor's Degree",
      school: "Soonchunhyang University",
      major: "Dept. of AI & Big Data",
      status: "Graduation",
      advisor: "Jihoon Moon",
      advisorLabel: "Advisor"
    },
    {
      period: "2015.03 ~ 2018.02",
      degree: "High School",
      school: "Anseong High School",
      major: "-",
      status: "Graduation",
      advisor: "-"
    }
  ],
  gradCourses: {
    title: "Major Graduate Coursework",
    gpa: "4.25 / 4.5",
    headers: { period: "Period", name: "Course Name", credits: "Credits", grade: "Grade" },
    courses: [
      { period: "2024.03~2024.06", name: "Industrial Security", credits: 3, grade: "4.5/4.5" },
      { period: "2024.03~2024.06", name: "Convergence Security", credits: 3, grade: "4/4.5" },
      { period: "2024.03~2024.06", name: "Security System Engineering", credits: 3, grade: "4.5/4.5" },
      { period: "2024.03~2024.06", name: "Big Data Security Analysis", credits: 3, grade: "4.5/4.5" },
      { period: "2024.09~2024.12", name: "Seminar in SW & IT Security", credits: 3, grade: "4.5/4.5" },
      { period: "2024.09~2024.12", name: "Mobility Security", credits: 3, grade: "4/4.5" },
      { period: "2024.09~2024.12", name: "AI Regulation and Trustworthiness", credits: 3, grade: "4/4.5" },
      { period: "2024.09~2024.12", name: "Digital Finance Service and Security", credits: 3, grade: "4.5/4.5" },
      { period: "2025.03~2025.06", name: "AI Programming", credits: 3, grade: "4.5/4.5" },
    ]
  },
  undergradCourses: {
    title: "Major Undergraduate Coursework",
    gpa: "3.65 / 4.5",
    headers: { period: "Period", name: "Course Name", credits: "Credits", grade: "Grade" },
    courses: [
      { period: "2018.03~2018.06", name: "Python Programming", credits: 3, grade: "3.5/4.5" },
      { period: "2018.09~2018.12", name: "Introduction to Computer Science", credits: 3, grade: "4/4.5" },
      { period: "2018.09~2018.12", name: "R Programming", credits: 3, grade: "3.5/4.5" },
      { period: "2019.03~2019.06", name: "Exploratory Data Analysis", credits: 3, grade: "3.5/4.5" },
      { period: "2021.09~2021.12", name: "Introduction to Database", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "Data Mining", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "Discrete Mathematics", credits: 3, grade: "4.5/4.5" },
      { period: "2021.09~2021.12", name: "Data Structures", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "Machine Learning", credits: 3, grade: "3.5/4.5" },
      { period: "2022.03~2022.06", name: "Social Network Analysis", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "Time Series Analysis", credits: 3, grade: "4.5/4.5" },
      { period: "2022.03~2022.06", name: "Hadoop", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "Text Mining", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "Distributed Systems & Cloud Computing", credits: 3, grade: "3.5/4.5" },
      { period: "2022.09~2022.12", name: "Multivariate Analysis", credits: 3, grade: "4.5/4.5" },
      { period: "2022.09~2022.12", name: "Deep Learning & Applications", credits: 3, grade: "4.5/4.5" },
      { period: "2023.03~2023.06", name: "Computer Vision & Pattern Recognition", credits: 3, grade: "4/4.5" },
      { period: "2023.03~2023.06", name: "Explainable AI", credits: 3, grade: "3.5/4.5" },
      { period: "2023.09~2023.12", name: "Advanced Deep Learning", credits: 3, grade: "4/4.5" },
    ]
  },
  languages: COMMON_LANGUAGES,
  certifications: COMMON_CERTIFICATIONS,
  awards: [
    {
      date: "2025.11.29",
      title: "University/Graduate Student Idea Competition (Grand Prize)\n(한국전자거래학회 2025 추계학술대회 대학(원)생 아이디어 공모전 최우수상)",
      issuer: "The Korea Society for Electronic Commerce"
    },
    {
      date: "2025.11.29",
      title: "The Korea Society for Electronic Commerce Fall Conference 2025 (Best Paper Award)\n(한국전자거래학회 2025 추계학술대회 우수논문상)",
      issuer: "The Korea Society for Electronic Commerce"
    },
    {
      date: "2024.11.27",
      title: "DID(Decentralized Identity) Business Model Patent Idea Contest (Encouragement Award)",
      issuer: "The Korea Society for Electronic Commerce"
    },
    {
      date: "2023.05.19",
      title: "ASK 2023 Undergraduate Paper Competition (Bronze Award)",
      issuer: "Korea Information Processing Society"
    },
    {
      date: "2022.12.16",
      title: "The Korea Society for Electronic Commerce Fall Conference 2022 (Best Paper Award)",
      issuer: "The Korea Society for Electronic Commerce"
    }
  ],
  publications: [
    {
      date: "2025.12",
      type: "Domestic",
      title: "An Image Generation Framework Integrating Invisible Watermarking and Selective Class Unlearning",
      authors: ["Sungwoo Park", "Byeongcheon Lee", "Sangmin Kim", "Seungyeop Chae", "Miyoung Lee", "Seungmin Rho"],
      journalOrConference: "Journal of Platform Technology"
    },
    {
      date: "2025.08",
      type: "Domestic",
      title: "Time Series-Based Traffic Volume Forecasting on the Gyeongbu Expressway with Weather Data",
      authors: ["Byeongcheon Lee", "Seungmin Rho"],
      journalOrConference: "Journal of The Korea Society for Electronic Commerce"
    },
    {
      date: "2025.05.30",
      type: "SCIE",
      title: "Detection of online grooming on social networking services using a deep learning-based natural language processing model and optical character recognition",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Jihoon Moon", "Seungmin Rho"],
      journalOrConference: "Computer Modeling in Engineering & Sciences (CMES)"
    },
    {
      date: "2024.10.15",
      type: "SCIE",
      title: "Advancing Autoencoder Architectures for Enhanced Anomaly Detection in Multivariate Industrial Time Series",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Muazzam Maqsood", "Jihoon Moon", "Seungmin Rho"],
      journalOrConference: "Computers, Materials & Continua (CMC)"
    },
    {
      date: "2024.06.24",
      type: "SCIE",
      title: "A Multifaceted Approach to Stock Market Trading Using Reinforcement Learning",
      authors: ["Yasmeen Ansari", "Saira Gillani", "Maryam Bukhari", "Byeongcheon Lee", "Muazzam Maqsood", "Seungmin Rho"],
      journalOrConference: "IEEE Access"
    },
    {
      date: "2023.05",
      type: "Domestic",
      title: "A Case Study on Big Data Processing and Analysis Based on Text Mining: Focusing on Amazon Web Services in South Korea",
      authors: ["Byeongcheon Lee", "Jinyoung Oh", "Subin Lim", "Woojin Shon", "Jihoon Moon"],
      journalOrConference: "Journal of The Korea Society for Electronic Commerce"
    },
    {
      date: "2023.04.20",
      type: "SSCI",
      title: "RAID: Robust and Interpretable Daily Peak Load Forecasting via Multiple Deep Neural Networks and Shapley Values",
      authors: ["Joohyun Jang", "Woonyoung Jeong", "Sangmin Kim", "Byeongcheon Lee", "Miyoung Lee", "Jihoon Moon"],
      journalOrConference: "Sustainability"
    }
  ],
  conferences: [
    {
      date: "2025.11.29",
      type: "Domestic Conference",
      title: "A Class-Selective Unlearning Framework for Pattern-Preserving Generative Models",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Sungwoo Park", "Miyoung Lee", "Seungmin Rho"],
      journalOrConference: "The Korea Society for Electronic Commerce Fall Conference 2025",
      note: "Best Paper Award"
    },
    {
      date: "2025.10.25",
      type: "International Conference",
      title: "A Class-Selective Unlearning Framework for Pattern-Preserving Generative Models",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park", "Seungmin Rho", "Miyoung Lee"],
      journalOrConference: "28th European Conference on Artificial Intelligence (ECAI2025)",
      note: "Workshop Paper (TRUST-AI)"
    },
    {
      date: "2025.09.15",
      type: "International Conference",
      title: "A Framework for Machine Unlearning Using Selective Knowledge Distillation into Soft Decision Tree",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Sungwoo Park", "Miyoung Lee", "Seungmin Rho"],
      journalOrConference: "20th Conference on Computer Science and Intelligence Systems (FedCSIS2025)"
    },
    {
      date: "2025.08.25",
      type: "International Conference",
      title: "Machine Unlearning via Distillation into Soft Decision Tree",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Sungwoo Park", "Seungmin Rho", "Mi Young Lee"],
      journalOrConference: "2025 International Conference on Platform Technology and Service (PlatCon-25)"
    },
    {
      date: "2025.08.25",
      type: "International Conference",
      title: "Selective Forgetting in ACGANs via Discriminator-Guided Unlearning",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park", "Seungmin Rho", "Mi Young Lee"],
      journalOrConference: "2025 International Conference on Platform Technology and Service (PlatCon-25)"
    },
    {
      date: "2025.05.02",
      type: "Domestic Conference",
      title: "Traffic Volume Forecasting On The Gyeongbu Expressway Using Time Series Deep Learning Models",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park", "Miyoung Lee", "Seungmin Rho"],
      journalOrConference: "The Korea Society for Electronic Commerce Spring Conference 2025"
    },
    {
      date: "2025.01.15",
      type: "International Conference",
      title: "An Online Grooming Detection System",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Seungmin Rho"],
      journalOrConference: "The 39th International Conference on Information Networking (ICOIN 2025)",
      note: "Poster"
    },
    {
      date: "2024.08.26",
      type: "International Conference",
      title: "Voice Phishing Detection Using Deep Learning-Based NLP and Knowledge Distillation Techniques",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Hyeonwoo Kim", "Seungmin Rho"],
      journalOrConference: "2024 International Conference on Platform Technology and Service (PlatCon-24)"
    },
    {
      date: "2024.08.26",
      type: "International Conference",
      title: "Enhancing Trust and Transparency in Machine Learning with Explainable AI: Applications to the Bank Marketing Dataset",
      authors: ["Byeongcheon Lee", "Sangmin Kim", "Hyeonwoo Kim", "Seungmin Rho"],
      journalOrConference: "2024 International Conference on Platform Technology and Service (PlatCon-24)"
    },
    {
      date: "2023.09",
      type: "Domestic Conference",
      title: "A Study on the Relationship between Vehicle Speed and the Presence of Traffic Safety Infrastructure and Pedestrians",
      authors: ["Seonghun Kim", "Byeongcheon Lee", "Sangmin Kim", "Byeongjun Noh"],
      journalOrConference: "KICS The 4th Korea Artificial Intelligence Conference"
    },
    {
      date: "2023.06.02",
      type: "Domestic Conference",
      title: "An Integrated Approach of Deep Learning and Feature Engineering for Robust Solar Irradiance Forecasting",
      authors: ["Dayoung So", "Jinyoung Oh", "Byeongcheon Lee", "Hwiyoung Ha", "Jihoon Moon"],
      journalOrConference: "KIISC Summer Conference 2023"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "Physiological Signal-Based Emotion Recognition in Conversations Using T-SNE",
      authors: ["Subin Lim", "Byeongcheon Lee", "Jihoon Moon"],
      journalOrConference: "KIPS ASK 2023 Spring Conference"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "Transformer-Based Emotion Classification Model Using Transfer Learning and SHAP Analysis",
      authors: ["Subin Lim", "Byeongcheon Lee", "Jihoon Moon"],
      journalOrConference: "KIPS ASK 2023 Spring Conference"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "Trends and Future Directions in Facial Expression Recognition Technology: A Text Mining Analysis Approach",
      authors: ["Insu Jeon", "Byeongcheon Lee", "Jihoon Moon"],
      journalOrConference: "KIPS ASK 2023 Spring Conference"
    },
    {
      date: "2023.05.19",
      type: "Domestic Conference",
      title: "Automated Machine Learning-Based Solar PV Forecasting Considering Solar Position Information",
      authors: ["Jinyoung Oh", "Dayoung So", "Byeongcheon Lee", "Jihoon Moon"],
      journalOrConference: "KIPS ASK 2023 Spring Conference",
      note: "Undergraduate Paper Competition Award (Bronze)"
    },
    {
      date: "2023.02.13",
      type: "International Conference",
      title: "A Literature Review on AWS-Based Cloud Computing: A Case in South Korea",
      authors: ["B. Lee", "J. Oh", "W. Shon", "J. Moon"],
      journalOrConference: "2023 IEEE International Conference on Big Data and Smart Computing (BigComp2023)",
      note: "Workshop Paper"
    },
    {
      date: "2022.12.16",
      type: "Domestic Conference",
      title: "Multimedia Big Data Analytics: A Survey and Data Analytics for Bioinformatics and Biomedical Discoveries",
      authors: ["B. Lee", "E. Kim", "Y. Lee", "J. Seo", "J. Moon"],
      journalOrConference: "The Korea Society for Electronic Commerce Fall Conference 2022",
      note: "Best Paper Award"
    },
    {
      date: "2022.12.16",
      type: "Domestic Conference",
      title: "Towards a Big Data System in Public Health: A Case Study of AWS and Data Visualization for Personalized Services",
      authors: ["J. Seo", "J. Jang", "T. Han", "B. Lee", "J. Moon"],
      journalOrConference: "The Korea Society for Electronic Commerce Fall Conference 2022"
    },
    {
      date: "2022.01.14",
      type: "Domestic Conference",
      title: "Identifying issues facing youth through emotional dialogue corpus",
      authors: ["Sangmin Kim", "Byeongcheon Lee", "Jiyoung Woo"],
      journalOrConference: "KSCI Winter Conference 2022"
    }
  ],
  patents: [
    {
      date: "2025-09-17",
      number: "10-2025-0133282",
      type: "Domestic",
      title: "Method for selective data forgetting in discriminator-based conditional generative adversarial networks",
      inventors: ["Miyoung Lee", "Seungmin Rho", "Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park"],
      applicant: "Chung-Ang University Industry-Academic Cooperation Foundation"
    },
    {
      date: "2025-08-08",
      number: "10-2025-0109528",
      type: "Domestic",
      title: "Machine unlearning method based on soft decision tree using selective knowledge distillation, apparatus and computer program for performing the method",
      inventors: ["Miyoung Lee", "Seungmin Rho", "Byeongcheon Lee", "Sangmin Kim", "Sungwoo Park"],
      applicant: "Chung-Ang University Industry-Academic Cooperation Foundation"
    },
    {
      date: "2025-04-10",
      number: "PCT/KR2025/004854",
      type: "PCT",
      title: "APPARATUS AND METHOD FOR REAL-TIME RECOGNITION OF VOICE PHISHING CONTEXT DURING A CALL",
      inventors: ["Byeongjun Noh", "Sangmin Kim", "Byeongcheon Lee", "Woonyoung Jeong"],
      applicant: "Soonchunhyang University Industry-Academic Cooperation Foundation"
    },
    {
      date: "2024-11-14",
      number: "10-2024-0161756",
      type: "Domestic",
      title: "METHOD FOR ANOMALY DETECTING BASED ON DEEP LEARNING MODEL IN TIME SERIES DATA RELATED TO MULTIVARIATE INDUSTRIAL THINGS TERMINALS, AND APPARATUS THEREOF",
      inventors: ["Sangmin Kim", "Byeongcheon Lee", "Jihoon Moon", "Seungmin Rho", "Muazzam Maqsood"],
      applicant: "Chung-Ang University Industry-Academic Cooperation Foundation"
    },
    {
      date: "2024-11-14",
      number: "10-2024-0161744",
      type: "Domestic",
      title: "METHOD FOR DETECTING ONLINE GROOMING CRIMES USING DEEP LEARNING-BASED NATURAL LANGUAGE PROCESSING MODELS, AND APPARATUS THEREOF",
      inventors: ["Sangmin Kim", "Byeongcheon Lee", "Jihoon Moon", "Seungmin Rho", "Muazzam Maqsood"],
      applicant: "Chung-Ang University Industry-Academic Cooperation Foundation"
    },
    {
      date: "2024-04-11",
      number: "10-2024-0048439",
      type: "Domestic",
      title: "Apparatus and method for real-time recognition of voice phishing context during a call",
      inventors: ["Byeongjun Noh", "Sangmin Kim", "Byeongcheon Lee", "Woonyoung Jeong"],
      applicant: "Soonchunhyang University Industry-Academic Cooperation Foundation"
    }
  ]
};