import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState({ total_alerts: 0, suspicious: 0, normal: 0, suspicious_percentage: 0 });
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://web-production-30aa2.up.railway.app';  // ← CHANGE THIS

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      const response = await axios.post(`${API_URL}/token`, formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      setToken(response.data.access_token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Check your credentials.');
    }
    setLoading(false);
  };

  // Rest of your code (fetchAlerts, fetchStats, deleteAlert, etc.)
  // Make sure all fetch functions use API_URL

  return (
    // Your JSX here
  );
}

export default App;
