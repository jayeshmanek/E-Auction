import React, { useEffect, useState } from "react";
import axios from "axios";

const Upcoming = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5003/api/properties?status=upcoming")
      .then((res) => {
        console.log("API:", res.data);

        // 🔥 ALWAYS SAFE WAY
        setProperties(res.data.properties || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upcoming Auctions</h2>

      {/* 🔥 LOADING */}
      {loading && <h3>Loading...</h3>}

      {/* 🔥 DATA */}
      {!loading && properties.length > 0 ? (
        properties.map((p) => (
          <div key={p._id} style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <img
              src={p.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"}
              width="150"
              style={{ borderRadius: "8px" }}
            />

            <div>
              <h3>{p.title}</h3>
              <p><b>City:</b> {p.city}</p>
              <p><b>Price:</b> ₹{p.price}</p>
            </div>
          </div>
        ))
      ) : (
        !loading && <h3>No Upcoming Auctions</h3>
      )}
    </div>
  );
};

export default Upcoming;