import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../utils";

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await verifyToken(token);
      setAuthorized(isValid);
    };
    checkToken();
  }, [token]);

  if (authorized === null) return <div>Loading...</div>;

  return authorized ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
