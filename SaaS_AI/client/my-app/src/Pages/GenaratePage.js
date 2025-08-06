import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CvForm from "../Components/ChildForm"; 

const GenerateCvPage = () => {
  const userEmail = localStorage.getItem("user_email");
  const [generatedCV, setGeneratedCV] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserTokens();
  }, []);

  const fetchUserTokens = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/users/${userEmail}`);
      setTokens(res.data.token);
    } catch (err) {
      console.error("Error fetching tokens:", err);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/cvs/generate", {
        prompt: data,
        email: userEmail,
      });
      setGeneratedCV(res.data);
      await fetchUserTokens();
    } catch (err) {
      console.error("Error generating CV:", err);
      alert("Error when trying to generate the CV");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:8000/cvs/save", {
        email: userEmail,
        cv: generatedCV,
      });
      alert("CV has been saved!");
    } catch (err) {
      console.error("Error saving CV:", err);
      alert("Error");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>CV Generator</h1>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Remaining tokens:</strong>{" "}
        {tokens !== null ? tokens : "Loading..."} &nbsp;&nbsp;

        <button onClick={() => navigate("/buy_tokens")}>Buy Tokens</button>
      </div>

      <button onClick={() => navigate("/user_details")}>My user data</button>
      <br /><br />

      <CvForm onSubmit={handleFormSubmit} />

      {loading && <p>generate...</p>}

      {generatedCV && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Generated CV:</h2>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              borderRadius: "8px",
              whiteSpace: "pre-wrap",
            }}
          >
            {generatedCV}
          </pre>

          <button onClick={handleSave} style={{ marginTop: "1rem" }}>
            Save to my account
          </button>
        </>
      )}

      <hr style={{ margin: "2rem 0" }} />

      <button onClick={() => navigate("/history")}>Go to CVs history</button><br />
      <button
        onClick={() => {
          localStorage.removeItem("user_email");
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default GenerateCvPage;
