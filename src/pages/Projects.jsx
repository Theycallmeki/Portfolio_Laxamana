import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Portfolio Builder',
      description: 'A powerful web application built with Django and CKEditor that allows users to generate professional, pre-made portfolios or fully customize their own. It integrates CKEditor via API for rich text editing and content management, ensuring a seamless editing experience. The app emphasizes clean design, user-friendly customization, and rapid deployment—perfect for developers, creatives, or job seekers looking to showcase their work quickly.',
      link: 'https://github.com/Theycallmeki/Portfolio_builder'
    },
    {
      title: 'Smart Inventory',
      description: 'A thesis-in-progress powered by Node.js and Express.js, designed to function as a smart inventory and POS system using a barcode scanner module. It offers real-time inventory tracking, intelligent stock level predictions, and profit analysis to help streamline store operations. Ideal for small to medium businesses, the system combines automation and data-driven insights to optimize sales and inventory management.',
      link: 'https://github.com/Theycallmeki/Smart_Inventory_Software'
    },
    {
      title: 'Image-classifier-and-AI-Chatbot',
      description: 'A multifunctional web app that combines an image classification system powered by TensorFlow with an intelligent AI chatbot driven by Gemini 2.0 Flash. The frontend is built using React and Vite for fast, responsive performance. Users can upload images for instant classification and interact with a smart chatbot capable of natural, context-aware conversations—making it a seamless blend of computer vision and conversational AI.',
      link: 'https://github.com/Theycallmeki/Image-classifier-and-AI-Chatbot'
    },
    {
      title: 'Facial-recognition',
      description: 'This Python project uses OpenCV and MediaPipe for real-time facial recognition. It detects faces, analyzes facial landmarks (like orientation), and displays them with bounding boxes and FPS in webcam input. The FaceRecognizer class supports multiple faces and allows static image processing with optional visualizations.',
      link: 'https://github.com/Theycallmeki/Facial-recognition'
    },
    {
      title: 'Gabs Chicken Inasal',
      description: '',
      link: 'https://github.com/Theycallmeki/Smart_Inventory_Software'
    },
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
