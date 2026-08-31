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
    title: "Aai chat-Bot",
    description: "An AI-powered conversational web application that simulates the quintessential dramatic, guilt-inducing, but deeply loving Indian mother persona.",
    tech: ["React", "Vite", "Tailwind CSS"," Node.js / LLM API Integration"],
    liveLink: "https://chat-aai-bot.vercel.app/",
    codeLink: "https://github.com/PrajaktaD1996/Chat-aai-bot"
  },
  {
    title: "Industrial-Plant-Safety-Predictive-Monitoring-System",
    description: "An end-to-end IoT monitoring system that reads sensor data via an ESP8266 microcontroller, logs it to ThingSpeak cloud, and visualizes live telemetry on a React frontend dashboard.",
    tech: ["Arduino IDE, ESP8266 Wi-Fi Microcontroller", "ThingSpeak REST API / Cloud Channel", "React, Vite, Axios, Chart.js, CSS"],
    liveLink: "https://weatheriotdashboard.vercel.app/",
    codeLink: "https://github.com/PrajaktaD1996/Industrial-Plant-Safety-Predictive-Monitoring-System"
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