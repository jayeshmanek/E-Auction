import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const categories = [
    { name: "Vehicle Auctions", count: 5060 },
    { name: "Residential", count: 110103 },
    { name: "Industrials", count: 1747 },
    { name: "Commercial", count: 6817 },
    { name: "Scrap & Machinery", count: 1037 },
    { name: "Gold Auctions", count: 4832 },
  ];

  const cities = [
    "New Delhi", "Hyderabad", "Mumbai", "Bengaluru",
    "Kolkata", "Chennai", "Lucknow", "Pune"
  ];

  const banks = [
    "State Bank of India", "Bank of Baroda",
    "Punjab National Bank", "Bank of India",
    "Canara Bank", "Indian Bank",
    "Union Bank of India", "Central Bank of India"
  ];

  // ✅ FIXED NAVIGATION
  const handleCategoryClick = (name) => {

    if (name === "Vehicle Auctions") {
      navigate("/user/carlist");
    } else if (name === "Residential") {
      navigate("/user/propertylist?category=Residential");
    } else if (name === "Commercial") {
      navigate("/user/propertylist?category=Commercial");
    } else if (name === "Industrials") {
      navigate("/user/propertylist?category=Industrial");
    } else if (name === "Scrap & Machinery") {
      navigate("/user/propertylist?category=Scrap");
    } else if (name === "Gold Auctions") {
      navigate("/user/propertylist?category=Gold");
    }
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="overlay">
          <h1>Welcome To e-Auction</h1>
          <p>Find Your Dream Property</p>

          <div className="search-box">
            <input type="text" placeholder="Auction Id" />

            <select>
              <option>-- State --</option>
              <option>Gujarat</option>
              <option>Maharashtra</option>
            </select>

            <select>
              <option>-- City --</option>
              <option>Surat</option>
              <option>Mumbai</option>
            </select>

            <button>Search</button>
          </div>

          {/* STATS */}
          <div className="stats">

            <div onClick={() => navigate("/user/carlist")}>
              378 Live Vehicles
            </div>

            <div onClick={() => navigate("/user/propertylist?status=live")}>
              20978 Live Properties
            </div>

            <div onClick={() => navigate("/user/propertylist?status=old")}>
              104203 Old Properties
            </div>

            <div onClick={() => navigate("/user/propertylist?status=upcoming")}>
              Upcoming Auctions
            </div>

          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="section">
        <h2>Category Auctions</h2>

        <div className="grid">
          {categories.map((item, i) => (
            <div
              key={i}
              className="card"
              onClick={() => handleCategoryClick(item.name)}
            >
              <h3>{item.name}</h3>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CITIES */}
      <div className="section">
        <h2>Bank Auctions in Popular Cities</h2>

        <div className="grid">
          {cities.map((city, i) => (
            <div key={i} className="card">{city}</div>
          ))}
        </div>
      </div>

      {/* BANKS */}
      <div className="section">
        <h2>Popular Bank Auction Properties</h2>

        <div className="grid">
          {banks.map((bank, i) => (
            <div key={i} className="bank-card">{bank}</div>
          ))}
        </div>
      </div>

      {/* ✅ CSS untouched */}
      <style>{`
        .hero {
          background: url("https://images.unsplash.com/photo-1560518883-ce09059eeffa");
          height: 400px;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0,0,0,0.6);
          padding: 30px;
          text-align: center;
          color: white;
          border-radius: 10px;
        }

        .search-box {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .search-box input,
        .search-box select {
          padding: 10px;
          border-radius: 5px;
          border: none;
        }

        .search-box button {
          background: orange;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .stats {
          display: flex;
          gap: 15px;
          margin-top: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stats div {
          background: linear-gradient(135deg, #008080, #20c997);
          padding: 12px 18px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .stats div:hover {
          background: linear-gradient(135deg, #006666, #17a589);
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }

        .stats div:active {
          transform: scale(0.95);
        }

        .section {
          padding: 40px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .card {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
          background: teal;
          color: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .card:active {
          transform: scale(0.97);
        }

        .bank-card {
          background: linear-gradient(to right, #4ca1af, #2c3e50);
          color: white;
          padding: 15px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default Home;