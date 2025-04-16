import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginPage';
import SignupPage from './Components/SignUpPage';
import HomePage from './Components/HomePage';
import TradingPage from './Components/TradingPage';
import ProtectedRoute from './Components/ProtectedRoute';
import TradingChart from './Components/TradingChart';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trading"
          element={
            <ProtectedRoute>
              <TradingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trading/:symbol"
          element={
            <ProtectedRoute>
              <TradingChart />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
