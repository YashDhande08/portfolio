import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Yash Dhande</h3>
            <p>
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="footer-social-links">
              <a 
                href="https://github.com/YashDhande08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yashdhande69/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:dhandeyash94@gmail.com"
                className="footer-social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Yash Dhande. Made with <Heart className="footer-heart" size={16} /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
