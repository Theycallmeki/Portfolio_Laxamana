import React from 'react';

function About() {
  return (
    <section id="about" className="section" style={styles.section}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.container}>
        <div style={styles.bio}>
          <p>
            I am a dedicated Computer Engineering student with a strong passion for full-stack web development, AI engineering, and embedded systems. I specialize in building scalable and efficient solutions that bring software and hardware together in meaningful ways.
          </p>
          <p>
            My experience includes modern web platforms using React, Node.js, Python, Django, and Django REST Framework, as well as AI-integrated applications and Raspberry Pi automation. I design and consume RESTful APIs for seamless service communication and work with databases like PostgreSQL, SQLite, and MongoDB to support robust, data-driven applications.
          </p>
          <p>
            Beyond technical development, I have a growing interest in data, including areas like analysis and visualization. I stay updated on emerging technologies and always look forward to collaborating on forward-thinking projects that combine code and creativity to build something impactful.
          </p>
        </div>
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
    marginBottom: '40px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bio: {
    fontSize: '18px',
    lineHeight: '1.7',
    textAlign: 'left',
    padding: '0 10px',
  },
};

export default About;
