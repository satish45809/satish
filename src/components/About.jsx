import React from "react";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-underline"></div>
        </div>

        <div className="about-grid">
          {/* Left Side */}
          <div className="about-left">
            {/* My Journey */}
            <div className="about-card journey">
              <h3 className="card-title">My Journey</h3>
              <p>
                I'm Satish Nimushakavi, a passionate Full-Stack Developer with a solid foundation in web development. 
                I started with HTML, CSS, and JavaScript, then advanced to React and Git on the frontend, and later explored Node.js, Express, and MySQL on the backend.
                Through self-learning and hands-on projects, I've built clean, interactive, and user-friendly applications with practical experience across the full stack.
              </p>
            </div>

            {/* What I Do */}
            <div className="about-row">
              <div className="about-card work">
                <h3 className="card-title">What I Do</h3>
                <p>
                  I specialize in crafting responsive websites and web applications using the latest
                  frontend technologies. My skills include React, JavaScript (ES6+), HTML5, CSS3, and Git.
                  I'm committed to writing clean, reusable code and continuously improving my skills
                  through personal projects and online learning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Stats */}
          <div className="about-stats">
            <div className="stats-box">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number blue">10+</div>
                  <div className="stat-label">Frontend Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number purple">3</div>
                  <div className="stat-label">Internships</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number pink">5+</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number green">100%</div>
                  <div className="stat-label">Commitment to Learn</div>
                </div>
              </div>
            </div>
            <div className="blur-circle blue-blur"></div>
            <div className="blur-circle pink-blur"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
