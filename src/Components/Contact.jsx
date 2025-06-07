import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. I'll get back to you soon!");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dhandeyash94@gmail.com',
      link: 'mailto:dhandeyash94@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9921103840',
      link: '9921103840'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagpur - Maharashtra, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Get In <span className="contact-title-gradient">Touch</span>
          </h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm currently available for freelance work and Looking for  full-time opportunities.
              If you have a project in mind or just want to chat about technology,
              feel free to reach out!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-info-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="contact-form-submit"
              >
                <Send className="contact-form-submit-icon" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
