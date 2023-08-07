import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Login = () => {
  const [memberEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: memberEmail,
          password: password
        })
      });

      if (response.ok) {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Set the isLoggedIn value
        navigate('/report'); // Redirect using useNavigate
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: memberEmail,
          password: password
        })
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Registration failed', response.statusText); // Log the statusText
      }
    } catch (error) {
      console.error('Registration failed', error); // Log the error
    }
  };

  if (loggedIn) {
    // Render a message or component for already logged in users
    return <div>You are already logged in.</div>;
  }

  return (
    <div className="loginContainer">
      <div className="loginDiv">
        <div>
          <h1 className="loginTitle">Login</h1>
          <input
            className="loginPlaceholder"
            type="text"
            placeholder="email"
            value={memberEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="loginPlaceholder"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="loginButton1" onClick={handleSubmit}>
          Login
        </button>
        <button className="loginButton2" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
