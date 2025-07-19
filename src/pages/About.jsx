import React from 'react';

function About() {
  return (
    <section id="about" className="section" style={styles.section}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.container}>
        <div style={styles.bio}>
          <p>
            I am a dedicated Computer Engineering student with a strong passion for embedded systems, AI engineering, and full-stack web development. I specialize in building efficient and scalable solutions that integrate both hardware and software components.
          </p>
          <p>
            My experience includes developing Raspberry Pi automation projects, AI-integrated applications, and modern web platforms using technologies like React, Node.js, Python, Django, and Django REST Framework. I design and consume RESTful APIs to enable seamless data communication across services, and I work with databases like PostgreSQL, SQLite, and MongoDB to support reliable, data-driven applications.
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
