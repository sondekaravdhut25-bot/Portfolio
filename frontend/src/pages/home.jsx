import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Circular Profile Image */}
        <div className="hero-image-wrapper">
          <img 
            src="https://res.cloudinary.com/dmrhficxx/image/upload/v1783148974/ChatGPT_Image_Jul_4_2026_12_38_54_PM_yozvb2.png" 
            alt="My Profile" 
            className="hero-image"
          
          />
        </div>

        {/* Text Content */}
        <div className="hero-content">
          <h1 className="hero-name">Hi, I'm Avdhut Sondekar</h1>
          <h2 className="hero-profession">Full Stack Developer</h2>
          
          <p className="hero-bio">
            I am a passionate developer specializing in building scalable web applications. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me <Mail size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}