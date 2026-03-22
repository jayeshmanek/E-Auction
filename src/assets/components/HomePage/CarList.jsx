import React, { useEffect, useState } from "react";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then(res => res.json())
      .then(data => setCars(data.cars));
  }, []);

  return (
    <>
      <h2>Car List 🚗</h2>

      {cars.slice(0, 10).map((car) => (
        <div key={car.id} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}>
<img 
  src={`https://source.unsplash.com/200x120/?${car.car}`}
  alt="car"
/>
          {/* TEXT */}
          <div>
            <h3>{car.car} {car.car_model}</h3>
            <p>Color: {car.car_color}</p>
            <p>Year: {car.car_model_year}</p>
            <p>Price: {car.price}</p>
          </div>

        </div>
      ))}
    </>
  );
};

export default CarList;