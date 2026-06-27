import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/form.css";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // Check if email already exists
      const response = await api.get("/users");

      const exists = response.data.find(
        (u) => u.email === user.email
      );

      if (exists) {

        toast.error("Email already registered!");

        return;

      }

      // Create new user
      await api.post("/users", {
        ...user,
        favorites: []
      });

      toast.success("🎉 Registration Successful!");

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch {

      toast.error("Registration Failed");

    }

  };

  return (

    <div className="form-container">

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit">

          Register

        </button>

        <p className="bottom-text">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </form>

    </div>

  );

}

export default Register;