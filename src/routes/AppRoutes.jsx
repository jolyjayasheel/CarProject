import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import AddCar from "../pages/AddCar";
import EditCar from "../pages/EditCar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/cars" element={<Cars />} />

      <Route path="/car/:id" element={<CarDetails />} />

      <Route path="/add-car" element={<AddCar />} />

      <Route path="/edit/:id" element={<EditCar />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/favorites" element={<Favorites />} />

    </Routes>
  );
}

export default AppRoutes;