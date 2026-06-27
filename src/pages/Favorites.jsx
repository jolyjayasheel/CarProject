import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/cars.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    loadFavorites();

  }, []);

  const loadFavorites = async () => {

    try {

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (!currentUser) {

        setFavorites([]);

        return;

      }

      const response = await api.get(
        `/users/${currentUser.id}`
      );

      setFavorites(response.data.favorites || []);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(response.data)
      );

    } catch {

      toast.error("Failed to load favorites");

    }

  };

  const removeFavorite = async (carId) => {

    try {

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      const response = await api.get(
        `/users/${currentUser.id}`
      );

      const updatedFavorites =
        response.data.favorites.filter(

          (car) => car.id !== carId

        );

      await api.patch(
        `/users/${currentUser.id}`,
        {
          favorites: updatedFavorites
        }
      );

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...response.data,
          favorites: updatedFavorites
        })
      );

      setFavorites(updatedFavorites);

      toast.success(" Removed from Favorites");

    } catch {

      toast.error("Failed to remove favorite");

    }

  };

  return (

    <div className="cars-page">

      <h1 className="title">

        My Favorite Cars

      </h1>

      {favorites.length === 0 ? (

        <h2 className="no-result">

          No Favorite Cars 

        </h2>

      ) : (

        <div className="car-grid">

          {favorites.map((car) => (

            <div
              className="car-card"
              key={car.id}
            >

              <img
                src={car.image}
                alt={car.name}
              />

              <div className="car-info">

                <h2>{car.name}</h2>

                <p><b>Brand :</b> {car.brand}</p>

                <p><b>Fuel :</b> {car.fuel}</p>

                <p><b>Engine :</b> {car.engine}</p>

                <p><b>Mileage :</b> {car.mileage}</p>

                <p><b>Price :</b> ₹ {car.price}</p>

                <div className="btns">

                  <Link to={`/car/${car.id}`}>

                    <button className="view">

                      View

                    </button>

                  </Link>

                  <button
                    className="delete"
                    onClick={() =>
                      removeFavorite(car.id)
                    }
                  >

                    Remove

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Favorites;