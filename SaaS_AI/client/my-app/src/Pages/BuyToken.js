import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BuyToken = () => {

  const navigate = useNavigate()
  const email = localStorage.getItem("user_email");



  const handlePurchase = async (tokensToAdd) => {
    try {

      const { data } = await axios.get(`http://localhost:8000/users/${email}`)
      const oldToken = data.token

      await axios.put(`http://localhost:8000/users/${email}`, {
        token: (tokensToAdd + oldToken),
      });
      alert(`You successfully bought ${tokensToAdd} tokens!`);
    } catch (err) {
      console.error("Error purchasing tokens:", err);
      alert("Failed to buy tokens.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Buy Tokens</h1>
      <p>Select one of the available token packages:</p>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
          <h2>Pack 1</h2>
          <p>5 Tokens - $5</p>
          <button onClick={() => handlePurchase(5)}>Buy</button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
          <h2>Pack 2</h2>
          <p>10 Tokens - $8</p>
          <button onClick={() => handlePurchase(10)}>Buy</button>
        </div>
      </div><br />
      <button onClick={() => navigate('/home')}>back to home </button>
    </div>
  );
};

export default BuyToken;
