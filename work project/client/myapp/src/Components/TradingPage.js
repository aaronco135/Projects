import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/tradingPage.css';
import ClockWidget from '../Modules/showRealTime';

const TradingPage = () => {
  const navigate = useNavigate();

  const handleTrade = (symbol) => {
    localStorage.setItem('tradeSymbol', symbol.toUpperCase()); // Store 'BTC' or 'ETH'
    navigate(`/trading/${symbol}`);
  };

  return (
    <div className="trading-page">
      <h2>Trading Page</h2>
      <ClockWidget/>
      <div className="pairs-list">
        <div className="pair-item">
          <span className="pair-name">USDT/BTC</span>
          <button className="trade-button" onClick={() => handleTrade('btc')}>
            go to trade
          </button>
        </div>
        <div className="pair-item">
          <span className="pair-name">USDT/ETH</span>
          <button className="trade-button" onClick={() => handleTrade('eth')}>
            go to trade
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default TradingPage;
