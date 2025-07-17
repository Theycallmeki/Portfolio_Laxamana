import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section" style={styles.section}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.subtext}>Feel free to reach out via email or social media!</p>

      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="5" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.links}>
        <a href="mailto:youremail@example.com" style={styles.link}>📧 youremail@example.com</a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={styles.link}>🐦 Twitter</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.link}>💻 GitHub</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    color: 'white',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2px)',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  textarea: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  button: {
    padding: '12px 20px',
    background: 'linear-gradient(to right, #00bfc1, #cc0066)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '16px',
    color: '#ccc',
  },
  link: {
    color: '#00bfc1',
    textDecoration: 'none',
  },
};

export default Contact;
