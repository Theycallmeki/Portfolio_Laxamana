import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Smart Inventory System',
      description: 'An AI-powered self-service convenience store app built with React, Node.js, and SQLite.',
      link: 'https://github.com/yourusername/smart-inventory-system'
    },
    {
      title: 'Raspberry Pi LED Control',
      description: 'A Python-based embedded system that controls GPIO pins for LED automation.',
      link: 'https://github.com/yourusername/pi-led-control'
    },
    {
      title: 'Netflix EDA Dashboard',
      description: 'An interactive Python dashboard analyzing Netflix movies and shows using pandas and seaborn.',
      link: 'https://github.com/yourusername/netflix-eda'
    }
  ];

  return (
    <section id="projects" className="section" style={styles.section}>
      <h1 style={styles.heading}>My Projects</h1>
      <p style={styles.subtext}>Here are some of the projects I've worked on.</p>

      <div style={styles.cardGrid}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              🔗 View Project
            </a>
          </div>
        ))}
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
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    width: '300px',
    textAlign: 'left',
    color: 'white',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    marginBottom: '12px',
  },
  link: {
    fontSize: '14px',
    color: '#00bfc1',
    textDecoration: 'none',
  }
};

export default Projects;
