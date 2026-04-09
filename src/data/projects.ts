export interface Project {
  name: string; // The name of the project
  image: string; // URL to the project's image
  technologies: string; // Technologies used in the project
  summary: string; // A brief summary of the project
  description: string; // A detailed description of the project
  repository: string; // Link to the project’s repository (GitHub)
  deployment: string; // Link to the project’s live deployment
  video: string; // Optional link to a video demonstration
  visible: boolean; // Whether the project is visible or not
}

export const projectList: Project[] = [
  {
    name: 'Marketly',
    image: '../../images/Marketly.png',
    technologies:
      'Next.js, FastAPI, Playwright, Supabase',
    summary:
      'Unified marketplace search engine that aggregates listings from multiple platforms into one streamlined interface. Search live results across sources, compare instantly, and save searches so you never miss a deal.',
    description: '',
    repository: 'https://github.com/jhadenn/Marketly',
    deployment: 'https://marketly-jet.vercel.app/',
    video: '',
    visible: true,
  },
  {
    name: 'TripSmith AI',
    image: '../../images/TRIPSMITH.png',
    technologies:
      'Python, OpenAI, ChromaDB, Gradio',
    summary:
      'An AI-powered travel planning assistant combining real-time weather support, destination Q&A, and personalized itinerary generation to create the perfect trip for any traveler.',
    description: '',
    repository: 'https://github.com/jhadenn/deploying-ai/tree/assignment-2',
    deployment: 'https://github.com/jhadenn/deploying-ai/tree/assignment-2',
    video: '',
    visible: true,
  },
  {
    name: 'Stock Catalog',
    image: '../../images/AutoStockCatalog.png',
    technologies:
      'React, Next.js, TypeScript, Tailwind CSS, Supabase',
    summary:
      'A comprehensive cataloging CRUD web application designed for an automotive retail store featuring a login system with secure access control.',
    description: '',
    repository: 'https://github.com/jhadenn/Automotive-Stock-Catalog',
    deployment: 'https://github.com/jhadenn/Automotive-Stock-Catalog',
    video: '',
    visible: true,
  },
    {
    name: 'Healing Filipino Hearts',
    image: '../../images/HFH-logo.PNG',
    technologies:
      'TypeScript, Tailwind CSS, Vite, Vercel',
    summary:
      'Website for Filipino community heart health awareness non-profit organization!',
    description: '',
    repository: 'https://github.com/jhadenn/Healing-Filipino-Hearts',
    deployment: 'https://healingfilipinohearts.org/',
    video: '',
    visible: true,
  },

  {
    name: 'Car Market Analysis',
    image: '../../images/DataAnalysisProject.png',
    technologies: 'Python, Pandas, NumPy, MatPlotLib',
    summary: 'Data analysis project that cleans and explores a recent data set, and provides numerous insights.',
    description: ``,
    repository:
      'https://github.com/jhadenn/Used-Car-Market-Analysis',
    deployment: 'https://github.com/jhadenn/Used-Car-Market-Analysis',
    video: '',
    visible: true,
  },

  {
    name: 'Word Dash',
    image: '../../images/WordDash.png',
    technologies: 'React, Next.js, Tailwind CSS, TypeScript',
    summary:
      'A real-time multiplayer word game where players compete to find words in a randomly generated letter grid. ',
    description: ``,
    repository: 'https://github.com/jhadenn/WordDash',
    deployment: 'https://github.com/jhadenn/WordDash',
    video: '',
    visible: true,
  },

  {
    name: 'StudyTok',
    image: '../../images/StudyTok.png',
    technologies: 'Next.js, Tailwind CSS, Gemini API, Google Cloud',
    summary:
      'AI-powered flashcard study tool that helps students learn and stay engaged with active recall.',
    description:
      '',
    repository: 'https://github.com/jhadenn/StudyTok',
    deployment: 'https://github.com/jhadenn/StudyTok',
    video: '',
    visible: true,
  },

  {
    name: 'Memory Match',
    image: '../../images/MemoryMatch.png',
    technologies: 'HTML, CSS, JavaScript',
    summary:
      'A memory matching card game built with HTML, CSS, and JavaScript.',
    description:
      '',
    repository: 'https://github.com/jhadenn/Memory-Match',
    deployment: 'https://github.com/jhadenn/Memory-Match',
    video: '',
    visible: true,
  },

  {
    name: 'Graphing Calculator',
    image: '../../images/Graphing Calculator.png',
    technologies: 'Java, Swing',
    summary: `A graphing calculator that allows users to plot functions, find roots, and more.`,
    description: '',
    repository: 'https://github.com/jhadenn/w25-csci2020u-lab09-jhadenn',
    deployment: 'https://github.com/jhadenn/w25-csci2020u-lab09-jhadenn',
    video: '',
    visible: true,
  },

  {
    name: 'File Sharing System',
    image: '../../images/FileSharing.png',
    technologies: 'Java, Swing',
    summary:
      'A custom-built file sharing system that allows users to upload and download text files between a local client and a central server.',
    description: '',
    repository: 'https://github.com/jhadenn/File-Sharing-System',
    deployment: 'https://github.com/jhadenn/File-Sharing-System',
    video: '',
    visible: true,
  },

  {
    name: 'Spam Detector',
    image: '../../images/SpamDetector.png',
    technologies: 'Java, JUnit, Swing',
    summary: 'A spam detector using a unigram approach for filtering. It trains on a dataset of emails, categorizing them, then tests its accuracy.',
    description: '',
    repository: 'https://github.com/jhadenn/Spam-Detector',
    deployment: 'https://github.com/jhadenn/Spam-Detector',
    video: '',
    visible: true,
  },
];

export default projectList;

// EMPTY PROJECT TEMPLATE

// {
//   name: "",
//   image: "../../images/",
//   technologies: "",
//   summary: "",
//   description: "",
//   repository: "",
//   deployment: "",
//   video: "",
//   visible: true,
// },
