import React from "react";

const AboutUs = () => {

  const styles = {
    container: {
      padding: "40px",
      background: "#f5f7fa",
      color: "#1e293b"
    },
    topSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    text: {
      flex: "1",
      paddingRight: "20px",
      minWidth: "300px"
    },
    image: {
      flex: "1",
      textAlign: "center"
    },
    img: {
      width: "80%",
      borderRadius: "10px"
    },
    title: {
      fontSize: "28px",
      marginBottom: "15px"
    },
    desc: {
      lineHeight: "1.7"
    },

    /* ADVANTAGES */
    sectionTitle: {
      textAlign: "center",
      marginTop: "60px",
      fontSize: "26px",
      color: "#0f766e"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
      gap: "30px",
      marginTop: "40px"
    },
    card: {
      textAlign: "center",
      padding: "20px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    },
    icon: {
      fontSize: "40px",
      marginBottom: "10px"
    },
    cardTitle: {
      color: "#ea580c",
      fontWeight: "bold",
      marginBottom: "10px"
    }
  };

  return (
    <div style={styles.container}>

      {/* TOP SECTION */}
      <div style={styles.topSection}>

        {/* LEFT TEXT */}
        <div style={styles.text}>
          <h1 style={styles.title}>Welcome to E-Auction Platform</h1>

          <p style={styles.desc}>
            E-Auction platform is designed to provide a transparent and secure 
            way to buy and sell assets online. We connect buyers with verified 
            sellers and financial institutions to offer trusted auction services.
          </p>

          <p style={styles.desc}>
            Our system includes residential properties, vehicles, machinery, 
            and more. We simplify the process of participating in auctions and 
            help users discover valuable opportunities easily.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.image}>
          <img
            style={styles.img}
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="auction"
          />
        </div>

      </div>

      {/* ADVANTAGES */}
      <h2 style={styles.sectionTitle}>
        Advantages Of Buying Through E-Auction
      </h2>

      <div style={styles.grid}>

        <div style={styles.card}>
          <div style={styles.icon}>🏦</div>
          <div style={styles.cardTitle}>Price Advantage</div>
          <p>Properties available below market price.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>⚖️</div>
          <div style={styles.cardTitle}>Legally Safe</div>
          <p>Verified and approved by legal authorities.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🤝</div>
          <div style={styles.cardTitle}>Trusted Sellers</div>
          <p>Government & bank authorized auctions.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>⚙️</div>
          <div style={styles.cardTitle}>Simple Process</div>
          <p>Easy and hassle-free bidding system.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🔍</div>
          <div style={styles.cardTitle}>Transparency</div>
          <p>100% secure and transparent deals.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>⏳</div>
          <div style={styles.cardTitle}>Fast Process</div>
          <p>Quick registration and ownership transfer.</p>
        </div>

      </div>

    </div>
  );
};

export default AboutUs;