import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config.js";

export default function HotelsPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/hotels`)
    
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener hoteles:", err);
        setError("No se pudieron cargar los hoteles.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando hoteles...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Nuestros Hoteles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={hotel.image} alt={hotel.name} className="rounded-lg w-full h-48 object-cover" />
            <h2 className="text-2xl mt-4">{hotel.name}</h2>
            <p className="mt-2">{hotel.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
