import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [hovered, setHovered] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_cdge688', 'template_juxpl5t', formData, 'ASbvGcAxyGztI8pe9')
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  const handleHover = (platform) => setHovered(platform);
  const handleLeave = () => setHovered(null);

  const getSocialStyle = (platform) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: hovered === platform ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
    padding: '16px',
    borderRadius: '12px',
    color: 'white',
    textDecoration: 'none',
    width: '100px',
    transform: hovered === platform ? 'scale(1.08)' : 'scale(1)',
    transition: 'all 0.3s ease',
  });

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.subtext}>Feel free to reach out via social media or the form below!</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.socialGrid}>
        <a
          href="https://www.facebook.com/kian.laxamana.3"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleHover('facebook')}
          onMouseLeave={handleLeave}
          style={getSocialStyle('facebook')}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            style={styles.icon}
          />
          <span>Facebook</span>
        </a>

        <a
          href="https://github.com/Theycallmeki"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleHover('github')}
          onMouseLeave={handleLeave}
          style={getSocialStyle('github')}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
            style={styles.icon}
          />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/kian-laxamana/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleHover('linkedin')}
          onMouseLeave={handleLeave}
          style={getSocialStyle('linkedin')}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            style={styles.icon}
          />
          <span>LinkedIn</span>
        </a>
      </div>

      <div style={styles.contactInfo}>
        <p><strong>Phone:</strong> +63 945 463 7549</p>
        <p><strong>Email:</strong> laxamana.kian13@gmail.com</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(4px)',
  },
  heading: {
    fontSize: '42px',
    marginBottom: '10px',
    color: 'white',
  },
  subtext: {
    fontSize: '18px',
    marginBottom: '30px',
    color: 'white',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '16px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    background: 'linear-gradient(135deg, #007bff, #0056b3)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  socialGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  icon: {
    width: '32px',
    height: '32px',
    marginBottom: '8px',
  },
  contactInfo: {
    color: 'white',
    marginTop: '20px',
  },
};

export default Contact;
