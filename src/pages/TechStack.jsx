import React from 'react';

function TechStack() {
  const techCategories = {
    Frontend: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    Backend: ['Node.js', 'Express', 'SQLite', 'MongoDB'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'],
    Hardware: ['Arduino', 'Raspberry Pi', 'C/C++', 'Assembly', 'GPIO']
  };

  return (
    <section id="techstack" style={styles.section}>
      <h1 style={styles.heading}>My Tech Stack</h1>
      <div style={styles.grid}>
        {Object.entries(techCategories).map(([category, items]) => (
          <div key={category} style={styles.card}>
            <h2 style={styles.subheading}>{category}</h2>
            <ul style={styles.list}>
              {items.map((item) => (
                <li key={item} style={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    padding: '60px 20px',
    color: 'white',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2px)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(6px)',
    transition: 'transform 0.3s ease',
  },
  subheading: {
    fontSize: '20px',
    marginBottom: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    paddingBottom: '4px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    fontSize: '16px',
    padding: '4px 0',
    color: 'rgba(255,255,255,0.9)',
  },
};

export default TechStack;
