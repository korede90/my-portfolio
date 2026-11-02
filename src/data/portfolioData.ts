export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  filterTag: 'Machine Learning' | 'FinTech & Risk' | 'Computer Vision';
  shortDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  repoUrl: string;
  repoLabel: string;
  image: string;
  imageAlt: string;
  gallery: ProjectGalleryItem[];
}

export interface AdditionalRepoItem {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export const PROFILE = {
  fullName: 'Korede Oyebamiji',
  title: 'Artificial Intelligence & Machine Learning Developer',
  tagline:
    'I build practical AI, machine learning, and Python web applications that turn complex data into working software.',
  summary:
    'Certified AI & Machine Learning Developer (RAIN) specializing in predictive modeling, data analysis, computer vision, and full-stack Python web services.',
  location: 'Nigeria · Open to Remote & On-Site Roles',
  email: 'koredeoyebamiji68@gmail.com',
  githubUrl: 'https://github.com/korede90',
  linkedinUrl: 'https://www.linkedin.com/in/korede-oyebamiji-aa3a22295/',
  certification: {
    title: 'Certified Artificial Intelligence and Machine Learning Developer',
    institution: 'Robotics and Artificial Intelligence Nigeria (RAIN)',
    description:
      'Comprehensive hands-on certification covering Python programming, exploratory data analysis, supervised and unsupervised machine learning, computer vision, and end-to-end model deployment.',
  },
};

export const WHAT_I_DO: ServiceItem[] = [
  {
    title: 'Machine Learning Models',
    description:
      'Training and evaluating predictive models for regression, classification, forecasting, and anomaly detection using scikit-learn, XGBoost, and LightGBM.',
  },
  {
    title: 'Data Analysis & Engineering',
    description:
      'Cleaning raw datasets, engineering domain features, uncovering patterns, and creating clear visual reports with pandas, NumPy, and Matplotlib.',
  },
  {
    title: 'AI Web Apps & REST APIs',
    description:
      'Connecting trained machine learning models to clean, responsive web interfaces and APIs using FastAPI, Flask, Streamlit, and React.',
  },
  {
    title: 'Computer Vision Systems',
    description:
      'Building face recognition, image classification, and object detection workflows with OpenCV, YOLOv8, and Keras.',
  },
];

export const ABOUT_TEXT = [
  "Hello, I'm Korede Oyebamiji—an Artificial Intelligence and Machine Learning Developer trained and certified at Robotics and Artificial Intelligence Nigeria (RAIN).",
  'I focus on applying Python, data analysis, and machine learning to practical business and operational challenges. Rather than keeping models isolated in notebooks, I package them into clean, reliable web applications that people can use directly.',
  'Across my projects, I have developed a multi-market Nigerian food price forecasting and restocking platform (Naija Price AI), an explainable payment fraud detection engine, a computer vision staff attendance system, and a full-stack flight price prediction web app.',
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'naija-price-ai',
    number: '01',
    title: 'Naija Price AI',
    category: 'Price Forecasting & Market Intelligence',
    filterTag: 'Machine Learning',
    shortDescription:
      'An AI-powered platform that tracks food commodity prices across Nigerian markets, forecasts short-term price trends, and helps retailers plan restocking budgets.',
    problem:
      'Food retailers and households face frequent price changes and wide price differences across regional markets, making it difficult to decide when and where to buy staples.',
    solution:
      'Built a full-stack web platform powered by XGBoost and Random Forest forecasting models across 10 Nigerian food staples and 11 regional markets, complete with local market unit conversions (50kg bag, paint bucket, mudu, derica), an interactive Leaflet market map, and an anomaly detector that screens community-submitted prices.',
    keyFeatures: [
      '2-week, 1-month, and 2-month price forecasts across 10 staple foods with uncertainty ranges.',
      'Regional market comparison across 11 Nigerian markets in local measurement units.',
      'Automated anomaly detection (Isolation Forest & statistical Z-scores) to filter inaccurate price submissions.',
      'Retailer Restocking Calculator to estimate procurement costs and compare markets.',
    ],
    technologies: [
      'Python',
      'XGBoost',
      'scikit-learn',
      'pandas',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'SQLite',
    ],
    repoUrl: 'https://github.com/korede90',
    repoLabel: 'GitHub Profile',
    image: './images/projects/naijaprice-forecasts.png',
    imageAlt: 'Naija Price AI forecast comparison chart',
    gallery: [
      {
        src: './images/projects/naijaprice-forecasts.png',
        alt: 'Naija Price AI Forecast Comparison Chart',
        caption: 'Out-of-sample price forecasts comparing XGBoost, Random Forest, and baseline models.',
      },
      {
        src: './images/projects/naijaprice-anomaly.png',
        alt: 'Naija Price AI Anomaly Detection Evaluation',
        caption: 'Hybrid Isolation Forest + Robust Z-Score validation on crowdsourced market submissions.',
      },
      {
        src: './images/projects/naijaprice-trends.png',
        alt: 'Naija Price AI Regional Market Price Trends',
        caption: 'Historical Nigerian food commodity trajectories and regional price comparisons.',
      },
    ],
  },
  {
    id: 'financial-fraud-detection',
    number: '02',
    title: 'Financial Fraud Detection',
    category: 'FinTech & Explainable Risk Scoring',
    filterTag: 'FinTech & Risk',
    shortDescription:
      'A real-time payment fraud detection system that scores transactions using customer spending behavior, travel speed, and explainable machine learning.',
    problem:
      'Fraudulent transactions make up less than 1% of payment volume, causing standard models to miss fraud while rigid rules block legitimate customers.',
    solution:
      'Developed a hybrid fraud detection pipeline combining a class-weighted LightGBM classifier with an unsupervised Isolation Forest anomaly detector across 19 behavioral and geospatial velocity features, paired with per-transaction SHAP explanations and an analyst review console.',
    keyFeatures: [
      'Tracks 1-hour and 24-hour spending velocity, 30-day customer baselines, and travel speed between transactions.',
      'Combines supervised classification (LightGBM) with unsupervised anomaly detection (Isolation Forest).',
      'Generates clear SHAP reason codes explaining why each flagged transaction was routed for review.',
      'Includes a FastAPI scoring service, web investigation queue, and Streamlit analyst dashboard.',
    ],
    technologies: [
      'Python',
      'LightGBM',
      'scikit-learn',
      'SHAP',
      'pandas',
      'FastAPI',
      'Streamlit',
    ],
    repoUrl: 'https://github.com/korede90',
    repoLabel: 'GitHub Profile',
    image: './images/projects/fraud-detection-preview.svg',
    imageAlt: 'Financial Fraud Detection risk scoring overview',
    gallery: [
      {
        src: './images/projects/fraud-detection-preview.svg',
        alt: 'Financial Fraud Detection Engine Overview',
        caption: 'Hybrid LightGBM + Isolation Forest risk scoring and SHAP feature attribution summary.',
      },
    ],
  },
  {
    id: 'face-attendance-system',
    number: '03',
    title: 'Face Attendance System',
    category: 'Computer Vision Web Application',
    filterTag: 'Computer Vision',
    shortDescription:
      'A computer vision web application that registers staff via webcam, recognizes faces automatically, and logs daily attendance to CSV records.',
    problem:
      'Manual paper attendance sheets are slow to manage, prone to duplicate entries, and tedious to compile daily.',
    solution:
      'Created a Flask and OpenCV web application that captures facial images through a webcam, trains a scikit-learn K-Nearest Neighbors (KNN) classifier on 50×50 face crops, and records timestamped daily attendance automatically.',
    keyFeatures: [
      'One-step staff registration that captures 10 facial samples via webcam and retrains the model automatically.',
      'Frontal face detection with OpenCV Haar Cascades and K-Nearest Neighbors classification.',
      'Automatic daily CSV attendance logging with duplicate sign-in prevention for the same day.',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'scikit-learn',
      'Flask',
      'pandas',
      'NumPy',
      'Bootstrap',
    ],
    repoUrl: 'https://github.com/korede90/face-attendance',
    repoLabel: 'View Repository',
    image: './images/projects/face-attendance-ui.png',
    imageAlt: 'Face Attendance System Flask web interface',
    gallery: [
      {
        src: './images/projects/face-attendance-ui.png',
        alt: 'Face Recognition Attendance System Web Interface',
        caption: 'Flask web dashboard displaying Today\'s Attendance and New Staff webcam enrollment.',
      },
    ],
  },
  {
    id: 'flight-price-prediction',
    number: '04',
    title: 'Flight Price Prediction',
    category: 'Predictive Modeling & Web App',
    filterTag: 'Machine Learning',
    shortDescription:
      'A full-stack web application that estimates airline ticket prices based on route, airline, cabin class, stops, and booking lead time.',
    problem:
      'Airfare varies widely depending on carrier, travel time slot, number of stops, and how many days in advance a flight is booked.',
    solution:
      'Trained a scikit-learn regression model on 8 flight itinerary features and connected it to a Flask REST API and a React frontend where users enter trip details to receive an instant fare estimate.',
    keyFeatures: [
      'Predicts ticket prices across 6 airlines and 6 metro cities based on 8 itinerary inputs.',
      'Automatically calculates days until departure from the selected travel date.',
      'Decoupled React + Vite frontend communicating with a Python Flask prediction endpoint.',
    ],
    technologies: [
      'Python',
      'scikit-learn',
      'Flask',
      'React',
      'Vite',
      'Axios',
      'Tailwind CSS',
    ],
    repoUrl: 'https://github.com/korede90/Flight-price-prediction',
    repoLabel: 'View Repository',
    image: './images/projects/flight-price-ui.png',
    imageAlt: 'Flight Price Prediction React web interface',
    gallery: [
      {
        src: './images/projects/flight-price-ui.png',
        alt: 'Flight Price Prediction React Web Interface',
        caption: 'React itinerary form connected to the Flask /predict regression endpoint.',
      },
    ],
  },
];

