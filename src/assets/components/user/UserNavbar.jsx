import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../Css/UserNavbar.css";

export const UserNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove login token
    localStorage.removeItem("token");

    // Redirect to login and prevent going back
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <h1 className="logo">
            <span className="logo-highlight">e</span>AuctionsIndia
          </h1>

          <ul className="nav-links">
            <li>
              <Link to="/user/getapidemo1">GET API DEMO 1</Link>
            </li>
            <li>
              <Link to="/user/useeffectdemo">UseEffect Demo</Link>
            </li>
            <li>
              <Link to="/user/settings">Settings</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
};