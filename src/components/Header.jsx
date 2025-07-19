import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Code,
  Terminal,
  GitBranch,
  Settings,
  Menu,
  Mail,              // <- Added for Contact
  MessageSquareCode, // <- Optional: Another coding-style contact icon
  Inbox              // <- Optional: Another contact icon
} from 'lucide-react';
import '../styles/Header.css';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Logo */}
          <div className="logo">
            <div className="cpu-icon">
              <Cpu className="icon" />
            </div>
            <div className="logo-text">
              <h1>&lt;Kian.Laxamana/&gt;</h1>
              <p>Aspiring Web Developer</p>
            </div>
          </div>

          {/* Desktop Time */}
          <div className="status desktop-only">
            <div className="status-item">
              <Terminal className="icon-small green" />
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Nav */}
          <nav className="nav desktop-only">
            <NavLink href="#home" icon={<Terminal className="icon-small" />} text="~/home" />
            <NavLink href="#about" icon={<Code className="icon-small" />} text="./about" />
            <NavLink href="#projects" icon={<GitBranch className="icon-small" />} text="git/projects" />
            <NavLink href="#techstack" icon={<Settings className="icon-small" />} text="tech.stack" />
            <NavLink href="#contact" icon={<Mail className="icon-small" />} text="contact.exe" />
            {/* Alternative Icons:
                <MessageSquareCode className="icon-small" />
                <Inbox className="icon-small" />
            */}
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="status">
          <div className="status-item">
            <Terminal className="icon-small green" />
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>
        <nav className="nav mobile-nav">
          <NavLink href="#home" icon={<Terminal className="icon-small" />} text="~/home" />
          <NavLink href="#about" icon={<Code className="icon-small" />} text="./about" />
          <NavLink href="#projects" icon={<GitBranch className="icon-small" />} text="git/projects" />
          <NavLink href="#techstack" icon={<Settings className="icon-small" />} text="tech.stack" />
          <NavLink href="#contact" icon={<Mail className="icon-small" />} text="contact.exe" />
        </nav>
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
