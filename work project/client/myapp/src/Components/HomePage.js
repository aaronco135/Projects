import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClockWidget from '../Modules/showRealTime';
import '../CSS/homePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [fullUser, setFullUser] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/');
        return;
      }

      // check token auth
      try {
        const res = await axios.post('http://localhost:3001/jwt/verify', { token });
        if (res.data.auth) {
          setAuth(true);
          setUser(res.data.token);

        } else {
          setAuth(false);
          navigate('/');
        }
      } catch (err) {
        console.error(err);
        navigate('/');
      }

    };

    checkToken();
  }, [navigate]);

  useEffect(() => {
    const fetchFullUser = async () => {
      if (user && user.email) {
        try {
          const res = await axios.get(`http://localhost:3001/users/${user.email}`);

          setFullUser(res.data);
        } catch (err) {
          console.error('Erreur lors de la récupération du user:', err);
        }
      }
    };
  
    fetchFullUser();
  }, [user]); 

  if (auth === null) return <p>Verification...</p>;

  return (
    <div className="home-page">
      <h2>Home page</h2>
      <ClockWidget/>
      <p>Hello {fullUser?.name}</p>
  
      <div className="balances-container">
        <h4>Balances :</h4>
        <p>USDT : {fullUser?.balances.usdt}</p>
        <p>BTC : {fullUser?.balances.btc}</p>
        <p>ETH : {fullUser?.balances.eth}</p>
      </div>
  
      <button className="navigate-button" onClick={() => navigate('/trading')}>
        Trading Page
      </button>
    </div>
  );
  
};

export default HomePage
