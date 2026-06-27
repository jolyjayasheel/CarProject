import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/form.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      email === user.email &&
      password === user.password
    ) {

      localStorage.setItem("loggedIn", "true");

      toast.success("🎉 Login Successful!");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1500);

    } else {

      toast.error(" Invalid Email or Password");

    }

  };

  return (

    <div className="form-container">

      <form className="form-card" onSubmit={handleLogin}>

        <h2>Welcome Back 👋</h2>


        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

        <p className="bottom-text">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;