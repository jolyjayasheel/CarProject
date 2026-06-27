import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import CarCard from "../components/CarCard";
import "../styles/cars.css";

function Cars() {

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {

    try {

      const response = await api.get("/cars");

      setCars(response.data);

    } catch (error) {

      toast.error("Failed to load cars");

    }

  };

  const filteredCars = cars.filter((car) =>

    (
      car.name +
      car.brand +
      car.fuel +
      car.engine +
      car.price
    )
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const handleAddCar = () => {

    if (!loggedIn) {

      toast.warning(" Please login first!");

      return;

    }

    window.location.href = "/add-car";

  };

  return (

    <div className="cars-page">

      <h1 className="title">
        Featured Cars
      </h1>

      <input
        type="text"
        className="search"
        placeholder=" Search by Name, Brand, Fuel..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="add-car-container">

        {loggedIn ? (

          <Link to="/add-car">

            <button className="add-btn">

              + Add Car

            </button>

          </Link>

        ) : (

          <button
            className="add-btn"
            onClick={handleAddCar}
          >

            + Add Car

          </button>

        )}

      </div>

      {filteredCars.length === 0 ? (

        <h2 className="no-result">

          No Cars Found 

        </h2>

      ) : (

        <div className="car-grid">

          {filteredCars.map((car) => (

            <CarCard
              key={car.id}
              car={car}
            />

          ))}

        </div>

      )}

    </div>

  );

}

export default Cars;