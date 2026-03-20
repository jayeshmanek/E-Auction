import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const EditProfile = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Manek Jayesh",
    email: "manek@email.com",
    phone: "9876543210",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Profile Updated Successfully ✅");

    setTimeout(() => {
      navigate("/user/MyDashboard");
    }, 2000);
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      backgroundColor: "#fdf6ec",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      width: "420px",
      padding: "35px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#ff7a00",
      fontWeight: "bold",
      fontSize: "22px"
    },
    inputGroup: {
      marginBottom: "18px"
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "500"
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      outline: "none"
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px"
    },
    saveBtn: {
      backgroundColor: "#ff7a00",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600"
    },
    cancelBtn: {
      backgroundColor: "#ccc",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Profile</h2>

        <form onSubmit={handleSubmit}>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.saveBtn}>
              Save
            </button>

            <button
              type="button"
              style={styles.cancelBtn}
              onClick={() => navigate("/user/MyDashboard")}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};