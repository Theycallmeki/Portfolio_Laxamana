import React from 'react';

function Home() {
  return (
    <section id="home" className="section" style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>Hi, I'm Kian Jacob Laxamana</h1>
        <h2 style={styles.subtitle}>Computer Engineering Student | AI & Embedded Systems Enthusiast</h2>
        <p style={styles.description}>
          I build intelligent systems that combine hardware, software, and data. Let's create something amazing.
        </p>
        <a href="#projects" style={styles.cta}>View My Work</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    textAlign: 'center',
    backdropFilter: 'blur(2px)',
  },
  container: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ccc',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  cta: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#00bfc1',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'background 0.3s',
  },
};

export default Home;
