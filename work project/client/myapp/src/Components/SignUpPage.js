import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/signUpPage.css'; 

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userToCreate = {
      ...formData,
      balances: {
        usdt: 1000,
        btc: 0,
        eth: 0
      }
    };

    try {
      const res = await axios.post('http://localhost:3001/users', userToCreate); 
      console.log(res.status)
      if (res.status === 200 || res.data.success) {
        navigate('/');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error while creating account.');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Create Account</button>
      </form>

      <button onClick={() => navigate('/')} className="login-button-link">
        Already have an account? Login
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpPage;
