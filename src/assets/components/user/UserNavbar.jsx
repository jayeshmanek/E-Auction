import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../Css/UserNavbar.css";

export const UserNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <h1 className="logo">
            <span className="logo-highlight">e</span>Auctions
          </h1>

          <ul className="nav-links">

            {/*<li>
              <Link to="/user/getapidemo1">GET API DEMO 1</Link>
            </li>*/}

           {/* <li>
              <Link to="/user/useeffectdemo">UseEffect Demo</Link>
            </li>*/}
             <li>
              <Link to="/user/Home">Home</Link>
            </li>
             <li>
              <Link to="/user/AboutUs">AboutUs</Link>
            </li>


            <li>
              <Link to="/user/settings">Settings</Link>
            </li>

            <li>
              <Link to="/user/MyDashboard">My Dashboard</Link>
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