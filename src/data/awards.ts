export interface Award {
  color: number; // Color
  title: string; // The title of the award
  link: string; // Link to the award's details (image, page, etc.)
  awarder: string; // The name of the organization that gave the award
  awarderLink: string; // Link to the awarder's website
  description: string; // Description of the award
  logo: string;      // Image for experience
}

// The list of the awards used in the Awards section
export const awardList: Award[] = [
  {
    color: 0,
    title: `Brilliant Catalyst Innovation Challenge`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:7291982288244871168/`,
    awarder: `Top Placement`,
    awarderLink: ``,
    description: `Placed Top 9 out of 20 teams in an 8-day innovation challenge focused on solving real-world healthcare problems using AI and technology. Collaborated on designing an AI-powered scheduling system to reduce patient wait times, improve care experience, and lower administrative overhead for hospitals and clinics.`,
    logo: '/assets/Brilliant_Catalyst.jpg',   
  },
  {
    color: 1,
    title: `2025 HackHive`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:7296261523314741250/`,
    awarder: `Participant`,
    awarderLink: `https://www.csswinner.com/details/michael-kolesidis/16936`,
    description: `Competed in a 24-hour hackathon focused on AI-driven solutions, where our team built StudyTok, an AI-powered, learning platform that enhances active recall. Developed features including AI-generated flashcards, speech recognition, and real-time feedback using Next.js, React, Flask, and Google Cloud APIs.`,
    logo: '/assets/Hackhive.png',      
  },
  {
    color: 3,
    title: `2024 HackHive`,
    link: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    awarder: `Participant`,
    awarderLink: `https://www.bestcss.in/user/detail/michaelkolesidiscom-34682`,
    description: `Participated in a Microsoft Azure–focused hackathon where our team designed EventFlow, a productivity application that converts course syllabi and date-based documents into automatically generated Google Calendar events. Focused on system design, user experience, and cloud-based workflow planning to demonstrate how Azure services could support scalable academic productivity tools.`,
    logo: '/assets/Hackhive.png',
  },
];
