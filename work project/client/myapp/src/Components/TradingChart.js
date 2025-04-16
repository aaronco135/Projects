import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import ClockWidget from '../Modules/showRealTime';
import '../CSS/tradingChart.css'

const CandleChart = ({ symbol }) => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKlines = async () => {
      try {
        const res = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=5m&limit=50`
        );
        const data = await res.json();

        const formattedData = data.map((d) => ({
          x: new Date(d[0]),
          y: [
            parseFloat(d[1]), // open
            parseFloat(d[2]), // high
            parseFloat(d[3]), // low
            parseFloat(d[4]), // close
          ],
        }));

        setSeries([{ data: formattedData }]);
        setLoading(false);
      } catch (err) {
        console.error("error by loading chart :", err);
      }
    };

    if (symbol) {
      fetchKlines();
    }
  }, [symbol]);

  if (loading) return <p>loading of graph...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <Chart
        options={{
          chart: { type: 'candlestick', height: 350 },
          title: { text: `${symbol} - Candlestick Chart`, align: 'left' },
          xaxis: { type: 'datetime' },
          yaxis: { tooltip: { enabled: true } },
        }}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};







const fetchPrice = async (symbol) => {
  const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`);
  const data = await res.json();
  return parseFloat(data.price);
};

const TradingChart = () => {
  const [prices, setPrices] = useState({});
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [user, setUser] = useState(null);
  const [fullUser, setFullUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [tradeAmount, setTradeAmount] = useState(""); 

  useEffect(() => {
    const init = async () => {
      const savedAsset = localStorage.getItem('tradeSymbol');
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const res = await axios.post('http://localhost:3001/jwt/verify', { token });
          if (res.data.auth) {
            setUser(res.data.token);
          }
        } catch (err) {
          console.error("JWT verification failed:", err);
        }
      }

      if (savedAsset) setSelectedAsset(savedAsset);
    };

    init();
  }, []);

  useEffect(() => {
    const fetchFullUser = async () => {
      if (user?.email) {
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

  useEffect(() => {
    const fetchTransactions = async () => {
      if (fullUser?._id) {
        try {
          const res = await axios.get(`http://localhost:3001/transactions/${fullUser._id}`);
          setTransactions(res.data);
        } catch (err) {
          console.error("Erreur lors de la récupération des transactions :", err);
        }
      }
    };

    fetchTransactions();
  }, [fullUser]);

  useEffect(() => {
    const getPrices = async () => {
      if (selectedAsset) {
        const price = await fetchPrice(selectedAsset);
        setPrices((prev) => ({ ...prev, [selectedAsset]: price }));
      }
    };

    getPrices();
    const intervalId = setInterval(getPrices, 5000);
    return () => clearInterval(intervalId);
  }, [selectedAsset]);

  const handleTransaction = async (asset, type) => {
    const usd_price = prices[asset.symbol];

    if (!fullUser) return;

    const parsedAmount = parseFloat(tradeAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return alert("Veuillez entrer un montant valide supérieur à 0.");
    }

    const newTransaction = {
      userId: fullUser._id,
      type,
      indice: asset.name,
      usd_price,
      amount: parsedAmount,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await axios.post("http://localhost:3001/transactions", newTransaction);
      console.log("Transaction saved:", res.data);
      alert(`Transaction réussie: ${type} ${parsedAmount}$ de ${asset.name}`);

      // 🔁 Refresh transactions
      const updated = await axios.get(`http://localhost:3001/transactions/${fullUser._id}`);
      setTransactions(updated.data);
      setTradeAmount(""); // reset champ
    } catch (err) {
      console.error("Erreur lors de la transaction :", err.response?.data || err.message);
      alert("Erreur lors de la transaction");
    }
  };

  const filteredTransactions = transactions.filter((tx) => tx.indice === selectedAsset?.replace('USDT', ''));

  return (
    <div className="trading-container">
      <h2>Trading Chart</h2>
      <ClockWidget />
  
      {selectedAsset ? (
        <div className="asset-card">
          <h3>{selectedAsset.replace('USDT', '')}</h3>
          <p>Actual {selectedAsset.replace('USDT', '')} price : ${prices[selectedAsset] || 'Loading...'}</p>
          <p>Total of USDT balance : {fullUser?.balances?.usdt ?? 'Loading...'}</p>
  
          <input
            type="number"
            value={tradeAmount}
            onChange={(e) => setTradeAmount(e.target.value)}
            placeholder="Amount in $"
          />
  
          <br />
          <button onClick={() => handleTransaction({ name: selectedAsset.replace('USDT', ''), symbol: selectedAsset }, 'buy')}>
            Buy
          </button>
          <button onClick={() => handleTransaction({ name: selectedAsset.replace('USDT', ''), symbol: selectedAsset }, 'sell')}>
            Sell
          </button>
  
          <div className="candle-chart">
            <CandleChart symbol={selectedAsset} />
          </div>
        </div>
      ) : (
        <p>Aucun actif sélectionné.</p>
      )}
  
      <div className="transaction-history">
        <h3>Transactions history</h3>
        {filteredTransactions.length > 0 ? (
          <ul>
            {filteredTransactions.map((tx, index) => (
              <li key={index}>
                <strong>{tx.type.toUpperCase()}</strong> {tx.amount}$ de <strong>{tx.indice}</strong> à {tx.usd_price}$ –
                <em> {new Date(tx.timestamp).toLocaleString()}</em>
              </li>
            ))}
          </ul>
        ) : (
          <p>No history transactions for that asset.</p>
        )}
      </div>
    </div>
  );
  
};

export default TradingChart;
