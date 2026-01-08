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
    name: 'Stock Catalog',
    image: '../../images/AutoStockCatalog.png',
    technologies:
      'React, Next.js, TypeScript, Tailwind CSS, Supabase',
    summary:
      'A comprehensive cataloging CRUD web application designed for an automotive retail store featuring a login system with secure access control.',
    description: '',
    repository: '',
    deployment: '',
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
    deployment: '',
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
    repository: '',
    deployment: '',
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
    repository: '',
    deployment: '',
    video: '',
    visible: true,
  },

  {
    name: 'Graphing Calculator',
    image: '../../images/Graphing Calculator.png',
    technologies: 'Java, Swing',
    summary: `A graphing calculator that allows users to plot functions, find roots, and more.`,
    description: '',
    repository: '',
    deployment: '',
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
    repository: '',
    deployment: '',
    video: '',
    visible: true,
  },

  {
    name: 'Spam Detector',
    image: '../../images/SpamDetector.png',
    technologies: 'Java, JUnit, Swing',
    summary: 'A spam detector using a unigram approach for filtering. It trains on a dataset of emails, categorizing them, then tests its accuracy.',
    description: '',
    repository: '',
    deployment: '',
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
