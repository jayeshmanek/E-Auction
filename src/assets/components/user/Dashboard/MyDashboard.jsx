import React from "react";
import { useNavigate } from "react-router-dom";

export const MyDashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      width: "400px",
      padding: "40px 30px",
      borderRadius: "15px",
      textAlign: "center",
      color: "#333",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },
    userName: {
      marginBottom: "25px",
      fontSize: "26px",
      fontWeight: "bold",
      color: "#444",
    },
    divider: {
      border: "0.5px solid #eee",
      margin: "15px 0",
    },
    item: {
      padding: "12px 0",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
    },
    highlight: {
      color: "#ff7a59",
      fontWeight: "600",
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        <h2 style={styles.userName}>Manek Jayayesh</h2>

        <hr style={styles.divider} />

        {/* ✅ Edit Profile */}
        <div
          style={{ ...styles.item, ...styles.highlight }}
          onClick={() => navigate("/user/editprofile")}
          onMouseOver={(e) => e.target.style.color = "#ff5722"}
          onMouseOut={(e) => e.target.style.color = "#ff7a59"}
        >
          Edit Profile
        </div>

        <hr style={styles.divider} />

        <div style={styles.item}>
          My Favorite
        </div>

        <hr style={styles.divider} />

        {/* ✅ Change Password Navigation Added */}
        <div
          style={styles.item}
          onClick={() => navigate("/user/changepassword")}
          onMouseOver={(e) => e.target.style.color = "#ff5722"}
          onMouseOut={(e) => e.target.style.color = "#333"}
        >
          Change Password
        </div>

        <hr style={styles.divider} />

        {/* ✅ Logout */}
        <div
          style={styles.item}
          onClick={handleLogout}
          onMouseOver={(e) => e.target.style.color = "#e63946"}
          onMouseOut={(e) => e.target.style.color = "#333"}
        >
          Logout
        </div>

      </div>
    </div>
  );
};