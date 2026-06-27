import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import "../styles/details.css";

function CarDetails() {

  const { id } = useParams();

  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    const response = await api.get(`/cars/${id}`);
    setCar(response.data);
  };

  if (!car) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <img
        src={car.image}
        alt={car.name}
        className="details-image"
      />

      <div className="details-content">

        <h1>{car.name}</h1>

        <div className="details-grid">

          <p><strong>Brand</strong></p>
          <p>{car.brand}</p>

          <p><strong>Fuel</strong></p>
          <p>{car.fuel}</p>

          <p><strong>Engine</strong></p>
          <p>{car.engine}</p>

          <p><strong>Transmission</strong></p>
          <p>{car.transmission}</p>

          <p><strong>Mileage</strong></p>
          <p>{car.mileage}</p>

          <p><strong>Top Speed</strong></p>
          <p>{car.topSpeed}</p>

          <p><strong>Color</strong></p>
          <p>{car.color}</p>

          <p><strong>Price</strong></p>
          <p>₹ {car.price}</p>

        </div>

        <h3>Description</h3>

        <p className="description">
          {car.description}
        </p>

        <Link to="/cars">
          <button className="back-btn">
            ← Back to Cars
          </button>
        </Link>

      </div>

    </div>
  );

}

export default CarDetails;