import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const contactDetails = [
    { icon: <FaEnvelope />, label: "Email", value: "satishnimushakavi193@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 7993749616" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Amalapuram, AP, India" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/satish45809" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/satheesh1234" },
    { icon: <FaTwitter />, url: "https://twitter.com/SatishNimushaki" },
    { icon: <FaEnvelope />, url: "mailto:satishnimushakavi193@gmail.com" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind? Let's connect and build something amazing!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="card-heading">Get In Touch</h3>
              <p className="card-description">
                I'm always excited to collaborate on exciting web projects and creative ideas.
              </p>

              <div className="contact-details">
                {contactDetails.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="icon-box">{item.icon}</div>
                    <div>
                      <div className="label">{item.label}</div>
                      <div className="value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form is just shown but does not submit */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Say hello..." required />
              </div>

              <button type="submit" className="submit-btn" required>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
