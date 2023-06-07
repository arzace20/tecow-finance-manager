import React, { useState } from 'react';
import Modal from 'react-modal';
import "./Login.css";
import {Container, Row, Col, Image} from "react-bootstrap";

const Login = () => {
    const [memberEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            memberEmail: memberEmail,
            date: new Date(),
            password: password,
          })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="loginContainer">
          <div className='loginDiv'>
            <div>
                <h1 className='loginTitle'>Login</h1>
              <input
                className='loginPlaceholder'
                type="text"
                placeholder="email"
                value={memberEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className='loginPlaceholder'
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
  
            <button className='loginButton1' onClick={handleSubmit}>Login</button>
            <button className='loginButton2' onClick={handleSubmit}>Sign up</button>
          </div>
      </div>
    );

};

export default Login;
