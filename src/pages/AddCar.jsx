import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/form.css";

function AddCar() {

  const navigate = useNavigate();

  const [car, setCar] = useState({
    name: "",
    brand: "",
    fuel: "",
    engine: "",
    transmission: "",
    mileage: "",
    price: "",
    color: "",
    topSpeed: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/cars", car);

      toast.success(" Car Added Successfully!");

      setTimeout(() => {

        navigate("/cars");

      }, 1200);

    } catch {

      toast.error("Failed to Add Car");

    }

  };

  return (

    <div className="form-container">

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <h2>Add New Car</h2>

        <div className="form-grid">

          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={car.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={car.brand}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fuel"
            placeholder="Fuel"
            value={car.fuel}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="engine"
            placeholder="Engine"
            value={car.engine}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            value={car.transmission}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mileage"
            placeholder="Mileage"
            value={car.mileage}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={car.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            value={car.color}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="topSpeed"
            placeholder="Top Speed"
            value={car.topSpeed}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={car.image}
            onChange={handleChange}
            required
          />

        </div>

        <textarea
          name="description"
          rows="4"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Car
        </button>

      </form>

    </div>

  );

}

export default AddCar;