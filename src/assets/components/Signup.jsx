import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Signup Success Redirect Logic
  const handleSignup = () => {
    localStorage.setItem("token", "12345");
    navigate("/user", { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Signup data:", formData);
      setIsLoading(false);

      // After successful signup
      handleSignup();

    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>E-Auction</h1>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit} className="signup-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;