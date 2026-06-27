import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn");

  const user = JSON.parse(localStorage.getItem("user"));

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const handleLogout = () => {

    localStorage.removeItem("loggedIn");

    navigate("/");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      <div className="logo">

        <Link to="/">
          <h2>🏎 Midnight Motors</h2>
        </Link>

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cars">Cars</Link>
        </li>

        {!loggedIn && (

          <>
            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </>

        )}

        {loggedIn && (

          <>
            <li>
              <Link to="/add-car">
                Add Car
              </Link>
            </li>

            <li>
              <Link to="/favorites">
                Favorites ({favorites.length})
              </Link>
            </li>

            <li
              style={{
                color: "#ddd",
                fontWeight: "bold"
              }}
            >
              👋 {user?.name}
            </li>

            <li>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </li>

          </>

        )}

      </ul>

    </nav>

  );

}

export default Navbar;