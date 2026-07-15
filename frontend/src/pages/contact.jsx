import { useState } from 'react';
import axios from 'axios';
import server from '../environment';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // POST request to your local backend
      await axios.post(`${server}/api/contact`, formData);
      
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' }); // Clear form
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (err) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Something went wrong. Please try again later.' 
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="form-container">
        {status.success && (
          <div className="alert success">
            Message sent successfully! I will get back to you soon.
          </div>
        )}
        
        {status.error && (
          <div className="alert error">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}