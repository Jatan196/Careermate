import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css'; 
import axios from 'axios';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter both email and password');
    } else {
      setError('');
      const fetchDetails = async () => {
        try {
          // Send the email and password to the backend login route
          const response = await axios('http://localhost:5001/api/v1/user/stuLogin', {
            params: {
              email: email,
              password: password
            }
          });
    
          if (response.status === 200) {
            const stuData = response.data.student['id'];
            console.log(stuData);
    
            // Redirect to home page after successful login
            navigate('/studentLanding', {state: stuData});
          }
        }
        catch (error) {
          console.error('Error logging in:', error);
        }
      };
      fetchDetails();
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <h1>CareerMate</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Login Section */}
      <div className="login-form-container">
        <h2>Login as Student</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label>Email :- </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password :- </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
