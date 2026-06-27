import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn");

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const logout = () => {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    toast.success("👋 Logged Out Successfully");

    setTimeout(() => {

      navigate("/login");

      window.location.reload();

    }, 1000);

  };

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >

        🏎 Midnight Motors

      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/cars">Cars</Link>

        <Link to="/favorites">
          Favorites
        </Link>

        {loggedIn ? (

          <>

            <span className="welcome">

              👋 {currentUser?.name}

            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >

              Logout

            </button>

          </>

        ) : (

          <>

            <Link to="/login">

              Login

            </Link>

            <Link to="/register">

              Register

            </Link>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;