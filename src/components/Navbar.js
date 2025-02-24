import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Tu Hotel</h1>
        <div>
          <Link to="/" className="px-3">Inicio</Link>
          <Link to="/hotels" className="px-3">Hoteles</Link>
          {token ? (
            <button onClick={handleLogout} className="px-3 bg-red-500 text-white rounded">
              Cerrar Sesión
            </button>
          ) : (
            <>
              <Link to="/login" className="px-3">Login</Link>
              <Link to="/register" className="px-3">Registro</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
