import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Satish Nimushakavi</p>
        <div className="footer-icons">
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
        <p className="footer-copy">&copy; {new Date().getFullYear()} Satish Nimushakavi. All rights reserved.</p>
      </div>
    </footer>
  );
}
