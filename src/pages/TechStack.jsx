import React from 'react';

function TechStack() {
  const techCategories = {
    Frontend: [
      { name: 'React', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/react.svg', color: '#61DAFB' },
      { name: 'HTML5', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/html5.svg', color: '#E34F26' },
      { name: 'CSS3', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/css3.svg', color: '#1572B6' },
      { name: 'JavaScript', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/javascript.svg', color: '#F7DF1E' },
      { name: 'Bootstrap', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/bootstrap.svg', color: '#7952B3' },
      { name: 'Vue', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/vuedotjs.svg', color: '#4FC08D' }
    ],
    Backend: [
      { name: 'Node.js', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/nodedotjs.svg', color: '#339933' },
      { name: 'Express', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/express.svg', color: '#000000' },
      { name: 'Django', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/django.svg', color: '#092E20' },
      { name: 'Flask', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/flask.svg', color: '#000000' }
    ],
    Database: [
      { name: 'SQLite', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/sqlite.svg', color: '#003B57' },
      { name: 'PostgreSQL', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/postgresql.svg', color: '#336791' }
    ],
    Tools: [
      { name: 'Git', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/git.svg', color: '#F05032' },
      { name: 'GitHub', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/github.svg', color: '#181717' },
      { name: 'VS Code', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/visualstudiocode.svg', color: '#007ACC' },
      { name: 'Linux', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/linux.svg', color: '#FCC624' },
      { name: 'Postman', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/postman.svg', color: '#FF6C37' }
    ],
    Hardware: [
      { name: 'Arduino', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/arduino.svg', color: '#00979D' },
      { name: 'Raspberry Pi', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/raspberrypi.svg', color: '#A22846' },
      { name: 'C/C++', logo: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.8.0/cplusplus.svg', color: '#00599C' }
    ]
  };

  return (
    <section id="techstack" style={styles.section}>
      <h1 style={styles.heading}>My Tech Stack</h1>
      <div style={styles.grid}>
        {Object.entries(techCategories).map(([category, items]) => (
          <div key={category} style={styles.card}>
            <h2 style={styles.subheading}>{category}</h2>
            <div style={styles.itemsGrid}>
              {items.map((tech) => (
                <div key={tech.name} style={styles.techItem}>
                  <div style={styles.logoContainer}>
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      style={{
                        ...styles.logo,
                        filter: 'brightness(0) saturate(100%) invert(1)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.filter = 'none';
                        e.target.style.backgroundColor = tech.color;
                        e.target.style.mask = `url(${tech.logo}) no-repeat center / contain`;
                        e.target.style.WebkitMask = `url(${tech.logo}) no-repeat center / contain`;
                        e.target.parentElement.parentElement.style.transform = 'translateY(-2px)';
                        e.target.parentElement.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.filter = 'brightness(0) saturate(100%) invert(1)';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.mask = 'none';
                        e.target.style.WebkitMask = 'none';
                        e.target.parentElement.parentElement.style.transform = 'translateY(0)';
                        e.target.parentElement.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>
                  <span style={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '22px',
    marginBottom: '20px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
    paddingBottom: '8px',
    color: 'white',
    fontWeight: '600',
  },
  itemsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '16px',
  },
  techItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid transparent',
  },
  logoContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  logo: {
    width: '32px',
    height: '32px',
    transition: 'all 0.3s ease',
    objectFit: 'contain',
  },
  techName: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: '1.2',
  },
};

// Add hover effects to cards
const cardHoverStyle = `
  .tech-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export default TechStack;
