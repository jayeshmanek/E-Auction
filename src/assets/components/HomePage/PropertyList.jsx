import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PropertyList = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [properties, setProperties] = useState([]);

  // 🔥 CATEGORY GET FROM URL
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "Industrial"; // default

  useEffect(() => {

    axios.get(`http://localhost:5003/api/properties?category=${category}`)
      .then((res) => {
        console.log(category, res.data);
        setProperties(res.data.properties || res.data);
      })
      .catch((err) => console.log(err));

  }, [category]);

  return (
    <>
      <div className="propertylist">

        <h2 style={{ marginBottom: "20px" }}>
          {category} Properties
        </h2>

        {properties.length > 0 ? (
          properties.map((p) => (
            <div key={p._id} className="property-card">

              <img 
                src={
                  p.image && p.image.startsWith("http")
                    ? p.image
                    : p.category === "Industrial"
                    ? "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
                    : p.category === "Commercial"
                    ? "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                    : p.category === "Residential"
                    ? "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                    : p.category === "Scrap"
                    ? "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
                    : p.category === "Gold"
                    ? "https://images.unsplash.com/photo-1610375461246-83df859d849d"
                    : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                }
                alt="property"
              />

              <div className="info">
                <h3>{p.title || "No Title"}</h3>
                <p><b>City:</b> {p.city || "N/A"}</p>
                <p><b>Price:</b> ₹{p.reservePrice || "0"}</p>
                <p><b>Type:</b> {p.type || "N/A"}</p>
                <p><b>Category:</b> {p.category}</p>
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
          // 🔥 CENTER FIX ADDED
          <div className="no-data">
            No {category} Properties Found
          </div>
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

        /* 🔥 NEW CENTER STYLE */
        .no-data {
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px;
          font-weight: bold;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default PropertyList;