import React, { useEffect, useState } from "react";
import axios from "axios";

const OldProperty = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5003/api/properties?status=old")
      .then((res) => {
        console.log("Old Properties:", res.data);

        // 🔥 FIX HERE
        setProperties(res.data.properties);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="propertylist">

        <h2>Old Properties</h2>

        {properties.length > 0 ? (
          properties.map((p) => (
            <div key={p._id} className="property-card">

              <img 
                src={p.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"}
                alt="property"
              />

              <div className="info">
                <h3>{p.title}</h3>
                <p><b>City:</b> {p.city}</p>
                <p><b>Price:</b> ₹{p.price}</p>
              </div>

            </div>
          ))
        ) : (
          <h3>No Old Properties Found</h3>
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
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 10px;
        }

        .property-card img {
          width: 150px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default OldProperty;