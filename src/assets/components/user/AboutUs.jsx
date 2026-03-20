import React from "react";

const AboutUs = () => {

  const styles = {
    container: {
      padding: "40px",
      background: "#0f172a",
      color: "white",
      minHeight: "100vh"
    },
    title: {
      textAlign: "center",
      marginBottom: "30px"
    },
    section: {
      marginBottom: "30px",
      lineHeight: "1.6"
    },
    box: {
      background: "#1e293b",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px"
    },
    grid: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "20px"
    },
    card: {
      flex: "1",
      minWidth: "250px",
      background: "rgba(255,255,255,0.05)",
      padding: "20px",
      borderRadius: "10px"
    }
  };

  return (
    <div style={styles.container}>

      {/* TITLE */}
      <h1 style={styles.title}>About E-Auction Platform</h1>

      {/* INTRO */}
      <div style={styles.section}>
        <p>
          Our E-Auction platform is designed to provide a transparent, secure, and efficient way 
          to buy and sell assets through online bidding. We connect buyers and sellers 
          in a trusted digital marketplace.
        </p>
      </div>

      {/* MISSION */}
      <div style={styles.box}>
        <h2>Our Mission</h2>
        <p>
          To simplify the auction process by making it accessible, reliable, and fast 
          for everyone. We aim to eliminate traditional barriers and bring auctions online.
        </p>
      </div>

      {/* FEATURES */}
      <div style={styles.box}>
        <h2>Key Features</h2>
        <div style={styles.grid}>
          <div style={styles.card}>🔒 Secure Bidding System</div>
          <div style={styles.card}>⚡ Real-time Auctions</div>
          <div style={styles.card}>📊 Transparent Pricing</div>
          <div style={styles.card}>💳 Easy Payment Integration</div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={styles.box}>
        <h2>Why Choose Us?</h2>
        <p>
          We provide a user-friendly interface, fast performance, and complete transparency 
          in auction processes. Whether you are buying or selling, our platform ensures 
          a smooth experience.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;