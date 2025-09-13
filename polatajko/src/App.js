import './App.css';
import { useState, useEffect } from 'react';
import { siteContent } from './content';
import { GitHubIcon, LessWrongIcon } from './icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <main className="container">
        <section className="hero">
          <h1 className="name">{siteContent.personal.name}</h1>
          <p className="tagline">{siteContent.personal.tagline}</p>
        </section>

        <section className="about">
          <h2>{siteContent.about.title}</h2>
          {siteContent.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="work">
          <h2>{siteContent.projects.title}</h2>
          <div className="grid">
            {siteContent.projects.items.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} className="project-link">
                      <span className="project-link-icon">
                        {link.icon === 'github' && <GitHubIcon size={16} />}
                        {link.icon === 'lesswrong' && <LessWrongIcon size={16} />}
                      </span>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="contact">
          <h2>{siteContent.contact.title}</h2>
          <div className="links">
            {siteContent.contact.links.map((link, index) => (
              <a key={index} href={link.url} className="link">{link.text}</a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
