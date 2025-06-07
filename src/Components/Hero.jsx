import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background gradient */}
      <div className="hero-bg"></div>
      
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="hero-bg-circle-1"></div>
        <div className="hero-bg-circle-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-avatar">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-inner">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFJHnctRxO5WA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709226332411?e=1754524800&v=beta&t=aShXee5jt944_7XMDi0ctrBzYneJTwD_BWBr7VMsk7M"
                  alt="Profile"
                  className="hero-avatar-img"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="hero-name-gradient">
                Yash Dhande
              </span>
            </h1>
            <p className="hero-title">
              Full Stack Developer
            </p>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly applications
            </p>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a 
              href="https://github.com/YashDhande08?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yashdhande69/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:dhandeyash94@gmail.com"
              className="hero-social-link"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <button
              onClick={scrollToAbout}
              className="hero-cta-btn"
            >
              Learn More About Me
              <ArrowDown className="hero-cta-icon" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
