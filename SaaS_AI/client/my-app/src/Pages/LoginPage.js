import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      if (res.data) {
        setMessage("Login successful!");
        localStorage.setItem("user_email", email);
        localStorage.setItem("token", res.data);

        navigate("/home");
      } else {
        setMessage("User not found");
      }
    } catch (err) {
      setMessage("Problem when calling to server");
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

      {<p>{message}</p>}
    </div>
  );

};

export default Login;