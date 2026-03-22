import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings Data:", form);

    alert("Settings Updated Successfully ✅");
  };

  return (
    <div style={styles.container}>
      <h2>Settings ⚙️</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter New Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Save Changes
        </button>

      </form>
    </div>
  );
};

export default Settings;

// ✅ Styles
const styles = {
  container: {
    padding: "40px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};