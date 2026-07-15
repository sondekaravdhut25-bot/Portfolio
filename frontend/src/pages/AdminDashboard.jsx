
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('adminToken');
      
      // If no token exists, boot them back to login
      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/contact/messages', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(response.data);
      } catch (err) {
        setError('Session expired or unauthorized. Please log in again.');
        localStorage.removeItem('adminToken');
        navigate('/admin');
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/contact/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMessages(prev => prev.filter(msg => msg._id !== id));
    } catch (err) {
      setError('Failed to delete message. Please try again.');
    }
  }


  return (
    <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Message Inbox</h2>
        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                <strong>{msg.name} ({msg.email})</strong>

                <span style={{ color: '#666', fontSize: '0.9rem' }}>
                  {new Date(msg.timestamp).toLocaleString()}
                </span>
              </div>
              <p style={{ whiteSpace: 'pre-wrap' }}>{msg.message}</p>
              
            <br></br>
              <button onClick={() => handleDelete(msg._id)} style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Delete
                </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}