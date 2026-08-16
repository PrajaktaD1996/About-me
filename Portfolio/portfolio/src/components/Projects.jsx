import React from 'react';

const projectData = [
  {
    title: "Flipkart Lite",
    description: "A fully responsive e-commerce built with React and CSS3 integration featuring search debouncing, sorting, light-fast web store-front.",
    tech: ["React", "CSS3", "JavaScript"],
    liveLink: "https://flipkart-clone-flipkart-lite.vercel.app/",
    codeLink: "https://github.com/PrajaktaD1996/Flipkart-clone-Flipkart--Lite-/tree/main/e-commerce-catalog"
  },
  {
    title: "Weather App",
    description: "A dynamic weather application fetching real-time data from an external API with clean UI animations.",
    tech: ["React", "API Integration", "CSS3"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity tool allowing users to create, update, and organize daily tasks with local storage persistence.",
    tech: ["React", "Hooks", "HTML5"],
    liveLink: "#",
    codeLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}