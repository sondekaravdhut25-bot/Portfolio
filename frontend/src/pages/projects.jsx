import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import server from '../environment';
// import { ExternalLink, Home  } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your Express backend
    const fetchProjects = async () => {
      try {
        const response = [{
              "title": "Property Rental Platform",
              "description": "A full-stack property rental platform where users can browse, list, edit, and manage rental properties. Features include user authentication, image uploads, property search, and responsive design for a seamless booking experience.",
              "techStack": [
                "Node.js",
                "Express",
                "MongoDB",
                "Cloudinary",
                "javaScript"
              ],
              "imageUrl": "https://res.cloudinary.com/dmrhficxx/image/upload/v1784107053/Screenshot_2026-07-15_144718_dsjkyv.png",
              "liveSiteUrl": "https://major-project-fwkw.onrender.com/listings",
              "githubUrl": "https://github.com/sondekaravdhut25-bot/Portfolio.git"
            },
            {
              "title": "TODO Management App",
              "description": "A responsive TODO management application that allows users to create, update, delete, and manage tasks efficiently. Features include task status management, a clean user interface, and responsive design for a smooth experience across devices.",
              "techStack": [
                "React.js",
                "Vite",
                "JavaScript",
                "CSS"
              ],
              "imageUrl": "https://res.cloudinary.com/dmrhficxx/image/upload/v1786605313/Screenshot_2026-08-13_124209_gfq7md.png",
              "liveSiteUrl": "https://sondekaravdhut25-bot.github.io/todo-react-app/",
              "githubUrl": "https://github.com/sondekaravdhut25-bot/todo-react-app.git"
            },
            {
              "title": "Snip - URL Shortener",
              "description": "A full-stack URL shortening platform built with the MERN stack that allows users to create, manage, and share short URLs efficiently.",
              "techStack": [
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "JavaScript"
              ],
              "imageUrl": "https://res.cloudinary.com/dmrhficxx/image/upload/v1788464945/Screenshot_2026-09-04_011854_jxsthw.png",
              "liveSiteUrl": "https://snip-f9d3.onrender.com/",
              "githubUrl": "https://github.com/sondekaravdhut25-bot/snip"
            }];
        setProjects(response);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects. Is the backend running?');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading projects...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '5rem', color: 'red' }}>{error}</div>;

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">My Work</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my full-stack capabilities, from scalable backends to intuitive user interfaces.
        </p>
      </div>

      <div className="project-grid">
        {projects.length === 0 ? (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#6b7280' }}>
            No projects found. Add some to your database!
          </p>
        ) : (
          projects.map((project,index) => (
            <div key={index} className="card">
              
              <div className="card-image">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  <span>Image Preview</span>
                )}
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                <div className="tag-container">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  {project.liveSiteUrl && (
                    <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="link-button primary">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button">
                    <FaGithub   size={18} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}