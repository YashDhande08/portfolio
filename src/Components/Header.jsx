import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div>
            <span className="header-logo">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header-nav">
            <button 
              onClick={() => scrollToSection('home')}
              className="header-nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="header-nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="header-nav-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="header-nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-mobile-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <div className="header-mobile-nav">
              <button
                onClick={() => scrollToSection('home')}
                className="header-mobile-nav-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="header-mobile-nav-link"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="header-mobile-nav-link"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="header-mobile-nav-link"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
