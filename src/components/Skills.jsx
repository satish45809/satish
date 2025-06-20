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

    { name: "Git", category: "Tools", level: 95, icon: "📝" },
    { name: "Netlify", category: "Tools", level: 85, icon: "🌐" },
    { name: "Vercel", category: "Tools", level: 88, icon: "▲" },
    { name: "Webpack", category: "Tools", level: 75, icon: "📦" },
  ];

  useEffect(() => {
    setSkills(exampleSkills);
  }, []);

  const categories = ["Frontend", "Backend", "Tools"];

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
          {categories.map((category, categoryIndex) => (
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
            I'm a passionate frontend developer dedicated to learning and growing in the ever-evolving world of web development. I'm currently exploring React best practices, modern JavaScript (ES6+), and building dynamic UIs with frameworks like Next.js. I enjoy working on personal projects, enhancing my skills through hands-on experience, and staying updated with the latest trends in frontend technologies
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
