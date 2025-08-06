import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/LoginPage';
import GenarateCvPage from "./Pages/GenaratePage";
import SignUp from "./Pages/SignUp";
import CVHistory from "./Pages/CVHistory";
import UserPage from "./Pages/UserPage";
import BuyToken from "./Pages/BuyToken";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <GenarateCvPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <CVHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user_details"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy_tokens"
          element={
            <ProtectedRoute>
              <BuyToken />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
