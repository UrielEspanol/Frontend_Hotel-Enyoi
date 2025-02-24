import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 w-96 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-2"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
