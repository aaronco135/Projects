import React, { useState, useEffect } from "react";
import axios from "axios";

const CvForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    skills: "",
    project: "",
    workExperience: "",
    languages: "",
    education: "",
    description: "",
  });

  const userEmail = localStorage.getItem("user_email");

  useEffect(() => {
    const fetchFullName = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/users/${userEmail}`);
        if (res.data.full_name) {
          setFormData((prev) => ({
            ...prev,
            fullName: res.data.full_name,
            email: userEmail,
          }));
        }
      } catch (err) {
        console.error("Error fetching full name:", err);
      }
    };

    fetchFullName();
  }, [userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <div>
        <label>Full Name:</label><br />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Phone:</label><br />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>GitHub:</label><br />
        <input
          type="url"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="https://github.com/..."
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>LinkedIn:</label><br />
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/..."
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Skills (comma separated):</label><br />
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Work Experience:</label><br />
        <textarea
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          rows={3}
          placeholder="Describe your professional experience (job title, responsibilities, company, dates)"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Projects:</label><br />
        <textarea
          name="project"
          value={formData.project}
          onChange={handleChange}
          rows={3}
          placeholder="Describe your personal or technical projects"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Languages:</label><br />
        <input
          type="text"
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          placeholder="French, English, Hebrew"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Education:</label><br />
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows={3}
          placeholder="Degrees, certifications, bootcamps"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Summary / Profile Description:</label><br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Write a short description about your profile"
          style={{ width: "100%" }}
        />
      </div>

      <button type="submit" style={{ marginTop: "1rem" }}>
        Generate CV
      </button>
    </form>
  );
};

export default CvForm;