export const ADDITIONAL_REPOS: AdditionalRepoItem[] = [
  {
    name: 'streamlit_demo-RAIN',
    description: 'Interactive YOLOv8 computer vision object detection web app built with Streamlit.',
    tags: ['Python', 'YOLOv8', 'Streamlit'],
    url: 'https://github.com/korede90/streamlit_demo-RAIN',
  },
  {
    name: 'account',
    description: 'Custom spaCy Named Entity Recognition (NER) model and Flask app for extracting account numbers.',
    tags: ['Python', 'spaCy NER', 'Flask'],
    url: 'https://github.com/korede90/account',
  },
  {
    name: 'amount-extraction',
    description: 'Flask OCR and Keras pipeline for extracting monetary amounts from receipt images.',
    tags: ['Python', 'Keras', 'Flask', 'Docker'],
    url: 'https://github.com/korede90/amount-extraction',
  },
  {
    name: 'text-classification',
    description: 'Customer support intent classification notebook trained on the Bitext NLP dataset.',
    tags: ['Python', 'NLP', 'Jupyter'],
    url: 'https://github.com/korede90/text-classification',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Data Analysis',
    description: 'Core languages and data manipulation libraries I use daily.',
    skills: [
      'Python',
      'Data Analysis',
      'pandas',
      'NumPy',
      'SQL (SQLite / PostgreSQL)',
      'JavaScript',
      'HTML5 & CSS3',
    ],
  },
  {
    title: 'Machine Learning & AI',
    description: 'Modeling techniques and libraries demonstrated across my projects.',
    skills: [
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'Regression & Classification',
      'Time-Series Forecasting',
      'Anomaly Detection (Isolation Forest)',
      'SHAP Explainability',
    ],
  },
  {
    title: 'Computer Vision & NLP',
    description: 'Applied image recognition and natural language processing tools.',
    skills: [
      'OpenCV',
      'Face Detection & Recognition',
      'YOLOv8',
      'TensorFlow / Keras',
      'spaCy (NER)',
      'NLTK',
    ],
  },
  {
    title: 'Web Frameworks & Developer Tools',
    description: 'Tools for turning machine learning models into usable applications.',
    skills: [
      'FastAPI',
      'Flask',
      'Streamlit',
      'React & Vite',
      'Tailwind CSS',
      'Git & GitHub',
      'Jupyter Notebooks',
    ],
  },
];
