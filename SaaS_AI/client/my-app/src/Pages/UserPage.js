import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserPage = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ full_name: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const email = localStorage.getItem("user_email");

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/users/${email}`);
        setUser(res.data);
        setFormData({
          full_name: res.data.full_name,
          password: res.data.password,
        });
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load user data");
      }
    };

    if (email) {
      fetchUser();
    } else {
      setError("No email found in localStorage");
    }
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:8000/users/${email}`, formData);
      setUser(res.data);
      setEditMode(false);
      setSuccess("Profile updated successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Failed to update user");
    }
  };

  if (error) return <div style={{ padding: "2rem" }}>{error}</div>;
  if (!user) return <div style={{ padding: "2rem" }}>Loading...</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>My Profile</h1>

      <label><strong>Full Name:</strong></label><br />
      {editMode ? (
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      ) : (
        <p>{user.full_name}</p>
      )}

      <label><strong>Email:</strong></label>
      <p>{user.email}</p>

      <label><strong>Password:</strong></label><br />
      {editMode ? (
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      ) : (
        <p>{user.password}</p>
      )}

      <p><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      <p><strong>Version:</strong> {user.__v}</p>

      {editMode ? (
        <button onClick={handleSave}>Save Changes</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit Profile</button>
      )}
      <button onClick={() => navigate('/home')}>back to home </button>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default UserPage;
