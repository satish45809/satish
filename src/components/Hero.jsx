import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.jpg"

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["React Developer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
     <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src={profileImage}
            alt="Satish Kumar"
            className="hero-image"
          />
        </div>

        <h1 className="hero-title">Satish Nimushakavi</h1>

        <div className="hero-role">
          I'm a <span className="role-highlight">{text}</span>
          <span className="hero-cursor">|</span>
        </div>

        <p className="hero-description">
          Passionate Frontend Developer specializing in crafting responsive, high-performance web interfaces using React, JavaScript, and modern CSS. I thrive on building clean, accessible, and interactive user experiences that bring design concepts to life and deliver real-world impact.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn-primary"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          <button
            className="hero-btn-outline"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-socials">
  <a
    href="https://github.com/satish45809"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/satheesh1234"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://twitter.com/SatishNimushaki"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <FaTwitter />
  </a>
  <a
    href="mailto:satishnimushakavi193@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>
</div>

        <div className="scroll-indicator">
          <div className="scroll-outline">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
