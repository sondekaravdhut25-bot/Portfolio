import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-grid">

        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot" />
            Available for new projects
          </div>

          <h1 className="hero-name">
            Avdhut Sondekar,<br />
            <span className="hero-role">Full Stack Developer</span>
          </h1>

          <p className="hero-bio">
            I build scalable web applications end to end — from REST APIs and
            databases to clean, responsive interfaces. I like turning messy
            problems into simple, well-tested products.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View my work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in touch <Mail size={18} />
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/sondekaravdhut25-bot" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/avdhut-sondekar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Code panel visual */}
        <div className="code-panel" aria-hidden="true">
          <div className="code-panel-header">
            <span></span><span></span><span></span>
            <span className="code-panel-filename">profile.js</span>
          </div>
          <div className="code-panel-body">
            <div><span className="kw">const</span> <span className="prop">developer</span> <span className="punc">=</span> <span className="punc">{'{'}</span></div>
            <div>&nbsp;&nbsp;<span className="prop">name</span><span className="punc">:</span> <span className="str">'Avdhut Sondekar'</span><span className="punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="prop">role</span><span className="punc">:</span> <span className="str">'Full Stack Developer'</span><span className="punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="prop">stack</span><span className="punc">:</span> <span className="punc">[</span><span className="str">'React'</span><span className="punc">,</span> <span className="str">'Node'</span><span className="punc">,</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">'Express'</span><span className="punc">,</span> <span className="str">'MongoDB'</span><span className="punc">],</span></div>
            <div>&nbsp;&nbsp;<span className="prop">status</span><span className="punc">:</span> <span className="str">'open to work'</span></div>
            <div><span className="punc">{'}'}</span><span className="punc">;</span></div>
            <div>&nbsp;</div>
            <div><span className="com">// let's build something.</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
