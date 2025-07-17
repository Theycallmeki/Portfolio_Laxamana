import React, { useState, useEffect } from 'react';
import { Cpu, Code, Terminal, GitBranch, Settings } from 'lucide-react';
import '../styles/Header.css'; // <-- Import the CSS file

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          
          {/* Logo Section */}
          <div className="logo">
            <div className="cpu-icon">
              <Cpu className="icon" />
            </div>
            <div className="logo-text">
              <h1>&lt;Kian.Laxamana/&gt;</h1>
              <p>Computer Engineering</p>
            </div>
          </div>

          {/* Time Only */}
          <div className="status">
            <div className="status-item">
              <Terminal className="icon-small green" />
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <NavLink href="#home" icon={<Terminal className="icon-small" />} text="~/home" />
            <NavLink href="#about" icon={<Code className="icon-small" />} text="./about" />
            <NavLink href="#projects" icon={<GitBranch className="icon-small" />} text="git/projects" />
            <NavLink href="#contact" icon={<Settings className="icon-small" />} text="contact.exe" />
          </nav>
        </div>
      </div>

      <div className="binary-bar">
        <div className="binary-bar-glow"></div>
      </div>
    </header>
  );
}

function NavLink({ href, icon, text }) {
  return (
    <a href={href} className="nav-link">
      <span className="icon-hover">{icon}</span>
      <span className="text">{text}</span>
      <div className="glow"></div>
    </a>
  );
}

export default Header;
