import React, { useEffect, useState } from "react";

export function Skills() {
  const [skills, setSkills] = useState([]);

  const exampleSkills = [
    { name: "React", category: "Frontend", level: 95, icon: "⚛️" },
    { name: "JavaScript", category: "Frontend", level: 92, icon: "🟘" },
    { name: "HTML5", category: "Frontend", level: 95, icon: "🌐" },
    { name: "CSS3", category: "Frontend", level: 90, icon: "🎨" },

    { name: "Node.js", category: "Backend", level: 90, icon: "🟢" },
    { name: "Express.js", category: "Backend", level: 88, icon: "🚀" },
    { name: "Python", category: "Backend", level: 82, icon: "🐍" },
    { name: "REST APIs", category: "Backend", level: 92, icon: "🔗" },

    { name: "MySQL", category: "Databases", level: 85, icon: "🛢️" },
    { name: "MongoDB", category: "Databases", level: 80, icon: "🍃" },

    { name: "Git", category: "Tools", level: 95, icon: "📝" },
    { name: "Netlify", category: "Tools", level: 85, icon: "🌐" },
    { name: "Vercel", category: "Tools", level: 88, icon: "▲" },
    { name: "Webpack", category: "Tools", level: 75, icon: "📦" },
  ];

  useEffect(() => {
    setSkills(exampleSkills);
  }, []);

  const categories = ["Frontend", "Backend", "Databases", "Tools"];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category} className="skills-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <h3>Continuous Learning</h3>
          <p>
            Passionate Full-Stack Developer skilled in crafting responsive, high-performance web applications using React, JavaScript, modern CSS, and robust backend technologies like Node.js, Express, and MySQL. I thrive on building clean, accessible, and interactive user experiences while designing scalable server-side logic and RESTful APIs that deliver real-world impact and seamless functionality across the stack.
          </p>
          <div className="skills-icons">
            {["📚", "🔬", "🚀", "💡", "🎯", "⚡"].map((emoji, index) => (
              <div key={index} className="icon-circle">
                <span>{emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
