import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function CarCard({ car }) {

  const loggedIn = localStorage.getItem("loggedIn");

  const addToFavorites = () => {

    if (!loggedIn) {

      toast.warning(" Please login first!");

      return;

    }

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (item) => item.id === car.id
    );

    if (!exists) {

      favorites.push(car);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      toast.success(" Added to Favorites");

    } else {

      toast.info("Already in Favorites");

    }

  };

  const handleEdit = () => {

    if (!loggedIn) {

      toast.warning(" Please login first!");

    }

  };

  const deleteCar = async () => {

    if (!loggedIn) {

      toast.warning(" Please login first!");

      return;

    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/cars/${car.id}`);

      toast.success("🗑 Car Deleted Successfully");

      setTimeout(() => {

        window.location.reload();

      }, 1000);

    } catch {

      toast.error("Delete Failed");

    }

  };

  return (

    <div className="car-card">

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

          {loggedIn ? (

            <Link to={`/edit/${car.id}`}>
              <button className="edit">
                Edit
              </button>
            </Link>

          ) : (

            <button
              className="edit"
              onClick={handleEdit}
            >
              Edit
            </button>

          )}

          <button
            className="fav"
            onClick={addToFavorites}
          >
            Favorite
          </button>

          <button
            className="delete"
            onClick={deleteCar}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default CarCard;