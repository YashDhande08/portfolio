import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Resume Builder',
      description: 'An resume builder developed using React, Node.js, and Python. Enables users to generate tailored resumes with real-time preview, section customization, and PDF export.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      githubUrl: 'https://github.com/YashDhande08/Generater_Resume',
      
    },
    {
      id: 2,
      title: 'Student Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Python', 'Flask', 'SQLite', ],
      githubUrl: 'https://github.com/YashDhande08/Student-Management',
      
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather tracking.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React', 'API Integration', 'Charts.js', 'CSS3'],
      githubUrl: 'https://github.com',
      
    },
    {
      id: 4,
      title: 'Loan Prediction',
      description: 'Analytics dashboard for Loan Prediction metrics with data visualization, reporting features, and automated insights generation with the help of Machine Learning .',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL','Machine Learning'],
      githubUrl: 'https://github.com/YashDhande08/Loan-Predication',
     
    },
    {
      id: 5,
      title: 'College Faculty Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design, smooth animations, and contact integration.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['Html', ' CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/YashDhande08/College_Faculty_Portfolio',
      
    },
    {
      id: 6,
      title: 'Food Delivery ',
      description: 'A Food Delivery with ingredient-based search, meal planning features, and nutritional information integration.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      technologies: ['React', 'Redux', 'API Integration', 'SQLite'],
      githubUrl: 'https://github.com/YashDhande08/Food_Website',
      
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            My <span className="projects-title-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a 
            href="https://github.com/YashDhande08?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-cta-btn"
          >
            <Github className="projects-cta-icon" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
