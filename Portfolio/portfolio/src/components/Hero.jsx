import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Prajakta Deokar</span></h1>
        <h2>Frontend & React Developer</h2>
        <p>I build clean, responsive, and dynamic web applications using HTML, CSS, and React.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn primary-btn">View Work</a>
          <a href="#contact" className="btn secondary-btn">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}