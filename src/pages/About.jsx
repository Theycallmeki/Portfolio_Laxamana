import React from 'react';

function About() {
  return (
    <section id="about" className="section" style={styles.section}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.container}>
        <img
          src="/your-profile-image.jpg"
          alt="Profile"
          style={styles.image}
        />
        <div style={styles.bio}>
          <p>
            Hello! I'm <strong>Kian Jacob Laxamana</strong>, a Computer Engineering student passionate about embedded systems, AI engineering, and full-stack web development.
          </p>
          <p>
            I enjoy building smart systems that combine hardware and software — whether it's a Raspberry Pi automation script or a React-based web platform. I'm also experienced in Python, Node.js, C/C++, and Assembly.
          </p>
          <p>
            Outside of coding, I enjoy digital art and exploring new technologies. I'm always eager to collaborate on innovative tech projects and continue learning.
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
  image: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid white',
  },
  bio: {
    fontSize: '18px',
    lineHeight: '1.7',
    textAlign: 'left',
    padding: '0 10px',
  },
};

export default About;
