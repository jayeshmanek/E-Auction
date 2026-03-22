import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Commercial = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5003/api/commercials") // ✅ FIXED API
      .then(res => {
        console.log("Commercial:", res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="propertylist">

      {data.length > 0 ? data.map((p) => (
        <div key={p._id} className="property-card">

          <img 
            src={
              p.image && p.image.startsWith("http")
                ? p.image
                : "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            }
            alt="commercial"
          />

          <div className="info">
            <h3>{p.title}</h3>
            <p><b>City:</b> {p.city}</p>
            <p><b>Price:</b> ₹{p.reservePrice}</p>
            <p><b>Type:</b> {p.type}</p>
          </div>

          <button 
            className="view-btn"
            onClick={() => navigate(`/user/commercial/${p._id}`)}
          >
            View More
          </button>

        </div>
      )) : (
        <h2 style={{ textAlign: "center" }}>No Commercial Properties Found 🏢</h2>
      )}

    </div>
  );
};

export default Commercial;