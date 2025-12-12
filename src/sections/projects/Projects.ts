import './projects.scss';
import projectList from '../../data/projects.js';
import { populateProjects } from '../../utils/populateProjects.js';
import { gsap } from 'gsap';

export default function projects() {
  const projects = document.getElementById('projects');
  if (!projects) return;

  // Title
  const projectsTitle = document.createElement('div');
  projectsTitle.classList.add('wavy');
  projectsTitle.innerHTML = /* html */ `
    ${'PORTFOLIO'
      .split('')
      .map(
        (letter, index) => `<span style="--i:${index + 1}">${letter}</span> `
      )
      .join('')}
  `;
  projects.appendChild(projectsTitle);

  // Container and Projects Population
  const projectsContainer = document.createElement('div');
  projectsContainer.id = 'projects-container';
  projects.appendChild(projectsContainer);

  // Populate Projects
  populateProjects(0, projectList.length, projectsContainer);

  // Info Box
  const more = document.createElement('p');
  more.id = 'more';
  more.innerHTML =
    'The list gets updated regularly with new projects. Check back again soon!';
  projects.appendChild(more);

  // Card Animation
  const cards = document.querySelectorAll('.project-card');

  // Set the initial state of the cards
  gsap.set(cards, { opacity: 0, y: 50 });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      // Create an array of all the cards that are now intersecting
      const intersectingCards = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      // If any cards have intersected, animate them
      if (intersectingCards.length > 0) {
        gsap.to(intersectingCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15, // 0.15s delay between each card's animation
        });

        // Unobserve the cards that were just animated
        intersectingCards.forEach((card) => observer.unobserve(card));
      }
    },
    {
      threshold: 0.15, // Start when 15% of the card is visible
    }
  );

  // Tell the observer to watch each card
  cards.forEach((card) => {
    observer.observe(card);
  });
}
