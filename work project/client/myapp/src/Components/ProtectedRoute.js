
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setAuth(false);
        return;
      }

      try {
        const res = await axios.post('http://localhost:3001/jwt/verify', { token });
        if (res.data.auth) {
          setAuth(true);
          setUser(res.data.token); 
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error(err);
        setAuth(false);
      }
    };

    checkToken();
  }, []);

  if (auth === null) return <p>Vérification...</p>;

  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
