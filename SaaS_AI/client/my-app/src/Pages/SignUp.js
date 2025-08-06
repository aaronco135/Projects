import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/users", {
        full_name: fullName,
        email,
        password,
        token: 5, 
      });

      alert("Account created successfully!");
      navigate("/"); // Redirige vers login
    } catch (err) {
      console.error("Error creating user:", err);
      alert("Sign up failed. Maybe email already exists.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Sign Up</h2>

      <p style={{ color: "green", fontWeight: "bold", marginBottom: "1rem" }}>
        🎁 You will receive 5 tokens for free when signing up!
      </p>

      <form onSubmit={handleSignUp}>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
