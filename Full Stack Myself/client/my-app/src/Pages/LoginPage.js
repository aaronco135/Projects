import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const checkUser = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/jwt/login", user);
      nav("/home");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", user.email);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        setErrorMessage("User does't exist or wrong password !");
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '30px' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>Log in</h3>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input id="email" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
        </div>
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="password">Password:</label>
          <br />
          <input id="password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
        </div>
        <br />
        <button style={{ backgroundColor: '#ff6600', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={checkUser}>Log in</button>
        <br /><br />
        <Link to='/register' style={{ color: '#ff6600' }}>Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
