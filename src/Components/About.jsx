import { Code, Palette, Zap, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/Tailwind', level: 95 },
    { name: 'MongoDB', level: 70 },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering high-quality solutions that exceed client expectations.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About <span className="about-title-gradient">Me</span>
          </h2>
          <p className="about-subtitle">
            I'm a passionate developer with 1+ years of experience creating digital solutions
          </p>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <h3>My Story</h3>
            <p>
              I started my journey in web development in college days, and since then I've been passionate 
              about creating digital experiences that make a difference. I love turning complex problems 
              into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and mentoring.
            </p>
            
            {/* Skills */}
            <div className="about-skills">
              <h4>Skills</h4>
              <div>
                {skills.map((skill,index) => (
                  <div key={skill.name} className="about-skill-item">
                    <div className="about-skill-header">
                      <span className="about-skill-name">{skill.name}</span>
                      <span className="about-skill-level">{skill.level}%</span>
                    </div>
                    <div className="about-skill-bar">
                      <div 
                        className="about-skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="about-feature-card"
              >
                <div className="about-feature-icon">
                  <div className="about-feature-icon-wrapper">
                    <feature.icon size={24} />
                  </div>
                </div>
                <h4 className="about-feature-title">{feature.title}</h4>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
