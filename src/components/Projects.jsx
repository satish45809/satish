import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
export function Projects() {
  const exampleProjects = [
  {
    _id: 1,
    title: "React E-Commerce Dashboard",
    description:
      "An admin dashboard built with React, Redux, and Material-UI featuring analytics, inventory, and more.",
    technologies: ["React", "Redux", "Material-UI"],
    imageUrl: project1,// ✅ local image
    githubUrl: "https://github.com/satish45809/Insta-pro-pharma",
    liveUrl: "https://www.instapropharma.com/",
  },
  {
    _id: 2,
    title: "Real-Time Chat App",
    description:
      "A chat app using Socket.io, React, and Node.js. Supports private and group messages.",
    technologies: ["React", "Socket.io", "Node.js"],
    imageUrl:project2, // ✅ local image
    githubUrl: "https://github.com/satish45809/real-time-chat-app",
    liveUrl: "https://github.com/satish45809/real-time-chat-app",
  },
  {
    _id: 3,
    title: "Weather Dashboard",
    description:
      "A weather app with location-based forecasts, interactive maps, and PWA support.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    imageUrl: project3,  // ✅ local image
    githubUrl: "https://github.com/satish45809/weather-dashboard",
    liveUrl: "https://github.com/satish45809/weather-dashboard",
  },
  {
    _id: 4,
    title: "Movie Search App",
    description:
      "The Movie Search App is a dynamic, feature-rich React application that allows users to search for their favorite movies",
    technologies: ["React", "OMDB API", "Mapbox"],
    imageUrl: project4,  // ✅ local image
    githubUrl: "https://github.com/satish45809/Movie-Search-App",
    liveUrl: "https://github.com/satish45809/Movie-Search-App",
  },
];


  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="projects-grid">
          {exampleProjects.map((project, index) => (
            <div
              key={project._id}
              className="project-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-image-wrapper">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="project-placeholder">💻</div>
                )}
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Live Demo
                  </a>
                )}
              </div>

              <button onClick={() => setSelectedProject(project)} className="project-overlay-button">
                <span className="sr-only">View project details</span>
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal">
            <div className="project-modal-content">
              <div className="modal-image-wrapper">
                {selectedProject.imageUrl ? (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                ) : (
                  <div className="project-placeholder large">💻</div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="modal-close"
                >
                  ✕
                </button>
              </div>

              <div className="modal-details">
                <h3 className="modal-title gradient-text">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-tech-list">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      🐙 View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link primary"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
