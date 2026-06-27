import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/form.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await api.get("/users");

      const foundUser = response.data.find(

        (user) =>

          user.email === email &&
          user.password === password

      );

      if (!foundUser) {

        toast.error(" Invalid Email or Password");

        return;

      }

      localStorage.setItem("loggedIn", "true");

      localStorage.setItem(
        "currentUser",
        JSON.stringify(foundUser)
      );

      toast.success(`Welcome ${foundUser.name} 👋`);

      setTimeout(() => {

        navigate("/");

        window.location.reload();

      }, 1200);

    } catch (error) {

      console.log(error);

      toast.error("Login Failed");

    }

  };

  return (

    <div className="form-container">

      <form
        className="form-card"
        onSubmit={handleLogin}
      >

        <h2>Welcome Back</h2>

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