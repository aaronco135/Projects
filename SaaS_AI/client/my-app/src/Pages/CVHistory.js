import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CVHistory = () => {
  const [cvList, setCvList] = useState([]);
  const [selectedCV, setSelectedCV] = useState(null);
  const email = localStorage.getItem("user_email");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCVs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/cvs/${email}`);
        setCvList(res.data?.cvs || []);
      } catch (err) {
        console.error("Erreur lors du chargement des CVs :", err);
        alert("Erreur lors du chargement des CVs");
      }
    };

    if (email) {
      fetchCVs();
    }
  }, [email]);

  const handleClickCV = (cv) => {
    setSelectedCV(cv);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>CVs History</h1>

      {!selectedCV ? (
        <>
          {cvList.length === 0 ? (
            <p>No Cv to show.</p>
          ) : (
            <ul>
              {cvList.map((cv, index) => (
                <li
                  key={index}
                  onClick={() => handleClickCV(cv)}
                  style={{
                    cursor: "pointer",
                    marginBottom: "1rem",
                    padding: "1rem",
                    background: "#f4f4f4",
                    borderRadius: "8px",
                  }}
                >
                  {cv.slice(0, 100)}...
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div>
          <h2>Full CV :</h2>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              borderRadius: "8px",
              whiteSpace: "pre-wrap",
            }}
          >
            {selectedCV}
          </pre>
          <button onClick={() => setSelectedCV(null)} style={{ marginTop: "1rem" }}>
            return
          </button>
        </div>
      )}
      <button onClick={() => navigate('/home')}>back to home </button>
    </div>
  );
};

export default CVHistory;
