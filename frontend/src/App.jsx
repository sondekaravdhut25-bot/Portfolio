


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin'; 
import Education from  './pages/Education';
import AdminDashboard from './pages/AdminDashboard';
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container nav-content">
            <div className="nav-logo">
              <Link to="/">DevPortfolio.</Link>
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/education">Education</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>

              <Link 
                to="/admin" 
                style={{
                  backgroundColor: '#2563eb', 
                  color: 'white', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                Admin
              </Link>
            </div>
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
          <p>&copy; {new Date().getFullYear()} My Portfolio. Built with the MERN Stack.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;