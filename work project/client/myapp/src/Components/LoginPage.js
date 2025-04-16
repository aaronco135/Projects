import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/loginPage.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post('http://localhost:3001/jwt/login', {
        email,
        password,
      });
     

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', res.data.token.email);
      setMessage('Login successful!');
      navigate('/home');
    } catch (err) {
      setMessage('Login failed.');
    }
    
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>
  
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
  
      <button className="signup-button" onClick={() => navigate('/signup')}>
        Sign Up
      </button>
  
      {message && <p>{message}</p>}
    </div>
  );
  
};

export default Login;
