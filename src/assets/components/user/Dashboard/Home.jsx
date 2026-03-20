import React from "react";

const Home = () => {

  const styles = {
    container: {
      padding: "40px",
      background: "#0f172a",
      color: "white",
      minHeight: "100vh"
    },
    hero: {
      textAlign: "center",
      marginTop: "50px"
    },
    searchBox: {
      marginTop: "20px"
    },
    input: {
      padding: "10px",
      margin: "5px",
      borderRadius: "5px",
      border: "none"
    },
    button: {
      padding: "10px 20px",
      background: "#38bdf8",
      border: "none",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer"
    },
    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "50px"
    },
    card: {
      padding: "20px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "10px"
    },
    featured: {
      textAlign: "center",
      marginTop: "50px"
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px"
    },
    item: {
      padding: "40px",
      background: "#1e293b",
      borderRadius: "10px"
    }
  };

  return (
    <div style={styles.container}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1>Find Your Perfect Auction Deal</h1>
        <p>Bid Smart. Win Big. Trusted Auction Platform.</p>

        <div style={styles.searchBox}>
          <input style={styles.input} type="text" placeholder="Search Auction..." />
          <select style={styles.input}>
            <option>Category</option>
            <option>Property</option>
            <option>Vehicle</option>
          </select>
          <button style={styles.button}>Search</button>
        </div>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        <div style={styles.card}>1200+ Auctions</div>
        <div style={styles.card}>500+ Users</div>
        <div style={styles.card}>300+ Sold</div>
      </div>

      {/* FEATURED */}
      <div style={styles.featured}>
        <h2>Featured Auctions</h2>
        <div style={styles.grid}>
          <div style={styles.item}>Property</div>
          <div style={styles.item}>Vehicles</div>
          <div style={styles.item}>Electronics</div>
        </div>
      </div>

    </div>
  );
};

export default Home;