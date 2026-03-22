import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Industrial = () => {

  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5003/api/industrials")
      .then((res) => {
        console.log("Industrials:", res.data);
        setProperties(res.data); // ✅ direct data
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="propertylist">

        {properties.length > 0 ? (
          properties.map((p) => (
            <div key={p._id} className="property-card">

            <img 
  src={
    p.image && p.image.startsWith("http")
      ? p.image
      : p.type === "Factory"
      ? "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
      : p.type === "Shed"
      ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      : p.type === "Godown"
      ? "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
      : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  }
  alt="property"
/>
              <div className="info">
                <h3>{p.title || "No Title"}</h3>
                <p><b>City:</b> {p.city || "N/A"}</p>
                <p><b>Price:</b> ₹{p.reservePrice || "0"}</p>
                <p><b>Type:</b> {p.type || "N/A"}</p>
              </div>

              <button 
                className="view-btn"
                onClick={() => navigate(`/user/propertydetail/${p._id}`)}
              >
                View More
              </button>

            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>No Industrial Properties Found 🏭</h2>
        )}

      </div>

      <style>{`
        .propertylist {
          padding: 20px;
          background: #f5f5f5;
        }

        .property-card {
          display: flex;
          gap: 20px;
          background: white;
          margin-bottom: 20px;
          padding: 15px;
          border-radius: 10px;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .property-card img {
          width: 160px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
        }

        .info {
          flex: 1;
        }

        .view-btn {
          padding: 10px;
          border: 1px solid orange;
          color: orange;
          background: white;
          cursor: pointer;
          border-radius: 5px;
        }

        .view-btn:hover {
          background: orange;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Industrial.jsx ;