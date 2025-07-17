import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';

import Hero from './pages/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechStack from './pages/TechStack'; // ✅ Added import

function App() {
  return (
    <Router>
      <AnimatedBackground />

      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="techstack"> {/* ✅ New Tech Stack section */}
                <TechStack />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
