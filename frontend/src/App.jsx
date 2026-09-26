import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Projects from './pages/projects.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Education from './pages/Education.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="app-wrapper">

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container nav-content">
            <div className="nav-logo">
              <Link to="/" onClick={closeMenu}>Avdhut<span className="logo-dot">.</span>dev</Link>
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
              <NavLink to="/education" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
              <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
              <NavLink to="/contact" onClick={closeMenu} className="nav-cta">Contact</NavLink>
            </div>

            <button
              className="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="container main-content">
          <Routes>
            <Route path="/projects" element={<Projects />} />

            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div style={{ textAlign: 'center', padding: '5rem', color: 'red' }}><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <span className="footer-brand">Avdhut.dev</span>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <p className="footer-note">&copy; {new Date().getFullYear()} Avdhut Sondekar — built with the MERN stack.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
