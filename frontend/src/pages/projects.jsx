import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
// import { ExternalLink, Home  } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your Express backend
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
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
          projects.map((project) => (
            <div key={project._id} className="card">
              
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
                  <a href="https://github.com/sondekaravdhut25-bot/major-project" className="link-button">
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